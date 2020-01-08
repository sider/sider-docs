---
id: eslint
title: ESLint
sidebar_label: ESLint
hide_title: true
---

# ESLint

| Supported Version         | Language   | Runtime         | Website            |
| :------------------------ | :--------- | :-------------- | :----------------- |
| 5.0.0+ (default to 6.8.0) | JavaScript | Node.js 12.14.0 | https://eslint.org |

> **DEPRECATED**: Sider will drop the support of ESLint 4.19.1 and older versions soon. Please upgrade to **5.0.0** and newer.

## Getting Started

To start using ESLint, enable it in your [repository settings](../../getting-started/repository-settings.md).
After enabled, Sider will automatically analyze your JavaScript files with the default version and [default configuration](#default-configuration). Or if you already have configured ESLint, Sider will install your dependencies and analyze with your configuration.

But if you want to customize more ESLint with some plugins or shareable configurations, install ESLint first:

```shell
$ npm install eslint --save-dev
```

Next, you may have to create your `.eslintrc.*` file(s) and configure ESLint with them. We recommend running `eslint --init`. It can ask you some questions and configure the settings for you automatically:

```shell
$ npx eslint --init
```

For more details about the configuration, see [the ESLint documentation](https://eslint.org/docs/user-guide/getting-started).

Then, if you need more customization, you can do it by adding a `sider.yml` file to your repository. For example, if you want to analyze React files in a `frontend/` directory, you may configure your `sider.yml` as follows:

```yaml
linter:
  eslint:
    dir: "frontend/"
    ext: ".js,.jsx"
```

For more details, see the following sections.

## Default Configuration

Sider prepares the following configuration by default. The configuration is used when you have no ESLint configurations in your repository or `sider.yml`.

```yaml
extends: "eslint:recommended"
rules:
  no-undef: off
  no-unused-vars: off
```

## Configuration via `sider.yml`

Here is an example for ESLint:

```yaml
linter:
  eslint:
    dir: frontend/app
    config: .my_eslintrc
    ext: ".js,.jsx,.es6"
    ignore-path: .my_eslintignore
    no-ignore: true
    ignore-pattern: "/src/vendor/*"
    global: "require,exports:true"
    quiet: true
```

You can use the following options to make analysis fitter for your project.

| Name                                                                              | Type                 | Default | Description                                                                                                        |
| --------------------------------------------------------------------------------- | -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option)       | `string`             | -       | A root directory.                                                                                                  |
| [`npm_install`](../../getting-started/custom-configuration.md#npm_install-option) | `boolean`, `string`  | -       | A behavior of npm installation.                                                                                    |
| [`dir`](#dir)                                                                     | `string`, `string[]` | `.`     | Directories to analyze.                                                                                            |
| [`config`](#config)                                                               | `string`             | -       | [`--config`](https://eslint.org/docs/user-guide/command-line-interface#-c---config) option of ESLint.              |
| [`ext`](#ext)                                                                     | `string`             | `.js`   | [`--ext`](https://eslint.org/docs/user-guide/command-line-interface#--ext) option of ESLint.                       |
| [`ignore-path`](#ignore-path)                                                     | `string`             | -       | [`--ignore-path`](https://eslint.org/docs/user-guide/command-line-interface#--ignore-path) option of ESLint.       |
| [`no-ignore`](#no-ignore)                                                         | `boolean`            | `false` | [`--no-ignore`](https://eslint.org/docs/user-guide/command-line-interface#--no-ignore) option of ESLint.           |
| [`ignore-pattern`](#ignore-pattern)                                               | `string`, `string[]` | -       | [`--ignore-pattern`](https://eslint.org/docs/user-guide/command-line-interface#--ignore-pattern) option of ESLint. |
| [`global`](#global)                                                               | `string`             | -       | [`--global`](https://eslint.org/docs/user-guide/command-line-interface#--global) option of ESLint.                 |
| [`quiet`](#quiet)                                                                 | `boolean`            | `false` | [`--quiet`](https://eslint.org/docs/user-guide/command-line-interface#--quiet) option of ESLint.                   |

For details of the options, check the following sections and [the ESLint documentation](https://eslint.org/docs/user-guide/command-line-interface#options).

### `dir`

This option allows you to specify a directory to analyze. For example:

```yaml
linter:
  eslint:
    dir: frontend/src
```

Also, you can specify multiple directories or glob patterns:

```yaml
linter:
  eslint:
    dir:
      - frontend/src
      - app/assets/javascripts
      - "**/__tests__/**"
```

### `config`

This option allows you to specify an additional configuration file.

### `ext`

This option allows you to specify file extensions to analyze.

### `ignore-path`

This option allows you to exclude files from analysis by your ignore file.

### `no-ignore`

This option allows you to disable the use of ignore files or patterns.

### `ignore-pattern`

This option allows you to ignore files by patterns.

### `global`

This option allows you to define global variables. It requires a comma-separated string.

### `quiet`

This option allows you to suppress warnings. When `true`, only errors are reported.
