"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9416],{8387:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(8168),t=(n(6540),n(5680)),o=n(2317),s=n.n(o);const i={title:"Special Relations",sidebar_position:10},l=void 0,d={unversionedId:"theories/Special Relations",id:"theories/Special Relations",title:"Special Relations",description:"Special Binary Relations",source:"@site/docs-smtlib/02 - theories/10 - Special Relations.md",sourceDirName:"02 - theories",slug:"/theories/Special Relations",permalink:"/z3guide/docs/theories/Special Relations",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/02 - theories/10 - Special Relations.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Special Relations",sidebar_position:10},sidebar:"smtlibSidebar",previous:{title:"Unicode Characters",permalink:"/z3guide/docs/theories/Characters"},next:{title:"Introduction",permalink:"/z3guide/docs/strategies/intro"}},u={},c=[{value:"Special Binary Relations",id:"special-binary-relations",level:2},{value:"Partial Order",id:"partial-order",level:3},{value:"Linear Order",id:"linear-order",level:3},{value:"Tree Order",id:"tree-order",level:3},{value:"Piece-wise Linear Order",id:"piece-wise-linear-order",level:3},{value:"Transitive Closures",id:"transitive-closures",level:2}],A={toc:c},f="wrapper";function y(e){let{components:r,...n}=e;return(0,t.yg)(f,(0,a.A)({},A,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"special-binary-relations"},"Special Binary Relations"),(0,t.yg)("p",null,"Binary relations that are partial orders, linear orders, tree orders, and piece-wise linear orders\ncan be axiomatized using first order quantifiers. However, reasoning with these quantified axioms involves\nnon-linear overhead, up to a quadratic number of quantifier instantiations.\nThe decision procedures for partial, linear, tree and piece-wise linear orders in z3\nuse variants of Bellman-Ford push relabeling graphs."),(0,t.yg)("h3",{id:"partial-order"},"Partial Order"),(0,t.yg)(s(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-sort A 0)\n(declare-fun R (A A) Bool)\n(assert (forall ((x A)) (R x x)))\n(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))",result:{output:"",error:"",status:"z3-ran",hash:"68e08375299fe279355ab86c5888ed1df7a74135"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.12.1",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,t.yg)("p",null,"Use instead"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"(define-fun R ((x A) (y A)) Bool ((_ partial-order 0) x y))\n")),(0,t.yg)("p",null,"We are using the index 0 to identify the partial order relation ",(0,t.yg)("inlineCode",{parentName:"p"},"R"),". To create a different relation that is also a partial order use\na different index, such as ",(0,t.yg)("inlineCode",{parentName:"p"},"(_ partial-order 1)"),"."),(0,t.yg)("h3",{id:"linear-order"},"Linear Order"),(0,t.yg)(s(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-sort A 0)\n(declare-fun R (A A) Bool)\n(assert (forall ((x A)) (R x x)))\n(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))\n(assert (forall ((x A) (y A)) (or (R x y) (R y x))))\n\n",result:{output:"",error:"",status:"z3-ran",hash:"cd55d50a1908e5c822bcedf88520d71b943278dd"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.12.1",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,t.yg)("p",null,"Use instead"),(0,t.yg)(s(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-sort A 0)\n(define-fun R ((x A) (y A)) Bool ((_ linear-order 0) x y))\n\n(declare-const a A)\n(declare-const b A)\n(declare-const c A)\n(declare-const d A)\n(assert (R a b))\n(assert (R a c))\n\n(check-sat)\n(get-model)\n(eval (R a d))\n\n; at least one of these relations have to hold:\n(eval (R b c))\n(eval (R c b))\n\n(assert (not (R c d)))\n(assert (not (R d c)))\n(check-sat)",result:{output:"sat\n(\n  ;; universe for A:\n  ;;   A!val!2 A!val!1 A!val!0 \n  ;; -----------\n  ;; definitions for universe elements:\n  (declare-fun A!val!2 () A)\n  (declare-fun A!val!1 () A)\n  (declare-fun A!val!0 () A)\n  ;; cardinality constraint:\n  (forall ((x A)) (or (= x A!val!2) (= x A!val!1) (= x A!val!0)))\n  ;; -----------\n  (define-fun b () A\n    A!val!1)\n  (define-fun a () A\n    A!val!0)\n  (define-fun c () A\n    A!val!2)\n  (define-fun d () A\n    A!val!2)\n)\nfalse\ntrue\ntrue\nunsat\n",error:"",status:"z3-ran",hash:"47014715541b883b5ba546ba642da28da034258e"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.12.1",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,t.yg)("h3",{id:"tree-order"},"Tree Order"),(0,t.yg)(s(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-sort A 0)\n(declare-fun R (A A) Bool)\n(assert (forall ((x A)) (R x x)))\n(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R y x) (R z x)) (or (R y z) (R z y)))))\n",result:{output:"",error:"",status:"z3-ran",hash:"7174bd2cfd63ae8644170ba67df169c0b0cc0e69"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.12.1",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,t.yg)("p",null,"Use instead"),(0,t.yg)(s(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"\n(declare-sort A 0)\n(define-fun R ((x A) (y A)) Bool ((_ tree-order 0) x y))\n\n(declare-const a A)\n(declare-const b A)\n(declare-const c A)\n(declare-const d A)\n(assert (R a b))\n(assert (R b d))\n(assert (R a c))\n(assert (R c d))\n(check-sat)\n(get-model)\n(assert (not (R b c)))\n(assert (not (R c b)))\n(check-sat)",result:{output:"sat\n(\n  ;; universe for A:\n  ;;   A!val!2 A!val!1 A!val!0 A!val!3 \n  ;; -----------\n  ;; definitions for universe elements:\n  (declare-fun A!val!2 () A)\n  (declare-fun A!val!1 () A)\n  (declare-fun A!val!0 () A)\n  (declare-fun A!val!3 () A)\n  ;; cardinality constraint:\n  (forall ((x A)) (or (= x A!val!2) (= x A!val!1) (= x A!val!0) (= x A!val!3)))\n  ;; -----------\n  (define-fun b () A\n    A!val!1)\n  (define-fun a () A\n    A!val!0)\n  (define-fun d () A\n    A!val!2)\n  (define-fun c () A\n    A!val!3)\n)\nunsat\n",error:"",status:"z3-ran",hash:"ed80a3dea527599c47622eb766336adb00c61d9c"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.12.1",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,t.yg)("h3",{id:"piece-wise-linear-order"},"Piece-wise Linear Order"),(0,t.yg)(s(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-sort A 0)\n(declare-fun R (A A) Bool)\n(assert (forall ((x A)) (R x x)))\n(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R x z)) (or (R y z) (R z y)))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R y x) (R z x)) (or (R y z) (R z y)))))",result:{output:"",error:"",status:"z3-ran",hash:"4646a304f12a993e3e64829c8d8a639a4e6eeb77"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.12.1",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,t.yg)("p",null,"Use instead"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"(define-fun R ((x A) (y A)) Bool ((_ piecewise-linear-order 0) x y))\n")),(0,t.yg)("h2",{id:"transitive-closures"},"Transitive Closures"),(0,t.yg)("p",null,"The transitive closure of a relation is not first-order axiomatizable. However, the decision problem for ground formulas is decidable\nbecause for every binary relation ",(0,t.yg)("inlineCode",{parentName:"p"},"R")," over a finite domain, the transitive closure of it is defined over the finite graph of ",(0,t.yg)("inlineCode",{parentName:"p"},"R"),".\nThe small model property contrasts non-ground first-order formulas using transitive closure that are not first-order axiomatizable."),(0,t.yg)(s(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-sort A 0)\n(declare-fun R (A A) Bool)\n(declare-fun b () A)\n(declare-fun a () A)\n(declare-fun c () A)\n(assert (R a b))\n(assert (R b c))\n(assert (not ((_ transitive-closure R) a c)))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"fed1003f2c69ded05bfef8b29366174e4964fa94"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.12.1",tool:"z3-solver"},mdxType:"CustomCodeBlock"}))}y.isMDXComponent=!0}}]);