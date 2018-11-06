# Rails Best Practices

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 1.19.3 | Ruby 2.5.1 | [https://rails-bestpractices.com/](https://rails-bestpractices.com/) |

## Getting Started

To start using Rails Best Practices, enable it in [Repository Settings](../../getting-started/repository-settings.md).

To customize Rails Best Practices, use the standard config file at `config/rails_best_practices.yml`.

## Default Configuration

Sider uses the following settings for Rails Best Practices if there is no config file in your repository:

* [Sider recommended settings for Rails Best Practices](https://github.com/actcat/sideci_config/blob/master/ruby/rails_best_practices/sideci_rails_best_practices.yml)

## Configuration via `sideci.yml`

Here are some example settings for Rails Best Practices in `sideci.yml`, under `rails_best_practices`:

```yaml:sideci.yml
linter:
  rails_best_practices:
    options:
      vendor: false
      spec: true
      test: true
      features: true
      exclude: foo_dir
      only: bar_dir
```

### `options`

This controls the command line options that are passed to `rails_best_practices`.

#### `vendor`

This option controls whether to include files in `vendor` directory. When `true`, the vendor files will be inspected. The default value in Sider is `true`.

#### `spec`

This option controls whether to include files in `spec` directory. When `true`, the spec files will be inspected. The default value in Sider is `false`.

#### `test`

This option controls whether to include files in `test` directory. When `true`, the test files will be inspected. The default value in Sider is `false`.

#### `features`

This option controls whether to include files in `features` directory. When `true`, the features files will be inspected. The default value in Sider is `false`.

#### `exclude`

This option allows you to exclude files/directories from analysis. If you would like to set up multiple files/directories, write them as a comma separated list:

```yaml:sideci.yml
linter:
  rails_best_practices:
    options:
      exclude: app/controllers/foo/,app/models/bar.rb
```

#### `only`

This option manages files/directories to analyze. When this option is present, Sider analyzes only those files and directories that match one of the patterns included. If you would like to set up multiple files/directories, write them as a comma separated list:

```yaml:sideci.yml
linter:
  rails_best_practices:
    options:
      only: app/controllers/,app/models/,lib/foo.rb
```

