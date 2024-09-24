---
title: 'Release v1.1.0'
date: '2022-11-03T13:30:47.986Z'
tags: ['privacy', 'news']
draft: false
category: 'news'
summary:  "We received several customer comments, and release v1.1 is the first update with changes reflecting those requests. The update focuses on software architecture, performance, bug fixes and two new report pages"
---
We received several customer comments, and release v1.1 is the first update with changes reflecting those requests.

The update focuses on software architecture, performance, bug fixes and two new report pages.

### Software architecture

The Sitefig architecture was built with live updates, allowing 98% uptime.

At least that is the idea, but we never had a chance to test it.

Previously we did a lot of updates, which meant downtime, even during the week.

The previously announced update went well and without any downtime. So we are now confident that we can update the application without interrupting the user experience.

### Performance

Many pages did not perform very well, and we believe there is still much room for improvement. At least, that is what the Sitefig report is telling us!

Yes, we used Sitefig on our application to figure out what needed updating. Which network requests were lagging, and which metric was the worst one?

TTF (Time to first byte) was the worst metric due to heavy queries and inlined images. The updates in this release reduced the TTF by 75%, which made using the application feel much more fluid.

### Report pages

Two new report pages were made available to the customer:

*   Javascript libraries and vulnerabilities,
*   and PDF assets.

#### Javascript libraries and vulnerabilities

Around 60% of the websites scanned by Sitefig have at least one library with a known vulnerability. The percentage found at Sitefig is much higher than the result Snyk found when scanning popular websites, which was 37%.

The most common library loaded is still jQuery, even in 2022. And most of those jQuery versions are pretty old. They have not been forgotten due to legacy functionality packed with WordPress plugins or because it was bundled in a more extensive library and never updated.

#### PDF Assets

Previously Sitefig did not load any PDf documents and focused only on HTML results. This has changed, and PDF documents are now also loaded and listed.

### What is next?

We plan to review some of the reports in the next release and update the UI to match a new plan for Sitefig.

The following features will be coming as well:

*   Ticketing integration (Jira, Bugzilla, and … )
*   Accessibility audits for PDF documents
*   Screenshots for different sizes and devices

Are you thinking about a feature, need anything specific, drop a comment, and we will contact you to see if we can offer a solution
