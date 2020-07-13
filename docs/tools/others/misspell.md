---
id: misspell
title: Misspell
sidebar_label: Misspell
hide_title: true
---

# Misspell

| Supported Version | Language                | Website                             |
| ----------------- | ----------------------- | ----------------------------------- |
| 0.3.4             | Others (Spell checking) | https://github.com/client9/misspell |

**Misspell** is a spell checker to correct commonly misspelled English.

## Getting Started

To start using Misspell, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

Here is a configuration example via `sider.yml`:

```yaml
linter:
  misspell:
    exclude:
      - vendor
      - "**/*.min.js"
      - exclude_file.rb
    target:
      - target_directory
      - another_target_directory/foo.rb
      - bar.rb
    locale: UK
    ignore:
      - center
      - behavior
```

You can use several options to more comfortable analysis to your project.

| Name                                                                                  | Type                 | Default |
| ------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -       |
| [`target`](#target)                                                                   | `string[]`           | `.`     |
| [`exclude`](#exclude)                                                                 | `string[]`           | `[]`    |
| [`locale`](#locale)                                                                   | `"US"`, `"UK"`       | -       |
| [`ignore`](#ignore)                                                                   | `string`, `string[]` | -       |

### `target`

This option allows you to specify files or directories to analyze.

> **DEPRECATED**: `targets` option has been deprecated. Use `target` instead.

### `exclude`

This option allows you to exclude files or directories from your analysis. Glob is also available.

### `locale`

This option allows you to choose a spelling feature which is depended on locales. You can select:

- `US` - American English
- `UK` - British English

If the option is omitted, some words which have different spelling between the locales above will _not_ be detected.
For example, `color` and `colour`, `center` and `centre`, etc.

### `ignore`

This option allows you to ignore certain words when checking. This value can be a comma-separated list.
