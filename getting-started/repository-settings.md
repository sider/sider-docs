# Repository Settings

The Repository Settings page allows you to configure Sider's behavior for each repository. You will see the Repository Settings screen upon adding your repository to Sider.

You must have write permission to the repository to change these settings.

## Analyzer Settings

![Analyzer settings](../.gitbook/assets/project-analyzers.png)

This section allows you to enable the analyzers you would like to use. Tools that are enabled will be run against new pull requests in your repository.

## Slack Notification

![Slack notification](../.gitbook/assets/project-slack-notification.png)

In this section, you can enable Slack notifications from Sider. Enter `team#channel` in the Name field and enter your Slack webhook url in the `URL` field.

## GitHub Sync

![Sync with GitHub](../.gitbook/assets/project-sync-with-github.png)

Sider will refresh your repository's information when the "Begin sync" button is clicked. If you have problems when operating Sider, click this button. 

## Test Mode

![Test mode](../.gitbook/assets/project-testmode.png)

This section allows you to enable Test Mode. If `ON`, Sider will send only success as a commit status.

## Delete a Repository from Sider

![Delete a repository](../.gitbook/assets/project-delete.png)

You can delete the repository from Sider in this section. Once deleted, Sider will delete your repository data including repository settings and analysis results and no longer analyze new pull requests. If you wish to re-enable Sider, re-add the repository from the "Add a new repository" screen.

{% hint style="warning" %}
You must have admin permissions to disable Sider.
{% endhint %}

