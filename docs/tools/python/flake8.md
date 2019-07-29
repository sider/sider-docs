---
id: flake8
title: Flake8
sidebar_label: Flake8
hide_title: true
---

# Flake8

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 3.7.7 | Python 2.7.16, 3.7.3 | [http://flake8.pycqa.org/en/latest/](http://flake8.pycqa.org/en/latest/) |

## Getting Started

To start using Flake8, enable it in [Repository Settings](../../getting-started/repository-settings.md).

To customize Flake8, put a `.flake8` file in your repository.

## Python Version

If your repository contains a `.python-version` file, the Python version is Sider will use the version specified in that file. You can also specify a Python version via `sider.yml`. The default is Python 3.

The latest versions of Python 2 or Python 3 can be used.

## Default Configuration

Sider provides a default configuration for Flake8. If your repository does not include `.flake8`, `setup.cfg` or `tox.ini`, our default configuration will be used.

Our default configuration is available here:

* [Sider's configuration for Flake8](https://github.com/actcat/sideci_config/blob/master/python/flake8/sideci_config.ini)

## Configuration via `sider.yml`

Here are example settings for Flake8 under `flake8`:

```yaml
linter:
  flake8:
    version: 2
    plugins:
      - flake8-bandit
      - flake8-builtins==1.4.1
      - flake8-mypy>=17.3.3
```

### Options

You can use several options to fine-tune Flake8 to your project.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`version`](#version) | `integer` | Specify Python version. |
| [`plugins`](#plugins) | `string`<br />`array<string>` | Set Flake8 plugins. It also allows to specify these plugins' versions. |

### `version`

This setting manages the Python version used when running `flake8`. Python 3 will be used if omitted.

### `plugins`

This option allows you to enable Flake8 plugins. You can set arbitrary plugin names and also specify a \(minimum\) version number. If no version is specified, Sider will install the latest version.

