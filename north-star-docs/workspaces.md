
# Workspace

## Overview

The top-level resource in Seam is a Workspace. All other resources, such as Devices, Connected Accounts, and API Keys, are organized under workspaces.

There are two different types of workspaces you can create:

* Sandbox: This is a special type of workspace. It contains simulated devices, handy for testing your code without needing real devices.

* Production: This is for when you're ready to control real devices!

Of course, you are not limited to these two. You can create as many workspaces as you need.

## Basic Implementation

### Create a new Workspace

Go to the Seam Dashboard and click on the workspace switch, which will bring up a dropdown menu with the option to create a new workspace. Enter the desired name for the workspace and your company information, and specify whether it is a sandbox workspace or not.

### Sandbox Workspaces

Sandbox workspaces are for you to test your code. We seed each Sandbox with simulated devices and user accounts that own them.

These simulated devices behave like their real counterparts. This lets you test your application against multiple device brands, **without needing to actually own each device!**

Check the credentials to each account on https://docs.seam.co/latest/device-guides/sandbox-and-sample-data

### Production Workspaces

Production workspaces allow you to connect with actual accounts and devices. The great news is that we have made the sandbox authentication process as similar as possible to the real one. If you have already connected in the sandbox workspace, you should have no trouble here!

### Resetting a Workspace

You can always reset a sandbox workspace to return it to its starting state. This is handy if you need to run continuous integration! We are also working on letting you edit the initial seed state.

To reset your workspace you should send a POST to https://connect.getseam.com/workspaces/reset_sandbox with the authentication on the header

## Advanced Implementation(s)

N/A

## Troubleshooting Steps

### Should a PMS (Property Management Software) be creating a new workspace for each customer?

NO, Instead, you should create one workspace for your application, and keep track of which host has linked which connected accounts

## Configuring features via the Console

### Api Keys

In order to request access to a device within a workspace, an API key specific to that workspace is required. Each workspace can have multiple API keys, but a key cannot be used across different workspaces.

To manage API keys for a workspace, navigate to the Seam dashboard and select the appropriate workspace. From there, go to the API key tab, where you can create or edit keys according to your needs. To create a new API key, follow these steps:
1. Click on the "Add API Key" button.
2. fill in the name you want for your API Key.
3. Click on the "Create API Key" button.
4. Make sure to save your API Key somewhere safe as we only display the value during creation, particularly at this step.
5. You can close the modal, and you are good to go.

### Webhooks

Each workspace gets its own Svix app that you can access a dashboard for. If you want more information about consuming events such as testing or verifying webhooks, you can get more info from [the Svix docs.](https://docs.svix.com/receiving/introduction)

To manage your webhooks, navigate to the Seam dashboard and select the appropriate workspace. From there, click on the Webhooks tab. Once you are on the Webhooks tab, you will be able to view all existing webhooks, create new ones, and delete any unnecessary ones. To create a new webhook, follow these steps:
1. Click on the "Add Webhook" button
2. fill in your URL (For testing purposes we recommend using https://typedwebhook.tools.)
3. select the event types you want to receive events for, and finally, click "Create"

You can see all the Seam Events at https://docs.seam.co/latest/api-clients/events.

### Workspace Team

Through the Seam Dashboard, your team can easily collaborate to manage a workspace and its resources.

To manage your team, navigate to the Seam dashboard and select the appropriate workspace. From there, go to the Team tab to invite new members or remove existing ones. It's important to note that a member will only appear on the list once they have accepted your invitation.

### Reset Workspace

Here are the steps to reset your workspace via console:

1. Click on the workspace switch and wait for the dropdown to appear.
2. Click the "reset" button. Please note that you need the appropriate privileges to access this button.
3. Wait for your workspace to reset. This process may take some time.

## How would a user incorporate this feature into their Dashboard?

N/A

## Suggested Improvements

- [ ] https://docs.seam.co/latest/device-guides/sandbox-and-sample-data, is missing some providers, and the sample data is in an even worst state, we should generate it from code somehow
- [ ] Enable editing the workspace name from the Console
