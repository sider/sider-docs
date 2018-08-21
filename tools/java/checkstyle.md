# Checkstyle

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 8.12 | Java 8 | [http://checkstyle.sourceforge.net/](http://checkstyle.sourceforge.net/) |

## Getting Started

To start using Checkstyle, enable it in the repository setting.

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

This option allows you to declare the configuration you want to follow. The default value is `google`.

Supported values are:

* `google` \(for `/google_checks.xml`\)
* `sun` \(for `/sun_checks.xml`\)
* Path to your configuration file

When you write `google` or `sun`, config files distributed from Checkstyle are used.

### `dir`

This option allows you to specify the directories you want to check in your repository. The default value is `.`.

You can write a string or a sequence of strings.

### `exclude`

This option allows you to specify `-e` and `-x` command line option of checkstyle command. The value should be a sequence of the followings:

* When you write a string, `-e` option will be given,
* When you write a object with `string` key, like `{ string: vendor }`, `-e` option will be given, or
* When you write a object with `pattern` key, like `{ pattern: vendor }`, `-x` option will be given.

The default value is empty \(nothing will be excluded.\)

### `ignore`

This option allows you to ignore issues based on their severity. Write the list of severities you want to ignore in Sider.

The default value is empty \(nothing will be ignored.\)

### `properties`

This option allows you to specify properties file given to checkstyle. The value will be passed to the `-p` commandline option of checkstyle.

There is no default value.

