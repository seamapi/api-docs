---
description: >-
  You can indicate the devices in your workspace that you intend to control
  using the Seam API.
---

# Managed and Unmanaged Devices

To increase billing flexibility, Seam provides the ability to mark devices as `managed` or `unmanaged`.

* **Managed devices:** These devices can be controlled fully through the Seam API and are billed to your Seam account as a regular device.
* **Unmanaged devices:** These devices are not billed and, consequently, cannot be controlled through the Seam API.

Seam makes it possible to switch a device back and forth between the `managed` and `unmanaged` states.

## Convert a Managed Device to Unmanaged

When you convert a device to an `unmanaged` state (that is, "unamange a device"), Seam pauses billing for the device and converts all the managed device resources (for example, access codes) to unmanaged resources. As a result, Seam no longer monitors the lifecycle of these unmanaged resources.

{% tabs %}
{% tab title="Javascript" %}
```javascript

const deviceId = "77208078-6dd7-44e5-a3e4-a2ed3a34efc9"

// Take a managed device.
const device = await seam.devices.get({
  device_id: deviceId
})

// Set the managed status to false.
const updatedDevice = await seam.devices.update({
  device_id: deviceId,
  is_managed: false
})

// Retrieve the unmanaged device.
const unmanagedDevice = await seam.devices.unmanaged.get({
  device_id: deviceId
})

console.log(unmanagedDevice)

/*
{
  is_managed: false,
  device_id: '77208078-6dd7-44e5-a3e4-a2ed3a34efc9',
  device_type: 'yale_lock',
  connected_account_id: '4e5acceb-2bda-4dc1-814e-39c998431683',
  capabilities_supported: [ 'access_code', 'lock' ],
  workspace_id: '1d2826eb-4a26-4f46-bddb-ef5898baa859',
  created_at: '2023-08-29T04:30:14.914Z',
  errors: [],
  warnings: [],
  properties: {
    name: 'FRONT DOOR',
    online: true,
    manufacturer: 'august',
    image_url: 'https://connect.getseam.com/assets/images/devices/yale_assure-lock-touchscreen-wifi-smart-lock_satin-nickel_front.png',
    image_alt_text: 'Yale Assure Touchscreen Wifi Smart Lock, Satin Nickel, Front',
    model: { display_name: 'Lock', manufacturer_display_name: 'August' }
  }
}
*/
```
{% endtab %}

