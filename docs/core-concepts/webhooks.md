---
description: Learn about using webhooks to receive notifications of events.
---

# Webhooks

## Configuring Webhooks

You can configure endpoints in each workspace for an app to receive webhook [event](../api-clients/events/) notifications for resources, such as devices and connected accounts.

To configure webhook endpoints:

1. In the left navigation pane of the [Seam Console](https://console.seam.co/), click **Webhooks**.
2. Click **+ Add Webhook**.
3. In the **Create Webhook** dialog, type your webhook URL and select the [event types](../api-clients/events/#event-types) for which you want to receive events.
4. Click **Create**.
5. Copy your webhook secret and store it somewhere secure. You use this webhook secret to validate the payloads that you receive on your webhook.

{% @supademo/embed demoId="o9OPTdLxdQi_jt2d5htNw" url="https://app.supademo.com/demo/o9OPTdLxdQi_jt2d5htNw" %}

You can add webhooks through the Seam Console or programmatically. Let's start by looking at how to add and test a webhook using the Seam Console.

![Click + Add Webhook to create a webhook for your device events.](<../.gitbook/assets/image (22).png>)

You can specify any public URL endpoint to receive webhook events by pasting the URL into the **Create Webhook** dialog.

![You can specify any internet-accessible URL as your webhook URL.](<../.gitbook/assets/image (24).png>)

Webhook endpoints can receive many different types of events, such as `device.connected` or `device.low_battery`. It's a good idea when getting started with webhooks to review the list of webhook [event types](../api-clients/events/#event-types) and test your endpoint using the Svix sandbox environment.

![The Svix sandbox environment enables you to test sending requests to an endpoint.](<../.gitbook/assets/image (15).png>)

You can view all the event types and the included fields in the **Event Catalog** tab.

![Go to the "Event Catalog" tab to view all available events.](<../.gitbook/assets/image (27).png>)

We use webhooks from Svix. For more information about consuming events, such as testing or verifying webhooks, see the [Svix docs](https://docs.svix.com/receiving/introduction).

## Retry Schedule for Webhooks

Seam delivers each webhook event based on a retry schedule with exponential backoff. Each message is attempted based on the following schedule, where each period is started following the failure of the preceding attempt:

* Immediately
* 5 seconds
* 5 minutes
* 30 minutes
* 2 hours
* 5 hours
* 10 hours
* 10 hours (in addition to the previous)

For example, an attempt that fails three times before eventually succeeding will be delivered roughly 35 minutes and 5 seconds following the first attempt.

If you remove or disable a webhook, delivery attempts to the endpoint are disabled as well.
