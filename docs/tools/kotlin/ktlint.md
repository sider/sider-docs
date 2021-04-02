---
id: ktlint
title: ktlint
sidebar_label: ktlint (beta)
hide_title: true
---

# ktlint

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language | Website                  |
| ----------------- | -------- | ------------------------ |
| 0.39.0            | Kotlin   | https://ktlint.github.io |

**ktlint** is a linter with built-in formatter for [Kotlin](https://kotlinlang.org) programming language.

## Getting Started

To start using ktlint, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

You can customize your ktlint analysis using `sider.yml` as follows:

```yaml
linter:
  ktlint:
    target:
      - "src/**/*.kt"
      - "!src/**/*Test.kt"
      - "test/"
    ruleset:
      - custom_ruleset.jar
    disabled_rules:
      - "no-wildcard-imports"
      - "indent"
    experimental: true
```

| Name                                                                                          | Type                 | Default |
| --------------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)         | `string`             | -       |
| [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies) | `string[]`, `map[]`  | -       |
| [`target`](#target)                                                                           | `string`, `string[]` | `[]`    |
| [`ruleset`](#ruleset)                                                                         | `string`, `string[]` | `[]`    |
| [`disabled_rules`](#disabled_rules)                                                           | `string`, `string[]` | `[]`    |
| [`experimental`](#experimental)                                                               | `boolean`            | `false` |

### `target`

This option allows you to specify glob patterns of files to analyze.
If omitted, Sider analyzes all Kotlin files in your repository.

### `ruleset`

This option allows you to specify URLs to rulesets you want to enable.

### `disabled_rules`

This option allows you to specify rule names to disable.

### `experimental`

This option allows you to use the [experimental rules](https://github.com/pinterest/ktlint#experimental-rules).