{% tab title="Python" %}
```python
from seam import Seam
seam = Seam()

device_id = "aaa5664a-a959-499d-82a7-c25516565788"

seam.devices.update(
  device=device_id, 
  is_managed=False
)

unmanaged_device = seam.devices.unmanaged.get(device=device_id)
print(unmanaged_device)

# UnmanagedDevice(device_id='aaa5664a-a959-499d-82a7-c25516565788',
#                 device_type='august_lock',
#                 properties={'image_alt_text': 'August Wifi Smart Lock 3rd Gen, '
#                                               'Silver, Front',
#                             'image_url': 'https://connect.getseam.com/assets/images/devices/august_wifi-smart-lock-3rd-gen_silver_front.png',
#                             'manufacturer': 'august',
#                             'model': {'display_name': 'Lock',
#                                       'manufacturer_display_name': 'August'},
#                             'name': 'GARAGE',
#                             'online': True},
#                 connected_account_id='4fd987a7-21e1-4b01-aa6a-eedfe35c05e3',
#                 workspace_id='1d2826eb-4a26-4f46-bddb-ef5898baa859',
#                 created_at='2023-09-16T20:01:58.984Z',
#                 errors=[],
#                 warnings=[],
#                 capabilities_supported=['access_code', 'lock'],
#                 is_managed=False)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new()
device_id = "aa3958c3-4236-4f71-bd77-3b60f85b3456"

seam.devices.update(device_id: device_id, is_managed: false)
unmanaged_device = seam.unmanaged_devices.get(device_id)
puts unmanaged_device.inspect

# <Seam::UnmanagedDevice:0x00438
#   is_managed=false
#   device_id="aa3958c3-4236-4f71-bd77-3b60f85b3456"
#   device_type="yale_lock"
#   connected_account_id="d2ab9339-d0ad-4594-b9a2-6ce71e4d4521"
#   capabilities_supported=["access_code", "lock"]
#   workspace_id="1d2826eb-4a26-4f46-bddb-ef5898baa859"
#   created_at=2023-08-30 05:33:58.45 UTC
#   errors=[]
#   warnings=[]
#   properties={"name"=>"FRONT DOOR", "online"=>true, "manufacturer"=>"august", "image_url"=>"https://connect.getseam.com/assets/images/devices/yale_assure-lock-touchscreen-wifi-smart-lock_satin-nickel_front.png", "image_alt_text"=>"Yale Assure Touchscreen Wifi Smart Lock, Satin Nickel, Front", "model"=>{"display_name"=>"Lock", "manufacturer_display_name"=>"August"}}>
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$device_id = "0e2e6262-7f91-4970-a58d-47ef30b41e2e";
$device = $seam->devices->get($device_id);

$seam->devices->update(
    device_id: $device_id,
    is_managed: false);

$unmanaged_device = $seam->devices->unmanaged->get(
    device_id: $device_id
);

# Inspect this device to confirm it's unmanaged
echo json_encode($unmanaged_device, JSON_PRETTY_PRINT);

// {
//     "device_id": "0e2e6262-7f91-4970-a58d-47ef30b41e2e",
//     "device_type": "nuki_lock",
//     "connected_account_id": "5fe50f46-274f-4a03-ba95-3a517464fdc7",
//     "workspace_id": "1d2826eb-4a26-4f46-bddb-ef5898baa859",
//     "created_at": "2023-08-30T06:45:59.213Z",
//     "properties": {
//         "name": "Office Lock",
//         "manufacturer": "nuki",
//         "image_url": "https:\/\/connect.getseam.com\/assets\/images\/devices\/nuki_smart_lock_3_pro_black.png",
//         "image_alt_text": "Nuki Smart Lock 3.0 Pro Black, Front",
//         "model": {
//             "display_name": "Lock",
//             "manufacturer_display_name": "Nuki"
//         }
//     },
//     "errors": [],
//     "warnings": []
// }
```
{% endtab %}
{% endtabs %}

## Convert an Unmanaged Device to Managed

To convert an unmanaged device back to managed (that is, to "manage a device"), retrieve the device using the unmanaged device API and use the `update` function to change the managed state of the device back to `true`. Note that you must also convert unmanaged device resources (for example, access codes) back to managed.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const deviceId = "77208078-6dd7-44e5-a3e4-a2ed3a34efc9"

// Retrieve the unmanaged device if needed.
const unmanagedDevice = await seam.devices.unmanaged.get({
  device_id: deviceId
})

// Update the device.
await seam.devices.unmanaged.update({
  device_id: deviceId, 
  is_managed: true
})

// Retrieve the device again.
const device = await seam.devices.get({
    device_id: deviceId
})

console.log(device)
/*
{
  device_id: '77208078-6dd7-44e5-a3e4-a2ed3a34efc9',
  device_type: 'yale_lock',
  capabilities_supported: [ 'access_code', 'lock' ],
  properties: {
    locked: true,
    online: true,
    door_open: false,
    manufacturer: 'august',
    battery_level: 0.9999532347993827,
    serial_number: '00000004-992d-45a0-bea1-9128fdcd8d12',
    august_metadata: {
      lock_id: 'lock-1',
      house_id: 'house-1',
      lock_name: 'FRONT DOOR',
      has_keypad: true,
      house_name: 'My House',
      keypad_battery_level: 'Not Available'
    },
    supported_code_lengths: [ 4, 5, 6, 7, 8 ],
    has_native_entry_events: true,
    name: 'FRONT DOOR',
    model: { display_name: 'Lock', manufacturer_display_name: 'August' },
    battery: { level: 0.9999532347993827, status: 'full' },
    image_url: 'https://connect.getseam.com/assets/images/devices/yale_assure-lock-touchscreen-wifi-smart-lock_satin-nickel_front.png',
    image_alt_text: 'Yale Assure Touchscreen Wifi Smart Lock, Satin Nickel, Front',
    code_constraints: [],
    supports_backup_access_code_pool: true
  },
  location: { timezone: 'America/Los_Angeles', location_name: 'My House' },
  connected_account_id: '4e5acceb-2bda-4dc1-814e-39c998431683',
  workspace_id: '1d2826eb-4a26-4f46-bddb-ef5898baa859',
  created_at: '2023-08-29T04:30:14.914Z',
  errors: [],
  warnings: [],
  is_managed: true
}
*/
```
{% endtab %}

{% tab title="Python" %}
```python
from seam import Seam
seam = Seam()

