---
description: Guide for using Lockly smart locks with Seam
---

# Lockly Locks

<figure><img src="../../.gitbook/assets/lockly-manufacturer-page-cover-16-9-light.png" alt=""><figcaption></figcaption></figure>

## Overview

Seam integrates with Lockly smart locks. With a focus on security, Lockly smart locks work with a vast array of door types, such as traditional deadbolts, latch bolts, and patio doors. In addition, Lockly smart locks support time-bound and one-time-use [offline access codes](creating-lockly-offline-access-codes.md) that you can issue when you are not connected to your Lockly lock.

***

## Supported Devices

This integration supports [all Lockly smart locks](https://lockly.com/collections/door-lock). Note that you must also install the [Secure Link Wi-Fi Hub](https://lockly.com/products/secure-link-wifi-hub?bvstate=pg:4/ct:r\&g\_campaign\_id=16972321320\&g\_adgroup\_id=\&utm\_source=google\&utm\_medium=pmax\&utm\_campaign=pfmx-20230201MCV\&gclid=Cj0KCQjwvL-oBhCxARIsAHkOiu0hV67HkcUG7buEnk3odH5k8\_I0JqFMU0r5V9Pp7gdGWgBYUQlCIr4aAq8jEALw\_wcB) to connect these locks to the internet.

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  client-session-token="seam_cst126DAjfor_2kxn8QAAEUkj3Zu4Nr1Aoauy"
  manufacturers='["Lockly"]'
/>" %}

We support the following features:

* [Programming online access codes](../../products/smart-locks/access-codes/) on locks that have a keypad
* [Programming offline access codes](../../products/smart-locks/access-codes/offline-access-codes.md) on locks that have a keypad

***

### Device Provider Key

To create a [Connect Webview](../../core-concepts/connect-webviews/) that enables your users to connect their Lockly devices to Seam, include the `lockly` [device provider key](../../api-clients/connect-webviews/#device-provider-keys) in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webview](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Setup Instructions

To control Lockly devices using Seam, you must prompt owners of these devices to perform the following steps:

1. Download and create an account for the [Lockly mobile app](https://lockly.com/pages/download-lockly-app) if you have not done so already.
2. In the Lockly mobile app, set up each of your Lockly locks as follows:
   1. Click the card for the lock.
   2. In the lower, right corner, click **Settings**.
   3. Click **Sync with LocklyOS**, and then enable **Sync with LocklyOS**.
3. In a web browser, navigate to the [Lockly Access Portal](https://lap.lockly.com/lap/index.html#/login) (LAP) and log in with your Lockly mobile app credentials.
4. Purchase a Lockly plan that suits your needs.
5. Email [support@lockly.com](mailto:support@lockly.com) to enable API access for your LAP account.
6. In the left-hand navigation pane of the Lockly Access Portal, click **Account** > **User Management**.
7. Click **Add Account**.
8.  Specify the following values to configure the new user account:

    1. In the **Credential Type** field, select **Access Key - Programmatic access**.
    2. In the **User Name** field, type a descriptive name, such as **Seam Integration**.
    3. In the **Property** field, select all the properties to which you want the Seam application to have access.
    4. In the **Role** field, select **Property And Room (Read & Write)**, **Doorlock (Read & Write)**, and **API EBadge Admin**.
    5. In the **Validity Period** field, select **Permanent**.

    <figure><img src="../../.gitbook/assets/lockly-access-portal-add-account.png" alt="Create a user account in the Lockly Access portal." width="563"><figcaption></figcaption></figure>
9.  Click **Confirm**.\
    The Lockly Access Portal creates the new account and displays the following information:

    <figure><img src="../../.gitbook/assets/lockly-access-portal-account-created-successfully.png" alt="Note the information for the newly-created user account." width="563"><figcaption></figcaption></figure>
10. Note the client ID, access key ID, access key secret, token ID, and token secret.

***

## Where to Order

Order Lockly locks directly from the Lockly website.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Lockly</strong></td><td></td><td><a href="https://lockly.com/collections/door-lock">https://lockly.com/collections/door-lock</a></td><td><a href="../../.gitbook/assets/lockly-logo.png">lockly-logo.png</a></td></tr></tbody></table>

***

