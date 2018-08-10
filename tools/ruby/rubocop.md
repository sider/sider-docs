# RuboCop

| Language | Web Site |
| -------- | -------- |
| Ruby 2.5.1 | [https://github.com/rubocop-hq/rubocop](https://github.com/rubocop-hq/rubocop) |

## Gettings Started

To start using RuboCop, enable RuboCop in repository setting.

If you want to customize, use standard RuboCop config files, `rubocop.yml`.

## Versioning

If your `Gemfile.lock` contains dependency to RuboCop, Sider uses the locked version. Otherwise, Sider assumes you are using the latest version of RuboCop.

{% hint style="warning" %}
RuboCop often introduces incompatibilities on its configuration, and we strongly recommend to have it in your `Gemfile.lock`.
{% endhint %}

## Default Configuration

Sider uses our recommended configuration if your repository does not have `.rubocop.yml`. The configuration is available as a RubyGem and it is called MeowCop.

* [MeowCop](https://github.com/sider/meowcop)

## Configuration via `sideci.yml`

Example settings for RuboCop under `rubocop`.

```yaml:sideci.yml
linter:
  rubocop:
    gems:
      - foo_gem
    options:
      config: .myrubocop.yml
      rails: false
```

### `gems`

This option allows you to install RuboCop plugins or configuration gems during analysis.

```yaml:sideci.yml
linter:
  rubocop:
    gems:
      - rubocop-rspec
      - name: meowcop
        version: 1.17.0
```

You can specify either the name or the name and version of the gems you want to install. If the version is omitted, Sider tries to install the version which is specified in `Gemfile.lock`.

If you do not specify gems option, RuboCop analysis will start with the following pre-installed gems.

```text
meowcop, onkcop, deka_eiwakun, forkwell_cop, cookstyle, rubocop-rails_config, salsify_rubocop,
otacop, unasukecop, sanelint, hint-rubocop_style, rubocop-salemove, mad_rubocop, unifacop,
ws-style, rubocop-config-umbrellio, pulis, gc_ruboconfig, fincop, rubocop-github, ezcater_rubocop,
rubocop-rspec, rubocop-verbose, rubocop-cask, rubocop-thread_safety
```

### `options`

This option controls command line options that are given to rubocop.

#### `config`

This option controls a configuration file. RuboCop uses your `.rubocop.yml` on root directory of your project by default. Thus you do not need to use this option when you have named the file `.rubocop.yml`. But if your `.rubocop.yml` has been put in a directory except for root directory, you should use this option like below:

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

