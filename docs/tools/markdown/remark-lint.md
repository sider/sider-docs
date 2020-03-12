---
id: remark-lint
title: remark-lint
sidebar_label: remark-lint (beta)
hide_title: true
---

# remark-lint

> (Not yet released) This is **BETA**. The behavior of this tool might change.

| Supported Version         | Language | Runtime         | Website                                 |
| :------------------------ | :------- | :-------------- | :-------------------------------------- |
| 6.0.0+ (default to 6.0.5) | Markdown | Node.js 12.16.1 | https://github.com/remarkjs/remark-lint |

**remark-lint** is a pluggable linter for Markdown. It includes many rules to enforce consistency and detect possible mistakes.

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
    rc-path: my-remarkrc.yml
    ignore-path: my-remarkignore
    use:
      - plugin1
      - plugin2
```

You can use the following options to fine-tune remark-lint to your project:

| Name                                                                              | Type                 | Default | Description                            |
| --------------------------------------------------------------------------------- | -------------------- | ------- | -------------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option)       | `string`             | -       | A root directory.                      |
| [`npm_install`](../../getting-started/custom-configuration.md#npm_install-option) | `boolean`, `string`  | -       | A behavior of npm installation.        |
| [`target`](#target)                                                               | `string`, `string[]` | `.`     | Files or directories to analyze.       |
| [`ext`](#ext)                                                                     | `string`             | -       | `--ext` option of remark-lint.         |
| [`rc-path`](#rc-path)                                                             | `string`             | -       | `--rc-path` option of remark-lint.     |
| [`ignore-path`](#ignore-path)                                                     | `string`             | -       | `--ignore-path` option of remark-lint. |
| [`use`](#use)                                                                     | `string`, `string[]` | -       | `--use` option of remark-lint.         |

For more details about the CLI options of remark-lint, see the [document](https://github.com/remarkjs/remark/tree/master/packages/remark-cli#cli).

### `target`

This option allows you to specify files or directories to analyze. You can specify also glob patterns.

For example:

```yaml
linter:
  remark-lint:
    target:
      - docs/
      - manual/
```

See also the [`ext`](#ext) option.

### `ext`

This option allows you to specify file extensions to analyze. In many cases, you may use it along with the [`target`](#target) option.

For example:

```yaml
linter:
  remark-lint:
    target: docs/
    ext: md,mdown
```

### `rc-path`

This option allows you to specify a [remark-lint configuration file](#configuration-files-for-remark-lint).

For example:

```yaml
linter:
  remark-lint:
    rc-path: config/.my-remarklintrc.yml
```

### `ignore-path`

This option allows you to specify a [remark-lint ignore file](https://github.com/unifiedjs/unified-engine/blob/master/doc/ignore.md).

For example:

```yaml
linter:
  remark-lint:
    ignore-path: .gitignore
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

Note that remark-lint rules are implemented as a remark plugin.
If you want to configure presets or rules for remark-lint, you need to specify them to `plugins` as the example above.
