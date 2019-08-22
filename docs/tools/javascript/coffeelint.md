---
id: coffeelint
title: CoffeeLint
sidebar_label: CoffeeLint
hide_title: true
---

# CoffeeLint

| Supported Version           | Language     | Runtime        | Website                                 |
| --------------------------- | ------------ | -------------- | --------------------------------------- |
| 1.16.0+ (default to 1.16.0) | CoffeeScript | Node.js 12.7.0 | https://github.com/clutchski/coffeelint |

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

| Name            | Type     | Default | Description                                                                   |
| --------------- | -------- | ------- | ----------------------------------------------------------------------------- |
| `npm_install`   | -        | -       | See [here](../../getting-started/custom-configuration.md#npm_install-option). |
| [`file`](#file) | `string` | -       | Set your configuration file.                                                  |

### `file`

This option allows you to specify your own configuration file. If you want to use a configuration file except for the default `coffeelint.json` file, set this option.
