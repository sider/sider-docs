---
id: flake8
title: Flake8
sidebar_label: Flake8
hide_title: true
---

# Flake8

| Supported Version | Language | Website                  |
| ----------------- | -------- | ------------------------ |
| 3.9.2             | Python   | https://flake8.pycqa.org |

**Flake8** is a linter to check the style and quality of Python code.

## Getting Started

To start using Flake8, enable it in your [repository settings](../../getting-started/repository-settings.md).

To customize Flake8, put a `.flake8` file in your repository.

## Default Configuration for Flake8

Sider provides our [recommended ruleset](https://github.com/sider/runners/blob/HEAD/images/flake8/sider_recommended_flake8.ini) for Flake8.
If your repository does not include `.flake8`, `setup.cfg` or `tox.ini`, the recommended ruleset will be used.
For more details, please visit [Recommended Ruleset](../../getting-started/recommended-rules.md).

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  flake8:
    dependencies:
      - flake8-bugbear
      - flake8-builtins==1.4.1
    target: src/
    config: .config/.flake8
    parallel: false
```

You can use several options to fine-tune Flake8 to your project.

| Name                                                                                          | Type                 | Default |
| --------------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)         | `string`             | -       |
| [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies) | `string[]`, `map[]`  | -       |
| [`target`](#target)                                                                           | `string`, `string[]` | `.`     |
| [`config`](#config)                                                                           | `string`             | -       |
| [`parallel`](#parallel)                                                                       | `boolean`            | `true`  |

### `plugins`

This is an alias for [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies).

### `target`

This option allows you to specify files or directories to analyze.

### `config`

This option allows you to specify a configuration file you want to use.

### `parallel`

This option allows you to control if an analysis runs in parallel mode.
