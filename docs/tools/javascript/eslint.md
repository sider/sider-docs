---
id: eslint
title: ESLint
sidebar_label: ESLint
hide_title: true
---

# ESLint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| Optional (default to 5.16.0) | JavaScript(Node.js 11.5.0) | [https://eslint.org](https://eslint.org) |

## Getting Started

To start using ESLint in Sider, declare it as a dependency in your `package.json`.

```bash
$ npm install eslint -D
```

Add `sider.yml` to your repository:

```yaml
linter:
  eslint:
    npm_install: true
```

If you need more customization, use standard ESLint config files. For instance, use `.eslintrc` to customize rules, and `.eslintignore` to specify files to ignore during analysis.

## Default Configuration

Sider provides a recommended configuration for ESLint. The configuration is used when you haven't added any ESLint configurations in your `sider.yml` and don't have the default config files, `.eslintrc`, `.eslintrc.yml`, `.eslintrc.yaml`, or `.eslintrc.json` in your repository.

* [Sider recommended settings for ESLint](https://github.com/actcat/sideci_config/blob/master/javascript/eslint/eslintrc)

## Configuration via `sider.yml`

Put settings for ESLint under `eslint`:

```yaml
linter:
  eslint:
    npm_install: true
    dir: frontend/app
    config: '.myeslintrc'
    ext: '.js,.jsx,.es6'
    ignore-path: .gitignore
    no-ignore: true
    ignore-pattern: /src/vendor/*
    global: require,exports:true welcome.js
    quiet: true
```

### Options

You can use several options to make analysis fitter for your project.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`npm_install`](#npm_install) | `boolean`,<br />`string` | Resolve dependencies when analyzing with `npm`. |
| [`dir`](#dir) | `string`,<br />`array<string>` | Set files or directories name to analyze. |
| [`config`](#config) | `string` | Set configuration file for ESLint. |
| [`ext`](#ext) | `string` | Specify file extensions inspected by ESLint. |
| [`ignore-path`](#ignore-path) | `string` | Set ignore file as necessary to exclude files from analysis. |
| [`ignore-pattern`](#ignore-pattern) | `string`,<br />`array<string>` | Set ignore patterns to exclude files from analysis. |
| [`no-ignore`](#no-ignore) | `boolean` | If `true`, disable excluded files from ignore settings of ESLint. |
| [`global`](#global) | `string` | Define global variables with this option. |
| [`quiet`](#quiet) | `boolean` | If `true`, ESLint reports only error. |

For details of the options, check following items.

### `npm_install`

This option controls `npm` command invocation. Using this option, you can install dependencies before analysis.

| Value | Execution Command |
| :---- | :---------------- |
| `true` | `npm install --ignore-scripts` |
| `false` | None. |
| `development` | `npm install --only=development --ignore-scripts` |
| `production` | `npm install --only=production --ignore-scripts` |
| Other values | Sider analysis fails. |

If your `package.json` contains a dependency which cannot be installed in the Sider container, `npm install` fails. The analysis will continue, but the results may be inaccurate. In this case, try using the `development` or `production` options, or set the dependency as an `optionalDependency`.

### `dir`

This option controls name of directory to pass to `eslint`. The default value is `.`. Declare directory to analyze like this:

```yaml
linter:
  eslint:
    dir: frontend/src
```

If you would like to analyze multiple directories with Sider, you can set them like this:

```yaml
linter:
  eslint:
    dir:
      - frontend/src
      - app/assets/javascripts
      - public/assets/javascripts
```

#### `config`

This option allows you specify an additional configuration file. ESLint uses your `.eslintrc{.yaml,.yml,.json}` in the root directory of your project by default, so you don't need to use this option if you have used one of the default filenames. If your ESLint config file has a different name, or is not in the root directory, you should use this option:

```yaml
linter:
  eslint:
    options:
      config: lint_yml/.eslintrc
```

#### `ext`

This option controls file extensions. By default, only `.js` files are inspected.

#### `ignore-path`

This option allows you to exclude files from analysis. By default ESLint detects and uses `.eslintrc` even if you don't use this option. If you'd like to use other ignore files, such as `.gitignore`, put them in this option.

#### `no-ignore`

This option controls use of ignore files or patterns to disable.

#### `ignore-pattern`

This option allows you to ignore files by pattern. It must be a string or an array.

#### `global`

This option controls definition of global variables. It requires a comma-separated string.

Please see here to learn more about ESLint's command line interface: [ESLint - Command Line Interface](https://eslint.org/docs/user-guide/command-line-interface).

#### `quiet`

This option controls warnings. When `true`, ESLint will only report errors (and ignore warnings).

## Troubleshooting

### What if our repo does not have `package.json`?

> We generally recommend using `npm install` to install dependencies. This standard way allows us to handle your dependencies correctly. This way, we'll never install an ESLint version different from the one you want to use.
>
> However, we also try to install dependencies even if `package.json` cannot be found in your repository. This mechanism is for backward compatibility. It is unstable and unreliable, and we are no longer actively supporting it.
>
> Put `package.json` in your repository and set  `npm_install: true`. This is stable and future-proof.

If your repository does not contain a `package.json` or have `npm_install:` set to `true`, Sider tries to install required npm packages as the following:

1. Read `eslintrc` \(or equivalent\) and find plugins, parsers, and configurations to install
2. Try installing the `@latest` of the libraries and their peer dependencies
3. Install `eslint@latest` if `eslint` is not yet installed

