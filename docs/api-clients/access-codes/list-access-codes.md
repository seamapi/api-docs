---
description: Get all access codes
---

# List Access Codes

Returns a list of all [access codes](../../products/smart-locks/access-codes/).

{% swagger src="https://connect.getseam.com/openapi.json" path="/access_codes/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

***

## Request

Filter the list of returned access codes by device ID or access code IDs. You can also filter by user identifier key. You must include at least `device_id` or `access_code_ids`.

### Request Body Parameters

<table><thead><tr><th width="264">Parameter</th><th width="133.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>device_id</code></td><td>String (UUID)<br><em>Optional</em></td><td>ID of the devices for which to retrieve access codes.</td></tr><tr><td><code>access_code_ids</code></td><td>Array of strings (UUIDs)<br><em>Optional</em></td><td>IDs of the access codes to retrieve.</td></tr><tr><td><code>user_identifier_key</code></td><td>String<br><em>Optional</em></td><td>Your own internal user ID for the user by which to filter access codes. </td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.access_codes.list(
  device_id="11111111-1111-1111-1111-444444444444"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "11111111-1111-1111-1111-444444444444"
  }'
```
{% endtab %}

{% tab title="JavaScript" %}
```typescript
await seam.access_codes.list({
    device_id: "11111111-1111-1111-1111-444444444444"
})
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
client.access_codes.list(
    device_id: "11111111-1111-1111-1111-444444444444"
)
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.AccessCodes.List(
    deviceId: "11111111-1111-1111-1111-444444444444"
);
```
{% endtab %}

{% tab title="Java" %}
```java
seam.accessCodes().list(AccessCodesListRequest.builder()
        .deviceId("11111111-1111-1111-1111-444444444444")
        .build());
```
{% endtab %}
{% endtabs %}

## Response

Returns an `access_codes` array, in which each returned access code (`access_code`) contains the set of applicable access code properties. For details, see [Access Codes](./).

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
[
  AccessCode(
    access_code_id='1bbd1eba-e4a2-4f96-b1b9-8498a5405b2b',
    device_id='11111111-1111-1111-1111-444444444444',
    type='time_bound',
    code='2345',
    created_at='2023-10-19T02:21:58.738Z',
    errors=[],
    warnings=[],
    starts_at='2025-01-01T16:00:00.000Z',
    ends_at='2025-01-22T12:00:00.000Z',
    name='my time-bound code',
    status='unset',
    common_code_key=None,
    is_managed=True,
    is_waiting_for_code_assignment=None,
    is_scheduled_on_device=False,
    pulled_backup_access_code_id=None,
    is_backup_access_code_available=False,
    is_backup=None,
    appearance=None,
    is_external_modification_allowed=False
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "access_codes": [
    {
      "access_code_id": "27afb24f-c0ae-4ea9-81af-f06fd08de09f",
      "device_id": "11111111-1111-1111-1111-444444444444",
      "name": "my time-bound code",
      "appearance": null,
      "code": "2345",
      "common_code_key": null,
      "type": "time_bound",
      "status": "unset",
      "is_scheduled_on_device": false,
      "starts_at": "2025-01-01T16:00:00.000Z",
      "ends_at": "2025-01-22T12:00:00.000Z",
      "pulled_backup_access_code_id": null,
      "is_backup_access_code_available": true,
      "created_at": "2023-10-19T06:58:42.853Z",
      "errors": [],
      "warnings": [],
      "is_managed": true,
      "is_external_modification_allowed": false
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
    access_code_id: '80aa1afa-f0e5-43c2-96ea-6ab141112f9c',
    device_id: '11111111-1111-1111-1111-444444444444',
    name: 'my time-bound code',
    appearance: null,
    code: '2345',
    common_code_key: null,
    type: 'time_bound',
    status: 'unset',
    is_scheduled_on_device: false,
    starts_at: '2025-01-01T16:00:00.000Z',
    ends_at: '2025-01-22T12:00:00.000Z',
    pulled_backup_access_code_id: null,
    is_backup_access_code_available: true,
    created_at: '2023-10-19T09:36:51.663Z',
    errors: [],
    warnings: [],
    is_managed: true,
    is_external_modification_allowed: false
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
{% code overflow="wrap" %}
```
[
  <Seam::AccessCode:0x00438
    access_code_id="0d2c8b21-c71f-4301-82ea-22830f749d9b"
    device_id="11111111-1111-1111-1111-444444444444"
    name="my time-bound code"
    appearance=nil
    code="2345"
    type="time_bound"
    status="unset"
    is_scheduled_on_device=false
    starts_at=2025-01-01 16:00:00 UTC
    ends_at=2025-01-22 12:00:00 UTC
    pulled_backup_access_code_id=nil
    is_backup_access_code_available=true
    created_at=2023-10-23 20:56:49.213 UTC
    errors=[]
    warnings=[]
    is_managed=true
    is_external_modification_allowed=false
  >,
  ...
]
```
{% endcode %}
{% endtab %}

{% tab title="C#" %}
```json
[
  {
    access_code_id: '80aa1afa-f0e5-43c2-96ea-6ab141112f9c',
    device_id: '11111111-1111-1111-1111-444444444444',
    name: 'my time-bound code',
    appearance: null,
    code: '2345',
    common_code_key: null,
    type: 'time_bound',
    status: 'unset',
    is_scheduled_on_device: false,
    starts_at: '2025-01-01T16:00:00.000Z',
    ends_at: '2025-01-22T12:00:00.000Z',
    pulled_backup_access_code_id: null,
    is_backup_access_code_available: true,
    created_at: '2023-10-19T09:36:51.663Z',
    errors: [],
    warnings: [],
    is_managed: true,
    is_external_modification_allowed: false
  },
  ...
]
```
{% endtab %}

{% tab title="Java" %}
```json
[
  {
    "is_scheduled_on_device" : false,
    "type" : "time_bound",
    "access_code_id" : "48e8f0e3-11a4-49a4-b589-27a1baf7aee4",
    "device_id" : "11111111-1111-1111-1111-444444444444",
    "name" : "my time-bound code",
    "code" : "2345",
    "created_at" : "2023-10-30T03:50:17.802Z",
    "errors" : [ ],
    "warnings" : [ ],
    "is_managed" : "true",
    "starts_at" : "2025-01-01T16:00:00Z",
    "ends_at" : "2025-01-22T12:00:00Z",
    "status" : "unset",
    "is_backup_access_code_available" : false
  },
  ...
]
```
{% endtab %}
{% endtabs %}
