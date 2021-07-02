---
id: cppcheck
title: Cppcheck
sidebar_label: Cppcheck
hide_title: true
---

# Cppcheck

| Supported Version | Language | Website                            |
| ----------------- | -------- | ---------------------------------- |
| 2.4.1             | C/C++    | https://github.com/danmar/cppcheck |

**Cppcheck** is a static analysis tool for C/C++ code. It aims to detect bugs, undefined behaviors, and dangerous coding constructs.

## Getting Started

To start using Cppcheck, enable it in your [repository settings](../../getting-started/repository-settings.md).

For more details, see the command-line help or the [online manual](https://github.com/danmar/cppcheck/blob/main/man/manual.md).

```console
$ cppcheck --help
```

## Default Configuration for Cppcheck

Sider provides our [recommended ruleset](https://github.com/sider/runners/blob/HEAD/images/cppcheck/sider_recommended_cppcheck.txt) for Cppcheck.
This configuration is used This configuration is used when the `suppressions-list` option is not specified in `sider.yml`.
For more details, please visit [Recommended Ruleset](../../getting-started/recommended-rules.md).

## Configuration

Here is a configuration example via [`sider.yml`](../../getting-started/custom-configuration.md):

```yaml
linter:
  cppcheck:
    include-path: "myinclude"
    target: "src"
    ignore: "vendor"
    enable: "all"
    std: "c99"
    project: "your_project.sln"
    language: "c++"
    addon: "cert"
    bug-hunting: true
    parallel: true
    suppressions-list: "suppressions.txt"
```

You can use the following options to fine-tune Cppcheck to your project.

| Name                                                                                          | Type                 | Default                          |
| --------------------------------------------------------------------------------------------- | -------------------- | -------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)         | `string`             | -                                |
| [`include-path`](../../getting-started/custom-configuration.md#linteranalyzer_idinclude-path) | `string`, `string[]` | -                                |
| [`target`](#target)                                                                           | `string`, `string[]` | `.`                              |
| [`ignore`](#ignore)                                                                           | `string`, `string[]` | -                                |
| [`enable`](#enable)                                                                           | `string`             | -                                |
| [`std`](#std)                                                                                 | `string`             | -                                |
| [`project`](#project)                                                                         | `string`             | -                                |
| [`language`](#language)                                                                       | `string`             | -                                |
| [`addon`](#addon)                                                                             | `string`, `string[]` | -                                |
| [`bug-hunting`](#bug-hunting)                                                                 | `boolean`            | `false`                          |
| [`parallel`](#parallel)                                                                       | `boolean`            | `false`                          |
| [`suppressions-list`](#suppressions-list)                                                     | `string`             | `sider_recommended_cppcheck.txt` |

### `target`

This option allows you to specify files or directories to analyze via Cppcheck. If you specify multiple targets, configure as follows:

```yaml
linter:
  cppcheck:
    target:
      - "your/code.c"
      - "your/code.cpp"
      - "your/code/here"
```

### `ignore`

This option allows you to exclude files or directories from analysis.
If you specify multiple targets, configure as follows:

```yaml
linter:
  cppcheck:
    ignore:
      - "you/ignore/code.c"
      - "you/ignore/code.cpp"
      - "you/ignore/code/here"
```

See also the [`-i`](https://github.com/danmar/cppcheck/blob/main/man/manual.md#excluding-a-file-or-folder-from-checking).

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

### `addon`

This option allows you to set the [predefined addons](https://github.com/danmar/cppcheck/tree/main/addons#readme). For example:

```yaml
linter:
  cppcheck:
    addon:
      - cert
      - misra
```

The available values are `cert`, `misra`, `y2038`, and `threadsafety`.

You can also specify a json file containing [the configuration of addons](https://github.com/danmar/cppcheck/blob/main/man/manual.md#running-addons). For example:

```yaml
linter:
  cppcheck:
    addon:
      - config/misra.json
```

Note that the file path should be relative to the root directory where the `sider.yml` is located or the `root_dir` directory if it is specified.

The `config/misra.json` file goes like this:

```json
{
  "script": "misra",
  "args": ["--rule-texts=config/misra_rules.txt"]
}
```

### `bug-hunting`

This option allows you to enable Bug hunting. There is a new "soundy" analysis introduced in Cppcheck-2.0. You can read more about this analysis in the [Cppcheck manual](https://github.com/danmar/cppcheck/blob/main/man/manual.md#bug-hunting).

### `parallel`

This option allows you to run multiple jobs in parallel by using the `-j` option of the `cppcheck` command. The number of jobs is set to the number of processors on our server where the analyzer is running.

Note that there are some limitations due to the behavior of Cppcheck.

- The `parallel` option is ignored when the [`project`](#project) option is specified.

And, the results of the following checks are affected when the `parallel` option is set to `true`.

- unusedFunction
- Whole program analysis (ctu=Cross Translation Unit)

### `suppressions-list`

This option allows you to specify a file path of a suppressions file. You can create a suppressions file for example as follows:

```text
memleak
uninitvar
```

You can read more about this file format in the [Cppcheck manual](https://github.com/danmar/cppcheck/blob/main/man/manual.md#suppressions-in-a-file).
