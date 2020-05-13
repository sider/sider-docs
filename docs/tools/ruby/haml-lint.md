---
id: haml-lint
title: HAML-Lint
sidebar_label: HAML-Lint
hide_title: true
---

# HAML-Lint

| Version                     | Language                              | Website                          |
| --------------------------- | ------------------------------------- | -------------------------------- |
| 0.26.0+ (default to 0.35.0) | [HAML](http://haml.info) (Ruby 2.6.5) | https://github.com/sds/haml-lint |

**HAML-Lint** is a static analysis tool to help keep your HAML files clean and readable.
In addition to HAML-specific style and lint checks, it can check them by integrated RuboCop rules.

## Getting Started

To start using HAML-Lint, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Default Configuration for RuboCop

If a `.rubocop.yml` file does not exist in your repository, Sider uses the [default configuration](https://github.com/sider/runners/blob/master/images/haml_lint/default_rubocop.yml)
including the [MeowCop](https://github.com/sider/meowcop) gem.

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  haml_lint:
    gems:
      - "rubocop"
      - "haml"
    file: "**/*haml"
    include_linter:
      - EmptyScript
      - LineLength
      - MultilinePipe
    exclude_linter:
      - TagName
    config: ".rubocop_haml.yml"
    exclude:
      - "app/views/layouts/application.html.haml"
```

You can use several options to fine-tune HAML-Lint to your project.

| Name                                                                                  | Type                 | Default |
| ------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -       |
| [`gems`](../../getting-started/custom-configuration.md#linteranalyzer_idgems)         | `string[]`, `hash[]` | -       |
| [`file`](#file)                                                                       | `string`             | `.`     |
| [`include_linter`](#include_linter)                                                   | `string`, `string[]` | -       |
| [`exclude_linter`](#exclude_linter)                                                   | `string`, `string[]` | -       |
| [`config`](#config)                                                                   | `string`             | -       |
| [`exclude`](#exclude)                                                                 | `string`, `string[]` | -       |

### `file`

This option allows you to specify files or directories you want to analyze. Glob is also available.

### `include_linter`

This option allows you to specify rule names you want to run.
See also the [`--include-linter`](https://github.com/sds/haml-lint#command-line-flags) option.

### `exclude_linter`

This option allows you to specify rule names you _don't_ want to run.
See also the [`--exclude-linter`](https://github.com/sds/haml-lint#command-line-flags) option.

### `config`

This option allows you to specify your config file path for HAML-Lint.
See also the [`--config`](https://github.com/sds/haml-lint#command-line-flags) option.

### `exclude`

This option allows you to exclude files from being analyzed.
See also the [`--exclude`](https://github.com/sds/haml-lint#command-line-flags) option.
