---
description: >-
  Learn how to update your access codes, and ensure that the changes are
  successfully set on the device.
---

# Modifying Access Codes

## 1. Update the access code using the API

You can update any active or upcoming access codes using the [Update Access Code](../../../api-clients/access-codes/update-an-access-code.md) request.

When modifying an access code, adjust the properties of the access code, such as the `code`, `name`, `starts_at`, and `ends_at` to the new desired values.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
access_code_id = "1bbd1eba-e4a2-4f96-b1b9-8498a5405b2b"

updated_access_code = seam.access_codes.update(
  access_code = access_code_id,
  name = "my updated code name",
  code = "5432",
  starts_at = "2025-02-01T16:00:00Z",
  ends_at = "2025-02-22T12:00:00Z"
)

pprint(updated_access_code)
```

**Response:**

```
AccessCode(access_code_id='1bbd1eba-e4a2-4f96-b1b9-8498a5405b2b',
           device_id='6aae9d08-fed6-4ca5-8328-e36849ab48fe',
           type='time_bound',
           code='5432',
           created_at='2023-10-19T02:21:58.738Z',
           errors=[],
           warnings=[],
           starts_at='2025-02-01T16:00:00.000Z',
           ends_at='2025-02-22T12:00:00.000Z',
           name='my updated code name',
           status='unset',
           common_code_key=None,
           is_managed=True,
           is_waiting_for_code_assignment=None,
           is_scheduled_on_device=False,
           pulled_backup_access_code_id=None,
           is_backup_access_code_available=False,
           is_backup=None,
           appearance=None,
           is_external_modification_allowed=False)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "27afb24f-c0ae-4ea9-81af-f06fd08de09f",
  "name": "my updated code name",
  "code": "5432",
  "starts_at": "2025-02-01T16:00:00Z",
  "ends_at": "2025-02-22T12:00:00Z"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "UPDATE_ACCESS_CODE",
    "action_attempt_id": "15c2ab78-df8a-40a3-a353-bb53003b8740",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const updatedAccessCode = await seam.accessCodes.update({
  access_code_id: "80aa1afa-f0e5-43c2-96ea-6ab141112f9c",
  name: "my updated code name",
  starts_at: "2025-02-01T16:00:00Z",
  ends_at: "2025-02-22T12:00:00Z",
  code: "5432"
})

