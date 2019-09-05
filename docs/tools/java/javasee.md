---
id: javasee
title: JavaSee
sidebar_label: JavaSee
hide_title: true
---

# JavaSee

| Supported Version | Language | Website |
| ----------------- | -------- | -------- |
| 0.1.1 | Java 12.0.1 | [https://github.com/sider/JavaSee](https://github.com/sider/JavaSee) |

## Getting Started

To start using JavaSee, enable it in [Repository Settings](../../getting-started/repository-settings.md) and put a configuration file `javasee.yml` in the repository.

## Configuration

You can customize JavaSee analysis using `sider.yml`.

```yaml
linter:
  javasee:
    config: javasee.yml
    dir:
      - src
      - test
```

### `config`

This option allows you to specify the configuration file of JavaSee.
The default value is `javasee.yml`, which is the default config file name of JavaSee.

### `dir`

This option allows you to specify the directories you want to check in your repository.
The default value is `.`.

You can write a string or a sequence of strings.

