---
id: flake8
title: Flake8
sidebar_label: Flake8
hide_title: true
---

# Flake8

| Supported Version | Language     | Website                 |
| ----------------- | ------------ | ----------------------- |
| 3.7.9             | Python 3.7.4 | http://flake8.pycqa.org |

## Getting Started

To start using Flake8, enable it in [Repository Settings](../../getting-started/repository-settings.md).

To customize Flake8, put a `.flake8` file in your repository.

## Python Version

If your repository contains a `.python-version` file, the Python version is Sider will use the version specified in that file. You can also specify a Python version via `sider.yml`. The default is Python 3.

The latest versions of Python 2 or Python 3 can be used.

> **DEPRECATED**: Sider will drop the support of Python 2, which will [be retired by April 2020](https://www.python.org/psf/press-release/pr20191220/). So, the `version` option of `sider.yml` and the detection of Python version via `.python-version` features are going to be unavailable near the future.

## Default Configuration

Sider provides a default configuration for Flake8. If your repository does not include `.flake8`, `setup.cfg` or `tox.ini`, our default configuration will be used.

Our default configuration is here:

```ini
[flake8]
ignore =
  # Ignore all warnings
  W,
  # Ignore all indentation rules
  E1,
  # Ignore all whitespace rules
  E2,
  # Ignore all blank line rules
  E3,
  # Ignore all import rules
  E4,
  # Ignore backslash style rule
  E502,
  # Ignore oneline statement rules
  E70,

max-line-length = 200
```

## Configuration via `sider.yml`

Here are example settings for Flake8 under `flake8`:

```yaml
linter:
  flake8:
    plugins:
      - flake8-bandit
      - flake8-builtins==1.4.1
      - flake8-mypy>=17.3.3
```

You can use several options to fine-tune Flake8 to your project.

| Name                                                                        | Type                 | Default | Description                                                            |
| :-------------------------------------------------------------------------- | :------------------- | :------ | :--------------------------------------------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`             | -       | A root directory.                                                      |
| [`version`](#version)                                                       | `integer`            | `3`     | **[DEPRECATED]** Specify Python version.                               |
| [`plugins`](#plugins)                                                       | `string`, `string[]` | -       | Set Flake8 plugins. It also allows to specify these plugins' versions. |

### `version`

This setting manages the Python version used when running `flake8`. Python 3 will be used if omitted.

### `plugins`

This option allows you to enable Flake8 plugins. You can set arbitrary plugin names and also specify a _minimum_ version number. If no version is specified, Sider will install the latest version.
