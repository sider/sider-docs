# CoffeeLint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 1.16.0 | JavaScript(Node.js 8.11.3) | [http://www.coffeelint.org/](http://www.coffeelint.org/) |

## Getting Started

To start using CoffeeLint, enable it in [Repository Settings](../../getting-started/repository-settings.md).

## Configuration via `sideci.yml`

Here are example settings for CoffeeLint:

```yaml:sideci.yml
linter:
  coffeelint:
    npm_install: true
    file: coffeelint.json
```

### Options

You can use several options to make analysis fitter for your project.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`npm_install`](#npm_install) | `boolean`,<br />`string` | Resolve dependencies when analyzing with `npm`. |
| [`file`](#file) | `string` | Set configuration file for CoffeeLint. |

#### `npm_install`

By using this option, you can install coffeelint and dependencies before analysis. This means you can install the version of CoffeeScript specified in `package.json`.

| Value | Execution Command |
| :---- | :---------------- |
| `true` | `npm install --ignore-scripts` |
| `false` | None. |
| `development` | `npm install --only=development --ignore-scripts` |
| `production` | `npm install --only=production --ignore-scripts` |
| Other values | Sider analysis fails. |

#### `file`

This option controls the configuration file. If you have a `coffeelint.json` file, put the path to the file here. This option is not required.

