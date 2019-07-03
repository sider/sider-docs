---
id: jshint
title: JSHint
sidebar_label: JSHint
hide_title: true
---

# JSHint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 2.10.2 | JavaScript(Node.js 11.5.0) | [https://jshint.com/](https://jshint.com/) |

## Getting Started

To start using JSHint, enable it in [Repository Settings](../../getting-started/repository-settings.md).

To customize the configuration, use the standard `.jshintrc` or `.jshintignore` files. Configuration via `jshintConfig` in `package.json` is also supported.

## Default Configuration

Sider uses its default configuration where there is no custom configuration preset:

* [Sider's configuration for jshintrc](https://github.com/actcat/sideci_config/blob/master/javascript/jshint/sideci_jshintrc)

## Configuration via `sider.yml`

```yaml
linter:
  jshint:
    dir: src
    config: lint_yml/.jshintrc
```

### Options

You can use sereral options to make analysis fitter for your project.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`dir`](#dir) | `string` | Set directory name as analysis target. |
| [`config`](#config) | `string` | Set configuration file for JSHint. |

#### `dir`

The directory where the analysis is performed. It is passed as an argument to JSHint.

#### `config`

This option allows you to use your own configuration file for JSHint. If you have a `.jshintrc` file, use this option.

