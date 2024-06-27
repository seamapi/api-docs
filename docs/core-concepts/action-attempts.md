---
description: >-
  Learn about action attempts and how they help you to track the progress of
  asynchronous actions in the physical world.
---

# Action Attempts

As seen in the [Capability Guides](broken-reference) section, you can perform actions against a device. However, devices exist in the physical world. The physical world is intrinsically asynchronous.

This means that certain actions can take seconds, minutes, or even days to complete. Furthermore, an action can fail, and you may also not find out until later.

This situation is challenging because the world of APIs is generally synchronous (request-response). APIs must answer instantly, but an instant response would imply instant completion of a long-lived physical process. Clearly, in this case, an instant response is not possible.

To solve this issue, we created action attempts.

When you request for a device to perform an action, the Seam API immediately returns an action attempt object. In the background, the Seam API performs the action.

This action attempt enables you to keep track of the progress of your action.

Our client libraries do this automatically for you. However, you can also choose not to wait and to check on the action at a later time.

For more information, see the [Action Attempts](../api-clients/action-attempt/) in the Seam API reference.
