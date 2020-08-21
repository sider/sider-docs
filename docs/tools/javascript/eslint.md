---
id: eslint
title: ESLint
sidebar_label: ESLint
hide_title: true
---

# ESLint

| Supported Version       | Language   | Runtime         | Website            |
| ----------------------- | ---------- | --------------- | ------------------ |
| 5.0.0+ (default: 7.7.0) | JavaScript | Node.js 12.18.3 | https://eslint.org |

**ESLint** is a static analysis tool for JavaScript and its flavors (e.g. TypeScript, JSX, Vue).
It can find problems, style violations, or security issues, etc. in your code, and have so many plugins.

## Getting Started

To start using ESLint, enable it in your [repository settings](../../getting-started/repository-settings.md).
After enabled, Sider will automatically analyze your JavaScript files with the default version and [default configuration](#default-configuration-for-eslint). Or if you already have configured ESLint, Sider will install your dependencies and analyze with your configuration.

But if you want to customize more ESLint with some plugins or shareable configurations, install ESLint first:

```console
$ npm install eslint --save-dev
```

Next, you may have to create your `.eslintrc.*` file(s) and configure ESLint with them. We recommend running `eslint --init`. It can ask you some questions and configure the settings for you automatically:

```console
$ npx eslint --init
```

For more details about the configuration, see [the ESLint documentation](https://eslint.org/docs/user-guide/getting-started).

Then, if you need more customization, you can do it by adding a `sider.yml` file to your repository. For example, if you want to analyze React files in a `frontend/` directory, you may configure your `sider.yml` as follows:

```yaml
linter:
  eslint:
    target: frontend/
    ext: .js,.jsx
```

For more details, see the following sections.

## Default Configuration for ESLint

Sider prepares the [default ESLint configuration](https://github.com/sider/runners/blob/master/images/eslint/sider_eslintrc.yml).
This configuration is used when you have no ESLint configurations or `sider.yml` in your repository.

## Configuration

You can use the following options of `sider.yml` to make analysis fitter for your project. For example:

```yaml
linter:
  eslint:
    target: frontend/app
    config: .config/.eslintrc.js
    ext: .js,.jsx,.es6
    ignore-path: .my_eslintignore
    ignore-pattern: "/src/vendor/*"
    no-ignore: true
    global: "require,exports:true"
    quiet: true
```

| Name                                                                                        | Type                 | Default |
| ------------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)       | `string`             | -       |
| [`npm_install`](../../getting-started/custom-configuration.md#linteranalyzer_idnpm_install) | `boolean`, `string`  | -       |
| [`target`](#target)                                                                         | `string`, `string[]` | `.`     |
| [`config`](#config)                                                                         | `string`             | -       |
| [`ext`](#ext)                                                                               | `string`             | `.js`   |
| [`ignore-path`](#ignore-path)                                                               | `string`             | -       |
| [`ignore-pattern`](#ignore-pattern)                                                         | `string`, `string[]` | -       |
| [`no-ignore`](#no-ignore)                                                                   | `boolean`            | `false` |
| [`global`](#global)                                                                         | `string`             | -       |
| [`quiet`](#quiet)                                                                           | `boolean`            | `false` |

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

### `config`

This option allows you to specify an additional configuration file.
See also the [`--config`](https://eslint.org/docs/user-guide/command-line-interface#c-config) option.

### `ext`

This option allows you to specify file extensions to analyze.
See also the [`--ext`](https://eslint.org/docs/user-guide/command-line-interface#ext) option.

### `ignore-path`

This option allows you to exclude files from analysis by your ignore file.
See also the [`--ignore-path`](https://eslint.org/docs/user-guide/command-line-interface#ignore-path) option.

### `ignore-pattern`

This option allows you to ignore files by patterns.
See also the [`--ignore-pattern`](https://eslint.org/docs/user-guide/command-line-interface#ignore-pattern) option.

### `no-ignore`

This option allows you to disable the use of ignore files or patterns.
See also the [`--no-ignore`](https://eslint.org/docs/user-guide/command-line-interface#no-ignore) option.

### `global`

This option allows you to define global variables. It requires a comma-separated string.
See also the [`--global`](https://eslint.org/docs/user-guide/command-line-interface#global) option.

### `quiet`

This option allows you to suppress warnings. When `true`, only errors are reported.
See also the [`--quiet`](https://eslint.org/docs/user-guide/command-line-interface#quiet) option.
