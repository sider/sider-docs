---
id: javasee
title: JavaSee
sidebar_label: JavaSee
hide_title: true
---

# JavaSee

| Supported Version | Language | Website                          |
| ----------------- | -------- | -------------------------------- |
| 0.2.0             | Java     | https://github.com/sider/JavaSee |

**JavaSee** is a customizable linter for Java code. It has no rules and you can define your own rules in your YAML file.

## Getting Started

To start using JavaSee, enable it in your [repository settings](../../getting-started/repository-settings.md) and put a configuration file `javasee.yml` in your repository.

## Configuration

You can customize JavaSee analysis using `sider.yml`. For example:

```yaml
linter:
  javasee:
    config: my_javasee.yml
    target:
      - src
      - test
```

| Name                                                                                  | Type                 | Default |
| ------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -       |
| [`config`](#config)                                                                   | `string`             | -       |
| [`target`](#target)                                                                   | `string`, `string[]` | -       |

### `config`

This option allows you to specify your configuration file path for JavaSee.
If omitted, the default `javasee.yml` will be used.

### `target`

This option allows you to specify directories to be analyzed.
If omitted, all the Java files in your repository will be analyzed.

alias: `dir`
