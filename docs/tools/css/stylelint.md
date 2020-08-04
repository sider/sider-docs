---
id: stylelint
title: stylelint
sidebar_label: stylelint
hide_title: true
---

# stylelint

| Supported Version        | Language                    | Runtime         | Website              |
| ------------------------ | --------------------------- | --------------- | -------------------- |
| 8.3.0+ (default: 13.6.1) | CSS and flavors (e.g. Sass) | Node.js 12.18.3 | https://stylelint.io |

**stylelint** is a pluggable linter to help you avoid errors and enforce conventions for CSS and CSS-like languages.
It provides many core rules and third-party rules by the community.

## Getting Started

To start using stylelint, enable it in your [repository settings](../../getting-started/repository-settings.md).

If you want to use a version except for the Sider default version or use some plugins or shareable configurations, install it into your repository as follows:

```shell
$ npm install stylelint --save-dev

$ npm install stylelint-config-standard --save-dev
```

Sider supports styelint plugins and configurations that are provided as npm packages.

If you need more customization, use the standard stylelint configuration files. For example, use `.stylelintrc.yaml` to customize rules, and `.stylelintignore` to ignore files and directories.

## Default Configuration for stylelint

If you have no custom configurations, Sider uses the [default configuration](https://github.com/sider/runners/blob/master/images/stylelint/sider_recommended_config.yaml).

In the same way, Sider users the [default ignore file](https://github.com/sider/runners/blob/master/images/stylelint/sider_recommended_stylelintignore) if not exist.

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  stylelint:
    npm_install: false
    glob: "**/*.{css,scss}"
    config: my_stylelintrc.yaml
    syntax: sugarss
    ignore-path: .gitignore
    ignore-disables: true
    report-needless-disables: true
    quiet: true
```

You can use the following options to fine-tune stylelint to your project.

| Name                                                                                        | Type                | Default                         |
| ------------------------------------------------------------------------------------------- | ------------------- | ------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)       | `string`            | -                               |
| [`npm_install`](../../getting-started/custom-configuration.md#linteranalyzer_idnpm_install) | `boolean`, `string` | -                               |
| [`glob`](#glob)                                                                             | `string`            | `**/*.{css,less,sass,scss,sss}` |
| [`config`](#config)                                                                         | `string`            | -                               |
| [`syntax`](#syntax)                                                                         | `string`            | -                               |
| [`ignore-path`](#ignore-path)                                                               | `string`            | -                               |
| [`ignore-disables`](#ignore-disables)                                                       | `boolean`           | `false`                         |
| [`report-needless-disables`](#report-needless-disables)                                     | `boolean`           | `false`                         |
| [`quiet`](#quiet)                                                                           | `boolean`           | `false`                         |

See also the [official document](https://stylelint.io/user-guide/usage/options) for details about each option.

### `glob`

This option allows you to specify files or directories to analyze. Glob patterns are available.

### `config`

This option allows you to specify a configuration file you want.
See also the [`--config`](https://stylelint.io/user-guide/usage/options#configfile) option.

### `syntax`

This option allows you to specify a syntax you want. If omitted, stylelint automatically infers the syntaxes.
See also the [`--syntax`](https://stylelint.io/user-guide/usage/options#syntax) option.

### `ignore-path`

This option allows you to specify a [ignore file](https://stylelint.io/user-guide/ignore-code).
See also the [`--ignore-path`](https://stylelint.io/user-guide/usage/options#ignorepath) option.

### `ignore-disables`

This option allows you to ignore all the disable-comments, e.g. `/* stylelint-disable block-no-empty */`.
See also the [`--ignore-disables`](https://stylelint.io/user-guide/usage/options#ignoredisables) option.

### `report-needless-disables`

This option allows you to select whether reporting unused `stylelint-disable` comments or not.
See also the [`--report-needless-disables`](https://stylelint.io/user-guide/usage/options#reportneedlessdisables) option.

### `quiet`

This option allows you to select whether ignoring warnings and reporting only errors.
See also the [`--quiet`](https://stylelint.io/user-guide/usage/cli#--quiet--q) option.
