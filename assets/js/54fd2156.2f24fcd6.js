"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5053],{3697:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=o(7462),r=(o(7294),o(3905));o(7634);const n={title:"Introduction",sidebar_position:1},a=void 0,s={unversionedId:"logic/intro",id:"logic/intro",title:"Introduction",description:"Z3 is a state-of-the art theorem prover from Microsoft Research. It can be used to check the satisfiability of logical formulas over one or more theories. Z3 offers a compelling match for software analysis and verification tools, since several common software constructs map directly into supported theories.",source:"@site/docs-smtlib/01 - logic/01 - intro.md",sourceDirName:"01 - logic",slug:"/logic/intro",permalink:"/z3guide/docs/logic/intro",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/01 - logic/01 - intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"smtlibSidebar",next:{title:"Basic Commands",permalink:"/z3guide/docs/logic/basiccommands"}},l={},c=[{value:"SMTLIB Format",id:"smtlib-format",level:2}],d={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Z3 is a state-of-the art theorem prover from Microsoft Research. It can be used to check the satisfiability of logical formulas over one or more theories. Z3 offers a compelling match for software analysis and verification tools, since several common software constructs map directly into supported theories."),(0,r.kt)("p",null,"The main objective of the tutorial is to introduce the reader on how to use Z3 effectively for logical modeling and solving. The tutorial provides some general background on logical modeling, but we defer a full introduction to first-order logic and decision procedures to text-books, if you want to develop an in-depth understanding of the underlying concepts. To clarify: a deep understanding of logical modeling is not required to understand this tutorial and modeling with Z3, but it is necessary for writing complex models."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"For an understanding of computational logic from the foundations of first-order logic to state-of-the-art decision procedures for arithmetic, data structures, and combination theories, refer to  ",(0,r.kt)("a",{parentName:"p",href:"https://theory.stanford.edu/~arbrad/book.html"},"The Calculus of Computation by Aaron Bradley and Zohar Manna"))),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"For an understanding of decision procedures, algorithms that, given a decision problem, terminate with a correct yes or no answer, refer to ",(0,r.kt)("a",{parentName:"p",href:"http://www.decision-procedures.org/"},"Decision Procedures by Daniel Kroening and Ofer Strichman"))),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"For an overview of Satisfiability modulo theories (SMT) and Boolean satisfiability problem (SAT) solvers, examples of their theoretical application, and questions to work through, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://sat-smt.codes/SAT_SMT_by_example.pdf"},"SAT/SMT by Example by Dennis Yurichev")," "))),(0,r.kt)("p",null,"Z3 is a low-level tool. It is best used as a component in the context of other tools that require solving logical formulas. Consequently, Z3 exposes a number of API facilities to make it convenient for tools to map into Z3, but there are no stand-alone editors or user-centric facilities for interacting with Z3. The language syntax used in the front ends favor simplicity in contrast to linguistic convenience."),(0,r.kt)("h2",{id:"smtlib-format"},"SMTLIB Format"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This tutorial uses Z3's frontend for the ",(0,r.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/"},"SMTLIB format"),".")),(0,r.kt)("p",null,"The SMTLIB format is a community standard used by several SMT solvers.\nIt uses LISP-like syntax to make it easy for tools to serialize and de-serialize models.\nOn the flip-side, it is not optimized for human readability.\nThe SMTLIB initiative defines several theories, and Z3 supports all main theories in the SMTLIB2 format.\nThis tutorial cross-references the definitions of theories in relevant sections."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"}," Be sure to follow along with the examples by clicking the edit link in the corner. See what the tool says, try your own formulas, and experiment!")))}m.isMDXComponent=!0}}]);