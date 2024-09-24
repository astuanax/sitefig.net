---
title: 'Release v2: Accessibility and Privacy upgrades'
date: '2023-12-11T10:53:35.429Z'
tags: ['privacy', 'accessibility', 'news']
draft: false
category: "news"
summary:  "The new release is focused around language support for WCAG2.1, PII Scanners and physical addresses"
---
I have been quiet for some time, but not anymore. Sitefig deployed a significant release last week. So, amidst the hush, I've been working hard to bring you an update that aligns with the feature requests gained from our customers.

While the deployments have been continuous and discreet, this new release bumps the version up to v2.0 as many new items have been updated and added.

## What new features are available and why?

The accessibility community posted several example websites with use cases in which automated auditing software fails. Claiming that most of the accessibility fails cannot be solved with automated software.

The goal is to solve as many "impossible" use cases as possible.

The first part we solved was WCAG2.1 Success criteria 3.1.1 and, more specifically, 3.1.2.

The two success criteria intend to ensure user agents, such as Jaws and NVDA, pronounce the words in the correct language. In many cases, the language needs to be corrected, or the language attribute is omitted.

When the language is not set or is just wrong, the results for most screen reader users would be similar to driving around  Paris with an English GPS.
Nothing will be understandable.

Sitefig analyses all content, including the language of title, description, alt and title attributes, to ensure all text is properly annotated with the correct language tag.

### HTML5 and Screenreaders

Screenreaders and browsers only sometimes play nice.
Some HTML5 elements will be discarded even though using them makes sense. Sitefig now audits your websites for non-supported HTML5 elements.

## Privacy upgrades

Sitefig also records network traffic to identify potential privacy issues on your website. Most websites nowadays connect to many different domain names to load fonts, javascript, or images. These domains provide their services from different countries and continents.

Sitefig geolocates the IP addresses and offers additional Whois data for each domain that sets a cookie for every tracker and domain name to which your customers connect. You'll be surprised how geographically spread your website connections are.

Additionally, Sitefig records cookies before and after consent and categorizes each 3rd party cookie by function, goal, and company behind those cookies.

Sitefig also has PII scanners that scan for names, physical addresses, email and telephone numbers, VAT, credit card numbers, and other types of sensitive data. We have upgraded the physical address scanner and now support scanning in 11 languages and many more countries.

## Supported EU Languages

Sitefig supports the following languages when auditing for accessibility issues related to languages, as well as scanning for PII:
- Hungarian
- Polish
- Danish
- Swedish
- French
- English
- Dutch
- German
- Portuguese
- Spanish
- Italian

## New documentation

The documentation needed some love, and now it has been redesigned to align more with WCAG requirements and has a more straightforward and sleeker look.

Version 2.0 is a significant upgrade, and we will follow up with more detailed posts about the new features.
I hope you enjoy it!
