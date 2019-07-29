---
id: rubocop
title: RuboCop
sidebar_label: RuboCop
hide_title: true
---

# RuboCop

| Version Constraints | Language | Web Site |
| ----------------- | -------- | -------- |
| >= 0.35.0 (default to 0.73.0) | Ruby 2.5.1 | [https://github.com/rubocop-hq/rubocop](https://github.com/rubocop-hq/rubocop) |

## Configuration via `sider.yml`

Example settings for RuboCop under `rubocop`:

```yaml
linter:
  rubocop:
    gems:
      - "rubocop-rspec"
    config: "config/.rubocop.yml"
    rails: false
    safe: true
```

### Options

You can use several options to more comfortable analysis to your project.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string` | Directory in which the analyzer runs. |
| [`gems`](../../getting-started/custom-configuration.md#gems-option) | `array<string, object>` | Definition of gems to be installed. |
| `config` | `string` | A file path passed as `--config` option. |
| [`rails`](#rails) | `boolean` | Add `--rails` flag. |
| [`safe`](#safe) | `boolean` | Add `--safe` flag. Default: `false` |

### `rails`

> The option is ignored after the version `0.72.0`. Please use the [`rubocop-rails`](https://github.com/rubocop-hq/rubocop-rails) plugin instead.

This option controls whether to run Rails Cops. If it is omitted, Sider automatically determines whether to run Rails Cops or not.

This option is used for the case that you do not wish Sider to run Rails Cops even though your project is a Ruby on Rails project.

```yaml
linter:
  rubocop:
    rails: false
```

### `safe`

This option controls to cops RuboCop inspects. If `true`, RuboCop will inspect cops which have been set `Safe: true` and `Enabled: true` in `.rubocop.yml`.

> When you use this option, RuboCop version must be after `0.60.0`.

### Installing RuboCop plugins and configuration gems

Sider automatically finds and installs gems likely to be related to RuboCop from `Gemfile.lock`, but this behavior only works for backward compatibility. Therefore, this is skipped if you specify the `gems` option.

We encourage you to explicitly specify gems in the [`gems` option](../../getting-started/custom-configuration.md#gems-option) in `sider.yml`.

## Default Configuration

Sider performs analysis according to our recommended configuration if `.rubocop.yml` does not exist in your repository. The configuration comes from [MeowCop](https://github.com/sider/meowcop) gem.
