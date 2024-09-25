---
title: 'Semantic network'
date: '2024-09-24T07:20:23.256Z'
tags: ['seo', 'machine-learning']
permalink: "/glossary/wu-palmer"
---
### Wu and Palmer Similarity Measure:

A semantic similarity measure used to calculate the relatedness of concepts in a hierarchical structure, such as an ontology. The measure is defined as:

$$SimWP(X, Y) = \frac{2 \times N}{N1 + N2}$$

Where:
- X and Y are the concepts being compared
- N is the depth of the Least Common Subsumer (LCS) from the root
- N1 is the number of edges from X to the LCS
- N2 is the number of edges from Y to the LCS

The Wu and Palmer measure is characterized by its simplicity and high performance[1][3]. It takes into account the depth of the concepts in the taxonomy, considering that concepts at lower levels are more specific and thus more similar[1]. This measure is widely used in natural language processing and information retrieval tasks due to its effectiveness in capturing semantic relationships between concepts.

Citations:
[1] https://www.thinkmind.org/articles/ubicomm_2016_3_10_10130.pdf
[2] https://arxiv.org/pdf/1211.4709.pdf
[3] https://www.researchgate.net/publication/310572659_A_modification_of_Wu_and_Palmer_Semantic_Similarity_Measure
[4] https://www.researchgate.net/figure/The-process-of-our-methodology-to-compute-the-semantic-similarity-measure_fig1_333256403
[5] https://www.cartagena99.com/recursos/alumnos/ejercicios/Article%201.pdf
[6] https://research.vu.nl/files/130180242/Wang2020_Chapter_EvaluatingSimilarityMeasuresForDatasetSearch.pdf
[7] https://www.sciencedirect.com/science/article/pii/S1877050919306349/pdf?md5=b0c854765e3ad294febcd3f82fcfd41a&pid=1-s2.0-S1877050919306349-main.pdf
