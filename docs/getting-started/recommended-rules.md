---
id: recommended-rules
title: Recommended Ruleset
sidebar_label: Recommended Ruleset
hide_title: true
---

# Recommended Ruleset

Static code analysis tool can improve the quality of your source-code because it ensures coding-style across a project and also detects possible coding errors without any test executions. However, static analysis with its default configuration typically reports a lot of issues. Some of them aren't applicable to your projects and are called "false positive". Most analysis tool has a capability to let users to enable/disable analysis rules to be actively used. You may try to determine if the rule is really a good match for your projects. But a huge amount of issues makes it difficult to manually verify all of them.

Sider provides our recommended ruleset which can reduce false positives. We introduce our own automated classifier based on K-means machine learning algorithm. We train the classifier to classify which rules to address or not to fix by counting the number of commits where the issue is reported and it is fixed, using a total of about TBD commits over 1,000 popular OSS repositories. This study is conducted in collaboration with Prof. Shingo TAKADA[^1] of Keio University in Kanagawa, Japan and Prof. Masataka NAGURA[^2] of Nanzan University in Aichi, Japan.

Sider automatically applies our recommended ruleset for supported analysis tools when a configuration file doesn't exist in your repository. Since the recommended rulesets are available on our website, you can modify and place it in your repository as required for correct analysis of your projects.

## Supported analysis tools

- [cpplint](../tools/cplusplus/cpplint.md#recommended-ruleset)

[^1]: http://www.doi.ics.keio.ac.jp/research.html
[^2]: https://porta.nanzan-u.ac.jp/research/view?l=ja&u=103899
