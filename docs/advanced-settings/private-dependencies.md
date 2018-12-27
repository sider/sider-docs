---
id: private-dependencies
title: Private Dependencies
sidebar_label: Private Dependencies
---

Analyzing a private project sometimes needs access to another private repository. Your team might be using a Git repository to distribute a private library. This kind of dependency is supported in some tools including Bundler, npm.

## Private Dependencies

We support using SSH to access a private repository during an analysis session.

* You can specify your SSH private key for each project.
* During an analysis session, the `GIT_SSH` environment variable will be set so that your Git access will use that key.

## Uploading the SSH Key

![Add SSH key](../assets/ssh-key-settings.png)

1. Visit the repository setting page.
2. Fill in the text field with the content of the key file.
3. You can specify the description of the SSH key.
4. Save.

{% hint style="warning" %}
Note that the private key cannot have a passphrase and must be an RSA key.
{% endhint %}

## Using SSH

Currently, only a few analysis tools use an SSH configuration.

* JavaScript tools use SSH via `npm install` to access private repositories.

Other tools do not use SSH so adding an SSH key for such tools are not needed.

