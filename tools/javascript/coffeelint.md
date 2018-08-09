# CoffeeLint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 1.16.0 | JavaScript(Node.js 8.11.3) | [http://www.coffeelint.org/](http://www.coffeelint.org/) |

## Getting Started

To start using CoffeeLint, you do not need to prepare particular settings or files.

## Configuration via `sideci.yml`

Here is an example setting for CoffeeLint.

```yaml:sideci.yml
linter:
  coffeelint:
    npm_install: true
    options:
      file: coffeelint.json
```

### `npm_install`

By using this option, you can install coffeelint and dependencies to your program. This means you can install CoffeeScript with the specified version that is written in `package.json`. Default value of this option is `false`.

|Value|Execution Command|
|:---|:---|
|`true`|`npm install --ignore-scripts`|
|`development`|`npm install --only=development --ignore-scripts`|
|`production`|`npm install --only=production --ignore-scripts`|
|Other values|None|

### `file`

This option controls configuration file. If you have `coffeelint.json`, put it in this option. This option is not required so you can use CoffeeLint without setting up this option.

