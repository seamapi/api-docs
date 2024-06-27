---
description: List all the thermostats
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

# List Thermostats

Returns a list of thermostats connected to your workspace. If no thermostats are connected, the list will be empty.

{% swagger src="https://connect.getseam.com/openapi.json" path="/thermostats/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
seam.thermostats.list()

# [
#     {
#       "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
#       "device_type": "ecobee_thermostat",
#       "capabilities_supported": ["thermostat"],
#       "properties": {
#         "name": "Entryway",
#         "online": true,
#         "relative_humidity": 0.36,
#         "temperature_fahrenheit": 70,
#         "can_enable_automatic_cooling": true,
#         "can_enable_automatic_heating": true,
#         "available_hvac_mode_settings": [
#           "cool",
#           "heat",
#           "heat_cool",
#           "off"
#         ],
#         "current_climate_setting": {
#           "automatic_heating_enabled": true,
#           "automatic_cooling_enabled": true,
#           "hvac_mode_setting": "heat_cool",
#           "cooling_set_point_fahrenheit": 75,
#           "heating_set_point_fahrenheit": 65,
#           "manual_override_allowed": false 
#         }
#       },
#       "location": null,
#       "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
#       "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
#       "created_at": "2023-06-01T11:14:37.116Z",
#       "errors": []
#     },
#     {
#       "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
#       "device_type": "ecobee_thermostat",
#       "capabilities_supported": ["thermostat"],
#       "properties": {
#         "name": "Entryway",
#         "online": true,
#         "relative_humidity": 0.36,
#         "temperature_fahrenheit": 70,
#         "can_enable_automatic_cooling": true,
#         "can_enable_automatic_heating": true,
#         "available_hvac_mode_settings": [
#           "cool",
#           "heat",
#           "heat_cool",
#           "off"
#         ],
#         "current_climate_setting": {
#           "automatic_heating_enabled": true,
#           "automatic_cooling_enabled": true,
#           "hvac_mode_setting": "heat_cool",
#           "cooling_set_point_fahrenheit": 75,
#           "heating_set_point_fahrenheit": 65,
#           "manual_override_allowed": false 
#         }
#       },
#       "location": null,
#       "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
#       "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
#       "created_at": "2023-06-01T11:14:37.116Z",
#       "errors": []
#     }
#   ]

```
{% endtab %}

{% tab title="Javascript" %}
```javascript">
await seam.thermostats.list()

/*
[
  {
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
  {
    "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
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
  }
]
*/
```
{% endtab %}
{% endtabs %}

### Request Body Parameters

<table><thead><tr><th width="261.3333333333333">Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>connected_account_id</code></td><td>String<br><em>Optional</em></td><td>ID of the <a href="../api-clients/connected-accounts/">connected account</a> to which the thermostats belong</td></tr><tr><td><code>connected_account_ids</code></td><td>Array&#x3C;string><br><em>Optional</em></td><td>IDs of the connected accounts to which the thermostats belong</td></tr><tr><td><code>connect_webview_id</code></td><td>String<br>Optional</td><td>ID of the <a href="../core-concepts/connect-webviews/">Connect Webview</a> that connected the thermostats to Seam</td></tr><tr><td><code>device_type</code></td><td>String<br><em>Optional</em></td><td>Account type of the thermostats</td></tr><tr><td><code>manufacturer</code></td><td>String<br><em>Optional</em></td><td>ID of the <a href="../core-concepts/workspaces/">workspace</a></td></tr><tr><td><code>device_ids</code></td><td>Array&#x3C;string><br><em>Optional</em></td><td>Device IDs of the thermostats</td></tr><tr><td><code>user_identifier_key</code></td><td>String<br><em>Optional</em></td><td>Your own internal user ID for the user by which to filter thermostats</td></tr></tbody></table>

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "thermostats": [
    {
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
    {
      "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
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
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
