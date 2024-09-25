---
title: 'Release v1.2.0: Pdf and Exoscale'
date: '2022-11-10T10:53:35.429Z'
tags: ['privacy', 'news']
draft: false
category: "news"
summary:  "The new release includes PDF verification, basic validation and accessibility checks. We also moved to a new cloud provider."
---
## PDF verification

Verifying PDF documents is rather tricky and cumbersome. That is why Sitefig Enterprise now includes PDF verification.

No more searching and double-checking bulky PDf documents; you can rely on Sitefig to validate your PDF documents.

Existing customers can access PDF audits previously not included in the crawls, and we will add more features in the future.

The release contains the following audits:

*   Missing language identifier (Matterhorn 1.02 11-001, WCAG success criteria 3.1.1 Language of Page)
*   Omitted accessibility permissions
*   Verification of tagged PDF documents (Matterhorn 1.02 01, 1WCAG Success criteria 1.3.1 Info and Relationships)
*   Missing title (Matterhorn 1.02 06-003 and 06-004, WCAG Success cirteraia 2.4.2 level A)
*   Multiple-page PDF documents must have bookmarks (WCAG Success criteria: 2.4.1 Bypass Blocks (Level A) 2.4.5 Multiple Ways (Level AA))
*   Empty PDf document
*   Corrupt Pdf documents
*   Broken link check extended to PDF documents.

## A new cloud provider: Exoscale

Sitefig recently switched to a new provider: Exoscale.

The choice of the new provider was guided by two issues, cost and GDPR compliance. An added bonus was the fast and accurate customer service from Exoscale and the exceptionally user-friendly portal that allows us to manage the servers.

Exoscale is fully compliant with GDPR rules and, most importantly, does not fall under the contested PrivacyShield or the Trans-Atlantic Data Privacy Framework.

All data is stored in the Frankfurt data centre, and the company Exoscale is a registered company in Switzerland.

The switch also allowed us to improve the crawling speed for multiple customers. All customer crawls now run in complete isolation, improving the performance metrics reporting and time to finish a website crawl and analysis.

## What is next?

Due to the move to Exoscale, many features were waiting in the backlog. The next feature that is coming up is audit handling and ticketing support. "Ignore" audits and/or tagging audits for review Connecting audits with tickets Jira integration Creating tickets from Sitefig

Anything you'd like to add?

If you are an Enterprise customer, please feel free to talk to us and suggest new features.
