# Checkstyle

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 8.15 | Java 8 | [http://checkstyle.sourceforge.net/](http://checkstyle.sourceforge.net/) |

## Getting Started

To start using Checkstyle, enable it in [Repository Settings](../../getting-started/repository-settings.md).

## Configuration

You can customize Checkstyle analysis using `sideci.yml`.

```yaml:sideci.yml
linter:
  checkstyle:
    config: google
    dir: src
    exclude:
      - vendor
      - pattern: foo
    ignore:
      - warning
      - info
```

### `config`

This option allows you to declare the coding standard you want to follow. The default value is `google`.

Supported values are:

* `google` \(for `/google_checks.xml`\)
* `sun` \(for `/sun_checks.xml`\)
* Path to your configuration file

When you write `google` or `sun`, config files distributed from Checkstyle are used.

### `dir`

This option allows you to specify the directories you want to check in your repository. The default value is `.`.

You can write a string or a sequence of strings.

### `exclude`

This option allows you to specify `-e` and `-x` command line options passed to the `checkstyle` command.

* If `exclude` is a string, the `-e` option will be used.
* If it's an object with a `string` key, \(`{ string: vendor }`\), the `-e` option will be used.
* If it's as object with a `pattern` key, \(`{ pattern: vendor }`\), the `-x` option will be used.

The default value is empty \(nothing will be excluded\).

### `ignore`

This option allows you to ignore issues based on their severity. Write the list of severities you want to ignore.

The default value is empty \(nothing will be ignored\).

### `properties`

This option allows you to specify the properties file passed to `checkstyle`. The value will be passed to Checkstyle's `-p` option.

There is no default value.

