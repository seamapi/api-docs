# List Climate Setting Schedules

{% swagger src="https://connect.getseam.com/openapi.json" path="/thermostats/climate_setting_schedules/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
device_id="123e4567-e89b-12d3-a456-426614174001"
seam.climate_setting_schedules.list(device_id)

# [
#   ClimateSettingSchedule:
#      climate_setting_schedule_id: 26d6138c-6524-4f3c-ac96-43cc3bea0a8d  
#      device_id: 123e4567-e89b-12d3-a456-426614174001
#      name: Guest Stay #1234        
#      ...
#   ClimateSettingSchedule:    
#      climate_setting_schedule_id: a83690b2-2b70-409a-9a94-426699b84c97
#      device_id: 123e4567-e89b-12d3-a456-426614174001    
#      name: Guest Stay #5678
#      ...
# ]
```
{% endtab %}

{% tab title="Javascript" %}
<pre class="language-javascript"><code class="lang-javascript">await seam.climateSettingSchedules.list({
    device_id: "a83690b2-2b70-409a-9a94-426699b84c97",
});

<strong>/*
</strong>{
  "climate_setting_schedules": [
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
  ],
  "ok": true
}
*/
</code></pre>
{% endtab %}
{% endtabs %}

### Parameters

<table data-header-hidden><thead><tr><th width="264">Parameter</th><th width="162.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>device_id</code></td><td>String<br><em>Required</em></td><td>ID of device connected to account</td></tr><tr><td><code>user_identifier_key</code></td><td>String<br><em>Optional</em></td><td>Your own internal user ID for the user by which to filter climate setting schedules </td></tr></tbody></table>

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "climate_setting_schedules": [
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
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
