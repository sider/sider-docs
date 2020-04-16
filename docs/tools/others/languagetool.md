---
id: languagetool
title: LanguageTool
sidebar_label: LanguageTool (beta)
hide_title: true
---

# LanguageTool

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language    | Website                  |
| ----------------- | ----------- | ------------------------ |
| 4.9               | Java 12.0.2 | https://languagetool.org |

**LanguageTool** is a proofreading tool for [English, French, German, and other languages](https://languagetool.org/languages).
It finds many mistakes like grammar errors, misspells, and so on.

## Getting Started

To start using LanguageTool, enable it in [Repository Settings](../../getting-started/repository-settings.md).

## Limitation

Because LanguageTool [does not support any markup languages](https://github.com/languagetool-org/languagetool/issues/445) like HTML, Markdown, or LaTeX, Sider analyzes only `.txt` files by default.
If you want to analyze your files written in some markup languages, you can do it by configuring your `sider.yml`, for example:

```yaml
linter:
  languagetool:
    ext: [.md, .html]
```

But the analysis may report many false positives.
In such a case, we recommend [closing such issues](../../getting-started/working-with-issues.md#closing-issues) or disabling such rules via your `sider.yml` like this:

```yaml
linter:
  languagetool:
    ext: [.md, .html]
    disable:
      - EN_QUOTES # To suppress false positives about quotes, e.g. `<a class="normal">`
```

## Configuration

Here is an example configuration for LanguageTool via `sider.yml`:

```yaml
linter:
  languagetool:
    target: docs/
    ext: [.md, .tex]
    exclude:
      - "**/test/*"
      - "**/special.{md,tex}"
    language: en-GB
    encoding: ISO-8859-1
    disable:
      - EN_QUOTES
      - UPPERCASE_SENTENCE_START
    enable:
      - EN_A_VS_AN
    enabled_only: true
    disable_categories:
      - CASING
    enable_categories:
      - MISC
```

You can customize the analysis via the following options:

| Name                                                                        | Type       | Default                            | Description                       |
| --------------------------------------------------------------------------- | ---------- | ---------------------------------- | --------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`   | -                                  | A root directory.                 |
| [`target`](#target)                                                         | `string`   | `.`                                | A directory to be analyzed.       |
| [`ext`](#ext)                                                               | `string[]` | `[".txt"]`                         | File extensions to be analyzed.   |
| [`exclude`](#exclude)                                                       | `string[]` | `["**/{requirements,robots}.txt"]` | Glob patterns to be excluded.     |
| [`language`](#language)                                                     | `string`   | `en-US`                            | A target language.                |
| [`encoding`](#encoding)                                                     | `string`   | `UTF-8`                            | A target file encoding.           |
| [`disable`](#disable)                                                       | `string[]` | `[]`                               | Disabled rules.                   |
| [`enable`](#enable)                                                         | `string[]` | `[]`                               | Enabled rules.                    |
| [`enabled_only`](#enabled_only)                                             | `boolean`  | `false`                            | Whether using only enabled rules. |
| [`disable_categories`](#disable_categories)                                 | `string[]` | `[]`                               | Disabled rule categories.         |
| [`enable_categories`](#enable_categories)                                   | `string[]` | `[]`                               | Enabled rule categories.          |

### `target`

This option allows you to specify a directory to be analyzed.
It is useful to use together with the [`ext`](#ext) option.

In the example below, Sider analyzes `*.md` and `*.markdown` files under the `docs/` directory.

```yaml
linter:
  languagetool:
    target: docs/
    ext: [.md, .markdown]
```

### `ext`

This option allows you to specify extensions of files to be analyzed.

### `exclude`

This option allows you to specify glob patterns that you want to exclude from your analysis.

### `language`

This option allows you to specify a language used in analyzed files, e.g. `en` or `en-US`.
Note that you need to specify it with a variant (e.g. `en-US` or `en-GB`) to work the spell checking well.

See the [official document](https://languagetool.org/languages) for supported languages.

### `encoding`

This option allows you to specify a file encoding.

### `disable`

This option allows you to disable any rules, e.g. `EN_QUOTES` or `UPPERCASE_SENTENCE_START`.

### `enable`

This option allows you to enable any rules, e.g. `EN_QUOTES` or `UPPERCASE_SENTENCE_START`.
It is useful to use together with the [`enabled_only`](#enabled_only) option.

In the example below, only `EN_QUOTES` and `UPPERCASE_SENTENCE_START` rules are used for your analysis.

```yaml
linter:
  languagetool:
    enable:
      - EN_QUOTES
      - UPPERCASE_SENTENCE_START
    enabled_only: true
```

### `enabled_only`

This option allows you to enable only the specified rules.

### `disable_categories`

This option allows you to disable any rule categories, e.g. `CASING` or `TYPOS`.

### `enable_categories`

This option allows you to enable any rule categories, e.g. `CASING` or `TYPOS`.
It is useful to use together with the [`enabled_only`](#enabled_only) option.

In the example below, only `CASING` and `TYPOS` categories are used for your analysis.

```yaml
linter:
  languagetool:
    enable_categories:
      - CASING
      - TYPOS
    enabled_only: true
```
