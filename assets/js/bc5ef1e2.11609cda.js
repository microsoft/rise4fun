"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9094],{7597:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(8168),n=(t(6540),t(5680));t(2317);const i={title:"Local Search",sidebar_position:7},r="Local Search",l={unversionedId:"Local Search",id:"Local Search",title:"Local Search",description:"* As a stand-alone incomplete local search solver that can be invoked using a tactic called sls-smt.",source:"@site/docs-programming/07 - Local Search.md",sourceDirName:".",slug:"/Local Search",permalink:"/z3guide/programming/Local Search",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-programming/07 - Local Search.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Local Search",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Proof Logs",permalink:"/z3guide/programming/Proof Logs"}},o={},c=[],d={toc:c},g="wrapper";function h(e){let{components:a,...t}=e;return(0,n.yg)(g,(0,s.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"local-search"},"Local Search"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"As a stand-alone incomplete local search solver that can be invoked using a tactic called ",(0,n.yg)("em",{parentName:"li"},"sls-smt"),".")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Within a sequential integration with CDCL(T). It is enabled by setting ",(0,n.yg)("t",null,"smt.sls.enable=true, smt.sls.parallel=false"),".\nIt integrates with CDCL(T) as a theory solver that invokes local search periodically. It is invoked during restarts,\nfinal checks and when the solver transitions from a total assignment to the propositional abstraction of the formula being solved.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"As a parallel solver that is spawned in tandem with CDCL solving. It has an advantage over the sequential\nsolver that no fine-grained resource budgeting is required to fairly divide time between local solving and CDCL."))),(0,n.yg)("p",null,"The sequential and parallel solvers synchronize learned units, candidate value assignments,\nphase and branching priorities.\nTHe local search solver parameters can be fine-tuned by setting parameters in the ",(0,n.yg)("a",{parentName:"p",href:"Parameters#sls"},"sls")," namespace."))}h.isMDXComponent=!0}}]);