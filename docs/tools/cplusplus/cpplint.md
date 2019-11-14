---
id: cpplint
title: cpplint
sidebar_label: cpplint
hide_title: true
---

# cpplint

| Supported Version | Language | Website                            |
| ----------------- | -------- | ---------------------------------- |
| 1.4.4             | C/C++    | https://github.com/cpplint/cpplint |

> This is **BETA**. The behavior of this tool might change.

Cpplint is a static analysis tool to check C/C++ files for style issues.

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

| Name                        | Type                 | Default | Description                       |
| --------------------------- | -------------------- | ------- | --------------------------------- |
| [`target`](#target)         | `string`, `string[]` | `.`     | Files or directories to analyze.  |
| [`extensions`](#extensions) | `string`             | -       | `--extensions` option of cpplint. |
| [`headers`](#headers)       | `string`             | -       | `--headers` option of cpplint.    |
| [`filter`](#filter)         | `string`             | -       | `--filter` option of cpplint.     |
| [`linelength`](#linelength) | `string`             | -       | `--linelength` option of cpplint. |
| [`exclude`](#exclude)       | `string`             | -       | `--exclude` option of cpplint.    |

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

This option allows you to specify a comma-separated list of file extensions to analyze. For example `c++,cpp,cc,hh`.

### `headers`

This option allows you to specify a comma-separated list of header file extensions to analyze. For example `hpp,hxx`.
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
