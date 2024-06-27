---
description: >-
  Learn how to retrieve access codes using various filters or by referencing
  their specific IDs
---

# Retrieving Access Codes

## Retrieving All Access Codes for a Device

To retrieve all access codes for a device, include the `device_id` in the [List Access Codes](../../../api-clients/access-codes/list-access-codes.md) request.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
access_codes = seam.access_codes.list(device=device_id)

pprint(access_codes)
```

**Response:**

```
[AccessCode(access_code_id='1bbd1eba-e4a2-4f96-b1b9-8498a5405b2b',
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
            is_external_modification_allowed=False),
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
            status='set',
            common_code_key=None,
            is_managed=True,
            is_waiting_for_code_assignment=None,
            is_scheduled_on_device=None,
            pulled_backup_access_code_id=None,
            is_backup_access_code_available=False,
            is_backup=None,
            appearance={'first_name': 'my',
                        'last_name': 'ongoing code',
                        'name': 'my ongoing code'},
            is_external_modification_allowed=False)]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
}'
```

**Response:**

```json
{
  "access_codes": [
    {
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
    {
      "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc",
      "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
      "name": "my ongoing code",
      "appearance": {
        "name": "my ongoing code",
        "last_name": "ongoing code",
        "first_name": "my"
      },
      "code": "1234",
      "common_code_key": null,
      "type": "ongoing",
      "status": "set",
      "pulled_backup_access_code_id": null,
      "is_backup_access_code_available": true,
      "created_at": "2023-10-19T06:55:28.278Z",
      "errors": [],
      "warnings": [],
      "is_managed": true,
      "is_external_modification_allowed": false
    }
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.accessCodes.list({
  device_id: "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
}))
```

**Response:**

```json
[
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
  },
  {
    access_code_id: 'f4780806-076e-4cec-8081-df0ea2139d5a',
    device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
    name: 'my ongoing code',
    appearance: {
      name: 'my ongoing code',
      last_name: 'ongoing code',
      first_name: 'my'
    },
    code: '1234',
    common_code_key: null,
    type: 'ongoing',
    status: 'set',
    pulled_backup_access_code_id: null,
    is_backup_access_code_available: true,
    created_at: '2023-10-19T09:30:58.399Z',
    errors: [],
    warnings: [],
    is_managed: true,
    is_external_modification_allowed: false
  }
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

puts client.access_codes.list(device_id).inspect
```

**Response:**

```
[<Seam::AccessCode:0x00438
  access_code_id="0d2c8b21-c71f-4301-82ea-22830f749d9b"
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
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
  is_external_modification_allowed=false>, <Seam::AccessCode:0x00460
  access_code_id="6fe348a8-5938-4b73-8a36-86f7ffdfc431"
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  name="my ongoing code"
  appearance={"name"=>"my ongoing code", "last_name"=>"ongoing code", "first_name"=>"my"}
  code="1234"
  type="ongoing"
  status="set"
  pulled_backup_access_code_id=nil
  is_backup_access_code_available=true
  created_at=2023-10-23 20:49:42.932 UTC
  errors=[]
  warnings=[]
  is_managed=true
  is_external_modification_allowed=false>]
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$device_id = "0e2e6262-7f91-4970-a58d-47ef30b41e2e";

$access_codes = $seam->access_codes->list(
  device_id: $device_id
);

# Inspect the access codes
echo json_encode($access_codes, JSON_PRETTY_PRINT);

// [
//     {
//         "access_code_id": "e3d6cf81-6dd4-490c-b81f-8478054c2003",
//         "device_id": "0e2e6262-7f91-4970-a58d-47ef30b41e2e",
//         "name": "my timebound code",
//         "type": "time_bound",
//         "status": "unset",
//         "starts_at": "2025-01-01T16:00:00.000Z",
//         "ends_at": "2025-01-22T12:00:00.000Z",
//         "code": "834435",
//         "created_at": "2023-09-04T05:32:32.085Z",
//         "errors": [],
//         "warnings": [],
//         "is_managed": true,
//         "common_code_key": null,
//         "is_waiting_for_code_assignment": null
//     },
//     {
//         "access_code_id": "bd7e8681-4df6-437c-a12a-e965ecca9caf",
//         "device_id": "0e2e6262-7f91-4970-a58d-47ef30b41e2e",
//         "name": "my ongoing code",
//         "type": "ongoing",
//         "status": "set",
//         "starts_at": null,
//         "ends_at": null,
//         "code": "453419",
//         "created_at": "2023-09-04T05:29:08.084Z",
//         "errors": [],
//         "warnings": [],
//         "is_managed": true,
//         "common_code_key": null,
//         "is_waiting_for_code_assignment": null
//     }
// ]

```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
var accessCodes = seam.AccessCodes.List(deviceId: deviceId);

foreach (var accessCode in accessCodes)
{
  Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
  Console.WriteLine("Type: " + accessCode.Type);
  Console.WriteLine("Code: " + accessCode.Code);
  Console.WriteLine();
}
```

**Response:**

```
Access code ID: 2928083e-4377-4467-ab33-c600ec48cdec
Type: TimeBound
Code: 2345

Access code ID: fe372cb9-1fa5-492f-9494-ea01c5558333
Type: Ongoing
Code: 1234
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```javascript
var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";

List<AccessCode> accessCodes = seam.accessCodes().list(AccessCodesListRequest.builder()
        .deviceId(deviceId)
        .build());
System.out.println(accessCodes);
```

**Response:**

```json
[{
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
}, {
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
}]
```
{% endtab %}
{% endtabs %}

***

## Retrieving Access Codes Using Access Code IDs

To retrieve access codes by IDs, include the desired `access_code_ids` in the [List Access Codes](../../../api-clients/access-codes/list-access-codes.md) request.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
access_code_ids = [
    "1bbd1eba-e4a2-4f96-b1b9-8498a5405b2b", 
    "daf89de3-ad3a-49aa-93bd-25f27d58f699"
]
access_codes = seam.access_codes.list(access_codes=access_code_ids)

pprint(access_codes)
```

**Response:**

```
[AccessCode(access_code_id='1bbd1eba-e4a2-4f96-b1b9-8498a5405b2b',
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
            is_external_modification_allowed=False),
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
            status='set',
            common_code_key=None,
            is_managed=True,
            is_waiting_for_code_assignment=None,
            is_scheduled_on_device=None,
            pulled_backup_access_code_id=None,
            is_backup_access_code_available=False,
            is_backup=None,
            appearance={'first_name': 'my',
                        'last_name': 'ongoing code',
                        'name': 'my ongoing code'},
            is_external_modification_allowed=False)]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_ids": [
    "27afb24f-c0ae-4ea9-81af-f06fd08de09f",
    "d2047ba8-8849-467f-a07a-efab6c3673bc"
  ]
}'
```

**Response:**

```json
{
  "access_codes": [
    {
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
    {
      "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc",
      "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
      "name": "my ongoing code",
      "appearance": {
        "name": "my ongoing code",
        "last_name": "ongoing code",
        "first_name": "my"
      },
      "code": "1234",
      "common_code_key": null,
      "type": "ongoing",
      "status": "set",
      "pulled_backup_access_code_id": null,
      "is_backup_access_code_available": true,
      "created_at": "2023-10-19T06:55:28.278Z",
      "errors": [],
      "warnings": [],
      "is_managed": true,
      "is_external_modification_allowed": false
    }
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const accessCodeIds = ['80aa1afa-f0e5-43c2-96ea-6ab141112f9c', 'f4780806-076e-4cec-8081-df0ea2139d5a']
console.log(await seam.accessCodes.list({
  access_code_ids: accessCodeIds
}))
```

**Response:**

```json
[
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
  },
  {
    access_code_id: 'f4780806-076e-4cec-8081-df0ea2139d5a',
    device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
    name: 'my ongoing code',
    appearance: {
      name: 'my ongoing code',
      last_name: 'ongoing code',
      first_name: 'my'
    },
    code: '1234',
    common_code_key: null,
    type: 'ongoing',
    status: 'set',
    pulled_backup_access_code_id: null,
    is_backup_access_code_available: true,
    created_at: '2023-10-19T09:30:58.399Z',
    errors: [],
    warnings: [],
    is_managed: true,
    is_external_modification_allowed: false
  }
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
access_code_ids = ["0d2c8b21-c71f-4301-82ea-22830f749d9b", "6fe348a8-5938-4b73-8a36-86f7ffdfc431"]
access_codes = client.access_codes.list(access_code_ids: access_code_ids)

puts access_codes.inspect
```

**Response:**

```
[<Seam::AccessCode:0x00438
  access_code_id="0d2c8b21-c71f-4301-82ea-22830f749d9b"
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
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
  is_external_modification_allowed=false>, <Seam::AccessCode:0x00460
  access_code_id="6fe348a8-5938-4b73-8a36-86f7ffdfc431"
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  name="my ongoing code"
  appearance={"name"=>"my ongoing code", "last_name"=>"ongoing code", "first_name"=>"my"}
  code="1234"
  type="ongoing"
  status="set"
  pulled_backup_access_code_id=nil
  is_backup_access_code_available=true
  created_at=2023-10-23 20:49:42.932 UTC
  errors=[]
  warnings=[]
  is_managed=true
  is_external_modification_allowed=false>]
```
{% endtab %}

{% tab title="PHP" %}
```php
/** not implemented; contact us if you need immediate support **/
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
List<string> accessCodeIds = new() {
  "2928083e-4377-4467-ab33-c600ec48cdec",
  "fe372cb9-1fa5-492f-9494-ea01c5558333"
};
var accessCodes = seam.AccessCodes.List(accessCodeIds: accessCodeIds);

foreach (var accessCode in accessCodes)
{
  Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
  Console.WriteLine("Type: " + accessCode.Type);
  Console.WriteLine("Code: " + accessCode.Code);
  Console.WriteLine();
}
```

**Response:**

```
Access code ID: 2928083e-4377-4467-ab33-c600ec48cdec
Type: TimeBound
Code: 2345

Access code ID: fe372cb9-1fa5-492f-9494-ea01c5558333
Type: Ongoing
Code: 1234
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
List<String> accessCodeIds = new ArrayList<>(Arrays.asList(
  "48e8f0e3-11a4-49a4-b589-27a1baf7aee4",
  "aff0c858-22f6-4587-9aac-1f5d550be560"
));

List<AccessCode> accessCodes = seam.accessCodes().list(AccessCodesListRequest.builder()
        .deviceId(deviceId)
        .accessCodeIds(accessCodeIds)
        .build());
System.out.println(accessCodes);
```

**Response:**

```json
[{
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
}, {
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
}]
```
{% endtab %}
{% endtabs %}

***

## Retrieving Individual Access Codes

To retrieve a specific access code, include the desired `access_code_id` in the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) request.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
access_code_id = "daf89de3-ad3a-49aa-93bd-25f27d58f699"
access_code = seam.access_codes.get(access_code_id)

pprint(access_code)
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
           status='set',
           common_code_key=None,
           is_managed=True,
           is_waiting_for_code_assignment=None,
           is_scheduled_on_device=None,
           pulled_backup_access_code_id=None,
           is_backup_access_code_available=False,
           is_backup=None,
           appearance={'first_name': 'my',
                       'last_name': 'ongoing code',
                       'name': 'my ongoing code'},
           is_external_modification_allowed=False)
