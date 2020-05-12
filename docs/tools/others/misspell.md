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

## Getting Started

To start using Misspell, enable it in repository settings page on [sider.review](https://sider.review/).

## Configuration via `sider.yml`

Here are example settings for Misspell under `misspell`:

```yaml
linter:
  misspell:
    exclude:
      - vendor
      - "**/*.min.js"
      - exclude_file.rb
    targets:
      - target_directory
      - another_target_directory/foo.rb
      - bar.rb
    locale: UK
    ignore: center,behavior
```

You can use several options to more comfortable analysis to your project.

| Name                                                                                  | Type           | Default | Description                                              |
| ------------------------------------------------------------------------------------- | -------------- | ------- | -------------------------------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`       | -       | A root directory.                                        |
| [`exclude`](#exclude)                                                                 | `string[]`     | -       | Set exclude files or directories from analysis.          |
| [`targets`](#targets)                                                                 | `string[]`     | -       | Set targets for analysis.                                |
| [`locale`](#locale)                                                                   | `"US"`, `"UK"` | -       | Check spelling with British English or American English. |
| [`ignore`](#ignore)                                                                   | `string`       | -       | Set words to ignore from analysis.                       |

Details of options are in below.

### `exclude`

This option allows you to exclude files or directories from analysis targets of Misspell. You can use glob to specify files or directories which you would like to exclude. You need to set values of the option as a list.

### `targets`

This option allows you to specify files or directories which Misspell analyzes. You need to set values of the option as a list.

### `locale`

This option allows you to choose a spelling feature which is depended on locales. You can select either `UK` or `US`.
If you would like to check your English based on American English, write `US`.
By default, you will not be corrected for words that have different spelling in British English and American English, for example colour(color), centre(center), etc.

### `ignore`

This option allows you to ignore certain words when checking. If you list words in this option, the listed words will not be checked.
If you want to declare multiple words in this option, you need to list each of them, separating each with a comma.
