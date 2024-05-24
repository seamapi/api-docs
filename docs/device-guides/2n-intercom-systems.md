---
description: Guide for using 2N® intercom systems with Seam
---

# 2N Intercom Systems

## Overview

2N produces Internet Protocol (IP) access control systems and elevator communications. Seam integrates with 2N IP intercoms that combine secure audio and video intercoms with an access reader. These standalone devices support direct Session Initiation Protocol (SIP) calls.

***

## Supported Devices

This integration supports all [2N IP intercoms](https://wiki.2n.com/is/en).

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  client-session-token="seam_cst126DAjfor_2kxn8QAAEUkj3Zu4Nr1Aoauy"
  manufacturers='["2N"]'
/>" %}

We support the following features:

* [Triggering web lock and unlock actions](../products/smart-locks/lock-and-unlock.md)
* [Programming access codes](../products/smart-locks/access-codes/) on intercoms that have a PIN pad

***

### Device Provider Key

To create a [Connect Webview](../core-concepts/connect-webviews/) that enables your users to connect their 2N devices to Seam, include the `my_2n` [device provider key](../api-clients/connect-webviews/#device-provider-keys) as the `selected_provider` or in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webview](../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Setup Instructions

To control 2N devices using Seam, you must prompt owners of these devices to perform the following steps:

1. [Create a My2N account](https://my2n.com/2n-remote-configuration) if you have not done so already.
2. In My2N, add your 2N IP devices to the sites in which the devices are located.
3. Make sure that Remote API Access (RAA) is enabled for your My2N company. Contact [integrations@2n.com](mailto:integrations@2n.com) to activate RAA.
4. Once RAA is enabled for your company, enable RAA as a service for each of your 2N devices. For details, see the [2N article about service activation](https://server.sdk.my2n.com/versions/sandbox/index.html#service-activation).
5. Note your login credentials for My2N, and use these credentials to log in to the [Seam Connect Webview](../core-concepts/connect-webviews/) to add your 2N devices to Seam.

***

## Where to Order

Find your local 2N distributor using the following page:

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Locate Your 2N Distributor</strong></td><td></td><td><a href="https://www.2n.com/en_GB/how-to-buy/where-to-buy">https://www.2n.com/en_GB/how-to-buy/where-to-buy</a></td><td><a href="../.gitbook/assets/2n-logo.png">2n-logo.png</a></td></tr></tbody></table>
