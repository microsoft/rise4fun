"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6772],{2129:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=t(3117),r=(t(7294),t(3905));t(3234);const s={title:"Fixedpoints",sidebar_position:4},i="Fixedpoints",l={unversionedId:"Programming Z3/Using Z3 from Python/Fixedpoints",id:"Programming Z3/Using Z3 from Python/Fixedpoints",title:"Fixedpoints",description:"This tutorial illustrates uses of Z3's fixedpoint engine.",source:"@site/docs/07 - Programming Z3/01 - Using Z3 from Python/04 - Fixedpoints.md",sourceDirName:"07 - Programming Z3/01 - Using Z3 from Python",slug:"/Programming Z3/Using Z3 from Python/Fixedpoints",permalink:"/z3guide/docs/Programming Z3/Using Z3 from Python/Fixedpoints",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/07 - Programming Z3/01 - Using Z3 from Python/04 - Fixedpoints.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Fixedpoints",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Strategies",permalink:"/z3guide/docs/Programming Z3/Using Z3 from Python/Strategies"},next:{title:"Cores and Satisfying Subsets",permalink:"/z3guide/docs/Programming Z3/Using Z3 from Python/Cores and Satisfying Subsets"}},o={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Datalog",id:"basic-datalog",level:2},{value:"Relations, rules and queries",id:"relations-rules-and-queries",level:3},{value:"Explanations",id:"explanations",level:3},{value:"Relations with arguments",id:"relations-with-arguments",level:3},{value:"Procedure Calls",id:"procedure-calls",level:3},{value:"Bakery",id:"bakery",level:3},{value:"Functional Programs",id:"functional-programs",level:3}],f={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fixedpoints"},"Fixedpoints"),(0,r.kt)("p",null,"This tutorial illustrates uses of Z3's fixedpoint engine.\nThe following papers"),(0,r.kt)("a",{href:"http://research.microsoft.com/en-us/people/nbjorner/z3fix.pdf"},"\u03bcZ - An Efficient Engine for Fixed-Points with Constraints."),"(CAV 2011) and",(0,r.kt)("a",{href:"http://research.microsoft.com/en-us/people/nbjorner/z3pdr.pdf"},"Generalized Property Directed Reachability")," (SAT 2012) describe some of the main features of the engine.",(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This tutorial covers some of the fixedpoint utilities available with Z3.\nThe main features are a basic Datalog engine, an engine with relational\nalgebra and an engine based on a generalization of the Property\nDirected Reachability algorithm."),(0,r.kt)("h2",{id:"basic-datalog"},"Basic Datalog"),(0,r.kt)("p",null,"The default fixed-point engine is a bottom-up Datalog engine.\nIt works with finite relations and uses finite table representations\nas hash tables as the default way to represent finite relations."),(0,r.kt)("h3",{id:"relations-rules-and-queries"},"Relations, rules and queries"),(0,r.kt)("p",null,"The first example illustrates how to declare relations, rules and\nhow to pose queries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"fp = Fixedpoint()\n\na, b, c = Bools('a b c')\n\nfp.register_relation(a.decl(), b.decl(), c.decl())\nfp.rule(a,b)\nfp.rule(b,c)\nfp.set(engine='datalog')\n\nprint \"current set of rules\\n\", fp\nprint fp.query(a)\n\nfp.fact(c)\nprint \"updated set of rules\\n\", fp\nprint fp.query(a)\nprint fp.get_answer()\n")),(0,r.kt)("p",null,"The example illustrates some of the basic constructs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  fp = Fixedpoint()\n")),(0,r.kt)("p",null,"creates a context for fixed-point computation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," fp.register_relation(a.decl(), b.decl(), c.decl())\n")),(0,r.kt)("p",null,"Register the relations ",(0,r.kt)("tt",null,"a, b, c")," as recursively defined."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," fp.rule(a,b)\n")),(0,r.kt)("p",null,"Create the rule that ",(0,r.kt)("tt",null,"a")," follows from ",(0,r.kt)("tt",null,"b"),".\nIn general you can create a rule with multiple premises and a name using\nthe format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," fp.rule(_head_,[_body1,...,bodyN_],_name_)\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"name")," is optional. It is used for tracking the rule in derivation proofs."),(0,r.kt)("p",null,"Continuing with the example, ",(0,r.kt)("tt",null,"a")," is false unless ",(0,r.kt)("tt",null,"b")," is established."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," fp.query(a)\n")),(0,r.kt)("p",null,"Asks if ",(0,r.kt)("tt",null,"a")," can be derived. The rules so far say that ",(0,r.kt)("tt",null,"a"),"\nfollows if ",(0,r.kt)("tt",null,"b")," is established and that ",(0,r.kt)("tt",null,"b")," follows if ",(0,r.kt)("tt",null,"c"),"\nis established. But nothing establishes ",(0,r.kt)("tt",null,"c")," and ",(0,r.kt)("tt",null,"b")," is also not\nestablished, so ",(0,r.kt)("tt",null,"a")," cannot be derived."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," fp.fact(c)\n")),(0,r.kt)("p",null,"Add a fact (shorthand for ",(0,r.kt)("tt",null,"fp.rule(c,True)"),").\nNow it is the case that ",(0,r.kt)("tt",null,"a")," can be derived."),(0,r.kt)("h3",{id:"explanations"},"Explanations"),(0,r.kt)("p",null,"It is also possible to get an explanation for a derived query.\nFor the finite Datalog engine, an explanation is a trace that\nprovides information of how a fact was derived. The explanation\nis an expression whose function symbols are Horn rules and facts used\nin the derivation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nfp = Fixedpoint()\n\na, b, c = Bools('a b c')\n\nfp.register_relation(a.decl(), b.decl(), c.decl())\nfp.rule(a,b)\nfp.rule(b,c)\nfp.fact(c)\nfp.set(generate_explanations=True, engine='datalog')\nprint fp.query(a)\nprint fp.get_answer()\n\n")),(0,r.kt)("h3",{id:"relations-with-arguments"},"Relations with arguments"),(0,r.kt)("p",null,"Relations can take arguments. We illustrate relations with arguments\nusing edges and paths in a graph."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"fp = Fixedpoint()\nfp.set(engine='datalog')\n\ns = BitVecSort(3)\nedge = Function('edge', s, s, BoolSort())\npath = Function('path', s, s, BoolSort())\na = Const('a',s)\nb = Const('b',s)\nc = Const('c',s)\n\nfp.register_relation(path,edge)\nfp.declare_var(a,b,c)\nfp.rule(path(a,b), edge(a,b))\nfp.rule(path(a,c), [edge(a,b),path(b,c)])\n\nv1 = BitVecVal(1,s)\nv2 = BitVecVal(2,s)\nv3 = BitVecVal(3,s)\nv4 = BitVecVal(4,s)\n\nfp.fact(edge(v1,v2))\nfp.fact(edge(v1,v3))\nfp.fact(edge(v2,v4))\n\nprint \"current set of rules\", fp\n\n\nprint fp.query(path(v1,v4)), \"yes we can reach v4 from v1\"\n\nprint fp.query(path(v3,v4)), \"no we cannot reach v4 from v3\"\n\n")),(0,r.kt)("p",null,"The example uses the declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," fp.declare_var(a,b,c)\n")),(0,r.kt)("p",null,"to instrument the fixed-point engine that ",(0,r.kt)("tt",null,"a, b, c"),"\nshould be treated as variables\nwhen they appear in rules. Think of the convention as they way bound variables are\npassed to quantifiers in Z3Py."),(0,r.kt)("h3",{id:"procedure-calls"},"Procedure Calls"),(0,r.kt)("p",null,"McCarthy's 91 function illustrates a procedure that calls itself recursively\ntwice. The Horn clauses below encode the recursive function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  mc(x) = if x > 100 then x - 10 else mc(mc(x+11))\n")),(0,r.kt)("p",null,"The general scheme for encoding recursive procedures is by creating a predicate\nfor each procedure and adding an additional output variable to the predicate.\nNested calls to procedures within a body can be encoded as a conjunction\nof relations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nmc = Function('mc', IntSort(), IntSort(), BoolSort())\nn, m, p = Ints('n m p')\n\nfp = Fixedpoint()\n\nfp.declare_var(n,m)\nfp.register_relation(mc)\n\nfp.rule(mc(m, m-10), m > 100)\nfp.rule(mc(m, n), [m <= 100, mc(m+11,p),mc(p,n)])\n    \nprint fp.query(And(mc(m,n),n < 90))\nprint fp.get_answer()\n\nprint fp.query(And(mc(m,n),n < 91))\nprint fp.get_answer()\n\nprint fp.query(And(mc(m,n),n < 92))\nprint fp.get_answer()\n")),(0,r.kt)("p",null,"The first two queries are unsatisfiable. The PDR engine produces the same proof of unsatisfiability.\nThe proof is an inductive invariant for each recursive predicate. The PDR engine introduces a\nspecial query predicate for the query."),(0,r.kt)("h3",{id:"bakery"},"Bakery"),(0,r.kt)("p",null,"We can also prove invariants of reactive systems. It is convenient to encode reactive systems\nas guarded transition systems. It is perhaps for some not as convenient to directly encode\nguarded transitions as recursive Horn clauses. But it is fairly easy to write a translator\nfrom guarded transition systems to recursive Horn clauses. We illustrate a translator\nand Lamport's two process Bakery algorithm in the next example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'set_option(relevancy=0,verbose=1)\n\ndef flatten(l):\n    return [s for t in l for s in t]\n\n\nclass TransitionSystem():\n    def __init__(self, initial, transitions, vars1):\n    self.fp = Fixedpoint()        \n    self.initial     = initial\n    self.transitions = transitions\n    self.vars1 = vars1\n\n    def declare_rels(self):\n    B = BoolSort()\n    var_sorts   = [ v.sort() for v in self.vars1 ]\n    state_sorts = var_sorts\n    self.state_vals = [ v for v in self.vars1 ]\n    self.state_sorts  = state_sorts\n    self.var_sorts = var_sorts\n    self.state  = Function(\'state\', state_sorts + [ B ])\n    self.step   = Function(\'step\',  state_sorts + state_sorts + [ B ])\n    self.fp.register_relation(self.state)\n    self.fp.register_relation(self.step)\n\n# Set of reachable states are transitive closure of step.\n\n    def state0(self):\n    idx = range(len(self.state_sorts))\n    return self.state([Var(i,self.state_sorts[i]) for i in idx])\n    \n    def state1(self):\n    n = len(self.state_sorts)\n    return self.state([Var(i+n, self.state_sorts[i]) for i in range(n)])\n\n    def rho(self):\n    n = len(self.state_sorts)\n    args1 = [ Var(i,self.state_sorts[i]) for i in range(n) ]\n    args2 = [ Var(i+n,self.state_sorts[i]) for i in range(n) ]\n    args = args1 + args2 \n    return self.step(args)\n\n    def declare_reachability(self):\n    self.fp.rule(self.state1(), [self.state0(), self.rho()])\n\n\n# Define transition relation\n\n    def abstract(self, e):\n    n = len(self.state_sorts)\n    sub = [(self.state_vals[i], Var(i,self.state_sorts[i])) for i in range(n)]\n    return substitute(e, sub)\n    \n    def declare_transition(self, tr):\n    len_s  = len(self.state_sorts)\n    effect = tr["effect"]\n    vars1  = [Var(i,self.state_sorts[i]) for i in range(len_s)] + effect\n    rho1  = self.abstract(self.step(vars1))\n    guard = self.abstract(tr["guard"])\n    self.fp.rule(rho1, guard)\n    \n    def declare_transitions(self):\n    for t in self.transitions:\n        self.declare_transition(t)\n\n    def declare_initial(self):\n    self.fp.rule(self.state0(),[self.abstract(self.initial)])\n    \n    def query(self, query):\n    self.declare_rels()\n    self.declare_initial()\n    self.declare_reachability()\n    self.declare_transitions()\n    query = And(self.state0(), self.abstract(query))\n    print self.fp\n    print query\n    print self.fp.query(query)\n    print self.fp.get_answer()\n#   print self.fp.statistics()\n\n\nL = Datatype(\'L\')\nL.declare(\'L0\')\nL.declare(\'L1\')\nL.declare(\'L2\')\nL = L.create()\nL0 = L.L0\nL1 = L.L1\nL2 = L.L2\n\n\ny0 = Int(\'y0\')\ny1 = Int(\'y1\')\nl  = Const(\'l\', L)\nm  = Const(\'m\', L)\n\n\nt1 = { "guard" : l == L0,\n       "effect" : [ L1, y1 + 1, m, y1 ] }\nt2 = { "guard" : And(l == L1, Or([y0 <= y1, y1 == 0])),\n       "effect" : [ L2, y0,     m, y1 ] }\nt3 = { "guard" : l == L2,\n       "effect" : [ L0, IntVal(0), m, y1 ]}\ns1 = { "guard" : m == L0,\n       "effect" : [ l,  y0, L1, y0 + 1 ] }\ns2 = { "guard" : And(m == L1, Or([y1 <= y0, y0 == 0])),\n       "effect" : [ l,  y0, L2, y1 ] }\ns3 = { "guard" : m == L2,\n       "effect" : [ l,  y0, L0, IntVal(0) ]}\n\n\nptr = TransitionSystem( And(l == L0, y0 == 0, m == L0, y1 == 0),\n            [t1, t2, t3, s1, s2, s3],\n            [l, y0, m, y1])\n\nptr.query(And([l == L2, m == L2 ]))\n\n')),(0,r.kt)("p",null,"The rather verbose (and in no way minimal) inductive invariants are produced as answers."),(0,r.kt)("h3",{id:"functional-programs"},"Functional Programs"),(0,r.kt)("p",null,"We can also verify some properties of functional programs using Z3's\ngeneralized PDR. Let us here consider an example from\n",(0,r.kt)("a",{parentName:"p",href:"http://www.kb.is.s.u-tokyo.ac.jp/~uhiro/"},"Predicate Abstraction and CEGAR for Higher-Order Model\nChecking, Kobayashi et.al. PLDI 2011"),".\nWe encode functional programs by taking a suitable operational\nsemantics and encoding an evaluator that is specialized to\nthe program being verified (we don't encode a general purpose\nevaluator, you should partial evaluate it to help verification).\nWe use algebraic data-types to encode the current closure that is\nbeing evaluated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n# let max max2 x y z = max2 (max2 x y) z\n# let f x y = if x > y then x else y\n# assert (f (max f x y z) x) = (max f x y z)\n\n\nExpr = Datatype('Expr')\nExpr.declare('Max')\nExpr.declare('f')\nExpr.declare('I', ('i', IntSort()))\nExpr.declare('App', ('fn',Expr),('arg',Expr))\nExpr = Expr.create()\nMax  = Expr.Max\nI    = Expr.I\nApp  = Expr.App\nf    = Expr.f\nEval = Function('Eval',Expr,Expr,Expr,BoolSort())\n\nx   = Const('x',Expr)\ny   = Const('y',Expr)\nz   = Const('z',Expr)\nr1  = Const('r1',Expr)\nr2  = Const('r2',Expr)\nmax = Const('max',Expr)\nxi  = Const('xi',IntSort())\nyi  = Const('yi',IntSort())\n\nfp = Fixedpoint()\nfp.register_relation(Eval)\nfp.declare_var(x,y,z,r1,r2,max,xi,yi)\n\n# Max max x y z = max (max x y) z\nfp.rule(Eval(App(App(App(Max,max),x),y), z, r2),\n    [Eval(App(max,x),y,r1),\n     Eval(App(max,r1),z,r2)])\n\n# f x y = x if x >= y\n# f x y = y if x < y\nfp.rule(Eval(App(f,I(xi)),I(yi),I(xi)),xi >= yi)\nfp.rule(Eval(App(f,I(xi)),I(yi),I(yi)),xi < yi)\n\nprint fp.query(And(Eval(App(App(App(Max,f),x),y),z,r1),\n           Eval(App(f,x),r1,r2),\n           r1 != r2))\n\nprint fp.get_answer()\n")))}d.isMDXComponent=!0}}]);