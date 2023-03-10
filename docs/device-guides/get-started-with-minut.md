---
description: Learn how to connect and control your Minut monitors sensors with the Seam API
---

# Get started with Minut

## Overview

{% hint style="warning" %}
The Minut integration is still in beta, some details of this guide may change as the integration reaches stability.
{% endhint %}

## 1. Install Seam SDK

Seam provides client libraries for many languages such as Javascript, Python, Ruby, and PHP, as well as a Postman collection and [OpenAPI](https://connect.getseam.com/openapi.json) spec.

* **Javascript:** `npm i seamapi` ([npm](https://www.npmjs.com/package/seamapi), [github](https://github.com/seamapi/javascript))
* **Python:** `pip install seamapi` ([pip](https://pypi.org/project/seamapi/), [github](https://github.com/seamapi/python))
* **Ruby:** `bundle add seamapi` ([rubygem](https://rubygems.org/gems/seamapi), [github](https://github.com/seamapi/ruby))
* **PHP:** `composer require seamapi/seam` ([packagist](https://packagist.org/packages/seamapi/seam), [github](https://github.com/seamapi/php))

Once installed, [sign-up for Seam](https://dashboard.getseam.com/) to get your API key, and export it as an environment variable:

```
$ export SEAM_API_KEY=seam_test2ZTo_0mEYQW2TvNDCxG5Atpj85Ffw
```

{% hint style="info" %}
This guide uses a Sandbox Workspace. Only virtual devices can be connected. If you need to connect a real August Lock, use a non-sandbox workspace and API key.
{% endhint %}

## 2. Link Minut Account with Seam

To control your August lock via the Seam API, you must first authorize your Seam workspace against your August account. To do so, Seam provides[ Connect Webviews](../core-concepts/connect-webviews.md): pre-built UX flows that walk you through authorizing your application to control your August lock.

### Create a Connect Webview

{% tabs %}
{% tab title="Python" %}
```python
from seamapi import Seam
seam = Seam()

webview = seam.connect_webviews.create(accepted_providers=["minut"])

assert webview.login_successful is False

# Send this webview url to your user!
print(webview.url)
```
{% endtab %}
{% endtabs %}

### Authorize Your Workspace

Navigate to the URL returned by the Webview object. Since you are using a sandbox workspace, complete the login flow by entering the Minut [sandbox test accounts ](https://docs.seam.co/latest/device-guides/sandbox-and-sample-data)credentials below:

* **email**: jane@example.com
* **password**: 1234

### Get the New Webview

After you complete the login above, you'll get an event for [`connected_account.created`](../api-clients/events/)if you set up a [webhook handler](../core-concepts/webhooks.md). Otherwise you can just poll for the webview until it's status changes, as shown below:

{% tabs %}
{% tab title="Python" %}
```python
updated_webview = seam.connect_webviews.get(
    webview.connect_webview_id
)

assert updated_webview.login_successful # true
```
{% endtab %}
{% endtabs %}

## 3. Retrieve Minut Noise Monitors

Minut noise monitors appear with the `device_type` `"minut_noise_monitor"`. The Minut noise sensors report properties in addition to noise levels, namely `temperature` and `humidity`.

{% tabs %}
{% tab title="Python" %}
```python
sensors = seam.devices.list(device_type="minut_noise_monitor")

sensors[0]
# Device(
#   device_type="minut_noise_monitor",
#   location=None,
#   properties={
#     "online": True,
#     "last_reported_noise_level_decibels": 40,
#     "temperature_celsius": 20,
#     "temperature_fahrenheit": 68,
#     "humidity": 0.78,     
#   }
# )
```
{% endtab %}
{% endtabs %}

## 4. Receive Noise Events

Minut users can define noise thresholds at which&#x20;

You'll get an event for `noise_threshold.noise_threshold_triggered` when you set up a [webhook handler](../core-concepts/webhooks.md). You can also [poll for events](../api-clients/events/list-events.md).

{% hint style="info" %}
Minut has a builtin threshold that can be triggered multiple times. Each Minut notice will trigger a `noise_threshold_triggered` event with the `minut_metadata.event_name` containing the Minut event name, which can be any of the following:

* `disturbance_first_notice`
* `disturbance_second_notice`
* `disturbance_third_notice`
* `disturbance_ended`
{% endhint %}

{% tabs %}
{% tab title="Python" %}
<pre class="language-python"><code class="lang-python">@app.route("/my_webhook_endpoint", methods=["POST"])
def endpoint():
    event = request.json["event"]
    # {
    #    noise_threshold_id: "...",
    #    noise_threshold_name: "builtin_disturbance"
    #    minut_metadata: {
    #       "event_name": "disturbance_first_notice",
    #    },
    #    device_id: "...";
    #    noise_level_decibels: 40,
<strong>    #    created_at: "2023-03-14T05:00:35.451Z"
</strong>    # }
        
</code></pre>
{% endtab %}
{% endtabs %}

## Next Steps

Now that you've completed this guide, you can try to connect a real Minut device. To do so, make sure to switch to a non-sandbox workspace and API key as real devices cannot be connected to sandbox workspaces.

If you have any questions or want to report an issue, email us at support@seam.co

