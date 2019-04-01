---
id: scss-lint
title: SCSS-Lint
sidebar_label: SCSS-Lint
hide_title: true
---

# SCSS-Lint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 0.57.1 | Sass 3.6.0 / Ruby 2.5.1| [https://github.com/brigade/scss-lint](https://github.com/brigade/scss-lint) |

## Getting Started

To start using SCSS-Lint, enable it in [Repository Settings](../../getting-started/repository-settings.md).

## Configuration via `sideci.yml`

Here are example settings for SCSS-Lint:

```yaml
linter:
  scss_lint:
    config: lint_yml/.scss-lint.yml
```

### Options

You can use several options to fine-tune SCSS-Lint to your project:

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`config`](#config) | `string` | Specify configuration file for SCSS-Lint. |

#### `config`

This option allows you specify a configuration file. If you have a `.scss-lint.yml` file, use this option. You can use SCSS-Lint without this option.

