# Flake8

| Supported Version | Language | Web Site |
|:--:|:--:|:--:|
| 3.5.0 | Python 2.7.13, 3.6.2 | [http://flake8.pycqa.org/en/latest/](http://flake8.pycqa.org/en/latest/) |

## Getting Started

To start using Flake8, enable it in repository settings.

To customize Flake8, put `.flake8` in your repository.

## Python Version

If your repository contains `.python-version`, the python version is inferred from the file. You can specify Python version via `sideci.yml`. The default is Python 3.

The latest versions of Python 2 or Python 3 can be used.

## Default Configuration

Sider provides default configuration for Flake8. If your repository does not include `.flake8`, `setup.cfg` or `tox.ini`, our default configuration will be used.

Our default configuration is available in GitHub repository.

* [Sider's configuration for Flake8](https://github.com/actcat/sideci_config/blob/master/python/flake8/sideci_config.ini)

## Configuration via `sideci.yml`

Here is an example setting for Flake8 under `flake8`:

```yaml:sideci.yml
linter:
  flake8:
    version: 2
    plugins:
      - flake8-bandit
      - flake8-builtins==1.4.1
      - flake8-mypy>=17.3.3
```

### `version`

This setting manages Python's version when running `flake8`. Python 3 will be used if omitted.

### `plugins`

This option allows you to enable Flake8 plugins. You can set arbitrary plugin names and also specify \(minimum\) version number. Without package version number, Sider will install the latest version.

