---
id: checkstyle
title: Checkstyle
sidebar_label: Checkstyle
hide_title: true
---

# Checkstyle

| Supported Version | Language    | Website                |
| ----------------- | ----------- | ---------------------- |
| 8.35              | Java 14.0.2 | https://checkstyle.org |

**Checkstyle** is a style checker for Java code and aims to enforce a coding standard.

## Getting Started

To start using Checkstyle, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

You can customize Checkstyle analysis using `sider.yml`. For example:

```yaml
linter:
  checkstyle:
    config: google
    dir: src
    exclude:
      - vendor
      - pattern: foo
      - string: foo
    ignore:
      - warning
      - info
    properties: checkstyle.properties
```

| Name                                                                                  | Type                           | Default  |
| ------------------------------------------------------------------------------------- | ------------------------------ | -------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`                       | -        |
| [`jvm_deps`](../../getting-started/custom-configuration.md#linteranalyzer_idjvm_deps) | `string[]`                     | `[]`     |
| [`config`](#config)                                                                   | `string`                       | `google` |
| [`dir`](#dir)                                                                         | `string`, `string[]`           | `.`      |
| [`exclude`](#exclude)                                                                 | `string`, `string[]`, `hash[]` | -        |
| [`ignore`](#ignore)                                                                   | `string[]`                     | -        |
| [`properties`](#properties)                                                           | `string`                       | -        |

### `config`

This option allows you to declare the coding standard you want to follow.

Supported values are:

- [`google`](https://checkstyle.org/google_style) (for `/google_checks.xml`)
- [`sun`](https://checkstyle.org/sun_style) (for `/sun_checks.xml`)
- Path to your [configuration file](https://checkstyle.org/config)
  - Note that only **core** rules are supported. You **cannot** specify your custom rules or 3rd-party rules.

When you write `google` or `sun`, config files distributed from Checkstyle are used.

### `dir`

This option allows you to specify the directories you want to check in your repository.

### `exclude`

This option allows you to specify `-e` and `-x` command line options passed to the `checkstyle` command.

- If `exclude` is a string, the `-e` option will be used.
- If including object(s) with a `string` key (e.g. `{ string: vendor }`), the `-e` option will be used.
- If including object(s) with a `pattern` key (e.g. `{ pattern: vendor }`), the `-x` option will be used.

By default, nothing will be excluded.

### `ignore`

This option allows you to ignore issues based on their severity. Write the list of severities you want to ignore.

By default, nothing will be ignored.

### `properties`

This option allows you to specify the properties file passed to `checkstyle`. The value will be passed to Checkstyle's `-p` option.
