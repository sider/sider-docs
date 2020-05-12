---
id: detekt
title: detekt
sidebar_label: detekt (beta)
hide_title: true
---

# detekt

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language             | Website                         |
| :---------------- | :------------------- | :------------------------------ |
| 1.7.0             | Kotlin (Java 12.0.2) | https://detekt.github.io/detekt |

**detekt** is a linter which code smell analysis for your [Kotlin](https://kotlinlang.org) projects.

## Getting Started

To start using detekt, enable it in your [repository settings](../../getting-started/repository-settings.md), and put a configuration in `sider.yml`.

### Using detekt

You can use detekt without any configuration, but we recommend to make a configuration.

Put the `detekt` key in `sider.yml` to customize the execution of detekt.

```yaml
linter:
  detekt:
    baseline: "baseline.xml"
    config:
      - "path/to/detekt-config.yml"
      - "path/to/another/detekt-config.yml"
    config-resource: []
    disable-default-rulesets: false
    excludes:
      - "**/excludes_dir/**"
      - "**/another/excludes_dir/**"
    includes: []
    input:
      - "src/"
```

## Configuration

You can customize your detekt analysis using `sider.yml`.

| Name                                                                                  | Type                 | Default |
| ------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -       |
| [`baseline`](#baseline)                                                               | `string`             | -       |
| [`config`](#config)                                                                   | `string`, `string[]` | `[]`    |
| [`config-resource`](#config-resource)                                                 | `string`, `string[]` | `[]`    |
| [`disable-default-rulesets`](#disable-default-rulesets)                               | `boolean`            | `false` |
| [`excludes`](#excludes)                                                               | `string`, `string[]` | `[]`    |
| [`includes`](#includes)                                                               | `string`, `string[]` | `[]`    |
| [`input`](#input)                                                                     | `string`, `string[]` | `.`     |

For more details about the options, see the [official documentation](https://arturbosch.github.io/detekt/cli.html).

### `baseline`

This option allows you to specify a [baseline](https://detekt.github.io/detekt/baseline.html) XML file path.
If the file is passed, only new code smells not in the baseline are reported.

### `config`

This option allows you to specify your [configuration file(s)](https://detekt.github.io/detekt/configurations.html) path for detekt.

### `config-resource`

This option allows you to specify the configuration resource path(s) on detekt's classpath.

### `disable-default-rulesets`

This option allows you to specify whether disables the default rule sets or not.

### `excludes`

This option allows you to specify glob pattern(s) of paths to exclude from the analysis.

### `includes`

This option allows you to specify glob pattern(s) of paths to include in the analysis.

### `input`

This option allows you to specify input path(s) to analyze.
