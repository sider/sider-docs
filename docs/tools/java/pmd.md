---
id: pmd
title: PMD
sidebar_label: PMD
hide_title: true
---

# PMD

| Supported Version | Language    | Website               |
| ----------------- | ----------- | --------------------- |
| 6.19.0            | Java 12.0.1 | https://pmd.github.io |

## Getting Started

To start using PMD, enable it in [Repository Settings](../../getting-started/repository-settings.md).

## Configuration

You can customize PMD analysis by using `sider.yml`:

```yaml
linter:
  pmd_java:
    dir: src
    rulesets:
      - category/java/errorprone.xml
      - path/to/custom-ruleset.xml
    encoding: Shift_JIS
    min_priority: 3
```

| Name                            | Type                      | Default         | Description                                                                                            |
| ------------------------------- | ------------------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| [`dir`](#dir)                   | `string`                  | `.`             | Directory to analyze.                                                                                  |
| [`rulesets`](#rulesets)         | `string`, `array<string>` | (see below)     | [`-rulesets`](https://pmd.github.io/pmd/pmd_userdocs_cli_reference.html#options) option of PMD.        |
| [`encoding`](#encoding)         | `string`                  | (PMD's default) | [`-encoding`](https://pmd.github.io/pmd/pmd_userdocs_cli_reference.html#options) option of PMD.        |
| [`min_priority`](#min_priority) | `number`                  | (PMD's default) | [`-minimumpriority`](https://pmd.github.io/pmd/pmd_userdocs_cli_reference.html#options) option of PMD. |

### `dir`

This option allows you to specify the directory to analyze.

### `rulesets`

This option allows you to use your custom rulesets.

The default value contains the 4 rulesets below:

- [`category/java/bestpractices.xml`](https://github.com/pmd/pmd/blob/master/docs/pages/pmd/rules/java/bestpractices.md)
- [`category/java/errorprone.xml`](https://github.com/pmd/pmd/blob/master/docs/pages/pmd/rules/java/errorprone.md)
- [`category/java/multithreading.xml`](https://github.com/pmd/pmd/blob/master/docs/pages/pmd/rules/java/multithreading.md)
- [`category/java/performance.xml`](https://github.com/pmd/pmd/blob/master/docs/pages/pmd/rules/java/performance.md)
- [`category/java/security.xml`](https://github.com/pmd/pmd/blob/master/docs/pages/pmd/rules/java/security.md)

You can also specify the rulesets file in your repository.

### `encoding`

This option allows you to specify the encoding of the Java source code.

### `min_priority`

This option allows you to specify the rule priority threshold.
