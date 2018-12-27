---
id: inline-comments
title: Inline Comments
sidebar_label: Inline Comments
---

Sider provides an option to notify analysis results to GitHub as inline comments of pull requests. This option post comments to each pull request when analyzers detect problems. It will allow you to see the analysis results without leaving your pull request pages.

![Inline Comments Detail](../assets/inline-comments-detail.png)

If an analysis tool finds more than 5 issues, a summary of the issues will be posted on your pull request page.

![Inline Commetns Summary](../assets/inline-comments-summary.png)

## Setting up

![Inline Comments Settings](../assets/inline-comments-setting.png)

{% hint style="warning" %}
If the Test Mode section is set to `ON`, Sider will post comments to your pull request. Note that this interface requires Sider to be enable as a GitHub App.
{% endhint %}
