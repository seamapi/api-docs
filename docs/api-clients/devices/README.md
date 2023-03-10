---
description: A device that has been connected to the Seam platform.
---

# Devices

## The Device Object

| **`device_id`**              | uuid                                                                           | ID of the Device                               |
| ---------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------- |
| **`device_type`**            | string                                                                         | Type of Device                                 |
| **`capabilities_supported`** | As seen in '[Device Capabilities Supported](./#device-capabilities-supported)' | Capabilities supported by this Device          |
| **`errors`**                 | As seen in '[Device Error Types](./#device-error-types)'                       | List of errors for this Device                 |
| **`location`**               | object                                                                         | Location information for the Device            |
| **`manufacturer`**           | As seen in '[Device Manufacturers](./#device-manufacturers)'                   | Manufacturer of the Device                     |
| **`properties`**             | object, as seen in '[Device Properties](./#device-properties)'                 | Properties for the Device                      |
| **`warnings`**               | As seen in '[Device Warning Types](./#device-warning-types)'                   | List of warnings for this Device               |
| **`workspace_id`**           | uuid                                                                           | ID of the workspace that the device belongs to |
| **`created_at`**             | datetime                                                                       | Timestamp of creation time                     |

### Device Properties

| property name                | type   | Description                                                                                                                                  |
| ---------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **`locked`**                 | bool   | Whether the device is locked                                                                                                                 |
| **`online`**                 | bool   | Whether the device is online                                                                                                                 |
| **`door_open`**              | bool   | Whether the door is open                                                                                                                     |
| **`manufacturer`**           | string | Manufacturer of the device                                                                                                                   |
| **`battery_level`**          | float  | Battery level of the device.                                                                                                                 |
| **`XXX_metadata`**           | object | Metadata for the device, where XXX is the manufacturer and specific to that manufacturer                                                     |
| **`supported_code_lengths`** | array  | Supported code lengths for the device, e.g., [4,5] means "1234" and "12345" would be valid, but neither "123" nor "123456" wouldn't be valid |
| **`max_active_codes_supported`** | int  | Maximum number of codes that may exist on the device at one time.                                                                          |
| **`name`**                   | string | Name of the device                                                                                                                           |
| **`battery`**                | object | Battery information for the device, has `level` and `status`                                                                                 |
| **`serial_number`**          | string | Serial number for the device, if available.                                                                                                  |

### Device Location

| Property name       | Type   | Description                                                                             |
| ------------------- | ------ | --------------------------------------------------------------------------------------- |
| **`location_name`** | string | Name of the location the device belongs to, if available.                               |
| **`timezone`**      | string | Name of timezone (name from the IANA timezone database) the device is in, if available. |

## List of Methods

| [Get Device](get-device.md)     | Get device  |
| ------------------------------- | ----------- |
| [List Devices](list-devices.md) | List device |

## Device Capabilities Supported

| Capability Types  | Description                                                                         |
| ----------------- | ----------------------------------------------------------------------------------- |
| **`access_code`** | If present, one can set access codes on the device.                                 |
| **`battery`**     | If present, you can look at the `battery_level` of the device                       |
| **`health`**      | If present, one can introspect some parameters related to the health of the device. |
| **`lock`**        | If present, the device is able to be locked and unlocked.                           |

## Device Error Types

Errors are displayed in the format:

```
{
    "message": "...",
    "created_at": "ISO8601 string"
}
```

| **`account_disconnected`** | Seam has lost connection to a connected account. This may happen if the third-party provider triggered an access token to be revoked (e.g. after a password change). The account owner needs to reconnect the connected account with a new connect webview. |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`device_removed`**       | A device has been removed from the Connected Account. Seam can no longer sync with this device.                                                                                                                                                             |
| **`hub_disconnected`**     | The hub that the device is connected to is offline. Seam is unable to sync updates to this device.                                                                                                                                                          |

## Device Warning Types

Warnings are displayed in the format:

```
{
    "message": "...",
    "created_at": "ISO8601 string"
}
```

| **`salto_office_mode`**  | A Salto Lock is in Office Mode. Access Codes will not unlock doors. You can disable office mode in the Salto dashboard.             |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| **`salto_privacy_mode`** | A Salto Lock is in Privacy Mode. Access Codes will not unlock doors. You can disable privacy mode by pressing the back of the lock. |

## Device Manufacturers

On some account types, Seam provides additional information on the manufacturer of the door lock. Where the device is being connected via a smart hub, the manufacturer of the door lock might be different from that of the smart hub.

Here are a list of manufacturers that might get returned:

| **`august`**  |
| ------------- |
| **`keywe`**   |
| **`kwikset`** |
| **`lockly`**  |
| **`philia`**  |
| **`samsung`** |
| **`schlage`** |
| **`yale`**    |
| **`unknown`** |
