---
id: coffeelint
title: CoffeeLint
sidebar_label: CoffeeLint
hide_title: true
---

# CoffeeLint

| Supported Version        | Language     | Website                                 |
| ------------------------ | ------------ | --------------------------------------- |
| 1.16.0+ (default: 4.1.2) | CoffeeScript | https://coffeelint.github.io |

**CoffeeLint** is a style checker that helps keep CoffeeScript code clean and consistent.

## Getting Started

To start using CoffeeLint, enable it in your [repository settings](../../getting-started/repository-settings.md).

If you want to use a version except for the Sider default version, install it into your repository:

```shell
$ npm install coffeelint --save-dev
```

Then, create your `coffeelint.json` file and edit it.

## Configuration via `sider.yml`

Here is an example for CoffeeLint:

```yaml
linter:
  coffeelint:
    file: my_coffeelint.json
```

You can use the following options to make analysis fitter for your project.

| Name                                                                                        | Type                | Default |
| ------------------------------------------------------------------------------------------- | ------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)       | `string`            | -       |
| [`npm_install`](../../getting-started/custom-configuration.md#linteranalyzer_idnpm_install) | `boolean`, `string` | -       |
| [`file`](#file)                                                                             | `string`            | -       |

### `file`

This option allows you to specify your own configuration file. If you want to use a configuration file except for the default `coffeelint.json` file, set this option.
