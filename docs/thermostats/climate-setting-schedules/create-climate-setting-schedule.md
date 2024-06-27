# Create a Climate Setting Schedule

{% swagger src="https://connect.getseam.com/openapi.json" path="/thermostats/climate_setting_schedules/create" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

#### Creating a Climate Setting Schedule

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
{% endtabs %}

### Parameters

| `device_id`                    | type: string                                        | <p><br>ID of the Device</p>                                                                                                                              |
| ------------------------------ | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                         | <p>type: string<br>Optional</p>                     | Name of Climate Setting Schedule                                                                                                                         |
| `schedule_starts_at`           | <p>type: string<br>Required</p>                     | Date time when the Climate Setting Schedule should be programmed                                                                                         |
| `schedule_ends_at`             | <p>type: string<br>Required</p>                     | Date time when the Climate Setting Schedule should be removed                                                                                            |
| `automatic_heating_enabled`    | <p>type: boolean<br>Default: <code>false</code></p> | When enabled, your system will only heat your home. Your thermostat will start heating to maintain the heating set point temperature selected.           |
| `automatic_cooling_enabled`    | <p>type: string<br>Default: <code>false</code></p>  | When enabled, your system will only cooling your home. Your thermostat will start cooling to maintain the cooling set point temperature selected.        |
| `heating_set_point_fahrenheit` | <p>type: number<br>Optional</p>                     | When `automatic_heating_enabled` is set, a heating set point must be provided. The thermostat will start heating to maintain this temperature set point. |
| `cooling_set_point_fahrenheit` | <p>type: number<br>Optional</p>                     | When `automatic_cooling_enabled` is set, a cooling set point must be provided. The thermostat will start cooling to maintain this temperature set point. |
| `manual_override_allowed`      | <p>type: boolean<br>Default: <code>true</code></p>  | Whether another user can use the thermostat or API to override this climate setting                                                                      |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_CLIMATE_SETTING_SCHEDULE",
    "action_attempt_id": "c10e3db5-a5a2-47f2-a76f-48379ed9cd22",
    "result": null,
    "error": null
  },
  "climate_setting_schedule": {
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
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
