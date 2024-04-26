---
description: >-
  Use the interactive Seam Online CLI as a user-friendly and efficient way to
  explore and test the Seam API from within the Seam Console.
---

# Seam Online CLI

<figure><img src="../../.gitbook/assets/seam-online-cli.gif" alt="Use the interactive Seam Online CLI to explore and test the Seam API." width="563"><figcaption></figcaption></figure>

The Seam Online Command Line Interface (CLI) is a fully interactive CLI version of the [Seam API](broken-reference). You access the Seam Online CLI from within the [Seam Console](./). Quick, intuitive, and easy to use, the Seam Online CLI enables you to perform a variety of useful tasks, including the following:

* Explore and test all the available methods in the Seam API interactively.
* View resources or test API functions easily and quickly.
* Inspect the results of your API commands.
* Access Seam API functionality that is not currently available in the Seam Console.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th data-hidden></th><th data-hidden></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Seam Online CLI Demo</strong></td><td></td><td></td><td><a href="../../.gitbook/assets/seam-online-cli.png">seam-online-cli.png</a></td><td><a href="https://youtu.be/GGmQQ57jBn0">https://youtu.be/GGmQQ57jBn0</a></td></tr></tbody></table>

## Access the Seam Online CLI

1. In the upper-right corner of the [Seam Console](https://console.seam.co/), click the down arrow to display the [workspace](../workspaces/) list.
2. Click the workspace for which you want to use the Seam Online CLI.
3. In the left navigation pane, click **Online CLI**.

The Seam Online CLI opens in a new browser tab or window.

Each instance of the Seam Online CLI begins within the workspace from which you opened the CLI. However, you can use `seam select workspace` to switch to a different workspace or `seam login` to use a Personal Access Token for multi-workspace access.

## Use the Seam Online CLI

Interact with the Seam Online CLI using any combination of interactive and typed commands. You "construct" the full command, including any desired parameters, and then run the command.

1. Click within the Seam Online CLI pane to activate this pane.
2.  Enter a command stub, such as `seam`, `seam devices`, or `seam devices list`.\
    Some commonly-used command stubs include the following:

    * `seam`
    * `seam access-codes`
    * `seam acs`
    * `seam action-attempts`
    * `seam client-sessions`
    * `seam connect-webviews`
    * `seam devices`
    * `seam locks`
    * `seam login`
    * `seam noise-sensors`
    * `seam select`
    * `seam thermostats`
    * `seam user-identities`

    For a full list of command stubs, see [Seam Online CLI Command Stubs](seam-online-cli.md#seam-online-cli-command-stubs).
3.  Use the up and down arrows and press **Enter** to select the desired command and parameters.

    You can also type the beginning of a command or parameter name to filter the list of interactive options.
4.  Enter or select any desired parameter values.\
    You can specify values for multiple parameters and edit any parameter values that you have already specified. You can also [copy and paste](seam-online-cli.md#copying-and-pasting-in-the-seam-online-cli) values.

    For example, if you have chosen to use `seam devices get`, and have selected the `device_id` parameter, the Seam Online CLI displays a list of the names and IDs of all devices to which you have access. Use the arrow keys to select the desired device and then press **Enter**.
5. Once you have constructed the full command to run, use the up and down arrows to select `Make API Call` and then press **Enter**.\
   The Seam CLI runs the specified command and displays the output.
6. If you have chosen to run a command that returns an [action attempt](../action-attempts.md), use the left and right arrows to select `yes` or `no` and then press **Enter** to indicate whether to poll the action attempt until it completes.

## Seam Online CLI Command Stubs

The Seam Online CLI supports the following command stubs:

<table><thead><tr><th width="286">Command Stub</th><th>Description</th></tr></thead><tbody><tr><td><code>seam</code></td><td>Access all Seam Online CLI commands in an interactive manner.</td></tr><tr><td><code>seam access-codes</code></td><td>Manage <a href="../../products/smart-locks/access-codes/">access codes</a>.</td></tr><tr><td><code>seam acs</code></td><td>Manage <a href="../../products/access-systems/">Access Control Systems</a> (ACSs), including associated objects, such as systems, users, access groups, and credentials.</td></tr><tr><td><code>seam action-attempts</code></td><td>List and get <a href="../action-attempts.md">action attempts</a> to poll the status of attempted actions, such as <a href="../../products/smart-locks/lock-and-unlock.md">unlock</a> and <a href="../../products/smart-locks/access-codes/creating-access-codes.md">create access code</a>.</td></tr><tr><td><code>seam client-sessions</code></td><td>Manage <a href="../../seam-components/overview/get-started-with-react-components-and-client-session-tokens.md#what-is-a-client-session-token">client sessions</a> that enable you to restrict users' interactions to include only the devices that they own.</td></tr><tr><td><code>seam connect-webviews</code></td><td>Manage <a href="../connect-webviews/">Connect Webviews</a> that enable users to connect their devices to Seam.</td></tr><tr><td><code>seam connected-accounts</code></td><td>Manage <a href="../../api-clients/connected-accounts/">connected accounts</a> that represent external, third-party accounts to which users have authorized Seam to access.</td></tr><tr><td><code>seam devices</code></td><td>Manage devices, including both <a href="../devices/#managed-devices-and-unmanaged-devices">"managed" and "unmanaged" devices</a>.</td></tr><tr><td><code>seam events</code></td><td>Retrieve <a href="../../api-clients/events/">events</a>.</td></tr><tr><td><code>seam locks</code></td><td>Retrieve, lock, and unlock <a href="../../products/smart-locks/">smart locks</a>.</td></tr><tr><td><code>seam login</code></td><td>Log back in to the Seam Online CLI or change your authorization to use a different <a href="../authentication/api-keys.md">API key</a> or <a href="../authentication/personal-access-tokens.md">Personal Access Token</a>.</td></tr><tr><td><code>seam logout</code></td><td>Log out of the Seam Online CLI.</td></tr><tr><td><code>seam noise-sensors</code></td><td>Manage <a href="../../products/noise-sensors/#what-is-a-threshold">noise thresholds</a> for <a href="../../products/noise-sensors/">noise sensors</a> and simulate triggering noise threshold alerts.</td></tr><tr><td><code>seam select</code></td><td>Select the desired <a href="../workspaces/">workspace</a> or server.</td></tr><tr><td><code>seam thermostats</code></td><td>Manage <a href="../../products/thermostats/">thermostats</a>, including <a href="../../products/thermostats/configure-current-climate-settings.md">current climate settings</a>, <a href="../../capability-guides/thermostats/managing-scheduled-climate-settings-in-development/setting-the-default-climate-setting.md">default climate settings</a>, and <a href="../../capability-guides/thermostats/managing-scheduled-climate-settings-in-development/thermostats-climate-setting-schedules.md">climate setting schedules</a>.</td></tr><tr><td><code>seam user-identities</code></td><td>Manage <a href="../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md">user identities</a> that enable you to issue and manage mobile credentials and access permissions for users.</td></tr><tr><td><code>seam webhooks</code></td><td>Manage <a href="../webhooks.md">webhook</a> endpoints that enable you to receive notifications of Seam-related events.</td></tr><tr><td><code>seam workspaces</code></td><td>Manage your <a href="../workspaces/">workspaces</a>, including creating new workspaces, retrieving existing workspaces, and resetting your sandbox workspaces. </td></tr></tbody></table>

## Copying and Pasting in the Seam Online CLI

To copy and paste values in the Seam Online CLI, right-click and select the desired option or use the following keyboard shortcuts:

| Operation | Windows/Linux                        | Mac           |
| --------- | ------------------------------------ | ------------- |
| Copy      | **Ctrl-Insert**                      | **Command-C** |
| Paste     | **Shift-Insert** or **Ctrl-Shift-V** | **Command-V** |
