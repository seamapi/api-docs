---
description: Guide for using dormakaba Oracode locks with Seam
---

# dormakaba Oracode Locks

## Overview

Seam integrates with the dormakaba [Oracode Live](https://www.dormakaba.com/us-en/offering/products/vacation-short-term-rental-solutions/access-control-management/oracode-live--ka\_128503) access control management platform. Intended for the vacation and short-term rental industries, the Oracode Live platform supports a "no keys, no cards" concept for efficient and secure access. Further, with the Oracode Live platform, codes expire automatically at the end of the authorized period.

In addition to [online access codes](../device-and-system-integration-guides/dormakaba-oracode-locks/online-access-code-requirements-and-behaviors.md), the Seam integration supports the generation of [offline access codes for dormakaba Oracode locks](../device-and-system-integration-guides/dormakaba-oracode-locks/offline-access-code-support-and-requirements.md) that do not have Wi-Fi capabilities.

You can use a variety of dormakaba Oracode smart locks with the Oracode Live platform. These strong and durable locks have commercial-grade finishes to withstand a wide range of climates.&#x20;

***

## Supported Devices

This integration supports all locks connected using the [Oracode Live](https://www.dormakaba.com/us-en/offering/products/vacation-short-term-rental-solutions/access-control-management/oracode-live--ka\_128503) platform. In addition to [online access codes](../device-and-system-integration-guides/dormakaba-oracode-locks/online-access-code-requirements-and-behaviors.md), this integration supports a wider set of dormakaba Oracode devices for [offline access code](../device-and-system-integration-guides/dormakaba-oracode-locks/offline-access-code-support-and-requirements.md) provisioning.

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  client-session-token="seam_cst126DAjfor_2kxn8QAAEUkj3Zu4Nr1Aoauy"
  manufacturers="Dormakaba=bb56ed21-a593-4116-a969-959396819638"
/>" %}

We support the following features:

* [Programming access codes](../products/smart-locks/access-codes/)

***

### Device Provider Key

To create a [Connect Webview](../core-concepts/connect-webviews/) that enables your users to connect their dormakaba Oracode devices to Seam, include the `dormakaba_oracode` [device provider key](../api-clients/connect-webviews/#device-provider-keys) as the `selected_provider` or in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webview](../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Setup Instructions

To control dormakaba Oracode devices using Seam, you must prompt **the owners or managers of these devices** to perform the following steps:

1. Log in to your [Oracode Live account](https://www.kabaecodewireless.com).
2.  Note your site name, as shown in the upper-right corner of the Oracode Live portal.\


    <figure><img src="../.gitbook/assets/oracode-live-site-name.png" alt="Note your site name in the Oracle Live portal."><figcaption><p>Note your site name in the Oracle Live portal.</p></figcaption></figure>
3.  Contact dormakaba Oracode Support at  the following email address to request that they connect your site with dormakaba Live Services with Seam:\
    [oracode@dormakaba.com](mailto:oracode@dormakaba.com)\
    You can use the following sample email message:

    > _Please connect the {Insert Site Name} site to the Seam Access Token._

    Once dormakaba Oracode has connected your site with dormakaba Live Services with Seam, proceed to the next step.
4. Use your Oracode Live credentials to log in to the [Seam Connect Webview](../core-concepts/connect-webviews/) to add your dormakaba Oracode devices to Seam.

{% hint style="info" %}
It is important to understand that the developer presents the Connect Webview to the device owner or manager, and the device owner or manager types their device credentials in the Connect Webview to authorize Seam to control their devices.
{% endhint %}

***

## Where to Order

To purchase dormakaba Oracode devices, contact the dormakaba Sales team using the dormakaba **Contact** page or order Oracode Live locks from GoKeyless.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>dormakaba Contact Page</strong></td><td></td><td><a href="https://www.dormakaba.com/us-en/contact">https://www.dormakaba.com/us-en/contact</a></td><td><a href="../.gitbook/assets/dormakaba-logo.png">dormakaba-logo.png</a></td></tr><tr><td></td><td><strong>GoKeyless</strong></td><td></td><td><a href="https://www.gokeyless.com/shop/advertised/oracode-i-series-locks/">https://www.gokeyless.com/shop/advertised/oracode-i-series-locks/</a></td><td><a href="../.gitbook/assets/gokeyless-logo.png">gokeyless-logo.png</a></td></tr></tbody></table>

***

