# PHPMD

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 2.6.0 | PHP 7.1.9 | [https://phpmd.org/](https://phpmd.org/) |

## Getting Started

To start using PHPMD, enable it in repository setting.

To customize the analysis, configure by using `sideci.yml`.

## Using Your Configuration File

When you have own ruleset.xml for your project, you can use the file to setup rule set. Specify the path to `rule` option in `sideci.yml`.

```yaml:sideci.yml
linter:
  phpmd:
    options:
      rule: ruleset.xml
```

## Performance Issue

PHPMD does not run fast, and sometimes analysis sessions time out.

To mitigate the difficulty, Sider deletes files that are not changed in the pull request. This is automatically done \(and you cannot disable that\).

If it still times out, you can limit the target of PHPMD analysis by using `sideci.yml`.

```yaml:sideci.yml
linter:
  phpmd:
    target:
      - index.php
      - wp-content
```

The `target` option controls the PHPMD command line that is used in analysis.

## Default Configuration

When you leave `rule` option undefined in `sideci.yml`, Sider runs PHPMD with our recommended setting. The recommended setting is available in our GitHub repository.

* [Sider recommended settings for PHPMD](https://github.com/actcat/sideci_config/blob/master/php/phpmd/sideci_config.xml)

## Configuration via `sideci.yml`

Here is an example settings for PHPMD under `phpmd`:

```yaml:sideci.yml
linter:
  phpmd:
    target:
      - index.php
      - wp-content
    options:
      rule: codesize,unusedcode
      minimumpriority: 3
      suffixes: php,phtml
      exclude: app/Vendor/
      strict: true
```

### `target`

This option controls target paths to inspect. This is an optional setting and you do not need to specify this if you don't have any performance issue.

### `options`

This option controls command line options that are given to phpmd.

#### `rule`

This option controls `--rule` command line option that are given to `phpmd`. You can specify a comma separated rule names or an array of rule name.

The valid rule names are the following:

* `cleancode`
* `codesize`
* `controversial`
* `design`
* `naming`
* `unusedcode`

You can also specify a rule set file name.

```yaml:sideci.yml
linter:
  phpmd:
    options:
      rule: ruleset.xml
```

If you need the detail of rules or how to customize ruleset, see [PHPMD - PHP Mess Detector: Documentation\#Rules](https://phpmd.org/rules/index.html).

#### `minimumpriority`

This option controls the rule priority threshold. The lower priority rules you declare will not be used.

#### `suffixies`

This option controls valid filename extensions. Write comma-separated in order to inspect multiple extensions files. e.g. `php,phtml`.

#### `exclude`

This option controls directories to exclude from analysis objects. Write comma-separated in order to inspect plural directories. e.g. `app/logs/,web/bundles/`.

#### `strict`

This option controls whether to report nodes with `@SuppressWarnings` annotation. Default value is false. In order to learn more about the details of `@SuppressWarnings`, see [PHPMD Suppressing Warnings](https://phpmd.org/documentation/suppress-warnings.html).

