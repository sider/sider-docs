---
id: pylint
title: Pylint
sidebar_label: Pylint (beta)
hide_title: true
---

# Pylint

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language     | Website                             |
| ----------------- | ------------ | ----------------------------------- |
| 2.6.0             | Python 3.8.6 | https://pylint.pycqa.org/en/stable/ |

**Pylint** is a Python static code analysis tool which looks for programming errors, helps to enforce a coding standard, sniffs for code smells and offers simple refactoring suggestions.

## Getting Started

To start using Pylint, enable it in your [repository settings](../../getting-started/repository-settings.md).

To customize Pylint, put a `.pylintrc` file in your repository.

If you don't have `.pylintrc` file, you can make it by executing the command below.

```bash
pylint --generate-rcfile > .pylintrc
```

## Configuration

You can customize the analysis via `sider.yml`:

```yaml
linter:
  pylint:
    target:
      - "./**/*test.py"
    rcfile: ./folder/.pylintrc
    errors-only: true
    ignore:
      - bad1.py
      - bad2.py
```

| Name                          | Type                 | Default     |
| ----------------------------- | -------------------- | ----------- |
| [`target`](#target)           | `string`, `string[]` | `**/*.{py}` |
| [`rcfile`](#rcfile)           | `string`             | -           |
| [`errors-only`](#errors-only) | `boolean`            | -           |
| [`ignore`](#ignore)           | `string`, `string[]` | -           |

### `target`

This option allows you to specify files or directories to analyze via Pylint. Glob format is also available.
If you specify multiple targets, configure as follows:

```yaml
linter:
  pylint:
    target:
      - "./**/*test.py"
```

### `rcfile`

This option allows you to specify a configuration file you want.

```yaml
linter:
  pylint:
    rcfile: ./folder/.pylintrc
```

### `errors-only`

This option allows you to show only Pylint's error messages.

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
