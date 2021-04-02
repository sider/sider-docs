---
id: reek
title: Reek
sidebar_label: Reek
hide_title: true
---

# Reek

| Supported Version       | Language | Website                           |
| ----------------------- | -------- | --------------------------------- |
| 4.4.0+ (default: 6.0.3) | Ruby     | https://github.com/troessner/reek |

**Reek** is a static analysis tool to detect any "Code Smells" in Ruby classes, modules and methods.

## Getting Started

To start using Reek, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  reek:
    target:
      - lib/
      - test/
    config: config/.reek.yml
```

You can use the following options to make analysis fitter for your project.

| Name                                                                                          | Type                 | Default |
| --------------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)         | `string`             | -       |
| [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies) | `string[]`, `map[]`  | -       |
| [`target`](#target)                                                                           | `string`, `string[]` | `.`     |
| [`config`](#config)                                                                           | `string`             | -       |

### `target`

This option allows you to specify files or directories to analyze.

### `config`

This option allows you to specify your configuration file.
If omitted, Reek tries to automatically find a configuration file ([`.reek.yml`](https://github.com/troessner/reek#configuration-file)) in your repository.

## Default Configuration

When there are no configuration files in your repository, Sider uses the following configuration by default:

- [For the Reek v4](https://github.com/sider/runners/blob/HEAD/images/reek/v4.reek.yml)
- [For the Reek v5](https://github.com/sider/runners/blob/HEAD/images/reek/v5.reek.yml)
