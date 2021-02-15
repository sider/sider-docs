---
id: flake8
title: Flake8
sidebar_label: Flake8
hide_title: true
---

# Flake8

| Supported Version | Language | Website                  |
| ----------------- | -------- | ------------------------ |
| 3.8.4             | Python   | https://flake8.pycqa.org |

**Flake8** is a linter to check the style and quality of Python code.

## Getting Started

To start using Flake8, enable it in your [repository settings](../../getting-started/repository-settings.md).

To customize Flake8, put a `.flake8` file in your repository.

## Default Configuration for Flake8

Sider provides our [recommended ruleset](https://github.com/sider/runners/blob/master/images/flake8/sider_recommended_flake8.ini) for flake8.
If your repository does not include `.flake8`, `setup.cfg` or `tox.ini`, the recommended ruleset will be used.
For more details, please visit [Recommended Ruleset](../../getting-started/recommended-rules.md).

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
      - flake8-docstrings>=1.4.0
      - git+https://github.com/PyCQA/flake8-import-order.git@51e16f33065512afa1a85a20b2c2d3be768f78ea
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

This option allows you to enable Flake8 plugins. You can set arbitrary plugin names and also specify a version specifier like `==1.3.0`.
If only a name is specified, the latest version of the plugin will be installed.

Also, you can specify any VCS URL that `pip` supports, like `git+https://git.example.com/MyProject#egg=MyProject`.

See also the [`pip` documentation](https://pip.pypa.io/en/stable/reference/pip_install/) for details about such formats.
