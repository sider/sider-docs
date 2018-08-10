# SwiftLint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 0.23.1 | Swift 3.1.1 | [https://github.com/realm/SwiftLint](https://github.com/realm/SwiftLint) |

## Getting Started

To start using SwiftLint, enable it in repository setting.

To customize SwiftLint, put `.swiftlint.yml` in your repository.

## Configuration via `sideci.yml`

Here are example settings for SwiftLint under `swiftlint`.

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

This option allows you to decides whether to ignore issues that are `severity: "warnings"`. Default value is `false`.

### `options`

This option allows you to control command line options that are given to `swiftlint`.

#### `path`

This option allows you to control the path that analyzes file or directory to lint.

#### `config`

This option allows you control configuration file when running SwiftLint. If you have `.swiftlint.yml`, put it in this option.

#### `lenient`

This option allows you to control levels of violations. It downgrades serious violations to warnings and makes warning threshold disabled. Default value is `false`.

#### `enable-all-rules`

This option allows you to control whether to run SwiftLint with all rules including opt-in and disabled ones. Furthermore, it ignores `whitelist_rules`. Default value is `false`.

