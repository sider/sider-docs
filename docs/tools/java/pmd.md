---
id: pmd
title: PMD
sidebar_label: PMD
hide_title: true
---

# PMD

| Supported Version | Language    | Website               |
| ----------------- | ----------- | --------------------- |
| 6.21.0            | Java 12.0.2 | https://pmd.github.io |

## Getting Started

To start using PMD, enable it in your [repository settings](../../getting-started/repository-settings.md).

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

| Name                                                                                  | Type                 | Default         | Description                                                                                            |
| ------------------------------------------------------------------------------------- | -------------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -               | A root directory.                                                                                      |
| [`dir`](#dir)                                                                         | `string`             | `.`             | A directory to analyze.                                                                                |
| [`rulesets`](#rulesets)                                                               | `string`, `string[]` | (see below)     | [`-rulesets`](https://pmd.github.io/pmd/pmd_userdocs_cli_reference.html#options) option of PMD.        |
| [`encoding`](#encoding)                                                               | `string`             | (PMD's default) | [`-encoding`](https://pmd.github.io/pmd/pmd_userdocs_cli_reference.html#options) option of PMD.        |
| [`min_priority`](#min_priority)                                                       | `number`             | (PMD's default) | [`-minimumpriority`](https://pmd.github.io/pmd/pmd_userdocs_cli_reference.html#options) option of PMD. |

### `dir`

This option allows you to specify the directory to analyze.

### `rulesets`

This option allows you to use your custom rulesets.
By default, the following rulesets are included:

- [`category/java/bestpractices.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/bestpractices.xml)
- [`category/java/design.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/design.xml)
- [`category/java/errorprone.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/errorprone.xml)
- [`category/java/multithreading.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/multithreading.xml)
- [`category/java/performance.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/performance.xml)
- [`category/java/security.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/security.xml)

You can also specify the rulesets file in your repository as follow.

```yaml
linter:
  pmd_java:
    rulesets:
      - your_pmd_custom_rules.xml
```

Please see the [PMD documentation](https://pmd.github.io/pmd/pmd_userdocs_making_rulesets.html) for the customization details.

### `encoding`

This option allows you to specify the encoding of the Java source code.

### `min_priority`

This option allows you to specify the rule priority threshold.
