# Haml-Lint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 0.28.0 | HAML 5.0.4 / Ruby 2.5.1 | [https://github.com/brigade/haml-lint](https://github.com/brigade/haml-lint) |

## Getting Started

To start using HAML-Lint, enable it in repository setting.

If you need additional configuration, write `sideci.yml` and add to your repository.

## Configuration via `sideci.yml`

Example settings for HAML-Lint under `haml_lint`:

```yaml:sideci.yml
linter:
  haml_lint:
    options:
      include_linter:
        - EmptyScript
        - LineLength
        - MultilinePipe
      exclude_linter:
        - TagName
      config: 'my-haml-lint-conf.yml'
      file: '**/*haml'
      exclude:
        - 'app/views/layouts/application.html.haml'
```

### `options`

This option controls command line options that are given to `haml_lint`.

#### `include_linter`

This option controls which linters you include to analysis object. You should put it as an array. The specified array will be passed to the parameter as a comma separated string.

#### `exclude_linter`

This option controls which linters you exclude from analysis object. You should put it as an array. The specified array will be passed to the parameter as a comma separated string.

#### `config`

This option controls configuration file of HAML-Lint in analysis. You should put it as a string. Use this when you use your own configuration file of HAML-Lint.

#### `file`

This option allows you to control which files you want Sider to analyze. You should put it as a String. It passes as a parameter when HAML-Lint is executed. If you don't write it in `sideci.yml`, Sider passes `.` as a parameter.

#### `exclude`

This option allows you to control which files you want Sider to exclude in analysis. You should put it as an array. You are able to declare files or directories.

Please check the following URL for more details about the execution parameters.

* [HAML-Lint\#Command Line Flags](https://github.com/brigade/haml-lint#command-line-flags)

