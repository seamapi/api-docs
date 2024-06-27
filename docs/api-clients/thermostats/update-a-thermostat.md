---
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

# Update a Thermostat

Updates a [thermostat](../../thermostats/) by setting the values of the parameters passed. Any parameters not provides are left unchanged.

The primary attribute you can modify is the [default climate setting](../../products/thermostats/#default-climate-setting). The default climate setting determines the configuration of the thermostat when a [climate setting schedule](../../products/thermostats/#climate-setting-schedules) ends. This differs from the [current climate setting](../../products/thermostats/#current-climate-setting) of the thermostat, which represent the active programming on the device.

{% swagger src="https://connect.getseam.com/openapi.json" path="/thermostats/update" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

### Code Example

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
{% endtabs %}

### Parameters

| `device_id`               | String                                                                  | <p><br>Device ID</p>                                                                                                                                                     |
| ------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `default_climate_setting` | [Climate Setting object](../../thermostats/#climate-setting-properties) | Default [climate setting](../../thermostats/#climate-setting-properties) when no [climate setting schedules](../../thermostats/climate-setting-schedules/) are in place. |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "UPDATE_THERMOSTAT",
    "action_attempt_id": "4a11bcaf-c930-41d8-85f0-be375c93096f",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

<table data-header-hidden><thead><tr><th width="236"></th><th width="175"></th><th></th></tr></thead><tbody><tr><td><code>status</code></td><td>"success" | "error" | "pending"</td><td><code>success</code> determines a completed action performed on the device.<br><code>error</code> determines an unsuccessful action performed on the device.<br><code>pending</code> determines Seam is still trying to perform the action on the device</td></tr><tr><td><code>action_type</code></td><td>"UPDATE_THERMOSTAT"</td><td>Determines the type of action performed on the device</td></tr><tr><td><code>action_attempt_id</code></td><td>String</td><td>ID of the action attempt</td></tr><tr><td><code>result</code></td><td>String</td><td><code>result</code> only exists for the <code>success</code> status describing the event</td></tr><tr><td><code>error</code></td><td>Object</td><td><code>error</code> only exists for the <code>error</code> status describing the event. It is an object with <code>type</code> and <code>message</code>. Where <code>type</code> determines type of error and <code>message</code> describes the error</td></tr></tbody></table>
