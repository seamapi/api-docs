---
description: Learn about device and system capabilities, as well as capability flags.
---

# 💪 Device and System Capabilities

Each device that you connect to Seam has a specific set of capabilities. These capabilities define the Seam API actions that you can use. For example, some devices support [remote unlock actions](../products/smart-locks/lock-and-unlock.md), while others support [programming access codes](../products/smart-locks/access-codes/). Some devices support both of these capabilities. When developing your application, it is imperative to be able to identify the capabilities of each device.

For example, if a device supports programming online access codes, your app can present the [`CreateAccessCodeForm` Seam Component](../seam-components/react-components/create-access-code-form.md) to your user. On the other hand, if a connected device does not support the remote unlock action, you'll likely want to disable or not display the unlock functionality for your app user.

## Capability Flags

Capability flags inform your application about what features and behaviors each device supports. That is, you can use capability flags to match devices to the requirements for operations within your app. These flags also compare the capabilities of a specific device instance with those of the device model in general.

All capability flags share the following behavior:

* If `true`, the device has this capability, and this capability is functional on this device instance.
*   If `false`, the device has this capability, but the capability is not currently functional.

    See the device [errors](../api-clients/devices/#device-error-types) and [warnings](../api-clients/devices/#device-warning-types) for more details about the cause of this issue. You can also examine the [properties](../api-clients/devices/#device-properties) of the device and [events](../api-clients/events/#event-types) related to the device to learn more about the cause of this issue.&#x20;
* If not present, the device does not have this capability.

Reasons why a capability flag might be `false` could include that the device is currently offline or that a required hardware accessory is not connected to the device.

Seam recommends adding capability checks before performing specific actions in your app. For example, before performing a [remote unlock](../products/smart-locks/lock-and-unlock.md#unlocking-a-door) operation, you can check to make sure that the target device supports remote unlocking. For details and code samples, see the corresponding [capability guides](broken-reference).

<table><thead><tr><th width="204">Property</th><th width="128.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>can_remotely_unlock</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether the device can perform a <a href="../products/smart-locks/lock-and-unlock.md">remote unlock operation</a>.</td></tr><tr><td><code>can_remotely_lock</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether the device can perform a <a href="../products/smart-locks/lock-and-unlock.md">remote lock operation</a>.</td></tr><tr><td><code>can_program_online_access_codes</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether the device can <a href="../products/smart-locks/access-codes/">program online access codes</a>.<br>If <code>true</code>, it is currently possible to create new online access codes for the device, and Seam programs the device the next time it's online.</td></tr><tr><td><code>can_program_offline_access_codes</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether the device can <a href="../products/smart-locks/access-codes/offline-access-codes.md">program offline access codes</a>.<br>When this flag is <code>true</code>, Seam can generate an offline code for this device, regardless of the current online status of the device.</td></tr></tbody></table>



{% hint style="info" %}
Seam is actively developing additional capability flags to provide you with even more robust capability checking abilities for your app. If you would like us to add a specific capability flag, contact [support@seam.co](mailto:support@seam.co).
{% endhint %}

***

## Next Steps

To learn about the actions that you can perform using the Seam API, see the Seam capability guides. These guides provide helpful tutorials and code samples, categorized by capability types.

* [Smart locks](../products/smart-locks/), including [locking/unlocking](../products/smart-locks/lock-and-unlock.md) and [managing access codes](../products/smart-locks/access-codes/)
* [Access control systems](../products/access-systems/)
* [Thermostats](../products/thermostats/)
* [Noise sensors](../products/noise-sensors/)
* [Mobile access](../products/mobile-access-in-development/)
* [Seam Bridge](seam-bridge.md)

