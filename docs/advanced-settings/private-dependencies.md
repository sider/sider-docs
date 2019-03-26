---
id: private-dependencies
title: Private Dependencies
sidebar_label: Private Dependencies
hide_title: true
---

# Private Dependencies

Analyzing a private project sometimes needs access to another private repository. Your team might be using a Git repository to distribute a private library. This kind of dependency is supported in some tools including Bundler, npm.

We support using SSH to access a private repository during an analysis session.

## Generating an SSH private key

![Generate SSH private key](../assets/ssh-key-generate-key.png)

When you click the “Generate Key” button, Sider generates a 4096 bit RSA key used in analysis sessions automatically.

> We strongly recommend against adding secret keys to public repositories. Their analysis results are publicly accessible, and your secret keys might get exposed.

## Downloading the SSH public key

![Download SSH public key](../assets/ssh-key-download-key.png)

After generating, you can download the SSH public key used in analysis sessions from this page. The key is able to be added as [Deploy Keys](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) in GitHub.

## Using SSH

Currently, only a few analysis tools use an SSH configuration.

* [ESLint](../tools/javascript/eslint.md) (npm install)
* [TSLint](../tools/javascript/tslint.md) (npm install)
* [CoffeeLint](../tools/javascript/coffeelint.md) (npm install)
* [stylelint](../tools/css/stylelint.md) (npm install)
* [RuboCop](../tools/ruby/rubocop.md) (bundle install)
* [Reek](../tools/ruby/reek.md) (bundle install)
* [Rails Best Practices](../tools/ruby/rails-bestpractices.md) (bundle install)

Other tools do not use SSH so adding an SSH key for such tools are not needed.

