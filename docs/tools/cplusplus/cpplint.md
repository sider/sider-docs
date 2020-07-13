---
id: cpplint
title: cpplint
sidebar_label: cpplint (beta)
hide_title: true
---

# cpplint

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language | Website                            |
| ----------------- | -------- | ---------------------------------- |
| 1.5.2             | C/C++    | https://github.com/cpplint/cpplint |

**cpplint** is a static analysis tool to check C/C++ files for style issues.

## Getting Started

To start using cpplint, enable it in your [repository settings](../../getting-started/repository-settings.md).

For more details for cpplint, see the command-line help:

```shell
$ cpplint --help
```

## Configuration

Here is a configuration example via [`sider.yml`](../../getting-started/custom-configuration.md):

```yaml
linter:
  cpplint:
    target: "src"
    extensions: "c,cc"
    headers: "hpp,hxx"
    filter: "-whitespace,+whitespace/braces,-legal/copyright"
    linelength: 100
    exclude: "test/*.c"
```

You can use the following options to fine-tune cpplint to your project.

| Name                                                                                  | Type                 | Default |
| ------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -       |
| [`target`](#target)                                                                   | `string`, `string[]` | `.`     |
| [`extensions`](#extensions)                                                           | `string`             | -       |
| [`headers`](#headers)                                                                 | `string`             | -       |
| [`filter`](#filter)                                                                   | `string`             | -       |
| [`linelength`](#linelength)                                                           | `string`             | -       |
| [`exclude`](#exclude)                                                                 | `string`             | -       |

### `target`

This option allows you to specify files or directories to analyze. If you specify some targets, configure as follow:

```Yaml
linter:
  cpplint:
    target:
      - "src"
      - "lib"
```

### `extensions`

This option allows you to specify a comma-separated list of file extensions to analyze. For example, `c++,cpp,cc,hh`.

### `headers`

This option allows you to specify a comma-separated list of header file extensions to analyze. For example, `hpp,hxx`.
The values are automatically added to the [`extensions`](#extensions) list.

### `filter`

This option allows you to specify a comma-separated list of rule-filters to apply.
For example, the rule names look like `whitespace/indent`. In that case, the category is `whitespace`.

To turn off, specify `-` as prefix like `-whitespace` or `-whitespace/indent`.
On the other hand, to turn on, specify `+` like `+whitespace` or `+whitespace/indent`.

The following is an example:

```yaml
linter:
  cpplint:
    filters: "-whitespace,+whitespace/braces"
```

If you omit the option, all the rules will be applied.

### `linelength`

This option allows you to specify a line-length for the project.

### `exclude`

This option allows you to exclude files to analyze. You can specify some files as follow:

```yaml
linter:
  cpplint:
    exclude:
      - "src/*.cc"
      - "test/*.cc"
```
