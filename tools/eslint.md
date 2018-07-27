# ESLint

| Language | Web Site |
|:--:|:--:|:--:|
| JavaScript(Node.js 8.11.3) | [https://eslint.org](https://eslint.org) |

## Getting Started

To start using ESLint in Sider, declare dependency in `package.json` in your repository.

```bash
$ npm install eslint -D
```

Add `sideci.yml` to your repository.

```yaml
linter:
  eslint:
    npm_install: true
```

If you need more customization, use standard ESLint config files. For instance `.eslintrc` to customize rules, and `.eslintignore` to specify files to ignore in the analysis.

Commit the changes and push to GitHub.com, and open new pull request.

## Default Configuration

Sider provides a recommended configuration for ESLint. The configuration is used when you don't have config option in your sideci.yml nor default config files, `.eslintrc`, `.eslintrc.yml`, `.eslintrc.yaml`, or `.eslintrc.json`.

* [Sider recommended settings for ESLint](https://github.com/actcat/sideci_config/blob/master/javascript/eslint/eslintrc)

## Configuration via `sideci.yml`

Put settings for ESLint under `eslint`:

```yaml
linter:
  eslint:
    npm_install: true
    dir: frontend/app
    options:
      config: '.myeslintrc'
      ext: 'js,jsx,es6'
      ignore-path: .gitignore
      no-ignore: application.js
      ignore-pattern: /src/vendor/*
      global: require,exports:true welcome.js
```

### `npm_install`

This option controls `npm` command invocation. Using this option, you can install dependencies to your program.

|Value|Execution Command|
|:---|:---|
|`true`|`npm install --ignore-scripts`|
|`development`|`npm install --only=development --ignore-scripts`|
|`production`|`npm install --only=production --ignore-scripts`|
|Other values|None|

When your `package.json` contains dependency which cannot be installed in Sider container, `npm install` fails. The analysis will be done but the result may be an unexpected one. In this case, try using `development` or `production` option, or let the dependency be `optionalDependency`.

### `dir`

This option controls name of directory to pass to `eslint`. The default value is `.`. You can declare directory to analyze below:

```yaml
linter
  eslint:
    dir: frontend/src
```

And also, if you would like to analyze multiple dirctories with Sider, you can set them below:

```yaml
linter:
  eslint:
    dir:
      - frontend/src
      - app/assets/javascripts
      - public/assets/javascripts
```

However, the following cases cannot give you correct analysis results because the values are regarded themselves as string literal.

```yaml
linter:
  eslint:
    dir: frontend/src app/assets/javascripts
```

```yaml
linter:
  eslint:
    dir: frontend/src,app/assets/javascripts
```

### `options`

This option controls command line options given to `eslint`.

#### `config`

This option controls an additional configuration file. ESLint uses your `.eslintrc{.yaml,.yml,.json}` on root directory of your project by default. Thus you need not use this option when you have used default file name: for example `.eslintrc`, `.eslintrc.yaml`, `.eslintrc.yml` and `.eslintrc.json`. But if your default named ESLint config file has been put in a directory except for root directory, you should use this option like below:

```yaml
linter:
  eslint:
    options:
      config: lint_yml/.eslintrc
```

#### `ext`

This option controls file extensions. By default, only `.js` files are inspected.

#### `ignore-path`

This option controls an ignore file when running `eslint`.

#### `no-ignore`

This option controls use of ignore files or patterns to disable.

#### `ignore-pattern`

This option controls patterns of files to ignore. It requires String.

#### `global`

This option controls definition of global variables. It requires String and comma-separeted.

Please check the following if you learn more details of command line interface of ESLint: [ESLint - Command Line Interface](http://eslint.org/docs/user-guide/command-line-interface)

## Troubleshooting

### What if our repo does not have `package.json`?

We generally recommend using `npm install` in Sider to install dependencies. This standard way allows us to handle your dependency correctly. We never install ESLint of a version you are not intended to use.

However, we also try to install the dependencies even if `package.json` cannot be found in your repository. This mechanism is for backward compatibility. This is unstable and unreliable. And we are no longer actively working for this.

Put `package.json` in your repository and turn `npm_install: true`. This is stable and future-proof.

If your repository does not contain `package.json` or the setting of `npm_install:` does not allow `npm install`, Sider tries to install required npm packages as the following:

1. Read `eslintrc` \(or equivalent\) and find plugins, parsers, and configurations to install
2. Try installing the `@latest` of the libraries and their peer dependencies
3. Install `eslint@latest` if `eslint` is not yet installed

