---
id: setup
title: Setting up Sider
sidebar_label: Setting up Sider
hide_title: true
---

# Setting up Sider

## Sign Up

To sign up for Sider, click **"Sign up via GitHub"** on [sider.review](https://sider.review).
Then, click **"Authorize with GitHub"**. Sider will ask you for access to your repositories in order to analyze your code.

![sider.review](../assets/heroarea-signup.png)

## Install Sider

Once you've authorized GitHub access, click **"Add Organization"**, then you will be redirected to the installation page on GitHub.

![Install Sider](../assets/install-github-apps.png)

## Select a Repository

After the installation, select the repository you would like to add:

![Select a repository](../assets/select-a-repository.png)

You must have [Admin access](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization) to the GitHub repository in order to add it to Sider.

## Configure a Repository for Initial Code Review

On this screen, you can set up your repository:

![Configure a repository](../assets/configure-a-repository.png)

Select whether you would like to choose your project's stack and use [Test Mode](#test-mode).

### Choose your stack

Select languages or frameworks that you're using in your project. The checked tools will be used during code analysis. See the [full list](../index.md#analysis-tools) of our available tools for details.

### Test Mode

Test Mode allows you to try Sider in your project, without getting in your teammates' way. In Test Mode, Sider will not block you from merging pull requests, regardless of the analysis result. However, if you have enabled Inline Commenting for your repository, Sider will still post comments to pull requests while in Test Mode.

Click **"Analyze open pull requests"** to start an analysis. Sider will start analyzing your latest pull requests.

You will be able to fine-tune your project's configuration at any time after the initial analysis.

## Video Tutorial

<div class="Video">
 <iframe class="Video__iframe" src="https://www.youtube.com/embed/bCfgdf4cjcU" frameborder="0" allowfullscreen></iframe>
</div>
