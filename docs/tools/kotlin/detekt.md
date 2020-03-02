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
| [`baseline`](#baseline)                                        　　　　　　　　| `string`             | -                         | Baseline file path.                                                                            |
| [`config`](#config)                                            　　　　　　　　| `string`, `string[]` | `[]`                      | Config file paths.                                                                             |
| [`config-resource`](#config-resource)                          　　　　　　　　| `string`, `string[]` | `[]`                      | Config resource paths.                                                                         |
| [`disable-default-rulesets`](#disable-default-rulesets)        　　　　　　　　| `boolean`            | `false`                   | [`--disable-default-rulesets`](https://arturbosch.github.io/detekt/cli.html) option of detekt. |
| [`excludes`](#excludes)                                        　　　　　　　　| `string`, `string[]` | `[]`                      | Exclude paths. (Globing patterns)                                                              |
| [`includes`](#includes)                                        　　　　　　　　| `string`, `string[]` | `[]`                      | Include paths. (Globing patterns)                                                              |
| [`input`](#input)                                              　　　　　　　　| `string`, `string[]` | current working directory | Input paths.                                                                                   |

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

### `baseline`

If a baseline xml file is passed in, only new code smells not in the baseline are printed in the console.

### `config`

Path to the config file (path/to/config.yml).

### `config-resource`

Path to the config resource.

### `disable-default-rulesets`

Whether enable the `--disable-default-rulesets` option or not.

### `excludes`

Globing patterns describing paths to exclude from the analysis.

### `includes`

Globing patterns describing paths to include in the analysis.

### `input`

Input paths to analyze.
