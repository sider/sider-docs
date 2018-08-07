# Goodcheck

| Supported Version | Language | Web Site |
|:--:|:--:|:--:|
| 1.2.0 | Others(Regexp) | [https://github.com/sider/goodcheck](https://github.com/sider/goodcheck) |

## Getting Started

To start using Goodcheck, enable it in the repository setting and put config file `goodcheck.yml` in your repository.

Visit [its project page](https://github.com/sider/goodcheck#goodcheckyml) for more information about writing rules.

## Configuration via `sideci.yml`

Here are example settings for Goodcheck under `goodcheck`:

```yaml:sideci.yml
linter:
  goodcheck:
    config: lib/goodcheck.yml
    target:
      - lib
      - app
```

### `config`

This option allows you to specify a config file. By default, Goodcheck looks `goodcheck.yml` in the current directory.

### `target`

This option allows you to specify files or directories which Goodcheck analyzes. You need to set values of the option as a list.

