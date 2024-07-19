---
description: Create an access code for a device by ID
---

# Create an Access Code

{% swagger src="https://connect.getseam.com/openapi.json" path="/access_codes/create" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

***

## Code Examples

### Creating an Ongoing Access Code

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

created_access_code = seam.access_codes.create(
  device = device_id,
  name = "my ongoing code",
  code = "1234"
)

pprint(created_access_code)
```

**Response:**

```
AccessCode(access_code_id='daf89de3-ad3a-49aa-93bd-25f27d58f699',
           device_id='6aae9d08-fed6-4ca5-8328-e36849ab48fe',
           type='ongoing',
           code='1234',
           created_at='2023-10-19T02:15:04.911Z',
           errors=[],
           warnings=[],
           starts_at=None,
           ends_at=None,
           name='my ongoing code',
           status='setting',
           common_code_key=None,
           is_managed=True,
           is_waiting_for_code_assignment=None,
           is_scheduled_on_device=None,
           pulled_backup_access_code_id=None,
           is_backup_access_code_available=False,
           is_backup=None,
           appearance=None,
           is_external_modification_allowed=False,
           is_offline_access_code=False,
           is_one_time_use=False)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
  "name": "my ongoing code",
  "code": "1234"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "e8efa128-c06d-40c3-8def-dbb25e5231df",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc",
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
    "name": "my ongoing code",
    "appearance": null,
    "code": "1234",
    "common_code_key": null,
    "type": "ongoing",
    "status": "setting",
    "pulled_backup_access_code_id": null,
    "is_backup_access_code_available": true,
    "created_at": "2023-10-19T06:55:28.278Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "is_external_modification_allowed": false,
    "is_offline_access_code": false,
    "is_one_time_use": false
  },
  "ok": true
}
```
{% endtab %}

{% tab title="Javascript" %}
**Request:**

```javascript
const deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

const createdAccessCode = await seam.accessCodes.create({
    device_id: deviceId,
    name: "my ongoing code",
    code: "1234"
})
  
