---
id: javasee
title: JavaSee
sidebar_label: JavaSee
hide_title: true
---

# JavaSee

| Supported Version | Language    | Website                          |
| ----------------- | ----------- | -------------------------------- |
| 0.1.3             | Java 12.0.2 | https://github.com/sider/JavaSee |

## Getting Started

To start using JavaSee, enable it in [Repository Settings](../../getting-started/repository-settings.md) and put a configuration file `javasee.yml` in the repository.

## Configuration

You can customize JavaSee analysis using `sider.yml`.

```yaml
linter:
  javasee:
    config: my_javasee.yml
    dir:
      - src
      - test
```

| Name                                                                        | Type                 | Default | Description             |
| --------------------------------------------------------------------------- | -------------------- | ------- | ----------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`             | -       | A root directory.       |
| [`config`](#config)                                                         | `string`             | -       | Config file path.       |
| [`dir`](#dir)                                                               | `string`, `string[]` | -       | Directories to analyze. |

### `config`

This option allows you to specify the configuration file of JavaSee.
If you omit it, the JavaSee default `javasee.yml` will be used.

### `dir`

This option allows you to specify the directories you want to check in your repository.
If you omit it, all the Java files in your repository will be analyzed.

You can write a string or a sequence of strings.
