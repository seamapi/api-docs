---
description: >-
  Learn about managing smart locks and access codes that enable you to lock and
  unlock doors and other entry points.
---

# 🔒 Smart Locks

The Seam API enables you to control connected smart locks from a wide variety of manufacturers, including locks that provide online and offline access code programming. For example, you can use the Seam API to implement the following common scenarios:

* **Shareable Web Pass:** Create a web pass to distribute to guests or visitors. When this pass is used, it can lock or unlock the smart lock.
* **Scheduled Access:** Grant time-bound access by providing temporary codes to guests, babysitters, or service personnel. For example, a cleaner with a schedule from 10 am to 12 pm on Tuesdays could be given a code valid only within that time frame.
* **Security Monitoring:** Get real-time status updates on when the door is locked or unlocked.

## What Is a Smart Lock?

Smart locks utilize technology to provide a new way to unlock or lock your door. With smart locks, you can access your premises without a physical key.

These locks can be integrated into various entry points, such as standard doors, gates, garage doors, elevators, and lockers. Some associated devices, such as intercoms and access control systems, come equipped with built-in video cameras and microphones. This way, you can see and communicate with whomever is at your door, even when you're away from the location.

The Seam API provides the capability to lock and unlock doors remotely. You can use capability flags to check whether your lock has the `can_remotely_lock` or `can_remotely_unlock` capability. For more information, see [Capability Flags](../../capability-guides/device-and-system-capabilities.md#capability-flags).

For locks equipped with keypads, our API also permits the creation and programming of access codes. Additional capability flags enable you to check whether your lock has the `can_program_online_access_codes` or `can_program_offline_access_codes` capability. For more information, see [Capability Flags](../../capability-guides/device-and-system-capabilities.md#capability-flags).

## What Is an Access Code?

An access code is a numeric or alphanumeric code that a user enters to gain access through the lock. Here's how it works:

* The smart lock owner sets a specific code for the lock.
* When the correct code is entered on the keypad, the lock releases and allows access.
* Access codes can be permanent (for homeowners or primary users) or temporary (for guests or service providers).

You can use capability flags to check whether your lock has the `can_program_online_access_codes` or `can_program_offline_access_codes` capability. For more information, see [Capability Flags](../../capability-guides/device-and-system-capabilities.md#capability-flags).

## **Next Steps**

To learn how to manage locks and access codes, see the following guides:

* [Locking and Unlocking](lock-and-unlock.md)
* [Managing Access Codes](access-codes/)

For the corresponding Seam API references, see [Locks](../../api-clients/locks/) and [Access Codes](../../api-clients/access-codes/).
