# RuboCop

| Language | Web Site |
| -------- | -------- |
| Ruby 2.5.1 | [https://github.com/rubocop-hq/rubocop](https://github.com/rubocop-hq/rubocop) |

## Gettings Started

To start using RuboCop, enable it in [Repository Settings](../../getting-started/repository-settings.md).

To customize RuboCop, use the standard RuboCop config file, `rubocop.yml`.

## Versioning

If your `Gemfile.lock` contains dependency to RuboCop, Sider uses the locked version. Otherwise, Sider assumes you are using the latest version of RuboCop.

{% hint style="warning" %}
RuboCop often introduces incompatibilities in its configuration, so we strongly recommend that you include it in your `Gemfile.lock`.
{% endhint %}

## Default Configuration

Sider uses our recommended configuration if your repository does not have `.rubocop.yml`. The configuration is available as a RubyGem, called MeowCop.

* [MeowCop](https://github.com/sider/meowcop)

## Configuration via `sideci.yml`

Example settings for RuboCop under `rubocop`:

```yaml:sideci.yml
linter:
  rubocop:
    gems:
      - foo_gem
    config: .myrubocop.yml
    rails: false
```

### Options

You can use several options to fine-tune analysis to your project:

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`gems`](#gems) | `array<string>` | Specify gems and their version when analyzing. |
| [`config`](#config) | `string` | Set your own config file for RuboCop. |
| [`rails`](#rails) | `boolean` | If `true`, Rails Cops are executed. Default value is `true`. |

Details of options are below:

#### `gems`

This option allows you to install RuboCop plugins or configuration gems during analysis.

```yaml:sideci.yml
linter:
  rubocop:
    gems:
      - rubocop-rspec
      - name: meowcop
        version: 1.17.0
```

You can specify either the name or the name and version of the gems you want to install. If the version is omitted, Sider will try to install the version specified in `Gemfile.lock`.

If you do not specify gems option, RuboCop analysis will start with the following pre-installed gems:

```text
meowcop, onkcop, deka_eiwakun, forkwell_cop, cookstyle, rubocop-rails_config, salsify_rubocop,
otacop, unasukecop, sanelint, hint-rubocop_style, rubocop-salemove, mad_rubocop, unifacop,
ws-style, rubocop-config-umbrellio, pulis, gc_ruboconfig, fincop, rubocop-github, ezcater_rubocop,
rubocop-rspec, rubocop-verbose, rubocop-cask, rubocop-thread_safety
```

#### `config`

RuboCop uses the `.rubocop.yml` in the root directory of your project by default. Using this option, you can override this behavior. For example, if your `.rubocop.yml` is in a different directory, you could use the configoption like this:

```yaml:sideci.yml
linter:
  rubocop:
    options:
      config: lint_yml/.rubocop.yml
```

#### `rails`

This option controls whether to run Rails Cops. If it is omitted, Sider automatically determines whether to run Rails Cops or not.

This option is used for the case that you do not wish Sider to run Rails Cops even though your project is a Ruby on Rails project.

```yaml:sideci.yml
linter:
  rubocop:
    options:
      rails: false
```
