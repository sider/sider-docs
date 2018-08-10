# JSHint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 2.9.5 | JavaScript(Node.js 8.11.3) | [http://jshint.com/](http://jshint.com/) |

## Getting Started

To start using JSHint, enable it in repository setting.

To customize the configuration, put `.jshintrc` or `.jshintignore` files in your repository. Configuration via `jshintConfig` in `package.json` is also supported.

## Default Configuration

Sider provides a default configuration. The default configuration is used when you don't specify configuration.

* [Sider's configuration for jshintrc](https://github.com/actcat/sideci_config/blob/master/javascript/jshint/sideci_jshintrc)

## Configuration via `sideci.yml`

```yaml:sideci.yml
linter:
  jshint:
    options:
      config: lint_yml/.jshintrc
```

### `options`

This option controls command line options given to jshint.

#### `config`

This option controls whether use your own configuration file for JSHint. If you have .jshintrc, put it in this option.

