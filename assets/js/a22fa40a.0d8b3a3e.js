"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1226],{8669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(3117),o=(t(7294),t(3905));t(3234);const a={title:"User Propagators",sidebar_position:6},s=void 0,i={unversionedId:"Programming Z3/Using Z3 from Python/User Propagator",id:"Programming Z3/Using Z3 from Python/User Propagator",title:"User Propagators",description:"User propagators allow implementing custom theory solvers outside of z3.",source:"@site/docs/07 - Programming Z3/01 - Using Z3 from Python/06 - User Propagator.md",sourceDirName:"07 - Programming Z3/01 - Using Z3 from Python",slug:"/Programming Z3/Using Z3 from Python/User Propagator",permalink:"/z3guide/docs/Programming Z3/Using Z3 from Python/User Propagator",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/07 - Programming Z3/01 - Using Z3 from Python/06 - User Propagator.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"User Propagators",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Cores and Satisfying Subsets",permalink:"/z3guide/docs/Programming Z3/Using Z3 from Python/Cores and Satisfying Subsets"},next:{title:"Introduction",permalink:"/z3guide/docs/Programming Z3/interfaces/Introduction"}},l={},d=[{value:"A Problem Instance",id:"a-problem-instance",level:2},{value:"Propagate Functions",id:"propagate-functions",level:2},{value:"Axiomatizing RTCs",id:"axiomatizing-rtcs",level:2},{value:"Union Find",id:"union-find",level:2},{value:"Finally, the propagator",id:"finally-the-propagator",level:2},{value:"TC as a subclass",id:"tc-as-a-subclass",level:3},{value:"Handling assignments to fixed values",id:"handling-assignments-to-fixed-values",level:3},{value:"New Terms",id:"new-terms",level:3},{value:"Equality callbacks",id:"equality-callbacks",level:3},{value:"Final check",id:"final-check",level:3},{value:"Using the User Propagator",id:"using-the-user-propagator",level:2}],f={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"User propagators allow implementing custom theory solvers outside of z3.\nThe following example illustrates using propagators for solving over the\nreflexive transitive closure (RTC) of a binary relation over a finite domain.\nIt is possible to axiomatize the reflexive transitive closure as a finite lookup table,\nbut the representation explodes (quadratically) when the size of the finite domain is large."),(0,o.kt)("p",null,"We represent the relation outside of z3. For sake of simplicity the example maintains the RTC\nas a lookup table as well (so it does not scale as well as an an implicit representation of the RTC).\nIt also only implements a very basic set of rules for enforcing RTC over the finite domain.\nWe leave optimizations as a fun project you could explore while learning User Propagators.\nFor example, you can implement inference rules that check that the asserted binary relations\nare consistent with the rules of transitivity."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Programming decision procedures is generally not a trivial task. The UserPropagate API attempts to enable new decision procedures and keeping a relatively low barrier of entry. Nevertheless, even a simple theory that we are going to explore exhibits its own subtleties. Program user propagators at your own risk."))),(0,o.kt)("h2",{id:"a-problem-instance"},"A Problem Instance"),(0,o.kt)("p",null,"We take a problem instance from a user GitHub question on how to scale reasoning with RTC.\nThe smaller example uses two relations ",(0,o.kt)("inlineCode",{parentName:"p"},"<=Sort")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<=SortSyntax")," that are reflexive and transitive\nand they are defined over the finite enumeration sort ",(0,o.kt)("inlineCode",{parentName:"p"},"Sort"),". We elide the declarations of the\ntwo binary relations in the input and instead declare them outside of SMTLIB.\nThis allows us to declare the relations such that the propagator is notified whenever a new\npredicate over ",(0,o.kt)("inlineCode",{parentName:"p"},"<=Sort")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"<=SortSyntax")," is created."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pyhon"},'from z3 import *\n\nexample = """\n\n(declare-datatypes () ((Sort\n(|SortInt| )\n(|SortExp| )\n(|SortKItem| )\n(|SortKLabel| )\n(|SortK| )\n)))\n\n;(declare-fun <=Sort (Sort Sort) Bool)\n;(declare-fun <=SortSyntax (Sort Sort) Bool)\n\n\n(declare-const |FreshVarSort_6_8_6_36_#KRewrite| Sort)\n(declare-const |VarA| Sort)\n(declare-const |VarB| Sort)\n(declare-const |VarC| Sort)\n(declare-datatypes() ((SolutionVariables (SolVars (|Sol_VarA| Sort) (|Sol_VarB| Sort) (|Sol_VarC| Sort) ))))\n(declare-datatypes() ((Solution (Sol (vars SolutionVariables) (|Sol_FreshVarSort_6_8_6_36_#KRewrite| Sort) ))))\n(define-fun theSolution () Solution (Sol (SolVars |VarA| |VarB| |VarC| ) |FreshVarSort_6_8_6_36_#KRewrite| ))\n(define-fun lt ((s1 Solution) (s2 Solution)) Bool (and true (<=SortSyntax (|Sol_VarA| (vars s1)) (|Sol_VarA| (vars s2))) (<=SortSyntax (|Sol_VarB| (vars s1)) (|Sol_VarB| (vars s2))) (<=SortSyntax (|Sol_VarC| (vars s1)) (|Sol_VarC| (vars s2)))  (distinct (vars s1) (vars s2))))\n(assert (and true (distinct (|Sol_FreshVarSort_6_8_6_36_#KRewrite| theSolution) |SortKLabel|) ))\n(define-fun |constraint4_SortExp| ((s Solution)) Bool (and true (<=Sort (|Sol_VarA| (vars s)) |SortExp|) ))\n(define-fun |constraint6_SortExp| ((s Solution)) Bool (and true (<=Sort (|Sol_VarB| (vars s)) |SortExp|) ))\n(define-fun |constraint3_SortExp| ((s Solution)) Bool (and true (<=Sort |SortExp| |SortExp|) (|constraint4_SortExp| s) (|constraint6_SortExp| s) ))\n(define-fun |constraint8_SortExp| ((s Solution)) Bool (and true (<=Sort (|Sol_VarC| (vars s)) |SortExp|) ))\n(define-fun |constraint2_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| ((s Solution)) Bool (and true (<=Sort |SortExp| (|Sol_FreshVarSort_6_8_6_36_#KRewrite| s)) (|constraint3_SortExp| s) (|constraint8_SortExp| s) ))\n(define-fun |constraint12_SortInt| ((s Solution)) Bool (and true (<=Sort (|Sol_VarA| (vars s)) |SortInt|) ))\n(define-fun |constraint14_SortInt| ((s Solution)) Bool (and true (<=Sort (|Sol_VarB| (vars s)) |SortInt|) ))\n(define-fun |constraint11_SortInt| ((s Solution)) Bool (and true (<=Sort |SortInt| |SortInt|) (|constraint12_SortInt| s) (|constraint14_SortInt| s) ))\n(define-fun |constraint16_SortInt| ((s Solution)) Bool (and true (<=Sort (|Sol_VarC| (vars s)) |SortInt|) ))\n(define-fun |constraint10_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| ((s Solution)) Bool (and true (<=Sort |SortInt| (|Sol_FreshVarSort_6_8_6_36_#KRewrite| s)) (|constraint11_SortInt| s) (|constraint16_SortInt| s) ))\n(define-fun |constraint1_Sort#RuleBody| ((s Solution)) Bool (and true (= (|Sol_FreshVarSort_6_8_6_36_#KRewrite| s) |SortK|) (|constraint2_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| s) (|constraint10_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| s) ))\n(define-fun |constraint0_Sort#RuleContent| ((s Solution)) Bool (and true (|constraint1_Sort#RuleBody| s) ))\n(define-fun |constraint21_SortExp| ((s Solution)) Bool (and true (<=Sort |SortExp| |SortExp|) (|constraint6_SortExp| s) (|constraint8_SortExp| s) ))\n(define-fun |constraint20_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| ((s Solution)) Bool (and true (<=Sort |SortExp| (|Sol_FreshVarSort_6_8_6_36_#KRewrite| s)) (|constraint4_SortExp| s) (|constraint21_SortExp| s) ))\n(define-fun |constraint19_Sort#RuleBody| ((s Solution)) Bool (and true (= (|Sol_FreshVarSort_6_8_6_36_#KRewrite| s) |SortK|) (|constraint20_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| s) (|constraint10_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| s) ))\n(define-fun |constraint18_Sort#RuleContent| ((s Solution)) Bool (and true (|constraint19_Sort#RuleBody| s) ))\n(define-fun amb0 ((s Solution)) Bool (or (|constraint0_Sort#RuleContent| s) (|constraint18_Sort#RuleContent| s) ))\n\n(assert (amb0 theSolution))\n;(assert (not (exists ((s Solution)) (and (lt theSolution s) (amb0 s) (distinct (|Sol_FreshVarSort_6_8_6_36_#KRewrite| s) |SortKLabel|) ))))\n(assert (not (exists ((var SolutionVariables) (s Sort)) (and (lt theSolution (Sol var s)) (amb0 (Sol var s)) (distinct s |SortKLabel|) ))))\n(check-sat)\n(get-model)\n;(assert (or false (distinct |VarA| |SortInt|) (distinct |VarB| |SortInt|) (distinct |VarC| |SortInt|) ))\n;(check-sat)\n"""\n')),(0,o.kt)("h2",{id:"propagate-functions"},"Propagate Functions"),(0,o.kt)("p",null,"We can access the sort ",(0,o.kt)("inlineCode",{parentName:"p"},"Sort")," from the SMTLIB input by declaring it as a ",(0,o.kt)("inlineCode",{parentName:"p"},"DatatypeSort"),".\nThen the two functions we did not define in the SMTLIB input are declared as ",(0,o.kt)("inlineCode",{parentName:"p"},"PropagateFunction"),".\nThis declaration instructs z3 to invoke callbacks whenever a new term headed by the declared\nfunction is introduced to the solver. It could be a term that is part of the input, or it could\nbe a term that is created dynamically using quantifier instantiation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nSort = DatatypeSort("Sort")\nleSort = PropagateFunction("<=Sort", Sort, Sort, BoolSort())\nleSortSyntax = PropagateFunction("<=SortSyntax", Sort, Sort, BoolSort())\nfmls = parse_smt2_string(example, decls={"<=Sort":leSort, "<=SortSyntax":leSortSyntax})\n\n')),(0,o.kt)("h2",{id:"axiomatizing-rtcs"},"Axiomatizing RTCs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\n[SortInt, SortExp, SortKItem, SortKLabel, SortK] = [Sort.constructor(i) for i in range(Sort.num_constructors())]\n\nleSortTable = [(SortKItem, SortK),\n               (SortExp, SortKItem),\n               (SortExp, SortK),\n               (SortInt, SortKItem),\n               (SortInt, SortExp),\n               (SortInt, SortK)]\n\nleSortSyntaxTable = [(SortKItem, SortK),\n                     (SortExp, SortKItem),\n                     (SortExp, SortK),\n                     (SortInt, SortKItem),\n                     (SortInt, SortExp),\n                     (SortInt, SortK)]\n\nconstructors = {con() for con in [SortInt, SortExp, SortKItem, SortKLabel, SortK]}\n\n\n# Compute the reflexive transitive closure of a binary relation over constructors.\n\ndef rtc(constructors, bin):\n    step = { k : set([]) for k in constructors }\n    for k, v in bin:\n        step[k()] |= { v() }\n    t = { k : set([k]) for k in constructors }\n    change = True\n    while change:\n        change = False\n        for k, vs in t.items():\n            for w in step[k]:\n                if w not in vs:\n                    vs |= { w }\n                    change = True\n    print(t)\n    return t\n\n")),(0,o.kt)("h2",{id:"union-find"},"Union Find"),(0,o.kt)("p",null,"We use a simple union find with support for tracking values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Node:\n    def __init__(self, a):\n        self.term = a\n        self.id = a.get_id()\n        self.root = self\n        self.size = 1\n        self.value = None\n\n    def __eq__(self, other):\n        return self.id == other.id\n\n    def __ne__(self, other):\n        return self.id != other.id\n    \n    def to_string(self):\n        return f"{self.term} -> r:{self.root.term}"\n\n    def __str__(self):\n        return self.to_string()\n\nclass UnionFind:\n    def __init__(self, trail):\n        self._nodes = {}\n        self.trail = trail\n\n    def node(self, a):\n        if a in self._nodes:\n            return self._nodes[a]\n        n = Node(a)\n        self._nodes[a] = n\n        def undo():\n            del self._nodes[a]\n        self.trail.append(undo)\n        return n\n\n    def merge(self, a, b):\n        a = self.node(a)\n        b = self.node(b)\n        a = self.find(a)\n        b = self.find(b)\n        if a == b:\n            return\n        if a.size < b.size:\n            a, b = b, a\n        if a.value is not None and b.value is not None:\n            print("Merging two values", a, a.value, b, b.value)\n            os._exit()\n        value = a.value\n        if b.value is not None:\n            value = b.value        \n        old_root = b.root\n        old_asize = a.size\n        old_bvalue = b.value\n        old_avalue = a.value\n        b.root = a.root\n        b.value = value\n        a.value = value\n        a.size += b.size\n        def undo():\n            b.root = old_root\n            a.size = old_asize\n            b.value = old_bvalue\n            a.value = old_avalue\n        self.trail.append(undo)\n\n    # skip path compression to keep the example basic\n    def find(self, a):\n        assert isinstance(a, Node)\n        root = a.root\n        while root != root.root:\n            root = root.root\n        return root\n\n    def set_value(self, a):\n        n = self.find(self.node(a))\n        if n.value is not None:\n            return\n        def undo():\n            n.value = None\n        n.value = a\n        self.trail.append(undo)\n\n    def get_value(self, a):\n        return self.find(self.node(a)).value        \n\n    def root_term(self, a):\n        return self.find(self.node(a)).term\n\n    def __str__(self):\n        return self.to_string()\n\n    def __repr__(self):\n        return self.to_string()\n\n    def to_string(self):\n        return "\\n".join([n.to_string() for t, n in self._nodes.items()])\n        \n')),(0,o.kt)("h2",{id:"finally-the-propagator"},"Finally, the propagator"),(0,o.kt)("p",null,"It uses a good set of features exposed for user propagators"),(0,o.kt)("h3",{id:"tc-as-a-subclass"},"TC as a subclass"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class TC(UserPropagateBase):\n    def __init__(self, s=None, ctx=None):\n        UserPropagateBase.__init__(self, s, ctx)\n        self.trail = []\n        self.lim   = []\n        self.add_fixed(lambda x, v : self._fixed(x, v))\n        self.add_final(lambda : self._final())\n        self.add_eq(lambda x, y : self._eq(x, y))\n        self.add_created(lambda t : self._created(t))\n        self.uf = UnionFind(self.trail)\n        for v in constructors:\n            self.uf.set_value(v)\n        self.first = True\n        self._fixed_le = []\n        self._fixed_le_syntax = []\n        self._fixed_le_table = rtc(constructors, leSortTable)\n        self._fixed_le_syntax_table = rtc(constructors, leSortSyntaxTable)\n\n    def push(self):\n        self.lim += [len(self.trail)]\n\n    def pop(self, n):\n        head = self.lim[len(self.lim) - n]\n        while len(self.trail) > head:\n            self.trail[-1]()\n            self.trail.pop(-1)\n        self.lim = self.lim[0:len(self.lim)-n]\n\n    def fresh(self, new_ctx):\n        return TC(ctx=new_ctx)\n")),(0,o.kt)("h3",{id:"handling-assignments-to-fixed-values"},"Handling assignments to fixed values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def _fixed(self, x, v):        \n        print("fixed: ", x, " := ", v)\n        if x.decl().eq(leSort):\n            self._fixed_trail(x, v, self._fixed_le_table, self._fixed_le)\n        elif x.decl().eq(leSortSyntax):\n            self._fixed_trail(x, v, self._fixed_le_syntax_table, self._fixed_le_syntax)\n\n    #\n    # When x is fixed to value v, we check if it immediately\n    # triggers a conflict. If it doesn\'t we add it to a trail\n    # that is checked on final. It is assumed that during final\n    # check_conflict is conclusive (returns True) as all equatlities\n    # are known between arguments to <=Sort and <=SortSyntax.\n    # \n    def _fixed_trail(self, x, v, table, trail):\n        if self.check_conflict(x, v, table):\n            return\n        trail.append((x,v))\n        def undo():\n            trail.pop(-1)\n        self.trail.append(undo)\n\n')),(0,o.kt)("h3",{id:"new-terms"},"New Terms"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def _created(self, t):\n        print("Created", t)\n        self.add(t)\n        x, y = t.arg(0), t.arg(1)\n        self.add(x)\n        self.add(y)\n        # This is subtle: We need to register all constructors with the solver\n        # otherwise, it could be that a constructor does not occur as argument of any\n        # of the tracked predicates, but gets used by the solver and merged with\n        # one of the arguments during search. If the constructor isn\'t registered\n        # final() cannot resolve the value associated with a x or y.\n        if self.first:\n            self.first = False\n            for v in constructors:\n                self.add(v)\n')),(0,o.kt)("h3",{id:"equality-callbacks"},"Equality callbacks"),(0,o.kt)("p",null,"Terms that have been registered using ",(0,o.kt)("inlineCode",{parentName:"p"},"self.add")," are tracked by the solver.\nThe solver issues the equality callback when two registered terms are equated.\nThe number of equality callbacks for ",(0,o.kt)("em",{parentName:"p"},"N")," terms that are equal is ",(0,o.kt)("em",{parentName:"p"},"N-1"),", corresponding\nto a spanning tree. So not all equalities are presented in callbacks and the client\ncan track equivalence classes by using a union-find data-structure as we are doing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n    def _eq(self, x, y):\n        print(x, " = ", y)\n        self.uf.merge(x, y)\n\n')),(0,o.kt)("h3",{id:"final-check"},"Final check"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def _final(self):\n        print("Final")\n        self.check_rtc(self._fixed_le, self._fixed_le_table)\n        self.check_rtc(self._fixed_le_syntax, self._fixed_le_syntax_table)\n\n    #\n    # Check if assignment f := v triggers a conflict with respect\n    # to reflexive, transitive closure relation, <=Sort or <=SortSyntax\n    # Look up the values of the two arguments a, b in the\n    # union-find structure.\n    # For\n    #  <=Sort(a,b) := True, check that b is reachable from a\n    #  <=Sort(a,b) := False, check that b is _not_ reachable from a\n    # The process is similar for <=SortSyntax\n    # \n    def check_conflict(self, f, v, rtc, is_final = False):\n        a, b = f.arg(0), f.arg(1)\n        va, vb = self.uf.get_value(a), self.uf.get_value(b)\n        if va is None or vb is None:\n            if is_final:\n                print("Unassigned", a, va, b, vb)\n                os._exit(1)\n            return False\n        if is_true(v):\n            if vb not in rtc[va]:\n                print("Conflict not included in TC", f, v, a, va, b, vb)\n                self.conflict(deps = [f], eqs = [(a, va), (b, vb)])\n                return True\n            else:\n                return False\n        elif is_false(v):\n            if vb in rtc[va]:\n                print("Conflict negated but included in TC", f, v, a, va, b, vb)\n                self.conflict(deps = [f], eqs = [(a, va), (b, vb)])\n                return True\n            else:\n                return False\n        else:\n            print("Unrecognized value", v)\n            assert(False)\n        \n    def check_rtc(self, asserted, rtc):\n        for (f, v) in asserted:            \n            if self.check_conflict(f, v, rtc, is_final = True):\n                return\n\n')),(0,o.kt)("h2",{id:"using-the-user-propagator"},"Using the User Propagator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s = Solver()\nb = TC(s)\n\nfor (a,b) in leSortTable:\n    s.add(leSort(a(),b()))\nfor (a,b) in leSortSyntaxTable:\n    s.add(leSortSyntax(a(), b()))\n    \ns.add(fmls)\nprint(s.check())\n")))}u.isMDXComponent=!0}}]);