console.log(updatedAccessCode)
```

**Response:**

```json
{
  status: 'pending',
  action_type: 'UPDATE_ACCESS_CODE',
  action_attempt_id: 'bacd2fa5-2178-458d-a73a-de19eb7670ba',
  result: null,
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
updated_access_code = client.access_codes.update(
  access_code_id: "0d2c8b21-c71f-4301-82ea-22830f749d9b",
  name: "my updated code name",
  starts_at: "2025-02-01T16:00:00Z",
  ends_at: "2025-02-22T12:00:00Z",
  code: "5432"
)

puts updated_access_code.inspect
```

**Response:**

{% code overflow="wrap" %}
```
<Seam::ActionAttempt:0x00438
  status="success"
  action_type="UPDATE_ACCESS_CODE"
  action_attempt_id="8fca2a08-cfbc-4b61-ab4d-7ef35cecb8d6"
  result={"access_code"=>{"code"=>"5432", "name"=>"my updated code name", "type"=>"time_bound", "errors"=>[], "status"=>"unset", "ends_at"=>"2025-02-22T12:00:00.000Z", "warnings"=>[], "device_id"=>"6aae9d08-fed6-4ca5-8328-e36849ab48fe", "starts_at"=>"2025-02-01T16:00:00.000Z", "appearance"=>nil, "created_at"=>"2023-10-23T20:56:49.213Z", "is_managed"=>true, "access_code_id"=>"0d2c8b21-c71f-4301-82ea-22830f749d9b", "common_code_key"=>nil, "is_scheduled_on_device"=>false, "pulled_backup_access_code_id"=>nil, "is_backup_access_code_available"=>true, "is_external_modification_allowed"=>false}}>
```
{% endcode %}
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$access_code_id = "e3d6cf81-6dd4-490c-b81f-8478054c2003";

$updated_code = $seam->access_codes->update(
  access_code_id: $access_code_id,
  name: 'my updated code name',
  starts_at:  "2025-02-01T16:00:00Z",
  ends_at: "2025-02-22T12:00:00Z"
);

# Inspect this updated code
echo json_encode($updated_code, JSON_PRETTY_PRINT);

// {
//     "access_code_id": "e3d6cf81-6dd4-490c-b81f-8478054c2003",
//     "device_id": "0e2e6262-7f91-4970-a58d-47ef30b41e2e",
//     "name": "my updated code name",
//     "type": "time_bound",
//     "status": "unset",
//     "starts_at": "2025-02-01T16:00:00.000Z",
//     "ends_at": "2025-02-22T12:00:00.000Z",
//     "code": "834435",
//     "created_at": "2023-09-04T05:32:32.085Z",
//     "errors": [],
//     "warnings": [],
//     "is_managed": true,
//     "common_code_key": null,
//     "is_waiting_for_code_assignment": null
// }
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var accessCodeId = "2928083e-4377-4467-ab33-c600ec48cdec";
var updatedAccessCode = seam.AccessCodes.Update(
  accessCodeId: accessCodeId,
  name: "my updated code name",
  startsAt: "2025-02-01T16:00:00Z",
  endsAt: "2025-02-22T12:00:00Z",
  code: "5432"
);

var accessCode = seam.AccessCodes.Get(accessCodeId: accessCodeId);

  Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
  Console.WriteLine("Name: " + accessCode.Name);
  Console.WriteLine("Type: " + accessCode.Type);
  Console.WriteLine("Starts at: " + accessCode.StartsAt);
  Console.WriteLine("Ends at: " + accessCode.EndsAt);
  Console.WriteLine("Code: " + accessCode.Code);
```

**Response:**

```
Access code ID: 2928083e-4377-4467-ab33-c600ec48cdec
Name: my time-bound code
Type: TimeBound
Starts at: 2025-01-01T16:00:00.000Z
Ends at: 2025-01-22T12:00:00.000Z
Code: 2345
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
ActionAttempt attempt = seam.accessCodes()
        .update(AccessCodesUpdateRequest.builder()
                .accessCodeId("48e8f0e3-11a4-49a4-b589-27a1baf7aee4")
                .name("my updated code name")
                .startsAt("2025-02-01T16:00:00Z")
                .endsAt("2025-02-22T12:00:00Z")
                .code("5432")
                .build());
System.out.println(attempt.getPending());
```

**Response:**

```json
Optional[{
  "action_type" : "UPDATE_ACCESS_CODE",
  "action_attempt_id" : "7f9b6416-f755-4128-9d7c-1c0cd5e3b890"
}]
```
{% endtab %}
{% endtabs %}

## 2. Verify that the access code has been updated

### For a permanent access code

There are two methods to verify that a permanent access code has been set on the device:

**Polling Method**

Utilize the `access_code_id` returned in the response from the create endpoint to invoke the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) endpoint. A basic implementation would involve polling this endpoint until the `status` of the access code updates to `set`.

If the `status` remains `setting` for a very long time, or if the `access_code` object contains any `warnings` or `errors` properties, consult [our guide on "Troubleshooting Access Code Issues"](troubleshooting-access-code-issues.md) for further guidance.

**Webhook Events Method**

Monitor the incoming events on your webhook. Be on the lookout for the `access_code.set_on_device` event, which indicates the successful setting of the access code on the device.

However, if you receive `access_code.failed_to_set_on_device` or `access_code.delay_in_setting_on_device` events, it's crucial to refer to [the "Troubleshooting access code issues" guide](troubleshooting-access-code-issues.md) for assistance.

### For a time-bound access code

There are two methods to verify that a time-bound access code has been set on the device:

**Polling Method**

Use the `access_code_id` provided in the response from the create endpoint to call the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) endpoint. In a basic implementation, you would poll this endpoint at the `starts_at` time to check if the access code's status is updated to `set`.

If the `status` remains `setting`, or if the `access_code` object displays any warnings or errors, refer to [our "Troubleshooting Access Code Issues" guide](troubleshooting-access-code-issues.md) for assistance.

**Webhook Events Method**

Monitor the incoming events on your webhook. Be on the lookout for the `access_code.set_on_device` event, which indicates the successful setting of the access code on the device.

However, if you receive `access_code.failed_to_set_on_device` or `access_code.delay_in_setting_on_device` events, it's crucial to refer to [the "Troubleshooting access code issues" guide](troubleshooting-access-code-issues.md) for assistance.

