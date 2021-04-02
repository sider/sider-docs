---
id: goodcheck
title: Goodcheck
sidebar_label: Goodcheck
hide_title: true
---

# Goodcheck

| Supported Version       | Language     | Website                           |
| ----------------------- | ------------ | --------------------------------- |
| 1.0.0+ (default: 2.7.0) | Various text | https://sider.github.io/goodcheck |

**Goodcheck** is a regex-based customizable linter, which has no rules by default.
Users can add and manage project-specific rules to their YAML files.

## Getting Started

To start using Goodcheck, put config file `goodcheck.yml` in your repository.

Visit the pages below for more information about writing rules:

- [Goodcheck project page](https://github.com/sider/goodcheck#goodcheckyml)
- [How to make custom rules](../../custom-rules/goodcheck.md)

<div class="Video">
 <iframe class="Video__iframe" src="https://www.youtube.com/embed/8Zpm2gguE1M" frameborder="0" allowfullscreen></iframe>
</div>

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  goodcheck:
    config: lib/goodcheck.yml
    target:
      - lib
      - app
```

| Name                                                                                          | Type                 | Default |
| --------------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)         | `string`             | -       |
| [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies) | `string[]`, `map[]`  | -       |
| [`config`](#config)                                                                           | `string`             | -       |
| [`target`](#target)                                                                           | `string`, `string[]` | -       |

### `config`

This option allows you to specify a configuration file path for Goodcheck.

### `target`

This option allows you to specify files or directories to analyze.
