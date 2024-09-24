---
title: 'Website monitoring and auditing with Lighthouse'
date: '2022-11-07T13:30:06.041Z'
tags: ['web-governance', 'news']
draft: false
summary: "Lighthouse is an open-source application developed by Google that can evaluate the performance, technical SEO and accessibility of a webpage, Lighthouse is part of every Chrome browser, and you can run these audits yourself if you want to and have the time and resources to do so.\nBut what if you have 1000+ pages? "
---
### Open-source made by Google

Lighthouse is an open-source application developed by Google that can evaluate the performance, technical SEO and accessibility of a webpage.

If you have never heard from Lighthouse, try it yourself.

*   Open Chrome, right-click and select "`Inspect`".
*   Select the " `Lighthouse` " tab and click "`Analyze page load`".

It will take a minute to finish, and you'll be presented with a list of failed and passed audits.

![alt](/static/images/Schermafdruk_van_2022_11_07_14_41_20_b58464d422.png)

Lighthouse is part of every Chrome browser, and you can run these audits yourself if you want to and have the time and resources to do so.

But what if you have 1000+ pages? Will you run Lighthouse on each of those?

Or let's say you have 20 templates? Will the developer test each template and some reference pages with it?

Most development teams will need more time to run these tests. And I am sure managers prefer expensive developers to focus on other tasks. Right?

Sitefig uses Lighthouse to audit and monitors all pages on your website using both standard and custom audits.

### Custom audit accessibility

Accessibility is one of those custom audits because the standard Lighthouse runs only a limited set of audits.

Our Accessibility audit covers the latest in open-source technology, which we complement with a list of other accessibility issues ranging from identifying emojis to CSS issues that affect accessibility.

Sitefig also stores screenshots of how the website looks for people with limited vision and color-blindness. ![alt](/static/images/sitefig_net_screenshot_663f9fbf75.png)

### Custom audit for broken links

To ensure Sitefig finds all potential links, we drill deep into the code and HTTP headers to find all likely URLs available on your website.

Once we have a list of URLs available on your website, all these are verified and retrieved. The broken link check includes audits for broken SSL/TLS certificates, missing DNS, and invalid URL syntax.

### Standard Performance audit

The Core web metrics recorded by Lighthouse are lab results based on an actual browser with 1 CPU and 1.5 Gb available memory. The metrics are based on the same hardware and network throughput baseline. That way, Sitefig can reliably compare results between pages and between websites using, avoiding fluctuating real-world conditions.

![alt](/static/images/performance_screen_7de2f13563.png)

Besides the lab results, Sitefig also pulls all the real-world data from Google and analyses it to see which pages perform and which do not.

### Lighthouse is a core part of Sitefig.

The Lighthouse application is a core part of our crawler and auditing infrastructure.

It records performance metrics, identifies privacy issues around trackers and cookies, and allows slow-level access to any part of the code of a webpage.

It is used with standard and custom audits and is loaded using a real browser, Chromium, using the same resources for each run.

In total, Sitefig runs over 300 audits on each page and website. Allowing the developer to focus on what they do best and leave out the routine checks to Sitefig.
