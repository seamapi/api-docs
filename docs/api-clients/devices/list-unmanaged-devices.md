---
description: Get all unmanaged devices
---

# List Unmanaged Devices

Returns a list of all [unmanaged devices](../../core-concepts/devices/#managed-devices-and-unmanaged-devices). An unmanaged device has a limited set of visible properties and a subset of supported events. You cannot control an unmanaged device. Any [access codes](../../products/smart-locks/access-codes/) on an unmanaged device are unmanaged. To control an unmanaged device with Seam, [convert it to a managed device](../../core-concepts/devices/#convert-an-unmanaged-device-to-managed).

{% swagger src="https://connect.getseam.com/openapi.json" path="/devices/unmanaged/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

List all unmanaged devices or filter the list of unmanaged devices by including the corresponding filter parameter in the request body.

### Request Body Parameters

<table><thead><tr><th width="264">Parameter</th><th width="133.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>connected_account_id</code></td><td>String<br><em>Optional</em></td><td>ID of the connected account.</td></tr><tr><td><code>connected_account_ids</code></td><td>String[]<br><em>Optional</em></td><td>IDs of the connected accounts.</td></tr><tr><td><code>connect_webview_id</code></td><td>String<br><em>Optional</em></td><td>ID of <a href="../../core-concepts/connect-webviews/">Connect Webview</a>.</td></tr><tr><td><code>device_type</code></td><td>String<br><em>Optional</em></td><td>Type of device.</td></tr><tr><td><code>device_types</code></td><td>String[]<br><em>Optional</em></td><td>Types of devices.</td></tr><tr><td><code>manufacturer</code></td><td>String<br><em>Optional</em></td><td>Device manufacturer.</td></tr><tr><td><code>device_ids</code></td><td>type: string[]<br><em>Optional</em></td><td>IDs of the devices to include.</td></tr><tr><td><code>limit</code></td><td>Number<br><em>Optional</em></td><td>Numerical limit on the number of devices to return.</td></tr><tr><td><code>created_before</code></td><td>String<br><em>Optional</em></td><td>Date threshold for devices to return. If specified, returns only devices created before the specified date.</td></tr><tr><td><code>user_identifier_key</code></td><td>String<br><em>Optional</em></td><td>Your own internal user ID for the user by which to filter devices.</td></tr><tr><td><code>custom_metadata_has</code></td><td>JSON object<br><em>Optional</em></td><td>Set of key:value <a href="./#device-properties">custom metadata</a> pairs by which you want to filter devices.</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.devices.unmanaged.list()
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/devices/unmanaged/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.devices.unmanaged.list()
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
client.unmanaged_devices.list()
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.UnmanagedDevices.List();
```
{% endtab %}

{% tab title="Java" %}
```java
seam.devices().unmanaged().list();
```
{% endtab %}
{% endtabs %}

## Response

Returns an unmanaged `devices` array, in which each returned unmanaged device (`device`) contains the set of applicable device properties. For details, see [Devices](./).

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
[
  UnmanagedDevice(
    device_id='2339da8d-ce38-4d86-9bb7-573f95af691c',
    device_type='ttlock_lock',
    properties={
      'image_alt_text': 'Placeholder Lock Image',
      'image_url': 'https://connect.getseam.com/assets/images/devices/unknown-lock.png',
      'manufacturer': 'ttlock',
      'model': {
        'accessory_keypad_supported': False,
        'display_name': 'Lock',
        'manufacturer_display_name': 'Ttlock',
        'offline_access_codes_supported': False,
        'online_access_codes_supported': True
      },
      'name': 'Lock 1',
      'online': False
    },
    connected_account_id='1769a182-ec97-4266-ba53-27fdb25d2d96',
    workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    created_at='2023-10-30T08:37:28.852Z',
    errors=[
      {
        'connected_account_id': '1769a182-ec97-4266-ba53-27fdb25d2d96',
        'created_at': '2023-10-31T15:13:58.768Z',
        'error_code': 'account_disconnected',
        'is_connected_account_error': True,
        'message': 'Account Disconnected, you may need to '
          'reconnect the account with a new '
          'webview. This may happen if the '
          'third-party provider triggered an access '
          'token to be revoked (e.g. after a '
          'password change)'
      }
    ],
    warnings=[],
    capabilities_supported=[
      'access_code',
      'lock'
    ],
    is_managed=False
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "devices": [
    {
      "is_managed": false,
      "device_id": "2339da8d-ce38-4d86-9bb7-573f95af691c",
      "device_type": "ttlock_lock",
      "connected_account_id": "1769a182-ec97-4266-ba53-27fdb25d2d96",
      "capabilities_supported": [
        "access_code",
        "lock"
      ],
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "created_at": "2023-10-30T08:37:28.852Z",
      "errors": [
        {
          "error_code": "account_disconnected",
          "message": "Account Disconnected, you may need to reconnect the account with a new webview. This may happen if the third-party provider triggered an access token to be revoked (e.g. after a password change)",
          "created_at": "2023-10-31T15:13:58.768Z",
          "connected_account_id": "1769a182-ec97-4266-ba53-27fdb25d2d96",
          "is_connected_account_error": true
        }
      ],
      "warnings": [],
      "properties": {
        "name": "Lock 1",
        "online": false,
        "manufacturer": "ttlock",
        "image_url": "https://connect.getseam.com/assets/images/devices/unknown-lock.png",
        "image_alt_text": "Placeholder Lock Image",
        "model": {
          "display_name": "Lock",
          "manufacturer_display_name": "Ttlock",
          "accessory_keypad_supported": false,
          "offline_access_codes_supported": false,
          "online_access_codes_supported": true
        }
      }
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
[
  {
    is_managed: false,
    device_id: '2339da8d-ce38-4d86-9bb7-573f95af691c',
    device_type: 'ttlock_lock',
    connected_account_id: '1769a182-ec97-4266-ba53-27fdb25d2d96',
    capabilities_supported: [
      'access_code',
      'lock'
    ],
    workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    created_at: '2023-10-30T08:37:28.852Z',
    errors: [ [Object] ],
    warnings: [],
    properties: {
      name: 'Lock 1',
      online: false,
      manufacturer: 'ttlock',
      image_url: 'https://connect.getseam.com/assets/images/devices/unknown-lock.png',
      image_alt_text: 'Placeholder Lock Image',
      model: [Object]
    }
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
{% code overflow="wrap" %}
```
[
  <Seam::UnmanagedDevice:0x00438
    is_managed=false
    device_id="882dd63f-db9b-4210-bac2-68372aa0aff7"
    device_type="august_lock"
    connected_account_id="f72442d2-2c16-4e3f-9882-6bff21828b1b"
    capabilities_supported=[
      "access_code",
      "lock"
    ]
    workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be"
    created_at=2023-10-28 09:13:08.836 UTC
    errors=[]
    warnings=[]
    properties={
      "name"=>"GARAGE",
      "online"=>true,
      "manufacturer"=>"august",
      "image_url"=> "https://connect.getseam.com/assets/images/devices/august_wifi-smart-lock-3rd-gen_silver_front.png",
      "image_alt_text"=>"August Wifi Smart Lock 3rd Gen, Silver, Front",
      "model"=>{
        "display_name"=>"Lock",
        "manufacturer_display_name"=>"August",
        "accessory_keypad_supported"=>true,
        "offline_access_codes_supported"=>false,
        "online_access_codes_supported"=>true
      }
    }
  >,
  ...
]
```
{% endcode %}
{% endtab %}

{% tab title="C#" %}
```json
{
  "device_id": "2339da8d-ce38-4d86-9bb7-573f95af691c",
  "device_type": "ttlock_lock",
  "connected_account_id": "1769a182-ec97-4266-ba53-27fdb25d2d96",
  "capabilities_supported": [
    "access_code",
    "lock"
  ],
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "errors": [
    {
      "error_code": "account_disconnected",
      "message": "Account Disconnected, you may need to reconnect the account with a new webview. This may happen if the third-party provider triggered an access token to be revoked (e.g. after a password change)"
    }
  ],
  "warnings": [],
  "created_at": "2023-10-30T08:37:28.852Z",
  "properties": {
    "name": "Lock 1",
    "manufacturer": "ttlock",
    "image_url": "https://connect.getseam.com/assets/images/devices/unknown-lock.png",
    "image_alt_text": "Placeholder Lock Image",
    "model": {
      "display_name": "Lock",
      "manufacturer_display_name": "Ttlock"
    }
  }
}
...
```
{% endtab %}

{% tab title="Java" %}
```json
{
  "devices": [
    {
      "is_managed": false,
      "device_id": "2339da8d-ce38-4d86-9bb7-573f95af691c",
      "device_type": "ttlock_lock",
      "connected_account_id": "1769a182-ec97-4266-ba53-27fdb25d2d96",
      "capabilities_supported": [
        "access_code",
        "lock"
      ],
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "created_at": "2023-10-30T08:37:28.852Z",
      "errors": [
        {
          "error_code": "account_disconnected",
          "message": "Account Disconnected, you may need to reconnect the account with a new webview. This may happen if the third-party provider triggered an access token to be revoked (e.g. after a password change)",
          "created_at": "2023-10-31T15:13:58.768Z",
          "connected_account_id": "1769a182-ec97-4266-ba53-27fdb25d2d96",
          "is_connected_account_error": true
        }
      ],
      "warnings": [],
      "properties": {
        "name": "Lock 1",
        "online": false,
        "manufacturer": "ttlock",
        "image_url": "https://connect.getseam.com/assets/images/devices/unknown-lock.png",
        "image_alt_text": "Placeholder Lock Image",
        "model": {
          "display_name": "Lock",
          "manufacturer_display_name": "Ttlock",
          "accessory_keypad_supported": false,
          "offline_access_codes_supported": false,
          "online_access_codes_supported": true
        }
      }
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
