---
id: pylint
title: Pylint
sidebar_label: Pylint
hide_title: true
---

# Pylint

| Supported Version | Language     | Website                         |
| ----------------- | ------------ | ------------------------------- |
| 2.5.2             | Python 3.8.2 | https://www.pylint.org/ |

**Pylint** is a Python static code analysis tool which looks for programming errors, helps to enforce a coding standard, sniffs for code smells and offers simple refactoring suggestions.

## Getting Started

To start using Pylint, enable it in your [repository settings](../../getting-started/repository-settings.md).

To customize Pylint, put a `.pylintrc` file in your repository.

## Configuration

You can customize the analysis via `sider.yml`:

```yaml
linter:
  pylint:
    rcfile: ./folder/.pylintrc
    errors-only: true
    ignore:
      - bad1.py
      - bad2.py
```

| Name                                                                                  | Type                 | Default    |
| ------------------------------------------------------------------------------------- | -------------------- | ---------- |
| [`rcfile`](#rcfile)                                                                   | `string`             | -          |
| [`target`](#target)                                                                   | `string`, `string[]` | `**/*.{py}`|
| [`errors-only`](#errors-only)                                                         | `boolean`            | -          |
| [`ignore`](#ignore)                                                                   | `string`, `string[]` | -          |

### `rcfile`

This option allows you to specify a configuration file you want.

See also the [`--rcfile`](http://pylint.pycqa.org/en/latest/user_guide/run.html?highlight=rcfile#command-line-options) option.

```yaml
linter:
  pylint:
    rcfile: ./folder/.pylintrc
```

### `target`

This option allows you to specify files or directories to analyze via Pylint. If you specify multiple targets, configure as follow:

```yaml
linter:
  pylint:
    target:
      - ./folder/bad1.py
      - ./folder/bad2.py
```

### `errors-only`

This option allows you to show only pylint error messags.

```yaml
linter:
  pylint:
    errors-only: true
```

### `ignore`

This option allows you to exclude files from analysis. The files should be base names, not paths. If you specify multiple targets, configure as follows:

```yaml
linter:
  pylint:
    ignore:
      - bad1.py
      - bad2.py
```
