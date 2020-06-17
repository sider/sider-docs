---
id: pmd-cpd
title: PMD CPD
sidebar_label: PMD CPD (beta)
hide_title: true
---

# PMD CPD

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language    | Website               |
| ----------------- | ----------- | --------------------- |
| 6.23.0            | (see below) | https://pmd.github.io |

**PMD CPD** is the copy-paste detector shipped with PMD. CPD works with Java, JSP, C/C++, C#, Go, Kotlin, Ruby, Swift and [many more languages](https://pmd.github.io/pmd/pmd_userdocs_cpd.html#supported-languages).

## Getting Started

To start using PMD CPD, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

You can customize the analysis via `sider.yml`:

```yaml
linter:
  pmd_cpd:
    minimum-tokens: 70
    files: src
    language: cpp
    encoding: UTF-8
    skip-duplicate-files: true
    non-recursive: true
    skip-lexical-errors: true
    ignore-annotations: true
    ignore-identifiers: true
    ignore-literals: true
    ignore-usings: true
    no-skip-blocks: true
    skip-blocks-pattern: "#ifdef TEST|#endif"
```

| Name                                                                                  | Type                 | Default         |
| ------------------------------------------------------------------------------------- | -------------------- | --------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -               |
| [`minimum-tokens`](#minimum-tokens)                                                   | `number`             | `100`           |
| [`files`](#files)                                                                     | `string`, `string[]` | `.`             |
| [`language`](#language)                                                               | `string`, `string[]` | (See below)     |
| [`encoding`](#encoding)                                                               | `string`             | (PMD's default) |
| [`skip-duplicate-files`](#skip-duplicate-files)                                       | `boolean`            | `false`         |
| [`non-recursive`](#non-recursive)                                                     | `boolean`            | `false`         |
| [`skip-lexical-errors`](#skip-lexical-errors)                                         | `boolean`            | `false`         |
| [`ignore-annotations`](#ignore-annotations)                                           | `boolean`            | `false`         |
| [`ignore-identifiers`](#ignore-identifiers)                                           | `boolean`            | `false`         |
| [`ignore-literals`](#ignore-literals)                                                 | `boolean`            | `false`         |
| [`ignore-usings`](#ignore-usings)                                                     | `boolean`            | `false`         |
| [`no-skip-blocks`](#no-skip-blocks)                                                   | `boolean`            | `false`         |
| [`skip-blocks-pattern`](#skip-blocks-pattern)                                         | `string`             | (PMD's default) |

### `minimum-tokens`

The minimum token length which should be reported as a duplicate.

### `files`

This option allows you to specify a list of files and directories to analyze, e.g.:

```yaml
linter:
  pmd_cpd:
    files: src
    # or
    # files: [src, lib]
    # or
    # files: [path/to/Some.java, src]
```

### `language`

This option allows you to specify a list of languages you want to analyze, e.g.:

```yaml
linter:
  pmd_cpd:
    language: cpp
    # or
    # language: [cpp, java, python]
```

Here are available:

- `apex`
- `cpp` *
- `cs` *
- `dart`
- `ecmascript` *
- `fortran`
- `go` *
- `groovy`
- `java` *
- `jsp`
- `kotlin` *
- `lua`
- `matlab`
- `modelica`
- `objectivec`
- `perl`
- `php` *
- `plsql`
- `python` *
- `ruby` *
- `scala`
- `swift` *
- `vf`
- `xml`

The default languages are marked by `*`.

See also the [PMD CPD document](https://pmd.github.io/pmd/pmd_userdocs_cpd.html#supported-languages).

### `encoding`

This option allows you to specify an encoding of your source code.

### `skip-duplicate-files`

This option allows you to ignore multiple copies of files of the same name and length in comparison.

### `non-recursive`

If you do not want to analyze the sub-directories, set this option to `true`.

### `skip-lexical-errors`

If you want to skip files which cannot be tokenized due to invalid characters, set this option to `true`.

### `ignore-annotations`

_(Java only)_ If you want to ignore annotations on classes and methods, set this option to `true`.

### `ignore-identifiers`

_(Java only)_ If you want to ignore constant and variable names, set this option to `true`.

### `ignore-literals`

_(Java only)_ If you want to ignore number values and string contents, set this option to `true`.

### `ignore-usings`

_(C# only)_ If you want to ignore `using` directives, set this option to `true`.

### `no-skip-blocks`

_(C/C++ only)_ If you do not want to skip code blocks matched by the `skip-blocks-pattern` option, set this option to `true`.

### `skip-blocks-pattern`

_(C/C++ only)_ You can configure the pattern, to find the blocks to skip:

```yaml
linter:
  pmd_cpd:
    language: c
    skip-blocks-pattern: "#ifdef TEST|#endif"
```

This option value consists of two parts, separated by `|`. The first part is the start pattern, the second part is the ending pattern.
