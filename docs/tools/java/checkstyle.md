---
id: checkstyle
title: Checkstyle
sidebar_label: Checkstyle
hide_title: true
---

# Checkstyle

| Supported Version | Language    | Website                |
| :---------------- | :---------- | :--------------------- |
| 8.30              | Java 12.0.2 | https://checkstyle.org |

## Getting Started

To start using Checkstyle, enable it in [Repository Settings](../../getting-started/repository-settings.md).

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

| Name                                                                        | Type                           | Default  | Description                        |
| --------------------------------------------------------------------------- | ------------------------------ | -------- | ---------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`                       | -        | A root directory.                  |
| [`config`](#config)                                                         | `string`                       | `google` | Coding standard name or file path. |
| [`dir`](#dir)                                                               | `string`, `string[]`           | `.`      | Directory to analyze.              |
| [`exclude`](#exclude)                                                       | `string`, `string[]`, `hash[]` | -        | Excluded directory.                |
| [`ignore`](#ignore)                                                         | `string[]`                     | -        | Ignored severities.                |
| [`properties`](#properties)                                                 | `string`                       | -        | Properties file.                   |

### `config`

This option allows you to declare the coding standard you want to follow.

Supported values are:

- [`google`](https://checkstyle.sourceforge.io/google_style.html) (for `/google_checks.xml`)
- [`sun`](https://checkstyle.sourceforge.io/sun_style.html) (for `/sun_checks.xml`)
- Path to your configuration file

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
