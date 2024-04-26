---
description: Update the properties of a specified device
---

# Update a Device

Updates any of the following properties of a specified [device](../../core-concepts/devices/):

* `name` (or `properties.name`)
* `custom_metadata`
* `is_managed`

{% swagger src="https://connect.getseam.com/openapi.json" path="/devices/update" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired device by including the corresponding `device_id` in the request body. In addition, in the request body, include the properties that you want to update, along with the desired replacement values.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>device_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired device.</td></tr><tr><td><code>name</code> (or <code>properties.name</code>)</td><td>String<br><em>Optional</em></td><td>Replacement name for the device.</td></tr><tr><td><code>custom_metadata</code></td><td>JSON object<br><em>Optional</em></td><td>Custom metadata for the device. Specify up to 50 keys, with key names up to 40 characters long. Accepts string or Boolean values. Strings are limited to 500 characters.<br>For more information, see <a href="../../core-concepts/devices/adding-custom-metadata-to-a-device.md">Adding Custom Metadata to Devices</a>.</td></tr><tr><td><code>is_managed</code></td><td>Boolean<br><em>Optional</em></td><td>Replacement value to indicate whether Seam manages the device.</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
device_update = seam.devices.update(
    device = "30fd243b-3054-4384-a713-5487076a3826",
    name = "My Lock",
    custom_metadata = {
        "internal_account_id": "user-1"
    }
)

pprint(device_update)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/devices/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "30fd243b-3054-4384-a713-5487076a3826",
  "name": "My Lock",
  "custom_metadata": {
    "id": "internal_id_1"
  }
}'
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
const deviceUpdate = await seam.devices.update({
  device_id: "30fd243b-3054-4384-a713-5487076a3826",
  name: "My Lock",
  custom_metadata: {
    "internal_account_id": "user-1"
  }
})

console.log(deviceUpdate)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
device_update = client.devices.update(
  device_id: "30fd243b-3054-4384-a713-5487076a3826",
  name: "My Lock",
  custom_metadata: {
    "internal_account_id": "user-1"
  }
)

puts device_update.inspect
```
{% endtab %}

{% tab title="PHP" %}
<pre class="language-php"><code class="lang-php"><strong>$device_update = $seam->devices->update(
</strong>  device_id: "30fd243b-3054-4384-a713-5487076a3826",
  name: "My Lock",
  custom_metadata: array('internal_account_id' => 'user-1')
)
echo json_encode($device_update, JSON_PRETTY_PRINT);
</code></pre>
{% endtab %}

{% tab title="Java" %}
```java
Map<String, CustomMetadataValue> customMetadata =
    Map.of("internal_account_id", CustomMetadataValue.of(Optional.of("user-1")));

seam.devices().update(DevicesUpdateRequest.builder()
        .deviceId("30fd243b-3054-4384-a713-5487076a3826")
        .name("My Lock")
        .custom_metadata(customMetadata)
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

{% tab title="PHP" %}
```
true
```
{% endtab %}
{% endtabs %}
