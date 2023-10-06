---
description: Guide for using Kwikset locks with Seam
---

# Kwikset Locks

## Overview

Kwikset produces smart locks suitable for residential homes, rental properties, and vacation rentals. The Kwikset Halo and Halo Touch series offer Wi-Fi-enabled smart locks that connect directly to the existing Wi-Fi router for a property, eliminating the need for a separate smart home hub. On the other hand, the Kwikset SmartCode series provides multiple connectivity options, including Zigbee and Z-Wave. For SmartCode series locks, the Seam integration requires the use of a hub. The Seam integration enables the remote unlocking feature and the ability to set customizable access codes for the Kwikset Halo, Halo Touch, and SmartCode series.

***

## Supported Devices

This integration supports the Kwikset [Halo](https://www.kwikset.com/halo), [Halo Touch](https://www.kwikset.com/halo-touch), and [SmartCode](https://www.kwikset.com/products/electronic/electronic-smart-locks) lines of smart locks.

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  client-session-token="seam_cst126DAjfor_2kxn8QAAEUkj3Zu4Nr1Aoauy"
  brands='["kwikset"]'
/>" %}

We support the following features:

* [Triggering web lock and unlock actions](../products/smart-locks/lock-and-unlock.md)
* [Programming access codes](../products/smart-locks/access-codes/)

{% hint style="info" %}
The Seam platform cannot determine the PIN codes for access codes that were created outside of the Seam platform.
{% endhint %}

***

## Setup Instructions

Perform the setup procedure that corresponds to your type of Kwikset lock.

### &#x20;Setup Instructions for Halo and Halo Touch Locks

1. Create an account in the [Kwikset App](https://www.kwikset.com/smart-locks/app) if you have not done so already.
2. In the Kwikset App, add your Kwikset devices.
3. In the Kwikset App, click on the top left menu button, navigate to **Account Settings** and disable **2-Step Verification**.

{% hint style="warning" %}
You must disable **2-Step Verification**—that is, multifactor authentication (MFA)—before connecting your Kwikset account to Seam using the [Seam Connect Webview](../core-concepts/connect-webviews.md). Enabling MFA in the Kwikset App can block the Seam login process from performing successful authorization using your Kwikset account. After you connect your Kwikset account to Seam, you can reenable **2-Step Verification** in the Kwikset App **Account Settings**.
{% endhint %}

4. Note your login credentials for the Kwikset App, and use these credentials to log in to the Seam Connect Webview to add your devices to Seam.

### &#x20;Setup Instructions for SmartCode Locks

1.  Purchase a compatible Z-Wave hub.

    Currently, Seam integrates with the following two Z-Wave hubs:

    * [SmartThings hub](https://aeotec.com/products/aeotec-smartthings-hub/)
    * [Hubitat Elevation® hub](https://hubitat.com/products)

    Ensure that you have one of these hubs before proceeding.
2.  Follow the setup process for your Z-Wave hub to link your SmartCode locks to it.

    You must link your SmartCode locks to the Z-Wave hub before connecting these locks to the internet.
3. Navigate to the [Seam Connect Webview](../core-concepts/connect-webviews.md).
4. In the Seam Connect Webview, select the brand of your hub, either **SmartThings** or **Hubitat**.
5. Use your SmartThings or Hubitat login credentials to log in to the Seam Connect Webview to add your devices to Seam.

***

## Where to Order

Order Kwikset locks from Amazon.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Kwikset Halo, Halo Touch, and SmartCode Locks on Amazon</strong></td><td></td><td><a href="https://www.amazon.com/s?k=kwikset+halo+or+smartcode+lock">https://www.amazon.com/s?k=kwikset+halo+or+smartcode+lock</a></td><td><a href="../.gitbook/assets/kwikset-halo-halo-touch-on-amazon.jpg">kwikset-halo-halo-touch-on-amazon.jpg</a></td></tr></tbody></table>

***