device_id = "0e2e6262-7f91-4970-a58d-47ef30b41e2e"

# Use the unmanaged update call to update the status of the device.
seam.devices.unmanaged.update(
  device=device_id, 
  is_managed=True
)

# Confirm that the device is now managed by retrieving it.
device = seam.devices.get(device=device_id)
print(device)

# Device(device_id='0e2e6262-7f91-4970-a58d-47ef30b41e2e',
#        device_type='nuki_lock',
#        location=None,
#        properties={'battery': {'level': 0.86, 'status': 'full'},
#                    'battery_level': 0.86,
#                    'code_constraints': [{'constraint_type': 'cannot_start_with_12'},
#                                         {'constraint_type': 'no_zeros'},
#                                         {'constraint_type': 'name_length',
#                                          'max_length': 20}],
#                    'has_native_entry_events': True,
#                    'image_alt_text': 'Nuki Smart Lock 3.0 Pro Black, Front',
#                    'image_url': 'https://connect.getseam.com/assets/images/devices/nuki_smart_lock_3_pro_black.png',
#                    'keypad_battery': {'level': 1},
#                    'locked': False,
#                    'manufacturer': 'nuki',
#                    'model': {'display_name': 'Lock',
#                              'manufacturer_display_name': 'Nuki'},
#                    'name': 'Office Lock',
#                    'nuki_metadata': {'device_id': '545636389',
#                                      'device_name': 'Office Lock',
#                                      'keypad_battery_critical': False},
#                    'online': True,
#                    'supported_code_lengths': [6],
#                    'supports_backup_access_code_pool': True},
#        capabilities_supported=['access_code', 'lock'],
#        errors=[],
#        warnings=[],
#        connected_account_id='5fe50f46-274f-4a03-ba95-3a517464fdc7',
#        workspace_id='1d2826eb-4a26-4f46-bddb-ef5898baa859',
#        created_at='2023-08-30T06:45:59.213Z')
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new()
device_id = "aa3958c3-4236-4f71-bd77-3b60f85b3456"
seam.unmanaged_devices.update(device_id: device_id, is_managed: true)

device = seam.devices.get(device_id)

puts device.inspect
# <Seam::Device:0x00438
#   device_id="aa3958c3-4236-4f71-bd77-3b60f85b3456"
#   device_type="yale_lock"
#   capabilities_supported=["access_code", "lock"]
#   properties={"locked"=>true, "online"=>true, "door_open"=>false, "manufacturer"=>"august", "battery_level"=>0.9999532347993827, "serial_number"=>"00000004-992d-45a0-bea1-9128fdcd8d12", "august_metadata"=>{"lock_id"=>"lock-1", "house_id"=>"house-1", "lock_name"=>"FRONT DOOR", "has_keypad"=>true, "house_name"=>"My House", "keypad_battery_level"=>"Not Available"}, "supported_code_lengths"=>[4, 5, 6, 7, 8], "has_native_entry_events"=>true, "name"=>"FRONT DOOR", "model"=>{"display_name"=>"Lock", "manufacturer_display_name"=>"August"}, "battery"=>{"level"=>0.9999532347993827, "status"=>"full"}, "image_url"=>"https://connect.getseam.com/assets/images/devices/yale_assure-lock-touchscreen-wifi-smart-lock_satin-nickel_front.png", "image_alt_text"=>"Yale Assure Touchscreen Wifi Smart Lock, Satin Nickel, Front", "code_constraints"=>[], "supports_backup_access_code_pool"=>true}
#   connected_account_id="d2ab9339-d0ad-4594-b9a2-6ce71e4d4521"
#   workspace_id="1d2826eb-4a26-4f46-bddb-ef5898baa859"
#   created_at=2023-08-30 05:33:58.45 UTC
#   errors=[]
#   warnings=[]
#   is_managed=true>
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$device_id = "0e2e6262-7f91-4970-a58d-47ef30b41e2e";

