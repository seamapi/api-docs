---
description: Get all unmanaged access codes
---

# List Unmanaged Access Codes

Returns a list of all [unmanaged access codes](../../products/smart-locks/access-codes/migrating-existing-access-codes.md#unmanaged-access-codes) for a device.

The [guide to migrating existing access codes](../../products/smart-locks/access-codes/migrating-existing-access-codes.md) provides an overview of the difference between managed and unmanaged access codes.

{% hint style="info" %}
Not all providers support unmanaged access codes. The following providers do not support unmanaged access codes:

[Kwikset](../../device-guides/kwikset-locks.md)
{% endhint %}

{% swagger src="https://connect.getseam.com/openapi.json" path="/access_codes/unmanaged/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

***

## Request

Filter the list of returned unmanaged access codes by device ID. You can also filter by user identifier key.

### Request Body Parameters

<table><thead><tr><th width="264">Parameter</th><th width="133.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>device_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the devices for which to retrieve unmanaged access codes.</td></tr><tr><td><code>user_identifier_key</code></td><td>String<br><em>Optional</em></td><td>Your own internal user ID for the user by which to filter unmanaged access codes. </td></tr></tbody></table>

## Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.access_codes.unmanaged.list(
  device_id="11111111-1111-1111-1111-444444444444"
)

# [AccessCode(
#   access_code_id='26d6138c-6524-4f3c-ac96-43cc3bea0a8d', 
#   type='ongoing', 
#   code='1988', 
#   name='Code 1', 
#   status='set'
#   )
#  ]
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/unmanaged/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "11111111-1111-1111-1111-444444444444"
  }'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.accessCodes.unmanaged.list({
  device_id: "11111111-1111-1111-1111-444444444444"
});

/*
[
  {
    code: '1988',
    name: 'Code 1',
    status: 'set',
    created_at: '2022-08-26T12:50:17.858Z',
    access_code_id: '26d6138c-6524-4f3c-ac96-43cc3bea0a8d'
  }
]
*/
```
{% endtab %}

{% tab title="PHP" %}
```php
$seam->access_codes->unmanaged->list(
  device_id: '11111111-1111-1111-1111-444444444444',
);
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
seam.access_codes.unmanaged.list(
  device_id: "123e4567-e89b-12d3-a456-426614174000"
)

# [<Seam::AccessCode:0x007cd58
#   code="669781"
#   name="My first code"
#   created_at="2022-07-06T23:26:42.223Z"
#   access_code_id="f19bc8cb-15be-43af-bb52-f1a417e0ff09">]
```
{% endtab %}
{% endtabs %}

***

## Response

Returns an `access_codes` array, in which each returned access code (`access_code`) contains the set of applicable access code properties. For details, see [Access Codes](./).

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "access_codes": [
    {
      "code": "1988",
      "name": "Code 1",
      "status": "set",
      "created_at": "2022-08-26T12:50:17.858Z",
      "access_code_id": "26d6138c-6524-4f3c-ac96-43cc3bea0a8d"
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
