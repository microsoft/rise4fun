"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80],{199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(3117),s=(a(7294),a(3905)),o=a(7689);const i={title:"Basic Commands"},r=void 0,c={unversionedId:"basic-commands.md/basic-commands",id:"basic-commands.md/basic-commands",title:"Basic Commands",description:"The Z3 input format is an extension of the one defined by the SMT-LIB 2.0 standard. A Z3 script is a sequence of commands. The help command displays a list of all available commands. The command echo displays a message. Internally, Z3 maintains a stack of user provided formulas and declarations. We say these are the assertions provided by the user. The command declare-const declares a constant of a given type (aka sort). The command declare-fun declares a function. In the following example, we declared a function that receives an integer and a boolean, and returns an integer.",source:"@site/docs/02 - basic-commands.md/01 - basic-commands.md",sourceDirName:"02 - basic-commands.md",slug:"/basic-commands.md/basic-commands",permalink:"/rise4fun/docs/basic-commands.md/basic-commands",draft:!1,editUrl:"https://github.com/microsoft/rise4fun/tree/main/website/docs/02 - basic-commands.md/01 - basic-commands.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Basic Commands"},sidebar:"tutorialSidebar",previous:{title:"Basic Commands",permalink:"/rise4fun/docs/category/basic-commands"},next:{title:"Using Scopes",permalink:"/rise4fun/docs/basic-commands.md/using-scopes"}},d={},l=[],m={toc:l};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Z3 input format is an extension of the one defined by the ",(0,s.kt)("a",{parentName:"p",href:"httpwww.smtlib.org"},"SMT-LIB 2.0 standard"),". A Z3 script is a sequence of commands. The help command displays a list of all available commands. The command echo displays a message. Internally, Z3 maintains a stack of user provided formulas and declarations. We say these are the assertions provided by the user. The command declare-const declares a constant of a given type (aka sort). The command declare-fun declares a function. In the following example, we declared a function that receives an integer and a boolean, and returns an integer."),(0,s.kt)(o.Z,{input:{code:'(echo "starting Z3...")\n(declare-const a Int)\n(declare-fun f (Int Bool) Int)',result:{output:"starting Z3...\n",error:"",status:"z3-ran",hash:"bfbc524180e61ce5ee275d66a943784c844ca3e1"}},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"The command assert adds a formula into the Z3 internal stack. We say the set of formulas in the Z3 stack is satisfiable if there is an interpretation (for the user declared constants and functions) that makes all asserted formulas true."),(0,s.kt)(o.Z,{input:{code:"(declare-const a Int)\n(declare-fun f (Int Bool) Int)\n(assert (< a 10))\n(assert (< (f a true) 100))\n(check-sat)",result:{output:"sat\n",error:"",status:"z3-ran",hash:"38cce43cdf95f616b26622ff277f4950858a040b"}},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"The first asserted formula states that the constant a must be greater than 10. The second one states that the function f applied to a and true must return a value less than 100. The command check-sat determines whether the current formulas on the Z3 stack are satisfiable or not. If the formulas are satisfiable, Z3 returns sat. If they are not satisfiable (i.e., they are unsatisfiable), Z3 returns unsat. Z3 may also return unknown when it can't determine whether a formula is satisfiable or not."),(0,s.kt)("p",null,"When the command check-sat returns sat, the command get-model can be used to retrieve an interpretation that makes all formulas on the Z3 internal stack true."),(0,s.kt)(o.Z,{input:{code:"(declare-const a Int)\n(declare-fun f (Int Bool) Int)\n(assert (< a 10))\n(assert (< (f a true) 100))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun a () Int\n    0)\n  (define-fun f ((x!0 Int) (x!1 Bool)) Int\n    0)\n)\n",error:"",status:"z3-ran",hash:"f7863ea66173964d1929346e3b6d7c528e42376f"}},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"The interpretation is provided using definitions. For example, the definition"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"}," define-fun a () Int ","[val]",")")),(0,s.kt)("p",null,"states that the value of a in the model is ","[val]",". The definition"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"(define-fun f ((x!1 Int) (x!2 Bool)) Int\n...\n)")),(0,s.kt)("p",null,"is very similar to a function definition used in programming languages. In this example, x1 and x2 are the arguments of the function interpretation created by Z3. For this simple example, the definition of f is based on ite's (aka if-then-elses or conditional expressions). For example, the expression"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"(ite (and (= x!1 11) (= x!2 false)) 21 0)")),(0,s.kt)("p",null,"evaluates (returns) 21 when x!1 is equal to 11, and x!2 is equal to false. Otherwise, it returns 0."))}u.isMDXComponent=!0}}]);