$seam->devices->unmanaged->update(
  device_id: $device_id,
  is_managed: true
);

$device = $seam->devices->get($device_id);

# Inspect this device to make sure that it was converted correctly to managed.
echo json_encode($device, JSON_PRETTY_PRINT);

// {
//     "device_id": "0e2e6262-7f91-4970-a58d-47ef30b41e2e",
//     "workspace_id": "1d2826eb-4a26-4f46-bddb-ef5898baa859",
//     "connected_account_id": "5fe50f46-274f-4a03-ba95-3a517464fdc7",
//     "device_type": "nuki_lock",
//     "properties": {
//         "online": true,
//         "locked": false,
//         "name": "Office Lock",
//         "battery_level": 0.86,
//         "battery": {
//             "level": 0.86,
//             "status": "full"
//         },
//         "manufacturer": "nuki",
//         "supported_code_lengths": [
//             6
//         ],
//         "code_constraints": [
//             {
//                 "constraint_type": "cannot_start_with_12"
//             },
//             {
//                 "constraint_type": "no_zeros"
//             },
//             {
//                 "constraint_type": "name_length",
//                 "max_length": 20
//             }
//         ],
//         "model": {
//             "display_name": "Lock",
//             "manufacturer_display_name": "Nuki"
//         },
//         "image_url": "https:\/\/connect.getseam.com\/assets\/images\/devices\/nuki_smart_lock_3_pro_black.png",
//         "image_alt_text": "Nuki Smart Lock 3.0 Pro Black, Front",
//         "nuki_metadata": {
//             "device_id": "545636389",
//             "device_name": "Office Lock",
//             "keypad_battery_critical": false
//         }
//     },
//     "location": null,
//     "created_at": "2023-08-30T06:45:59.213Z",
//     "capabilities_supported": [
//         "access_code",
//         "lock"
//     ],
//     "errors": [],
//     "warnings": []
// }
```
{% endtab %}
{% endtabs %}

## Automatically Set New Devices to Unmanaged

You can configure a [Connect Webview](../connect-webviews/) so that it automatically sets all new devices added to the workspace through this Connect Webview to `unmanaged` by default. To do so, when creating a Connect Webview, set `automatically_manage_new_devices` to `false`. Once the Connect Webview is authorized, Seam sets any device added to the workspace to `unmanaged`.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const connectWebview = await seam.connectWebviews.create({
    // accepted_providers: ["schlage", "august"...etc], <== Use this property for precise control of accepted providers.
    provider_category: "stable",
    automatically_manage_new_devices: false
})

console.log(connectWebview)

/*
{
  url: 'https://connect.getseam.com/connect_webviews/view?connect_webview_id=323b4ffa-ce24-4cff-a965-ff532563ec7a&auth_token=JrunXm29x7GCWFrVJsZHLFsD5YAioyaAu',
  status: 'pending',
  workspace_id: '1d2826eb-4a26-4f46-bddb-ef5898baa859',
  custom_metadata: {},
  accepted_devices: [],
  login_successful: false,
  accepted_providers: [
    'august',      'avigilon_alta',
    'schlage',     'smartthings',
    'yale',        'nuki',
    'salto',       'controlbyweb',
    'minut',       'my_2n',
    'kwikset',     'ttlock',
    'noiseaware',  'igloohome',
    'ecobee',      'four_suites',
    'wyze'
  ],
  any_device_allowed: false,
  connect_webview_id: '323b4ffa-ce24-4cff-a965-ff532563ec7a',
  custom_redirect_url: null,
  any_provider_allowed: false,
  device_selection_mode: 'none',
  wait_for_device_creation: false,
  custom_redirect_failure_url: null,
  automatically_manage_new_devices: false,
  created_at: '2023-08-29T04:59:13.890Z'
}
*/
```
{% endtab %}
{% endtabs %}
