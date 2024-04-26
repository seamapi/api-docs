---
description: Pull a backup access code from Seam's backup access code pool
---

# Pull Backup Access Code

If you've opted-in to [Seam's backup access code pool](../../products/smart-locks/access-codes/backup-access-codes.md) when [creating an access code](./create-an-access-code.md), you can pull a backup access code from the pool at any time. These backup codes are guaranteed to work immediately and automatically programmed to be removed from the device after the the access code ends.

### Code Examples

{% swagger method="post" path="/access_codes/pull_backup_access_code" baseUrl="https://connect.getseam.com" summary="Pull a Backup Access Code" %}
{% swagger-description %}
Pull a backup access code from Seam's backup access code pool for this access code. You can only pull backup access codes for `time_bound` codes. The pulled backup access code will be removed at the same time as the original access code.
{% endswagger-description %}

{% swagger-parameter in="body" name="access_code_id" required="true" %}
Access Code ID
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer \<API\_KEY>
{% endswagger-parameter %}

{% swagger-response status="201: Created" description="" %}
```javascript
{
	"backup_access_code": {
		"access_code_id": "12525e70-9474-4bb6-a7f6-12bbe4166f36",
		"device_id": "1c459b4c-0008-4752-befc-bc18521247d4",
		"name": "Backup 12525e70 (Seam)",
		"code": "1970",
		"common_code_key": null,
		"type": "time_bound",
		"starts_at": "2023-05-11T11:16:10.359Z",
    "ends_at": "2022-08-13T19:23:42+0000"
		"status": "set",
		"created_at": "2023-05-11T11:16:10.359Z",
		"errors": [],
		"warnings": [],
		"is_managed": true,
    "is_backup": true
	},
	"ok": true
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
  "error": {
    "type": "invalid_input",
    "message": "Required for provided \"access_code_id\"",
    "validation_errors": {
      "_errors": [],
      "access_code_id": {
        "_errors": [
          "Required"
        ]
      }
    },
    "request_id": "9f3e59f1-cfb5-4e48-93df-0a988554eb0b"
  },
  "ok": false
}
```
{% endswagger-response %}
{% endswagger %}

#### Pulling a Backup Access Code

{% tabs %}
{% tab title="Ruby" %}
```ruby
seam.access_codes.pull_backup_access_code(
  access_code_id: "123e4567-e89b-12d3-a456-426614174000",
)

# <Seam::AccessCode:0x007cd58
#   code="669781"
#   name="Backup 123e4567 (Seam)"
#   type="time_bound"
#   starts_at="2022-08-12T19:23:42+0000"
#   ends_at="2022-08-13T19:23:42+0000"
#   is_backup=true
#   status="set"
#   created_at="2022-07-06T23:26:42.223Z"
#   access_code_id="f19bc8cb-15be-43af-bb52-f1a417e0ff09">
```
{% endtab %}

{% tab title="Python" %}
```python
seam.access_codes.pull_backup_access_code("a83690b2-2b70-409a-9a94-426699b84c97")

# AccessCode(
#   access_code_id='a9f66aa7-44fb-4b91-b7a8-22c0f996bfc1',
#   type='time_bound', code='7732',
#   starts_at="2022-08-12T19:23:42+0000"
#   ends_at="2022-08-13T19:23:42+0000"
#   name='Backup 123e4567 (Seam)',
#   is_backup=True
#   status='set'
# )
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.accessCodes.pullBackupAccessCode({
  access_code_id: "a83690b2-2b70-409a-9a94-426699b84c97",
})

/*
{
  code: '9913',
  type: 'time_bound',
  status: 'set',
  is_backup: true,
  starts_at:"2022-08-12T19:23:42+0000",
  ends_at:"2022-08-13T19:23:42+0000",
  created_at: '2022-08-26T11:08:24.161Z',
  access_code_id: 'e0e31756-9385-408b-89f8-9f5ea43f9adf'
}
*/
```
{% endtab %}
{% endtabs %}

### Parameters

| `access_code_id` | type: string | <p><br>ID of the Access Code</p> |
| ---------------- | ------------ | -------------------------------- |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "backup_access_code": {
    "access_code_id": "12525e70-9474-4bb6-a7f6-12bbe4166f36",
    "device_id": "1c459b4c-0008-4752-befc-bc18521247d4",
    "name": "Backup 12525e70 (Seam)",
    "code": "1988",
    "common_code_key": null,
    "type": "time_bound",
    "status": "set",
    "starts_at": "2022-08-12T19:23:42+0000",
    "ends_at": "2022-08-13T19:23:42+0000",
    "created_at": "2023-05-11T11:16:10.359Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "is_backup": true
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
