---
id: tyscan
title: TyScan
sidebar_label: TyScan
hide_title: true
---

# TyScan

| Supported Version       | Language   | Website                         |
| ----------------------- | ---------- | ------------------------------- |
| 0.2.1+ (default: 0.3.2) | TypeScript | https://github.com/sider/tyscan |

**TyScan** is a static analysis tool for TypeScript to easily make your custom rules via your YAML file.

## Getting Started

To start using TyScan, enable it in your [repository settings](../../getting-started/repository-settings.md)
and put a `tyscan.yml` file in your repository.

If you want to try it locally, we recommend installing it via npm:

```console
$ npm install tyscan --save-dev
```

## Configuration

Here is a configuration example via `sider.yml`:

```yaml
linter:
  tyscan:
    config: "lint_yml/tyscan.yml"
    tsconfig: "some/tsconfig.json"
    target:
      - frontend
```

You can use the following options to make analysis fitter for your project.

| Name                                                                                          | Type                 | Default         |
| --------------------------------------------------------------------------------------------- | -------------------- | --------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)         | `string`             | -               |
| [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies) | `string[]`, `map[]`  | -               |
| [`npm_install`](../../getting-started/custom-configuration.md#linteranalyzer_idnpm_install)   | `boolean`, `string`  | -               |
| [`config`](#config)                                                                           | `string`             | `tyscan.yml`    |
| [`tsconfig`](#tsconfig)                                                                       | `string`             | `tsconfig.json` |
| [`target`](#target)                                                                           | `string`, `string[]` | -               |

### `config`

This option allows you to specify a file or directory where your TyScan ruleset is located.

```yaml
linter:
  tyscan:
    config: rules.yml # TyScan uses `rules.yml` instead of `tyscan.yml` as the ruleset.
```

### `tsconfig`

This option allows you to set your TypeScript project file.

### `target`

This option allows you to specify files or directories to be analyzed.

_alias:_ `paths`
