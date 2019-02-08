---
id: rubocop
title: RuboCop
sidebar_label: RuboCop
hide_title: true
---

# RuboCop

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| >= 0.35.0 (default to 0.62.0) | Ruby 2.5.1 | [https://github.com/rubocop-hq/rubocop](https://github.com/rubocop-hq/rubocop) |

## Gettings Started

To start performing analysis, you are required to turn on RuboCop in [Repository Settings](../../getting-started/repository-settings.md).

## Versioning

If your `Gemfile` or `Gemfile.lock` contains a dependency to RuboCop, Sider uses the locked version instead of the default version.

> RuboCop often introduces incompatibilities in its configuration, so we strongly recommend that you include it in your `Gemfile.lock`.

## Default Configuration

Sider performs analysis according to our recommended configuration if `.rubocop.yml` does not exist in your repository. The configuration comes from [MeowCop](https://github.com/sider/meowcop) gem.

## Configuration via `sideci.yml`

Example settings for RuboCop under `rubocop`:

```yaml:sideci.yml
linter:
  rubocop:
    gems:
      - "rubocop-rspec"
    config: "web/.rubocop.yml"
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

This option allows you to install RuboCop plugins or configuration gems during analysis.

```yaml:sideci.yml
linter:
  rubocop:
    gems:
      - 'rubocop-rspec'
      - name: 'meowcop'
        version: '1.17.0'
      - name: 'private-office-cop'
        version: '0.60.0'
        source: 'https://gems.example.com'
      - name: 'gitcop'
        git:
          repo: 'git@github.com:org/repo.git'
          tag: 'v0.62.0'
```

You can define each gem with the following attributes:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | `string` | Gem name. |
| `version` | `string` | Gem version. |
| `source` | `string` | RubyGems repository. Default: `https://rubygems.org` |
| `git` | `object` | Definition of the gem source as a Git repository. |

`git` option has options below:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `repo` | `string` | Git repository location. The repository can be accessed via HTTP(S)/SSH protocols. |
| `branch` | `string` | Branch name. |
| `tag` | `string` | Tag name. |
| `ref` | `string` | Ref name. |

If you define a gem as a string, Sider will try to install the gem according to your locked version in `Gemfile.lock`.

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
