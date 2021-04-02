---
id: custom-configuration
title: Custom Analysis Configuration
sidebar_label: Custom Analysis Configuration
hide_title: true
---

# Custom Analysis Configuration

Usually, you don't need to do any special configuration for Sider to start analyzing your code.
However, Sider also offers advanced settings for special cases via the configuration file named `sider.yml` (learn more about [YAML](https://yaml.org/)).

> `sideci.yml` is still supported for the backward compatibility, but it will be unsupported in the future. Please rename it to `sider.yml` as possible.

## Configuration file

Add a file named `sider.yml` in your project's root directory. Here is an example:

```yaml
# This is a YAML file. See <https://yaml.org>.
linter:
  rubocop:
    config: "lint_yml/.myrubocop.yml"

  eslint:
    root_dir: "frontend/"
    npm_install: false
    config: "frontend/.eslintrc"

  stylelint:
    root_dir: "app/assets/stylesheets/"
    glob: "**/*.{css,scss}"

ignore:
  - "images/**"
```

The options you can specify in `sider.yml` are grouped into the following categories:

1. Analyzer-specific options (under `linter`)
   - [`linter.brakeman`](../tools/ruby/brakeman.md)
   - [`linter.checkstyle`](../tools/java/checkstyle.md)
   - [`linter.clang_tidy`](../tools/cplusplus/clang-tidy.md)
   - [`linter.code_sniffer`](../tools/php/code-sniffer.md)
   - [`linter.coffeelint`](../tools/javascript/coffeelint.md)
   - [`linter.cppcheck`](../tools/cplusplus/cppcheck.md)
   - [`linter.cpplint`](../tools/cplusplus/cpplint.md)
   - [`linter.detekt`](../tools/kotlin/detekt.md)
   - [`linter.eslint`](../tools/javascript/eslint.md)
   - [`linter.flake8`](../tools/python/flake8.md)
   - [`linter.fxcop`](../tools/csharp/fxcop.md)
   - [`linter.golangci_lint`](../tools/go/golangci-lint.md)
   - [`linter.goodcheck`](../tools/others/goodcheck.md)
   - [`linter.hadolint`](../tools/dockerfile/hadolint.md)
   - [`linter.haml_lint`](../tools/ruby/haml-lint.md)
   - [`linter.javasee`](../tools/java/javasee.md)
   - [`linter.jshint`](../tools/javascript/jshint.md)
   - [`linter.ktlint`](../tools/kotlin/ktlint.md)
   - [`linter.languagetool`](../tools/others/languagetool.md)
   - [`linter.misspell`](../tools/others/misspell.md)
   - [`linter.phinder`](../tools/php/phinder.md)
   - [`linter.phpmd`](../tools/php/phpmd.md)
   - [`linter.pmd_cpd`](../tools/others/pmd-cpd.md)
   - [`linter.pmd_java`](../tools/java/pmd.md)
   - [`linter.pylint`](../tools/python/pylint.md)
   - [`linter.querly`](../tools/ruby/querly.md)
   - [`linter.rails_best_practices`](../tools/ruby/rails-best-practices.md)
   - [`linter.reek`](../tools/ruby/reek.md)
   - [`linter.remark_lint`](../tools/markdown/remark-lint.md)
   - [`linter.rubocop`](../tools/ruby/rubocop.md)
   - [`linter.scss_lint`](../tools/css/scss-lint.md)
   - [`linter.shellcheck`](../tools/shellscript/shellcheck.md)
   - [`linter.stylelint`](../tools/css/stylelint.md)
   - [`linter.swiftlint`](../tools/swift/swiftlint.md)
   - [`linter.tslint`](../tools/javascript/tslint.md)
   - [`linter.tyscan`](../tools/javascript/tyscan.md)
2. Non analyzer-specific options
   - [`ignore`](#ignore)
   - [`branches.exclude`](#branchesexclude)

### Analyzer-specific options

You can use `sider.yml` to configure each analyzer's vendor-supplied settings.
Sider also provides extra options for some analyzers that configure how Sider runs the analyzer (for example, some tools might need to run `npm install` before beginning analysis).
See each analyzer's documentation for more details about available options.

---

The following sections describe the available options.

## `linter.<analyzer_id>.root_dir`

_type:_ `string`

This is a common option available to all analyzers. This option specifies a directory in your repository from which Sider should run the analyzer in. For example, if you would like to analyze only files in the `frontend/` directory, you could configure `sider.yml` like this:

```yaml
linter:
  eslint:
    root_dir: "frontend/"
```

In the configuration above, Sider will run ESLint at the `frontend/` directory (perhaps will load files such as `frontend/.eslintrc.js` or `frontend/package.json`).

If you omit this option, Sider will use your repository root directory (sufficient in most cases).

## `linter.<analyzer_id>.dependencies`

_type:_ `string[]`, `map[]`

This is a common option to install dependencies required by analyzers. The option is useful when you do not want to manage dependencies by yourself (such dependencies are often needless at runtime).

We supports the following package managers:

- [Bundler](https://bundler.io) (for Ruby)
- [npm](https://www.npmjs.com) (for JavaScript)
- [Gradle](https://gradle.org) (for Java)

There are some ways to use this option, for example:

```yaml
linter:
  rubocop: # via Bundler
    dependencies:
      - "rubocop" # dependency name
      - { name: "rubocop-rails", version: "2.9.0" } # dependency name and version

  eslint: # via npm
    dependencies:
      - "eslint"
      - "eslint-plugin-react@7.23.1" # npm style: `<name>@<version>`
      - { name: "eslint-plugin-react-hooks", version: "4.2.0" }

  checkstyle: # via Gradle
    dependencies:
      - "com.github.sevntu-checkstyle:sevntu-checks:1.37.1" # Gradle style: `<group>:<name>:<version>`
      - { name: "org.apache.commons:commons-lang3", version: "3.12.0" }
```

See also each package manager's section below.

### For Bundler

If required dependencies (_gems_) are in your `Gemfile.lock`, Sider will install the dependencies with no configuration.
Also, if no `Gemfile.lock`, Sider will use our default version. This means that you basically have to do nothing.

Sider decides a Ruby analyzer version in the following order:

1. by the `dependencies` option in your `sider.yml` file
2. in your `Gemfile.lock` file
3. our default version

If a gem version is omitted in `linter.<id>.dependencies`, the version installed will depend on your `Gemfile.lock` content.
For example, when `Gemfile.lock` includes `rubocop-rails (2.9.0)` and does not include `rubocop-rspec`:

```yaml
linter:
  rubocop:
    dependencies:
      - "rubocop-rails" # install the version 2.9.0 (present in `Gemfile.lock`)
      - "rubocop-rspec" # install the latest version (absent in `Gemfile.lock`)
```

#### Install gems from third-party RubyGems repository

You can also use an alternate RubyGems repository via the `source` option:

```yaml
linter:
  rubocop:
    dependencies:
      - name: "rubocop-mycompany"
        version: "0.63.0"
        source: "https://gems.mycompany.com"
```

#### Install gems from Git repository

You can also install gems from a Git repository via the `git` option. Please note that the `git` option cannot be specified with `version` or `source`.

```yaml
linter:
  rubocop:
    dependencies:
      - name: "rubocop-mycompany-standard"
        git:
          repo: "https://github.com/mycompany/rubocop-mycompany-standard.git"
          branch: "main"
      - name: "rubocop-mycompany-extensions"
        git:
          repo: "git@github.com/mycomapny/rubocop-mycompany-extensions.git"
          tag: "v0.63.0"
```

The `git` option receives the following options:

| Name     | Type     | Description                                                                          |
| -------- | -------- | ------------------------------------------------------------------------------------ |
| `repo`   | `string` | Git repository location. The repository can be accessed via HTTP(S) or SSH protocols |
| `branch` | `string` | Branch name                                                                          |
| `tag`    | `string` | Tag name                                                                             |
| `ref`    | `string` | Ref name                                                                             |

If you would like to install a gem located in a private Git repository, see [Private Dependencies](../advanced-settings/private-dependencies.md).

## `linter.<analyzer_id>.gems`

This is an alias of [`linter.<analyzer_id>.dependencies`](#linteranalyzer_iddependencies) for Ruby analysis tools.
Please use `dependencies` instead of `gems` because the latter will be deprecated.

## `linter.<analyzer_id>.npm_install`

_type:_ `boolean`, `string`

For npm-published analyzers such as [ESLint](../tools/javascript/eslint.md) or [stylelint](../tools/css/stylelint.md), you can use the `npm_install` option to configure the behavior of npm dependencies installation. This option accepts one of the following values:

| Value            | Description                                                                             |
| ---------------- | --------------------------------------------------------------------------------------- |
| `true` (default) | Install dependencies via [npm](https://docs.npmjs.com/) or [Yarn](https://yarnpkg.com). |
| `false`          | Do not install any dependencies.                                                        |
| `"production"`   | Install only dependencies for production.                                               |
| `"development"`  | Install only dependencies for development.                                              |

For example:

```yaml
linter:
  eslint:
    npm_install: "development"
  stylelint:
    npm_install: false
```

When the `npm_install` option is not `false`, Sider will try as follows:

1. Check if `package.json` exists. If not present, Sider uses the default version of the analyzers.
2. If `package.json` and `yarn.lock` exist, Sider runs the [`yarn install`](https://yarnpkg.com/lang/en/docs/cli/install/) command.
3. If `package.json` and `package-lock.json` exist, Sider runs the [`npm ci`](https://docs.npmjs.com/cli/ci) command.
4. If `package.json` exists but none of `yarn.lock` and `package-lock.json` exist, Sider runs the [`npm install`](https://docs.npmjs.com/cli/install) command.
5. Checks if the analyzer is installed in the `node_modules` directory.
6. If installed, Sider uses the installed version.
7. If not installed (for any reason), Sider uses the pre-installed default version.
   - In this case, Sider shows warnings.

When the option is `false`, Sider will skip these installation steps and analyze with the pre-installed default version.
You might want to set the option to `false` if you don't configure analyzer and don't want to see warnings.

## `linter.<analyzer_id>.jvm_deps`

_type:_ `string[][]`

For JVM tools such as Checkstyle or ktlint, this option allows you to load third-party rules or plugins. For example:

```yaml
linter:
  checkstyle:
    jvm_deps:
      - [com.github.sevntu-checkstyle, sevntu-checks, 1.37.1]
```

Each element of a `jvm_deps` array must have 3 properties: `[group, name, version]`.
These 3 properties follows the Maven repository style, and you can install dependencies registered in Maven repositories:

The currently supported repositories are:

- Maven Central Repository
- JCenter Maven Repository
- Google's Maven Repository

## `linter.<analyzer_id>.apt`

_type:_ `string`, `string[]`

Development packages provided by the OS environment may be necessary, particularly for projects written in C/C++. Sider lets you install packages with `APT`, which is a package manager for `Debian` based Linux distributions.

The `apt` option allows you to specify a list of development packages your project depends on.
The packages must satisfy the conditions below:

- Packages must be compatible with [our Docker image](https://github.com/sider/devon_rex/blob/HEAD/base/Dockerfile).
- Package names must be suffixed with "-dev".
- Each package name must be formatted as `<name>` or `<name>=<version>`.

Below is an example of how you install the latest version of `libgdbm-dev` and the specific version (0.99.8-2) of `libfastjson-dev`.

```yaml
linter:
  clang_tidy:
    apt:
      - libgdbm-dev
      - libfastjson-dev=0.99.8-2
```

## `linter.<analyzer_id>.include-path`

_type:_ `string`, `string[]`

Some C/C++ analyzers can handle include paths like C/C++ preprocessors can. With Sider, the `include-path` option allows you to add directories to include search paths.

For example:

```yaml
linter:
  clang_tidy:
    include-path:
      - myinclude
      - foo/include
      - /usr/include/libfastjson
```

Sider treats this option as a compilation option `-I` and passes it as command-line arguments internally. For example, Sider executes [Clang-Tidy](../tools/cplusplus/clang-tidy.md) like this:

```console
$ clang-tidy test.cpp -- -Imyinclude -Ifoo/include -I/usr/include/libfastjson
```

If you omit this option, Sider searches for header files that are part of your project and applies the directories of found files to the include search path.

## `ignore`

_type:_ `string[]`

This option allows you to ignore specific files. It helps to improve the analysis execution time and the analysis stability.
The format of each `ignore` item follows [gitignore(5)](https://git-scm.com/docs/gitignore).

In order to use this option, add it as a top-level in `sider.yml` like this:

```yaml
ignore:
  - "*.pdf"
  - "*.mp4"
  - "*.min.*"
  - "images/**"
```

## `branches.exclude`

_type:_ `string[]`

This option allows you to exclude branches from the analysis. If there are branches that are unnecessary for your team to analyze, use the `branches` option.
When setting this option, Sider will not analyze the branch specified in this option.

In order to use this option, add it as a top-level in `sider.yml` like this:

```yaml
branches:
  exclude:
    - main
    - development
    - another_branch
```

With the above setting, Sider will ignore `main`, `development` and `another_branch` branches when these branches (pull requests) are updated or opened. That is, even if these branches have any changes, Sider will not send commit status and not review them.

> If Sider is enabled to make status checks required on GitHub, you cannot merge a branch because Sider will not send the commit status to GitHub.
> In this case, you need to disable the check status setting on your GitHub repository page.

> If you want to know more details about this GitHub setting, read the GitHub documentation; [About required status checks](https://help.github.com/articles/about-required-status-checks/) and [Enabling required status check](https://help.github.com/articles/enabling-required-status-checks/).

You can also use regular expressions as the `exclude` pattern:

```yaml
branches:
  exclude:
    - /^release-.*$/
    - /^dependabot/
```

In the above example, all branches such as `release-20190304` or `dependabot/bundler/aws-partitions-1.202.0` are ignored.
