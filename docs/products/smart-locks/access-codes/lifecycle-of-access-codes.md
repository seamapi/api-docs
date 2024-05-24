---
description: >-
  Learn how access codes transition between states, and the corresponding events
  that are emitted.
---

# Lifecycle of Access Codes

Programming access codes involves [asynchronous](https://en.wikipedia.org/wiki/Asynchronous\_system) processes, which can be complex to manage. Such asynchronous flows depend on interactions with smart devices and third-party applications outside your main application. Our access code API streamlines this process by tracking the status of the access code using a state machine.

The access code flow begins when you use Seam to make a request to create an access code. The access code creation process starts with the code in the `unset` state. Then, the access code proceeds through the rest of the states.

<figure><img src="../../../.gitbook/assets/state-sequence-for-access-codes-lifecycle-dark.png" alt=""><figcaption><p>Lifecycle of an access code</p></figcaption></figure>

## 1. `unset` - Awaiting programming

This is the initial state of an access code. At this stage, the code is created in the system but has not yet been sent to or recognized by the smart device. It's essentially in a queue, waiting for its turn to be programmed.

For natively-scheduled codes, Seam will preload the access code onto the device **72 hours ahead** of the `starts_at` time. Seam will also emit an `access_code.scheduled_on_device` event, which indicates a natively-scheduled code has been programmed on the device, and is awaiting its designated activation time. You'll observe that the access code remains in an `unset` state until the `starts_at` time, at which point it will activate and transition to the `set` status.

## 2. `setting` - Programming in progress

For Just-in-time codes, once the code starts being programmed onto the smart device, it transitions to the `setting` state. During this phase, Seam is actively trying to communicate with the smart device to program the code.

For natively-scheduled codes, if there's an issue programming the natively-scheduled code by its `starts_at` time, then the code's status will display as `setting`.

## 3. `set` - Active for use

Once an access code is successfully programmed onto a smart device, specific events are emitted to indicate its status. For standard access codes, the `access_code.set_on_device` event is triggered, signifying successful programming. Regardless of the type, the code is securely stored in the device's memory. However, its immediate usability may be contingent on properties like `starts_at`. For [natively scheduled](./#native-scheduling) codes, you can expect the `access_code.set_on_device` event to be emitted when the `starts_at` activation time is reached.

## 4. `removing` - Being removed from device

When an access code is no longer required or its `ends_at` time has been reached, Seam initiates the process to remove the code from the device. The access code then transitions to the "removing" state. During this period, the system actively communicates with the smart device, working to erase the access code from its memory.

## 5. Access code unprogrammed and deleted from Seam

When an access code is removed from a device, it's not just deleted from the device's memory. Correspondingly, the access code object is also deleted from Seam's database. As a result, if you try to retrieve that specific access code through the 'get access code' endpoint afterwards, you will encounter a 404 error, indicating that the code no longer exists.

{% hint style="info" %}
Seam is modifying the behavior of access codes so they won't return a 404 error unless explicitly deleted by the API user. Currently, access codes yield a 404 error when removed from a device, such as when a time-bound access code expires.
{% endhint %}

***

## `unknown` - Seam lost connection to account

Beyond the states previously detailed, an "unknown" state exists. This state suggests that the account has been disconnected, preventing Seam from interfacing with the third-party API to verify the access code.
