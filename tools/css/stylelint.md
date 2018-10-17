# stylelint

| Language | Web Site |
| -------- | -------- |
| CSS / Any languages that PostCSS can parse(e.g. SCSS, SugarSS and Less) | [https://stylelint.io/](https://stylelint.io/) |

## Getting Started

To start using stylelint, enable it and declare dependencies in `package.json` in your repository.

```bash
$ npm install stylelint -D
```

Add `sideci.yml` to your repository. Sider supports using plugin and configurations provided as npm packages.

If you need more customization, use standard stylelint config files. For example, use `.stylelintrc.yaml` to customize rules, and use `.stylelintignore` to specify files to ignore in the analysis.

Commit the changes and push to GitHub.com, and open a new pull request.

## Default Configuration

Sider uses the latest version of [stylelit-config-recommended](https://github.com/stylelint/stylelint-config-recommended) as the default configuration. It will be enabled unless you have some configurations.

## Configuration via `sideci.yml`

Here are example settings for stylelint under `stylelint`.

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

You can use several options to more comfortable analysis to your project.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`npm_install`](#npm_install) | boolean,<br>string | Resolve dependencies when analyzing with `npm`. |
| [`config`](#config) | string | Set configuration file for stylelint. |
| [`syntax`](#syntax) | string | Set non-standard syntax of PostCSS. |
| [`ignore-path`](#ignore-path) | string | Set ignore file as necessary to exclude files from analysis. |
| [`ignore-disables`](#ignore-disables) | boolean | If set `true`, you can ignore all disable comments. |
| [`report-needless-disables`](#report-needless-disables) | boolean | If set `true`, report `stylelint-disable` comments. |
| [`quiet`](#quiet) | boolean | If set `true`, rules without error severity will be ignored. |
| [`glob`](#glob) | string | Specify file extensions inspected by stylelint. |

Details of options are in below.

#### `npm_install`

This controls npm command invocation. By using this option, you can install dependencies on your program with following commands. When using the option with string, only *development* and *production* are allowed.

| Value | Execution Command |
| :---- | :---------------- |
| `true` | `npm install --ignore-scripts` |
| `development` | `npm install --only=development --ignore-scripts` |
| `production` | `npm install --only=production --ignore-scripts` |
| Other values | Sider analysis fails. |

Note that when your `package.json` contains dependecies which cannot be installed in Sider container, `npm install` fails. In the case, try using `development` or `production` option. You could also let the dependency be `optionalDependency`.

#### `config`

This option allows you to control a configuration file for stylelint. If you have your own settings file for stylelint, putting the file in this option. The valid extensions for stylelintrc are `.yml`, `.yaml`, `.json` and `.js`. You can also use `.stylelintc` and `package.json` for configuration.

#### `syntax`

This option allows you to control non-standard syntax of PostCSS. You can specify `scss`, `sass`, `less` or `sugarss`. By default, non-standard syntaxes such as `.scss`, `.sass`,`.less` and `.sss` files are detected.

#### `ignore-path`

This option helps you to exclude files from analysis. By default stylelint detects and uses `.stylelintrc` even if you don't use the option. When you'd like to use other ignore files, such as `.gitignore`, `.eslintignore` and so on, put it in this option.

#### `ignore-disables`

This option allows you to decide whether to ignore all disable comments, i.e. `/* stylelint-disable block-no-empty */`. If you would like to ignore these comments, declare `true` in this option.

#### `report-needless-disables`

This option allows you to control whether to report `stylelint-disable` comments.

#### `quiet`

This option allows you to ignore warning severity. When you set `true` in this option, only rules with error severity will be registered.

#### `glob`

This option allows you to specify file extensions which are inspected by stylelint. By default, `**/*.{css,less,scss,sss}` files are done.
