---
id: querly
title: Querly
sidebar_label: Querly
hide_title: true
---

# Querly

| Supported Version       | Language | Website                           |
| ----------------------- | -------- | --------------------------------- |
| 0.5.0+ (default: 1.2.0) | Ruby     | https://github.com/soutaro/querly |

**Querly** is a customizable and pattern-based analysis tool for Ruby.
You can easily write your own rule for your project via the YAML configuration file.

## Getting Started

To start using Querly, enable it in your [repository settings](../../getting-started/repository-settings.md),
and put a `querly.yml` config in your repository's root directory.

Visit the Querly project page for more information about writing rules:

- [Configuration](https://github.com/soutaro/querly/blob/HEAD/manual/configuration.md)
- [Examples](https://github.com/soutaro/querly/blob/HEAD/manual/examples.md)
- [Patterns](https://github.com/soutaro/querly/blob/HEAD/manual/patterns.md)

<div class="Video">
 <iframe class="Video__iframe" src="https://www.youtube.com/embed/WtHmNuWJzPA" frameborder="0" allowfullscreen></iframe>
</div>

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  querly:
    gems:
      - slim
    config: .config/querly.yml
```

| Name                                                                                  | Type                | Default |
| ------------------------------------------------------------------------------------- | ------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`            | -       |
| [`gems`](../../getting-started/custom-configuration.md#linteranalyzer_idgems)         | `string[]`, `map[]` | -       |
| [`config`](#config)                                                                   | `string`            | -       |

### `config`

This option allows you to specify a configuration file path you want to use.

## Analyzing View Templates

Querly has a mechanism called [preprocessor](https://github.com/soutaro/querly/blob/HEAD/manual/configuration.md#preprocessor) for analyzing templates which contain Ruby code.
Sider finds the following gems in `Gemfile.lock` and installs them automatically for backward compatibility:

- [slim](https://github.com/slim-template/slim)
- [haml](https://github.com/haml/haml)

Note that these gems are not installed automatically when the `gems` option is specified.
