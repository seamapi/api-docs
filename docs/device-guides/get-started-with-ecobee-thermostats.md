---
description: Learn how to connect and control your Ecobee devices with the Seam API
---

# Get started with Ecobee Thermostats

<figure><img src="../.gitbook/assets/ecobee-getting-seo-cover.png" alt=""><figcaption><p>Ecobee Thermostats</p></figcaption></figure>

## Overview

Seam provides a universal API to connect and control many brands of devices such as smart locks, thermostats, and sensors. This guide provides a rapid introduction to connecting and controlling your [Ecobee](https://www.seam.co/manufacturers/ecobee) thermostats using the Seam API. To learn more about other brands of devices supported by Seam, head over to our [integration page](https://www.seam.co/supported-devices-and-systems).

To simplify the examples below, we'll use the following modules and utility variables:

## 1. Install Seam SDK

Seam provides client libraries for many languages such as Javascript, Python, Ruby, and PHP, as well as a Postman collection and [OpenAPI](https://connect.getseam.com/openapi.json) spec.

* **Javascript:** `npm i seam` ([npm](https://www.npmjs.com/package/seam), [github](https://github.com/seamapi/javascript))
* **Python:** `pip install seam` ([pip](https://pypi.org/project/seam/), [github](https://github.com/seamapi/python))
* **Ruby:** `bundle add seamapi` ([rubygem](https://rubygems.org/gems/seamapi), [github](https://github.com/seamapi/ruby)) (Thermostats coming soon!)
* **PHP:** `composer require seamapi/seam` ([packagist](https://packagist.org/packages/seamapi/seam), [github](https://github.com/seamapi/php)) (Thermostats coming soon!)

Once installed, [sign-up for Seam](https://console.seam.co/) to get your API key, and export it as an environment variable:

```
$ export SEAM_API_KEY=seam_test2ZTo_0mEYQW2TvNDCxG5Atpj85Ffw
```

{% hint style="info" %}
This guide uses a Sandbox Workspace. Only virtual thermostats can be connected. If you need to connect a real Ecobee device, use a non-sandbox workspace and API key.
{% endhint %}

## 2. Link Ecobee Account with Seam

To control your Ecobee device via the Seam API, you must first authorize your Seam workspace against your Ecobee account. To do so, Seam provides[ Connect Webviews](../core-concepts/connect-webviews/): pre-built UX flows that walk you through authorizing your application to control your Ecobee device.

### Create a Connect Webview

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam
seam = Seam()

webview = seam.connect_webviews.create(accepted_providers=["ecobee"])

assert webview.login_successful is False

# Send this webview url to your user!
print(webview.url)
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
import Seam from 'seamapi'

const seam = new Seam()

const connectWebview = await seam.connectWebviews.create({
  accepted_providers: ["ecobee"],
})

console.log(connectWebview.login_successful) // false

// Send the webview URL to your user
console.log(connectWebview.url)
```
{% endtab %}

{% tab title="Ruby" %}
<pre class="language-ruby"><code class="lang-ruby">require "seamapi"

<strong>seam = Seam::Client.new(api_key: "MY_API_KEY")
</strong>
webview = seam.connect_webviews.create(
  accepted_providers: ["ecobee"]
)

puts webview.login_successful # false

# Send the webview URL to your user 
puts webview.url
</code></pre>
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$webview = $seam->connect_webviews->create(
  accepted_providers: ["ecobee"]
);

# Send this webview url to your user!
echo json_encode($webview)
```
{% endtab %}
{% endtabs %}

### Authorize Your Workspace

Navigate to the URL returned by the Webview object. Since you are using a sandbox workspace, complete the login flow by entering the Ecobee [sandbox test accounts ](https://docs.seam.co/latest/device-guides/sandbox-and-sample-data)credentials below:

* **email**: jane@example.com
* **password**: 1234

<figure><img src="../.gitbook/assets/ecobee-connect-flow-screens.jpg" alt=""><figcaption><p>Seam Connect Webview flow to connect Ecobee account with Seam</p></figcaption></figure>

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

{% tab title="Javascript" %}
```javascript
const updatedWebview = await seam.connectWebviews.get(
  connectWebview.connect_webview_id,
)

console.log(updatedWebview.login_successful) // true
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
updated_webview = seam.connect_webviews.get(webview.connect_webview_id)

puts updated_webview.login_successful # true
```
{% endtab %}

{% tab title="PHP" %}
```php
$webview = $seam->connect_webviews->get($webview->id);
echo json_encode($webview);
```
{% endtab %}
{% endtabs %}

## 3. Retrieve your Ecobee Thermostat

Ecobee thermostats appear with the `device_type` `"ecobee_thermostat"`.

{% tabs %}
{% tab title="Python" %}
```python
devices = seam.devices.list(device_type="ecobee_thermostat")

devices[0]
# Device(
#   {
#     "device_id": "6019bfc1-c665-4eb7-85e5-0f4c06d9423f",
#     "device_type": "ecobee_thermostat",
#     "capabilities_supported": [
#       "thermostat"
#     ],
#     "properties": {
#       "online": true,
#       "is_cooling": false,
#       "is_heating": false,
#       "manufacturer": "ecobee",
#       "is_fan_running": false,
#       "ecobee_metadata": {
#         "device_name": "Office",
#         "ecobee_device_id": "b489215e-2e2d-4179-b4d9-bbaa9f531514"
#       },
#       "has_direct_power": true,
#       "relative_humidity": 0.54,
#       "temperature_celsius": 21.2,
#       "temperature_fahrenheit": 70.2,
#       "current_climate_setting": {
#         "hvac_mode_setting": "off",
#         "manual_override_allowed": false,
#         "automatic_cooling_enabled": false,
#         "automatic_heating_enabled": false
#       },
#       "default_climate_setting": {
#         "hvac_mode_setting": "off",
#         "manual_override_allowed": false,
#         "automatic_cooling_enabled": false,
#         "automatic_heating_enabled": false
#       },
#       "available_hvac_mode_settings": [
#         "off",
#         "cool",
#         "heat",
#         "heat_cool"
#       ],
#       "can_enable_automatic_cooling": true,
#       "can_enable_automatic_heating": true,
#       "is_temporary_manual_override_active": false,
#       "name": "Office",
#       "image_url": "https://connect.getseam.com/assets/images/devices/ecobee_logo_square.png",
#       "image_alt_text": "Ecobee Thermostat Image",
#       "is_climate_setting_schedule_active": false
#     },
#     "location": null,
#     "connected_account_id": "83d9062d-8f8e-4ec8-8f84-427595f94e10",
#     "workspace_id": "cd9f2ac9-b201-4591-80ec-0edf08645014",
#     "created_at": "2023-06-08T17:49:50.196Z",
#     "errors": [],
#     "warnings": []
#   }
# )
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
const devices = await seam.devices.list({
  device_type: 'ecobee_thermostat',
})

console.log(devices[0])
/*
{
  "device_id": "6019bfc1-c665-4eb7-85e5-0f4c06d9423f",
  "device_type": "ecobee_thermostat",
  "capabilities_supported": [
    "thermostat"
  ],
  "properties": {
    "online": true,
    "is_cooling": false,
    "is_heating": false,
    "manufacturer": "ecobee",
    "is_fan_running": false,
    "ecobee_metadata": {
      "device_name": "Office",
      "ecobee_device_id": "b489215e-2e2d-4179-b4d9-bbaa9f531514"
    },
    "has_direct_power": true,
    "relative_humidity": 0.54,
    "temperature_celsius": 21.2,
    "temperature_fahrenheit": 70.2,
    "current_climate_setting": {
      "hvac_mode_setting": "off",
      "manual_override_allowed": false,
      "automatic_cooling_enabled": false,
      "automatic_heating_enabled": false
    },
    "default_climate_setting": {
      "hvac_mode_setting": "off",
      "manual_override_allowed": false,
      "automatic_cooling_enabled": false,
      "automatic_heating_enabled": false
    },
    "available_hvac_mode_settings": [
      "off",
      "cool",
      "heat",
      "heat_cool"
    ],
    "can_enable_automatic_cooling": true,
    "can_enable_automatic_heating": true,
    "is_temporary_manual_override_active": false,
    "name": "Office",
    "image_url": "https://connect.getseam.com/assets/images/devices/ecobee_logo_square.png",
    "image_alt_text": "Ecobee Thermostat Image",
    "is_climate_setting_schedule_active": false
  },
  "location": null,
  "connected_account_id": "83d9062d-8f8e-4ec8-8f84-427595f94e10",
  "workspace_id": "cd9f2ac9-b201-4591-80ec-0edf08645014",
  "created_at": "2023-06-08T17:49:50.196Z",
  "errors": [],
  "warnings": []
}
*/
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
```php
// Coming soon!
```
{% endtab %}
{% endtabs %}

## 4. Create a Climate Setting Schedule

A Climate Setting Schedule allows you to set up a thermostat HVAC mode setting (heating, cooling, or off) and desired temperature set points during a specified time frame

For instance, if you are a short-term-rental host who has a guest staying from Jan 1st - Jan 7th, you can create a Climate Setting Schedule that sets the thermostat to a climate setting (i.e. Heat to 70°C) throughout that guest's stay.

The Seam API makes it easy to program `timebound` climate setting schedules onto an Ecobee thermostat. You can find out more about Ecobee thermostat climate setting in our [core concept section on climate settings.](../products/thermostats/thermostats-climate-setting-schedules.md)

{% tabs %}
{% tab title="Python" %}
```python
seam.climate_setting_schedules.create(
    "123e4567-e89b-12d3-a456-426614174001",
    name="Guest #1234",
    schedule_starts_at="2022-07-01T10:40:00Z",
    schedule_ends_at="2022-07-10T10:40:00Z",
    automatic_heating_enabled=True,
    automatic_cooling_enabled=True,
    heating_set_point_fahrenheit=70,
    cooling_set_point_fahrenheit=75,
    manual_override_enabled=true
)

# ClimateSettingSchedule:
#    climate_setting_schedule_id: 123e4567-e89b-12d3-a456-426614174000
#    device_id: 123e4567-e89b-12d3-a456-426614174001
#    name: Guest Stay #1234  
#    schedule_starts_at: 2022-07-01T10:40:00Z    
#    schedule_ends_at: 2022-07-10T10:40:00Z     
#    created_at: 2022-07-06T23:26:42.223Z      
#    is_set_on_device: False
#    automatic_heating_enabled: True
#    automatic_cooling_enabled: True  
#    hvac_mode_setting: heat_cool
#    cooling_set_point_fahrenheit: 75 
#    heating_set_point_fahrenheit: 65
#    manual_override_allowed: False
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.climateSettingSchedules.create({
    "device_id": "123e4567-e89b-12d3-a456-426614174001",
    "name": "Guest Stay #1234",
    "schedule_starts_at": "2022-07-01T10:40:00Z",
    "schedule_ends_at": "2022-07-10T10:40:00Z",
    "automatic_heating_enabled": true,
    "automatic_cooling_enabled": true,
    "cooling_set_point_fahrenheit": 75,
    "heating_set_point_fahrenheit": 65,
    "manual_override_allowed": true
});

/*
{
    "climate_setting_schedule_id": "123e4567-e89b-12d3-a456-426614174000",
    "device_id": "123e4567-e89b-12d3-a456-426614174001",
    "name": "Guest Stay #1234",
    "schedule_starts_at": "2022-07-01T10:40:00Z",
    "schedule_ends_at": "2022-07-10T10:40:00Z",
    "created_at": "2022-07-06T23:26:42.223Z",
    "is_set_on_device": false,
    "automatic_heating_enabled": true,
    "automatic_cooling_enabled": true,
    "hvac_mode_setting": "heat_cool",
    "cooling_set_point_fahrenheit": 75,
    "heating_set_point_fahrenheit": 65,
    "manual_override_allowed": false
}
*/
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
```php
Coming soon!
```
{% endtab %}
{% endtabs %}

## 5. Set your Default Climate Setting

When there are no active Climate Setting Schedules, the thermostat will fallback to its [Default Climate Setting](../api-clients/thermostats/update-a-thermostat.md).

{% hint style="info" %}
The Default Climate Setting for a thermostat will be set to the following settings by default:

* `automatic_cooling_enabled: off`
* `automatic_heating_enabled: off`
{% endhint %}

For example, if you are a short-term-rental host, you have configure a more energy-saving temperature setting here (i.e. Heat to 45°C).

{% tabs %}
{% tab title="Python" %}
```python
seam.thermostats.update(
  device_id: "a83690b2-2b70-409a-9a94-426699b84c97",
  default_climate_setting: {
    "automatic_cooling_enabled": true,
    "automatic_heating_enabled": true,
    "cooling_set_point_fahrenheit": 70
    "heating_set_point_fahrenheit": 65
  }
)

# <Seam::ActionAttempt:0x008f6b0                                                         
#   status="success"                                                                     
#   action_type="UPDATE_THERMOSTAT"
#   action_attempt_id="4c3f9e12-5c9e-474e-92c4-719f72e13496"
#   result={}>
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.thermostats.update({
  device_id: "a83690b2-2b70-409a-9a94-426699b84c97",
  default_climate_setting: {
    "automatic_heating_enabled": true,
    "heating_set_point_fahrenheit": 70
  },
});

//{}
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
```php
// Coming soon!
```
{% endtab %}
{% endtabs %}

## Next Steps

Now that you've completed this guide, you can try to connect a real Ecobee device. To do so, make sure to switch to a non-sandbox workspace and API key as real devices cannot be connected to sandbox workspaces.

If you have any questions or want to report an issue, email us at [support@seam.co](mailto:support@seam.com)
