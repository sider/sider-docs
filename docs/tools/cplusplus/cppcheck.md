---
id: cppcheck
title: Cppcheck
sidebar_label: Cppcheck
hide_title: true
---

# Cppcheck

| Supported Version | Language | Website                         |
| ----------------- | -------- | ------------------------------- |
| 1.89              | C/C++    | http://cppcheck.sourceforge.net |

> This is **BETA**. The behavior of this tool might change.

Cppcheck is a static analysis tool for C/C++ code. It aims to detect bugs, undefined behaviors, and dangerous coding constructs.

## Getting Started

To start using Cppcheck, enable it in your [repository settings](../../getting-started/repository-settings.md).

For more details, see the command-line help or the [online manual](http://cppcheck.sourceforge.net/manual.pdf).

```shell
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

| Name                    | Type                      | Default | Description                      |
| ----------------------- | ------------------------- | ------- | -------------------------------- |
| [`target`](#target)     | `string`, `array<string>` | `.`     | Files or directories to analyze. |
| [`ignore`](#ignore)     | `string`, `array<string>` | -       | `-i` option of Cppcheck.         |
| [`enable`](#enable)     | `string`                  | -       | `--enable` option of Cppcheck.   |
| [`std`](#std)           | `string`                  | -       | `--std` option of Cppcheck.      |
| [`project`](#project)   | `string`                  | -       | `--project` option of Cppcheck.  |
| [`language`](#language) | `string`                  | -       | `--language` option of Cppcheck. |

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

This option allows you to exclude files or directories from analysis. If you specify multiple targets, configure as follow:

```yaml
linter:
  cppcheck:
    ignore:
      - "you/ignore/code.c"
      - "you/ignore/code.cpp"
      - "you/ignore/code/here"
```

### `enable`

This option allows you to enable additional checks.
For more details about the available values, see the command-line help.

For example:

```yaml
linter:
  cppcheck:
    # Enable all checks
    enable: "all"
    # Enable checks for warning, coding styles, and unused functions (comma-separated)
    # enable: "warning,style,unusedFunction"
```

### `std`

This option allows you to set the C/C++ standard version like [C99](https://en.wikipedia.org/wiki/C99).
For more details about the available values, see the command-line help.

For example:

```yaml
linter:
  cppcheck:
    std: "c11" # C code is C99 compatible
    # std: "c++11" # C++ code is C++11 compatible
```

### `project`

This option allows you to specify your project file.
For more details about the available file format, see the command-line help.

For example, if you want to analyze a Visual Studio Solution project, you may specify your project file with the file extension `.sln`.

### `language`

This option allows you to force analyzing code as a given language. The available values are: `c`, `c++`.
