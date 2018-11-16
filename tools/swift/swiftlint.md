# SwiftLint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 0.28.0 | Swift 4.1.3 | [https://github.com/realm/SwiftLint](https://github.com/realm/SwiftLint) |

## Getting Started

To start using SwiftLint, enable it in [Repository Settings](../../getting-started/repository-settings.md).

To customize SwiftLint, put a `.swiftlint.yml` file in your repository.

## Configuration via `sideci.yml`

Here are example settings for SwiftLint under `swiftlint`:

```yaml:sideci.yml
linter:
  swiftlint:
    ignore_warnings: true
    options:
      path: Source/
      config: lint_yml/.swiftlint.yml
      lenient: true
      enable-all-rules: true
```

### `ignore_warnings`

This option allows you to ignore issues that are `severity: "warnings"`. The default value is `false`.

### `options`

This option controls the command line options that are passed to `swiftlint`.

#### `path`

This option allows you to specify a path (file or directory) that gets analyzed.

#### `config`

This option allows you to specify a configuration file when running SwiftLint. If you have a `.swiftlint.yml`, use this option.

#### `lenient`

Lenient mode downgrades serious violations to warnings, and ignores warnings. The default value is `false`.

#### `enable-all-rules`

This option runs SwiftLint with all rules, including opt-in and disabled ones. `whitelist_rules` will be ignored. The default value is `false`.

