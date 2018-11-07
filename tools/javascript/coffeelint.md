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
    options:
      file: coffeelint.json
```

### `npm_install`

By using this option, you can install coffeelint and dependencies before analysis. This means you can install the version of CoffeeScript specified in `package.json`. The default is `false`.

|Value|Execution Command|
|:---|:---|
|`true`|`npm install --ignore-scripts`|
|`development`|`npm install --only=development --ignore-scripts`|
|`production`|`npm install --only=production --ignore-scripts`|
|Other values|None|

### `file`

This option controls the configuration file. If you have a `coffeelint.json` file, put the path to the file here. This option is not required.

