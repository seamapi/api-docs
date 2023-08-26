---
description: >-
  Access codes are codes for keypad devices. These are used when you want to
  provide access to a lock using a PIN code.
---

# Access Codes

<figure><img src="../../../.gitbook/assets/code_unlock.gif" alt=""><figcaption></figcaption></figure>

## What is an Access Code?

An Access Code is a code used for a keypad or pinpad device. Unlike physical keys, which can be easily lost or duplicated, PIN codes can be customized, tracked, and altered on-the-fly. Using Seam's [Access Code API](../../../api-clients/access-codes/), you can easily generate access codes on the hundreds of door lock models that we integrate with.

Seam supports programming two types of access codes:

1. **Ongoing**: Ideal for residents or long-term users. Ongoing codes remain active on a device until removed.
2. **Time Bound**: Suitable for temporary access like guest visits or service appointments. These codes operate between a designated `starts_at` and `ends_at` time window, granting access only during that period.

To differentiate between the two, refer to the `type` property of the access code. Ongoing codes display as `ongoing`, whereas time-bound codes are labeled `time_bound`.

***

## How Seam programs codes onto the lock

Seam ensures access reliability by initiating the programming of access codes onto the lock ahead of its `starts_at` time. This approach minimizes the risks of delays or disruptions during the programming process.

### **Native Scheduling**

For locks that support setting codes with a schedule, Seam will preload access codes onto the device a full **72 hours** before the `starts_at` timestamp of a Time Bound code. When the `starts_at` time arrives, the code automatically activates and will remain active until its `ends_at` time. We enable this "Native scheduling" functionality by default for all providers that support this (see [the table below](./#native-scheduling-supported-providers) for a list of supported providers). You can choose to override this default behavior, and have Seam perform "Just-in-time scheduling" by setting `prefer_native_scheduling` to `false` when creating a code.

<figure><img src="../../../.gitbook/assets/device-native-scheduling-illustration (3).png" alt=""><figcaption><p>72 hours before the <code>starts_at</code> timestamp, Seam inserts the code into the device's internal memory. When the <code>starts_at</code> time arrives, the device automatically activates the code. It is then automatically deactivated at the <code>ends_at</code> timestamp.</p></figcaption></figure>

#### Native Scheduling — Supported Providers

| ✅ Supported | ✖️ Not Supported |
| ----------- | ---------------- |
| 2N          | Hubitat          |
| August      | Lockly           |
| Igloohome   | Nuki             |
| Kwikset     | SmartThings      |
| Salto       |                  |
| Schlage     |                  |
| TTLock      |                  |
| Yale        |                  |

### **Just-in-time Scheduling**

For those locks that lack native scheduling functionality, Seam will use its own scheduling infrastructure to program the code 30 minutes before the `starts_at` time, and remove it at the `ends_at` time.



***

## Advanced Feature: Backup Access Codes

Occasionally, Seam may encounter issues when programming codes onto locks. Such hiccups can arise from device connectivity issues, manual interventions from the lock or its accompanying app, or service disruptions from the lock providers. Given these issues, we strongly advise preprogramming a set of backup codes onto the door lock. Should you detect a failure in access code programming, these backup codes can be promptly shared.

Seam offers a Backup Access Code service. When activated, this service automatically maintain a pool of pre-programmed access codes on a device. These codes are programmed in addition to the regular access codes on Seam, acting as a safety net in case of any issues with the primary codes. Please read about [how to enable and request a back up code here](backup-access-codes.md).

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><h3><a href="backup-access-codes.md">Backup Access Code Pool</a></h3><p>Use our backup code pool service to automatically maintain a set of back up codes on your device.</p></td><td></td><td></td><td><a href="../../../.gitbook/assets/spaces_xnN2A67918om1UthYWsF_uploads_6mrS1LVdcoGmXAagf0SI_recycle key.webp">spaces_xnN2A67918om1UthYWsF_uploads_6mrS1LVdcoGmXAagf0SI_recycle key.webp</a></td><td><a href="broken-reference">Broken link</a></td></tr></tbody></table>