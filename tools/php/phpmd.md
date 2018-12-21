# PHPMD

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 2.6.0 | PHP 7.3.0 | [https://phpmd.org/](https://phpmd.org/) |

## Getting Started

To start using PHPMD, enable it in [Repository Settings](../../getting-started/repository-settings.md).

You can use `sideci.yml` to configure PHPMD.

## Using Your Configuration File

If you have your own `ruleset.xml` for your project, you can add it under the `rule` option in `sideci.yml`.

```yaml:sideci.yml
linter:
  phpmd:
    rule: ruleset.xml
```

## Performance Issues

PHPMD does not run fast, and sometimes analysis sessions time out.

To mitigate this, Sider deletes files that are not changed in the pull request. This is done automatically done, and cannot be disabled.

If it still times out, you can limit the target of PHPMD analysis by using the `target` option:

```yaml:sideci.yml
linter:
  phpmd:
    target:
      - index.php
      - wp-content
```

## Default Configuration

If you leave the `rule` option undefined in `sideci.yml`, Sider runs PHPMD with our recommended settings. The recommended settings are available in our GitHub repository:

* [Sider recommended settings for PHPMD](https://github.com/actcat/sideci_config/blob/master/php/phpmd/sideci_config.xml)

## Configuration via `sideci.yml`

Here is are some example settings for PHPMD in `sideci.yml`:

```yaml:sideci.yml
linter:
  phpmd:
    target:
      - index.php
      - wp-content
    rule: codesize,unusedcode
    minimumpriority: 3
    suffixes: php,phtml
    exclude: app/Vendor/
    strict: true
```

### Options

You can use several options to fine-tune PHPMD to your project:

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`target`](#target) | `array<string>` | Set target files or directories to analyze. |
| [`rule`](#rule) | `string` | Specify coding rules or your own rule set file. |
| [`minimumpriority`](#minimumpriority) | `integer` | Set the priority threshold which PHPMD ignores.  |
| [`suffixes`](#suffixes) | `string` | Set extensions of filenames for analysis. |
| [`exclude`](#exclude) | `string` | Set files or directories to exclude from analysis. |
| [`strict`](#strict) | `boolean` | If `true`, PHPMD will report `@SuppressWarnings` nodes. |

#### `target`

This option controls target paths to inspect. This is an optional setting that you do not need to specify if you don't have any performance issues.

#### `rule`

This option controls `--rule` command line option that is passed to `phpmd`. You can specify a comma-separated list of rule names, or an array of rule names.

The valid rule names are:

* `cleancode`
* `codesize`
* `controversial`
* `design`
* `naming`
* `unusedcode`

You can also specify a rule set file name:

```yaml:sideci.yml
linter:
  phpmd:
    rule: ruleset.xml
```

For more information about PHPMD rulesets, see [PHPMD - PHP Mess Detector: Documentation\#Rules](https://phpmd.org/rules/index.html).

#### `minimumpriority`

This option controls the rule priority threshold. Rules below the priority you declare will be ignored.

#### `suffixes`

This option controls valid filename extensions. Use a comma-separated list to inspect multiple file extensions, e.g. `php,phtml`.

#### `exclude`

This option controls directories to exclude from analysis objects. Use a comma-separated list to ignore multiple directories, e.g. `app/logs/,web/bundles/`.

#### `strict`

This option controls whether to report nodes that have the `@SuppressWarnings` annotation. The default is `false`. To learn more about `@SuppressWarnings`, see [PHPMD Suppressing Warnings](https://phpmd.org/documentation/suppress-warnings.html).

