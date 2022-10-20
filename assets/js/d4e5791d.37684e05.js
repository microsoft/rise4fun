"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7654],{9875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var o=t(3117),a=(t(7294),t(3905)),i=t(7634),r=t.n(i);const s={title:"Proof Logs",sidebar_position:6},l="Inference logs and proofs",c={unversionedId:"Proof Logs",id:"Proof Logs",title:"Proof Logs",description:"Z3 version 4.12.0 exposes new functionality to capture inferences.",source:"@site/docs-programming/06 - Proof Logs.md",sourceDirName:".",slug:"/Proof Logs",permalink:"/z3guide/programming/Proof Logs",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-programming/06 - Proof Logs.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Proof Logs",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/z3guide/programming/API Reference"}},d={},f=[{value:"Callbacks for clause inferences",id:"callbacks-for-clause-inferences",level:2},{value:"Print inferences created during search",id:"print-inferences-created-during-search",level:3},{value:"Capture just quantifier instantiations",id:"capture-just-quantifier-instantiations",level:3},{value:"Monitor clauses annotated with detailed justifications",id:"monitor-clauses-annotated-with-detailed-justifications",level:3},{value:"Monitor proof objects from the new core",id:"monitor-proof-objects-from-the-new-core",level:3},{value:"Saving and restoring inferences to and from files",id:"saving-and-restoring-inferences-to-and-from-files",level:2},{value:"Parse the logged inferences and replay them",id:"parse-the-logged-inferences-and-replay-them",level:3},{value:"Parse the logged inferences and check them",id:"parse-the-logged-inferences-and-check-them",level:3},{value:"Verify and self-validate on the fly",id:"verify-and-self-validate-on-the-fly",level:3},{value:"Verify and self-validate on the fly, but don&#39;t check rup",id:"verify-and-self-validate-on-the-fly-but-dont-check-rup",level:3},{value:"Command line uses",id:"command-line-uses",level:2},{value:"Inferences",id:"inferences",level:2},{value:"Proof Hints",id:"proof-hints",level:3},{value:"A sample session with proof logs",id:"a-sample-session-with-proof-logs",level:2}],u={toc:f};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inference-logs-and-proofs"},"Inference logs and proofs"),(0,a.kt)("p",null,"Z3 version 4.12.0 exposes new functionality to capture inferences.\nThere is an API extension to register a callback that is invoked\nwhenever the main SMT engine infers a clause. It is also possible to\nsave inferred clauses together with proof ",(0,a.kt)("em",{parentName:"p"},"hints")," that justify them.\nWe use the terminology ",(0,a.kt)("em",{parentName:"p"},"hint")," because the justifications are ",(0,a.kt)("em",{parentName:"p"},"big step"),"\ninferences. Some of the steps can be checked by lean self-contained\nproof checkers, other steps do not contain detailed guidance that would allow\nefficient validation. They require checking using general purpose SMT solving."),(0,a.kt)("p",null,"Proof terms have been supported from Z3 since 2008. They have been used in various settings,\nincluding for replaying tactics in Isabelle, for generation of interpolants, and for extracting\nseparating hyper-planes from linear programming proofs (Farkas lemma). A separate format\nis used to trace inference steps for proof mining. Proof logs allow to simplify some of the\ninfrastructure around proof reconstruction during search and for proof mining. The same logs\ncan be targetted for the different use cases. "),(0,a.kt)("h2",{id:"callbacks-for-clause-inferences"},"Callbacks for clause inferences"),(0,a.kt)("p",null,"The API exposes a function ",(0,a.kt)("inlineCode",{parentName:"p"},"Z3_solver_register_on_clause"),"\nthat is first exposed for C, C++, .Net and Python. We here illustrate using\nit from Python. The function lets a client register a callback function that is\ninvoked whenever the main SMT search engine makes an inference. The main inference\nsteps are (1) introducing an ",(0,a.kt)("em",{parentName:"p"},"assumption"),", that is, a clause that is entained from the\ninput formula (formally, the clause is satisfiability preserving when added to the input formula),\n(2) ",(0,a.kt)("em",{parentName:"p"},"deleting")," a clause from the set of active clauses,\n(3) ",(0,a.kt)("em",{parentName:"p"},"rup"),", inferring a clause through propositional reasoning, the clause can be justified using\n",(0,a.kt)("em",{parentName:"p"},"reverse unit propagation"),",\n(4) ",(0,a.kt)("em",{parentName:"p"},"smt"),", or other ",(0,a.kt)("em",{parentName:"p"},"theory")," rule, when a clause is added as a theory tautology."),(0,a.kt)("h3",{id:"print-inferences-created-during-search"},"Print inferences created during search"),(0,a.kt)(r(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:'def monitor_plain():\n    print("Monitor all inferred clauses")\n    s = Solver()\n    s.from_string(example1)\n    onc = OnClause(s, lambda pr, clause : print(pr, clause))\n    print(s.check())',result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,a.kt)("h3",{id:"capture-just-quantifier-instantiations"},"Capture just quantifier instantiations"),(0,a.kt)("p",null,"Applications that only need to monitor quantifier instantiations can filter the stream\nbased on the name of the proof hint."),(0,a.kt)(r(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:'def log_instance(pr, clause):\n    if pr.decl().name() == "inst":\n        q = pr.arg(0).arg(0) # first argument is Not(q)\n        for ch in pr.children():\n            if ch.decl().name() == "bind":\n                print("Binding")\n                print(q)\n                print(ch.children())\n                break\n\ndef monitor_instances():\n    print("Monitor just quantifier bindings")\n    s = Solver()\n    s.from_string(example1)\n    onc = OnClause(s, log_instance)\n    print(s.check())',result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,a.kt)("h3",{id:"monitor-clauses-annotated-with-detailed-justifications"},"Monitor clauses annotated with detailed justifications"),(0,a.kt)("p",null,"If you set proof mode to ",(0,a.kt)("em",{parentName:"p"},"true"),", then the inferred clauses\nare annotated by more detailed proof terms. The detailed proof terms\nuse a repetorire or low level inference rules."),(0,a.kt)(r(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"def monitor_with_proofs():\n    set_param(proof=True)\n    s = Solver()\n    s.from_string(example1)\n    onc = OnClause(s, lambda pr, clause : print(pr, clause))\n    print(s.check())",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,a.kt)("h3",{id:"monitor-proof-objects-from-the-new-core"},"Monitor proof objects from the new core"),(0,a.kt)("p",null,"An SMT core based on Z3's better tuned SAT solver is accessible if you set the option\n",(0,a.kt)("inlineCode",{parentName:"p"},"sat.euf=true")," and force it by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"tactic.default_tactic=sat")," (or to ",(0,a.kt)("inlineCode",{parentName:"p"},"smt"),").\nProof logs have a different format from the ",(0,a.kt)("em",{parentName:"p"},"legacy")," core. Many inferences in this format\ncan be checked efficiently by built-in validators."),(0,a.kt)(r(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:'def monitor_new_core():\n    set_param("sat.euf", True)\n    set_param("tactic.default_tactic", "sat")\n    s = Solver()\n    s.from_string(example1)\n    onc = OnClause(s, lambda pr, clause : print(pr, clause))\n    print(s.check())',result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,a.kt)("h2",{id:"saving-and-restoring-inferences-to-and-from-files"},"Saving and restoring inferences to and from files"),(0,a.kt)("p",null,"Inference logging, replay, and checking is supported for\nthe core enabled by setting sat.euf = true.\nsetting the default tactic to 'sat' bypasses other tactics that could\nend up using different solvers.  "),(0,a.kt)(r(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:'    set_param("sat.euf", True)\n    set_param("tactic.default_tactic", "sat")\n\n    # Set a log file to trace inferences\n    set_param("sat.smt.proof", "proof_log.smt2")\n    s = Solver()\n    s.from_string(example1)\n    print(s.check())',result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,a.kt)("h3",{id:"parse-the-logged-inferences-and-replay-them"},"Parse the logged inferences and replay them"),(0,a.kt)("p",null,"You can also replay inferences when parsing a previously saved inferences."),(0,a.kt)(r(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:'    # Turn off proof checking. It is on by default when parsing proof logs.\n    set_param("solver.proof.check", False)      \n    s = Solver()\n    onc = OnClause(s, lambda pr, clause : print(pr, clause))\n    s.from_file("proof_log.smt2")',result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,a.kt)("p",null,"This feature can be used when proof logs are produced using a command-line process.\nLog reconstruction is decoupled form the shell process."),(0,a.kt)("h3",{id:"parse-the-logged-inferences-and-check-them"},"Parse the logged inferences and check them"),(0,a.kt)("p",null,"Now turn on proof checking. It invokes the self-validator.\nThe self-validator produces log lines of the form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   (proofs +tseitin 60 +alldiff 8 +euf 3 +rup 5 +inst 6 -quant 3 -inst 2)\n   (verified-smt\n     (inst (forall (vars (x T) (y T) (z T)) (or (subtype (:var 2) (:var 1)) ...\n")),(0,a.kt)("p",null,"The 'proofs' line summarizes inferences that were self-validated.\nThe pair +tseitin 60 indicates that 60 inferences were validated as Tseitin\nencodings.\nThe pair ",(0,a.kt)("inlineCode",{parentName:"p"},"-inst 2")," indicates that two quantifier instantiations were not self-validated\nThey were instead validated using a call to SMT solving. A log for an smt invocation\nis exemplified in the next line.\nNote that the pair ",(0,a.kt)("inlineCode",{parentName:"p"},"+inst 6")," indicates that 6 quantifier instantations were validated\nusing a syntactic (cheap) check. Some quantifier instantiations based on quantifier elimination\nare not simple substitutions and therefore a simple syntactic check does not suffice."),(0,a.kt)(r(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:'    s = Solver()\n    set_param("solver.proof.check", True)\n    s.from_file("proof_log.smt2")',result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,a.kt)("h3",{id:"verify-and-self-validate-on-the-fly"},"Verify and self-validate on the fly"),(0,a.kt)("p",null,"Proof checking (self-validation) is on by default. In case someone turned it off we force it to be on in the following."),(0,a.kt)(r(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:'    set_param("sat.smt.proof.check", True)\n    s = Solver()\n    s.from_string(example1)\n    print(s.check())',result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,a.kt)("h3",{id:"verify-and-self-validate-on-the-fly-but-dont-check-rup"},"Verify and self-validate on the fly, but don't check rup"),(0,a.kt)("p",null,"Self-validation checks all inferences. Inferences that use theory lemmas can be checked locally without considering other inferences. Inferences that are annotated by ",(0,a.kt)("inlineCode",{parentName:"p"},"rup")," (reverse unit propagation) are justified using global inferences (unit propagation). Checking ",(0,a.kt)("inlineCode",{parentName:"p"},"rup")," during search can be very expensive. You can turn off ",(0,a.kt)("inlineCode",{parentName:"p"},"rup")," checking\nselectively to speed up validation for theory lemmas."),(0,a.kt)(r(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:'    set_param("sat.smt.proof.check", True)\n    set_param("sat.smt.proof.check_rup", False)\n    s = Solver()\n    s.from_string(example1)\n    print(s.check())',result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,a.kt)("h2",{id:"command-line-uses"},"Command line uses"),(0,a.kt)("p",null,"From the command-line you can enable self-validation using the parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   z3 <file.smt2> sat.euf=true tactic.default_tactic=smt sat.smt.proof.check=true\n")),(0,a.kt)("p",null,"You can disable ",(0,a.kt)("inlineCode",{parentName:"p"},"rup")," checking "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   z3 <file.smt2> sat.euf=true tactic.default_tactic=smt sat.smt.proof.check=true sat.smt.proof.check_rup=false\n")),(0,a.kt)("p",null,"To save proof logs, but not check them, use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"z3 <file.smt2> sat.euf=true tactic.default_tactic=smt sat.smt.proof=<logfile.smt2>\n")),(0,a.kt)("h2",{id:"inferences"},"Inferences"),(0,a.kt)("p",null,"Inferences are printed in a mild extension of SMTLIB2. The extension has three new commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(infer clause proof_hint)\n(del clause)\n(assume clause)\n")),(0,a.kt)("p",null,"where a proof hint is a proof term that is either a detailed set of inference steps or a\ngeneric inference that requires a proof checker that understands more than a set of simple\nsyntactic inferences."),(0,a.kt)("h3",{id:"proof-hints"},"Proof Hints"),(0,a.kt)("p",null,"The format of proof hints is set up so it can be extended when new features are added.\nCommon to proof hints is that every proof hint encodes a claim in the form of a clause.\nA proof hint should justify the clause.\nWe defer a detailed documentation of proof hints but summarize some of the main hints in use:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"tseitin")," - The claim is justified by a Tseitin transformation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"euf")," - The claim follows from equality reasoning."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"inst")," - A quantifier is instantiated using a binding given in the hint."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"farkas")," - The negation of the claim is a conjunction of inequalities. The farkas hint contains coefficients such that the inequalities, when added modulo multiplying with coefficients, sum up to a tight and inconsistent inequality."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"bound")," - An inequality is derived using a combination of inequalities and cuts"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"implied-eq")," - An implied inequality can be derived from a set of inequalities and equalities.")),(0,a.kt)("h2",{id:"a-sample-session-with-proof-logs"},"A sample session with proof logs"),(0,a.kt)("p",null,"We have the following formula"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(set-option :sat.euf true)\n(set-option :tactic.default_tactic smt)\n(set-option :sat.smt.proof=proof_log.smt2)\n(declare-fun d (Int Int) Int)\n(declare-fun t (Int Int Real) (Array Int (Array Int Real)))\n(assert (forall ((u Int) (v Real)) (= v (select (select (t v (d 1 0) (d 0 u)) 0) 0))))\n(check-sat)\n")),(0,a.kt)("p",null,"It produces a proof log of the form"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(declare-fun t (Int Int Real) (Array Int (Array Int Real)))\n(declare-fun d (Int Int) Int)\n(define-const $33 Bool (forall ((u Int) (v Real))\n  (let ((a!1 (select (t (to_int v) (d 1 0) (to_real (d 0 u))) 0)))\n    (= v (select a!1 0)))))\n(assume $33)\n(assume true)\n(define-const $63 Int (d 0 0))\n(define-const $64 Real (to_real $63))\n(define-const $25 Int (d 1 0))\n(define-const $72 (Array Int (Array Int Real)) (t (- 1) $25 $64))\n(define-const $73 (Array Int Real) (select $72 0))\n(define-const $74 Real (select $73 0))\n(define-const $75 Bool (= (- 1.0) $74))\n(declare-fun inst (Bool Bool Proof) Proof)\n(declare-fun bind (Int Real) Proof)\n(define-const $61 Proof (bind 0 (- 1.0)))\n(define-const $76 Bool (not $75))\n(define-const $65 Proof (inst $33 $76 $61))\n(infer $75 $65)\n(define-const $105 Int (d 0 $63))\n(define-const $106 Real (to_real $105))\n(define-const $113 (Array Int (Array Int Real)) (t (- 1) $25 $106))\n(define-const $114 (Array Int Real) (select $113 0))\n(define-const $115 Real (select $114 0))\n(define-const $116 Bool (= (- (/ 1.0 2.0)) $115))\n(define-const $109 Proof (bind $63 (- (/ 1.0 2.0))))\n(define-const $117 Bool (not $116))\n(define-const $57 Proof (inst $33 $117 $109))\n(infer $116 $57)\n(define-const $123 Bool (= (- (/ 3.0 4.0)) $115))\n(define-const $110 Proof (bind $63 (- (/ 3.0 4.0))))\n(define-const $124 Bool (not $123))\n(define-const $102 Proof (inst $33 $124 $110))\n(infer $123 $102)\n(declare-fun euf (Bool Bool) Proof)\n(define-const $41 Proof (euf $123 $116))\n(infer $41)\n(declare-fun rup () Proof)\n(infer rup)\n")),(0,a.kt)("p",null,"The log is mildly speaking not human readable. But you can use scripts to read the log."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from z3 import *\nset_param("solver.proof.check", False)\ns = Solver()\nonc = OnClause(s, print)\ns.from_file("proof_log.smt2")\n')),(0,a.kt)("p",null,"The result is easier to digest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"assumption [ForAll([u, v],\n        v == t(ToInt(v), d(1, 0), ToReal(d(0, u)))[0][0])]\nassumption [True]\ninst(ForAll([u, v],\n            v == t(ToInt(v), d(1, 0), ToReal(d(0, u)))[0][0]),\n     Not(-1 == t(-1, d(1, 0), ToReal(d(0, 0)))[0][0]),\n     bind(0, -1)) [-1 == t(-1, d(1, 0), ToReal(d(0, 0)))[0][0]]\ninst(ForAll([u, v],\n            v == t(ToInt(v), d(1, 0), ToReal(d(0, u)))[0][0]),\n     Not(-(1/2) ==\n         t(-1, d(1, 0), ToReal(d(0, d(0, 0))))[0][0]),\n     bind(d(0, 0), -(1/2))) [-(1/2) == t(-1, d(1, 0), ToReal(d(0, d(0, 0))))[0][0]]\ninst(ForAll([u, v],\n            v == t(ToInt(v), d(1, 0), ToReal(d(0, u)))[0][0]),\n     Not(-(3/4) ==\n         t(-1, d(1, 0), ToReal(d(0, d(0, 0))))[0][0]),\n     bind(d(0, 0), -(3/4))) [-(3/4) == t(-1, d(1, 0), ToReal(d(0, d(0, 0))))[0][0]]\neuf(-(3/4) == t(-1, d(1, 0), ToReal(d(0, d(0, 0))))[0][0],\n    -(1/2) == t(-1, d(1, 0), ToReal(d(0, d(0, 0))))[0][0]) []\nrup []\n")),(0,a.kt)("p",null,"SMT proofs are of course generally much larger."))}p.isMDXComponent=!0}}]);