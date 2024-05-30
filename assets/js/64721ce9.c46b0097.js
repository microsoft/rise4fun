"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8492],{7213:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(8168),o=(n(6540),n(5680)),r=n(2317),s=n.n(r);const i={title:"Advanced Topics",sidebar_position:2},l=void 0,u={unversionedId:"Z3 Python - Readonly/advanced",id:"Z3 Python - Readonly/advanced",title:"Advanced Topics",description:"Expressions, Sorts and Declarations",source:"@site/docs-programming/02 - Z3 Python - Readonly/02 - advanced.md",sourceDirName:"02 - Z3 Python - Readonly",slug:"/Z3 Python - Readonly/advanced",permalink:"/z3guide/programming/Z3 Python - Readonly/advanced",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-programming/02 - Z3 Python - Readonly/02 - advanced.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Advanced Topics",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/z3guide/programming/Z3 Python - Readonly/Introduction"},next:{title:"Strategies",permalink:"/z3guide/programming/Z3 Python - Readonly/Strategies"}},p={},d=[{value:"Expressions, Sorts and Declarations",id:"expressions-sorts-and-declarations",level:2},{value:"Arrays",id:"arrays",level:2},{value:"Select and Store",id:"select-and-store",level:2},{value:"Constant arrays",id:"constant-arrays",level:3},{value:"Datatypes",id:"datatypes",level:2},{value:"Uninterpreted Sorts",id:"uninterpreted-sorts",level:2},{value:"Quantifiers",id:"quantifiers",level:2},{value:"Modeling with Quantifiers",id:"modeling-with-quantifiers",level:3},{value:"Patterns",id:"patterns",level:3},{value:"Multi-patterns",id:"multi-patterns",level:3},{value:"Other attributes",id:"other-attributes",level:3},{value:"Multiple Solvers",id:"multiple-solvers",level:2},{value:"Unsat Cores and Soft Constraints",id:"unsat-cores-and-soft-constraints",level:2},{value:"Formatter",id:"formatter",level:2}],y={toc:d},h="wrapper";function g(t){let{components:e,...n}=t;return(0,o.yg)(h,(0,a.A)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"expressions-sorts-and-declarations"},"Expressions, Sorts and Declarations"),(0,o.yg)("p",null,"In Z3, expressions, sorts and declarations are called ",(0,o.yg)("em",{parentName:"p"},"ASTs"),".\nASTs are directed acyclic graphs. Every expression has a sort (aka type).\nThe method ",(0,o.yg)("tt",null,"sort()")," retrieves the sort of an expression."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x = Int('x')\ny = Real('y')\nprint ((x + 1).sort())\nprint ((y + 1).sort())\nprint ((x >= 2).sort())",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"The function ",(0,o.yg)("tt",null,"eq(n1, n2)")," returns ",(0,o.yg)("tt",null,"True")," if ",(0,o.yg)("tt",null,"n1"),"\nand ",(0,o.yg)("tt",null,"n2")," are the same AST. This is a structural test. "),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x, y = Ints('x y')\nprint (eq(x + y, x + y))\nprint (eq(x + y, y + x))\nn = x + y\nprint (eq(n, x + y))\n# x2 is eq to x\nx2 = Int('x') \nprint (eq(x, x2))\n# the integer variable x is not equal to \n# the real variable x\nprint (eq(Int('x'), Real('x')))",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"The method ",(0,o.yg)("tt",null,"hash()")," returns a hashcode for an AST node.\nIf ",(0,o.yg)("tt",null,"eq(n1, n2)")," returns ",(0,o.yg)("tt",null,"True"),", then ",(0,o.yg)("tt",null,"n1.hash()"),"\nis equal to ",(0,o.yg)("tt",null,"n2.hash()"),". "),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x = Int('x')\nprint (x + 1).hash()\nprint (1 + x).hash()\nprint x.sort().hash()",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"Z3 expressions can be divided in three basic groups: ",(0,o.yg)("strong",{parentName:"p"},"applications"),",\n",(0,o.yg)("strong",{parentName:"p"},"quantifiers")," and ",(0,o.yg)("strong",{parentName:"p"},"bounded/free variables"),".\nApplications are all you need if your problems do not contain\nuniversal/existential quantifiers. Although we say ",(0,o.yg)("tt",null,"Int('x')"),' is an\ninteger "variable", it is technically an integer constant, and internally\nis represented as a function application with ',(0,o.yg)("tt",null,"0")," arguments.\nEvery application is associated with a ",(0,o.yg)("strong",{parentName:"p"},"declaration")," and contains "),(0,o.yg)("tt",null,"0")," or more arguments. The method ",(0,o.yg)("tt",null,"decl()")," returns the declaration associated with an application. The method ",(0,o.yg)("tt",null,"num_args()"),"returns the number of arguments of an application, and ",(0,o.yg)("tt",null,"arg(i)")," one of the arguments. The function ",(0,o.yg)("tt",null,"is_expr(n)")," returns ",(0,o.yg)("tt",null,"True"),"if ",(0,o.yg)("tt",null,"n")," is an expression. Similarly ",(0,o.yg)("tt",null,"is_app(n)")," (",(0,o.yg)("tt",null,"is_func_decl(n)"),") returns ",(0,o.yg)("tt",null,"True")," if ",(0,o.yg)("tt",null,"n")," is an application (declaration).",(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:'x = Int(\'x\')\nprint ("is expression: ", is_expr(x))\nn = x + 1\nprint ("is application:", is_app(n))\nprint ("decl:          ", n.decl())\nprint ("num args:      ", n.num_args())\nfor i in range(n.num_args()):\n    print ("arg(", i, ") ->", n.arg(i))',result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"Declarations have names, they are retrieved using the method ",(0,o.yg)("tt",null,"name()"),".\nA (function) declaration has an arity, a domain and range sorts."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:'x   = Int(\'x\')\nx_d = x.decl()\nprint ("is_expr(x_d):     ", is_expr(x_d))\nprint ("is_func_decl(x_d):", is_func_decl(x_d))\nprint ("x_d.name():       ", x_d.name())\nprint ("x_d.range():      ", x_d.range())\nprint ("x_d.arity():      ", x_d.arity())\n# x_d() creates an application with 0 arguments using x_d.\nprint ("eq(x_d(), x):     ", eq(x_d(), x))\nprint ("\\n")\n# f is a function from (Int, Real) to Bool\nf   = Function(\'f\', IntSort(), RealSort(), BoolSort())\nprint ("f.name():         ", f.name())\nprint ("f.range():        ", f.range())\nprint ("f.arity():        ", f.arity())\nfor i in range(f.arity()):\n    print ("domain(", i, "): ", f.domain(i))\n# f(x, x) creates an application with 2 arguments using f.\nprint (f(x, x))\nprint (eq(f(x, x).decl(), f))',result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"The built-in declarations are identified using their ",(0,o.yg)("strong",{parentName:"p"},"kind"),". The kind\nis retrieved using the method ",(0,o.yg)("tt",null,"kind()"),". The complete list of built-in declarations\ncan be found in the file ",(0,o.yg)("tt",null,"z3consts.py")," (",(0,o.yg)("tt",null,"z3_api.h"),") in the Z3 distribution."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x, y = Ints('x y')\nprint ((x + y).decl().kind() == Z3_OP_ADD)\nprint ((x + y).decl().kind() == Z3_OP_SUB)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"The following example demonstrates how to substitute sub-expressions in Z3 expressions."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x, y = Ints('x y')\nf    = Function('f', IntSort(), IntSort(), IntSort())\ng    = Function('g', IntSort(), IntSort())\nn    = f(f(g(x), g(g(x))), g(g(y)))\nprint (n)\n# substitute g(g(x)) with y and g(y) with x + 1\nprint (substitute(n, (g(g(x)), y), (g(y), x + 1)))",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"The function ",(0,o.yg)("tt",null,"Const(name, sort)")," declares a constant (aka variable) of the given sort.\nFor example, the functions ",(0,o.yg)("tt",null,"Int(name)")," and ",(0,o.yg)("tt",null,"Real(name)")," are shorthands for"),(0,o.yg)("tt",null,"Const(name, IntSort())")," and ",(0,o.yg)("tt",null,"Const(name, RealSort())"),".",(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x = Const('x', IntSort())\nprint (eq(x, Int('x')))\n\na, b = Consts('a b', BoolSort())\nprint (And(a, b))",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("h2",{id:"arrays"},"Arrays"),(0,o.yg)("p",null,"As part of formulating a programme of a mathematical theory of computation\nMcCarthy proposed a ",(0,o.yg)("em",{parentName:"p"},"basic")," theory of arrays as characterized by\nthe select-store axioms. The expression ",(0,o.yg)("tt",null,"Select(a, i)")," returns\nthe value stored at position ",(0,o.yg)("tt",null,"i")," of the array ",(0,o.yg)("tt",null,"a"),";\nand ",(0,o.yg)("tt",null,"Store(a, i, v)")," returns a new array identical to ",(0,o.yg)("tt",null,"a"),",\nbut on position ",(0,o.yg)("tt",null,"i")," it contains the value ",(0,o.yg)("tt",null,"v"),".\nIn Z3Py, we can also write ",(0,o.yg)("tt",null,"Select(a, i)")," as ",(0,o.yg)("tt",null,"a","[i]"),"."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"# Use I as an alias for IntSort()\nI = IntSort()\n# A is an array from integer to integer\nA = Array('A', I, I)\nx = Int('x')\nprint (A[x])\nprint (Select(A, x))\nprint (Store(A, x, 10))\nprint (simplify(Select(Store(A, 2, x+1), 2)))",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"By default, Z3 assumes that arrays are extensional over select.\nIn other words, Z3 also enforces that if two arrays agree on all positions,\nthen the arrays are equal."),(0,o.yg)("p",null,"Z3 also contains various extensions\nfor operations on arrays that remain decidable and amenable\nto efficient saturation procedures (here efficient means,\nwith an NP-complete satisfiability complexity).\nWe describe these extensions in the following using a collection of examples.\nAdditional background on these extensions is available in the\npaper ",(0,o.yg)("a",{parentName:"p",href:"http://research.microsoft.com/en-us/um/people/leonardo/fmcad09.pdf"},"Generalized and Efficient Array Decision Procedures")),(0,o.yg)("p",null,"Arrays in Z3 are used to model unbounded or very large arrays.\nArrays should not be used to model small finite collections of values.\nIt is usually much more efficient to create different variables using list comprehensions."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"# We want an array with 3 elements.\n# 1. Bad solution\nX = Array('x', IntSort(), IntSort())\n# Example using the array\nprint (X[0] + X[1] + X[2] >=0)\n\n# 2. More efficient solution\nX = IntVector('x', 3)\nprint (X[0] + X[1] + X[2] >= 0)\nprint (Sum(X) >= 0)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("h2",{id:"select-and-store"},"Select and Store"),(0,o.yg)("p",null,"Let us first check a basic property of arrays.\nSuppose ",(0,o.yg)("tt",null,"A")," is an array of integers, then the constraints"),(0,o.yg)("tt",null,"A[x] == x, Store(A, x, y) == A"),"are satisfiable for an array that contains an index ",(0,o.yg)("tt",null,"x")," that maps to ",(0,o.yg)("tt",null,"x"),", and when ",(0,o.yg)("tt",null,"x == y"),". We can solve these constraints.",(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"A = Array('A', IntSort(), IntSort())\nx, y = Ints('x y')\nsolve(A[x] == x, Store(A, x, y) == A)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"The interpretation/solution for array variables is very similar to the one used for functions."),(0,o.yg)("p",null,"The problem becomes unsatisfiable/infeasible if we add the constraint ",(0,o.yg)("tt",null,"x != y"),"."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"A = Array('A', IntSort(), IntSort())\nx, y = Ints('x y')\nsolve(A[x] == x, Store(A, x, y) == A, x != y)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("h3",{id:"constant-arrays"},"Constant arrays"),(0,o.yg)("p",null,"The array that maps all indices to some fixed value can be specified in Z3Py using the"),(0,o.yg)("tt",null,"K(s, v)")," construct where ",(0,o.yg)("tt",null,"s")," is a sort/type and ",(0,o.yg)("tt",null,"v")," is an expression.",(0,o.yg)("tt",null,"K(s, v)")," returns a array that maps any value of ",(0,o.yg)("tt",null,"s")," into ",(0,o.yg)("tt",null,"v"),". The following example defines a constant array containing only ones.",(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"AllOne = K(IntSort(), 1)\na, i = Ints('a i')\nsolve(a == AllOne[i])\n# The following constraints do not have a solution\nsolve(a == AllOne[i], a != 1)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("h2",{id:"datatypes"},"Datatypes"),(0,o.yg)("p",null,"Algebraic datatypes, known from programming languages such as ML,\noffer a convenient way for specifying common data structures. Records\nand tuples are special cases of algebraic datatypes, and so are\nscalars (enumeration types). But algebraic datatypes are more\ngeneral. They can be used to specify finite lists, trees and other\nrecursive structures."),(0,o.yg)("p",null,"The following example demonstrates how to declare a List in Z3Py. It is\nmore verbose than using the SMT 2.0 front-end, but much simpler than using\nthe Z3 C API. It consists of two phases.\nFirst, we have to declare the new datatype, its constructors and accessors.\nThe function ",(0,o.yg)("tt",null,"Datatype('List')"),' declares a "placeholder" that will\ncontain the constructors and accessors declarations. The method'),(0,o.yg)("tt",null,"declare(cname, (aname, sort)+)")," declares a constructor named",(0,o.yg)("tt",null,"cname")," with the given accessors. Each accessor has an associated ",(0,o.yg)("tt",null,"sort"),"or a reference to the datatypes being declared. For example, ",(0,o.yg)("tt",null,"declare('cons', ('car', IntSort()), ('cdr', List))"),"declares the constructor named ",(0,o.yg)("tt",null,"cons")," that builds a new ",(0,o.yg)("tt",null,"List"),"using an integer and a ",(0,o.yg)("tt",null,"List"),". It also declares the accessors ",(0,o.yg)("tt",null,"car")," and",(0,o.yg)("tt",null,"cdr"),". The accessor ",(0,o.yg)("tt",null,"car")," extracts the integer of a ",(0,o.yg)("tt",null,"cons"),"cell, and ",(0,o.yg)("tt",null,"cdr")," the list of a ",(0,o.yg)("tt",null,"cons")," cell. After all constructors were declared, we use the method ",(0,o.yg)("tt",null,"create()")," to create the actual datatype in Z3. Z3Py makes the new Z3 declarations and constants available as slots of the new object.",(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"# Declare a List of integers\nList = Datatype('List')\n# Constructor cons: (Int, List) -> List\nList.declare('cons', ('car', IntSort()), ('cdr', List))\n# Constructor nil: List\nList.declare('nil')\n# Create the datatype\nList = List.create()\nprint (is_sort(List))\ncons = List.cons\ncar  = List.car\ncdr  = List.cdr\nnil  = List.nil\n# cons, car and cdr are function declarations, and nil a constant\nprint (is_func_decl(cons))\nprint (is_expr(nil))\n\nl1 = cons(10, cons(20, nil))\nprint (l1)\nprint (simplify(cdr(l1)))\nprint (simplify(car(l1)))\nprint (simplify(l1 == nil))",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"The following example demonstrates how to define a Python function that\ngiven a sort creates a list of the given sort. "),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"def DeclareList(sort):\n    List = Datatype('List_of_%s' % sort.name())\n    List.declare('cons', ('car', sort), ('cdr', List))\n    List.declare('nil')\n    return List.create()\n\nIntList     = DeclareList(IntSort())\nRealList    = DeclareList(RealSort())\nIntListList = DeclareList(IntList)\n\nl1 = IntList.cons(10, IntList.nil)\nprint (l1)\nprint (IntListList.cons(l1, IntListList.cons(l1, IntListList.nil)))\nprint (RealList.cons(\"1/3\", RealList.nil))\n\nprint (l1.sort())",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"The example above demonstrates that Z3 supports operator overloading.\nThere are several functions named ",(0,o.yg)("tt",null,"cons"),", but they are different since they receive and/or\nreturn values of different sorts.\nNote that it is not necessary to use a different sort name for each instance of the sort\nlist. That is, the expression ",(0,o.yg)("tt",null,"'List",(0,o.yg)("em",{parentName:"p"},"of"),"%s' % sort.name()")," is not necessary, we\nuse it just to provide more meaningful names."),(0,o.yg)("p",null,"As described above enumeration types are a special case of algebraic datatypes.\nThe following example declares an enumeration type consisting of three values:"),(0,o.yg)("tt",null,"red"),", ",(0,o.yg)("tt",null,"green")," and ",(0,o.yg)("tt",null,"blue"),".",(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"Color = Datatype('Color')\nColor.declare('red')\nColor.declare('green')\nColor.declare('blue')\nColor = Color.create()\n\nprint (is_expr(Color.green))\nprint (Color.green == Color.blue)\nprint (simplify(Color.green == Color.blue))\n\n# Let c be a constant of sort Color\nc = Const('c', Color)\n# Then, c must be red, green or blue\nprove(Or(c == Color.green, \n         c == Color.blue,\n         c == Color.red))",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"Z3Py also provides the following shorthand for declaring enumeration sorts."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"Color, (red, green, blue) = EnumSort('Color', ('red', 'green', 'blue'))\n\nprint (green == blue)\nprint (simplify(green == blue))\n\nc = Const('c', Color)\nsolve(c != green, c != blue)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"Mutually recursive datatypes can also be declared. The only difference is that we use\nthe function ",(0,o.yg)("tt",null,"CreateDatatypes")," instead of the method ",(0,o.yg)("tt",null,"create()")," to create\nthe mutually recursive datatypes."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"TreeList = Datatype('TreeList')\nTree     = Datatype('Tree')\nTree.declare('leaf', ('val', IntSort()))\nTree.declare('node', ('left', TreeList), ('right', TreeList))\nTreeList.declare('nil')\nTreeList.declare('cons', ('car', Tree), ('cdr', TreeList))\n\nTree, TreeList = CreateDatatypes(Tree, TreeList)\n\nt1  = Tree.leaf(10)\ntl1 = TreeList.cons(t1, TreeList.nil)\nt2  = Tree.node(tl1, TreeList.nil)\nprint (t2)\nprint (simplify(Tree.val(t1)))\n\nt1, t2, t3 = Consts('t1 t2 t3', TreeList)\n\nsolve(Distinct(t1, t2, t3))",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"The following example shows how to nest algebraic datatypes with\nsequences"),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"SomeType = Datatype('SomeType')\nSomeTypeSort = DatatypeSort('SomeType')\nSomeType.declare('nil')\nSomeType.declare('some', ('someof', SeqSort(SomeTypeSort), ))\nSomeTypeSort = SomeType.create()",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"It illustrates how to access the sort ",(0,o.yg)("inlineCode",{parentName:"p"},"SomeTypeSort"),"\nbefore it is fully constructed\nby using the function ",(0,o.yg)("inlineCode",{parentName:"p"},"DatatypeSort"),"."),(0,o.yg)("h2",{id:"uninterpreted-sorts"},"Uninterpreted Sorts"),(0,o.yg)("p",null,"Function and constant symbols in pure first-order logic are uninterpreted or free,\nwhich means that no a priori interpretation is attached.\nThis is in contrast to arithmetic operators such as ",(0,o.yg)("tt",null,"+")," and ",(0,o.yg)("tt",null,"-"),"\nthat have a fixed standard interpretation.\nUninterpreted functions and constants are maximally flexible;\nthey allow any interpretation that is consistent with the constraints over the function or constant."),(0,o.yg)("p",null,"To illustrate uninterpreted functions and constants let us introduce an (uninterpreted) sort ",(0,o.yg)("tt",null,"A"),",\nand the constants ",(0,o.yg)("tt",null,"x"),", ",(0,o.yg)("tt",null,"y")," ranging over ",(0,o.yg)("tt",null,"A"),".\nFinally let ",(0,o.yg)("tt",null,"f")," be an uninterpreted function that takes one\nargument of sort ",(0,o.yg)("tt",null,"A")," and results in a value of sort ",(0,o.yg)("tt",null,"A"),".\nThe example illustrates how one can force an interpretation where ",(0,o.yg)("tt",null,"f")," applied twice to ",(0,o.yg)("tt",null,"x")," results in ",(0,o.yg)("tt",null,"x")," again,\nbut ",(0,o.yg)("tt",null,"f")," applied once to ",(0,o.yg)("tt",null,"x")," is different from ",(0,o.yg)("tt",null,"x"),"."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"A    = DeclareSort('A')\nx, y = Consts('x y', A)\nf    = Function('f', A, A)\n\ns    = Solver()\ns.add(f(f(x)) == x, f(x) == y, x != y)\n\nprint (s.check())\nm = s.model()\nprint (m)\nprint (\"interpretation assigned to A:\")\nprint (m[A])",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"The resulting model introduces abstract values for the elements in ",(0,o.yg)("tt",null,"A"),",\nbecause the sort ",(0,o.yg)("tt",null,"A")," is uninterpreted. The interpretation for ",(0,o.yg)("tt",null,"f")," in the\nmodel toggles between the two values for ",(0,o.yg)("tt",null,"x")," and ",(0,o.yg)("tt",null,"y"),", which are different.\nThe expression ",(0,o.yg)("tt",null,"m","[A]")," returns the interpretation (universe) for the uninterpreted sort ",(0,o.yg)("tt",null,"A"),"\nin the model ",(0,o.yg)("tt",null,"m"),". "),(0,o.yg)("h2",{id:"quantifiers"},"Quantifiers"),(0,o.yg)("p",null,"Z3 is can solve quantifier-free problems containing arithmetic, bit-vector, Booleans,\narrays, functions and datatypes. Z3 also accepts and can work with formulas\nthat use quantifiers. It is no longer a decision procedure for\nsuch formulas in general (and for good reasons, as there can be\nno decision procedure for first-order logic)."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"f = Function('f', IntSort(), IntSort(), IntSort())\nx, y = Ints('x y')\nf = ForAll([x, y], f(x, y) == 0)\nprint (f.body())\nv1 = f.body().arg(0).arg(0)\nprint (v1)\nprint (eq(v1, Var(1, IntSort())))",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"Nevertheless, Z3 is often able to handle formulas involving\nquantifiers. It uses several approaches to handle quantifiers.\nThe most prolific approach is using ",(0,o.yg)("em",{parentName:"p"},"pattern-based")," quantifier\ninstantiation. This approach allows instantiating quantified formulas\nwith ground terms that appear in the current search context based\non ",(0,o.yg)("em",{parentName:"p"},"pattern annotations")," on quantifiers.\nZ3 also contains a model-based quantifier instantiation\ncomponent that uses a model construction to find good terms to instantiate\nquantifiers with; and Z3 also handles many decidable fragments."),(0,o.yg)("p",null,"Note that in the previous example the constants ",(0,o.yg)("tt",null,"x"),"\nand ",(0,o.yg)("tt",null,"y"),' were used to create quantified formulas.\nThis is a "trick" for simplifying the construction of quantified\nformulas in Z3Py. Internally, these constants are replaced by\nbounded variables. The next example demonstrates that. The method'),(0,o.yg)("tt",null,"body()")," retrives the quantified expression. In the resultant formula the bounded variables are free. The function ",(0,o.yg)("tt",null,"Var(index, sort)")," creates a bounded/free variable with the given index and sort. ```z3-python f = Function('f', IntSort(), IntSort(), IntSort()) x, y = Ints('x y') f = ForAll([x, y], f(x, y) == 0) print (f.body()) v1 = f.body().arg(0).arg(0) print (v1) print (eq(v1, Var(1, IntSort()))) ```",(0,o.yg)("h3",{id:"modeling-with-quantifiers"},"Modeling with Quantifiers"),(0,o.yg)("p",null,"Suppose we want to model an object oriented type system with single inheritance.\nWe would need a predicate for sub-typing. Sub-typing should be a partial order,\nand respect single inheritance. For some built-in type constructors,\nsuch as for ",(0,o.yg)("tt",null,"array_of"),", sub-typing should be monotone."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"Type     = DeclareSort('Type')\nsubtype  = Function('subtype', Type, Type, BoolSort())\narray_of = Function('array_of', Type, Type)\nroot     = Const('root', Type)\n\nx, y, z  = Consts('x y z', Type)\n\naxioms = [ ForAll(x, subtype(x, x)),\n           ForAll([x, y, z], Implies(And(subtype(x, y), subtype(y, z)),\n                                     subtype(x, z))),\n           ForAll([x, y], Implies(And(subtype(x, y), subtype(y, x)),\n                                  x == y)),\n           ForAll([x, y, z], Implies(And(subtype(x, y), subtype(x, z)),\n                                     Or(subtype(y, z), subtype(z, y)))),\n           ForAll([x, y], Implies(subtype(x, y),\n                                  subtype(array_of(x), array_of(y)))),\n           \n           ForAll(x, subtype(root, x))\n           ]\ns = Solver()\ns.add(axioms)\nprint (s)\nprint (s.check())\nprint (\"Interpretation for Type:\")\nprint (s.model()[Type])\nprint (\"Model:\")\nprint (s.model())",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("h3",{id:"patterns"},"Patterns"),(0,o.yg)("p",null,"The Stanford Pascal verifier and the subsequent Simplify theorem prover pioneered\nthe use of pattern-based quantifier instantiation.\nThe basic idea behind pattern-based quantifier instantiation is in a sense straight-forward:\nAnnotate a quantified formula using a pattern that contains all the bound variables.\nSo a pattern is an expression (that does not contain binding operations, such as quantifiers)\nthat contains variables bound by a quantifier. Then instantiate the quantifier whenever a term\nthat matches the pattern is created during search. This is a conceptually easy starting point,\nbut there are several subtleties that are important."),(0,o.yg)("p",null,"In the following example, the first two options make sure that Model-based quantifier instantiation engine is disabled.\nWe also annotate the quantified formula with the pattern ",(0,o.yg)("tt",null,"f(g(x))"),".\nSince there is no ground instance of this pattern, the quantifier is not instantiated, and\nZ3 fails to show that the formula is unsatisfiable."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"f = Function('f', IntSort(), IntSort())\ng = Function('g', IntSort(), IntSort())\na, b, c = Ints('a b c')\nx = Int('x')\n\ns = Solver()\ns.set(auto_config=False, mbqi=False)\n\ns.add( ForAll(x, f(g(x)) == x, patterns = [f(g(x))]),\n       g(a) == c,\n       g(b) == c,\n       a != b )\n\n# Display solver state using internal format\nprint (s.sexpr())\nprint (s.check())",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"When the more permissive pattern ",(0,o.yg)("tt",null,"g(x)"),' is used. Z3 proves the formula\nto be unsatisfiable. More restrive patterns minimize the number of\ninstantiations (and potentially improve performance), but they may\nalso make Z3 "less complete".'),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"f = Function('f', IntSort(), IntSort())\ng = Function('g', IntSort(), IntSort())\na, b, c = Ints('a b c')\nx = Int('x')\n\ns = Solver()\ns.set(auto_config=False, mbqi=False)\n\ns.add( ForAll(x, f(g(x)) == x, patterns = [g(x)]),\n       g(a) == c,\n       g(b) == c,\n       a != b )\n\n# Display solver state using internal format\nprint (s.sexpr())\nprint (s.check())",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"Some patterns may also create long instantiation chains. Consider the following assertion."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"ForAll([x, y], Implies(subtype(x, y),\n                       subtype(array_of(x), array_of(y))),\n       patterns=[subtype(x, y)])\n")),(0,o.yg)("p",null,"The axiom gets instantiated whenever there is some ground term of the\nform ",(0,o.yg)("tt",null,"subtype(s, t)"),". The instantiation causes a fresh ground term"),(0,o.yg)("tt",null,"subtype(array_of(s), array_of(t))"),", which enables a new instantiation. This undesirable situation is called a matching loop. Z3 uses many heuristics to break matching loops.",(0,o.yg)("p",null,"Before elaborating on the subtleties, we should address an important\nfirst question. What defines the terms that are created during search?\nIn the context of most SMT solvers, and of the Simplify theorem\nprover, terms exist as part of the input formula, they are of course\nalso created by instantiating quantifiers, but terms are also\nimplicitly created when equalities are asserted. The last point means\nthat terms are considered up to congruence and pattern matching takes\nplace modulo ground equalities. We call the matching problem\n",(0,o.yg)("strong",{parentName:"p"},"E-matching"),". For example, if we have the following equalities:"),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"f = Function('f', IntSort(), IntSort())\ng = Function('g', IntSort(), IntSort())\na, b, c = Ints('a b c')\nx = Int('x')\n\ns = Solver()\ns.set(auto_config=False, mbqi=False)\n\ns.add( ForAll(x, f(g(x)) == x, patterns = [f(g(x))]),\n       a == g(b),\n       b == c,\n       f(a) != c )\n\nprint (s.check())",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"The terms ",(0,o.yg)("tt",null,"f(a)")," and ",(0,o.yg)("tt",null,"f(g(b))")," are equal modulo the\nequalities. The pattern ",(0,o.yg)("tt",null,"f(g(x))")," can be matched and ",(0,o.yg)("tt",null,"x")," bound to ",(0,o.yg)("tt",null,"b"),"\nand the equality ",(0,o.yg)("tt",null,"f(g(b)) ==  b")," is deduced."),(0,o.yg)("p",null,"While E-matching is an NP-complete problem, the main sources of overhead in larger verification\nproblems comes from matching thousands of patterns in the context of an evolving set of terms and\nequalities. Z3 integrates an efficient E-matching engine using term indexing techniques."),(0,o.yg)("h3",{id:"multi-patterns"},"Multi-patterns"),(0,o.yg)("p",null,"In some cases, there is no pattern that contains all bound variables\nand does not contain interpreted symbols. In these cases, we use\nmulti-patterns. In the following example, the quantified formula\nstates that ",(0,o.yg)("tt",null,"f")," is injective. This quantified formula is annotated with\nthe multi-pattern ",(0,o.yg)("tt",null,"MultiPattern(f(x), f(y))"),".  "),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"A = DeclareSort('A')\nB = DeclareSort('B')\nf = Function('f', A, B)\na1, a2 = Consts('a1 a2', A)\nb      = Const('b', B)\nx,  y  = Consts('x y', A)\n\ns = Solver()\ns.add(a1 != a2,\n      f(a1) == b,\n      f(a2) == b,\n      ForAll([x, y], Implies(f(x) == f(y), x == y),\n             patterns=[MultiPattern(f(x), f(y))])\n      )\nprint (s.check())",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"The quantified formula is instantiated for every pair of occurrences\nof ",(0,o.yg)("tt",null,"f"),". A simple trick allows formulating injectivity of ",(0,o.yg)("tt",null,"f")," in such a way\nthat only a linear number of instantiations is required. The trick is\nto realize that ",(0,o.yg)("tt",null,"f")," is injective if and only if it has a partial\ninverse."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"A = DeclareSort('A')\nB = DeclareSort('B')\nf = Function('f', A, B)\nfinv = Function('finv', B, A)\na1, a2 = Consts('a1 a2', A)\nb      = Const('b', B)\nx,  y  = Consts('x y', A)\n\ns = Solver()\ns.add(a1 != a2,\n      f(a1) == b,\n      f(a2) == b,\n      ForAll(x, finv(f(x)) == x)\n      )\nprint (s.check())",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("h3",{id:"other-attributes"},"Other attributes"),(0,o.yg)("p",null,"In Z3Py, the following additional attributes are supported: ",(0,o.yg)("strong",{parentName:"p"},"qid")," (quantifier identifier\nfor debugging), ",(0,o.yg)("strong",{parentName:"p"},"weight"),' (hint to the quantifier instantiation module: "more weight equals less instances"),\n',(0,o.yg)("strong",{parentName:"p"},"no_patterns")," (expressions that should not be used as patterns, ",(0,o.yg)("strong",{parentName:"p"},"skid")," (identifier\nprefix used to create skolem constants/functions."),(0,o.yg)("h2",{id:"multiple-solvers"},"Multiple Solvers"),(0,o.yg)("p",null,"In Z3Py and Z3 multiple solvers can be simultaneously used.\nIt is also very easy to copy assertions/formulas from one solver to another."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x, y = Ints('x y')\ns1 = Solver()\ns1.add(x > 10, y > 10)\ns2 = Solver()\n# solver s2 is empty\nprint (s2)\n# copy assertions from s1 to s2\ns2.add(s1.assertions())\nprint (s2)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("h2",{id:"unsat-cores-and-soft-constraints"},"Unsat Cores and Soft Constraints"),(0,o.yg)("p",null,"Z3Py also supports ",(0,o.yg)("em",{parentName:"p"},"unsat core extraction"),". The basic idea is to use\n",(0,o.yg)("em",{parentName:"p"},"assumptions"),', that is, auxiliary propositional variables that we want to track.\nAssumptions are also available in the Z3 SMT 2.0 frontend, and in other Z3 front-ends.\nThey are used to extract unsatisfiable cores. They may be also used to "retract"\nconstraints. Note that, assumptions are not really ',(0,o.yg)("em",{parentName:"p"},"soft constraints"),", but they can be used to implement them. "),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"p1, p2, p3 = Bools('p1 p2 p3')\nx, y = Ints('x y')\n# We assert Implies(p, C) to track constraint C using p\ns = Solver()\ns.add(Implies(p1, x > 10),\n      Implies(p1, y > x),\n      Implies(p2, y < 5),\n      Implies(p3, y > 0))\nprint (s)\n# Check satisfiability assuming p1, p2, p3 are true\nprint (s.check(p1, p2, p3))\nprint (s.unsat_core())\n\n# Try again retracting p2\nprint (s.check(p1, p3))\nprint (s.model())",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"The example above also shows that a Boolean variable (",(0,o.yg)("tt",null,"p1"),") can be used to track\nmore than one constraint. Note that Z3 does not guarantee that the unsat cores are minimal."),(0,o.yg)("h2",{id:"formatter"},"Formatter"),(0,o.yg)("p",null,"Z3Py uses a formatter (aka pretty printer) for displaying formulas, expressions, solvers, and other\nZ3 objects. The formatter supports many configuration options.\nThe command ",(0,o.yg)("tt",null,"set_option(html_mode=False)")," makes all formulas and expressions to be\ndisplayed in Z3Py notation."),(0,o.yg)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x = Int('x')\ny = Int('y')\nprint (x**2 + y**2 >= 1)\nset_option(html_mode=False)\nprint (x**2 + y**2 >= 1)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,o.yg)("p",null,"By default, Z3Py will truncate the output if the object being displayed is too big.\nZ3Py uses ","\u2026"," to denote the output is truncated.\nThe following configuration options can be set to control the behavior of Z3Py's formatter:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"max_depth"),(0,o.yg)("td",{parentName:"tr",align:null},"Maximal expression depth. Deep expressions are replaced with ","\u2026",".")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"max_args"),(0,o.yg)("td",{parentName:"tr",align:null},"Maximal number of arguments to display per node.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"rational_to_decimal"),(0,o.yg)("td",{parentName:"tr",align:null},"Display rationals as decimals if True.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"precision"),(0,o.yg)("td",{parentName:"tr",align:null},"Maximal number of decimal places for numbers being displayed in decimal notation.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"max_lines"),(0,o.yg)("td",{parentName:"tr",align:null},"Maximal number of lines to be displayed.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"max_width"),(0,o.yg)("td",{parentName:"tr",align:null},"Maximal line width (this is a suggestion to Z3Py).")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"max_indent"),(0,o.yg)("td",{parentName:"tr",align:null},"Maximal indentation.")))))}g.isMDXComponent=!0}}]);