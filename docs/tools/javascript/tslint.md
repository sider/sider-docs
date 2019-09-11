---
id: tslint
title: TSLint
sidebar_label: TSLint
hide_title: true
---

# TSLint

| Supported Version          | Language   | Runtime        | Website                           |
| -------------------------- | ---------- | -------------- | --------------------------------- |
| 5.0.0+ (default to 5.18.0) | TypeScript | Node.js 12.10.0 | https://palantir.github.io/tslint |

## Getting Started

To start using TSLint, enable it in your [repository settings](../../getting-started/repository-settings.md).
After enabled, Sider will automatically analyze your TypeScript files with the default version and [default configuration](#default-configuration). Or if you already have configured TSLint, Sider will install your dependencies and analyze with your configuration.

But if you have no configuration yet and need more customization, install TSLint first:

```shell
$ npm install tslint --save-dev
```

Next, create the configuration file (`tslint.json`):

```shell
$ npx tslint --init
```

Then, edit the configuration file as you want. For more details about the configuration, please see [the TSLint documentation](https://palantir.github.io/tslint/usage/configuration).

## Default Configuration

Sider prepares the following configuration by default. Sider uses the configuration when you have no configurations.

```json
{
  "defaultSeverity": "error",
  "extends": ["tslint:recommended"],
  "jsRules": {},
  "rules": {},
  "rulesDirectory": []
}
```

## Configuration via `sider.yml`

Here is an example for TSLint:

```yaml
linter:
  tslint:
    config: my_tslint.json
    exclude: "vendor/**"
    project: frontend/tsconfig.json
    rules-dir: your_custom_rules/
    glob: "path/to/**/*.ts"
```

You can use the following options to make analysis fitter for your project.

| Name                        | Type                      | Default           | Description                                                                        |
| --------------------------- | ------------------------- | ----------------- | ---------------------------------------------------------------------------------- |
| `npm_install`               | -                         | -                 | See [here](../../getting-started/custom-configuration.md#npm_install-option).      |
| [`config`](#config)         | `string`                  | -                 | [`--config`](https://palantir.github.io/tslint/usage/cli) option of TSLint.        |
| [`exclude`](#exclude)       | `string`, `array<string>` | `node_modules/**` | [`--exclude`](https://palantir.github.io/tslint/usage/cli) option of TSLint.       |
| [`project`](#project)       | `string`                  | -                 | [`--project`](https://palantir.github.io/tslint/usage/cli) option of TSLint.       |
| [`rules-dir`](#rules-dir)   | `string`, `array<string>` | -                 | [`--rules-dir`](https://palantir.github.io/tslint/usage/cli) option of TSLint.     |
| [`glob`](#glob)             | `string`                  | `**/*.ts{,x}`     | A glob pattern to analyze.                                                         |
| [`type-check`](#type-check) | `boolean`                 | `false`           | **[DEPRECATED]** If you use TSLint 5.8.0+ and set `true`, your analysis will fail. |

For details of the options, check the following sections.

### `config`

This option allows you to specify your configuration file except for the default one.

### `exclude`

This option allows you to exclude files from analysis. A glob pattern is available also. If you want to exclude multiple files or directories, declare them as a sequence as follows:

```yaml
linter:
  tslint:
    exclude:
      - "node_modules/**"
      - "cache/**"
```

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

### `glob`

This option allows you to specify files to analyze.

### `type-check`

This option controls whether to enable type checking when running TSLint. If you want type checking, set this to `true`.

> Note that the option is **deprecated** since TSLint version **5.8.0**. TSLint no longer have done type checking since it. For more details about the change, see [the pull request](https://github.com/palantir/tslint/pull/3322).
