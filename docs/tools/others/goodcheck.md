---
id: goodcheck
title: Goodcheck
sidebar_label: Goodcheck
hide_title: true
---

# Goodcheck

| Supported Version         | Language        | Website                            |
| ------------------------- | --------------- | ---------------------------------- |
| 1.0.0+ (default to 2.5.0) | Others (Regexp) | https://sider.github.io/goodcheck/ |

## Getting Started

To start using Goodcheck, put config file `goodcheck.yml` in your repository.

Visit [its project page](https://github.com/sider/goodcheck#goodcheckyml) for more information about writing rules.

<div class="Video">
 <iframe class="Video__iframe" src="https://www.youtube.com/embed/8Zpm2gguE1M" frameborder="0" allowfullscreen></iframe>
</div>

## Configuration via `sider.yml`

Here are example settings for Goodcheck under `goodcheck`:

```yaml
linter:
  goodcheck:
    config: lib/goodcheck.yml
    target:
      - lib
      - app
```

### Options

| Name                                                                        | Type                 | Default | Description                              |
| --------------------------------------------------------------------------- | -------------------- | ------- | ---------------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`             | -       | A root directory.                        |
| `config`                                                                    | `string`             | -       | A file path passed as `--config` option. |
| `target`                                                                    | `string`, `string[]` | -       | Files or directories which are analyzed. |
