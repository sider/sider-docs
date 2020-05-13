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

**PMD** is a static analysis tool to detect issues about code style, security, performance, etc.
It supports multiple programming languages but Sider supports only Java.

## Getting Started

To start using PMD, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

You can customize the analysis via `sider.yml`:

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

| Name                                                                                  | Type                 | Default         |
| ------------------------------------------------------------------------------------- | -------------------- | --------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -               |
| [`dir`](#dir)                                                                         | `string`             | `.`             |
| [`rulesets`](#rulesets)                                                               | `string`, `string[]` | (see below)     |
| [`encoding`](#encoding)                                                               | `string`             | (PMD's default) |
| [`min_priority`](#min_priority)                                                       | `number`             | (PMD's default) |

### `dir`

This option allows you to specify a directory to analyze.

### `rulesets`

This option allows you to specify predefined rulesets or your custom rulesets.

Here are the predefined rulesets:

- [`category/java/bestpractices.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/bestpractices.xml)
- [`category/java/codestyle.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/codestyle.xml)
- [`category/java/design.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/design.xml)
- [`category/java/documentation.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/documentation.xml)
- [`category/java/errorprone.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/errorprone.xml)
- [`category/java/multithreading.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/multithreading.xml)
- [`category/java/performance.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/performance.xml)
- [`category/java/security.xml`](https://github.com/pmd/pmd/blob/master/pmd-java/src/main/resources/category/java/security.xml)

For example, you can specify both:

```yaml
linter:
  pmd_java:
    rulesets:
      - category/java/security.xml
      - your_pmd_custom_rules.xml
```

If the option is omitted, Sider uses the [default configuration](https://github.com/sider/runners/blob/master/images/pmd_java/default-ruleset.xml).

You can [configure predefined rules](https://pmd.github.io/pmd/pmd_userdocs_configuring_rules.html) and
[writing your own rules](https://pmd.github.io/pmd/pmd_userdocs_extending_writing_rules_intro.html) via the XML configuration file.
See the official documentation for more details.

### `encoding`

This option allows you to specify an encoding of your Java source code.

### `min_priority`

This option allows you to specify a rule priority threshold.
Rules with lower priority than the specified value will not be used.
