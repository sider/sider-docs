---
id: remark-lint
title: remark-lint
sidebar_label: remark-lint (beta)
hide_title: true
---

# remark-lint

> This is **BETA**. The behavior of this tool might change.

| Supported Version         | Language | Runtime         | Website                                 |
| ------------------------- | -------- | --------------- | --------------------------------------- |
| 7.0.0+ (default: 8.0.0) ¹ | Markdown | Node.js 12.16.3 | https://github.com/remarkjs/remark-lint |

**remark-lint** is a pluggable linter for Markdown. It includes many rules to enforce consistency and detect possible mistakes.

¹ Note that this version is actually [remark-cli](https://github.com/remarkjs/remark/tree/master/packages/remark-cli)'s, not remark-lint's. Sider requires only remark-cli.

## Getting Started

To start using remark-lint, enable it in your [repository settings](../../getting-started/repository-settings.md).

Sider enables [some useful rules](https://github.com/sider/remark-preset-lint-sider) by default, so you can get started out of the box.

In addition, you can use some rules or plugins as you want. If doing so, you need to install remark-lint on your repository via npm, for example:

```shell-session
$ npm install --save-dev remark-cli remark-lint remark-preset-lint-recommended
```

then, configure remark-lint via a configuration file like `package.json`, for example:

```json
{
  "scripts": {
    "lint-md": "remark ."
  },
  "remarkConfig": {
    "plugins": ["remark-preset-lint-recommended"]
  }
}
```

For more details, see the [document](https://github.com/remarkjs/remark-lint#readme).

## Configuration

Here is a configuration example via [`sider.yml`](../../getting-started/custom-configuration.md):

```yaml
linter:
  remark_lint:
    target: docs/
    ext: md,markdown
    rc-path: config/.remarkrc
    ignore-path: config/.remarkignore
    use:
      - remark-lint-file-extension
      - remark-lint-no-heading-punctuation
```

You can use the following options to fine-tune remark-lint to your project:

| Name                                                                                        | Type                 | Default |
| ------------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)       | `string`             | -       |
| [`npm_install`](../../getting-started/custom-configuration.md#linteranalyzer_idnpm_install) | `boolean`, `string`  | -       |
| [`target`](#target)                                                                         | `string`, `string[]` | `.`     |
| [`ext`](#ext)                                                                               | `string`             | -       |
| [`rc-path`](#rc-path)                                                                       | `string`             | -       |
| [`ignore-path`](#ignore-path)                                                               | `string`             | -       |
| [`use`](#use)                                                                               | `string`, `string[]` | -       |

For more details about the CLI options of remark-lint, see the [document](https://github.com/remarkjs/remark/tree/master/packages/remark-cli#cli).

### `target`

This option allows you to specify files or directories to analyze. You can specify also glob patterns.

For example:

```yaml
linter:
  remark_lint:
    target:
      - docs/
      - manual/**/doc-*.md
```

### `ext`

This option allows you to specify file extensions to analyze, and the value should be comma-separated.
By default, remark-lint tries to find all markdown files as possible, so you may not usually need to use this option.

For example, if you want to analysis only `*.md` and `*.mdown` files, you need to set the option as follow:

```yaml
linter:
  remark_lint:
    ext: md,mdown
```

### `rc-path`

This option allows you to specify a [`.remarkrc` file](#configuration-files-for-remark-lint).

For example:

```yaml
linter:
  remark_lint:
    rc-path: config/.remarkrc
```

### `ignore-path`

This option allows you to specify a [`.remarkignore` file](https://github.com/unifiedjs/unified-engine/blob/master/doc/ignore.md).
By default, remark-lint automatically finds a ignore file in a project, so you may not usually need to use this option.

For example:

```yaml
linter:
  remark_lint:
    ignore-path: config/.remarkignore
```

### `use`

This option allows you to specify plugins. See also the ["configuration files"](#configuration-files-for-remark-lint) section.

For example:

```yaml
linter:
  remark_lint:
    use:
      - remark-lint-file-extension
      - remark-lint-no-heading-punctuation
```

## Configuration files for remark-lint

remark-lint has [own mechanism to use configuration files](https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md) such as `.remarkrc`, `.remarkrc.yml`, or `package.json`.

For example, you can configure plugins via the following `.remarkrc.yml` file:

```yaml
plugins:
  - remark-preset-lint-recommended
  - ["remark-lint-list-item-indent", false]
```

Note that all the remark-lint presets and rules are implemented as a [remark](https://remark.js.org) plugin.
If you want to configure some presets or rules for remark-lint, you need to specify them to `plugins` as the example above.
