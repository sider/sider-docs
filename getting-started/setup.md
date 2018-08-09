# Setting Sider up

## Sign Up

To sign up for Sider, click "Signin via GitHub" on our homepage. Then, click on "Authorize with GitHub". Sider will ask you for an authorization to access your repositories in order to analyze them.

![heroarea](../.gitbook/assets/heroarea-signup.png)

## Select a Repository

After authorization, you will see the following page.

![Select a repository](../.gitbook/assets/select-a-repository.png)

On this page, select a repository that you would like to analyze first. Private repostitories are labeled "Private". Click "Start setup" once you've selected a repository to analyze. Then proceed to set it up.

When you wish to add a repository, you need to have an Admin permission to the repository. If you cannot find the repository you would like to add, Sider may not be able to access your GitHub organization. Please check access permission status at github.com if you encounter this situation. You can confirm your access permission in [your account settings](https://github.com/settings/profile), and click "Sider" on \[Authorized OAuth Apps\] tab. You will find that your organizations are listed in \[Organization access\], then click "Grant". You can find and add your repository in this manner.

## Configure a Repository for Initial Code Review

On this screen, you can choose settings for your repository. Select whether to you'd like to use a Test mode and select languages or frameworks that your project is developed in.

### Test Mode

If you would like to enable Test Mode, check it. This is the mode that you can try Sider in your project without annoying your teammates because Sider does not block merging pull requests regardless of the analysis results. However, if you have enabled Inline Commenting for your repository, Sider will post comments to your pull request in spite of Test mode.

### Choose Programing Languages / Frameworks

Select languages or frameworks that you're using in your project. The checked tools will be used for the first analysis. Here's the full list of available ones:

| Language / Framework | Tools |
| :------------------- | :---- |
| Ruby | RuboCop, Reek |
| Ruby on Rails | RuboCop, Reek, Brakeman, Rails Best Practices, JSHint, stylelint, CoffeeLint |
| PHP | PHPMD |
| JavaScript | JSHint |
| CSS | stylelint |
| Java | PMD, Checkstyle |
| Python | Flake8 |
| Go | Golint, govet |
| Swift | SwiftLint |
| TypeScript | TSLint |

Click "Start Automated Review" to start analysis. Sider will analyze your 3 latest pull requests. If the project is in a private repository, start the 14-day free trial by clicking the button.

You will be able to finetune your project's configuration after the initial analysis.