***

## Special Case #1: Changing an ongoing access code to time-bound access

To convert a permanent access code to time-bound access, you must set the `starts_at` and `ends_at` properties to the timeframe that you want for the access code.

{% tabs %}
{% tab title="Python" %}
### 1. Confirm that the access code starts as an ongoing code.

**Request:**

```python
access_code_id="daf89de3-ad3a-49aa-93bd-25f27d58f699"
access_code = seam.access_codes.get(access_code_id)

pprint("Access code ID: " + access_code.access_code_id)
pprint("Type: " + access_code.type)
pprint("Starts at: " + str(access_code.starts_at))
pprint("Ends at: " + str(access_code.ends_at))
```

**Response:**

```
'Access code ID: daf89de3-ad3a-49aa-93bd-25f27d58f699'
'Type: ongoing'
'Starts at: None'
'Ends at: None'
```

### 2. Update the code to set `starts_at` and `ends_at` timestamps.

**Request:**

```python
access_code_id="daf89de3-ad3a-49aa-93bd-25f27d58f699"
access_code = seam.access_codes.get(access_code_id)

pprint(seam.access_codes.update(
  access_code = access_code_id,
  starts_at = "2025-01-01T16:00:00Z",
  ends_at = "2025-01-22T12:00:00Z"
))
```

**Response:**

```
AccessCode(access_code_id='daf89de3-ad3a-49aa-93bd-25f27d58f699',
           device_id='6aae9d08-fed6-4ca5-8328-e36849ab48fe',
           type='time_bound',
           .
           .
           .
           starts_at='2025-01-01T16:00:00.000Z',
           ends_at='2025-01-22T12:00:00.000Z',
           name='my ongoing code',
           .
           .
           .
           )
```

### 3. Confirm that the `type` has changed to `time_bound`.

**Request:**

```python
access_code_id="daf89de3-ad3a-49aa-93bd-25f27d58f699"
access_code = seam.access_codes.get(access_code_id)

pprint("Access code ID: " + access_code.access_code_id)
pprint("Type: " + access_code.type)
pprint("Starts at: " + str(access_code.starts_at))
pprint("Ends at: " + str(access_code.ends_at))
```

**Response:**

```
'Access code ID: daf89de3-ad3a-49aa-93bd-25f27d58f699'
'Type: time_bound'
'Starts at: 2025-01-01T16:00:00.000Z'
'Ends at: 2025-01-22T12:00:00.000Z'
```
{% endtab %}

{% tab title="cURL (bash)" %}
### 1. Confirm that the access code starts as an ongoing code.

**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc"
}'
```

**Response:**

```json
{
  "access_code": {
    "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc",
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
    "name": "my ongoing code",
    .
    .
    .
    "type": "ongoing",
    .
    .
    .
  },
  "ok": true
}
```

### 2. Update the code to set `starts_at` and `ends_at` timestamps.

**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc",
  "starts_at": "2025-01-01T16:00:00Z",
  "ends_at": "2025-01-22T12:00:00Z"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "UPDATE_ACCESS_CODE",
    "action_attempt_id": "8a298777-c689-4552-b622-c5c4bad5d65e",
    "result": null,
    "error": null
  },
  "ok": true
}
```

### 3. Confirm that the `type` has changed to `time_bound`.

