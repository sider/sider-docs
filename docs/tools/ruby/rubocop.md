---
id: rubocop
title: RuboCop
sidebar_label: RuboCop
hide_title: true
---

# RuboCop

| Version Constraints | Language | Web Site |
| ----------------- | -------- | -------- |
| >= 0.35.0 (default to 0.65.0) | Ruby 2.5.1 | [https://github.com/rubocop-hq/rubocop](https://github.com/rubocop-hq/rubocop) |

## Gettings Started

To start performing analysis, you are required to turn on RuboCop in [Repository Settings](../../getting-started/repository-settings.md).

## Default Configuration

Sider performs analysis according to our recommended configuration if `.rubocop.yml` does not exist in your repository. The configuration comes from [MeowCop](https://github.com/sider/meowcop) gem.

## Configuration via `sideci.yml`

Example settings for RuboCop under `rubocop`:

```yaml:sideci.yml
linter:
  rubocop:
    gems:
      - "rubocop-rspec"
    config: "config/.rubocop.yml"
    rails: false
    safe: true
```

### Options

You can use several options to fine-tune analysis to your project:

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`gems`](#gems) | `array<string, object>` | Definition of gems to be installed. |
| [`config`](#config) | `string` | A file path of the configuration. |
| [`rails`](#rails) | `boolean` | Run extra Rails cops. Default: `true` |
| [`safe`](#safe) | `boolean` | Run only safe cops. Default: `false` |

Details of options are below:

#### `gems`

See [`gems` option](../../getting-started/custom-configuration.md#gems-option) for details.

#### `config`

Sider performs analysis in the root directory of your project by default. This option allows you to specify the file path of the RuboCop's `--config` option.

```yaml:sideci.yml
linter:
  rubocop:
    config: web/.rubocop.yml
```

#### `rails`

This option controls whether to run Rails Cops. If it is omitted, Sider automatically determines whether to run Rails Cops or not.

This option is used for the case that you do not wish Sider to run Rails Cops even though your project is a Ruby on Rails project.

```yaml:sideci.yml
linter:
  rubocop:
    rails: false
```

#### `safe`

This option controls to cops RuboCop inspects. If `true`, RuboCop will inspect cops which have been set `Safe: true` and `Enabled: true` in `.rubocop.yml`.

When you use this option, RuboCop version must be after `0.60.0`.
