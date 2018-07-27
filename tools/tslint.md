# TSLint

| Language | Web Site |
|:--:|:--:|:--:|
| JavaScript(Node.js 8.11.3) | [https://palantir.github.io/tslint/](https://palantir.github.io/tslint/) |

## Getting Started

To start using TSLint in Sider, declare dependency in `package.json` in your repository.

```bash
$ npm install tslint -D
```

If you need customization, use standard TSLint config file. Create `tslint.json` and include your repository.

## Configuration via `sideci.yml`

Here is an example setting for TSLint under `tslint`:

```yaml
linter:
  tslint:
    npm_install: true
    options:
      config: 'lint_yml/tslint.json'
      exclude: 'node_modules/**'
      project: 'tsconfig.json'
      rules-dir 'your_custom_rule'
      type-check: true
    glob: '**/*.ts{,x}'
```

### `npm_install`

This option controls `npm` command invocation. By using this option, you can install dependencies to your program.

|Value|Execution Command|
|:---|:---|
|`true`|`npm install --ignore-scripts`|
|`development`|`npm install --only=development --ignore-scripts`|
|`production`|`npm install --only=production --ignore-scripts`|
|Other values|None|

When your `package.json` contains dependency which cannot be installed in Sider container, `npm install` fails. The analysis will be done but the result may be an unexpected one. In such cases, try using `development` or `production` option. You can also let the dependency be `optionalDependency`.

### `options`

This option controls command line options given to `tslint`.

Please check the following URL for more details about the execution parameters when running tslint.

* [TSLint - CLI Usage](https://palantir.github.io/tslint/usage/cli/#cli-usage)

#### `config`

This option controls configurations file for TSLint. If you have `tslint.json` file, use this option.

#### `exclude`

This option controls which files TSLint excludes from linting. Default value of this option is `node_modules/**`.

In case you would like to exclude multiple files/directories, declare it as a sequence:

```yaml
linter:
  tslint:
    options:
      exclude:
        - 'node_modules/**'
        - '.git/**'
        - 'cache/**'
```

#### `project`

This option controls project file. If you have `tsconfig.json` file, declare it in this directive.

#### `rules-dir`

This option controls customized rules that TSLint inspects.

#### `type-check`

This option controls whether to enable the type checking when running TSLint. If you want type checking, declare true.

The option is deprecated in version 5.8.0 of TSLint. TSLint no longer type checks. If you would like to know about the change, see [https://github.com/palantir/tslint/pull/3322](https://github.com/palantir/tslint/pull/3322).

### `glob`

This option controls files that TSLint inspects. By default, `.ts` and `.tsx` files are inspected.

