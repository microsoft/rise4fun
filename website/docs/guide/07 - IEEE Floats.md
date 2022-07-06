--- 
title: IEEE Floats
sidebar_position: 7
---


> **SMTLIB2 standard** [IEEE Floating Point Numbers](http://smtlib.cs.uiowa.edu/theories-FloatingPoint.shtml)



```z3
(declare-fun X () (_ FloatingPoint 11 53))

(assert (fp.isNormal X))
(assert (not (fp.isSubnormal X)))
(assert (not (fp.isZero X)))
(assert (not (fp.isInfinite X)))
(assert (not (fp.isNaN X)))
(assert (not (fp.isNegative X)))
(assert (fp.isPositive X))

(check-sat)
(get-model)
```
