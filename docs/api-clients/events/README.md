# Events

Events are our way of letting you know when something interesting happens in your workspace. When an interesting event occurs, we create a new `Event` object. For example, when a lock is unlocked, we create a `lock.unlocked` event; and when a device's battery level is low, we create a `device.battery_low` event.

As with other API resources, you can use endpoints to retrieve an [individual event](get-an-event.md) or a [list of events](list-events.md) from the API. We also have a separate [webhooks](../../core-concepts/webhooks.md) system for sending the `Event` objects directly to an endpoint on your sever. Webhooks are managed in your workspace settings, and our [Webhooks](../../core-concepts/webhooks.md) guide will help you get set up.

## The Event Object

### Common Event Properties

| `event_id`             | String                                     | Unique identifier for the `event`.                                           |
| ---------------------- | ------------------------------------------ | ---------------------------------------------------------------------------- |
| `event_type`           | As seen in '[Event Types](./#event-types)' | Type of event                                                                |
| `created_at`           | String                                     | Time at which the `event` was created. Displayed in an ISO8601 string.       |
| `workspace_id`         | String                                     | Unique identifier for the `workspace` that the `event` belongs to.           |
| `connected_account_id` | String                                     | The unique identifier of the connected account to which this event pertains. |

### Common Device Event Properties

In addition to the common event properties, the following properties are available for all events that pertain to devices - this includes all events outside of the `connected_account.*` events:

|             |        |                                                                |
| ----------- | ------ | -------------------------------------------------------------- |
| `device_id` | String | Unique identifier for the `device` that triggered the `event`. |

### Access Code Event Properties

In addition to the common event properties, and common device event properties, the following properties are available for events that pertain to access codes:

|                  |        |                                                                                                                                         |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `access_code_id` | String | Present on all of the `access_code.*` events. Specifies the unique identifier of the access code to which the event pertains.           |
| `code`           | String | Only present on `access_code.set_on_device` and `access_code.scheduled_on_device` events. Specifies the code digits for an access code. |

### Lock Events

In addition to the common event properties, and common device event properties, the following properties are available for events that pertain to lock actions:

|                  |        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `method`         | Enum   | <p>Present on <code>lock.locked</code> and <code>lock.unlocked</code> events. Specifies the method used to perform the lock or unlock action.</p><p>Supported values:</p><ul><li><code>keycode</code></li></ul><ul><li><code>manual</code></li></ul><ul><li><code>unknown</code></li></ul><ul><li><code>seamapi</code></li></ul><ul><li><code>automatic</code> (for <a href="../../device-guides/kwikset-locks.md">Kwikset</a> <code>lock.locked</code> events only)</li></ul> |
| `access_code_id` | String | <p>Specifies the unique identifier of the access code used to trigger this event. Seam includes this ID in the event if the affected device returns this information.<br>For a list of device manufacturers that send the <code>access_code_id</code> in lock events, see <a href="../../products/smart-locks/access-codes/#linking-unlock-events-and-access-codes">Linking Unlock Events and Access Codes</a>.</p>                                                            |

### Device Battery Events

In addition to the common event properties, and common device event properties, the following properties are available on `device.low_battery` and `device.battery_status_changed` events:

|                 |              |                                                                                           |
| --------------- | ------------ | ----------------------------------------------------------------------------------------- |
| `battery_level` | Number (0-1) | Determines the battery level of the device. Only present on a `device.low_battery` event. |

### Device Battery Status Events

In addition to the device battery event properties, the following properties are available on `device.battery_status_changed` events:

|                  |                                         |                                                  |
| ---------------- | --------------------------------------- | ------------------------------------------------ |
| `battery_status` | `critical` or `low` or `good` or `full` | Specifies the new battery status for the device. |

### Device Disconnected Events

In addition to the common event properties, and common device event properties, the following properties are available on `device.disconnected` events:

|              |                                                                       |                                                                                                 |
| ------------ | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `error_code` | `account_disconnected` or `hub_disconnected` or `device_disconnected` | Only present on a `device.disconnected` event. A code to indicate the reason for disconnection. |

### Noise Sensor Events

Noise sensors emit an event whenever a predefined noise threshold has been exceeded. Seam tracks any noise thresholds that have been set in the user's app or builtin thresholds to the noise sensor, so see what thresholds are available, query `/noise_sensors/noise_thresholds/list`

|                        |                                           |                                                                                                                  |
| ---------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `noise_threshold_id`   | String                                    | Identifier for the noise threshold, pass to `/noise_sensors/noise_thresholds/get`                                |
| `noise_threshold_name` | String e.g. `"builtin_first_disturbance"` | Name of the threshold, this can be set via `/noise_sensors/noise_thresholds/create` or by the user in their app. |

## Event Types

