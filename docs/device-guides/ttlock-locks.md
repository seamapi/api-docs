---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# TTLock Locks

## Overview

TTLock produces both hardware and software for smart locks. Many other manufacturers utilize TTLock's platform to create their own smart lock products. Locks built on this platform are compatible with a wide range of entrance types, including traditional doors, glass doors, locker doors, and key cylinders. With the TTLock mobile app, businesses can effortlessly lock and unlock doors and program key codes into the locks.

***

## Supported Devices

This integration works any TTLock locks that are paired with [a TTLock Gateway](ttlock-locks.md#compatible-ttlock-gateways).

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  client-session-token="seam_cst126DAjfor_2kxn8QAAEUkj3Zu4Nr1Aoauy"
  manufacturers='["TTLock"]'
/>" %}

We support the following features:

* [Triggering web unlock actions](../api-clients/locks/unlock-a-lock.md)
* [Programming access codes](../products/smart-locks/access-codes/) on door locks and card readers that have a PIN pad

***

### Device Provider Key

To create a [Connect Webview](../core-concepts/connect-webviews/) that enables your users to connect their TTLock devices to Seam, include the `ttlock` [device provider key](../api-clients/connect-webviews/#device-provider-keys) in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webview](../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Compatible TTLock Gateways

The TTLock gateway allows the smart lock to connect directly to the internet. By pairing a door lock with the gateway, it becomes compatible with Seam. This enables the immediate retrieval of unlocking records, whether from fingerprints, passwords, or cards.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><h2>Smart Gateway G2</h2></td><td>This gateway uses a Wifi connection to connect the door locks to the internet.</td><td></td><td><a href="../.gitbook/assets/G2-TT-Lock-App-Gateway-Bluetooth-Smart-Electronic-Door-Lock-Wifi-Adapter-2 copy (1).png">G2-TT-Lock-App-Gateway-Bluetooth-Smart-Electronic-Door-Lock-Wifi-Adapter-2 copy (1).png</a></td><td><a href="https://amzn.to/3qBcG6H">https://amzn.to/3qBcG6H</a></td></tr><tr><td><h3>Wired gateway G3/G3P (PoE power supply)</h3></td><td>This gateway uses a wired  Power-over-ethernet connection to bridge the locks to the internet.</td><td><h2></h2></td><td><a href="../.gitbook/assets/TTLock-APP-Device-G3-Gateway-Bluetooth-compatible-To-RJ45-Ethernet-Bridge-For-Remote-Control-Lock.jpg_ copy (1).png">TTLock-APP-Device-G3-Gateway-Bluetooth-compatible-To-RJ45-Ethernet-Bridge-For-Remote-Control-Lock.jpg_ copy (1).png</a></td><td><a href="https://www.aliexpress.us/item/2255800336116314.html?spm=a2g0o.productlist.main.1.9cbd43b3ctHfxZ&#x26;algo_pvid=32dab18b-38f8-4119-8e58-24e42b4bc733&#x26;aem_p4p_detail=2023081416370273984849672280003173903&#x26;algo_exp_id=32dab18b-38f8-4119-8e58-24e42b4bc733-0&#x26;pdp_npi=4%40dis%21USD%2125.88%2122.0%21%21%2125.88%21%21%40210321c616920562226965846e9d3e%2112000031234243953%21sea%21US%210%21A&#x26;curPageLogUid=gVdrDzS7hmgF&#x26;search_p4p_id=2023081416370273984849672280003173903_1">https://www.aliexpress.us/item/2255800336116314.html?spm=a2g0o.productlist.main.1.9cbd43b3ctHfxZ&#x26;algo_pvid=32dab18b-38f8-4119-8e58-24e42b4bc733&#x26;aem_p4p_detail=2023081416370273984849672280003173903&#x26;algo_exp_id=32dab18b-38f8-4119-8e58-24e42b4bc733-0&#x26;pdp_npi=4%40dis%21USD%2125.88%2122.0%21%21%2125.88%21%21%40210321c616920562226965846e9d3e%2112000031234243953%21sea%21US%210%21A&#x26;curPageLogUid=gVdrDzS7hmgF&#x26;search_p4p_id=2023081416370273984849672280003173903_1</a></td></tr></tbody></table>

***

## Setup Instructions

To control TTLock devices using Seam, you must prompt owners of these devices to perform the following steps:

### 1. Install your TTLock lock and set it up on the [TTLock app](https://www.ttlock.com/#/lock/app)

Please follow [the instructions in this video](https://www.youtube.com/watch?v=IbgZNc1dAx4) to set up your door lock on the TTLock app.

### 2. Pair the lock with [a supported TTLock gateway](ttlock-locks.md#compatible-ttlock-gateways)

Please follow [the instructions in this video](https://www.youtube.com/watch?v=-lhKbjVP1as) to pair your lock with a Gateway.

### 3. On the [TTLock app](https://www.ttlock.com/#/lock/app), turn on the "Remote Unlock" feature.

Please follow [the instructions in this video](https://www.youtube.com/watch?v=ni-38QpoNA4) to turn on the **"Remote Unlock"** setting for each door lock.

***

## Troubleshooting

### "Lock not paired to gateway" error

On the device, if you notice a `ttlock_lock_not_paired_to_gateway` error, you will need to purchase [a compatible gateway](ttlock-locks.md#compatible-ttlock-gateways) and pair it to the lock. Follow the [set up instructions](ttlock-locks.md#set-up-instructions) to configure the door lock.

### "Gateway unlocking not enabled" warning

On the device, if you notice a `ttlock_lock_gateway_unlocking_not_enabled` warning, you will need to follow the [set up instructions](ttlock-locks.md#set-up-instructions) to turn on the "Remote Unlock" feature.

***

## Where to Order

Many manufacturers produce Smart Locks using the TTLock platform. Find a lock by searching for a TTLock lock that fits your entrance type.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Amazon - TTLock Locks</strong></td><td></td><td><a href="https://amzn.to/4554ISo">https://amzn.to/4554ISo</a></td><td><a href="../.gitbook/assets/download.png">download.png</a></td></tr></tbody></table>
