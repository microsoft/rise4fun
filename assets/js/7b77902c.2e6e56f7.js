"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[579],{5184:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=i(3117),a=(i(7294),i(3905)),o=i(7689);const s={title:"Arithmetical Optimization",sidebar_position:3},r=void 0,d={unversionedId:"optimization/arithmeticaloptimization",id:"optimization/arithmeticaloptimization",title:"Arithmetical Optimization",description:"The SMT-LIB 2.0 standard is extended with three commands for expressing optimization objectives.",source:"@site/docs/03 - optimization/03 - arithmeticaloptimization.md",sourceDirName:"03 - optimization",slug:"/optimization/arithmeticaloptimization",permalink:"/z3guide/docs/optimization/arithmeticaloptimization",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/03 - optimization/03 - arithmeticaloptimization.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Arithmetical Optimization",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Optimization from the API",permalink:"/z3guide/docs/optimization/apioptimization"},next:{title:"Soft Constraints",permalink:"/z3guide/docs/optimization/softconstraints"}},c={},m=[{value:"Unbounded Objectives",id:"unbounded-objectives",level:2},{value:"Tight Bounds",id:"tight-bounds",level:2}],p={toc:m};function l(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/"},"SMT-LIB 2.0")," standard is extended with three commands for expressing optimization objectives.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"(maximize t)")," command instructs check-sat to produce a model that maximizes the value of term t. The type of ",(0,a.kt)("inlineCode",{parentName:"p"},"t")," must be either ",(0,a.kt)("inlineCode",{parentName:"p"},"Int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Real"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"BitVec"),"."),(0,a.kt)(o.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(assert (< x 2))\n(assert (< (- y x) 1))\n(maximize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) 2)\n)\n",error:"",status:"z3-ran",hash:"7803382886816d2be39a0bdd9875ba5ff36d9456"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"(minimize t)")," command instructs check-sat to produce a model that minimizes the value of term ",(0,a.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,a.kt)(o.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(assert (< x 4))\n(assert (< (- y x) 1))\n(assert (> y 1))\n(minimize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) 4)\n)\n",error:"",status:"z3-ran",hash:"05ebc5fae806bcaf87ce1224003bf4e89505fac8"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("h2",{id:"unbounded-objectives"},"Unbounded Objectives"),(0,a.kt)("p",null,"Not all objective functions are bounded. Z3 indicates that the maxima are at infinity, and the minima are negative infinity."),(0,a.kt)(o.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(assert (< x 2))\n(assert (> (- y x) 1))\n(maximize (+ x y))\n(check-sat)\n",result:{output:"sat\n",error:"",status:"z3-ran",hash:"4e1629f64441562a8d41a27eddb2e43f434f24fb"}},mdxType:"Z3CodeBlock"}),(0,a.kt)(o.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(assert (< x 4))\n(assert (< (- y x) 1))\n(assert (< y 1))\n(minimize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) (* (- 1) oo))\n)\n",error:"",status:"z3-ran",hash:"4c7bfdedc3be146aaa4474f5a09949b0f07d2a18"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("h2",{id:"tight-bounds"},"Tight Bounds"),(0,a.kt)("p",null,"Not all finite bounds can be expressed as real numbers. Bounds obtained around strict inequalities are expressed using infinitesimals."),(0,a.kt)(o.Z,{input:{code:"(declare-const x Real)\n(declare-const y Real)\n(assert (< x 4))\n(assert (< y 5))\n(maximize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) (+ 9.0 (* (- 2.0) epsilon)))\n)\n",error:"",status:"z3-ran",hash:"1c99010c05207bdc20d91061a0bbf3ca1d9d4382"}},mdxType:"Z3CodeBlock"}))}l.isMDXComponent=!0}}]);