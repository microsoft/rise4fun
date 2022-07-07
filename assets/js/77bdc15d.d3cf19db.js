"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[961],{2024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(3117),r=(n(7294),n(3905)),i=n(7689);const s={title:"Sequences",sidebar_position:11},o=void 0,d={unversionedId:"guide/Sequences",id:"guide/Sequences",title:"Sequences",description:"The sort constructor Seq can be used to create sequences over any base sort.",source:"@site/docs/01 - guide/11 - Sequences.md",sourceDirName:"01 - guide",slug:"/guide/Sequences",permalink:"/z3guide/docs/guide/Sequences",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/01 - guide/11 - Sequences.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Sequences",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Strings",permalink:"/z3guide/docs/guide/Strings"},next:{title:"Regular Expressions",permalink:"/z3guide/docs/guide/Regular Expressions"}},l={},p=[{value:"Operations",id:"operations",level:2},{value:"Sequence Examples",id:"sequence-examples",level:2},{value:"Map and Fold",id:"map-and-fold",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The sort constructor ",(0,r.kt)("inlineCode",{parentName:"p"},"Seq")," can be used to create sequences over any base sort.\nFor example, a sequence of integers is ",(0,r.kt)("inlineCode",{parentName:"p"},"(Seq Int)"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"(Seq Unicode)"),"\nis the definition of ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,r.kt)("h2",{id:"operations"},"Operations"),(0,r.kt)("p",null,"Most string operations have corresponding sequence variants. In addition, there are operations\nto create a unit sequence and the empty sequence over any base sort."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Brief description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.unit elem)")),(0,r.kt)("td",{parentName:"tr",align:null},"Sequence with a single element ",(0,r.kt)("inlineCode",{parentName:"td"},"elem"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(as seq.empty (Seq Int))")),(0,r.kt)("td",{parentName:"tr",align:null},"The empty sequence of integers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.++ a b c)")),(0,r.kt)("td",{parentName:"tr",align:null},"Concatenation of one or more sequences")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.len s)")),(0,r.kt)("td",{parentName:"tr",align:null},"Sequence length. Returns an integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.extract s offset length)")),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieves sub-sequence of ",(0,r.kt)("inlineCode",{parentName:"td"},"s")," at ",(0,r.kt)("inlineCode",{parentName:"td"},"offset"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.indexof s sub [offset])")),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieves first position of ",(0,r.kt)("inlineCode",{parentName:"td"},"sub")," in ",(0,r.kt)("inlineCode",{parentName:"td"},"s"),", -1 if there are no occurrences")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.at s offset)")),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-sequence of length 1 at ",(0,r.kt)("inlineCode",{parentName:"td"},"offset")," in ",(0,r.kt)("inlineCode",{parentName:"td"},"s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.nth s offset)")),(0,r.kt)("td",{parentName:"tr",align:null},"Element at ",(0,r.kt)("inlineCode",{parentName:"td"},"offset")," in ",(0,r.kt)("inlineCode",{parentName:"td"},"s"),". If ",(0,r.kt)("inlineCode",{parentName:"td"},"offset")," is out of bounds the result is under-specified. In other words, it is treated as a fresh variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.contains s sub)")),(0,r.kt)("td",{parentName:"tr",align:null},"Does ",(0,r.kt)("inlineCode",{parentName:"td"},"s")," contain the sub-sequence ",(0,r.kt)("inlineCode",{parentName:"td"},"sub"),"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.prefixof pre s)")),(0,r.kt)("td",{parentName:"tr",align:null},"Is ",(0,r.kt)("inlineCode",{parentName:"td"},"pre")," a prefix of ",(0,r.kt)("inlineCode",{parentName:"td"},"s"),"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.suffixof suf s)")),(0,r.kt)("td",{parentName:"tr",align:null},"Is ",(0,r.kt)("inlineCode",{parentName:"td"},"suf")," a suffix of ",(0,r.kt)("inlineCode",{parentName:"td"},"s"),"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.replace s src dst)")),(0,r.kt)("td",{parentName:"tr",align:null},"Replace the first occurrence of ",(0,r.kt)("inlineCode",{parentName:"td"},"src")," by ",(0,r.kt)("inlineCode",{parentName:"td"},"dst")," in ",(0,r.kt)("inlineCode",{parentName:"td"},"s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.map fn s)")),(0,r.kt)("td",{parentName:"tr",align:null},"Map function (an expression of sort ",(0,r.kt)("inlineCode",{parentName:"td"},"(Array S T)"),") on sequence ",(0,r.kt)("inlineCode",{parentName:"td"},"s")," of sort ",(0,r.kt)("inlineCode",{parentName:"td"},"(Seq S)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.mapi fn s)")),(0,r.kt)("td",{parentName:"tr",align:null},"Map function (an expression of sort ",(0,r.kt)("inlineCode",{parentName:"td"},"(Array Int S T)"),") on sequence ",(0,r.kt)("inlineCode",{parentName:"td"},"s")," of sort ",(0,r.kt)("inlineCode",{parentName:"td"},"(Seq S)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.fold_left fn b s)")),(0,r.kt)("td",{parentName:"tr",align:null},"Fold function (an expression of sort ",(0,r.kt)("inlineCode",{parentName:"td"},"(Array T S T)"),") on initial value ",(0,r.kt)("inlineCode",{parentName:"td"},"b")," of sort ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," and sequence ",(0,r.kt)("inlineCode",{parentName:"td"},"s")," of sort ",(0,r.kt)("inlineCode",{parentName:"td"},"(Seq S)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(seq.fold_lefti fn o b s)")),(0,r.kt)("td",{parentName:"tr",align:null},"Fold function (an expression of sort ",(0,r.kt)("inlineCode",{parentName:"td"},"(Array Int T S T)"),") on offset ",(0,r.kt)("inlineCode",{parentName:"td"},"o"),", initial value ",(0,r.kt)("inlineCode",{parentName:"td"},"b")," of sort ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," and sequence ",(0,r.kt)("inlineCode",{parentName:"td"},"s")," of sort ",(0,r.kt)("inlineCode",{parentName:"td"},"(Seq S)"))))),(0,r.kt)("h2",{id:"sequence-examples"},"Sequence Examples"),(0,r.kt)("p",null,"When inserting ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," at or after position 8, but before the length of the string, which is at least 10,\nthen the resulting string has the same length, and either character 8 or 9 are unchanged."),(0,r.kt)(i.Z,{input:{code:"(declare-const s (Seq Int))\n(declare-const t (Seq Int))\n(declare-const j Int)\n(declare-const b Int)\n\n(assert (<= 10 (seq.len s)))\n(assert (<= 8 j))\n(assert (< j (seq.len s)))\n(assert (= t (seq.++ (seq.extract s 0 j) (seq.unit b) (seq.extract s (+ j 1) (- (seq.len s) j 1)))))\n(push)\n(assert (not (= (seq.unit b) (seq.at t j))))\n(check-sat)\n(pop)\n(push)\n(assert (not (= (seq.len s) (seq.len t))))\n(check-sat)\n(pop)\n(push)\n(assert (not (= (seq.at s 8) (seq.at t 8))))\n(assert (not (= (seq.at s 9) (seq.at t 9))))\n(check-sat)\n(pop)",result:{output:"unsat\nunsat\nunsat\n",error:"",status:"z3-ran",hash:"76845c2a4df47b13b624afd000cec8d8f1141e3e"}},mdxType:"Z3CodeBlock"}),(0,r.kt)("h2",{id:"map-and-fold"},"Map and Fold"),(0,r.kt)("p",null,"The functions map and fold (left) are modeled after the functions found in ML languages.\nOur version of ",(0,r.kt)("inlineCode",{parentName:"p"},"fold_lefti"),", where the current index of the sequence element is available is slightly different, it takes as an additional argument\nalso an offset. The advantage of including the offset is that it is easier to formulate how the function decomposes over sequence concatenation.\nThe decision procedure for map and fold behaves similar to recursive function unfolding."))}m.isMDXComponent=!0}}]);