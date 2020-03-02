---
id: detekt
title: detekt
sidebar_label: detekt
hide_title: true
---

# detekt

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language             | Website                              |
| :---------------- | :------------------- | :----------------------------------- |
| 1.6.0             | Kotlin (Java 12.0.2) | https://github.com/arturbosch/detekt |

**detekt** is a linter which code smell analysis for your [Kotlin](https://kotlinlang.org) projects. 

## Getting Started

To start using detekt, enable it in [Repository Settings](../../getting-started/repository-settings.md), and put a configuration in `sider.yml`.

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

| Name                                                                        | Type                 | Default                   | Description                                                                                    |
| --------------------------------------------------------------------------- | -------------------- | ------------------------- | ---------------------------------------------------------------------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`             | -                         | A root directory.                                                                              |
| `detekt`                                                                    | `hash`               | -                         | Settings for detekt execution.                                                                 |
| [`detekt.baseline`](#detektbaseline)                                        | `string`             | -                         | Baseline file path.                                                                            |
| [`detekt.config`](#detektconfig)                                            | `string`, `string[]` | `[]`                      | Config file paths.                                                                             |
| [`detekt.config-resource`](#detektconfig-resource)                          | `string`, `string[]` | `[]`                      | Config resource paths.                                                                         |
| [`detekt.disable-default-rulesets`](#detektdisable-default-rulesets)        | `boolean`            | `false`                   | [`--disable-default-rulesets`](https://arturbosch.github.io/detekt/cli.html) option of detekt. |
| [`detekt.excludes`](#detektexcludes)                                        | `string`, `string[]` | `[]`                      | Exclude paths. (Globing patterns)                                                              |
| [`detekt.includes`](#detektincludes)                                        | `string`, `string[]` | `[]`                      | Include paths. (Globing patterns)                                                              |
| [`detekt.input`](#detektinput)                                              | `string`, `string[]` | current working directory | Input paths.                                                                                   |

For example:

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

For more details about the options, see the [official documentation](https://arturbosch.github.io/detekt/cli.html).

### `detekt.baseline`

If a baseline xml file is passed in, only new code smells not in the baseline are printed in the console.

### `detekt.config`

Path to the config file (path/to/config.yml).

### `detekt.config-resource`

Path to the config resource.

### `detekt.disable-default-rulesets`

Whether enable the `--disable-default-rulesets` option or not.

### `detekt.excludes`

Globing patterns describing paths to exclude from the analysis.

### `detekt.includes`

Globing patterns describing paths to include in the analysis.

### `detekt.input`

Input paths to analyze.
