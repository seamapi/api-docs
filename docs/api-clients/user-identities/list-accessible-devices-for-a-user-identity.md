---
description: List accessible devices for a specified user identity
---

# List Accessible Devices for a User Identity

Returns a list of all [device](../../core-concepts/devices/) associated with a [user identity](../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).

{% swagger src="https://connect.getseam.com/openapi.json" path="/user_identities/list_accessible_devices" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the user identity for which you want to retrieve all associated devices by including the corresponding `user_identity_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identity_id</code></td><td>String<br><em>Required</em></td><td>ID of the user identity for which you want to retrieve all accessible devices</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/list_accessible_devices' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "f3a328b4-dd04-4370-9000-d52b7a01b0bf"
}'
```
{% endtab %}

{% tab title="Go" %}
```go
accessibleDevices, uErr := client.UserIdentities.ListAccessibleDevices(context.Background(), &api.UserIdentitiesListAccessibleDevicesRequest{
    UserIdentityId: "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
})

if uErr != nil {
    return uErr
}

fmt.Println(accessibleDevices)
return nil
```
{% endtab %}
{% endtabs %}

## Response

Returns an `accessible_devices` array, in which each returned device (`device`) contains the set of applicable device properties. For details, see [Devices](../devices/).

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "accessible_devices": [
    {
      "device_id": "054765c8-a2fc-4599-b486-14c19f462c45",
      "nickname": "",
      "display_name": "Seam Thermostat",
      "device_type": "nest_thermostat",
      "capabilities_supported": [
        "thermostat"
      ],
      "properties": {
        "online": true,
        "is_cooling": false,
        "is_heating": false,
        "manufacturer": "nest",
        "nest_metadata": {
          "custom_name": "",
          "device_name": "enterprises/nest_project_id/devices/AVPHwEvjFcX-wRmGdXApyxON24SAI0S9oU13a2GSVFLPVehUKH1ATqlASyKi2N2dbJCVW-B6-VxgbhdjUyyjA-K3Vo5C9g",
          "nest_device_id": "bcca8c5f-1854-4906-9911-c877d513e00a"
        },
        "is_fan_running": false,
        "has_direct_power": true,
        "relative_humidity": 0.46,
        "temperature_celsius": 24.64,
        "temperature_fahrenheit": 76.352,
        "current_climate_setting": {
          "automatic_heating_enabled": true,
          "automatic_cooling_enabled": true,
          "hvac_mode_setting": "heat_cool",
          "manual_override_allowed": true,
          "cooling_set_point_celsius": 21.5,
          "heating_set_point_celsius": 20,
          "cooling_set_point_fahrenheit": 70.7,
          "heating_set_point_fahrenheit": 68
        },
        "available_hvac_mode_settings": [
          "heat",
          "cool",
          "heat_cool",
          "off"
        ],
        "can_enable_automatic_cooling": true,
        "can_enable_automatic_heating": true,
        "is_temporary_manual_override_active": false,
        "name": "",
        "appearance": {
          "name": ""
        },
        "model": {
          "display_name": "Thermostat",
          "manufacturer_display_name": "Nest",
          "accessory_keypad_supported": false
        },
        "image_url": "https://connect.getseam.com/assets/images/devices/unknown-lock.png",
        "image_alt_text": "Placeholder Lock Image",
        "is_climate_setting_schedule_active": false
      },
      "location": null,
      "connected_account_id": "44284499-a50b-4947-86c1-58264f014be5",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "created_at": "2024-02-29T21:57:33.397Z",
      "errors": [],
      "warnings": [],
      "is_managed": true,
      "custom_metadata": {}
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
