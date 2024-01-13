"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1934],{5184:(i,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>m});var e=o(7462),s=(o(7294),o(3905));o(7634);const r={title:"Introduction",sidebar_position:1},n=void 0,a={unversionedId:"optimization/intro",id:"optimization/intro",title:"Introduction",description:"Z3's main functionality is checking the satisfiability of logical formulas over one or more theories. Z3 can also produce models for satisfiable formulas.",source:"@site/docs-smtlib/04 - optimization/01 - intro.md",sourceDirName:"04 - optimization",slug:"/optimization/intro",permalink:"/z3guide/docs/optimization/intro",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/04 - optimization/01 - intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"smtlibSidebar",previous:{title:"Simplifiers Summary",permalink:"/z3guide/docs/strategies/simplifiers-summary"},next:{title:"Optimization from the API",permalink:"/z3guide/docs/optimization/apioptimization"}},l={},m=[],c={toc:m};function p(i){let{components:t,...o}=i;return(0,s.kt)("wrapper",(0,e.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Z3's main functionality is checking the satisfiability of logical formulas over one or more theories. Z3 can also produce models for satisfiable formulas.\nHowever, arbitrary models are insufficient in many cases where applications are really solving optimization problems:\none or more values should be minimal or maximal. When there are multiple objectives, they should be combined using Pareto fronts, lexicographic priorities, or optimized independently."),(0,s.kt)("p",null,"This section describes a feature exposed by Z3 that lets users formulate objective functions directly with Z3. Under the hood is a portfolio of approaches for solving linear optimization problems over SMT formulas, MaxSMT, and their combinations."))}p.isMDXComponent=!0}}]);