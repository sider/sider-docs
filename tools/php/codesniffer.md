# PHP\_CodeSniffer

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 2.9.1, 3.3.0 | PHP 7.1.9 | [http://pear.php.net/package/PHP\_CodeSniffer](http://pear.php.net/package/PHP_CodeSniffer) |

## Getting Started

To start using PHP\_CodeSniffer, enable it in repository setting. To customize standard you want to follow, add `sideci.yml` in your repository and write down your desired standard in it.

```yaml:sideci.yml
linter:
  code_sniffer:
    dir: app/
    options:
      standard: CakePHP
```

### Analyzer Version, 2 or 3

Sider assumes you are using PHP\_CodeSniffer 2.9, for compatibility. If you want to use version 3, declare that in `sideci.yml`.

```yaml:sideci.yml
linter:
  code_sniffer:
    version: 3
```

## Default Configuration

Sider tries to detect standard and target directory for your project automatically when you specifies nothing in `sideci.yml`. If it cannot find appropriate standard, it assumes PSR2 as its standard and analyzes all PHP files in your repository.

### Standard and Analysis Target

Sider tries to detect the most suitable standard and target directory for your project, based on the framework your project is using.

When you are using CodeSniffer version 2, the following standards can be auto-detected:

* `CakePHP`
* `FuelPHP`
* `CodeIgniter`
* `Symfony`

When you are using CodeSniffer version 3, the following standards can be auto-detected:

* `CakePHP`
* `Symfony`

The autodetection is based on file and directory structure. For the case auto detection fails, you can specify standard in `sideci.yml`.

## Configuration via `sideci.yml`

Example setting for PHP\_CodeSniffer under `code_sniffer` is the following:

```yaml:sideci.yml
linter:
  code_sniffer:
    version: 3
    dir: app/
    options:
      standard: phpcs.xml
      extensions: php,inc,lib
      encoding: utf-8
```

### `version`

This option controls version of PHP\_CodeSniffer in running. Default value is `2`.

### `dir`

This option controls directories Sider inspects. The default value is depended on frameworks PHP\_CodeSniffer supports. If you use no frameworks or use any frameworks PHP\_CodeSniffer does not support, `./` is adopted by default.

In case you would like to exclude specific directories, you should write it in your custom ruleset file.

### `options`

This option controls command line options given to phpcs.

#### `standard`

This option controls coding standard of your project. If you leave this value absent, Sider tries to detect standard automatically.

`PSR2` is used when auto detection fails.

You available your custom ruleset to declare it in a `standard` like `/path/to/MyStandard`. Furthermore, you can use other standards which PHP\_CodeSniffer supports below:

```bash
$ phpcs -i
The installed coding standards are FuelPHP, Symfony2, CodeIgniter, CakePHP, PEAR, Zend, Squiz, PSR2, PHPCS, PSR1, MySource, WordPress-Docs, WordPress-Extra, WordPress-VIP, WordPress and WordPress-Core
```

```bash
$ phpcs3 -i
The installed coding standards are MySource, PEAR, PSR1, PSR2, Squiz, Zend, Symfony, CakePHP, WordPress-Docs, WordPress-Core, WordPress, WordPress-Extra and WordPress-VIP
```

#### `extensions`

This option controls extensions of files Sider inspects. The default value is `php`.

#### `encoding`

This option controls file encoding.

## Future Support for PHP\_CodeSniffer 2 in Sider

Sider has a plan to run with version `2` by default until 20th August 2018. After the date, we will run version `3.x` by default. Thus we recommend you to use version 3 in a case of some reasons. However, you can use version `2` for a while even if you set `version: 2` in `sideci.yml`.

For details about it, see [this article](https://blog.sideci.com/sider-will-use-php-codesniffer-version-3-by-default-dd09e73273d5).

