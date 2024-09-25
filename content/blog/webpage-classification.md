---
title: "Leveraging WordNet for Web Page Classification Using Semantic Networks"
description: This blog post is one of many about web page classification and information retrieval algorithms. Most papers are still relevant today, even if it was just to better understand how search engines and AI work today.
date: 2024-09-20
tags:
  - seo
  - machine-learning
  - webpage-classification
---

This blog post is one of many about web page classification and information retrieval algorithms. Most papers are still relevant today, even if it was just to better understand how search engines and AI work today.

**Introduction**

In this post, we will be analysing the paper ["Web Page Classification Using WordNet's Linguistic Information"](https://www.academia.edu/5085262/Web_Page_Classification_Using_WordNets_Linguistic_Information)  by Eleftherios Kozanidis, Vasiliki Simaki, and Athanasia Koumpouri, who presented an approach on how to use semantic networks and word sense disambiguation technique.

Even though today's search engines apply disambiguation to complete sentences and phrases instead of single words, the technique is still useful to learn to better understand how algorithms like BERT are used. So let's get started.

![A network of nodes around the concept of news, a mesh of words that are all linked together to the concept of what news means. AI generated, difficult to read text](/img/semantic-network.webp)

**Abstract**

A problem in sorting text into categories (text classification) is figuring out the right meaning of a word when it has multiple meanings. This is called word sense disambiguation (WSD). It means deciding which meaning of a word fits best based on the surrounding words.

Semantic similarity and determining the actual meaning of a word in context has always been problematic in computational linguistic and machine learning.

Word disambiguation in information retrieval can be tricky, because many words have multiple meanings. For example, the word "bank" can refer to the side of a river or a financial institution. Without disambiguation, a search engine might give you results about riverbanks when you're looking for a bank to open an account.

Word disambiguation helps search engines understand which meaning of the word you're interested in, based on the context of your search, which is where semantic networks become important.

In a semantic network, words (or concepts) are connected to each other based on their meanings. For example, in such a network, the word "bank" would be linked to "money," "finance," and "ATM" for the financial meaning, and linked to "river," "water," and "fishing" for the riverbank meaning.

Web page classification is crucial in improving information retrieval and organizing content. Automated classification methods are essential as the World Wide Web grows exponentially and content becomes a real asset again. The research paper "Web Page Classification Using WordNet's Linguistic Information" explores the use of semantic networks, particularly WordNet and GreekWordNet, to enhance web page classification. The paper demonstrates how linguistic data, combined with word sense disambiguation (WSD) and semantic similarity measures, can effectively categorize web pages into predefined thematic areas.

Even though today's search engines apply disambiguation to complete sentences and phrases instead of single words, the technique is still useful to learn to better understand how algorithms like BERT are used

---

## Semantic Networks and Word Sense Disambiguation

Semantic networks like WordNet represent concepts (nodes) and the relationships between them (edges). WordNet groups words into sets of cognitive synonyms called *synsets*, which express distinct concepts.

WordNet is a specific type of semantic network that groups words with similar meanings into sets called synsets. Each synset represents a specific meaning or idea. For example, in WordNet, the word "bank" might be part of one synset that refers to a place for money and another synset that refers to the side of a river. This technique allows applications to "understand" and select which meaning of a word you’re referring to.

A problem in sorting text into categories (text classification) is figuring out the right meaning of a word when it has multiple meanings. This is called word sense disambiguation (WSD). It means deciding which meaning of a word fits best based on the words around it.

In this paper, the authors use a special method called the UMND1 algorithm to solve this. It works by looking at the meanings of the nearby words and finding the one that makes the most sense. It does this by using WordNet’s synsets (groups of words with similar meanings) to calculate how similar the words are in meaning.

Here's a simple Python example of how WSD might be implemented using the NLTK library's WordNet interface:

```
from nltk.corpus import wordnet as wn
from nltk.wsd import lesk

# Sample sentence and ambiguous word
sentence = "The bank will not approve the loan."
ambiguous_word = "bank"

# Word sense disambiguation using lesk algorithm
sense = lesk(sentence.split(), ambiguous_word)
print(f"Word: {ambiguous_word}")
print(f"Disambiguated Sense: {sense}")
print(f"Definition: {sense.definition()}")
```

This function selects the correct meaning of "bank" based on the sentence. However, the paper uses a more sophisticated approach based on semantic similarity.

---

## Semantic Similarity Measures

The authors use two categories of semantic similarity measures: **edge counting measures** and **information content measures**. These measures calculate the closeness of concepts within WordNet's hierarchy. Below are some of the key measures:

1. **Wu and Palmer (wup)**: Measures similarity based on the depth of the concepts in the taxonomy.
2. **Leacock and Chodorow (lch)**: Computes the shortest path between two concepts and normalizes it by the maximum depth.
3. **Resnik**: Measures the shared information between two concepts.

Here's an example of calculating the Wu and Palmer similarity between two words in Python:

```
from nltk.corpus import wordnet as wn

# Words to compare
word1 = wn.synset('car.n.01')
word2 = wn.synset('automobile.n.01')

# Calculate Wu-Palmer similarity
similarity = word1.wup_similarity(word2)
print(f"Wu-Palmer Similarity between {word1.name()} and {word2.name()}: {similarity}")
```

In the study, **co-occurring synsets** provided better classification results, especially when combined with these semantic measures. For example, using the **Jiang and Conrath** similarity measure improved disambiguation accuracy in the experiments.

---

## Web Page Classification Algorithm

The classification algorithm developed in the paper focuses on analyzing anchor text (the clickable text of a hyperlink), as it often provides a concise summary of the linked page's content. The steps involved are:

1. **Extract anchor text** from the web page.
2. **Disambiguate terms** using WSD to find the most accurate sense for each word.
3. **Calculate feature weights** using a variant of the TF-IDF (Term Frequency-Inverse Document Frequency) algorithm to determine the importance of terms.
4. **Categorize the page** based on the predefined thematic areas using the processed features.

The TF-IDF variant used here calculates how representative a term is for a particular category, which is crucial for distinguishing content. A Python implementation for basic TF-IDF might look like this:

```
from sklearn.feature_extraction.text import TfidfVectorizer

# Example web page anchor texts
documents = [
"The car is fast and reliable.",
"Automobile manufacturing is a key industry.",
"Banks offer loans for buying cars."
]

# Initialize TF-IDF Vectorizer
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(documents)

# Display TF-IDF scores
feature_names = vectorizer.get_feature_names_out()
for doc_id, doc in enumerate(documents):
	print(f"\nDocument {doc_id+1}:")

for word_id in tfidf_matrix[doc_id].nonzero()[1]:
	print(f"{feature_names[word_id]}: {tfidf_matrix[doc_id, word_id]:.4f}")
```

This example shows how TF-IDF helps in feature extraction for classification, giving higher weights to words like "car" and "automobile" in automotive-related documents.

---

## Experimental Results

The paper compares various classification approaches and semantic similarity measures. For English web pages, the best results were obtained using **co-occurring WordNet synsets**, especially when paired with the Leacock-Chodorow and Wu-Palmer measures. The classifier could assign a web page to one of 245 categories with significant accuracy.

Key findings include:
- **Co-occurring synsets** yielded the best classification results.
- Using **disambiguated terms** improved the precision of thematic classification.
- The performance was enhanced by combining different similarity measures and using WordNet's semantic hierarchy.

---

## Conclusion

Even though most of these technique as described are no longer used, understanding how this applies to search engine and SEO is still valuable. It explains why, for example, anchor text is such an important aspect of building internal linking.

Using generic text, such as "read more" for links would effectively disallow any application to disambiguate the words of the linked page.




---

**References**

[1] Kozanidis, E., Simaki, V., Koumpouri, A. *Web Page Classification Using WordNet's Linguistic Information*.
[2] Fellbaum, Ch. (1998). *WordNet: An Electronic Lexical Database*. MIT Press.
[3] Qi, X., & Davison, B. (2009). *Web Page Classification: Features and Algorithms*. ACM Computing Surveys.