| Event Name                                           | Description                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access_code.created`                                | An `access_code` has been created.                                                                                                                                                                                                                                              |
| `access_code.changed`                                | An `access_code` status or property has changed.                                                                                                                                                                                                                                |
| `access_code.scheduled_on_device`                    | For native scheduled codes (see [Native Scheduling](../../products/smart-locks/access-codes/#native-scheduling)), this event is sent when an `access_code` has been pre-programmed onto a device. An `access_code.set_on_device` is sent when the code is actually active.      |
| `access_code.set_on_device`                          | An `access_code` has been programmed onto a device.                                                                                                                                                                                                                             |
| `access_code.backup_access_code_pulled`              | A backup `access_code` has been pulled.                                                                                                                                                                                                                                         |
| `access_code.removed_from_device`                    | An `access_code` has been removed from a device.                                                                                                                                                                                                                                |
| `access_code.deleted`                                | Seam has deleted the access code because it is at the end of its lifecycle (it is not on the device and is not supposed to be active in the future) Future requests to this access\_code will `404`                                                                             |
| `access_code.delay_in_setting_on_device`             | There was a longer than expected delay in programming an access code onto a device. For time bound codes, this is sent when the code is not set by the `starts_at` time. This is not necessarily a failure as the code might successfully be set even after this event is sent. |
| `access_code.failed_to_set_on_device`                | An error occurred in trying to program the code onto a device. This indicates a failure occurred but the failure might be temporary and may recover (in which case an `access_code.set_on_device` event will be sent).                                                          |
| `access_code.delay_in_removing_from_device`          | There was a longer than expected delay in removing an access code from a device. This is not necessarily a failure as the code might successfully be removed even after this event is sent.                                                                                     |
| `access_code.failed_to_remove_from_device`           | An error occurred in trying to remove an access code from a device. This indicates a failure occurred but the failure might be temporary and may recover (in which case an `access_code.removed_from_device` event will be sent).                                               |
| `access_code.modified_external_to_seam`              | When we detect that an access code was modified external to Seam after we successfully set it on the device, we will send this event.                                                                                                                                           |
| `access_code.deleted_external_to_seam`               | When we detect that an access code was deleted external to Seam after we successfully set it on the device, we will send this event.                                                                                                                                            |
| `access_code.unmanaged.converted_to_managed`         | Successfully converted an unmanaged access code to a managed access code.                                                                                                                                                                                                       |
| `access_code.unmanaged.failed_to_convert_to_managed` | Failed to converted an unmanaged access code to a managed access code.                                                                                                                                                                                                          |
| `access_code.unmanaged.created`                      | An unmanaged `access_code` has been created.                                                                                                                                                                                                                                    |
| `access_code.unmanaged.removed`                      | An unmanaged `access_code` has been removed.                                                                                                                                                                                                                                    |
| `connected_account.created`                          | A connected account has been imported into your Seam workspace.                                                                                                                                                                                                                 |
| `connected_account.connected`                        | Seam has established connection to or is reconnected to a connected account.                                                                                                                                                                                                    |
| `connected_account.successful_login`                 | A webview login was successfully completed for a connected account. Sent even if the account was previously connected, and a separate webview login was completed.                                                                                                              |
| `connected_account.disconnected`                     | Seam has lost connection to a connected account. Please ask the account owner to sign in to their account through a new connect webview again.                                                                                                                                  |
| `connected_account.deleted`                          | A connected account has been deleted from your Seam workspace.                                                                                                                                                                                                                  |
| `connected_account.completed_first_sync`             | Seam has finished the first sync of a connected account and devices are now available.                                                                                                                                                                                          |
| `device.accessory_keypad_connected`                  | An accessory keypad has been connected to a device.                                                                                                                                                                                                                             |
| `device.accessory_keypad_disconnected`               | An accessory keypad has been disconnected from a device.                                                                                                                                                                                                                        |
| `device.connected`                                   | A device has come online.                                                                                                                                                                                                                                                       |
| `device.disconnected`                                | A device has gone offline.                                                                                                                                                                                                                                                      |
| `device.removed`                                     | A user manually removed a device from their account, without using a Seam action.                                                                                                                                                                                               |
| `device.deleted`                                     | A device was deleted from its connected account using the following Seam actions: `/connected_accounts/delete` or `/devices/delete`.                                                                                                                                            |
| `device.low_battery`                                 | The battery level of the device drops below the low battery level threshold.                                                                                                                                                                                                    |
| `device.battery_status_changed`                      | The battery status for the device has changed (for example, it changed from `good` to `low`).                                                                                                                                                                                   |
| `device.tampered`                                    | A device detects that someone has opened up its case, or has moved the device.                                                                                                                                                                                                  |
| `device.connection_became_flaky`                     | A device connection has become flaky.                                                                                                                                                                                                                                           |
| `device.salto.privacy_mode_activated`                | The privacy mode has been activated on the Salto device.                                                                                                                                                                                                                        |
| `device.salto.privacy_mode_deactivated`              | The privacy mode has been deactivated on the Salto device.                                                                                                                                                                                                                      |
| `device.third_party_integration_detected`            | A third party integration has been detected on the device.                                                                                                                                                                                                                      |
| `device.unmanaged.connected`                         | An unmanaged device has come online.                                                                                                                                                                                                                                            |
| `device.unmanaged.disconnected`                      | An unmanaged device has gone offline.                                                                                                                                                                                                                                           |
| `device.converted_to_unmanaged`                      | Successfully converted a managed device to an unmanaged device.                                                                                                                                                                                                                 |
| `device.unmanaged.converted_to_managed`              | Successfully converted an unmanaged device to a managed device.                                                                                                                                                                                                                 |
| `lock.locked`                                        | A door lock has been locked.                                                                                                                                                                                                                                                    |
| `lock.unlocked`                                      | A door lock has been unlocked.                                                                                                                                                                                                                                                  |
| `lock.access_denied`                                 | An incorrect access code was entered multiple times in a row on a device ([Kwikset](../../device-guides/kwikset-locks.md) only).                                                                                                                                                |
| `noise_sensor.noise_threshold_triggered`             | The noise detected from a noise sensor exceeded a predefined threshold and/or duration.                                                                                                                                                                                         |

## List of Methods

| [List Events](list-events.md) | List and filter events           |
| ----------------------------- | -------------------------------- |
| [Get Event](get-an-event.md)  | Get data for an individual event |

## Testing out Events

Try using our Webhooks Sandbox in the Seam Dashboard to see the different payloads for each event and test them against your own endpoints!

<figure><img src="../../.gitbook/assets/Screen Shot 2022-09-01 at 9.38.05 AM.png" alt=""><figcaption></figcaption></figure>
