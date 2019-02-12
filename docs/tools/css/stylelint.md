---
id: stylelint
title: stylelint
sidebar_label: stylelint
hide_title: true
---

# stylelint

| Language | Web Site |
| -------- | -------- |
| CSS / Any languages that PostCSS can parse(e.g. SCSS, SugarSS and Less) | [https://stylelint.io/](https://stylelint.io/) |

## Getting Started

To start using stylelint, enable it in [Repository Settings](../../getting-started/repository-settings.md) and declare it as a dependency in your `package.json`:

```bash
$ npm install stylelint -D
```

Sider supports styelint plugins and configurations that are provided as npm packages.

If you need more customization, use the standard stylelint config files. For example, use `.stylelintrc.yaml` to customize rules, and `.stylelintignore` to ignore files and directories.

## Default Configuration

If you don't have any custom configuration defined, Sider uses the latest version of [stylelit-config-recommended](https://github.com/stylelint/stylelint-config-recommended).

## Configuration via `sideci.yml`

Here are example settings for stylelint under `stylelint`:

```yaml:sideci.yml
linter:
  stylelint:
    npm_install: true
    config: lint_yml/mystylelintrc.yaml
    ignore-path: .gitignore
    syntax: sugarss
    ignore-disables: true
    report-needless-disables: true
    quiet: true
    glob: '**/*.{css,scss}'
```

### Options

You can use several options to fine-tune stylelint to your project.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`npm_install`](#npm_install) | `boolean`,<br>`string` | Run `npm install` before analysis. |
| [`config`](#config) | `string` | Set the configuration file for stylelint. |
| [`syntax`](#syntax) | `string` | Set a non-standard syntax for PostCSS. |
| [`ignore-path`](#ignore-path) | `string` | Set the path to the ignore file. |
| [`ignore-disables`](#ignore-disables) | `boolean` | If `true`, stylelint will ignore all `stylelint-disable` comments. |
| [`report-needless-disables`](#report-needless-disables) | `boolean` | If `true`, `stylelint-disable` comments will be reported. |
| [`quiet`](#quiet) | `boolean` | If `true`, rules less severe than 'error' will be ignored. |
| [`glob`](#glob) | `string` | Specify the file extensions inspected by stylelint. |

#### `npm_install`

This option allows you to use `npm install` to install dependencies before analysis starts.

| Value | Execution Command |
| :---- | :---------------- |
| `true` | `npm install --ignore-scripts` |
| `false` | None. |
| `development` | `npm install --only=development --ignore-scripts` |
| `production` | `npm install --only=production --ignore-scripts` |
| Other values | Sider analysis fails. |

Note that if your `package.json` contains dependecies which cannot be installed in the Sider container, `npm install` will fail. In this case, try using the `development` or `production` option. You can also make the failing dependency an `optionalDependency`.

#### `config`

This option allows you to specify a configuration file for stylelint. If you have your own settings file for stylelint, use this option. The valid extensions for `stylelintrc` are `.yml`, `.yaml`, `.json` and `.js`. You can also use `.stylelintc` and `package.json` for configuration.

#### `syntax`

This option allows you to control the non-standard syntaxes analyzed by PostCSS. You can specify `scss`, `sass`, `less` or `sugarss`. By default, non-standard syntaxes such as `.scss`, `.sass`,`.less` and `.sss` files are detected.

#### `ignore-path`

This option allows you to exclude files from analysis. By default stylelint detects and uses `.stylelintrc`, even if this option isn't set. If you'd like to use other ignore files, such as `.gitignore`, `.eslintignore` and so on, put them in this option.

#### `ignore-disables`

This option allows you to ignore all disable comments, i.e. `/* stylelint-disable block-no-empty */`. If you would like to ignore these comments, set this to `true`.

#### `report-needless-disables`

This option allows you to control whether `stylelint-disable` comments are reported or not.

#### `quiet`

This option allows you to ignore warnings and only report errors.

#### `glob`

This option allows you to specify the file extensions which are inspected by stylelint. By default, `**/*.{css,less,scss,sss}` files are included.
