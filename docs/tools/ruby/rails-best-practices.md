---
id: rails-best-practices
title: Rails Best Practices
sidebar_label: Rails Best Practices (deprecated)
hide_title: true
---

# Rails Best Practices

> **DEPRECATED**: We have deprecated the support of Rails Best Practices because of the lack of active development of the tool.
> As alternatives, please consider using [RuboCop Rails](https://docs.rubocop.org/rubocop-rails), [HAML-Lint](./haml-lint.md), [Slim-Lint](./slim-lint.md), etc.
> We will drop the support on **September 30, 2021**.

| Supported Version         | Language | Website                         |
| ------------------------- | -------- | ------------------------------- |
| 1.19.1+ (default: 1.21.0) | Ruby     | https://rails-bestpractices.com |

**Rails Best Practices** (abbr. RBP) is a code metric tool to check the quality of Rails code.

## Getting Started

To start using Rails Best Practices, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  rails_best_practices:
    dependencies:
      - slim
    config: .rails_best_practices.yml
    vendor: false
    spec: true
    test: true
    features: true
    exclude: db/migrate,vendor
    only: app,config
```

| Name                                                                                          | Type                | Default |
| --------------------------------------------------------------------------------------------- | ------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)         | `string`            | -       |
| [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies) | `string[]`, `map[]` | -       |
| [`config`](#config)                                                                           | `string`            | -       |
| [`vendor`](#vendor)                                                                           | `boolean`           | `true`  |
| [`spec`](#spec)                                                                               | `boolean`           | `false` |
| [`test`](#test)                                                                               | `boolean`           | `false` |
| [`features`](#features)                                                                       | `boolean`           | `false` |
| [`exclude`](#exclude)                                                                         | `string`            | -       |
| [`only`](#only)                                                                               | `string`            | -       |

### `config`

This option allows you to specify a configuration file path you want.

If the option is omitted and the `config/rails_best_practices.yml` file (RBP's default) in your repository does not exist,
Sider uses the [default configuration](https://github.com/sider/runners/blob/HEAD/images/rails_best_practices/sider_rails_best_practices.yml).

### `vendor`

This option allows you to include `vendor/` directory or not.

### `spec`

This option allows you to include `spec/` directory or not.

### `test`

This option allows you to include `test/` directory or not.

### `features`

This option allows you to include `features/` directory or not.

### `exclude`

This option allows you to exclude files or directories from the analysis. The value should be a comma-separated list.

### `only`

This option allows you to limit only to files or directories you want. The value should be a comma-separated list.

## Analyzing View Templates

Rails Best Practices supports some template engines.
When Sider finds the following gems in your `Gemfile.lock`, it installs them automatically for backward compatibility:

- [Slim](https://github.com/slim-template/slim)
- [Haml](https://github.com/haml/haml)
- [Sass](https://github.com/sass/ruby-sass)
- [SassC](https://github.com/sass/sassc-ruby)

Note that these gems are not be installed when the [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies) option is specified.
