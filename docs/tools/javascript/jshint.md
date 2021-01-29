---
id: jshint
title: JSHint
sidebar_label: JSHint
hide_title: true
---

# JSHint

| Supported Version | Language   | Website            |
| ----------------- | ---------- | ------------------ |
| 2.12.0            | JavaScript | https://jshint.com |

**JSHint** is a static analysis tool to detect errors and potential problems in JavaScript code.

## Getting Started

To start using JSHint, enable it in your [repository settings](../../getting-started/repository-settings.md).

To customize the configuration, use the standard `.jshintrc` or `.jshintignore` files. Configuration via `jshintConfig` in `package.json` is also supported.

## Default Configuration for JSHint

Sider uses the [default configuration](https://github.com/sider/runners/blob/master/images/jshint/sider_jshintrc) of `.jshintrc` when there is no custom configuration preset.

In addition, Sider uses the [default configuration](https://github.com/sider/runners/blob/master/images/jshint/sider_jshintignore) of `.jshintignore`.

## Configuration

Here is a configuration example via `sider.yml`:

```yaml
linter:
  jshint:
    dir: src
    config: lint_yml/.jshintrc
```

You can use sereral options to make analysis fitter for your project.

| Name                                                                                  | Type     | Default |
| ------------------------------------------------------------------------------------- | -------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string` | -       |
| [`dir`](#dir)                                                                         | `string` | `.`     |
| [`config`](#config)                                                                   | `string` | -       |

### `dir`

This option allows you to specify a directory to analyze.

### `config`

This option allows you to use your own configuration file for JSHint.
