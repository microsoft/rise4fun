"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[191],{845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(3117),s=(n(7294),n(3905)),r=n(7689);const o={title:"Arrays",sidebar_position:8},i=void 0,c={unversionedId:"guide/Arrays",id:"guide/Arrays",title:"Arrays",description:"As part of formulating a programme of a mathematical theory of computation McCarthy proposed a basic theory of arrays as characterized by the select-store axioms. The expression (select a i) returns the value stored at position i of the array a; and (store a i v) returns a new array identical to a, but on position i it contains the value v.",source:"@site/docs/01 - guide/08 - Arrays.md",sourceDirName:"01 - guide",slug:"/guide/Arrays",permalink:"/z3guide/docs/guide/Arrays",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/01 - guide/08 - Arrays.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Arrays",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"IEEE Floats",permalink:"/z3guide/docs/guide/IEEE Floats"},next:{title:"Datatypes",permalink:"/z3guide/docs/guide/Datatypes"}},l={},d=[{value:"Select and Store",id:"select-and-store",level:3},{value:"Constant Arrays",id:"constant-arrays",level:3},{value:"Array models",id:"array-models",level:3},{value:"Mapping Functions on Arrays",id:"mapping-functions-on-arrays",level:3},{value:"Bags as Arrays",id:"bags-as-arrays",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As part of formulating a programme of a mathematical theory of computation McCarthy proposed a ",(0,s.kt)("em",{parentName:"p"},"basic")," theory of arrays as characterized by the select-store axioms. The expression (select a i) returns the value stored at position i of the array a; and (store a i v) returns a new array identical to a, but on position i it contains the value v."),(0,s.kt)("p",null,"Z3 contains a decision procedure for the basic theory of arrays. By default, Z3 assumes that arrays are extensional over select. In other words, Z3 also enforces that if two arrays agree on all reads, then the arrays are equal."),(0,s.kt)("p",null,"It also contains various extensions for operations on arrays that remain decidable and amenable to efficient saturation procedures (here efficient means, with an NP-complete satisfiability complexity). We describe these extensions in the following using a collection of examples. Additional background on these extensions is available in the paper ",(0,s.kt)("a",{parentName:"p",href:"https://research.microsoft.com/en-us/um/people/leonardo/fmcad09.pdf"},"Generalized and Efficient Array Decision Procedures"),"."),(0,s.kt)("h3",{id:"select-and-store"},"Select and Store"),(0,s.kt)("p",null,"Let us first check a basic property of arrays. Suppose a1 is an array of integers, then the constraint (and (= (select a1 x) x) (= (store a1 x y) a1)) is satisfiable for an array that contains an index x that maps to x, and when x = y (because the first equality forced the range of x to be x). We can check this constraint."),(0,s.kt)(r.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(declare-const z Int)\n(declare-const a1 (Array Int Int))\n(declare-const a2 (Array Int Int))\n(declare-const a3 (Array Int Int))\n(assert (= (select a1 x) x))\n(assert (= (store a1 x y) a1))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun x () Int\n    3)\n  (define-fun a1 () (Array Int Int)\n    (store ((as const (Array Int Int)) 2) 3 3))\n  (define-fun y () Int\n    3)\n  (define-fun z () Int\n    0)\n  (define-fun a2 () (Array Int Int)\n    ((as const (Array Int Int)) 0))\n  (define-fun a3 () (Array Int Int)\n    ((as const (Array Int Int)) 0))\n)\n",error:"",status:"z3-ran",hash:"a7afb1875c50a39819a1ac4b7c0c9bff68c14958"}},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"On the other hand, the constraints become unsatisfiable when asserting (not (= x y))."),(0,s.kt)(r.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(declare-const z Int)\n(declare-const a1 (Array Int Int))\n(declare-const a2 (Array Int Int))\n(declare-const a3 (Array Int Int))\n(assert (= (select a1 x) x))\n(assert (= (store a1 x y) a1))\n(assert (not (= x y)))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"3ca38eb4e97da9811b69b697cceb075485caf90c"}},mdxType:"Z3CodeBlock"}),(0,s.kt)("h3",{id:"constant-arrays"},"Constant Arrays"),(0,s.kt)("p",null,"The array that maps all indices to some fixed value can be specified in Z3 using the const construct. It takes one value from the range type of the array and creates an array. Z3 cannot infer what kind of array must be returned by the const construct by just inspecting the argument type. Thus, a qualified identifier (as const (Array T1 T2)) must be used. The following example defines a constant array containing only ones."),(0,s.kt)(r.Z,{input:{code:"(declare-const all1 (Array Int Int))\n(declare-const a Int)\n(declare-const i Int)\n(assert (= all1 ((as const (Array Int Int)) 1)))\n(assert (= a (select all1 i)))\n(check-sat)\n(get-model)\n(assert (not (= a 1)))\n(check-sat)",result:{output:"sat\n(\n  (define-fun a () Int\n    1)\n  (define-fun all1 () (Array Int Int)\n    ((as const (Array Int Int)) 1))\n  (define-fun i () Int\n    0)\n)\nunsat\n",error:"",status:"z3-ran",hash:"20a562bcb9466d70ced788abd40b06aaa88350f2"}},mdxType:"Z3CodeBlock"}),(0,s.kt)("h3",{id:"array-models"},"Array models"),(0,s.kt)("p",null,"Models provide interpretations of the uninterpreted (aka free) constants and functions that appear in the satisfiable formula. An interpretation for arrays is very similar to the interpretation of a function. Z3 uses the construct (",(0,s.kt)("em",{parentName:"p"}," as-array f) to give the interpretation for arrays. If the array a is equal to (")," as-array f), then for every index i, (select a i) is equal to (f i). In the previous example, Z3 creates the auxiliary function k!0 to assign an interpretation to the array constant all1."),(0,s.kt)("h3",{id:"mapping-functions-on-arrays"},"Mapping Functions on Arrays"),(0,s.kt)("p",null,"In the following, we will simulate basic Boolean algebra (set theory) using the array theory extensions in Z3. Z3 provides a parametrized map function on arrays. It allows applying arbitrary functions to the range of arrays. The following example illustrates how to use the map function.\nThe type constructor ",(0,s.kt)("inlineCode",{parentName:"p"},"(Set T)")," is a macro for ",(0,s.kt)("inlineCode",{parentName:"p"},"(Array T Bool)"),"."),(0,s.kt)(r.Z,{input:{code:"(declare-const a (Set Int))\n(declare-const b (Set Int))\n(declare-const c (Set Int))\n(declare-const x Int)\n(push)\n(assert (not (= ((_ map and) a b) ((_ map not) ((_ map or) ((_ map not) b) ((_ map not) a))))))\n(check-sat)\n(pop)\n(push) \n(assert (and (select ((_ map and) a b) x) (not (select a x))))\n(check-sat)\n(pop)\n(push) \n(assert (and (select ((_ map or) a b) x) (not (select a x))))\n(check-sat)\n(get-model)\n(assert (and (not (select b x))))\n(check-sat)",result:{output:"unsat\nunsat\nsat\n(\n  (define-fun x () Int\n    2)\n  (define-fun b () (Set Int)\n    ((as const (Set Int)) true))\n  (define-fun a () (Set Int)\n    ((as const (Set Int)) false))\n  (define-fun c () (Set Int)\n    ((as const (Set Int)) false))\n)\nunsat\n",error:"",status:"z3-ran",hash:"380331b54bf84201bfa168421429d163f3f51999"}},mdxType:"Z3CodeBlock"}),(0,s.kt)("h3",{id:"bags-as-arrays"},"Bags as Arrays"),(0,s.kt)("p",null,"We can use the parametrized map function to encode finite sets and finite bags. Finite bags can be modeled similarly to sets. A bag is here an array that maps elements to their multiplicity. Main bag operations include union, obtained by adding multiplicity, intersection, by taking the minimum multiplicity, and a dual join operation that takes the maximum multiplicity. In the following example, we define the bag-union using map. Notice that we need to specify the full signature of + since it is an overloaded operator."),(0,s.kt)(r.Z,{input:{code:"(define-sort A () (Array Int Int Int))\n(define-fun bag-union ((x A) (y A)) A\n  ((_ map (+ (Int Int) Int)) x y))\n(declare-const s1 A)\n(declare-const s2 A)\n(declare-const s3 A)\n(assert (= s3 (bag-union s1 s2)))\n(assert (= (select s1 0 0) 5))\n(assert (= (select s2 0 0) 3))\n(assert (= (select s2 1 2) 4))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun s2 () (Array Int Int Int)\n    (store ((as const (Array Int Int Int)) 3) 1 2 4))\n  (define-fun s1 () (Array Int Int Int)\n    ((as const (Array Int Int Int)) 5))\n  (define-fun s3 () (Array Int Int Int)\n    (store ((as const (Array Int Int Int)) 8) 1 2 9))\n)\n",error:"",status:"z3-ran",hash:"b302a4c60b4ace824b94b526769de379a974d7ab"}},mdxType:"Z3CodeBlock"}))}p.isMDXComponent=!0}}]);