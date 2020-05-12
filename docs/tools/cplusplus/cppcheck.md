---
id: cppcheck
title: Cppcheck
sidebar_label: Cppcheck (beta)
hide_title: true
---

# Cppcheck

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language | Website                            |
| ----------------- | -------- | ---------------------------------- |
| 1.90              | C/C++    | https://github.com/danmar/cppcheck |

**Cppcheck** is a static analysis tool for C/C++ code. It aims to detect bugs, undefined behaviors, and dangerous coding constructs.

## Getting Started

To start using Cppcheck, enable it in your [repository settings](../../getting-started/repository-settings.md).

For more details, see the command-line help or the [online manual](https://github.com/danmar/cppcheck/blob/master/man/manual.md).

```console
$ cppcheck --help
```

## Configuration

Here is a configuration example via [`sider.yml`](../../getting-started/custom-configuration.md):

```yaml
linter:
  cppcheck:
    target: "src"
    ignore: "vendor"
    enable: "all"
    std: "c99"
    project: "your_project.sln"
    language: "c++"
```

You can use the following options to fine-tune Cppcheck to your project.

| Name                                                                                  | Type                 | Default |
| ------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -       |
| [`target`](#target)                                                                   | `string`, `string[]` | `.`     |
| [`ignore`](#ignore)                                                                   | `string`, `string[]` | -       |
| [`enable`](#enable)                                                                   | `string`             | -       |
| [`std`](#std)                                                                         | `string`             | -       |
| [`project`](#project)                                                                 | `string`             | -       |
| [`language`](#language)                                                               | `string`             | -       |

### `target`

This option allows you to specify files or directories to analyze via Cppcheck. If you specify multiple targets, configure as follow:

```Yaml
linter:
  cppcheck:
    target:
      - "your/code.c"
      - "your/code.cpp"
      - "your/code/here"
```

### `ignore`

This option allows you to exclude files or directories from analysis.
If you specify multiple targets, configure as follow:

```yaml
linter:
  cppcheck:
    ignore:
      - "you/ignore/code.c"
      - "you/ignore/code.cpp"
      - "you/ignore/code/here"
```

See also the [`-i`](https://github.com/danmar/cppcheck/blob/master/man/manual.md#excluding-a-file-or-folder-from-checking).

### `enable`

This option allows you to enable additional checks. For example:

```yaml
linter:
  cppcheck:
    # Enable all checks
    enable: "all"
    # Enable checks for warning, coding styles, and unused functions (comma-separated)
    # enable: "warning,style,unusedFunction"
```

The available values are `all`, `warning`, `style`, `performance`, `portability`, `information`, `unusedFunction`, and `missingInclude`.

See also the `--enable` option via the command-line help.

### `std`

This option allows you to set the C/C++ standard version like [C99](https://en.wikipedia.org/wiki/C99). For example:

```yaml
linter:
  cppcheck:
    std: "c11" # C code is C99 compatible
    # std: "c++11" # C++ code is C++11 compatible
```

The available values are `c89`, `c99`, `c11`, `c++03`, `c++11`, `c++14`, `c++17`, and `c++20`.

See also the `--std` option via the command-line help.

### `project`

This option allows you to specify your project file.
For example, if you want to analyze a Visual Studio Solution project, you may specify your project file with the file extension `.sln`.

See also the `--project` option via the command-line help.

### `language`

This option allows you to force analyzing code as a given language. The available values are `c` and `c++`.

See also the `--language` option via the command-line help.
