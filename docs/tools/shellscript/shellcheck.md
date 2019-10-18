---
id: shellcheck
title: ShellCheck
sidebar_label: ShellCheck
hide_title: true
---

# ShellCheck

| Supported Version | Language     | Website                    |
| ----------------- | ------------ | -------------------------- |
| 0.7.0             | Shell script | https://www.shellcheck.net |

> This is **BETA**. The behavior of this tool might change.

ShellCheck is a static analysis tool for shell scripts. It gives warnings and suggestions.

## Getting Started

To start using ShellCheck, enable it in your [repository settings](../../getting-started/repository-settings.md).

For more details, see the ShellCheck's [CLI manual](https://github.com/koalaman/shellcheck/blob/master/shellcheck.1.md) and [Wiki](https://github.com/koalaman/shellcheck/wiki).

## Configuration

Here is a configuration example via [`sider.yml`](../../getting-started/custom-configuration.md):

```yaml
linter:
  shellcheck:
    target: "src"
    include: "SC2104,SC2105"
    exclude: "SC1000,SC1118"
    enable: "all"
    shell: "bash"
    severity: "error"
    norc: true
```

You can use the following options to fine-tune ShellCheck to your project.

| Name                    | Type                             | Default       | Description                        |
| ----------------------- | -------------------------------- | ------------- | ---------------------------------- |
| [`target`](#target)     | `string`, `array<string,object>` | _(See below)_ | Files to analyze.                  |
| [`include`](#include)   | `string`, `array<string>`        | -             | `--include` option of ShellCheck.  |
| [`exclude`](#exclude)   | `string`, `array<string>`        | -             | `--exclude` option of ShellCheck.  |
| [`enable`](#enable)     | `string`, `array<string>`        | -             | `--enable` option of ShellCheck.   |
| [`shell`](#shell)       | `string`                         | -             | `--shell` option of ShellCheck.    |
| [`severity`](#severity) | `string`                         | -             | `--severity` option of ShellCheck. |
| [`norc`](#norc)         | `boolean`                        | `false`       | `--norc` option of ShellCheck.     |

### `target`

This option allows you to specify files to analyze via ShellCheck. You can specify multiple targets or glob formats.

The default value is:

```Yaml
linter:
  shellcheck:
    target:
      - "**/*.{bash,bats,dash,ksh,sh}"
      - shebang: true
```

`shebang: true` is a special form. if enabling this form, Sider will analyze files including a [shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) like `#!/bin/sh` even if they do not have a file extension like `.sh`.

For example, if you have a file named `hello` including the following content, Sider will analyze it.

```sh
#!/bin/sh

echo "This script's filename is `hello`."
```

If you want to disable this shebang behavior, explicitly specify `shebang: false` as follow:

```yaml
linter:
  shellcheck:
    target:
      - "**/*.{bash,sh}"
      - shebang: false
```

### `include`

This option allows you to explicitly include only the specified codes of ShellCheck.
This can be a comma-separated list or have multiple values.

For example:

```yaml
linter:
  shellcheck:
    include: "SC2104,SC2105"
```

Or

```yaml
linter:
  shellcheck:
    include:
      - "SC2104"
      - "SC2105"
```

### `exclude`

This option allows you to explicitly exclude the specified codes of ShellCheck.
This can be a comma-separated list or have multiple values like the [`include`](#include) option.

### `enable`

This option allows you to enable optional checks. The special name `all` enables all of them.

For example:

```yaml
linter:
  shellcheck:
    enable: "all"
```

You can see a list of all optional checks via `shellcheck --list-optional` command.
Here is an example to enable some optional checks:

```yaml
linter:
  shellcheck:
    enable:
      - "add-default-case"
      - "avoid-nullary-conditions"
```

You can use also a comma-separated list:

```yaml
linter:
  shellcheck:
    enable: "add-default-case,avoid-nullary-conditions"
```

### `shell`

This option allows you to specify a shell dialect. Valid values are `sh`, `bash`, `dash`, and `ksh`.
If you omit this option, ShellCheck will deduce it automatically.

### `severity`

This option allows you to specify a minimum severity of errors to consider.
Valid values in order of severity are `error`, `warning`, `info`, and `style`.
If you omit this option, Sider will use a ShellCheck's default one.

### `norc`

This option allows you not to try to look for ShellCheck's configuration files.
For more details about the configuration file, see the ShellCheck's [manual](https://github.com/koalaman/shellcheck/blob/master/shellcheck.1.md#rc-files).
