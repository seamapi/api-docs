# Action Attempts

As seen in the [Capability Guides](broken-reference) section, you can perform actions against a device. However, devices exist in the physical world. The physical world is intrinsically asynchronous.

This means that certain actions can take seconds, minutes, or even days to complete. Furthermore, an action can fail and you may also not find out until later.

This is challenging because the world of APIs is generally synchronous (request-response). APIs must answer instantly. But an instant response would imply instant completion of a long-lived physical process. This is not possible.

To solve this, we created Action Attempts.

When you request for a device to perform an action, the Seam API will immediately return an Action Attempt object. In the background, the Seam API will perform the action.

This Action Attempt allows you to keep track of the progress of your Action.

Our client libraries do this automatically for you. However, you can also choose not to wait, and check on the Action at a later time.
