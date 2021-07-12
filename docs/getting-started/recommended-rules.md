---
id: recommended-rules
title: Recommended Ruleset
sidebar_label: Recommended Ruleset
hide_title: true
---

# Recommended Ruleset

Static analysis with its default configuration typically reports many issues, and some of them don't fit your projects. Most analysis tools have the capability to let users enable/disable analysis rules for users to avoid such "false positives." But, a huge amount of issues makes it difficult to manually verify all of them. For certain analysis tools listed in [Supported Tools](#supported-tools), Sider provides our recommended ruleset which can reduce false positives.

## Ruleset Generation Algorithm

The recommended ruleset is obtained through a classification of coding-style rules using K-means machine learning algorithm. We've trained the classifier to classify which rules should be addressed or not based on the number of commits where the issue (coding-style violation) is reported and fixed. A total of about 3.6 million commits over 1,000 popular OSS repositories were used in this study.

This study has been conducted in collaboration with the following partners:

- [Prof. Shingo TAKADA](http://www.doi.ics.keio.ac.jp/research.html) of Keio University in Kanagawa, Japan
- [Assoc. Prof. Masataka NAGURA](https://researchmap.jp/read0129611) of Nanzan University in Aichi, Japan

## Supported Tools

Sider applies the recommended ruleset to the analysis tools below. Please follow the link for more details.

- [Checkstyle](../tools/java/checkstyle.md#config)
- [cpplint](../tools/cplusplus/cpplint.md#recommended-ruleset)
- [ESLint](../tools/javascript/eslint.md#default-configuration-for-eslint)
- [Flake8](../tools/python/flake8.md#default-configuration-for-flake8)
- [PHP_CodeSniffer](../tools/php/code-sniffer.md#default-configuration)
- [PHPMD](../tools/php/phpmd.md#default-configuration-for-phpmd)
- [PMD](../tools/java/pmd.md#default-configuration-for-pmd)
- [RuboCop](../tools/ruby/rubocop.md#default-configuration-for-rubocop)
