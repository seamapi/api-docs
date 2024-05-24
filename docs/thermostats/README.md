---
description: >-
  Devices that can regulate the temperature of a location, so that the
  location's temperature is maintained near a desired set point temperature.
---

# Thermostats

## Thermostat Properties

<table><thead><tr><th>Property</th><th width="122.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>temperature_fahrenheit</code></strong></td><td>Number</td><td>Temperature, measured in Fahrenheit.</td></tr><tr><td><strong><code>temperature_celsius</code></strong></td><td>Number</td><td>Temperature, measured in Celsius.</td></tr><tr><td><strong><code>relative_humidity</code></strong></td><td>Number</td><td>Relative humidity, the amount of moisture in the air compared to the maximum amount of moisture the air can hold at a given temperature. It is a percentage expressed as a number between <code>0</code> and <code>1</code>, inclusive.</td></tr><tr><td><strong><code>can_enable_automatic_cooling</code></strong></td><td>Boolean</td><td>If true, the thermostat is connected to a cooling system.</td></tr><tr><td><strong><code>can_enable_automatic_heating</code></strong></td><td>Boolean</td><td>If true, the thermostat is connected to a heating system.</td></tr><tr><td><strong><code>available_hvac_mode_settings</code></strong></td><td>Array of enums (strings)</td><td><p>A list of the available HVAC modes for the thermostat.</p><p>Possible values:</p><ul><li><code>cool</code></li><li><code>heat</code></li><li><code>heat_cool</code></li><li><code>off</code></li></ul></td></tr><tr><td><strong><code>current_climate_setting</code></strong></td><td>Object</td><td>See <a href="./#climate-setting-properties">Climate Setting Properties</a>.</td></tr></tbody></table>

## Climate Setting Properties

<table><thead><tr><th>Property</th><th width="117.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>automatic_heating_enabled</code></strong></td><td>Boolean<br><em>Required</em></td><td>Indicates whether the thermostat has heating turned on.</td></tr><tr><td><strong><code>automatic_cooling_enabled</code></strong></td><td>Boolean<br><em>Required</em></td><td>Indicates whether the thermostat has cooling turned on.</td></tr><tr><td><strong><code>hvac_mode_setting</code></strong></td><td>Enum (string)<br><em>Required</em></td><td><p>HVAC mode to which the thermostat is set.</p><p>Possible values:</p><ul><li><code>cool</code></li><li><code>heat</code></li><li><code>heat_cool</code></li><li><code>off</code></li></ul></td></tr><tr><td><strong><code>cooling_set_point_celsius</code></strong></td><td>Number<br><em>Optional</em></td><td>The <a href="./#climate-set-points">cooling set point</a>, measured in Celsius, if cooling is turned on. When the ambient temperature rises above this set point, cooling turns on.</td></tr><tr><td><strong><code>heating_set_point_celsius</code></strong></td><td>Number<br><em>Optional</em></td><td>The <a href="./#climate-set-points">heating set point</a>, measured in Celsius, if heating is turned on. When the ambient temperature drops below this set point, heating turns on.</td></tr><tr><td><strong><code>cooling_set_point_fahrenheit</code></strong></td><td>Number<br><em>Optional</em></td><td>The <a href="./#climate-set-points">cooling set point</a>, measured in Fahrenheit, if cooling is turned on. When the ambient temperature rises above this set point, cooling turns on.</td></tr><tr><td><strong><code>heating_set_point_fahrenheit</code></strong></td><td>Number<br><em>Optional</em></td><td>The <a href="./#climate-set-points">heating set point</a>, measured in Fahrenheit, if heating is turned on. When the ambient temperature drops below this set point, heating turns on.</td></tr><tr><td><strong><code>manual_override_enabled</code></strong></td><td>Boolean<br><em>Required</em></td><td>Indicates whether another user can use the thermostat or API to override this climate setting.</td></tr></tbody></table>

## Climate Set Points

When heating is turned on, you will need to set a heating set point. When the ambient temperature drops below this set point, heating will turn on.

When cooling is turned on, you will need to set a cooling set point. When the ambient temperature rises above this set point, cooling will turn on.

When you have `heat_cool` turned on, where both heating and cooling systems are enabled, you will need to set heating and cooling set points. The cooling set point needs to be set to a temperature higher than that of the heating set point. On some systems, there might also be a minimum difference between the heating and cooling set points.

## List of Methods

| [Get Thermostat](get-thermostat.md)                                                             |
| ----------------------------------------------------------------------------------------------- |
| [List Thermostats](list-thermostats.md)                                                         |
| [Set Default Climate Setting](../api-clients/thermostats/update-a-thermostat.md)                |
| [Get Climate Setting Schedule](climate-setting-schedules/get-climate-setting-schedule.md)       |
| [List Climate Setting Schedules](climate-setting-schedules/list-climate-setting-schedules.md)   |
| [Create Climate Setting Schedule](climate-setting-schedules/create-climate-setting-schedule.md) |
| [Update Climate Setting Schedule](climate-setting-schedules/update-climate-setting-schedule.md) |
| [Delete Climate Setting Schedule](climate-setting-schedules/delete-climate-setting-schedule.md) |
