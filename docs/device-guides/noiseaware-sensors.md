---
description: Guide for using NoiseAware sensors with Seam
---

# NoiseAware Sensors

## Overview

Seam integrates with NoiseAware sensors to provide [privacy-safe noise monitoring](https://noiseaware.com/privacy-safe-noise-monitoring/) functions for the short-term rental and vacation rental industries. NoiseAware produces both an indoor sensor and an accompanying weatherproof outdoor sensor. For each NoiseAware sensor, you can set one noise threshold per hour, and the sensor notifies owners when noise levels exceed these configured thresholds.

***

## Supported Devices

This integration supports all [NoiseAware sensors](https://noiseaware.com/features/).

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  client-session-token="seam_cst126DAjfor_2kxn8QAAEUkj3Zu4Nr1Aoauy"
  manufacturers='["NoiseAware"]'
/>" %}

We support the following features:

* [Configuring noise threshold settings](../products/noise-sensors/configure-noise-threshold-settings.md)\
  You can configure a maximum of one noise threshold per hour per Noiseaware sensor. You cannot configure thresholds with time periods that overlap.
* [Receiving noise sensor events when noise events occur](../api-clients/events/)\
  For more information, see [Noise Sensor Events](../api-clients/events/#noise-sensor-events) and `noise_sensors.noise_threshold_triggered` in [Event Types](../api-clients/events/#event-types).

***

### Device Provider Key

To create a [Connect Webview](../core-concepts/connect-webviews/) that enables your users to connect their NoiseAware devices to Seam, include the `noiseaware` [device provider key](../api-clients/connect-webviews/#device-provider-keys) in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webview](../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Setup Instructions

To control NoiseAware devices using Seam, you must prompt owners of these devices to perform the following steps:

1. Install the NoiseAware [iOS](https://apps.apple.com/us/app/noiseaware/id1436213179) or [Android](https://play.google.com/store/apps/details?id=io.noiseaware.mobile\&hl=en\_US\&gl=US) mobile app.
2. Create an account in the NoiseAware mobile app if you have not done so already.
3. In the NoiseAware mobile app, add your NoiseAware sensors.
4. Note your login credentials for the NoiseAware mobile app, and use these credentials to log in to the [Seam Connect Webview](../core-concepts/connect-webviews/) to add your devices to Seam.

***

## Where to Order

To purchase NoiseAware sensors, visit the NoiseAware online store.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>NoiseAware Online Store</strong></td><td></td><td><a href="https://noiseaware.com/cart/">https://noiseaware.com/cart/</a></td><td><a href="../.gitbook/assets/noiseaware-logo.png">noiseaware-logo.png</a></td></tr></tbody></table>

***

