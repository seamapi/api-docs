---
description: Guide for using 4SUITES locks with Seam
---

# 4SUITES Locks

## Overview

4SUITES produces cloud-managed Internet of Things (IoT) locks, lock upgrades, and readers for the hospitality industry. Because 4SUITES locks use IoT-enabled sensors, instead of relying on Bluetooth®, guests can use 4SUITES mobile keys through a webapp on a smartphone or other internet-connected device—without needing to download an app. Seam integrates with 4SUITES locks to provide streamlined hotel operations and improved guest access.

***

## Supported Devices

This integration supports all [4SUITES locks, lock upgrades, and readers](https://www.4suiteshq.com/products/).

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  client-session-token="seam_cst126DAjfor_2kxn8QAAEUkj3Zu4Nr1Aoauy"
  manufacturers='["4SUITES"]'
/>" %}

We support the following features:

* [Triggering web lock and unlock actions](../../products/smart-locks/lock-and-unlock.md)
* [Programming access codes](../../products/smart-locks/access-codes/)

***

### Device Provider Key

To create a [Connect Webview](../../core-concepts/connect-webviews/) that enables your users to connect their 4SUITES devices to Seam, include the `four_suites` [device provider key](../../api-clients/connect-webviews/#device-provider-keys) as the `selected_provider` or in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webview](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Setup Instructions

To control 4SUITES devices using Seam, you must prompt owners of these devices to perform the following steps:

1. Obtain the credentials that you use to log in to your [4SUITES account](https://app.4suites.nl/auth/login).
2. Use these credentials to log in to the [Seam Connect Webview](../../core-concepts/connect-webviews/) to add your 4SUITES devices to Seam.

***

## Where to Order

To purchase 4SUITES devices, request a quote using the 4SUITES **Contact Us Form**.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>4SUITES Contact Us Form</strong></td><td></td><td><a href="https://www.4suiteshq.com/contact-us/">https://www.4suiteshq.com/contact-us/</a></td><td><a href="../../.gitbook/assets/4suites-logo.png">4suites-logo.png</a></td></tr></tbody></table>

***

