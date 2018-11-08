# JSHint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 2.9.6 | JavaScript(Node.js 8.11.3) | [https://jshint.com/](https://jshint.com/) |

## Getting Started

To start using JSHint, enable it in [Repository Settings](../../getting-started/repository-settings.md).

To customize the configuration, use the standard `.jshintrc` or `.jshintignore` files. Configuration via `jshintConfig` in `package.json` is also supported.

## Default Configuration

Sider uses its default configuration where there is no custom configuration preset:

* [Sider's configuration for jshintrc](https://github.com/actcat/sideci_config/blob/master/javascript/jshint/sideci_jshintrc)

## Configuration via `sideci.yml`

```yaml:sideci.yml
linter:
  jshint:
    dir: src
    options:
      config: lint_yml/.jshintrc
```

### `dir`

The directory where the analysis is performed. It is passed as an argument to JSHint.

### `options`

This option controls command line options padded to `jshint`.

#### `config`

This option allows you to use your own configuration file for JSHint. If you have a `.jshintrc` file, use this option.

