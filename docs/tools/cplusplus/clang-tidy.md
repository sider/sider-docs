---
id: clang-tidy
title: Clang-Tidy
sidebar_label: Clang-Tidy (beta)
hide_title: true
---

# Clang-Tidy

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language | Website                                  |
| ----------------- | -------- | ---------------------------------------- |
| 10.0.1            | C/C++    | https://clang.llvm.org/extra/clang-tidy/ |

**Clang-Tidy** is a [Clang](https://clang.llvm.org/)-based C++ "linter" tool. It diagnoses typical programming errors, like style violations, interface misuse, or bugs that can be deduced via static analysis.

## Getting Started

To start using Clang-Tidy, enable it in your [repository settings](../../getting-started/repository-settings.md).

If you want to configure Clang-Tidy, please put the `.clang-tidy` file(YAML/JSON) in the root directory. You can disable/enable Clang-Tidy rules (Checks) via the file. See the [document](https://clang.llvm.org/extra/clang-tidy/) more details.

## Configuration

You can customize the analysis via `sider.yml`:

```yaml
linter:
  clang_tidy:
    apt:
      - libgdbm-dev
      - libfastjson-dev=0.99.8-2
    include-path:
      - myinclude
      - foo/include
      - /usr/include/libfastjson
```

| Name                                                                                          | Type                 | Default |
| --------------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)         | `string`             | -       |
| [`apt`](../../getting-started/custom-configuration.md#linteranalyzer_idapt)                   | `string`, `string[]` | -       |
| [`include-path`](../../getting-started/custom-configuration.md#linteranalyzer_idinclude-path) | `string`, `string[]` | -       |

No analyzer-specific options.
