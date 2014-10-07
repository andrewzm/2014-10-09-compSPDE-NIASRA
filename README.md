
Slides for NIASRA talk on (i) efficient computation of marginal variances and (ii) parallel Gibbs sampling in an SPDE context 09/10/2014

Sparse linear algebraic methods and MPI with spatio-temporal models
========

In recent years, several approaches to spatio-temporal modelling have spawned as a result of accruing big-data availability. One which has gained considerable interest is the use of a Stochastic Partial Differential Equations (SPDEs) of the Laplace type, in particular those describing Matern spatial fields. In the first half of the talk I will provide a tutorial overview of why this is the case, placing particular emphasis on finite element decomposition of the SPDEs and the ensuing sparsity properties of the reduced model. In doing so I reveal some of the computational limitations which may arise in a big-data, big-model context, despite the use of sparse-matrix linear-algebraic methods.

In the second part of the talk I will concentrate on two computational 'tricks' one may employ when (i) finding the predictive variance at thousands or millions of locations in space and time following a standard Gaussian update and (ii) inferring the hidden hidden states and underlying parameters on a variable-density mesh. In the former I show how, under mild conditions, we can convert a relatively expensive (sparse) backsolve operation into a standard matrix multiplication on an easily-computable sparse subset of the covariance matrix. In the latter I show how we can employ graph colouring (in particular the four-colour theorem) and graph partitioning techniques in order to provide an 'in-sample' parallel Gibbs sampling scheme implemented with Message Passing Interface (MPI).

The talk will focus on the framework of Lindgren et al. (2011) and on the multi-variate spatio-temporal study in Zammit-Mangion et al. (2014) and Zammit-Mangion et al. (in review). Slides for this talk are available on http://www.github.com/andrewzm/MVST/compSPDE-NIASRA-10-14

References:

Lindgren F, Rue H, Lindstrom J, 2011. An explicit link between Gaussian fields and Gaussian Markov random fields: the stochastic partial differential equation approach. Journal of the Royal Statistical Society B 73(4): 423-498.

Zammit-Mangion A, Rougier JC, Bamber JL, Schoen NW, 2014. Resolving the Antarctic contribution to sea-level rise: a hierarchical modelling framework. Environmetrics 25: 245-264.

Zammit-Mangion A, Rougier JC, Schoen NW, Lindgren F, Bamber JL, in review. Multivariate spatio-temporal modelling for assessing Antarctica's present-day contribution to sea-level rise.




