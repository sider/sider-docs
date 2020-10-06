---
id: recommended-rules
title: Recommended Ruleset
sidebar_label: Recommended Ruleset
hide_title: true
---

# Recommended Ruleset

Static code analysis tools can help you to improve the quality of your source code because it ensures "correct" coding style across a project and also detects possible coding errors without any test executions. However, static analysis with its default configuration typically reports many issues, and some of them don't fit your projects. Most analysis tools have the capability to let users to enable/disable analysis rules for users to avoid such "false positives." You can try to determine which rules are really good matches for your projects. But, a huge amount of issues makes it difficult to manually verify all of them.

For certain analysis tools listed in [Supported tools](#supported-tools), Sider provides our recommended ruleset which can reduce false positives. The recommended ruleset is obtained through a classification of coding-style rules using K-means machine learning algorithm. We've trained the classifier to classify which rules should be addressed or not based on the number of commits where the issue (coding-style violation) is reported and fixed. A total of about 3.6 million commits over 1,000 popular OSS repositories were used in this study. This study has been conducted in collaboration with Prof. Shingo TAKADA¹ of Keio University in Kanagawa, Japan and Assoc. Prof. Masataka NAGURA² of Nanzan University in Aichi, Japan.

Sider automatically applies the recommended ruleset for analysis tools listed [below](#supported-tools) when a configuration file doesn't exist in your repository. Since the recommended rulesets are available on our website, you can modify and place it in your repository as required for correct analysis of your projects.

¹ http://www.doi.ics.keio.ac.jp/research.html

² https://researchmap.jp/read0129611

## Supported tools

- [cpplint](../tools/cplusplus/cpplint.md#recommended-ruleset)
