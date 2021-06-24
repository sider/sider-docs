---
id: shellcheck
title: ShellCheck
sidebar_label: ShellCheck
hide_title: true
---

# ShellCheck

| Supported Version | Language     | Website                    |
| ----------------- | ------------ | -------------------------- |
| 0.7.2             | Shell script | https://www.shellcheck.net |

ShellCheck is a static analysis tool to find bugs in shell script code. It gives warnings and suggestions.

## Getting Started

To start using ShellCheck, enable it in your [repository settings](../../getting-started/repository-settings.md).

For more details, see the ShellCheck's [CLI manual](https://github.com/koalaman/shellcheck/blob/HEAD/shellcheck.1.md) and [Wiki](https://github.com/koalaman/shellcheck/wiki).

## Configuration

Here is a configuration example via [`sider.yml`](../../getting-started/custom-configuration.md):

```yaml
linter:
  shellcheck:
    target: "src/**/*.{sh,bash}"
    include: [SC2104, SC2105]
    exclude: [SC1000, SC1118]
    enable: all
    shell: bash
    severity: error
    norc: true
```

You can use the following options to fine-tune ShellCheck to your project.

| Name                                                                                  | Type                          | Default       |
| ------------------------------------------------------------------------------------- | ----------------------------- | ------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`                      | -             |
| [`target`](#target)                                                                   | `string`, `string[]`, `map[]` | _(see below)_ |
| [`include`](#include)                                                                 | `string`, `string[]`          | -             |
| [`exclude`](#exclude)                                                                 | `string`, `string[]`          | -             |
| [`enable`](#enable)                                                                   | `string`, `string[]`          | -             |
| [`shell`](#shell)                                                                     | `string`                      | -             |
| [`severity`](#severity)                                                               | `string`                      | -             |
| [`norc`](#norc)                                                                       | `boolean`                     | `false`       |

### `target`

This option allows you to specify files to analyze. Glob patterns are also available.

The default value is:

```Yaml
linter:
  shellcheck:
    target:
      - "**/*.{bash,bats,dash,ksh,sh}"
      - shebang: true
```

`shebang: true` is a special form. if enabling this form, Sider analyzes files including a [shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) like `#!/bin/sh` even if they do not have a file extension like `.sh`.

For example, if you have a file named `hello` including the following content, Sider analyzes it.

```sh
#!/bin/sh

echo "This script's filename is `hello`."
```

If you want to disable this shebang behavior, explicitly specify `shebang: false` as follows:

```yaml
linter:
  shellcheck:
    target:
      - "**/*.{bash,sh}"
      - shebang: false
```

### `include`

This option allows you to include only rules you want, e.g. `SC2104` or `SC2105`.

### `exclude`

This option allows you to exclude rules you want, e.g. `SC2104` or `SC2105`.

### `enable`

This option allows you to enable the predefined optional checks.
The special name `all` enables all of them.

For example:

```yaml
linter:
  shellcheck:
    enable: all
```

You can see a list of all the optional checks via `shellcheck --list-optional` command.
Here is an example to enable some optional checks:

```yaml
linter:
  shellcheck:
    enable:
      - add-default-case
      - avoid-nullary-conditions
```

### `shell`

This option allows you to specify a shell dialect. Valid values are `sh`, `bash`, `dash`, and `ksh`.
If omitted, Sider deduces it automatically.

### `severity`

This option allows you to specify a minimum severity of errors to consider.
Valid values in order of severity are `error`, `warning`, `info`, and `style`.
If omitted, Sider uses the ShellCheck's default one.

### `norc`

This option allows you to select whether looking for [ShellCheck's configuration files](https://github.com/koalaman/shellcheck/blob/HEAD/shellcheck.1.md#rc-files).
