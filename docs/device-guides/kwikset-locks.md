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
  manufacturers='["Kwikset"]'
/>" %}

We support the following features:

* [Triggering web lock and unlock actions](../products/smart-locks/lock-and-unlock.md)
* [Programming access codes](../products/smart-locks/access-codes/)

{% hint style="info" %}
The Seam platform cannot determine the PIN codes for access codes that were created outside of the Seam platform.
{% endhint %}

***

### Device Provider Key

To create a [Connect Webview](../core-concepts/connect-webviews/) that enables your users to connect their Kwikset devices to Seam, include the `kwikset` [device provider key](../api-clients/connect-webviews/#device-provider-keys) in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webview](../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Setup Instructions

To control Kwikset devices using Seam, you must prompt owners of these devices to perform the following steps:

### Setup Instructions for Halo and Halo Touch Locks

1. Create an account in the [Kwikset App](https://www.kwikset.com/smart-locks/app) if you have not done so already.
2. In the Kwikset App, add your Kwikset devices.
3. In the Kwikset App, click on the top left menu button, navigate to **Account Settings** and disable **2-Step Verification**.

{% hint style="warning" %}
You must disable **2-Step Verification**—that is, multifactor authentication (MFA)—before connecting your Kwikset account to Seam using the [Seam Connect Webview](../core-concepts/connect-webviews/).

Enabling MFA in the Kwikset App can block the Seam login process from performing successful authorization using your Kwikset account. After you connect your Kwikset account to Seam, you can reenable **2-Step Verification** in the Kwikset App **Account Settings**.
{% endhint %}

4. Note your login credentials for the Kwikset App, and use these credentials to log in to the Seam Connect Webview to add your devices to Seam.

***

## Brand-Specific Events

Seam supports the following events and event property values for Kwikset devices:

### Kwikset Auto-Lock

Kwikset devices have an auto-lock feature that automatically locks the device after a configurable period of time, for example, 30 seconds. The Seam API reports these auto-lock occurrences by emitting a [`lock.locked` event](../api-clients/events/#event-types) with `automatic` as the value for the [`method` property](../api-clients/events/#lock-events).

### Kwikset Access Denied Event

The Seam API emits a [`lock.access_denied` event](../api-clients/events/#event-types) when an incorrect access code is entered three times in a row on a Kwikset device. The Kwikset device also emits warning beeps for approximately 15 seconds, and the keypad is locked during this time. The keypad remains locked for one minute after the warning beeps end.

***

## Where to Order

Order Kwikset locks from Amazon.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Kwikset Halo, Halo Touch, and SmartCode Locks on Amazon</strong></td><td></td><td><a href="https://www.amazon.com/s?k=kwikset+halo+or+smartcode+lock">https://www.amazon.com/s?k=kwikset+halo+or+smartcode+lock</a></td><td><a href="../.gitbook/assets/kwikset-halo-halo-touch-on-amazon.jpg">kwikset-halo-halo-touch-on-amazon.jpg</a></td></tr></tbody></table>

***
