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
If you want to configure Clang-tidy, please put the `.clang-tidy` file in the root directory. You can disable/enable Clang-tidy rules (Checks) via the file.

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

| Name                                                                                  | Type                 | Default       |
| ------------------------------------------------------------------------------------- | -------------------- | ------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -             |
| [`apt`](#apt)                                                                         | `string`, `string[]` | `[]`          |
| [`include-path`](#include-path)                                                       | `string`, `string[]` | _(See below)_ |

### `apt`

This option allows you to specify a list of development packages your project depends on.
The packages must satisfy the conditions below:

- Packages compatible with [our Docker image](https://github.com/sider/devon_rex/blob/master/base/Dockerfile).
- Packages with "-dev" suffix in names are available.
- A specific version number can be requested with the `<name>=<version>` format.

### `include-path`

This option allows you to add directories to include search path.
Sider treats this option as a compilation option `-I` and passes it to the `clang-tidy` command internally as:

```console
$ clang-tidy test.cpp -- -Imyinclude -Ifoo/include -I/usr/include/libfastjson
```

If you omit this option, Sider searches for header files that are part of your project and applies the directories of found files to the include search path.
