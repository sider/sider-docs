---
id: tslint
title: TSLint
sidebar_label: TSLint
hide_title: true
---

# TSLint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| Optional (default to 5.17.0) | JavaScript(Node.js 11.5.0) | [https://palantir.github.io/tslint/](https://palantir.github.io/tslint/) |

## Getting Started

To start using TSLint in Sider, declare it as a dependency in `package.json` in your repository.

```sh
$ npm install tslint -D
```

If you need customization, use the standard TSLint config file. Create a `tslint.json` file in the root directory of your repository.

## Configuration via `sider.yml`

Here is an example setting for TSLint under `tslint`:

```yaml
linter:
  tslint:
    npm_install: true
    config: 'lint_yml/tslint.json'
    exclude: 'node_modules/**'
    project: 'tsconfig.json'
    rules-dir: 'your_custom_rule'
    glob: '**/*.ts{,x}'
```

### Options

You can use several options to make analysis fitter for your project.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`npm_install`](#npm_install) | `boolean`,<br />`string` | Resolve dependencies when analyzing with `npm`. |
| [`config`](#config) | `string` | Set configuration file for TSLint. |
| [`exclude`](#exclude) | `string`,<br />`array<string>`| Specify file and/or directory patterns to exclude from analysis. |
| [`project`](#project) | `string` | Set your TypeScript project file; `tsconfig.json`. |
| [`rules-dir`](#rules-dir) | `string`, <br />`array<string>` | Specify a directory which is custom rules that TSLint inspects. |
| [`type-check`](#type-check) | `boolean` | [Deprecate] If you use TSLint 5.8.0+ and set `true`, Sider's analysis will be failed. |
| [`glob`](#glob) | `string` | Specify glob patterns to analyze. |

For details of the options, check following items.

#### `npm_install`

This option controls `npm` command invocation. By using this option, you can install dependencies to your program.

| Value | Execution Command |
| :---- | :---------------- |
| `true` | `npm install --ignore-scripts` |
| `false` | None |
| `development` | `npm install --only=development --ignore-scripts` |
| `production` | `npm install --only=production --ignore-scripts` |
| Other values | Sider analysis fails. |

If your `package.json` contains a dependency which cannot be installed in the Sider container, `npm install` fails. The analysis will continue but the results may be inaccurate. In this case, try using the `development` or `production` options, or use the `optionalDependency` setting.

#### `config`

This option controls which configuration file TSLint uses. If you have a `tslint.json` file, use this option.

#### `exclude`

This option controls which files TSLint excludes from linting. The default value is `node_modules/**`.

If you want to exclude multiple files/directories, declare them as a sequence:

```yaml
linter:
  tslint:
    exclude:
      - 'node_modules/**'
      - '.git/**'
      - 'cache/**'
```

#### `project`

This option controls project file. If you have `tsconfig.json` file, declare it in this directive.

#### `rules-dir`

This option controls customized rules that TSLint inspects.

If you want to set multiple custom rules, declare them as follow:

```yaml
linter:
  tslint:
    rules-dir:
      - rules/ACustomRule
      - rules/AnotherCustomRule
```

Note that you need to use TSLint after version 5.12.0 to set `rules-dir` option as an array.

#### `type-check`

This option controls whether to enable type checking when running TSLint. If you want type checking, set this to `true`.

The option is deprecated in version 5.8.0 of TSLint. TSLint no longer does type checking. If you would like to know about the change, see [https://github.com/palantir/tslint/pull/3322](https://github.com/palantir/tslint/pull/3322).

#### `glob`

This option controls files that TSLint inspects. By default, `.ts` and `.tsx` files are inspected.

