# Custom Analysis Configuration

You don't need to do any special configuration for Sider to start analyzing your code. However, Sider also offers advanced settings for special cases via the sideci.yml file.

## Configuration via `sideci.yml`

First, add a file named `sideci.yml` in your project's root directory.

```yaml:sideci.yml
linter:
  rubocop:
    config: 'lint_yml/.myrubocop.yml'

  eslint:
    root_dir: 'frontend'
    npm_install: true
    config: 'frontend/.eslintrc'
    ext: 'js,jsx'

  stylelint:
    root_dir: 'app/assets/stylesheets'
    glob: '**/*.{css,scss}'
```

The options you can specify in `sideci.yml` are grouped into two categories:

1. Analyzer specific options
2. Common options available to all analyzers

Currently, `root_dir` is the only common option.

## Analysis tool specific configuration

You can use `sideci.yml` to configure each analyzer's vendor-supplied settings. Sider also provides extra options for some analyzers that configure how Sider runs the analyzer (for example, some tools might need to run `npm install` before beginning analysis). The [tools documentation](../tools/README.md) has more information about which options are available for each tool.

## `root_dir` option

This is a common option available to all analyzers. This option specifies a directory in your repository from which Sider should run the analyzer in. For example, if you have all your JavaScript files in the `./frontend` directory, you could configure `sideci.yml` like this:

```yaml:sideci.yml
linter:
  eslint:
    root_dir: 'frontend'
```

Sider will run ESLint analysis in `./frontend` directory.

## `ignore` option

This option allows you to ignore specific files. It helps to improve the analysis execution time and the analysis stability.

In order to use this option, add it to `sideci.yml` like this:

```yaml:sideci.yml
linter:
  # Some linter settings...
ignore:
  - ".pdf"
  - ".mp4"
  - "images/**"
```

## `branches` option

This option allows you to exclude branches from the analysis. If there are branches that are unnecessary for your team to analyze, use the `branches` option.
When setting this option, Sider will not analyze the branch specified in this option.

In order to use this option, add it to `sideci.yml` like this:

```yaml:sideci.yml
linter:
  # Some linter settings...
branches:
  exclude:
    - master
    - development
    - another_branch
```

With the above setting, Sider will ignore `master`, `development` and `another_branch` branches when these branches(pull requests) are updated or opened. That is, even if these branches have any changes, Sider will not send commit status and not review them.

{% hint style="hint" %}
If Sider is enabled to make status checks required on GitHub, you cannot merge a branch because Sider will not send the commit status to GitHub.
In this case, you need to disable the check status setting on your GitHub repository page.

If you want to know more details about this GitHub setting, read the GitHub documentation; [About required status checks](https://help.github.com/articles/about-required-status-checks/) and [Enabling required status check](https://help.github.com/articles/enabling-required-status-checks/).
{% endhint %}

