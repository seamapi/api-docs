---
description: Get a Lock on your account by its Device ID
---

# Get Lock

{% swagger method="get" path="/locks/get" baseUrl="https://connect.getseam.com" summary="Get Locks for Device" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="device_id" required="true" %}
ID of Device to be Locked
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-parameter in="query" name="name" %}
Name of Device
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
  "lock": {
    "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
    "device_type": "schlage_lock",
    "capabilities_supported": [],
    "properties": {
      "locked": false,
      "online": true,
      "battery_level": 0.48,
      "schlage_metadata": {
        "device_id": "device-3",
        "device_name": "GARAGE"
      },
      "name": "Front Door"
    },
    "location": null,
    "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
    "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
    "created_at": "2022-08-24T11:14:37.116Z",
    "errors": []
  },
  "device": {
    "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
    "device_type": "schlage_lock",
    "capabilities_supported": [],
    "properties": {
      "locked": false,
      "online": true,
      "battery_level": 0.48,
      "schlage_metadata": {
        "device_id": "device-3",
        "device_name": "GARAGE"
      },
      "name": "Front Door"
    },
    "location": null,
    "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
    "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
    "created_at": "2022-08-24T11:14:37.116Z",
    "errors": []
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
    "message": "Either 'device_id' or 'name' is required",
    "validation_errors": {
      "_errors": [
        "Either 'device_id' or 'name' is required"
      ]
    },
    "request_id": "802ee381-b068-4b9d-a722-bae968de9174"
  },
  "ok": false
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```javascript
{
  "error": {
    "type": "device_not_found",
    "message": "Device not found",
    "data": {
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97"
    },
    "request_id": "8e730f9a-5b56-41aa-ad78-86a1a7b82e0a"
  },
  "ok": false
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()
device_id = "123e4567-e89b-12d3-a456-426614174000"
device = seam.locks.get(device_id)
# device = seam.devices.get(None, 'GARAGE')

print(device)
# Device(
#   device_id='a83690b2-2b70-409a-9a94-426699b84c97', 
#   device_type='schlage_lock', 
#   location=None, 
#   properties={
#     'locked': False, 
#     'online': True, 
#     'battery_level': 0.48, 
#     'schlage_metadata': {
#       'device_id': 'device-3', 
#       'device_name': 'GARAGE'
#       }, 
#     'name': 'GARAGE'
#     }, 
#   capabilities_supported=[], 
#   errors=[]
#   )


```
{% endtab %}

{% tab title="Javascript" %}
```javascript
import { Seam } from "seam"

const seam = Seam()
const deviceId = "123e4567-e89b-12d3-a456-426614174000"
const device = await seam.locks.get({device_id:deviceId})
// const device = await seam.devices.get({name: 'GARAGE'})

console.log(device)

/*
{
  device_id: 'a83690b2-2b70-409a-9a94-426699b84c97',
  device_type: 'schlage_lock',
  capabilities_supported: [],
  properties: {
    locked: false,
    online: true,
    battery_level: 0.48,
    schlage_metadata: { device_id: 'device-3', device_name: 'GARAGE' },
    name: 'GARAGE'
  },
  location: null,
  connected_account_id: 'b0be0837-29c2-4cb1-8560-42dfd07fb877',
  workspace_id: 'f97073eb-c003-467a-965b-e6dba3a0131d',
  created_at: '2022-08-24T11:14:37.116Z',
  errors: []
}
*/
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new(api_key: "MY_API_KEY")
device_id = "123e4567-e89b-12d3-a456-426614174000"

device = seam.locks.get(device_id)

puts device
# <Seam::Device:0x00764f8                                             
#   device_id="e002825a-27ee-4d74-9be3-45564b14c931"                  
#   device_type="smartthings_lock"                                    
#   properties={
#     "locked"=>true,
#     "online"=>true,
#     "battery_level"=>1,
#     "smartthings_metadata"=>{
#       "device_id"=>"83b32603-e36a-416b-a06e-78215223df98",
#       "device_name"=>"Yale Door Lock"}, 
#     "name"=>"Yale Door Lock"}>
```
{% endtab %}
{% endtabs %}

### Parameters

| `device_id` | type: string | <p><br>Device ID</p> |
| ----------- | ------------ | -------------------- |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "lock": {
    "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
    "device_type": "schlage_lock",
    "capabilities_supported": [],
    "properties": {
      "locked": false,
      "online": true,
      "battery_level": 0.48,
      "schlage_metadata": {
        "device_id": "device-3",
        "device_name": "GARAGE"
      },
      "name": "Front Door"
    },
    "location": null,
    "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
    "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
    "created_at": "2022-08-24T11:14:37.116Z",
    "errors": []
  },
  "device": {
    "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
    "device_type": "schlage_lock",
    "capabilities_supported": [],
    "properties": {
      "locked": false,
      "online": true,
      "battery_level": 0.48,
      "schlage_metadata": {
        "device_id": "device-3",
        "device_name": "GARAGE"
      },
      "name": "Front Door"
    },
    "location": null,
    "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
    "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
    "created_at": "2022-08-24T11:14:37.116Z",
    "errors": []
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
