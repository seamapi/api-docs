---
description: Delete a device by ID
---

# Delete a Device

## Delete a Device

{% hint style="warning" %}
Deleting a device triggers a `device.deleted` event and removes the device and all data associated with the device from Seam, including events, access codes, and so on. For every deleted resource, Seam sends a corresponding deleted event, but the resource is not deleted from the provider.

For example, if you delete a device with an access code, Seam sends both a `device.deleted` event and an `access_code.deleted` event, but Seam does not remove the access code from the device.
{% endhint %}

{% hint style="info" %}
Deleting a device prevents that device from appearing again in your workspace. The only way to recover a deleted device is to delete the entire connected account.

Seam recommends unmanaging a device instead of deleting it.
{% endhint %}

## Delete a device

<mark style="color:red;">`DELETE`</mark> `https://connect.getseam.com/devices/delete`

Delete a single device from your workspace using a device\_id

#### Query Parameters

| Name                                         | Type   | Description |
| -------------------------------------------- | ------ | ----------- |
| device\_id<mark style="color:red;">\*</mark> | String | Device id   |

{% tabs %}
{% tab title="200: OK " %}
```javascript
{
  "ok": true
}
```
{% endtab %}

{% tab title="400: Bad Request " %}
```javascript
{
  "error": {
    "type": "invalid_input",
    "message": "Invalid uuid for provided \"device_id\"",
    "validation_errors": {
      "_errors": [],
      "device_id": {
        "_errors": [
          "Invalid uuid"
        ]
      }
    },
    "request_id": "73b3bd10-365c-4bb9-927f-0202d6b06023"
  },
  "ok": false
}
```
{% endtab %}

{% tab title="404: Not Found " %}
```javascript
{
  "error": {
    "type": "device_not_found",
    "message": "device not found",
    "data": {
      "device_id": "a53690b2-2b70-409a-9a94-426699b84c97"
    },
    "request_id": "e57b4b09-90f0-487a-8d50-3bec8af8792e"
  },
  "ok": false
}
```
{% endtab %}
{% endtabs %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
seam.devices.delete("123e4567-e89b-12d3-a456-426614174000")

```
{% endtab %}

{% tab title="Javascript" %}
```typescript
await seam.devices.delete({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
})
```
{% endtab %}

{% tab title="PHP" %}
```php
$seam->devices->delete("123e4567-e89b-12d3-a456-426614174000")

```
{% endtab %}
{% endtabs %}
