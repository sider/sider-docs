---
id: scss-lint
title: SCSS-Lint
sidebar_label: SCSS-Lint (deprecated)
hide_title: true
---

# SCSS-Lint

> **DEPRECATED**: Sider will no longer support SCSS-Lint because SCSS-Lint will stop its maintenance. We recommend [stylelint](https://stylelint.io) and [stylelint-scss](https://github.com/kristerkari/stylelint-scss) as an alternative.
> For more details, see the [announce](https://github.com/sds/scss-lint#notice-consider-other-tools-before-adopting-scss-lint).

| Supported Version | Language                      | Website                          |
| ----------------- | ----------------------------- | -------------------------------- |
| 0.59.0            | [SCSS](https://sass-lang.com) | https://github.com/sds/scss-lint |

**SCSS-Lint** is a linter to help keep your SCSS files clean and readable.

## Getting Started

To start using SCSS-Lint, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  scss_lint:
    config: lint_yml/.scss-lint.yml
```

You can use several options to fine-tune SCSS-Lint to your project:

| Name                                                                                  | Type     | Default |
| ------------------------------------------------------------------------------------- | -------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string` | -       |
| [`config`](#config)                                                                   | `string` | -       |

### `config`

This option allows you to specify a configuration file you want.
