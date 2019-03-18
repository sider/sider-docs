---
id: swiftlint
title: SwiftLint
sidebar_label: SwiftLint
hide_title: true
---

# SwiftLint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 0.31.0 | Swift 4.2.1 | [https://github.com/realm/SwiftLint](https://github.com/realm/SwiftLint) |

## Getting Started

To start using SwiftLint, enable it in [Repository Settings](../../getting-started/repository-settings.md).

To customize SwiftLint, put a `.swiftlint.yml` file in your repository.

## Configuration via `sideci.yml`

Here are example settings for SwiftLint under `swiftlint`:

```yaml:sideci.yml
linter:
  swiftlint:
    ignore_warnings: true
    path: Source/
    config: lint_yml/.swiftlint.yml
    lenient: true
    enable-all-rules: true
```

### Options

You can use several options to fine-tune SwiftLint to your project.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`ignore_warnings`](#ignore_warnings) | `boolean` | If `true`, Sider will not report `severity: "warnings"` issues. |
| [`path`](#path) | `string` | Set a file or directory path to analyze. |
| [`config`](#config) | `string` | Set a configuration file for SwiftLint. |
| [`lenient`](#lenient) | `boolean` | If `true`, downgrade serious violations to warnings and make warning threshold disabled. |
| [`enable-all-rules`](#enable-all-rules) | `boolean` | If `true`, SwiftLint will run with all rules. |

#### `ignore_warnings`

This option allows you to ignore issues that are `severity: "warnings"`. The default value is `false`.

#### `path`

This option allows you to specify a path (file or directory) that gets analyzed.

#### `config`

This option allows you to specify a configuration file when running SwiftLint. If you have a `.swiftlint.yml`, use this option.

#### `lenient`

Lenient mode downgrades serious violations to warnings, and ignores warnings. The default value is `false`.

#### `enable-all-rules`

This option runs SwiftLint with all rules, including opt-in and disabled ones. `whitelist_rules` will be ignored. The default value is `false`.