**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc"
}'
```

**Response:**

```json
{
  "access_code": {
    "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc",
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
    "name": "my ongoing code",
    .
    .
    .
    "type": "time_bound",
    .
    .
    .
    "starts_at": "2025-01-01T16:00:00.000Z",
    "ends_at": "2025-01-22T12:00:00.000Z",
    .
    .
    .
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
### 1. Confirm that the access code starts as an ongoing code.

**Request:**

```javascript
console.log(await seam.accessCodes.get({
  access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
}))
```

**Response:**

```json
{
  access_code_id: 'f4780806-076e-4cec-8081-df0ea2139d5a',
  device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
  name: 'my ongoing code',
  .
  .
  .
  type: 'ongoing',
  .
  .
  .
}
```

### 2. Update the code to set `starts_at` and `ends_at` timestamps.

**Request:**

```javascript
const updatedAccessCode = await seam.accessCodes.update({
  access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a",
  starts_at: "2025-02-01T16:00:00Z",
  ends_at: "2025-02-22T12:00:00Z"
})

console.log(updatedAccessCode)
```

**Response:**

```json
{
  status: 'pending',
  action_type: 'UPDATE_ACCESS_CODE',
  action_attempt_id: '3ae02205-4cad-4462-a382-b5b8dacbed10',
  result: null,
  error: null
}
```

### 3. Confirm that the `type` has changed to `time_bound`.

**Request:**

```javascript
console.log(await seam.accessCodes.get({
  access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
}))
```

**Response:**

```json
{
  access_code_id: 'f4780806-076e-4cec-8081-df0ea2139d5a',
  device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
  name: 'my ongoing code',
  .
  .
  .
  type: 'time_bound',
  .
  .
  .
  starts_at: '2025-02-01T16:00:00.000Z',
  ends_at: '2025-02-22T12:00:00.000Z',
  .
  .
  .
}
```
{% endtab %}

{% tab title="Ruby" %}
### 1. Confirm that the access code starts as an ongoing code.

**Request:**

```ruby
puts client.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect
```

**Response:**

```
<Seam::AccessCode:0x00438
  access_code_id="6fe348a8-5938-4b73-8a36-86f7ffdfc431"
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  name="my ongoing code"
  .
  .
  .
  type="ongoing"
  .
  .
  .
  >
```

### 2. Update the code to set `starts_at` and `ends_at` timestamps.

**Request:**

```ruby
updated_access_code = client.access_codes.update(
  access_code_id: "6fe348a8-5938-4b73-8a36-86f7ffdfc431",
  starts_at: "2025-02-01T16:00:00Z",
  ends_at: "2025-02-22T12:00:00Z"
)

puts updated_access_code.inspect
```

**Response:**

{% code overflow="wrap" %}
```
<Seam::ActionAttempt:0x00438
  status="success"
  action_type="UPDATE_ACCESS_CODE"
  action_attempt_id="9ad58cbf-42e0-4b88-adfd-7a25bc60f330"
  result={"access_code"=>{"code"=>"1234", "name"=>"my ongoing code", "type"=>"time_bound", "errors"=>[], "status"=>"removing", "ends_at"=>"2025-02-22T12:00:00.000Z", "warnings"=>[], "device_id"=>"6aae9d08-fed6-4ca5-8328-e36849ab48fe", "starts_at"=>"2025-02-01T16:00:00.000Z", "appearance"=>{"name"=>"my ongoing code", "last_name"=>"ongoing code", "first_name"=>"my"}, "created_at"=>"2023-10-23T20:49:42.932Z", "is_managed"=>true, "access_code_id"=>"6fe348a8-5938-4b73-8a36-86f7ffdfc431", "common_code_key"=>nil, "pulled_backup_access_code_id"=>nil, "is_backup_access_code_available"=>true, "is_external_modification_allowed"=>false}}>
```
{% endcode %}

### 3. Confirm that the `type` has changed to `time_bound`.

**Request:**

```ruby
puts client.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect
```

**Response:**

```
<Seam::AccessCode:0x00438
  access_code_id="6fe348a8-5938-4b73-8a36-86f7ffdfc431"
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  name="my ongoing code"
  .
  .
  .
  type="time_bound"
  .
  .
  .
  starts_at=2025-02-01 16:00:00 UTC
  ends_at=2025-02-22 12:00:00 UTC
  .
  .
  .
  >
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$access_code_id = "bd7e8681-4df6-437c-a12a-e965ecca9caf";
$ongoing_code = $seam->access_codes->get($access_code_id);
echo json_encode($ongoing_code->type);
// "ongoing"

$updated_code = $seam->access_codes->update(
  access_code_id: $access_code_id,
  name: 'my ongoing code converted to timebound code',
  starts_at:  "2025-01-01T16:00:00Z",
  ends_at: "2025-01-22T12:00:00Z"
);

# Inspect this updated code
echo json_encode($updated_code, JSON_PRETTY_PRINT);
// {
//     "access_code_id": "bd7e8681-4df6-437c-a12a-e965ecca9caf",
//     "device_id": "0e2e6262-7f91-4970-a58d-47ef30b41e2e",
//     "name": "my ongoing code converted to timebound code",
//     "type": "time_bound",
//     "status": "removing",
//     "starts_at": "2025-01-01T16:00:00.000Z",
//     "ends_at": "2025-01-22T12:00:00.000Z",
//     "code": "453419",
//     "created_at": "2023-09-04T05:29:08.084Z",
//     "errors": [],
//     "warnings": [],
//     "is_managed": true,
//     "common_code_key": null,
//     "is_waiting_for_code_assignment": null
// }
```
{% endtab %}

{% tab title="C#" %}
### 1. Confirm that the access code starts as an ongoing code.

**Request:**

```csharp
var accessCode = seam.AccessCodes.Get(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");

Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
Console.WriteLine("Device ID: " + accessCode.DeviceId);
Console.WriteLine("Name: " + accessCode.Name);
Console.WriteLine("Type: " + accessCode.Type);
```

**Response:**

```
Access code ID: fe372cb9-1fa5-492f-9494-ea01c5558333
Device ID: 6aae9d08-fed6-4ca5-8328-e36849ab48fe
Name: my ongoing code
Type: Ongoing
```

### 2. Update the code to set `starts_at` and `ends_at` timestamps.

**Request:**

```csharp
var accessCodeId = "fe372cb9-1fa5-492f-9494-ea01c5558333";
var updatedAccessCode = seam.AccessCodes.Update(
  accessCodeId: accessCodeId,
  startsAt: "2025-02-01T16:00:00Z",
  endsAt: "2025-02-22T12:00:00Z"
);

Type t = updatedAccessCode.GetType();
PropertyInfo[] props = t.GetProperties();
foreach (var prop in props)
{
  Console.WriteLine(prop.Name + ": " + prop.GetValue(updatedAccessCode));
}
```

**Response:**

{% code overflow="wrap" %}
```
Status: pending
ActionType: UPDATE_ACCESS_CODE
ActionAttemptId: ec2dd748-00da-4408-9978-b4cb6c7f94a5
Result: 
Error: 
```
{% endcode %}

### 3. Confirm that the `type` has changed to `time_bound`.

**Request:**

```csharp
var accessCode = seam.AccessCodes.Get(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");

Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
Console.WriteLine("Device ID: " + accessCode.DeviceId);
Console.WriteLine("Name: " + accessCode.Name);
Console.WriteLine("Type: " + accessCode.Type);
```

**Response:**

```
Access code ID: fe372cb9-1fa5-492f-9494-ea01c5558333
Device ID: 6aae9d08-fed6-4ca5-8328-e36849ab48fe
Name: my ongoing code
Type: TimeBound
```
{% endtab %}

{% tab title="Java" %}
### 1. Confirm that the access code starts as an ongoing code.

**Request:**

```java
AccessCode accessCode = seam.accessCodes()
        .get(AccessCodesGetRequest.builder()
                .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
                .build());
System.out.println(accessCode);
```

**Response:**

```json
{
  "type" : "ongoing",
  "access_code_id" : "aff0c858-22f6-4587-9aac-1f5d550be560",
  "device_id" : "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
  "name" : "my ongoing code",
  "code" : "1234",
  "created_at" : "2023-10-30T03:43:13.403Z",
  "errors" : [ ],
  "warnings" : [ ],
  "is_managed" : "true",
  "status" : "set",
  "is_backup_access_code_available" : false
}
```

### 2. Update the code to set `starts_at` and `ends_at` timestamps.

**Request:**

```java
ActionAttempt attempt = seam.accessCodes()
        .update(AccessCodesUpdateRequest.builder()
                .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
                .startsAt("2025-02-01T16:00:00Z")
                .endsAt("2025-02-22T12:00:00Z")
                .build());
System.out.println(attempt.getPending());
```

**Response:**

```json
Optional[{
  "action_type" : "UPDATE_ACCESS_CODE",
  "action_attempt_id" : "76f8610c-833d-4ea5-8974-f41fb78b871a"
}]
```

### 3. Confirm that the `type` has changed to `time_bound`.

**Request:**

```java
AccessCode accessCode = seam.accessCodes()
        .get(AccessCodesGetRequest.builder()
                .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
                .build());
System.out.println(accessCode);
```

**Response:**

```json
{
  "type" : "time_bound",
  "access_code_id" : "aff0c858-22f6-4587-9aac-1f5d550be560",
  "device_id" : "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
  "name" : "my ongoing code",
  .
  .
  .
  "starts_at" : "2025-02-01T16:00:00Z",
  "ends_at" : "2025-02-22T12:00:00Z",
  .
  .
  .
}
```
{% endtab %}
{% endtabs %}

***

## Special Case #2: Changing a time-bound access code to permanent access

When converting a time-bound code to a permanent one, you'll also need to set the `type` property of the access code to `ongoing`.

{% tabs %}
{% tab title="Python" %}
### 1. Confirm that the access code starts as a time-bound code.

**Request:**

```python
access_code_id="daf89de3-ad3a-49aa-93bd-25f27d58f699"
access_code = seam.access_codes.get(access_code_id)

pprint("Access code ID: " + access_code.access_code_id)
pprint("Type: " + access_code.type)
pprint("Starts at: " + str(access_code.starts_at))
pprint("Ends at: " + str(access_code.ends_at))
```

**Response:**

```
'Access code ID: daf89de3-ad3a-49aa-93bd-25f27d58f699'
'Type: time_bound'
'Starts at: 2025-01-01T16:00:00.000Z'
'Ends at: 2025-01-22T12:00:00.000Z'
```

### 2. Update the code to set the `type` to `ongoing`.

**Request:**

```python
access_code_id="daf89de3-ad3a-49aa-93bd-25f27d58f699"
access_code = seam.access_codes.get(access_code_id)

pprint(seam.access_codes.update(
  access_code = access_code_id,
  type = "ongoing"
))
```

**Response:**

```
AccessCode(access_code_id='daf89de3-ad3a-49aa-93bd-25f27d58f699',
           device_id='6aae9d08-fed6-4ca5-8328-e36849ab48fe',
           type='ongoing',
           .
           .
           .
           starts_at=None,
           ends_at=None,
           name='my ongoing code',
           .
           .
           .
           )
```

### 3. Confirm that the `type` has changed to `ongoing` and the `starts_at` and `ends_at` are `None`.

**Request:**

```python
access_code_id="daf89de3-ad3a-49aa-93bd-25f27d58f699"
access_code = seam.access_codes.get(access_code_id)

pprint("Access code ID: " + access_code.access_code_id)
pprint("Type: " + access_code.type)
pprint("Starts at: " + str(access_code.starts_at))
pprint("Ends at: " + str(access_code.ends_at))
```

**Response:**

```
'Access code ID: daf89de3-ad3a-49aa-93bd-25f27d58f699'
'Type: ongoing'
'Starts at: None'
'Ends at: None'
```
{% endtab %}

{% tab title="cURL (bash)" %}
### 1. Confirm that the access code starts as a time-bound code.

**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc"
}'
```

**Response:**

```json
{
  "access_code": {
    "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc",
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
    "name": "my ongoing code",
    .
    .
    .
    "type": "time_bound",
    .
    .
    .
    "starts_at": "2025-01-01T16:00:00.000Z",
    "ends_at": "2025-01-22T12:00:00.000Z",
    .
    .
    .
  },
  "ok": true
}
```

### 2. Update the code to set the `type` to `ongoing`.

**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc",
  "type": "ongoing"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "UPDATE_ACCESS_CODE",
    "action_attempt_id": "dbee51a5-6576-47e2-b700-b160f67be84c",
    "result": null,
    "error": null
  },
  "ok": true
}
```

### 3. Confirm that the `type` has changed to `ongoing` and the `starts_at` and `ends_at` are `None`.

**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc"
}'
```

**Response:**

```json
{
  "access_code": {
    "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc",
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
    "name": "my ongoing code",
    .
    .
    .
    "type": "ongoing",
    .
    .
    .
  },
  "ok": true
}
```
{% endtab %}

{% tab title="Javascript" %}
### 1. Confirm that the access code starts as a time-bound code.

**Request:**

```javascript
console.log(await seam.accessCodes.get({
  access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
}))
```

**Response:**

```json
{
  access_code_id: 'f4780806-076e-4cec-8081-df0ea2139d5a',
  device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
  name: 'my ongoing code',
  .
  .
  .
  type: 'time_bound',
  .
  .
  .
  starts_at: '2025-02-01T16:00:00.000Z',
  ends_at: '2025-02-22T12:00:00.000Z',
  .
  .
  .
}
```

### 2. Update the code to set the `type` to `ongoing`.

**Request:**

```javascript
const updatedAccessCode = await seam.accessCodes.update({
  access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a",
  type: "ongoing"
})

