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
| 0.59.0            | [Sass](https://sass-lang.com) | https://github.com/sds/scss-lint |

## Getting Started

To start using SCSS-Lint, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration via `sider.yml`

Here are example settings for SCSS-Lint:

```yaml
linter:
  scss_lint:
    config: lint_yml/.scss-lint.yml
```

You can use several options to fine-tune SCSS-Lint to your project:

| Name                                                                                  | Type     | Default | Description                         |
| ------------------------------------------------------------------------------------- | -------- | ------- | ----------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string` | -       | A root directory.                   |
| [`config`](#config)                                                                   | `string` | -       | A configuration file for SCSS-Lint. |

### `config`

This option allows you specify a configuration file. If you have your own `.scss-lint.yml` file, use this option. You can use SCSS-Lint without this option.
