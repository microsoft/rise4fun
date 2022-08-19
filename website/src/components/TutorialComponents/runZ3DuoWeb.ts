import type { evalZ3JS } from '../../eval-z3/eval-z3';
import { type Z3HighLevel, Z3LowLevel } from 'z3-solver';
import { init } from 'z3-solver';
declare let { Context, setParam }: Awaited<ReturnType<typeof init>>;
declare let Z3: ReturnType<typeof Context<'main'>>;

declare global {
    interface Window { z3Promise: Promise<Z3HighLevel & Z3LowLevel> } // use any to escape typechecking
}


export default async function runZ3DuoWeb(user_input: string, secret_input: string): Promise<string> {

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const z3 = require('z3-solver');

    // init z3
    const z3p: Promise<Z3HighLevel & Z3LowLevel> = window.z3Promise || (() => {
        return window.z3Promise = z3.init();
    })();

    const { Z3: Z3Core, Context } = await z3p;
    let Z3 = Context('main');

    let output = '';
    let error = '';

    try {
        const s1 = new Z3.Solver();
        const s2 = new Z3.Solver();
        s1.fromString(user_input);
        s2.fromString(secret_input);

        const not_user = Z3.Not(Z3.And(s1.assertions()));
        const not_secret = Z3.Not(Z3.And(s2.assertions()));
        s2.add(not_user);
        s1.add(not_secret);

        const secret_not_user = await s2.check();
        const user_not_secret = await s1.check();

        const sat = (s: string) => s === 'sat';

        if (sat(secret_not_user) && sat(user_not_secret)) {
            output = `${s1.model().sexpr()}\nsatisfies your formula but not the secret formula;\n
            ${s2.model().sexpr()}\nsatisfies the secret formula but not your formula.`;
        } else if (sat(secret_not_user)) {
            output = `${s2.model().sexpr()} satisfies the secret formula but not yours`;
        } else if (sat(user_not_secret)) {
            output = `${s1.model().sexpr()} satisfies the your formula but not the secret formula`;
        } else { // both unsat
            output = `You got the right formula! Congratulations!`;
        }
    } catch (e) {
        // error with running z3
        error = e.message ?? 'Error message is empty';
    }
    console.log(error)
    // we are guaranteed to have non-undefined output and error
    return JSON.stringify({ output: String(output), error: error });
}
