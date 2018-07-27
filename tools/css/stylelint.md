# stylelint

| Language | Web Site |
|:--:|:--:|
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

```yaml
linter:
  stylelint:
    npm_install: true
    options:
      config: lint_yml/mystylelintrc.yaml
      ignore-path: .stylelintignore
      syntax: sugarss
      ignore-disables: true
      report-needless-disables: true
      quiet: true
      glob: '**/*.{css,scss}'
```

### `npm_install`

This option controls `npm` command invocation. By using this option, you can install dependencies on your program.

\|Value\|Execution Command\| \|_----\|_---\| \|`true`\|`npm install --ignore-scripts`\| \|`development`\|`npm install --only=development --ignore-scripts`\| \|`production`\|`npm install --only=production --ignore-scripts`\| \|Other values\|None\|

When your `package.json` contains dependecies which cannot be installed in Sider container, `npm install` fails. The analysis will be done but the result may be an unexpected one. In this case, try using `development` or `production` option. You could also let the dependency be `optionalDependency`.

### `options`

This option allows you to control an additional command line options given to `stylelint`.

#### `config`

This option allows you to control a configuration file for stylelint. If you have your own settings file for stylelint, you can your configuration putting it in this option. The valid extensions for stylelintrc are `.yml`, `.yaml`, `.json`. You can also use `.stylelintc` and `package.json` for configuration.

#### `ignore-path`

This option allows you to control an additional configuration file to exclude from analysis. If you have `.stylelintignore`, put it in this option.

#### `syntax`

This option allows you to control non-standard syntax of PostCSS. You can specify `scss`, `less` or `sugarss`. By default, non-standard syntaxes such as `.scss`, `.less` and `.sss` files are detected.

#### `ignore-disables`

This option allows you to decide whether to ignore all disable comments \(e.g. `/* stylelint-disable block-no-empty */`.\) If you would like to ignore these comments, declare `true` in this option.

#### `report-needless-disables`

This option allows you to control whether to report stylelint-disable comments.

#### `quiet`

This option allows you to control whether to ignore warning severity. When you set `true` in this option, only rules with error severity will be registered.

#### `glob`

This option allows you to control file extensions which are inspected by stylelint. By default, `**/*.{css,less,scss,sss}` files are inspected.

