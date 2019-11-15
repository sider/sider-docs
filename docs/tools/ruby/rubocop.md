---
id: rubocop
title: RuboCop
sidebar_label: RuboCop
hide_title: true
---

# RuboCop

| Supported Version           | Language   | Website                  |
| --------------------------- | ---------- | ------------------------ |
| 0.35.0+ (default to 0.76.0) | Ruby 2.5.6 | https://docs.rubocop.org |

> **DEPRECATED**: Sider will drop the support of RuboCop 0.60.0 and older versions soon. Please consider upgrading to **0.61.0** and newer.

## Configuration via `sider.yml`

Example settings for RuboCop under `rubocop`:

```yaml
linter:
  rubocop:
    gems:
      - "rubocop-rspec"
    config: "config/.rubocop.yml"
    safe: true
```

You can use the following options to make analysis fitter for your project.

| Name                                                                        | Type                 | Default | Description                              |
| --------------------------------------------------------------------------- | -------------------- | ------- | ---------------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`             | -       | A root directory.                        |
| [`gems`](../../getting-started/custom-configuration.md#gems-option)         | `string[]`, `hash[]` | -       | Gems to install.                         |
| [`config`](#config)                                                         | `string`             | -       | A file path passed as `--config` option. |
| [`rails`](#rails)                                                           | `boolean`            | -       | **[DEPRECATED]** Add `--rails` flag.     |
| [`safe`](#safe)                                                             | `boolean`            | `false` | Add `--safe` flag.                       |

### `config`

This option allows you to specify your configuration file. If you omit it, the RuboCop default one will be used.

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
