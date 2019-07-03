---
id: custom-configuration
title: Custom Analysis Configuration
sidebar_label: Custom Analysis Configuration
hide_title: true
---

# Custom Analysis Configuration

You don't need to do any special configuration for Sider to start analyzing your code. However, Sider also offers advanced settings for special cases via the `sider.yml` file.

## Configuration via `sider.yml`

First, add a file named `sider.yml` in your project's root directory.

```yaml
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

The options you can specify in `sider.yml` are grouped into two categories:

1. Analyzer specific options
2. Common options available to all analyzers

Currently, `root_dir` is the only common option.

## Analysis tool specific configuration

You can use `sider.yml` to configure each analyzer's vendor-supplied settings. Sider also provides extra options for some analyzers that configure how Sider runs the analyzer (for example, some tools might need to run `npm install` before beginning analysis). The tools documentation has more information about which options are available for each tool.

## `root_dir` option

This is a common option available to all analyzers. This option specifies a directory in your repository from which Sider should run the analyzer in. For example, if you have all your JavaScript files in the `./frontend` directory, you could configure `sider.yml` like this:

```yaml
linter:
  eslint:
    root_dir: 'frontend'
```

Sider will run ESLint analysis in `./frontend` directory.

## `gems` option

Some analyzers written in Ruby can be customized with third-party [gems](https://rubygems.org/). With Sider, you can use [Bundler](https://bundler.io/) to install any gem. The following is an example of installing RuboCop plugins or configuration gems:

```yaml
linter:
  rubocop:
    gems:
      - name: 'meowcop'
        version: '1.17.0'
```

You can also set the version of the analyzer you want to use. However, the version must meet Sider's constraints. Please refer to each analyzer page.

```yaml
linter:
  rubocop:
    gems:
      - name: 'rubocop'
        version: '0.66.0'
```

### Understanding the analyzer version

Sider decides the analyzer version in the following order:

1. `gems` option in `sider.yml`
2. `Gemfile.lock`
3. The default version

However, if the version written in `Gemfile.lock` does not satisfy our constraints, that version is skipped.

### Install gems from Gemfile.lock

If you want to additionally install a specific gem written in `Gemfile.lock`, you can omit the `version` as follows:

```yaml
linter:
  rubocop:
    gems:
      - 'rubocop-rspec'
```

If the gem is not found in `Gemfile.lock`, the latest version is installed.

### Install gems from third-party RubyGems repository

You can select an alternate RubyGems repository as a gem source via the source option:

```yaml
linter:
  rubocop:
    gems:
      - name: "rubocop-mycompany"
        version: "0.63.0"
        source: "https://gems.mycompany.com"
```

### Install gems from git repositories

You can also install a gem in a git repository. Please note that the git option cannot be specified with version or source.

```yaml
linter:
  rubocop:
    gems:
      - name: "rubocop-mycompany-standard"
        git:
          repo: "https://github.com/mycompany/rubocop-mycompany-standard.git"
          branch: "master"
      - name: "rubocop-mycompany-extensions"
        git:
          repo: "git@github.com/mycomapny/rubocop-mycompany-extensions.git"
          tag: "v0.63.0"
```

`git` option has options below:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `repo` | `string` | Git repository location. The repository can be accessed via HTTP(S)/SSH protocols. |
| `branch` | `string` | Branch name. |
| `tag` | `string` | Tag name. |
| `ref` | `string` | Ref name. |

If you would like to install a gem located in a private git repository, see [private dependencies guide](../advanced-settings/private-dependencies.md) and configure SSH key.

## `ignore` option

This option allows you to ignore specific files. It helps to improve the analysis execution time and the analysis stability.

In order to use this option, add it to `sider.yml` like this:

```yaml
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

In order to use this option, add it to `sider.yml` like this:

```yaml
linter:
  # Some linter settings...
branches:
  exclude:
    - master
    - development
    - another_branch
```

With the above setting, Sider will ignore `master`, `development` and `another_branch` branches when these branches(pull requests) are updated or opened. That is, even if these branches have any changes, Sider will not send commit status and not review them.

> If Sider is enabled to make status checks required on GitHub, you cannot merge a branch because Sider will not send the commit status to GitHub.
> In this case, you need to disable the check status setting on your GitHub repository page.

> If you want to know more details about this GitHub setting, read the GitHub documentation; [About required status checks](https://help.github.com/articles/about-required-status-checks/) and [Enabling required status check](https://help.github.com/articles/enabling-required-status-checks/).

You can also use regular expressions as the `exclude` pattern:

```yaml
branches:
  exclude:
    - /^release-.*$/
```

In the above example, all branches such as `release-20190304` are ignored.
