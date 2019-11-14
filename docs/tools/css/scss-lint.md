---
id: scss-lint
title: SCSS-Lint
sidebar_label: SCSS-Lint
hide_title: true
---

# SCSS-Lint

| Supported Version | Language                      | Website                          |
| ----------------- | ----------------------------- | -------------------------------- |
| 0.59.0            | [Sass](https://sass-lang.com) | https://github.com/sds/scss-lint |

> **DEPRECATED**: Sider will no longer support SCSS-Lint because SCSS-Lint will stop its maintenance. We recommend [stylelint](https://stylelint.io) and [stylelint-scss](https://github.com/kristerkari/stylelint-scss) as an alternative.
> For more details, see the [announce](https://github.com/sds/scss-lint#notice-consider-other-tools-before-adopting-scss-lint).

## Getting Started

To start using SCSS-Lint, enable it in [Repository Settings](../../getting-started/repository-settings.md).

## Configuration via `sider.yml`

Here are example settings for SCSS-Lint:

```yaml
linter:
  scss_lint:
    config: lint_yml/.scss-lint.yml
```

### Options

You can use several options to fine-tune SCSS-Lint to your project:

| Name                | Type     | Description                               |
| ------------------- | -------- | ----------------------------------------- |
| [`config`](#config) | `string` | Specify configuration file for SCSS-Lint. |

#### `config`

This option allows you specify a configuration file. If you have a `.scss-lint.yml` file, use this option. You can use SCSS-Lint without this option.
