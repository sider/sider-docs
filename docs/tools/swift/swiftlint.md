---
id: swiftlint
title: SwiftLint
sidebar_label: SwiftLint
hide_title: true
---

# SwiftLint

| Supported Version | Language    | Website                            |
| ----------------- | ----------- | ---------------------------------- |
| 0.37.0            | Swift 5.1.2 | https://github.com/realm/SwiftLint |

## Getting Started

To start using SwiftLint, enable it in [Repository Settings](../../getting-started/repository-settings.md).

To customize SwiftLint, put a `.swiftlint.yml` file in your repository.

## Configuration via `sider.yml`

Here are example settings for SwiftLint under `swiftlint`:

```yaml
linter:
  swiftlint:
    ignore_warnings: true
    path: Source/
    config: lint_yml/.swiftlint.yml
    lenient: true
    enable-all-rules: true
```

You can use several options to fine-tune SwiftLint to your project.

| Name                                    | Type      | Default | Description                                                                              |
| --------------------------------------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| [`ignore_warnings`](#ignore_warnings)   | `boolean` | `false` | If `true`, Sider will not report `severity: "warnings"` issues.                          |
| [`path`](#path)                         | `string`  | -       | Set a file or directory path to analyze.                                                 |
| [`config`](#config)                     | `string`  | -       | Set a configuration file for SwiftLint.                                                  |
| [`lenient`](#lenient)                   | `boolean` | `false` | If `true`, downgrade serious violations to warnings and make warning threshold disabled. |
| [`enable-all-rules`](#enable-all-rules) | `boolean` | `false` | If `true`, SwiftLint will run with all rules.                                            |

### `ignore_warnings`

This option allows you to ignore issues that are `severity: "warnings"`.

### `path`

This option allows you to specify a path (file or directory) that gets analyzed.

### `config`

This option allows you to specify a configuration file when running SwiftLint.
If you have a configuration file that is different from the SwiftLint's default one, use this option.

### `lenient`

Lenient mode downgrades serious violations to warnings, and ignores warnings.

### `enable-all-rules`

This option runs SwiftLint with all rules, including opt-in and disabled ones. `whitelist_rules` will be ignored.
