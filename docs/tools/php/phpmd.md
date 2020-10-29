---
id: phpmd
title: PHPMD
sidebar_label: PHPMD
hide_title: true
---

# PHPMD

| Supported Version | Language   | Website           |
| ----------------- | ---------- | ----------------- |
| 2.9.1             | PHP 7.4.11 | https://phpmd.org |

**PHPMD** is a static analysis tool focused on detecting code smells and possible errors in your PHP code.

## Getting Started

To start using PHPMD, enable it in your [repository settings](../../getting-started/repository-settings.md).

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

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  phpmd:
    target:
      - index.php
      - wp-content/
    rule:
      - codesize
      - unusedcode
      - my_custom_ruleset.xml
    minimumpriority: 3
    suffixes: [php, phtml]
    exclude:
      - app/vendor/
      - "test/*.php"
    strict: true
    custom_rule_path:
      - Custom_PHPMD_Rule.php
      - "custom/phpmd/rules/**/*.php"
```

You can use several options to fine-tune PHPMD to your project:

| Name                                                                                  | Type                 | Default |
| ------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -       |
| [`target`](#target)                                                                   | `string`, `string[]` | `.`     |
| [`rule`](#rule)                                                                       | `string`, `string[]` | -       |
| [`minimumpriority`](#minimumpriority)                                                 | `integer`            | -       |
| [`suffixes`](#suffixes)                                                               | `string`, `string[]` | `php`   |
| [`exclude`](#exclude)                                                                 | `string`, `string[]` | -       |
| [`strict`](#strict)                                                                   | `boolean`            | `false` |
| [`custom_rule_path`](#custom_rule_path)                                               | `string[]`           | `[]`    |

See also the [PHPMD document](https://phpmd.org/documentation/index.html) for details.

### `target`

This option allows you to specify files or directories to analyze.

### `rule`

This option allows you to specify the predefined ruleset names or your custom ruleset file paths.
The value can be a comma-separated list.

Here are the available rulesets:

- `cleancode`
- `codesize`
- `controversial`
- `design`
- `naming`
- `unusedcode`

If omitted, Sider uses the [default configuration](https://github.com/sider/runners/blob/master/images/phpmd/sider_config.xml).

If you want to learn more, see the [PHPMD ruleset document](https://phpmd.org/rules/index.html).

### `minimumpriority`

This option allows you to specify the rule priority threshold.
Rules with lower priority than the specified value will not be reported.

### `suffixes`

This option allows you to specify file extensions to analyze.
Use a comma-separated list for multiple values, e.g. `php,phtml`.

### `exclude`

This option allows you to specify directories to exclude from analysis objects.
You can use asterisk patterns and use a comma-separated list for multiple values, e.g. `src/foo/*.php,*src/foo/*`.

### `strict`

This option allows you to specify whether reports nodes that have the [`@SuppressWarnings` annotation](https://phpmd.org/documentation/suppress-warnings.html) or not.

### `custom_rule_path`

This option allows you to specify your own [custom rule PHP file](https://phpmd.org/documentation/writing-a-phpmd-rule.html) paths.
_Glob_ pattern is also available.
You need to use it along with the [`rule`](#rule) option. For example:

```yaml
# sider.yml
linter:
  phpmd:
    rule: custom_ruleset.xml
    custom_rule_path:
      - Custom_PHPMD_Rule.php
      - "custom/phpmd/rules/**/*.php"
```

```xml
<!-- custom_ruleset.xml -->
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
