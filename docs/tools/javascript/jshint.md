---
id: jshint
title: JSHint
sidebar_label: JSHint
hide_title: true
---

# JSHint

| Supported Version | Language   | Runtime         | Website            |
| ----------------- | ---------- | --------------- | ------------------ |
| 2.10.2            | JavaScript | Node.js 12.12.0 | https://jshint.com |

## Getting Started

To start using JSHint, enable it in [Repository Settings](../../getting-started/repository-settings.md).

To customize the configuration, use the standard `.jshintrc` or `.jshintignore` files. Configuration via `jshintConfig` in `package.json` is also supported.

## Default Configuration

Sider uses the default configuration where there is no custom configuration preset. The configuration is here:

```json5
{
  // Relaxes
  "asi": true,
  "sub": true,
  "eqnull": true,

  // Environments
  "jquery": true,
  "browser": true,

  "esversion": 2015
}
```

In addition, we uses `.jshintignore` to default with following setting:

```
public/js/**/*.js
**/*.min.js
```

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
