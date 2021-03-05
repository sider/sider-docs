---
id: slim-lint
title: Slim-Lint
sidebar_label: Slim-Lint (beta)
hide_title: true
---

# Slim-Lint

> This is **BETA**. The behavior of this tool might change.

| Version                   | Language    | Website                          |
| ------------------------- | ----------- | -------------------------------- |
| 0.20.2+ (default: 0.20.2) | Slim (Ruby) | https://github.com/sds/slim-lint |

**Slim-Lint** is a static analysis tool to help keep your [Slim](http://slim-lang.com) files clean and readable.
In addition to Slim-specific style and lint checks, it can check them by integrated RuboCop rules.

## Getting Started

To start using Slim-Lint, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Default Configuration

You can configure Slim-Lint via a file named `.slim-lint.yml`.
But, if this file does not exist in your repository, Sider uses the [default configuration](https://github.com/sider/runners/blob/HEAD/images/slim_lint/sider_recommended_slim_lint.yml) instead.

Similarly, if a `.rubocop.yml` file does not exist, Sider uses the [default configuration for RuboCop](https://github.com/sider/runners/blob/HEAD/images/slim_lint/default_rubocop.yml).

See also the [Slim-Lint configuration](https://github.com/sds/slim-lint#configuration) for details.

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  slim_lint:
    gems:
      - rubocop
      - slim
    target: src
    config: my-slim-lint.yml
```

You can use several options to fine-tune HAML-Lint to your project.

| Name                                                                                  | Type                 | Default |
| ------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -       |
| [`gems`](../../getting-started/custom-configuration.md#linteranalyzer_idgems)         | `string[]`, `hash[]` | -       |
| [`target`](#target)                                                                   | `string`, `string[]` | `.`     |
| [`config`](#config)                                                                   | `string`             | -       |

### `target`

This option allows you to specify files or directories you want to analyze. Glob is also available.

### `config`

This option allows you to specify your config file path for Slim-Lint.
See also ["Default Configuration"](#default-configuration).
