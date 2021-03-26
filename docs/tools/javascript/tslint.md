---
id: tslint
title: TSLint
sidebar_label: TSLint (deprecated)
hide_title: true
---

# TSLint

> **DEPRECATED**: TSLint has been deprecated and recommends migrating to [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint).
> See [palantir/tslint#4534](https://github.com/palantir/tslint/issues/4534) for details.
> And, [`tslint-to-eslint-config`](https://www.npmjs.com/package/tslint-to-eslint-config) helps you migrate it.

| Supported Version       | Language   | Website                           |
| ----------------------- | ---------- | --------------------------------- |
| 5.0.0+ (default: 6.1.3) | TypeScript | https://palantir.github.io/tslint |

**TSLint** is an extensible static analysis tool for TypeScript.
It checks your code for readability, maintainability, and functionality errors.

## Getting Started

To start using TSLint, enable it in your [repository settings](../../getting-started/repository-settings.md).
After enabled, Sider will automatically analyze your TypeScript files with the default version and [default configuration](#default-configuration-for-tslint). Or if you already have configured TSLint, Sider will install your dependencies and analyze with your configuration.

But if you have no configuration yet and need more customization, install TSLint first:

```shell
$ npm install tslint --save-dev
```

Next, create the configuration file (`tslint.json`):

```shell
$ npx tslint --init
```

Then, edit the configuration file as you want. For more details about the configuration, please see [the TSLint documentation](https://palantir.github.io/tslint/usage/configuration).

## Default Configuration for TSLint

Sider prepares the [default TSLint configuration](https://github.com/sider/runners/blob/HEAD/images/tslint/default_tslint.json).

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  tslint:
    glob: "path/to/**/*.ts"
    config: my_tslint.json
    exclude: "vendor/**"
    project: frontend/tsconfig.json
    rules-dir: your_custom_rules/
```

You can use the following options to make analysis fitter for your project.

| Name                                                                                        | Type                 | Default           |
| ------------------------------------------------------------------------------------------- | -------------------- | ----------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)       | `string`             | -                 |
| [`npm_install`](../../getting-started/custom-configuration.md#linteranalyzer_idnpm_install) | `boolean`, `string`  | -                 |
| [`glob`](#glob)                                                                             | `string`             | `**/*.ts{,x}`     |
| [`config`](#config)                                                                         | `string`             | -                 |
| [`exclude`](#exclude)                                                                       | `string`, `string[]` | `node_modules/**` |
| [`project`](#project)                                                                       | `string`             | -                 |
| [`rules-dir`](#rules-dir)                                                                   | `string`, `string[]` | -                 |
| [`type-check`](#type-check)                                                                 | `boolean`            | `false`           |

### `glob`

This option allows you to specify files to analyze.

### `config`

This option allows you to specify a configuration file you want.

### `exclude`

This option allows you to exclude files from analysis. Glob patterns are also available.

### `project`

This option allows you to specify a TypeScript project file or directory.

### `rules-dir`

This option allows you to specify your own rules. If you want to use multiple rules, declare them as follows:

```yaml
linter:
  tslint:
    rules-dir:
      - rules/ACustomRule
      - rules/AnotherCustomRule
```

> Note that you need to use TSLint since version **5.12.0** to set the `rules-dir` option as an array.

### `type-check`

This option controls whether to enable type checking when running TSLint. If you want type checking, set this to `true`.

> Note that the option is **deprecated** since TSLint version **5.8.0**. TSLint no longer have done type checking since it. For more details about the change, see [the pull request](https://github.com/palantir/tslint/pull/3322).