console.log(updatedAccessCode)
```

**Response:**

```json
{
  status: 'pending',
  action_type: 'UPDATE_ACCESS_CODE',
  action_attempt_id: '2752d567-bcae-4630-9715-0fdd1869c616',
  result: null,
  error: null
}
```

### 3. Confirm that the `type` has changed to `ongoing` and the `starts_at` and `ends_at` are `None`.

**Request:**

```javascript
console.log(await seam.accessCodes.get({
  access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
}))
```

**Response:**

```json
{
  access_code_id: 'f4780806-076e-4cec-8081-df0ea2139d5a',
  device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
  name: 'my ongoing code',
  .
  .
  .
  type: 'ongoing',
  .
  .
  .
}
```
{% endtab %}

{% tab title="Ruby" %}
### 1. Confirm that the access code starts as a time-bound code.

**Request:**

```ruby
puts client.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect
```

**Response:**

```
<Seam::AccessCode:0x00438
  access_code_id="6fe348a8-5938-4b73-8a36-86f7ffdfc431"
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  name="my ongoing code"
  .
  .
  .
  type="time_bound"
  .
  .
  .
  starts_at=2025-02-01 16:00:00 UTC
  ends_at=2025-02-22 12:00:00 UTC
  .
  .
  .
  >
```

### 2. Update the code to set the `type` to `ongoing`.

**Request:**

```ruby
updated_access_code = client.access_codes.update(
  access_code_id: "6fe348a8-5938-4b73-8a36-86f7ffdfc431",
  type: "ongoing"
)