console.log(createdAccessCode)
```

**Response:**

```json
{
  access_code_id: 'f4780806-076e-4cec-8081-df0ea2139d5a',
  device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
  name: 'my ongoing code',
  appearance: null,
  code: '1234',
  common_code_key: null,
  type: 'ongoing',
  status: 'setting',
  pulled_backup_access_code_id: null,
  is_backup_access_code_available: true,
  created_at: '2023-10-19T09:30:58.399Z',
  errors: [],
  warnings: [],
  is_managed: true,
  is_external_modification_allowed: false,
  is_offline_access_code: false,
  is_one_time_use: false
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

created_access_code = client.access_codes.create(
  device_id: device_id,
  name: "my ongoing code",
  code: "1234"
)

puts created_access_code.inspect
```

**Response:**

```
<Seam::AccessCode:0x00460
  code="1234"
  name="my ongoing code"
  type="ongoing"
  errors=[]
  status="setting"
  warnings=[]
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  appearance=nil
  created_at=2023-10-23 20:49:42.932 UTC
  is_managed=true
  access_code_id="6fe348a8-5938-4b73-8a36-86f7ffdfc431"
  pulled_backup_access_code_id=nil
  is_backup_access_code_available=true
  is_external_modification_allowed=false
  is_offline_access_code=false
  is_one_time_use=false>
```
{% endtab %}

{% tab title="PHP" %}
```php
$seam = new SeamClient("YOUR_API_KEY");

$device_id = "0e2e6262-7f91-4970-a58d-47ef30b41e2e";

$access_code = $seam->access_codes->create(
  device_id: $device_id,
  name: 'my ongoing code',
);

# Inspect this created code
echo json_encode($access_code, JSON_PRETTY_PRINT);

// {
//     "access_code_id": "bd7e8681-4df6-437c-a12a-e965ecca9caf",
//     "device_id": "0e2e6262-7f91-4970-a58d-47ef30b41e2e",
//     "name": "my ongoing code",
//     "type": "ongoing",
//     "status": "setting",
//     "starts_at": null,
//     "ends_at": null,
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
**Request:**

```csharp
var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
var createdAccessCode = seam.AccessCodes.Create(
  deviceId: deviceId,
  name: "my ongoing code",
  code: "1234"
);

Console.WriteLine("Created access code ID: " + createdAccessCode.AccessCodeId);
```

**Response:**

```
Created access code ID: fe372cb9-1fa5-492f-9494-ea01c5558333
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";

AccessCode CreatedAccessCode = seam.accessCodes().create(AccessCodesCreateRequest.builder()
        .deviceId(deviceId)
        .name("my ongoing code")
        .code("1234")
        .build());
System.out.println(CreatedAccessCode);
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
  "status" : "setting",
  "is_backup_access_code_available" : false,
  "is_offline_access_code" : false,
  "is_one_time_use" : false
}
```
{% endtab %}
{% endtabs %}

### Creating a Time-Bound Access Code

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

created_access_code = seam.access_codes.create(
  device = device_id,
  name = "my time-bound code",
  starts_at = "2025-01-01T16:00:00Z",
  ends_at = "2025-01-22T12:00:00Z",
  code = "2345"
)

pprint(created_access_code)
```

**Response:**

```
AccessCode(access_code_id='1bbd1eba-e4a2-4f96-b1b9-8498a5405b2b',
           device_id='6aae9d08-fed6-4ca5-8328-e36849ab48fe',
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
           is_external_modification_allowed=False)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```sh
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
  "name": "my time-bound code",
  "starts_at": "2025-01-01T16:00:00Z",
  "ends_at": "2025-01-22T12:00:00Z",
  "code": "2345"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "2fa34934-883b-496c-8ec1-ac023de55f5a",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "27afb24f-c0ae-4ea9-81af-f06fd08de09f",
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
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
  "ok": true
}
```
{% endtab %}

{% tab title="Javascript" %}
**Request:**

```javascript
const deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

const createdAccessCode = await seam.accessCodes.create({
  device_id: deviceId,
  name: "my time-bound code",
  starts_at: "2025-01-01T16:00:00Z",
  ends_at: "2025-01-22T12:00:00Z",
  code: "2345"
})

console.log(createdAccessCode)
```

**Response:**

```json
{
  access_code_id: '80aa1afa-f0e5-43c2-96ea-6ab141112f9c',
  device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
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
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

created_access_code = client.access_codes.create(
  device_id: device_id,
  name: "my time-bound code",
  starts_at: "2025-01-01T16:00:00Z",
  ends_at: "2025-01-22T12:00:00Z",
  code: "2345"
)

puts created_access_code.inspect
```

**Response:**

```
<Seam::AccessCode:0x00438
  code="2345"
  name="my time-bound code"
  type="time_bound"
  errors=[]
  status="unset"
  ends_at=2025-01-22 12:00:00 UTC
  warnings=[]
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  starts_at=2025-01-01 16:00:00 UTC
  appearance=nil
  created_at=2023-10-23 20:56:49.213 UTC
  is_managed=true
  access_code_id="0d2c8b21-c71f-4301-82ea-22830f749d9b"
  is_scheduled_on_device=false
  pulled_backup_access_code_id=nil
  is_backup_access_code_available=true
  is_external_modification_allowed=false>
```
{% endtab %}

{% tab title="PHP" %}
```php
$seam = new SeamClient("seam_test2ek7_2sq2ExLasPDwa9foJ8PyQ2zH");

$device_id = "0e2e6262-7f91-4970-a58d-47ef30b41e2e";

$access_code = $seam->access_codes->create(
  device_id: $device_id,
  name: 'my timebound code',
  starts_at:  "2025-01-01T16:00:00Z",
  ends_at: "2025-01-22T12:00:00Z"
);

# Inspect this timebound code
echo json_encode($access_code, JSON_PRETTY_PRINT);

// {
//   "access_code_id": "e3d6cf81-6dd4-490c-b81f-8478054c2003",
//   "device_id": "0e2e6262-7f91-4970-a58d-47ef30b41e2e",
//   "name": "my timebound code",
//   "type": "time_bound",
//   "status": "unset",
//   "starts_at": "2025-01-01T16:00:00.000Z",
//   "ends_at": "2025-01-22T12:00:00.000Z",
//   "code": "834435",
//   "created_at": "2023-09-04T05:32:32.085Z",
//   "errors": [],
//   "warnings": [],
//   "is_managed": true,
//   "common_code_key": null,
//   "is_waiting_for_code_assignment": null
// }
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
var createdAccessCode = seam.AccessCodes.Create(
  deviceId: deviceId,
  name: "my time-bound code",
  startsAt: "2025-01-01T16:00:00Z",
  endsAt: "2025-01-22T12:00:00Z",
  code: "2345"
);

Console.WriteLine("Created access code ID: " + createdAccessCode.AccessCodeId);
```

**Response:**

```
Created access code ID: 2928083e-4377-4467-ab33-c600ec48cdec
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";

AccessCode CreatedAccessCode = seam.accessCodes().create(AccessCodesCreateRequest.builder()
        .deviceId(deviceId)
        .name("my time-bound code")
        .startsAt("2025-01-01T16:00:00Z")
        .endsAt("2025-01-22T12:00:00Z")
        .code("2345")
        .build());
System.out.println(CreatedAccessCode);
```

**Response:**

```json
{
  "is_scheduled_on_device" : false,
  "type" : "time_bound",
  "access_code_id" : "48e8f0e3-11a4-49a4-b589-27a1baf7aee4",
  "device_id" : "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
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
}
```
{% endtab %}
{% endtabs %}

### Creating an Hourly-Bound Offline Access Code

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device_id = "9689dc30-77d8-4728-9968-b3abd0835f47"

created_access_code = seam.access_codes.create(
  device = device_id,
  name = "my hourly-bound offline code",
  starts_at = "2023-11-10T00:00:00-00:00",
  ends_at = "2023-11-15T18:00:00-00:00",
  is_offline_access_code = True
)

pprint(created_access_code)
```

**Response:**

```
AccessCode(access_code_id='f078dce8-3c5e-4bc4-bd08-3ad013ee8be6',
           device_id='9689dc30-77d8-4728-9968-b3abd0835f47',
           type='time_bound',
           code=None,
           created_at='2023-11-07T03:51:56.096Z',
           errors=[],
           warnings=[],
           starts_at='2023-11-10T00:00:00.000Z',
           ends_at='2023-11-15T18:00:00.000Z',
           name='my hourly-bound offline code5',
           status='unset',
           common_code_key=None,
           is_managed=True,
           is_waiting_for_code_assignment=True,
           is_scheduled_on_device=False,
           pulled_backup_access_code_id=None,
           is_backup_access_code_available=False,
           is_backup=None,
           appearance=None,
           is_external_modification_allowed=False,
           is_offline_access_code=True,
           is_one_time_use=False)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```sh
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47",
  "name": "my hourly-bound offline code",
  "starts_at": "2023-11-10T00:00:00-00:00",
  "ends_at": "2023-11-15T18:00:00-00:00",
  "is_offline_access_code": true
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "83f1eebf-7a1b-4487-bc90-cf342e1d10d7",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "a4960c38-fe15-4766-8647-c93e8f05f84a",
    "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47",
    "name": "my hourly-bound offline code",
    "appearance": null,
    "code": null,
    "is_waiting_for_code_assignment": true,
    "common_code_key": null,
    "type": "time_bound",
    "status": "unset",
    "is_scheduled_on_device": false,
    "starts_at": "2023-11-10T00:00:00.000Z",
    "ends_at": "2023-11-15T18:00:00.000Z",
    "is_backup_access_code_available": false,
    "created_at": "2023-11-07T03:53:41.971Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "is_external_modification_allowed": false,
    "is_offline_access_code": true,
    "is_one_time_use": false
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const deviceId = "ea12f6c6-e63e-447d-856b-ec9e92981000"

const createdAccessCode = await seam.accessCodes.create({
  device_id: deviceId,
  name: "my hourly-bound offline code",
  starts_at: "2023-12-22T06:00:00-00:00",
  ends_at: "2023-12-22T18:00:00-00:00",
  max_time_rounding: "1h",
  is_offline_access_code: true
})

console.log(createdAccessCode)
```

**Response:**

```json
{
  access_code_id: 'b4977781-7108-478a-a5ec-764b51ba2647',
  device_id: 'ea12f6c6-e63e-447d-856b-ec9e92981000',
  name: 'my hourly-bound offline code',
  appearance: null,
  code: null,
  is_waiting_for_code_assignment: true,
  common_code_key: null,
  type: 'time_bound',
  status: 'unset',
  starts_at: '2023-12-22T06:00:00.000Z',
  ends_at: '2023-12-22T18:00:00.000Z',
  is_backup_access_code_available: false,
  created_at: '2023-12-11T21:46:32.914Z',
  errors: [],
  warnings: [],
  is_managed: true,
  is_external_modification_allowed: false,
  is_offline_access_code: true,
  is_one_time_use: false
}
```
{% endtab %}
{% endtabs %}

### Creating a Daily-Bound Offline Access Code

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device_id = "9689dc30-77d8-4728-9968-b3abd0835f47"

created_access_code = seam.access_codes.create(
  device = device_id,
  name = "my daily-bound offline code",
  starts_at = "2023-11-17T00:00:00-00:00",
  ends_at = "2023-12-18T00:00:00-00:00",
  max_time_rounding = "1d",
  is_offline_access_code = True
)

pprint(created_access_code)
```

**Response:**

```
AccessCode(access_code_id='7cac9c2c-4313-4a94-a034-ceee2a4bd9ef',
           device_id='9689dc30-77d8-4728-9968-b3abd0835f47',
           type='time_bound',
           code=None,
           created_at='2023-11-07T04:38:45.865Z',
           errors=[],
           warnings=[],
           starts_at='2023-11-17T00:00:00.000Z',
           ends_at='2023-12-18T00:00:00.000Z',
           name='my daily-bound offline code',
           status='unset',
           common_code_key=None,
           is_managed=True,
           is_waiting_for_code_assignment=True,
           is_scheduled_on_device=False,
           pulled_backup_access_code_id=None,
           is_backup_access_code_available=False,
           is_backup=None,
           appearance=None,
           is_external_modification_allowed=False,
           is_offline_access_code=True,
           is_one_time_use=False)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```sh
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47",
  "name": "my daily-bound offline code",
  "type": "time_bound",
  "starts_at": "2023-11-17T00:00:00-00:00",
  "ends_at": "2023-12-18T00:00:00-00:00",
  "max_time_rounding": "1d",
  "is_offline_access_code": true
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "487a8bcc-00f0-45ff-be80-3f0e9d6fdfe5",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "08d4a763-f2a5-4544-8c90-bce5217fe7b2",
    "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47",
    "name": "my daily-bound offline code",
    "appearance": null,
    "code": null,
    "is_waiting_for_code_assignment": true,
    "common_code_key": null,
    "type": "time_bound",
    "status": "unset",
    "is_scheduled_on_device": false,
    "starts_at": "2023-11-17T00:00:00.000Z",
    "ends_at": "2023-12-18T00:00:00.000Z",
    "is_backup_access_code_available": false,
    "created_at": "2023-11-07T04:41:15.797Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "is_external_modification_allowed": false,
    "is_offline_access_code": true,
    "is_one_time_use": false
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const deviceId = "ea12f6c6-e63e-447d-856b-ec9e92981000"

const createdAccessCode = await seam.accessCodes.create({
  device_id: deviceId,
  name: "my daily-bound offline code",
  starts_at: "2023-12-22T23:00:00-00:00",
  ends_at: "2023-12-27T22:59:00-00:00",
  max_time_rounding: "1d",
  is_offline_access_code: true
})

console.log(createdAccessCode)
```

**Response:**

```json
{
  access_code_id: 'fb044bde-df9b-4130-bc1a-c0254ab919aa',
  device_id: 'ea12f6c6-e63e-447d-856b-ec9e92981000',
  name: 'my daily-bound offline code',
  appearance: null,
  code: null,
  is_waiting_for_code_assignment: true,
  common_code_key: null,
  type: 'time_bound',
  status: 'unset',
  starts_at: '2023-12-22T23:00:00.000Z',
  ends_at: '2023-12-27T22:59:00.000Z',
  is_backup_access_code_available: false,
  created_at: '2023-12-11T22:06:27.366Z',
  errors: [],
  warnings: [],
  is_managed: true,
  is_external_modification_allowed: false,
  is_offline_access_code: true,
  is_one_time_use: false
}
```
{% endtab %}
{% endtabs %}

### Creating a One-Time-Use Offline Access Code

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device_id = "9689dc30-77d8-4728-9968-b3abd0835f47"

created_access_code = seam.access_codes.create(
  device = device_id,
  name = "my one-time-use offline code",
  starts_at = "2023-11-12T00:00:00-00:00",
  is_offline_access_code = True,
  is_one_time_use = True
)

pprint(created_access_code)
```

**Response:**

```
AccessCode(access_code_id='995957b0-5db5-43f2-ac64-e8ad076c09cf',
           device_id='9689dc30-77d8-4728-9968-b3abd0835f47',
           type='time_bound',
           code=None,
           created_at='2023-11-07T05:03:31.469Z',
           errors=[],
           warnings=[],
           starts_at='2023-11-12T00:00:00.000Z',
           ends_at=None,
           name='my one-time-use offline code',
           status='unset',
           common_code_key=None,
           is_managed=True,
           is_waiting_for_code_assignment=True,
           is_scheduled_on_device=False,
           pulled_backup_access_code_id=None,
           is_backup_access_code_available=False,
           is_backup=None,
           appearance=None,
           is_external_modification_allowed=False,
           is_offline_access_code=True,
           is_one_time_use=True)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```sh
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47",
  "name": "my one-time-use offline code",
  "starts_at": "2023-11-12T00:00:00-00:00",
  "is_offline_access_code": true,
  "is_one_time_use": true
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "67562d28-1e54-4faa-b5f8-057bbc6de91d",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "27000544-20d8-45ea-ba47-267480a3aaf4",
    "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47",
    "name": "my one-time-use offline code",
    "appearance": null,
    "code": null,
    "is_waiting_for_code_assignment": true,
    "common_code_key": null,
    "type": "time_bound",
    "status": "unset",
    "is_scheduled_on_device": false,
    "starts_at": "2023-11-12T00:00:00.000Z",
    "is_backup_access_code_available": false,
    "created_at": "2023-11-07T05:08:03.467Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "is_external_modification_allowed": false,
    "is_offline_access_code": true,
    "is_one_time_use": true
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Parameters

| `device_id`                   | type: string                     | <p><br>ID of the Device</p>                                                                                                                                                                                                                                                    |
| ----------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                        | <p>type: string<br>Optional</p>  | Name of Access Code                                                                                                                                                                                                                                                            |
| `starts_at`                   | <p>type: string<br>Optional</p>  | From when is the code valid                                                                                                                                                                                                                                                    |
| `ends_at`                     | <p>type: string<br>Optional</p>  | Code expiry. Must be a timestamp in the future and after `starts_at`.                                                                                                                                                                                                          |
| `code`                        | <p>type: string<br>Optional</p>  | Access code of device                                                                                                                                                                                                                                                          |
| `use_backup_access_code_pool` | <p>type: boolean<br>Optional</p> | Use a [backup access code pool](https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes) provided by Seam. This allows you to use [/access\_codes/pull\_backup\_access\_code](https://docs.seam.co/latest/api-clients/access-codes/pull-backup-access-code) |
| `common_code_key`             | <p>type: string<br>Optional</p>  | any two access codes with the same `common_code_key` are guaranteed to have the same code                                                                                                                                                                                      |
| `prefer_native_scheduling`    | <p>type: boolean<br>Optional</p> | Whether [native scheduling](../../products/smart-locks/access-codes/#native-scheduling) should be used for time-bound codes when supported by the provider (defaults to true)                                                                                                  |
| `allow_external_modification` | <p>type: boolean<br>Optional</p> | Whether [external modification](./#external-modification) of the codes should be allowed (defaults to false)                                                                                                                                                                   |
| `is_offline_access_code`      | <p>type: boolean<br>Optional</p> | Whether the access code is an [offline access code](../../products/smart-locks/access-codes/offline-access-codes.md)                                                                                                                                                           |
| `is_one_time_use`             | <p>type: boolean<br>Optional</p> | Whether the [offline access code](../../products/smart-locks/access-codes/offline-access-codes.md) is a single-use access code.                                                                                                                                                |

***

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "c10e3db5-a5a2-47f2-a76f-48379ed9cd22",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "12525e70-9474-4bb6-a7f6-12bbe4166f36",
    "device_id": "1c459b4c-0008-4752-befc-bc18521247d4",
    "name": "My code",
    "code": "1988",
    "common_code_key": null,
    "type": "ongoing",
    "status": "setting",
    "created_at": "2023-05-11T11:16:10.359Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "is_external_modification_allowed": false,
    "is_offline_access_code": false,
    "is_one_time_use": false
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
