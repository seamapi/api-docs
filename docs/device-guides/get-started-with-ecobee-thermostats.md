---
description: Learn how to connect and control your Ecobee devices with the Seam API
---

# Get Started with ecobee Thermostats

<figure><img src="../.gitbook/assets/ecobee-getting-seo-cover.png" alt=""><figcaption><p>ecobee Thermostats</p></figcaption></figure>

## Overview

Seam provides a universal API to connect and control many brands of devices such as smart locks, thermostats, and sensors. This guide provides a rapid introduction to connecting and controlling your [ecobee](https://www.seam.co/manufacturers/ecobee) thermostats using the Seam API. To learn more about other brands of devices supported by Seam, head over to our [integration page](https://www.seam.co/supported-devices-and-systems).

## 1. Install Seam SDK

Seam provides client libraries for many languages, such as JavaScript, Python, Ruby, PHP, and others, as well as a Postman collection and [OpenAPI](https://connect.getseam.com/openapi.json) spec.

* JavaScript / TypeScript ([npm](https://www.npmjs.com/package/seam), [GitHub](https://github.com/seamapi/javascript))
* Python ([pip](https://pypi.org/project/seam/), [GitHub](https://github.com/seamapi/python))
* Ruby Gem ([rubygem](https://rubygems.org/gems/seamapi), [GitHub](https://github.com/seamapi/ruby))
* PHP ([packagist](https://packagist.org/packages/seamapi/seam), [GitHub](https://github.com/seamapi/php))
* Java ([GitHub](https://github.com/seamapi/java))
* C# ([nuget](https://www.nuget.org/packages/Seam), [GitHub](https://github.com/seamapi/csharp))
* Go ([GitHub](https://github.com/seamapi/go))

{% tabs %}
{% tab title="JavaScript" %}
```bash
npm i seam
```
{% endtab %}

{% tab title="Python" %}
```bash
pip install seam
# For some development environments, use pip3 in this command instead of pip.
```
{% endtab %}

{% tab title="Ruby" %}
```bash
bundle add seamapi
```
{% endtab %}

{% tab title="PHP" %}
```bash
composer require seamapi/seam
```
{% endtab %}

{% tab title="Java" %}
**Gradle:**

```gradle
// build.gradle
dependencies {
    implementation 'io.github.seamapi:java:0.x.x'
}
```

**Maven:**

```xml
<!-- pom.xml -->
<dependency>
    <groupId>io.github.seamapi</groupId>
    <artifactId>java</artifactId>
    <version>0.x.x</version>
</dependency>
```
{% endtab %}

{% tab title="C#" %}
Install using [nuget](https://www.nuget.org/packages/Seam).
{% endtab %}

{% tab title="Go" %}
```bash
go get github.com/seamapi/go
```
{% endtab %}
{% endtabs %}

Once installed, [sign-up for Seam](https://console.seam.co/) to get your API key and export it as an environment variable:

```
$ export SEAM_API_KEY=seam_test2ZTo_0mEYQW2TvNDCxG5Atpj85Ffw
```

{% hint style="info" %}
This guide uses a sandbox workspace. You can only connect virtual thermostats to a sandbox workspace. If you need to connect a real ecobee device, use a non-sandbox workspace and API key.
{% endhint %}

## 2. Link ecobee Account with Seam

To control your ecobee device using the Seam API, you must first authorize your Seam workspace against your ecobee account. To do so, Seam provides[ Connect Webviews](../core-concepts/connect-webviews/): pre-built UX flows that walk you through authorizing your application to control your ecobee device.

### Create a Connect Webview

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam
seam = Seam()

webview = seam.connect_webviews.create(accepted_providers=["ecobee"])

assert webview.login_successful is False

# Send the Connect Webview URL to your user.
print(webview.url)
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from 'seam'

const seam = new Seam()

const connectWebview = await seam.connectWebviews.create({
  accepted_providers: ["ecobee"],
})

console.log(connectWebview.login_successful) // false

// Send the Connect Webview URL to your user.
console.log(connectWebview.url)
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$webview = $seam->connect_webviews->create(
  accepted_providers: ["ecobee"]
);

echo json_encode($webview->login_successful), "\n"; # false

# Send the Connect Webview URL to your user.
echo json_encode($webview->url), "\n";
```
{% endtab %}

{% tab title="Java" %}
```java
ConnectWebview createdConnectWebview = seam.connectWebviews().create(ConnectWebviewsCreateRequest.builder()
                .acceptedProviders(List.of(
                  AcceptedProvider.ECOBEE))
                .build());
System.out.println(createdConnectWebview.getLoginSuccessful()); // false

// Send the Connect Webview URL to your user.
System.out.println(createdConnectWebview.getUrl());
```
{% endtab %}

{% tab title="Go" %}
```go
connectWebview, err := client.ConnectWebviews.Create(
  context.Background(),
  &api.ConnectWebviewsCreateRequest{
        AcceptedProviders: []api.AcceptedProvider{
  	      api.AcceptedProviderEcobee,
        },
  },
)
if err != nil {
  return err
}
fmt.Println(connectWebview.LoginSuccessful) // false

# Send the Connect Webview URL to your user.
fmt.Println(connectWebview.Url)

return nil
```
{% endtab %}
{% endtabs %}

### Authorize Your Workspace

Navigate to the URL that the Connect Webview object returns. Because you are using a sandbox workspace, complete the login flow by entering the following ecobee [sandbox test account ](sandbox-and-sample-data/ecobee-sample-data.md)credentials:

* **email**: jane@example.com
* **password**: 1234

<figure><img src="../.gitbook/assets/ecobee-connect-flow-screens.jpg" alt=""><figcaption><p>Seam Connect Webview flow to connect ecobee account with Seam</p></figcaption></figure>

### Get the New Connect Webview

After you complete the authorization login, you receive an event for [`connected_account.created`](../api-clients/events/)if you set up a [webhook handler](../core-concepts/webhooks.md). Otherwise, you can poll for the Connect Webview until the status of this Connect Webview changes, as follows:

{% tabs %}
{% tab title="Python" %}
```python
updated_webview = seam.connect_webviews.get(
    webview.connect_webview_id
)

assert updated_webview.login_successful # true
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
const updatedWebview = await seam.connectWebviews.get(
  connectWebview.connect_webview_id,
)

console.log(updatedWebview.login_successful) // true
```
{% endtab %}

{% tab title="PHP" %}
```php
$updated_webview = $seam->connect_webviews->get($webview->id);
echo json_encode($updated_webview->login_successful); // true
```
{% endtab %}

{% tab title="Java" %}
```java
ConnectWebview updatedConnectWebview = seam.connectWebviews().get(ConnectWebviewsGetRequest.builder()
                .connectWebviewId(createdConnectWebview.getConnectWebviewId())
                .build());
System.out.println(updatedConnectWebview.getLoginSuccessful()); // true
```
{% endtab %}

{% tab title="Go" %}
```go
updatedConnectWebview, err := client.ConnectWebviews.Get(
  context.Background(),
  &api.ConnectWebviewsGetRequest{
      ConnectWebviewId: connectWebview.ConnectWebviewId,
  },
)
if err != nil {
  return err
}
fmt.Println(updatedConnectWebview.LoginSuccessful) // true
return nil
```
{% endtab %}
{% endtabs %}

## 3. Retrieve your ecobee Thermostat

ecobee thermostats appear with the `device_type` `"ecobee_thermostat"`.

{% tabs %}
{% tab title="Python" %}
```python
devices = seam.devices.list(device_type="ecobee_thermostat")

pprint(devices[0])
# Device(
#   {
#     "device_id": "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
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

{% tab title="JavaScript" %}
```javascript
const devices = await seam.devices.list({
  device_type: 'ecobee_thermostat',
})

console.log(devices[0])
/*
{
  "device_id": "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
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

{% tab title="PHP" %}
```php
$devices = $seam->devices->list(
  device_type: "ecobee_thermostat"
);
echo json_encode($devices[0]), "\n";

// {"device_id":"5ce2cd35-09b1-458c-bb08-51ee83c35be7","device_type":"ecobee_thermostat","capabilities_supported":["thermostat"],"properties":{"online":true,"name":"hurtful hypothesis","model":{"display_name":"Thermostat","manufacturer_display_name":"Ecobee",...}
```
{% endtab %}

{% tab title="Java" %}
```java
var devices = seam.devices().list(DevicesListRequest.builder()
                .deviceType(DeviceType.ECOBEE_THERMOSTAT)
                .build());

System.out.println(devices);
// [{
//   "device_id" : "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
//   "device_type" : "ecobee_thermostat",
//   "capabilities_supported" : [ "thermostat" ],
//   "properties" : {
//     "online" : true,
//     "name" : "Thermostat_1",
//     "model" : {
//       "display_name" : "Thermostat",
//       "accessory_keypad_supported" : false,
//       "manufacturer_display_name" : "Ecobee"
//     },
//     "current_climate_setting" : {
//       "automatic_heating_enabled" : false,
//       "automatic_cooling_enabled" : false,
//       "hvac_mode_setting" : "off",
//       "manual_override_allowed" : true
//     },
//     "temperature_celsius" : 21.11111111111111,
//     "min_heating_set_point_celsius" : 7.222222222222222,
//     "max_cooling_set_point_fahrenheit" : 92,
//     "is_heating" : false,
//     "is_cooling" : false,
//     "manufacturer" : "ecobee",
//     "max_heating_set_point_celsius" : 26.11111111111111,
//     "max_cooling_set_point_celsius" : 33.333333333333336,
//     "is_temporary_manual_override_active" : false,
//     "min_heating_cooling_delta_fahrenheit" : 5,
//     "available_hvac_mode_settings" : [ "off", "cool", "heat", "heat_cool" ],
//     "has_direct_power" : true,
//     "can_enable_automatic_cooling" : true,
//     "min_cooling_set_point_fahrenheit" : 65,
//     "min_heating_cooling_delta_celsius" : 2.7777777777777777,
//     "min_cooling_set_point_celsius" : 18.333333333333336,
//     "can_enable_automatic_heating" : true,
//     "max_heating_set_point_fahrenheit" : 79,
//     "is_cooling_available" : true,
//     "image_url" : "https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png",
//     "is_fan_running" : false,
//     "image_alt_text" : "Ecobee 3 Lite Thermostat",
//     "min_heating_set_point_fahrenheit" : 45,
//     "ecobee_metadata" : {
//       "device_name" : "Thermostat_1",
//       "ecobee_device_id" : "c44f7f6a-97c6-4317-99a1-dae14fe20bb5"
//     },
//     "fan_mode_setting" : "on",
//     "is_climate_setting_schedule_active" : false,
//     "relative_humidity" : 0.36,
//     "temperature_fahrenheit" : 70,
//     "is_heating_available" : true
//   },
//   "connected_account_id" : "aaf37f42-f5a1-4223-a7db-2b61700bf2a9",
//   "workspace_id" : "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
//   "created_at" : "2024-02-29T21:24:29.792Z",
//   "is_managed" : true,
//   "custom_metadata" : { }
// }]
```
{% endtab %}

{% tab title="Go" %}
```go
devices, err := client.Devices.List(
	context.Background(), &api.DevicesListRequest{
    DeviceType: api.DeviceTypeEcobeeThermostat.Ptr(),
  },
)
if err != nil {
	return err
}
fmt.Println(devices)
return nil

// [{
//   "device_id": "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
//   "device_type": "ecobee_thermostat",
//   "capabilities_supported": [
//     "thermostat"
//   ],
//   "properties": {
//     "online": true,
//     "is_cooling": false,
//     "is_heating": false,
//     "manufacturer": "ecobee",
//     "is_fan_running": true,
//     "ecobee_metadata": {
//       "device_name": "Thermostat_1",
//       "ecobee_device_id": "c44f7f6a-97c6-4317-99a1-dae14fe20bb5"
//     },
//     "fan_mode_setting": "on",
//     "has_direct_power": true,
//     "relative_humidity": 0.36,
//     "temperature_celsius": 21.11111111111111,
//     "is_cooling_available": true,
//     "is_heating_available": true,
//     "temperature_fahrenheit": 70,
//     "current_climate_setting": {
//       "automatic_heating_enabled": false,
//       "automatic_cooling_enabled": false,
//       "hvac_mode_setting": "off",
//       "manual_override_allowed": true
//     },
//     "available_hvac_mode_settings": [
//       "off",
//       "cool",
//       "heat",
//       "heat_cool"
//     ],
//     "can_enable_automatic_cooling": true,
//     "can_enable_automatic_heating": true,
//     "max_cooling_set_point_celsius": 33.333333333333336,
//     "max_heating_set_point_celsius": 26.11111111111111,
//     "min_cooling_set_point_celsius": 18.333333333333336,
//     "min_heating_set_point_celsius": 7.222222222222222,
//     "min_heating_cooling_delta_celsius": 2.7777777777777777,
//     "is_temporary_manual_override_active": false,
//     "name": "Thermostat_1",
//     "model": {
//       "display_name": "Thermostat",
//       "manufacturer_display_name": "Ecobee",
//       "accessory_keypad_supported": false
//     },
//     "image_url": "https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png",
//     "image_alt_text": "Ecobee 3 Lite Thermostat",
//     "is_climate_setting_schedule_active": false,
//     "min_heating_set_point_fahrenheit": 45,
//     "max_heating_set_point_fahrenheit": 79,
//     "min_cooling_set_point_fahrenheit": 65,
//     "max_cooling_set_point_fahrenheit": 92,
//     "min_heating_cooling_delta_fahrenheit": 5
//   },
//   "location": null,
//   "connected_account_id": "aaf37f42-f5a1-4223-a7db-2b61700bf2a9",
//   "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
//   "created_at": "2024-02-29T21:24:29.792Z",
//   "errors": [],
//   "warnings": [],
//   "is_managed": true,
//   "custom_metadata": {}
// }]
```
{% endtab %}
{% endtabs %}

## 4. Set the Current HVAC and Fan Mode Settings

Seam enables you to adjust the [current heating and cooling settings](../products/thermostats/configure-current-climate-settings.md) on a smart thermostat, including the [HVAC mode](../products/thermostats/hvac-mode.md) and the corresponding [set points](../products/thermostats/set-points.md). It also enables you to configure the [fan mode](../products/thermostats/configure-current-climate-settings.md#set-the-fan-mode). These two operations return [action attempts](../core-concepts/action-attempts.md).

For example, use the following code samples to set your thermostat to heat mode and the fan mode to on:

{% tabs %}
{% tab title="Python" %}
```python
heat_request = seam.thermostats.heat(
  device = "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
  heating_set_point_celsius = 20
)
pprint(heat_request)

# ActionAttempt(action_attempt_id='97125745-15d9-4970-b5be-c34ec3ce1c81',
#              action_type='SET_HEAT',
#              status='success',
#              result={},
#              error=None)

fan_on_request = seam.thermostats.set_fan_mode(
  device = "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
  fan_mode = "on"
)
pprint(fan_on_request)

# ActionAttempt(action_attempt_id='9c9b584b-c645-4ce0-a9c2-79b6f1db2396',
#              action_type='SET_FAN_MODE',
#              status='success',
#              result={},
#              error=None)
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
const heat_request = await seam.thermostats.heat({
      device_id: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
      heating_set_point_celsius: 20
})

console.log(heat_request)

// {
//   actionAttempt: {
//     status: 'success',
//     action_attempt_id: '38c06dba-99b1-4c10-b542-f98e2963cb52',
//     action_type: 'SET_HEAT',
//     result: {},
//     error: null
//   }
// }

const fan_on_request = await seam.thermostats.setFanMode({
  device_id: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
  fan_mode_setting: "on"
})

console.log(fan_on_request)

// {
//   actionAttempt: {
//     status: 'success',
//     action_attempt_id: 'fca8cb4f-6e0c-4c37-878b-ebe17df46456',
//     action_type: 'SET_FAN_MODE',
//     result: {},
//     error: null
//   }
// }
```
{% endtab %}

{% tab title="PHP" %}
```php
$heat_request = $seam->thermostats->heat(
  device_id: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
  heating_set_point_celsius: 20
);

$fan_on_request = $seam->thermostats->set_fan_mode(
  device_id: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
  fan_mode_setting: "on"
);
```
{% endtab %}

{% tab title="Java" %}
```java
var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
seam.thermostats().heat(ThermostatsHeatRequest.builder()
                .deviceId(deviceId)
                .heatingSetPointCelsius(20.0)
                .build());
Device thermostat = seam.thermostats()
        .get(ThermostatsGetRequest.builder()
                .deviceId(deviceId)
                .build());
System.out.println("Thermostat ID: " + thermostat.getDeviceId());
System.out.println("Mode: " + thermostat.getProperties().getCurrentClimateSetting().get().getHvacModeSetting());
System.out.println("Heating set point (Celsius): " +
  thermostat.getProperties().getCurrentClimateSetting().get().getHeatingSetPointCelsius());

// Thermostat ID: 518f692b-f865-4590-8c3e-3849e9984c75
// Mode: Optional[heat]
// Heating set point (Celsius): Optional[20.0]
```
{% endtab %}

{% tab title="Go" %}
```go
heat_request, uErr := client.Thermostats.Heat(context.Background(), &api.ThermostatsHeatRequest{
  DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
  HeatingSetPointCelsius: api.Float64(20),
})

if uErr != nil {
return uErr
}

fmt.Println(heat_request)

// {
//   "action_attempt": {
//     "status": "pending",
//     "action_type": "SET_HEAT",
//     "action_attempt_id": "241e79cd-4bda-499f-8e2e-d7ae01d273cf",
//     "result": null,
//     "error": null
//   },
//   "ok": true
// }

fan_on_request, uErr := client.Thermostats.SetFanMode(context.Background(), &api.ThermostatsSetFanModeRequest{
  DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
  FanMode: api.FanModeOn.Ptr(),
})

if uErr != nil {
return uErr
}

fmt.Println(fan_on_request)
return nil

// {
//   "action_attempt": {
//     "status": "pending",
//     "action_type": "SET_FAN_MODE",
//     "action_attempt_id": "1a6993af-4b00-4ca5-bacf-074164959878",
//     "result": null,
//     "error": null
//   },
//   "ok": true
// }
```
{% endtab %}
{% endtabs %}

## Next Steps

Now that you have completed this guide, you can try to connect a real ecobee device. To do so, make sure to switch to a non-sandbox workspace and API key because you cannot connect real devices to sandbox workspaces.

If you have any questions or want to report an issue, email us at [support@seam.co](mailto:support@seam.co)