puts updated_access_code.inspect
```

**Response:**

{% code overflow="wrap" %}
```
<Seam::ActionAttempt:0x00438
  status="success"
  action_type="UPDATE_ACCESS_CODE"
  action_attempt_id="240e8c82-eee5-4fb1-8976-6317db11963f"
  result={"access_code"=>{"code"=>"1234", "name"=>"my ongoing code", "type"=>"ongoing", "errors"=>[], "status"=>"setting", "warnings"=>[], "device_id"=>"6aae9d08-fed6-4ca5-8328-e36849ab48fe", "appearance"=>{"name"=>"my ongoing code", "last_name"=>"ongoing code", "first_name"=>"my"}, "created_at"=>"2023-10-23T20:49:42.932Z", "is_managed"=>true, "access_code_id"=>"6fe348a8-5938-4b73-8a36-86f7ffdfc431", "common_code_key"=>nil, "pulled_backup_access_code_id"=>nil, "is_backup_access_code_available"=>true, "is_external_modification_allowed"=>false}}>
```
{% endcode %}

### 3. Confirm that the `type` has changed to `ongoing` and the `starts_at` and `ends_at` are `None`.

**Request:**

```ruby
puts client.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect
```

**Response:**

```
<Seam::AccessCode:0x00438
  access_code_id="6fe348a8-5938-4b73-8a36-86f7ffdfc431"
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  name="my ongoing code"
  .
  .
  .
  type="ongoing"
  .
  .
  .
  >
