---
id: haml-lint
title: HAML-Lint
sidebar_label: HAML-Lint
hide_title: true
---

# HAML-Lint

| Version Constraints | Language | Website |
| ----------------- | -------- | -------- |
| >= 0.26.0 (default to 0.32.0) | Ruby 2.5.1 | [https://github.com/sds/haml-lint](https://github.com/sds/haml-lint) |

## Configuration via `sider.yml`

Example settings for HAML-Lint under `haml_lint`:

```yaml
linter:
  haml_lint:
    gems:
      - "rubocop"
      - "haml"
    include_linter:
      - EmptyScript
      - LineLength
      - MultilinePipe
    exclude_linter:
      - TagName
    config: '.rubocop_haml.yml'
    file: '**/*haml'
    exclude:
      - 'app/views/layouts/application.html.haml'
```

### Options

You can use several options to fine-tune HAML-Lint to your project.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string` | Directory in which the analyzer runs. |
| [`gems`](../../getting-started/custom-configuration.md#gems-option) | `array<string, object>` | Definition of gems to be installed. |
| `include_linter` | `string`<br />`array<string>` | Rule names passed as `--include-linter` option. |
| `exclude_linter` | `string`<br />`array<string>` | Rule names passed as `--exclude-linter` option. |
| `config` | `string` | A file path passed as `--config` option. |
| `file` | `string` | Files which are analyzed. default to `.`. |
| `exclude` | `string`<br />`array<string>` | Files passed as `--exclude` option. |

### Installing RuboCop plugins and configuration gems

Sider automatically finds and installs gems likely to be related to RuboCop from `Gemfile.lock`, but this behavior only works for backward compatibility. Therefore, this is skipped if you specify the `gems` option.

We encourage you to explicitly specify gems in the [`gems` option](../../getting-started/custom-configuration.md#gems-option) in `sider.yml`.

## Default Configuration

Sider performs analysis according to our recommended configuration if `.rubocop.yml` does not exist in your repository. The configuration comes from [MeowCop](https://github.com/sider/meowcop) gem.
