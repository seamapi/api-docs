---
description: When listing devices, you can filter by custom metadata.
---

# Filtering Devices by Custom Metadata

When you use [List Devices](../../api-clients/devices/list-devices.md), you can filter the list by one or more [custom metadata](../../api-clients/devices/#device-properties) pairs. Include the `custom_metadata_has` parameter with a JSON string that specifies the desired key:value pairs.

{% hint style="info" %}
You can use the [Update Connected Account](../../api-clients/connected-accounts/update-a-connected-account.md) method with the optional [`custom_metadata` property](../../api-clients/connected-accounts/#connected\_account-properties) to [add custom metadata for a device](adding-custom-metadata-to-a-device.md).
{% endhint %}

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
devices = seam.devices.list(
  custom_metadata_has = {
    "internal_account_id": "user-1"
  }
)

pprint(devices)
```

**Response:**

```
[Device(device_id='f7a7fb02-9277-4354-8dd1-28e2d016a7a9',
        device_type='schlage_lock',
        ...
        is_managed=True,
        custom_metadata={"internal_account_id": "user-1"}),
...]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/devices/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "custom_metadata_has": {
    "internal_account_id": "user-1"
  },
}'
```

**Response:**

```json
{
  "devices": [
    {
      "device_id": "f7a7fb02-9277-4354-8dd1-28e2d016a7a9",
      "device_type": "schlage_lock",
      ...
      "is_managed": true,
      "custom_metadata": {
        "internal_account_id": "user-1"
      }
    }
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const devices = await seam.devices.list({
  custom_metadata_has: {
    "internal_account_id": "user-1"
  }
});

console.log(devices);
```

**Response:**

```json
[
  {
    device_id: 'f7a7fb02-9277-4354-8dd1-28e2d016a7a9',
    device_type: 'schlage_lock',
    ...
    is_managed: true,
    custom_metadata: { internal_account_id: 'user-1' }
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
devices = client.devices.list(
  custom_metadata_has: {
    "internal_account_id": "user-1"
  }
)

puts devices.inspect
```

**Response:**

```
[<Seam::Device:0x004d8
  device_id="f7a7fb02-9277-4354-8dd1-28e2d016a7a9"
  device_type="schlage_lock"
  ...
  is_managed=true
  custom_metadata={"internal_account_id"=>"user-1"}>, ...]
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$devices = $seam->devices->list(
  custom_metadata_has: array('internal_account_id' => 'user-1')
);

echo json_encode($devices);
```

**Response:**

{% code overflow="wrap" %}
```json
[{"device_id":"f7a7fb02-9277-4354-8dd1-28e2d016a7a9","device_type":"schlage_lock",..."is_managed":true,"custom_metadata":{"internal_account_id":"user-1"}},...]
```
{% endcode %}
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var customMetadata = new Dictionary<string, string>()
{
  {"internal_account_id", "user-1"}
};

var devices = seam.Devices.List(
  customMetadataHas: customMetadata
);

foreach (var device in devices)
{
  Console.WriteLine(device);
}
```

**Response:**

```json
{
  "device_id": "f7a7fb02-9277-4354-8dd1-28e2d016a7a9",
  "device_type": "schlage_lock",
  ...
  "is_managed": true,
  "custom_metadata": {
    "internal_account_id": "user-1"
  }
}
...
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
Map<String, CustomMetadataValue> customMetadata =
    Map.of("internal_account_id", CustomMetadataValue.of(Optional.of("user-1")));

var devices = seam.devices().list(DevicesListRequest.builder()
                .customMetadataHas(customMetadata)
                .build());

System.out.println(devices);
```

**Response:**

```json
[{
  "device_id" : "f7a7fb02-9277-4354-8dd1-28e2d016a7a9",
  "device_type" : "schlage_lock",
  ...
  "is_managed" : true,
  "custom_metadata" : {
    "internal_account_id" : "user-1"
  }
},...
]
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
devices, err := client.Devices.List(
	context.Background(),
	&api.DevicesListRequest{
		CustomMetadataHas: {"internal_account_id":"user-1"},
	},
)
if err != nil {
	return err
}
fmt.Println(devices)
return nil
```

**Response:**

```json
[{
  "device_id": "f7a7fb02-9277-4354-8dd1-28e2d016a7a9",
  "device_type": "schlage_lock",
  ...
  "is_managed": true,
  "custom_metadata": {
    "internal_account_id": "user-1"
  }
}...
]
```
{% endtab %}
{% endtabs %}
