---
id: stylelint
title: stylelint
sidebar_label: stylelint
hide_title: true
---

# stylelint

| Supported Version          | Language                    | Runtime         | Website              |
| :------------------------- | :-------------------------- | :-------------- | :------------------- |
| 8.3.0+ (default to 13.0.0) | CSS and flavors (e.g. Sass) | Node.js 12.14.1 | https://stylelint.io |

## Getting Started

To start using stylelint, enable it in your [repository settings](../../getting-started/repository-settings.md).

If you want to use a version except for the Sider default version or use some plugins or shareable configurations, install it into your repository as follows:

```shell
$ npm install stylelint --save-dev

$ npm install stylelint-config-standard --save-dev
```

Sider supports styelint plugins and configurations that are provided as npm packages.

If you need more customization, use the standard stylelint configuration files. For example, use `.stylelintrc.yaml` to customize rules, and `.stylelintignore` to ignore files and directories.

## Default Configuration

If you have no custom configuration, Sider uses the latest version of [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended).

```yaml
extends: "stylelint-config-recommended"
```

Also, Sider ignores `*.min.css` files by default.

## Configuration via `sider.yml`

Here is an example for stylelint:

```yaml
linter:
  stylelint:
    npm_install: false
    config: my_stylelintrc.yaml
    syntax: sugarss
    ignore-path: .gitignore
    ignore-disables: true
    report-needless-disables: true
    quiet: true
    glob: "**/*.{css,scss}"
```

You can use the following options to fine-tune stylelint to your project.

| Name                                                                              | Type                | Default                         | Description                                                                                                          |
| --------------------------------------------------------------------------------- | ------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option)       | `string`            | -                               | A root directory.                                                                                                    |
| [`npm_install`](../../getting-started/custom-configuration.md#npm_install-option) | `boolean`, `string` | -                               | A behavior of npm installation.                                                                                      |
| [`config`](#config)                                                               | `string`            | -                               | [`--config`](https://stylelint.io/user-guide/node-api#configfile) option of stylelint.                               |
| [`syntax`](#syntax)                                                               | `string`            | -                               | [`--syntax`](https://stylelint.io/user-guide/node-api#syntax) option of stylelint.                                   |
| [`ignore-path`](#ignore-path)                                                     | `string`            | -                               | [`--ignore-path`](https://stylelint.io/user-guide/node-api#ignorepath) option of stylelint.                          |
| [`ignore-disables`](#ignore-disables)                                             | `boolean`           | `false`                         | [`--ignore-disables`](https://stylelint.io/user-guide/node-api#ignoredisables) option of stylelint.                  |
| [`report-needless-disables`](#report-needless-disables)                           | `boolean`           | `false`                         | [`--report-needless-disables`](https://stylelint.io/user-guide/node-api#reportneedlessdisables) option of stylelint. |
| [`quiet`](#quiet)                                                                 | `boolean`           | `false`                         | [`--quiet`](https://stylelint.io/user-guide/node-api#quiet) option of stylelint.                                     |
| [`glob`](#glob)                                                                   | `string`            | `**/*.{css,less,sass,scss,sss}` | A glob pattern to analyze.                                                                                           |

### `config`

This option allows you to specify a configuration file except for the stylelint default file (e.g. `.stylelintrc.json`).

### `syntax`

This option allows you to control the non-standard syntaxes (e.g. `css-in-js`). In contrast, stylelint will automatically infer the standard syntaxes.

### `ignore-path`

This option allows you to exclude files from analysis. By default stylelint uses a `.stylelintignore` file, but if you want to use another file, set this option. For more details, see [the stylelint documentation](https://stylelint.io/user-guide/configuration#stylelintignore).

### `ignore-disables`

This option allows you to ignore all disable comments, i.e. `/* stylelint-disable block-no-empty */`.

### `report-needless-disables`

This option allows you to control whether `stylelint-disable` comments are reported or not.

### `quiet`

This option allows you to ignore warnings and only report errors.

### `glob`

This option allows you to specify the files or directories to analyze.
