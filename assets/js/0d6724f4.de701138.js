"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[326],{2093:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=n(3117),s=(n(7294),n(3905)),r=n(7689);const a={title:"Strings, Sequences and Regular Expressions",sidebar_position:9},o=void 0,i={unversionedId:"sequences",id:"sequences",title:"Strings, Sequences and Regular Expressions",description:"Introduction",source:"@site/docs/sequences.md",sourceDirName:".",slug:"/sequences",permalink:"/rise4fun/docs/sequences",draft:!1,editUrl:"https://github.com/microsoft/rise4fun/tree/main/website/docs/sequences.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Strings, Sequences and Regular Expressions",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Datatypes",permalink:"/rise4fun/docs/Datatypes"},next:{title:"Quantifiers",permalink:"/rise4fun/docs/Quantifiers"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Strings",id:"strings",level:2},{value:"Built-in types and constants",id:"built-in-types-and-constants",level:3},{value:"String literals",id:"string-literals",level:3},{value:"Operations",id:"operations",level:2},{value:"Examples",id:"examples",level:2},{value:"Operations",id:"operations-1",level:2},{value:"Examples",id:"examples-1",level:2},{value:"Operations",id:"operations-2",level:3},{value:"What (not) to expect of regular expressions",id:"what-not-to-expect-of-regular-expressions",level:2},{value:"Examples",id:"examples-2",level:2}],k={toc:c};function d(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"This section describes Z3's handling of strings, sequences\nand regular expressions. Z3 offers built-in support for\nusing string constants and dedicated solvers for checking\nsatisfiability over constraints using strings, sequences\nand regular expressions.\nNote that the (current) specialized solver is able to establish\nsatisfiability for a non-trivial class of formulas, but is far from\na decision procedure: Z3 only solves string equalities using an incomplete\nheuristic solver (in spite of the existence of complete procedures)\nand the full combination of lengths and sequences\n(and regular expressions) is not decidable anyway.\nIn Z3, strings are a special case of sequences, as set forth in "),(0,s.kt)("a",{href:"http://research.microsoft.com/en-us/people/nbjorner/smtlibstr.pdf"},"a now deprecated proposal on sequences in SMT-LIB"),". The format for strings and regular expressions is mostly compatible with ",(0,s.kt)("a",{href:"http://cvc4.cs.nyu.edu/wiki/Strings"},"CVC4's"),". Note that ",(0,s.kt)("a",{href:"https://sites.google.com/site/z3strsolver/download"},"Z3Str2")," has been available since 2013 as a separate distribution. It contains algorithms that offer an effective search space pruning for solving string equalities. Strings are sequences over 8 bit bit-vectors. In addition, Z3 allows constraints over sequences of arbitrary types.",(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"TBDs")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"add updated link to SMTLIB2 definition of strings"),(0,s.kt)("li",{parentName:"ul"},"update documentation to use new names"),(0,s.kt)("li",{parentName:"ul"},"add notes about regex capabilities (comparing regex)"),(0,s.kt)("li",{parentName:"ul"},"update reference to z3str3"),(0,s.kt)("li",{parentName:"ul"},"split Strings/Sequences from Regular Expressions?")),(0,s.kt)("h2",{id:"strings"},"Strings"),(0,s.kt)("h3",{id:"built-in-types-and-constants"},"Built-in types and constants"),(0,s.kt)("p",null,"The name ",(0,s.kt)("tt",null,"String")," is a built-in name for the String sort.\nString literals can furthermore be entered directly as literals\ndelimited by quotes. The following example asks whether there are\nstrings ",(0,s.kt)("tt",null,"a")," and ",(0,s.kt)("tt",null,"b")," that concatenate to ",(0,s.kt)("tt",null,'"abc"'),"\nfollowed by ",(0,s.kt)("tt",null,"b"),"."),(0,s.kt)(r.Z,{input:{code:'(declare-const a String)\n(declare-const b String)\n(assert (= (str.++ b a) (str.++ "abc" b)))\n(check-sat)\n(get-model)'},mdxType:"Z3CodeBlock"}),(0,s.kt)("h3",{id:"string-literals"},"String literals"),(0,s.kt)("p",null,"Z3 follows the proposed SMT-LIB2.5 format for string\nliterals. Thus, strings are enclosed using double quotes. A sequence\nof two adjacent double quotes within a string literal is used as the\nescape sequence for a quote. So for example ",(0,s.kt)("tt",null,'"quote ""me"" on this"'),"\ncorresponds to the string ",(0,s.kt)("tt",null,'quote "me" on this'),". Other\ncharacters are treated as part of the string. For example, a newline within a string\nis treated as a new-line character. "),(0,s.kt)("p",null,"To represent non-ASCII characters Z3\ntreats the sequence ",(0,s.kt)("tt",null,"\\xHH")," where ",(0,s.kt)("tt",null,"HH")," are two hexa-decimal\nnumerals (using one of the characters, 0-9, a-f, A-F) as an encoding\nof an 8 bit character.\nFurthermore, the following escape sequences correspond to their ASCII escape encodings."),(0,s.kt)("table",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"\\a")," ",(0,s.kt)("td",null,"\\b")," ",(0,s.kt)("td",null,"\\f")," ",(0,s.kt)("td",null,"\\n")," ",(0,s.kt)("td",null,"\\r")," ",(0,s.kt)("td",null,"\\t")," ",(0,s.kt)("td",null,"\\v"))),"Note that other occurrences of the character ",(0,s.kt)("tt",null,"\\")," are treated as the charcter ",(0,s.kt)("tt",null,"\\"),".",(0,s.kt)("p",null,"The following example shows\nthree ways to enter the newline character."),(0,s.kt)(r.Z,{input:{code:'(define-const a String "\\x0a")\n(define-const b String "\n")\n(define-const c String "\\n")\n(simplify (= a b))\n(simplify (= a c))\n(simplify (str.++ a b c))'},mdxType:"Z3CodeBlock"}),(0,s.kt)("h2",{id:"operations"},"Operations"),(0,s.kt)("p",null,"Let us start out with a summary of available string operations."),(0,s.kt)("table",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"Operation"),(0,s.kt)("td",null,"Brief description")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(str.++ a b c)")),(0,s.kt)("td",null,"String concatenation of one or more strings")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(str.len s)")),(0,s.kt)("td",null,"String length. Returns an integer.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(str.substr s offset length)")),(0,s.kt)("td",null,"Retrieves substring of ",(0,s.kt)("tt",null,"s")," at ",(0,s.kt)("tt",null,"offset"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(str.indexof s sub)")),(0,s.kt)("td",null,"Retrieves first position of ",(0,s.kt)("tt",null,"sub")," in ",(0,s.kt)("tt",null,"s"),", -1 if there are no occurrences")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(str.indexof s sub offset)")),(0,s.kt)("td",null,"Retrieves first position of ",(0,s.kt)("tt",null,"sub")," at or after ",(0,s.kt)("tt",null,"offset")," in ",(0,s.kt)("tt",null,"s"),", -1 if there are no occurrences")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(str.at s offset)")),(0,s.kt)("td",null,"Substring of length 1 at ",(0,s.kt)("tt",null,"offset")," in ",(0,s.kt)("tt",null,"s"),".")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(str.contains s sub)")),(0,s.kt)("td",null,"Does ",(0,s.kt)("tt",null,"s")," contain the substring ",(0,s.kt)("tt",null,"sub"),"?")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(str.prefixof pre s)")),(0,s.kt)("td",null,"Is ",(0,s.kt)("tt",null,"pre")," a prefix of ",(0,s.kt)("tt",null,"s"),"?")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(str.suffixof suf s)")),(0,s.kt)("td",null,"Is ",(0,s.kt)("tt",null,"suf")," a suffix of ",(0,s.kt)("tt",null,"s"),"?")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(str.replace s src dst)")),(0,s.kt)("td",null,"Replace the first occurrence of ",(0,s.kt)("tt",null,"src")," by ",(0,s.kt)("tt",null,"dst")," in ",(0,s.kt)("tt",null,"s"),".")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(str.to.int s)")),(0,s.kt)("td",null,"Retrieve integer encoded by string ",(0,s.kt)("tt",null,"s")," (ground rewriting only).")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(int.to.str i)")),(0,s.kt)("td",null,"Retrieve string encoding of integer ",(0,s.kt)("tt",null,"i")," (ground rewriting only)."))),(0,s.kt)("p",null,"Note that ",(0,s.kt)("tt",null,"(str.indexof s offset)")," is shorthand for ",(0,s.kt)("tt",null,"(str.indexof s offset 0)"),"."),(0,s.kt)("p",null,"Some operations have under-specified behavior on certain arguments.\nNamely, ",(0,s.kt)("tt",null,"(str.at s i)")," is unconstrained for indices that are either negative or beyond"),(0,s.kt)("tt",null,"(- (str.len s) 1)"),". Furthermore ",(0,s.kt)("tt",null,"(str.substr s offset length)")," is under-specified when the offset is outside the range of positions in ",(0,s.kt)("tt",null,"s")," or ",(0,s.kt)("tt",null,"length")," is negative or",(0,s.kt)("tt",null,"offset+length")," exceeds the length of ",(0,s.kt)("tt",null,"s"),".",(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Basic string operations"),(0,s.kt)(r.Z,{input:{code:'(simplify (str.++ (str.at "abc" 1) (str.at "abc" 0)))\n(simplify (str.indexof "abcabc" "a"))\n(simplify (str.indexof "abcabc" "a" 1))\n(simplify (str.substr "xxabcyy" 2 3))'},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"A string cannot overlap with two different characters."),(0,s.kt)(r.Z,{input:{code:'(declare-const a String)\n(assert (= (str.++ a "b") (str.++ "a" a)))\n(check-sat)'},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"Strings ",(0,s.kt)("tt",null,"a, b, c")," can have a non-trivial overlap."),(0,s.kt)(r.Z,{input:{code:'(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (= (str.++ a b) "abcd"))\n(assert (= (str.++ b c) "cdef"))\n(assert (not (= b "")))\n(check-sat)'},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"There is a solution to ",(0,s.kt)("tt",null,"a")," of length at most 2."),(0,s.kt)(r.Z,{input:{code:'(declare-const a String)\n(declare-const b String)\n(assert (= (str.++ "abc" a) (str.++ b "cef")))\n(assert (<= (str.len a) 2))\n(check-sat)'},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"There is a solution to ",(0,s.kt)("tt",null,"a"),' that is not a sequence of "a"\'s.'),(0,s.kt)(r.Z,{input:{code:'(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (= (str.++ a "ab" b) (str.++ b "ba" c)))\n(assert (= c (str.++ a b)))\n(assert (not (= (str.++ a "a") (str.++ "a" a))))\n(check-sat)\n(get-model)'},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"Contains is transitive."),(0,s.kt)(r.Z,{input:{code:"(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (str.contains a b))\n(assert (str.contains b c))\n(assert (not (str.contains a c)))\n(check-sat)"},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"But containment is not a linear order."),(0,s.kt)(r.Z,{input:{code:"(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (str.contains a b))\n(assert (str.contains a c))\n(assert (not (str.contains b c)))\n(assert (not (str.contains c b)))\n(check-sat)\n(get-model)"},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"Any string is equal to the prefix and suffix that add up to a its length."),(0,s.kt)(r.Z,{input:{code:"(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (str.prefixof b a))\n(assert (str.suffixof c a))\n(assert (= (str.len a) (+ (str.len b) (str.len c))))\n(assert (not (= a (str.++ b c))))\n(check-sat)"},mdxType:"Z3CodeBlock"}),(0,s.kt)("h1",{id:"sequences"},"Sequences"),(0,s.kt)("p",null,"The sort constructor ",(0,s.kt)("tt",null,"Seq")," can be used to create sequences over any base sort.\nFor example, a sequence of integers is ",(0,s.kt)("tt",null,"(Seq Int)"),", and ",(0,s.kt)("tt",null,"(Seq (_ BitVec 8))"),"\nis the definition of ",(0,s.kt)("tt",null,"String"),"."),(0,s.kt)("h2",{id:"operations-1"},"Operations"),(0,s.kt)("p",null,"Most string operations have corresponding sequence variants. In addition, there are operations\nto create a unit sequence and the empty sequence over any base sort."),(0,s.kt)("table",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"Operation"),(0,s.kt)("td",null,"Brief description")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(seq.unit elem)")),(0,s.kt)("td",null,"Sequence with a single element ",(0,s.kt)("tt",null,"elem"),".")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(as seq.empty (Seq Int))")),(0,s.kt)("td",null,"The empty sequence of integers.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(seq.++ a b c)")),(0,s.kt)("td",null,"Concatenation of one or more sequences.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(seq.len s)")),(0,s.kt)("td",null,"Sequence length. Returns an integer.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(seq.extract s offset length)")),(0,s.kt)("td",null,"Retrieves sub-sequence of ",(0,s.kt)("tt",null,"s")," at ",(0,s.kt)("tt",null,"offset"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(seq.indexof s sub)")),(0,s.kt)("td",null,"Retrieves first position of ",(0,s.kt)("tt",null,"sub")," in ",(0,s.kt)("tt",null,"s"),", -1 if there are no occurrences")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(seq.indexof s sub offset)")),(0,s.kt)("td",null,"Retrieves first position of ",(0,s.kt)("tt",null,"sub")," at or after ",(0,s.kt)("tt",null,"offset")," in ",(0,s.kt)("tt",null,"s"),", -1 if there are no occurrences")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(seq.at s offset)")),(0,s.kt)("td",null,"Sub-sequence of length 1 at ",(0,s.kt)("tt",null,"offset")," in ",(0,s.kt)("tt",null,"s"),".")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(seq.contains s sub)")),(0,s.kt)("td",null,"Does ",(0,s.kt)("tt",null,"s")," contain the sub-sequence ",(0,s.kt)("tt",null,"sub"),"?")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(seq.prefixof pre s)")),(0,s.kt)("td",null,"Is ",(0,s.kt)("tt",null,"pre")," a prefix of ",(0,s.kt)("tt",null,"s"),"?")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(seq.suffixof suf s)")),(0,s.kt)("td",null,"Is ",(0,s.kt)("tt",null,"suf")," a suffix of ",(0,s.kt)("tt",null,"s"),"?")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(seq.replace s src dst)")),(0,s.kt)("td",null,"Replace the first occurrence of ",(0,s.kt)("tt",null,"src")," by ",(0,s.kt)("tt",null,"dst")," in ",(0,s.kt)("tt",null,"s"),"."))),(0,s.kt)("h2",{id:"examples-1"},"Examples"),(0,s.kt)("p",null,"When inserting ",(0,s.kt)("tt",null,"b")," at or after position 8, but before the length of the string, which is at least 10,\nthen the resulting string has the same length, and either character 8 or 9 are unchanged."),(0,s.kt)(r.Z,{input:{code:"(declare-const s (Seq Int))\n(declare-const t (Seq Int))\n(declare-const j Int)\n(declare-const b Int)\n\n(assert (<= 10 (seq.len s)))\n(assert (<= 8 j))\n(assert (< j (seq.len s)))\n(assert (= t (seq.++ (seq.extract s 0 j) (seq.unit b) (seq.extract s (+ j 1) (- (seq.len s) j 1)))))\n(push)\n(assert (not (= (seq.unit b) (seq.at t j))))\n(check-sat)\n(pop)\n(push)\n(assert (not (= (seq.len s) (seq.len t))))\n(check-sat)\n(pop)\n(push)\n(assert (not (= (seq.at s 8) (seq.at t 8))))\n(assert (not (= (seq.at s 9) (seq.at t 9))))\n(check-sat)\n(pop)"},mdxType:"Z3CodeBlock"}),(0,s.kt)("h1",{id:"regular-expressions"},"Regular Expressions"),(0,s.kt)("p",null,"The sort constructor ",(0,s.kt)("tt",null,"RegEx")," takes as argument a sequence type.\nThe set of regular expressions over strings is thus ",(0,s.kt)("tt",null,"(RegEx String)"),"."),(0,s.kt)("h3",{id:"operations-2"},"Operations"),(0,s.kt)("table",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"Operation"),(0,s.kt)("td",null,"Brief description")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(str.to.re s)")),(0,s.kt)("td",null,"Convert string to regular expression accepting ",(0,s.kt)("tt",null,"s"),".")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(str.in.re s r)")),(0,s.kt)("td",null,"Determine if ",(0,s.kt)("tt",null,"s")," is in the language generated by ",(0,s.kt)("tt",null,"r"),".")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"re.allchar")),(0,s.kt)("td",null,"The regular expression accepting every string.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"re.nostr")),(0,s.kt)("td",null,"The regular expression rejecting every string.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(re.range ch1 ch2)")),(0,s.kt)("td",null,"The range of characters between ",(0,s.kt)("tt",null,"ch1")," and ",(0,s.kt)("tt",null,"ch2"),".")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(re.++ r1 r2 r3)")),(0,s.kt)("td",null,"Concatenation of regular expressions.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(re.* r)")),(0,s.kt)("td",null,"Kleene star.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(re.+ r)")),(0,s.kt)("td",null,"Kleene plus.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(re.opt r)")),(0,s.kt)("td",null,"Zero or one use of ",(0,s.kt)("tt",null,"r"),".")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"((_ re.loop lo hi) r)")),(0,s.kt)("td",null,"from ",(0,s.kt)("tt",null,"lo")," to ",(0,s.kt)("tt",null,"hi")," number of repetitions of ",(0,s.kt)("tt",null,"r"),".")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(re.union r1 r2)")),(0,s.kt)("td",null,"The union of regular languages.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(re.inter r1 r2)")),(0,s.kt)("td",null,"The intersection of regular languages. ")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(seq.to.re s)")),(0,s.kt)("td",null,"Convert sequenceto regular expression accepting ",(0,s.kt)("tt",null,"s"),".")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(seq.in.re s r)")),(0,s.kt)("td",null,"Determine if sequence ",(0,s.kt)("tt",null,"s")," is in the language generated by ",(0,s.kt)("tt",null,"r"),".")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(as re.all R)")),(0,s.kt)("td",null,"The regular expression of sort ",(0,s.kt)("tt",null,"R")," accepting every sequence.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("tt",null,"(as re.empty R)")),(0,s.kt)("td",null,"The regular expression of sort ",(0,s.kt)("tt",null,"R")," rejecting every sequence."))),(0,s.kt)("p",null,"The ",(0,s.kt)("tt",null,"re.range")," operator expects two strings each encoding a single character.\nFor example ",(0,s.kt)("tt",null,'(str.range "a" "\\xff")')," is a valid range of characters,\nwhile ",(0,s.kt)("tt",null,'(str.range "aa" "")')," is not associated with any specified range. "),(0,s.kt)("p",null,"For added compatibility with CVC4's format,\nZ3 also accepts expressions of the form ",(0,s.kt)("tt",null,"(re.loop r lo hi)"),".\nZ3 understands only the meaning of these terms when ",(0,s.kt)("tt",null,"lo, hi")," are\ninteger numerals."),(0,s.kt)("h2",{id:"what-not-to-expect-of-regular-expressions"},"What (not) to expect of regular expressions"),(0,s.kt)("p",null,"Z3 converts regular expressions into non-deterministic finite automata and\nexpands membership constraints over symbolic strings and sequences\nwhen it tries to satisfy constraints. This approach works for many\nmembership and non-membership constraints, but is not a complete\nprocedure (and even less complete when there are other constraints\non the symbolic strings).\nIt also does not handle regular expressions symbolic sequences (it allows\nto express non-regular languages).\nThus, the string ",(0,s.kt)("tt",null,"s")," in ",(0,s.kt)("tt",null,"(str.to.re s)")," should be\na string literal. You can write formulas with equalities over\nregular expressions, but chances are that Z3 will not do anything\nprofound with them. Therefore, for now, use regular expressions only in\nconstraints of the form ",(0,s.kt)("tt",null,"(str.in.re s r)"),"."),(0,s.kt)("h2",{id:"examples-2"},"Examples"),(0,s.kt)("p",null,"The maximal length is 6 for a string of length 2 repeated at most 3 times."),(0,s.kt)(r.Z,{input:{code:'(declare-const a String)\n(push)\n(set-info :status sat)\n(assert (str.in.re a ((_ re.loop 1 3) (str.to.re "ab"))))\n(assert (= (str.len a) 6))\n(check-sat)\n(get-model)\n(pop)\n\n(push)\n(set-info :status unsat)\n(assert (str.in.re a ((_ re.loop 1 3) (str.to.re "ab"))))\n(assert (> (str.len a) 6))\n(check-sat)\n(pop)'},mdxType:"Z3CodeBlock"}))}d.isMDXComponent=!0}}]);