---
id: flake8
title: Flake8
sidebar_label: Flake8
hide_title: true
---

# Flake8

| Supported Version | Language     | Website                         |
| ----------------- | ------------ | ------------------------------- |
| 3.8.4             | Python 3.9.1 | https://gitlab.com/pycqa/flake8 |

**Flake8** is a linter to check the style and quality of Python code.

## Getting Started

To start using Flake8, enable it in your [repository settings](../../getting-started/repository-settings.md).

To customize Flake8, put a `.flake8` file in your repository.

## Default Configuration for Flake8

Sider provides a [default configuration](https://github.com/sider/runners/blob/master/images/flake8/sider_config.ini) for Flake8.
If your repository does not include `.flake8`, `setup.cfg` or `tox.ini`, the default configuration will be used.

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  flake8:
    target: src/
    config: .config/.flake8
    plugins:
      - flake8-bandit
      - flake8-builtins==1.4.1
      - flake8-mypy>=17.3.3
```

You can use several options to fine-tune Flake8 to your project.

| Name                                                                                  | Type                 | Default |
| ------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -       |
| [`target`](#target)                                                                   | `string`, `string[]` | `.`     |
| [`config`](#config)                                                                   | `string`             | -       |
| [`plugins`](#plugins)                                                                 | `string`, `string[]` | -       |

### `target`

This option allows you to specify files or directories to analyze.

### `config`

This option allows you to specify a configuration file you want to use.

### `plugins`

This option allows you to enable Flake8 plugins. You can set arbitrary plugin names and also specify a _minimum_ version number.
If no version is specified, Sider will install the latest version.
