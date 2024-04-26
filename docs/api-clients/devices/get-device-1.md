---
description: Get a specified unmanaged device
---

# Get an Unmanaged Device

Returns a specified [unmanaged device](../../core-concepts/devices/#managed-devices-and-unmanaged-devices). An unmanaged device has a limited set of visible properties and a subset of supported events. You cannot control an unmanaged device. Any [access codes](../../products/smart-locks/access-codes/) on an unmanaged device are unmanaged. To control an unmanaged device with Seam, [convert it to a managed device](../../core-concepts/devices/#convert-an-unmanaged-device-to-managed).

{% swagger src="https://connect.getseam.com/openapi.json" path="/devices/unmanaged/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired unmanaged device by including the corresponding `device_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>device_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired device.</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
pprint(seam.devices.unmanaged.get("882dd63f-db9b-4210-bac2-68372aa0aff7"))
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/devices/unmanaged/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "882dd63f-db9b-4210-bac2-68372aa0aff7"
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
console.log(await seam.devices.unmanaged.get({device_id: "882dd63f-db9b-4210-bac2-68372aa0aff7"}))
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
puts client.unmanaged_devices.get("882dd63f-db9b-4210-bac2-68372aa0aff7").inspect
```
{% endtab %}

{% tab title="C#" %}
```csharp
var unmanagedDevice = seam.UnmanagedDevices.Get("882dd63f-db9b-4210-bac2-68372aa0aff7");
Console.WriteLine(unmanagedDevice);
```
{% endtab %}
{% endtabs %}

## Response

Returns an unmanaged `device` that contains the set of applicable device properties. For details, see [Devices](./).

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
UnmanagedDevice(device_id='882dd63f-db9b-4210-bac2-68372aa0aff7',
                device_type='august_lock',
                properties={'image_alt_text': 'August Wifi Smart Lock 3rd Gen, '
                                              'Silver, Front',
                            'image_url': 'https://connect.getseam.com/assets/images/devices/august_wifi-smart-lock-3rd-gen_silver_front.png',
                            'manufacturer': 'august',
                            'model': {'accessory_keypad_supported': True,
                                      'display_name': 'Lock',
                                      'manufacturer_display_name': 'August',
                                      'offline_access_codes_supported': False,
                                      'online_access_codes_supported': True},
                            'name': 'GARAGE',
                            'online': True},
                connected_account_id='f72442d2-2c16-4e3f-9882-6bff21828b1b',
                workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be',
                created_at='2023-10-28T09:13:08.836Z',
                errors=[],
                warnings=[],
                capabilities_supported=['access_code', 'lock'],
                is_managed=False)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "device": {
    "is_managed": false,
    "device_id": "882dd63f-db9b-4210-bac2-68372aa0aff7",
    "device_type": "august_lock",
    "connected_account_id": "f72442d2-2c16-4e3f-9882-6bff21828b1b",
    "capabilities_supported": [
      "access_code",
      "lock"
    ],
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2023-10-28T09:13:08.836Z",
    "errors": [],
    "warnings": [],
    "properties": {
      "name": "GARAGE",
      "online": true,
      "manufacturer": "august",
      "image_url": "https://connect.getseam.com/assets/images/devices/august_wifi-smart-lock-3rd-gen_silver_front.png",
      "image_alt_text": "August Wifi Smart Lock 3rd Gen, Silver, Front",
      "model": {
        "display_name": "Lock",
        "manufacturer_display_name": "August",
        "accessory_keypad_supported": true,
        "offline_access_codes_supported": false,
        "online_access_codes_supported": true
      }
    }
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
{
  is_managed: false,
  device_id: '882dd63f-db9b-4210-bac2-68372aa0aff7',
  device_type: 'august_lock',
  connected_account_id: 'f72442d2-2c16-4e3f-9882-6bff21828b1b',
  capabilities_supported: [ 'access_code', 'lock' ],
  workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
  created_at: '2023-10-28T09:13:08.836Z',
  errors: [],
  warnings: [],
  properties: {
    name: 'GARAGE',
    online: true,
    manufacturer: 'august',
    image_url: 'https://connect.getseam.com/assets/images/devices/august_wifi-smart-lock-3rd-gen_silver_front.png',
    image_alt_text: 'August Wifi Smart Lock 3rd Gen, Silver, Front',
    model: {
      display_name: 'Lock',
      manufacturer_display_name: 'August',
      accessory_keypad_supported: true,
      offline_access_codes_supported: false,
      online_access_codes_supported: true
    }
  }
}
```
{% endtab %}

{% tab title="Ruby" %}
{% code overflow="wrap" %}
```
<Seam::UnmanagedDevice:0x00438
  is_managed=false
  device_id="882dd63f-db9b-4210-bac2-68372aa0aff7"
  device_type="august_lock"
  connected_account_id="f72442d2-2c16-4e3f-9882-6bff21828b1b"
  capabilities_supported=["access_code", "lock"]
  workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be"
  created_at=2023-10-28 09:13:08.836 UTC
  errors=[]
  warnings=[]
  properties={"name"=>"GARAGE", "online"=>true, "manufacturer"=>"august", "image_url"=>"https://connect.getseam.com/assets/images/devices/august_wifi-smart-lock-3rd-gen_silver_front.png", "image_alt_text"=>"August Wifi Smart Lock 3rd Gen, Silver, Front", "model"=>{"display_name"=>"Lock", "manufacturer_display_name"=>"August", "accessory_keypad_supported"=>true, "offline_access_codes_supported"=>false, "online_access_codes_supported"=>true}}>
```
{% endcode %}
{% endtab %}

{% tab title="C#" %}
```json
{
  "device_id": "882dd63f-db9b-4210-bac2-68372aa0aff7",
  "device_type": "august_lock",
  "connected_account_id": "f72442d2-2c16-4e3f-9882-6bff21828b1b",
  "capabilities_supported": [
    "access_code",
    "lock"
  ],
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "errors": [],
  "warnings": [],
  "created_at": "2023-10-28T09:13:08.836Z",
  "properties": {
    "name": "GARAGE",
    "online": true,
    "manufacturer": "august",
    "image_url": "https://connect.getseam.com/assets/images/devices/august_wifi-smart-lock-3rd-gen_silver_front.png",
    "image_alt_text": "August Wifi Smart Lock 3rd Gen, Silver, Front",
    "model": {
      "display_name": "Lock",
      "manufacturer_display_name": "August"
    }
  }
}
```
{% endtab %}
{% endtabs %}
