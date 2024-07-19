---
description: >-
  Learn how to create Lockly offline access codes, including understanding
  manufacturer-specific requirements.
---

# Creating Lockly Offline Access Codes

In addition to supporting [online access codes](../../products/smart-locks/access-codes/), the Seam integration for Lockly supports the generation of offline access codes for all Lockly lock models that have a keypad. You generate offline access (PIN) codes remotely, and the manufacturer maintains a server-based registry of synchronized encryption keys (tokens) to enable these offline codes. Then, owners or managers can share these codes with users through messaging or other similar applications, and the users do not need to install a special application to unlock the device.

For Lockly locks with keypads, you can program [time-bound](../../products/smart-locks/access-codes/offline-access-codes.md#creating-time-bound-offline-access-codes) and [one-time-use](../../products/smart-locks/access-codes/offline-access-codes.md#creating-one-time-use-offline-access-codes) offline access codes. To define the validity period for each Lockly offline access code, specify the desired `starts_at` and `ends_at` timestamp. You can create as many offline access codes as you'd like, up to the limits of your device memory capacity and your Lockly subscription. You can verify your Lockly subscription in the [Lockly Access Portal](https://lap.lockly.com/lap/index.html#/login).

{% hint style="info" %}
It is important to inform your Lockly lock users that the mechanism for entering offline access codes on Lockly devices is different from the mechanism for entering online access codes on these devices. For instructions, see [https://www.support.lockly.com/faq/how-to-use-oac/](https://www.support.lockly.com/faq/how-to-use-oac/).&#x20;
{% endhint %}

For more information about using offline access codes, see [Offline Access Codes](../../products/smart-locks/access-codes/#offline-access-codes) and [Managing Offline Access Codes](../../products/smart-locks/access-codes/offline-access-codes.md).

***

## Programming Lockly Offline Access Codes

For detailed instructions for creating time-bound offline access codes for Lockly locks, see [Creating Time-Bound Offline Access Codes](../../products/smart-locks/access-codes/offline-access-codes.md#creating-time-bound-offline-access-codes).

For detailed instructions for creating one-time-use offline access codes for Lockly locks, see [Creating One-Time-Use Offline Access Codes](../../products/smart-locks/access-codes/offline-access-codes.md#creating-one-time-use-offline-access-codes).
