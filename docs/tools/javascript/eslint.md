---
id: eslint
title: ESLint
sidebar_label: ESLint
hide_title: true
---

# ESLint

| Supported Version        | Language   | Website            |
| ------------------------ | ---------- | ------------------ |
| 5.0.0+ (default: 7.23.0) | JavaScript | https://eslint.org |

**ESLint** is a static analysis tool for JavaScript and its flavors (e.g. TypeScript, JSX, or Vue).
It can find problems, style violations, or security issues, etc. in your code, and have so many plugins.

## Getting Started

To start using ESLint, enable it in your [repository settings](../../getting-started/repository-settings.md).
After enabled, Sider will automatically analyze your JavaScript files with our default version and [default configuration](#default-configuration-for-eslint) (if you do not have yours).

But, if you want to customize more ESLint with some plugins or shareable configurations, install ESLint into your project:

```console
$ npm install eslint --save-dev
```

Next, you need to configure ESLint for your project. We recommend `eslint --init` that helps you configure it.

```console
$ npm exec -- eslint --init
```

See the [ESLint documentation](https://eslint.org/docs/user-guide/getting-started) to learn more.

## Default Configuration for ESLint

Sider provides our [recommended ruleset](https://github.com/sider/runners/blob/HEAD/images/eslint/sider_recommended_eslint.js) for ESLint.
This configuration is used when you have no ESLint configurations or `sider.yml` in your repository.
For more details, please visit [Recommended Ruleset](../../getting-started/recommended-rules.md).

## Configuration

You can use the following options of `sider.yml` to make analysis fitter for your project. For example:

```yaml
linter:
  eslint:
    target: frontend/app
    config: .config/.eslintrc.js
    ext: [.js, .jsx, .es6]
    ignore-path: .my_eslintignore
    ignore-pattern: "/src/vendor/*"
    no-ignore: true
    global:
      - require
      - "exports:true"
    quiet: true
```

| Name                                                                                          | Type                 | Default |
| --------------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)         | `string`             | -       |
| [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies) | `string[]`, `map[]`  | -       |
| [`npm_install`](../../getting-started/custom-configuration.md#linteranalyzer_idnpm_install)   | `boolean`, `string`  | -       |
| [`target`](#target)                                                                           | `string`, `string[]` | `.`     |
| [`config`](#config)                                                                           | `string`             | -       |
| [`ext`](#ext)                                                                                 | `string`, `string[]` | -       |
| [`ignore-path`](#ignore-path)                                                                 | `string`             | -       |
| [`ignore-pattern`](#ignore-pattern)                                                           | `string`, `string[]` | -       |
| [`no-ignore`](#no-ignore)                                                                     | `boolean`            | `false` |
| [`global`](#global)                                                                           | `string`, `string[]` | -       |
| [`quiet`](#quiet)                                                                             | `boolean`            | `false` |

### `target`

This option allows you to specify files or directories to analyze. Glob is available.

For example:

```yaml
linter:
  eslint:
    target:
      - frontend/src
      - app/assets/javascripts
      - "**/__tests__/**"
```

### `dir`

> **DEPRECATED**: This option is deprecated. Use the [`target`](#target) option instead.

This is an alias for `target`.

### `config`

This option allows you to specify an additional configuration file.
See also the [`--config`](https://eslint.org/docs/user-guide/command-line-interface#-c-config) option.

### `ext`

This option allows you to specify file extensions to analyze.
See also the [`--ext`](https://eslint.org/docs/user-guide/command-line-interface#-ext) option.

### `ignore-path`

This option allows you to exclude files from analysis by your ignore file.
See also the [`--ignore-path`](https://eslint.org/docs/user-guide/command-line-interface#-ignore-path) option.

### `ignore-pattern`

This option allows you to ignore files by patterns.
See also the [`--ignore-pattern`](https://eslint.org/docs/user-guide/command-line-interface#-ignore-pattern) option.

### `no-ignore`

This option allows you to disable the use of ignore files or patterns.
See also the [`--no-ignore`](https://eslint.org/docs/user-guide/command-line-interface#-no-ignore) option.

### `global`

This option allows you to define global variables. It requires a comma-separated string.
See also the [`--global`](https://eslint.org/docs/user-guide/command-line-interface#-global) option.

### `quiet`

This option allows you to suppress warnings. When `true`, only errors are reported.
See also the [`--quiet`](https://eslint.org/docs/user-guide/command-line-interface#-quiet) option.
