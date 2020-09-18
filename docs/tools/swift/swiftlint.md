---
id: swiftlint
title: SwiftLint
sidebar_label: SwiftLint
hide_title: true
---

# SwiftLint

| Supported Version | Language    | Website                            |
| ----------------- | ----------- | ---------------------------------- |
| 0.40.0            | Swift 5.2.5 | https://realm.github.io/SwiftLint/ |

**SwiftLint** is a static analysis tool for Swift. It checks style and conventions, reports code metrics, and so on.

## Getting Started

To start using SwiftLint, enable it in your [repository settings](../../getting-started/repository-settings.md).

If you want to customize SwiftLint, put a [`.swiftlint.yml`](https://github.com/realm/SwiftLint#configuration) file in your repository.

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  swiftlint:
    path: Source/
    config: lint_yml/.swiftlint.yml
    ignore_warnings: true
    lenient: true
    enable-all-rules: true
```

You can use several options to fine-tune SwiftLint to your project.

| Name                                                                                  | Type      | Default |
| ------------------------------------------------------------------------------------- | --------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`  | -       |
| [`path`](#path)                                                                       | `string`  | -       |
| [`config`](#config)                                                                   | `string`  | -       |
| [`ignore_warnings`](#ignore_warnings)                                                 | `boolean` | `false` |
| [`lenient`](#lenient)                                                                 | `boolean` | `false` |
| [`enable-all-rules`](#enable-all-rules)                                               | `boolean` | `false` |

### `path`

This option allows you to specify a file or directory to analyze.

This also allows you to specify a special format `"@path/to/file"` (concatenation of `@` and a file name). You can create a file which contains a list of file names to be analyzed and pass it to the analyzer with this option.

For example, when you have the file `config/swiftlint_target.txt` with the following content,

```text
test1.swift
test2.swift
foo/test3.swift
```

then `sider.yml` should be below:

```yaml
linter:
  swiftlint:
    path: "@config/swiftlint_target.txt"
```

Note that the file path should be relative to the root directory where the `sider.yml` is located or the `root_dir` directory if it is specified.

### `config`

This option allows you to specify a SwiftLint configuration file you want.
If omitted, the SwiftLint's default one is used.

### `ignore_warnings`

This option allows you to ignore warning issues.

### `lenient`

This option allows you to downgrade serious violations to warnings.

### `enable-all-rules`

This option allows you to enable all the rules, even opt-in and disabled ones.
