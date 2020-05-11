---
id: querly
title: Querly
sidebar_label: Querly
hide_title: true
---

# Querly

| Supported Version         | Language   | Website                           |
| ------------------------- | ---------- | --------------------------------- |
| 0.5.0+ (default to 1.0.0) | Ruby 2.6.5 | https://github.com/soutaro/querly |

## Getting Started

To start using Querly, enable it in your [repository settings](../../getting-started/repository-settings.md),
and put a `querly.yaml` config in your repository's root directory.

Visit the Querly project page for more information about writing rules:

- [Configuration](https://github.com/soutaro/querly/blob/master/manual/configuration.md)
- [Examples](https://github.com/soutaro/querly/blob/master/manual/examples.md)
- [Patterns](https://github.com/soutaro/querly/blob/master/manual/patterns.md)

<div class="Video">
 <iframe class="Video__iframe" src="https://www.youtube.com/embed/WtHmNuWJzPA" frameborder="0" allowfullscreen></iframe>
</div>

## Configuration via `sider.yml`

Here are some example settings for Querly in `sider.yml`, under `querly`:

```yaml
linter:
  querly:
    gems:
      - "slim"
```

## Options

| Name                                                                        | Type                 | Default | Description       |
| --------------------------------------------------------------------------- | -------------------- | ------- | ----------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`             | -       | A root directory. |
| [`gems`](../../getting-started/custom-configuration.md#gems-option)         | `string[]`, `hash[]` | -       | Gems to install.  |

## Analyzing view templates

Querly has a mechanism called [preprocessor](https://github.com/soutaro/querly/blob/master/manual/configuration.md#preprocessor) for analyzing templates which contain Ruby code.
Sider finds the following gems in `Gemfile.lock` and installs them automatically for backward compatibility:

- [slim](https://github.com/slim-template/slim)
- [haml](https://github.com/haml/haml)

These gems are not installed automatically when the `gems` option is specified. We encourage you to explicitly specify gems in the [`gems` option](../../getting-started/custom-configuration.md#gems-option) in `sider.yml`.
