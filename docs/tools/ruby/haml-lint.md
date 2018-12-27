---
id: haml-lint
title: HAML-Lint
sidebar_label: HAML-Lint
---

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 0.28.0 | HAML 5.0.4 / Ruby 2.5.1 | [https://github.com/brigade/haml-lint](https://github.com/brigade/haml-lint) |

## Getting Started

To start using HAML-Lint, enable it in [Repository Settings](../../getting-started/repository-settings.md).

For additional configuration, use `sideci.yml`.

## Configuration via `sideci.yml`

Example settings for HAML-Lint under `haml_lint`:

```yaml:sideci.yml
linter:
  haml_lint:
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

### Options

You can use several options to fine-tune HAML-Lint to your project.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`include_linter`](#include_linter) | `string`<br />`array<string>` | Specify rule names to analyze. |
| [`exclude_linter`](#exclude_linter) | `string`<br />`array<string>` | Specify rule names to exclude from analysis.  |
| [`config`](#config) | `string` | Set the configuration file for HAML-Lint. |
| [`file`](#file) | `string` | Set files to analyze, default to `.`. |
| [`exclude`](#exclude) | `string`<br />`array<string>` | Specific files to exclude from analysis. |

#### `include_linter`

This option specifies which linters HAML-Lint should run. `sideci.yml` expects this to be an array. The array will be passed as a comma separated string to `haml_lint`. For more information on linters in HAML-Lint, see the [HAML-Lint Linter documentation](https://github.com/brigade/haml-lint/blob/master/lib/haml_lint/linter/README.md).

#### `exclude_linter`

This option excludes specific linters from the HAML-Lint run. As with `include_linter`, it should specified as an array, which will be passed as a comma-separated string. For more information, see the [HAML-Lint documentation](https://github.com/brigade/haml-lint#configuration).

#### `config`

This option controls the configuration file HAML-Lint uses for analysis. You should enter it as a string. Use this when you want to use your own configuration file for HAML-Lint.

#### `file`

This option allows you to control which files you want Sider to analyze. You should enter it as a string. It is passed as a parameter when `haml_lint` is executed. If this setting is not present in `sideci.yml`, Sider passes `.` as a parameter.

#### `exclude`

This option allows you to control which files you want Sider to exclude in analysis. You should put it as an array. You are able to declare files or directories.

Please see the following URL for more details about the execution parameters:

* [HAML-Lint\#Command Line Flags](https://github.com/brigade/haml-lint#command-line-flags)

