# Rails Best Practices

| Supported Version | Language | Web Site |
|:--:|:--:|:--:|
| 1.19.2 | Ruby 2.5.1 | [https://rails-bestpractices.com/](https://rails-bestpractices.com/) |

## Getting Started

To start using Rails Best Practices, enable it in repository setting.

If you want some customization, add Rails Best Practices config file at `config/rails_best_practices.yml`.

## Default Configuration

Sider uses the following settings of Rails Best Practices if there is no config file in your repository.

* [Sider recommended settings for Rails Best Practices](https://github.com/actcat/sideci_config/blob/master/ruby/rails_best_practices/sideci_rails_best_practices.yml)

## Configuration via `sideci.yml`

Here are example settings for Rails Best Practices under `rails_best_practices`.

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

This option controls command line options that are given to `rails_best_practices`.

#### `vendor`

This option controls whether to include files of `vendor` directory. When option is declared `true`, the vendor files will be inspected. The default value in Sider is `true`.

#### `spec`

This option controls whether to include files of `spec` directory. When options is declared `true`, the spec files will be inspected. The default value in Sider is `false`.

#### `test`

This option controls whether to include files of `test` directory. When options is declared `true`, the test files will be inspected. The default value in Sider is `false`.

#### `features`

This option controls whether to include files of `features` directory. When options is declared `true`, the features files will be inspected. The default value in Sider is `false`.

#### `exclude`

This option controls files/directories to exclude them from analysis. If you would like to set up multiple files/directories, write them as a comma separated list:

```yaml:sideci.yml
linter:
  rails_best_practices:
    options:
      exclude: app/controllers/foo/,app/models/bar.rb
```

#### `only`

This option manages files/directories to analyze. When this option is declared, Sider analyzes only matching a pattern. If you would like to set up multiple files/directories, write them as a comma separated list:

```yaml:sideci.yml
linter:
  rails_best_practices:
    options:
      only: app/controllers/,app/models/,lib/foo.rb
```