```
{% endtab %}

{% tab title="cURL (bash)" %}
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
    "appearance": {
      "name": "my ongoing code",
      "last_name": "ongoing code",
      "first_name": "my"
    },
    "code": "1234",
    "common_code_key": null,
    "type": "ongoing",
    "status": "set",
    "pulled_backup_access_code_id": null,
    "is_backup_access_code_available": true,
    "created_at": "2023-10-19T06:55:28.278Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "is_external_modification_allowed": false
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
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
  appearance: {
    name: 'my ongoing code',
    last_name: 'ongoing code',
    first_name: 'my'
  },
  code: '1234',
  common_code_key: null,
  type: 'ongoing',
  status: 'set',
  pulled_backup_access_code_id: null,
  is_backup_access_code_available: true,
  created_at: '2023-10-19T09:30:58.399Z',
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
puts client.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect
```

**Response:**

```
<Seam::AccessCode:0x00438
  access_code_id="6fe348a8-5938-4b73-8a36-86f7ffdfc431"
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  name="my ongoing code"
  appearance={"name"=>"my ongoing code", "last_name"=>"ongoing code", "first_name"=>"my"}
  code="1234"
  type="ongoing"
  status="set"
  pulled_backup_access_code_id=nil
  is_backup_access_code_available=true
  created_at=2023-10-23 20:49:42.932 UTC
  errors=[]
  warnings=[]
  is_managed=true
  is_external_modification_allowed=false>
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$access_code_id = "e3d6cf81-6dd4-490c-b81f-8478054c2003";

$access_code = $seam->access_codes->get(
  access_code_id: $access_code_id
);

# Inspect access codes
echo json_encode($access_code, JSON_PRETTY_PRINT);

// {
//     "access_code_id": "e3d6cf81-6dd4-490c-b81f-8478054c2003",
//     "device_id": "0e2e6262-7f91-4970-a58d-47ef30b41e2e",
//     "name": "my timebound code",
//     "type": "time_bound",
//     "status": "unset",
//     "starts_at": "2025-01-01T16:00:00.000Z",
//     "ends_at": "2025-01-22T12:00:00.000Z",
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
var accessCode = seam.AccessCodes.Get(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");

Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
Console.WriteLine("Type: " + accessCode.Type);
Console.WriteLine("Code: " + accessCode.Code);
Console.WriteLine();
```

**Response:**

```
Access code ID: fe372cb9-1fa5-492f-9494-ea01c5558333
Type: Ongoing
Code: 1234
```
{% endtab %}

{% tab title="Java" %}
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
{% endtab %}
{% endtabs %}
