---
description: Update the properties of a specified unmanaged device
---

# Update an Unmanaged Device

Updates the `is_managed` property of a specified [unmanaged device](../../core-concepts/devices/#managed-devices-and-unmanaged-devices) to indicate whether Seam manages the device. An unmanaged device has a limited set of visible properties and a subset of supported events. You cannot control an unmanaged device. Any [access codes](../../products/smart-locks/access-codes/) on an unmanaged device are unmanaged. To control an unmanaged device with Seam, [convert it to a managed device](../../core-concepts/devices/#convert-an-unmanaged-device-to-managed).

{% swagger src="https://connect.getseam.com/openapi.json" path="/devices/unmanaged/update" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired unmanaged device by including the corresponding `device_id` in the request body. In addition, in the request body, include the `is_managed` property, along with `true` as the replacement value. Note that setting `is_managed` to `true` [converts the unmanaged device to a managed device](../../core-concepts/devices/#convert-an-unmanaged-device-to-managed).

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>device_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired device.</td></tr><tr><td><code>is_managed</code></td><td>Boolean<br><em>Optional</em></td><td>Replacement value to indicate whether Seam manages the device.</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
device_id = "882dd63f-db9b-4210-bac2-68372aa0aff7"
unmanaged_device_update = seam.devices.unmanaged.update(
    device = device_id,
    is_managed= True
)

pprint(unmanaged_device_update)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/devices/unmanaged/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "882dd63f-db9b-4210-bac2-68372aa0aff7",
  "is_managed": true
}'
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
const deviceId = "882dd63f-db9b-4210-bac2-68372aa0aff7"
const unmanagedDeviceUpdate = await seam.devices.unmanaged.update({
  device_id: deviceId,
  is_managed: true
})

console.log(unmanagedDeviceUpdate)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
device_id = "882dd63f-db9b-4210-bac2-68372aa0aff7"
unmanaged_device_update = client.unmanaged_devices.update(
  device_id: device_id,
  is_managed: true
)

puts unmanaged_device_update.inspect
```
{% endtab %}

{% tab title="Java" %}
```java
var deviceId = "882dd63f-db9b-4210-bac2-68372aa0aff7";

seam.devices().unmanaged().update(UnmanagedUpdateRequest.builder()
        .deviceId(deviceId)
        .isManaged(true)
        .build());
```
{% endtab %}
{% endtabs %}

## Response

Returns a Boolean `ok` status indicator (with the exception of the Java SDK).

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
True
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
{ ok: true }
```
{% endtab %}

{% tab title="Ruby" %}
```
{"ok"=>true}
```
{% endtab %}
{% endtabs %}