```
{% endtab %}

{% tab title="PHP" %}
```php
$access_code_id = "f7972a4c-83ca-40dc-8c25-f56f7668597e";
$ongoing_code = $seam->access_codes->get($access_code_id);
echo json_encode($ongoing_code->type);
// "time_bound"

$updated_code = $seam->access_codes->update(
  access_code_id: $access_code_id,
  type: "ongoing"
);

# Inspect this updated code
echo json_encode($updated_code, JSON_PRETTY_PRINT);

// {
//     "access_code_id": "f7972a4c-83ca-40dc-8c25-f56f7668597e",
//     "device_id": "5a9dee23-e50f-4da7-88f3-fef38bf07857",
//     "name": "my time-bound code",
//     "type": "ongoing",
//     "status": "setting",
//     "starts_at": null,
//     "ends_at": null,
//     "code": "1611",
//     "created_at": "2023-09-16T20:18:25.837Z",
//     "errors": [],
//     "warnings": [],
//     "is_managed": true,
//     "common_code_key": null,
//     "is_waiting_for_code_assignment": null,
//     "is_scheduled_on_device": false,
//     "pulled_backup_access_code_id": "8e5a9970-3804-4dfc-af61-fb81b0a4483d",
//     "is_backup_access_code_available": true,
//     "is_backup": null
// }
```
{% endtab %}

{% tab title="C#" %}
### 1. Confirm that the access code starts as a time-bound code.

**Request:**

```csharp
var accessCode = seam.AccessCodes.Get(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");

Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
Console.WriteLine("Device ID: " + accessCode.DeviceId);
Console.WriteLine("Name: " + accessCode.Name);
Console.WriteLine("Type: " + accessCode.Type);
```

**Response:**

```
Access code ID: fe372cb9-1fa5-492f-9494-ea01c5558333
Device ID: 6aae9d08-fed6-4ca5-8328-e36849ab48fe
Name: my ongoing code
Type: TimeBound
```

### 2. Update the code to set the `type` to `ongoing`.

**Request:**

```csharp
var accessCodeId = "fe372cb9-1fa5-492f-9494-ea01c5558333";
var updatedAccessCode = seam.AccessCodes.Update(
  accessCodeId: accessCodeId,
  type: Seam.Api.AccessCodes.UpdateRequest.TypeEnum.Ongoing
);

Type t = updatedAccessCode.GetType();
PropertyInfo[] props = t.GetProperties();
foreach (var prop in props)
{
  Console.WriteLine(prop.Name + ": " + prop.GetValue(updatedAccessCode));
}
```

**Response:**

{% code overflow="wrap" %}
```
Status: pending
ActionType: UPDATE_ACCESS_CODE
ActionAttemptId: 24e04da1-9d75-40fa-8bc3-4447ca76725a
Result: 
Error: 
```
{% endcode %}

### 3. Confirm that the `type` has changed to `ongoing` and the `starts_at` and `ends_at` are `None`.

**Request:**

```csharp
var accessCode = seam.AccessCodes.Get(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");

Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
Console.WriteLine("Device ID: " + accessCode.DeviceId);
Console.WriteLine("Name: " + accessCode.Name);
Console.WriteLine("Type: " + accessCode.Type);
Console.WriteLine("Starts at: " + accessCode.StartsAt);
Console.WriteLine("Ends at: " + accessCode.EndsAt);
```

**Response:**

```
Access code ID: fe372cb9-1fa5-492f-9494-ea01c5558333
Device ID: 6aae9d08-fed6-4ca5-8328-e36849ab48fe
Name: my ongoing code
Type: Ongoing
Starts at: 
Ends at: 
```
{% endtab %}

{% tab title="Java" %}
### 1. Confirm that the access code starts as a time-bound code.

**Request:**

```java
AccessCode accessCode = seam.accessCodes()
        .get(AccessCodesGetRequest.builder()
                .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
                .build());
System.out.println(accessCode);
```

**Response:**

```json
{
  "type" : "time_bound",
  "access_code_id" : "aff0c858-22f6-4587-9aac-1f5d550be560",
  "device_id" : "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
  "name" : "my ongoing code",
  .
  .
  .
  "starts_at" : "2025-02-01T16:00:00Z",
  "ends_at" : "2025-02-22T12:00:00Z",
  .
  .
  .
}
```

### 2. Update the code to set the `type` to `ongoing`.

**Request:**

```java
ActionAttempt attempt = seam.accessCodes()
        .update(AccessCodesUpdateRequest.builder()
                .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
                .type(AccessCodesUpdateRequestType.ONGOING)
                .build());
System.out.println(attempt.getPending());
```

**Response:**

```json
Optional[{
  "action_type" : "UPDATE_ACCESS_CODE",
  "action_attempt_id" : "b94e8912-cef5-4642-8e83-ed3729cd188f"
}]
```

### 3. Confirm that the `type` has changed to `ongoing` and the `starts_at` and `ends_at` are `None`.

**Request:**

```java
AccessCode accessCode = seam.accessCodes()
        .get(AccessCodesGetRequest.builder()
                .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
                .build());
System.out.println(accessCode);
```

**Response:**

```json
{
  "type" : "ongoing",
  "access_code_id" : "aff0c858-22f6-4587-9aac-1f5d550be560",
  "device_id" : "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
  "name" : "my ongoing code",
  .
  .
  .
}
```
{% endtab %}
{% endtabs %}
