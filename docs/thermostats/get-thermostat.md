---
description: Get a Thermostat on your account by its Device ID
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Get a Thermostat

Retrieves the details of a thermostat.

{% swagger src="https://connect.getseam.com/openapi.json" path="/thermostats/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()
device_id = "123e4567-e89b-12d3-a456-426614174000"
thermostat = seam.thermostats.get(device_id)

print(thermostat)

# Thermostat(
#     device_id="123e4567-e89b-12d3-a456-426614174000",
#     device_type="ecobee_thermostat",
#     capabilities_supported=["thermostat"], 
#     properties={
#         "name": "Entryway",
#         "online": True,
#         "relative_humidity": 0.36,
#         "temperature_fahrenheit": 70,
#         "can_enable_automatic_cooling": True,
#         "can_enable_automatic_heating": True,
#         "available_hvac_mode_settings": [
#             "cool",
#             "heat",
#             "heat_cool",
#             "off"
#         ],
#         "current_climate_setting": {
#             "automatic_heating_enabled": True,
#             "automatic_cooling_enabled": True,
#             "hvac_mode_setting": "heat_cool",
#             "cooling_set_point_fahrenheit": 75,
#             "heating_set_point_fahrenheit": 65,
#             "manual_override_allowed": False  
#         }
#     },
#     location=None,
#     connected_account_id="123e4567-e89b-12d3-a456-426614174001",
#     workspace_id="123e4567-e89b-12d3-a456-426614174002",
#     created_at="2023-06-01T11:14:37.116Z",
#     errors=[]
# )
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
import { Seam } from "seam"

const seam = Seam()
const deviceId = "123e4567-e89b-12d3-a456-426614174000"
const device = await seam.thermostats.get({device_id: deviceId})

console.log(device)

/*
{
  "thermostat": {
    "device_id": "123e4567-e89b-12d3-a456-426614174000",
    "device_type": "ecobee_thermostat",
    "capabilities_supported": ["thermostat"],
    "properties": {
      "name": "Entryway",
      "online": true,
      "relative_humidity": 0.36,
      "temperature_fahrenheit": 70,
      "can_enable_automatic_cooling": true,
      "can_enable_automatic_heating": true,
      "available_hvac_mode_settings": [
        "cool",
        "heat",
        "heat_cool",
        "off"
      ],
      "current_climate_setting": {
        "automatic_heating_enabled": true,
        "automatic_cooling_enabled": true,
        "hvac_mode_setting": "heat_cool",
        "cooling_set_point_fahrenheit": 75,
        "heating_set_point_fahrenheit": 65,
        "manual_override_allowed": false 
      }
    },
    "location": null,
    "connected_account_id": "123e4567-e89b-12d3-a456-426614174001",
    "workspace_id": "123e4567-e89b-12d3-a456-426614174002",
    "created_at": "2023-06-01T11:14:37.116Z",
    "errors": []
  }
}
*/
```
{% endtab %}
{% endtabs %}

### Parameters

| `device_id` | type: string | ID of the Device   |
| ----------- | ------------ | ------------------ |
| `name`      | type: string | Name of the Device |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
    "thermostat": {
        "device_id": "62bc78df-a2ad-4fc4-801f-1c22042149ab",
        "device_type": "ecobee_thermostat",
        "capabilities_supported": [
            "thermostat"
        ],
        "properties": {
            "online": true,
            "is_cooling": false,
            "is_heating": false,
            "manufacturer": "ecobee",
            "is_fan_running": true,
            "ecobee_metadata": {
                "device_name": "Living Room",
                "ecobee_device_id": "5aef77f2-0c23-4ab7-b837-dc14e6c7f6a3"
            },
            "has_direct_power": true,
            "relative_humidity": 0.36,
            "temperature_celsius": 21.11111111111111,
            "is_cooling_available": true,
            "is_heating_available": true,
            "temperature_fahrenheit": 70,
            "current_climate_setting": {
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
            "max_cooling_set_point_celsius": 33.333333333333336,
            "max_heating_set_point_celsius": 26.11111111111111,
            "min_cooling_set_point_celsius": 18.333333333333336,
            "min_heating_set_point_celsius": 7.222222222222222,
            "min_heating_cooling_delta_celsius": 2.7777777777777777,
            "is_temporary_manual_override_active": false,
            "name": "mild faucet",
            "model": {
                "display_name": "Thermostat",
                "manufacturer_display_name": "Ecobee"
            },
            "image_url": "https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png",
            "image_alt_text": "Ecobee 3 Lite Thermostat",
            "min_heating_set_point_fahrenheit": 45,
            "max_heating_set_point_fahrenheit": 79,
            "min_cooling_set_point_fahrenheit": 65,
            "max_cooling_set_point_fahrenheit": 92,
            "min_heating_cooling_delta_fahrenheit": 5
        },
        "location": null,
        "connected_account_id": "bd6a8926-206d-4030-bf14-ccb3ecd1cd3e",
        "workspace_id": "9946a591-2da2-4558-9556-0cadf93f4040",
        "created_at": "2023-08-29T06:00:00.042Z",
        "errors": [],
        "warnings": [],
        "is_managed": true
    },
    "ok": true
}


{
  "thermostat": {
    "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
    "device_type": "ecobee_thermostat",
    "capabilities_supported": ["thermostat"],
    "properties": {
      "name": "Entryway",
      "online": true,
      "relative_humidity": 0.36,
      "temperature_fahrenheit": 70,
      "can_enable_automatic_cooling": true,
      "can_enable_automatic_heating": true,
      "available_hvac_mode_settings": [
        "cool",
        "heat",
        "heat_cool",
        "off"
      ],
      "current_climate_setting": {
        "automatic_heating_enabled": true,
        "automatic_cooling_enabled": true,
        "hvac_mode_setting": "heat_cool",
        "cooling_set_point_fahrenheit": 75,
        "heating_set_point_fahrenheit": 65,
        "manual_override_allowed": false 
      }
    },
    "location": null,
    "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
    "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
    "created_at": "2023-06-01T11:14:37.116Z",
    "errors": []
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
