---
id: phpmd
title: PHPMD
sidebar_label: PHPMD
hide_title: true
---

# PHPMD

| Supported Version | Language  | Website           |
| :---------------- | :-------- | :---------------- |
| 2.8.2             | PHP 7.4.4 | https://phpmd.org |

**PHPMD** is an analysis tool focused on detecting code smells and possible errors in source code.

## Getting Started

To start using PHPMD, enable it in your [repository settings](../../getting-started/repository-settings.md).
You can use `sider.yml` to configure PHPMD.

## Performance Issues

PHPMD sometimes raises analysis timeout with a larger codebase.

To mitigate this, Sider deletes files that are not changed in the pull request.
This behavior is automatically done and cannot be disabled.

If PHPMD still raises timeout, you can reduce target files of PHPMD analysis by using the [`target`](#target) option:

```yaml
linter:
  phpmd:
    target:
      - index.php
      - wp-content/
```

## Configuration via `sider.yml`

Here is are some example settings for PHPMD in `sider.yml`:

```yaml
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
    custom_rule_path:
      - Custom_PHPMD_Rule.php
      - custom/phpmd/rules/**/*.php
```

You can use several options to fine-tune PHPMD to your project:

| Name                                                                        | Type                 | Default | Description                                             |
| --------------------------------------------------------------------------- | -------------------- | ------- | ------------------------------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`             | -       | A root directory.                                       |
| [`target`](#target)                                                         | `string`, `string[]` | `.`     | Set target files or directories to analyze.             |
| [`rule`](#rule)                                                             | `string`             | -       | Specify rulesets or your own ruleset file.              |
| [`minimumpriority`](#minimumpriority)                                       | `integer`            | -       | Set the priority threshold which PHPMD ignores.         |
| [`suffixes`](#suffixes)                                                     | `string`             | `php`   | Set extensions of filenames for analysis.               |
| [`exclude`](#exclude)                                                       | `string`             | -       | Set files or directories to exclude from analysis.      |
| [`strict`](#strict)                                                         | `boolean`            | `false` | If `true`, PHPMD will report `@SuppressWarnings` nodes. |
| [`custom_rule_path`](#custom_rule_path)                                     | `string[]`           | `[]`    | File path(s) writing your custom rule(s).               |

### `target`

This option controls target paths to inspect. This is an optional setting that you do not need to specify if you don't have any [performance issues](#performance-issues).

### `rule`

This option controls ruleset(s) that is passed to `phpmd`. You can specify a comma-separated list of ruleset names:

```yaml
linter:
  phpmd:
    rule: cleancode,design,unusedcode
```

The valid names are:

- `cleancode`
- `codesize`
- `controversial`
- `design`
- `naming`
- `unusedcode`

You can also specify a ruleset file:

```yaml
linter:
  phpmd:
    rule: path/to/your-ruleset.xml
```

If you omit this option, Sider analyzes by using the [default configuration](https://github.com/sider/runners/blob/master/images/phpmd/sider_config.xml).

For more information about PHPMD rulesets, see the [PHPMD rule documentation](https://phpmd.org/rules/index.html).

### `minimumpriority`

This option controls the rule priority threshold. Rules below the priority you declare will be ignored.

### `suffixes`

This option controls valid file extensions. Use a comma-separated list to inspect multiple file extensions, e.g. `php,phtml`.

### `exclude`

This option controls directories to exclude from analysis objects.
Use a comma-separated list to ignore multiple directories, e.g. `app/logs/,web/bundles/`.

### `strict`

This option controls whether to report nodes that have the `@SuppressWarnings` annotation.
To learn more about `@SuppressWarnings`, see the [PHPMD documentation](https://phpmd.org/documentation/suppress-warnings.html).

### `custom_rule_path`

This option controls file path(s) where you write your own custom rule(s). You can use also _glob_ format.
You will need to use it along with the [`rule`](#rule) option. For example:

Your `sider.yml`:

```yaml
linter:
  phpmd:
    rule: custom_ruleset.xml
    custom_rule_path:
      - Custom_PHPMD_Rule.php
      - custom/phpmd/rules/**/*.php
```

Your `custom_ruleset.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<ruleset name="Your Custom Ruleset">
  <rule name="SomeYourCustomRule"
        message="Please do not this."
        class="Custom_PHPMD_Rule"
        externalInfoUrl="https://example.com/phpmd/rules/custom-rule">
    <priority>1</priority>
  </rule>
</ruleset>
```

To learn about writing a custom rule, see the [PHPMD documentation](https://phpmd.org/documentation/writing-a-phpmd-rule.html).
