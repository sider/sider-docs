---
id: private-dependencies
title: Private Dependencies
sidebar_label: Private Dependencies
hide_title: true
---

# Private Dependencies

Analyzing a private project sometimes needs access to another private repository. Your team might be using a Git repository to distribute a private library. This kind of dependency is supported in some tools including Bundler, npm.

We support using SSH to access a private repository during an analysis session.

* You can specify your SSH private key for each project.
* During an analysis session, the `GIT_SSH` environment variable will be set so that your Git access will use that key.

## Uploading the SSH Key

![Add SSH key](../assets/ssh-key-settings.png)

1. Visit the repository setting page.
2. Fill in the text field with the content of the key file.
3. You can specify the description of the SSH key.
4. Save.

> Note that the private key cannot have a passphrase and must be an RSA key.

## Using SSH

Currently, only a few analysis tools use an SSH configuration.

* ESLint (npm install)
* TSLint (npm install)
* CoffeeLint (npm install)
* stylelint (npm install)
* RuboCop (bundle install)

Other tools do not use SSH so adding an SSH key for such tools are not needed.

