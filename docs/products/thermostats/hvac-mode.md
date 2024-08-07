---
description: Learn about the HVAC mode setting that you can configure for thermostats.
---

# HVAC Mode

HVAC mode (`hvac_mode_setting`) governs the operation of your heating, ventilation, and air conditioning (HVAC) system to achieve and maintain your preferred temperature. These HVAC mode options include the following:

* **Heat (`heat`):** In this mode, the thermostat activates only the heating system when the room temperature drops below the heating set point temperature.
* **Cool (`cool`):** In this mode, the thermostat activates only the cooling system when the room temperature rises above the cooling set point temperature.
* **Heat-Cool** or **Auto (`heat_cool`):** In this dual mode, the thermostat automatically switches between heating and cooling to maintain a temperature between the heating and cooling set point temperatures for maximum comfort.
* **Off (`off`):** In this mode, the thermostat is off, which turns off both the heating and cooling systems for the space.

***

## HVAC Mode Constraints

Some models of thermostats have specific requirements and constraints related to setting the HVAC mode. You can retrieve these requirements by issuing a [Get Device](../../api-clients/devices/get-device.md) or [List Devices](../../api-clients/devices/list-devices.md) request.&#x20;

The following example shows a set of thermostat HVAC mode requirements:

```json
{
  "thermostat": {
    "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
    "device_type": "ecobee_thermostat",
    "capabilities_supported": [
      "thermostat"
    ],
    "properties": {
      "available_hvac_mode_settings": [
        "off",
        "cool",
        "heat",
        "heat_cool"
      ],
      "can_enable_automatic_cooling": true,
      "can_enable_automatic_heating": true,
      ...
    },
    ...
  },
  ...
}
```

***

## Available HVAC Mode Settings

The `available_hvac_mode_settings` property includes an array of available HVAC modes. For example, if the array contains `["heat", "off"]`, it means that you can only set the thermostat to either `heat` mode or `off`  mode. The availability of heating or cooling options depends on the connected systems. If the thermostat is not connected to a specific system, the corresponding options may be absent.

The following example shows a thermostat that supports both heating and cooling:

```json
"available_hvac_mode_settings": [
  "off",
  "cool",
  "heat",
  "heat_cool"
 ]
```

***

## Can Enable Automatic Heating and Cooling Settings

The `can_enable_automatic_heating` and `can_enable_automatic_cooling` settings indicate whether the thermostat supports heating and cooling modes, respectively. If `can_enable_automatic_heating` is `true`, the thermostat supports heating. Similarly, if `can_enable_automatic_cooling` is `true`, the thermostat supports cooling. When both of these settings are `true`, the thermostat supports heat-cool (auto) mode. The availability of heating or cooling options depends on the connected systems. If the thermostat is not connected to a specific system, the corresponding options may be absent.

{% hint style="info" %}
Note that you configure either `hvac_mode_setting` or `automatic_heating_enabled` and `automatic_cooling_enabled`, and Seam automatically adjusts the other property/pair correspondingly. For more information, see [Default Climate Setting](../../capability-guides/thermostats/managing-scheduled-climate-settings-in-development/setting-the-default-climate-setting.md).
{% endhint %}

The following example shows a thermostat connected to both heating and cooling systems:

```json
"can_enable_automatic_cooling": true,
"can_enable_automatic_heating": true
```
