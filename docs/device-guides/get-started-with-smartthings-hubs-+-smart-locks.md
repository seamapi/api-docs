# Get started with SmartThings Hubs + Smart Locks

## SmartThings Hub + Smart Lock

SmartThings Hub is connected to your local network using either Wifi or ethernet. The Smart Lock is paired to SmartThings via Zigbee or Z-Wave. These locks can then be remotely locked, unlocked, and have access codes programmed to allow keyless entry.

## Overview

To pair a SmartThings Hub and smart lock with our API, we'll need to sign into a SmartThings account. We can do this by creating a Seam Webview.



Make sure to install the relevant Seam package for your language...

* [Python seamapi pip module](https://github.com/hello-seam/seamapi-python) &#x20;
* [Javascript/Typescript NPM Module](https://github.com/hello-seam/seamapi-javascript)
* [Ruby seamapi gem](https://rubygems.org/gems/seamapi)

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

webview = seam.connect_webviews.create(accepted_providers=["smartthings"])

assert webview.login_successful is False

# Send the webview URL to your user
print(webview.url)
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
import Seam from "seam"

const seam = Seam()

const webview = await seam.connect_webviews.create({
  accepted_providers: ["smartthings"]
})

console.log(webview)
/*
{
  "connect_webview_id": "811b80e7-7c87-4ce1-a938-2f6936851aa9",
  "url": "https://connect.getseam.com/v1/connect_webviews/view?connect_webview_id=811b80e7-7c87-4ce1-a938-2f6936851aa9&auth_token=GXtMoAaperbuNhSCByyQMroT9HMRquXK6",
  "device_selection_mode": "none",
  "accepted_providers": [
      "smartthings"
  ],
  "created_at": "2022-01-03T21:11:27.002Z",
  "login_successful": false,
  "status": "pending"
}
*/
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new(api_key: "MY_API_KEY")

webview = seam.connect_webviews.create(
  accepted_providers: ["smartthings"]
)

puts webview
# <Seam::ConnectWebview:0x006a950
#   url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=123e4567-e89b-12d3-a456-426614174000&auth_token=q123DASDASKd23DADdad29"
#   status="pending"         
#   created_at="2022-07-06T23:20:09.785729+00:00"
#   workspace_id="123e4567-e89b-12d3-a456-426614174000"
#   accepted_devices=[]
#   login_successful=false
#   accepted_providers=["smartthings"]
#   any_device_allowed=nil
#   connect_webview_id="123e4567-e89b-12d3-a456-426614174000"
#   custom_redirect_url=nil
#   any_provider_allowed=false
#   device_selection_mode="none">
```
{% endtab %}
{% endtabs %}

We should now send the **Connect Webview URL** to the user, when the user signs in, we'll see a "completed" status on the webview or `login_successful` set to `true.`

{% tabs %}
{% tab title="Python" %}
```python
updated_webview = seam.connect_webviews.get(webview.connect_webview_id)

assert updated_webview.login_successful
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
const updated_webview = await seam.connect_webviews.get(
    webview.connect_webview_id
)

console.log(updated_webview.login_successful)
// true
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
updated_webview = seam.connect_webviews.get(
    webview.connect_webview_id
)

puts updated_webview.login_successful
# true
```
{% endtab %}
{% endtabs %}

We can now find all the devices that are associated with the connected account that was signed into. From the returned payload, see whether the door lock is locked or unlocked.



{% tabs %}
{% tab title="Python" %}
```python
from pprint import pprint

all_devices = seam.devices.list()

some_device = all_devices[0]

assert device.properties["online"] is True
assert device.properties["locked"] is True

pprint(device)
# Device(device_id='a8669e4c-76e3-4db6-a827-11a65eb360ba',
#       device_type='smartthings_lock',
#       location=None,
#       properties={'smartthings_metadata': {...}},
#                   'locked': True,
#                   'online': True})
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
const all_locks = await seam.locks.list()

const some_lock = all_locks[0]

console.log(some_lock)
/*
{
   device_id: 'a8669e4c-76e3-4db6-a827-11a65eb360ba',
   device_type: 'smartthings_lock',
   location: null,
   properties: { smartthings_metadata: {...} },
   locked: true,
   online: true
}
*/
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
all_locks = seam.locks.list()

some_lock = all_locks.first

puts some_lock
# <Seam::Device:0x001e870                                             
#   device_id="123e4567-e89b-12d3-a456-426614174000"                  
#   device_type="smartthings_lock"                                    
#   properties={
#     "locked"=>true,
#     "online"=>true,
#     "battery_level"=>1,
#     "smartthings_metadata"=>{
#       "device_id"=>"123e4567-e89b-12d3-a456-426614174000",
#       "device_name"=>"Yale Door Lock"},
#     "name"=>"Yale Door Lock"}>
```
{% endtab %}
{% endtabs %}



## Locking a Door

{% swagger method="post" path="/locks/lock_door" baseUrl="https://connect.getseam.com" summary="Lock a door" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="device_id" required="true" %}
ID of the Device to be locked
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Returns a pending action attempt" %}
```javascript
{
    "action_attempt": {
        "action_attempt_id": "8f17e75c-dd1f-42c6-8c5c-35fbfa3e6809",
        "status": "pending",
        "action_type": "LOCK_DOOR"
    },
    "ok": true
}
```
{% endswagger-response %}
{% endswagger %}

{% tabs %}
{% tab title="Python" %}
```python
seam.locks.lock_door(some_device)

updated_device = seam.devices.get(some_device.device_id)

assert updated_device.properties["locked"] is True
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.locks.lock_door({ device: some_device })

const updated_device = await seam.devices.get(some_device)

console.log(updated_device.properties.locked)
// true
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
action_attempt = seam.locks.lock_door(some_lock.device_id)
action_attempt.wait_until_finished

updated_lock = seam.devices.get(some_lock.device_id)

puts updated_lock.properties["locked"]
# true
```
{% endtab %}
{% endtabs %}



## Unlocking a Door

{% swagger method="post" path="/locks/unlock_door" baseUrl="https://connect.getseam.com" summary="Unlock a door" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="device_id" required="true" %}
ID of the Device to be unlocked
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Returns a pending action attempt" %}
```javascript
{
    "action_attempt": {
        "action_attempt_id": "8f17e75c-dd1f-42c6-8c5c-35fbfa3e6809",
        "status": "pending",
        "action_type": "UNLOCK_DOOR"
    },
    "ok": true
}
```
{% endswagger-response %}
{% endswagger %}

{% tabs %}
{% tab title="Python" %}
```python
seam.locks.unlock_door(some_device)

updated_device = seam.devices.get(some_device.device_id)

assert updated_device.properties["locked"] is False
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.locks.unlock_door({ lock: some_lock })

const updated_lock = await seam.locks.get(some_lock.device_id)

console.log(updated_lock.properties.locked)
// false
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
action_attempt = seam.locks.unlock_door(some_lock.device_id)
action_attempt.wait_until_finished

updated_lock = seam.devices.get(some_lock.device_id)

puts updated_lock.properties["locked"]
# false
```
{% endtab %}
{% endtabs %}



## Create an Access Code

{% swagger method="post" path="/access_codes/create" baseUrl="https://connect.getseam.com" summary="Create an Access Code" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="device_id" required="true" %}
ID of the Device to be programmed
{% endswagger-parameter %}

{% swagger-parameter in="body" name="code" %}
digits to set on the device
{% endswagger-parameter %}

{% swagger-parameter in="body" name="name" required="true" %}
Name of Access Code
{% endswagger-parameter %}

{% swagger-parameter in="body" name="starts_at" %}
iso8601 timestamp for desired start time of code. null implies that the code will be immediately active.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="ends_at" %}
iso8601 timestamp for desired end time of code. null implies that the code will be permanent.
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Returns an Action Attempt" %}
```javascript
{
    "action_attempt": {
         "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
         "action_type": "CREATE_ACCESS_CODE",
         "status": "pending",
         "result": {}
    },
    "ok": true
}
```
{% endswagger-response %}
{% endswagger %}

{% hint style="info" %}
For Scheduled Access Codes, both `starts_at` and `ends_at` are required.\
For Ongoing Access Codes, don't set `starts_at` or `ends_at`.
{% endhint %}

{% tabs %}
{% tab title="Python" %}
```python
access_code = seam.access_codes.create(
    device=some_device,
    name="new code",
    code="876543",
    starts_at="2022-01-13T21:17:56.138Z",
    ends_at="2022-01-13T21:17:58.138Z"
)

pprint(access_code)
# AccessCode(
#       access_code_id='a8669e4c-76e3-4db6-a827-11a65eb360ba',
#       type='ongoing',
#       name='new code',
#       code='876543',
#       starts_at='2022-01-13T21:17:56.138Z'
#       ends_at='2022-01-13T21:17:58.138Z',
#       location=None,
# )
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
const access_code = await seam.access_codes.create({
    lock: some_lock, 
    code: "876543", 
})

console.log(access_code)
/*
{
  "access_code_id": "a8669e4c-76e3-4db6-a827-11a65eb360ba",
  "code": "876543",
  "type": "ongoing",
  "starts_at": "2022-01-13T21:17:56.138Z",
  "ends_at": null
}
*/
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
access_code = seam.access_codes.create(
    device_id: some_lock.device_id,
    name: "new code",
    code: "876543",
    starts_at: "2022-01-13T21:17:56.138Z",
    ends_at: "2022-01-13T21:17:58.138Z"
)

puts access_code
# <Seam::AccessCode:0x002cf60 
#   code="876543"             
#   name="new code"           
#   type="time_bound"         
#   ends_at="2022-01-13T21:18:00.000Z"
#   starts_at="2022-01-13T21:18:00.000Z"
#   created_at="2022-07-06T22:57:56.650Z"
#   access_code_id="a8669e4c-76e3-4db6-a827-11a65eb360ba">
```
{% endtab %}
{% endtabs %}



## Delete an Access Code

{% swagger method="delete" path="/access_codes/remove" baseUrl="https://connect.getseam.com" summary="Remove an Access Code" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="access_code_id" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorizaion" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Returns an Action Attempt" %}
```javascript
{
    "action_attempt": {
         "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
         "action_type": "DELETE_ACCESS_CODE",
         "status": "pending",
         "result": {}
    },
    "ok": true
}
```
{% endswagger-response %}
{% endswagger %}

{% tabs %}
{% tab title="Python" %}
```python
attempt = seam.access_codes.delete(access_code=access_code)

pprint(attempt)
# ActionAttempt(
#   action_attempt_id='af0155aa-51fe-4e63-9acb-2fbd33675cac',
#   action_type='DELETE_ACCESS_CODE',
#   status='success',
#   result={},
#   error=None
# )
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.access_codes.remove({
    code: access_code 
})
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
attempt = seam.access_codes.delete(access_code.access_code_id)

puts attempt
# <Seam::ActionAttempt:0x0000000107026c98 
#  status="success"            
#  action_type="DELETE_ACCESS_CODE",
#  action_attempt_id="af0155aa-51fe-4e63-9acb-2fbd33675cac",
#  result={}>
```
{% endtab %}
{% endtabs %}



## List Access Codes

{% swagger method="get" path="/access_codes" baseUrl="https://connect.getseam.com" summary="List Access Codes" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorizaion" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-parameter in="query" name="device" %}
Filter by Device
{% endswagger-parameter %}

{% swagger-parameter in="query" name="device_id" %}
Filter by Device
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Returns a list of Access Codes" %}
```javascript
{
    "access_codes": [
        {
            "access_code_id": "123e4567-e89b-12d3-a456-426614174000",
            "code": "876543",
            "name": "ongoing code",
            "type": "ongoing",
            "status": "setting",
            "created_at": "2022-02-11T22:53:40.988Z"
        },
        {
	    "access_code_id": "123e4568-e89b-12d3-a456-426614174000",
	    "code": "141498",
	    "name": "scheduled code",
	    "type": "time_bound",
	    "status": "set",
	    "ends_at": "2022-02-11T22:55:00.000Z",
	    "starts_at": "2022-02-11T22:54:00.000Z",
            "created_at": "2022-02-11T22:53:40.988Z"
	}
    ]
}
```
{% endswagger-response %}
{% endswagger %}

{% tabs %}
{% tab title="Python" %}
```python
# you can use a device or a device_id as the "device" parameter
seam.access_codes.list(device=some_device)
# [
#   AccessCode(
#     access_code_id='af5272b1-2a49-4eb5-9388-2447fc7b5bd1',
#     type='ongoing',
#     code='123459',
#     starts_at=None,
#     ends_at=None,
#     name='ongoing 1'
#   ),
#   AccessCode(
#     access_code_id='57f8216a-ebc4-46e7-8f89-9c9448f70733',
#     type='ongoing',
#     code='189644',
#     starts_at=None,
#     ends_at=None,
#     name='ongoing 2'
#   )
# ]
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
// you can use a device or a device_id as the "device" parameter
const access_codes = await seam.access_codes.list({
    device: {
        "device_id": "af5272b1-2a49-4eb5-9388-2447fc7b5bd1"
    }
})

console.log(access_codes)
/*
[
  {
    "access_code_id": "a8669e4c-76e3-4db6-a827-11a65eb360ba",
    "code": "876543",
    "type": "ongoing",
    "starts_at": "2022-01-13T21:17:56.138Z",
    "ends_at": null
  }
]
*/
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
access_codes = seam.access_codes.list(some_lock.device_id)

puts access_codes
# [<Seam::AccessCode:0x002cf60 
#   code="876543"             
#   name="new code"           
#   type="time_bound"         
#   ends_at="2022-01-13T21:18:00.000Z"
#   starts_at="2022-01-13T21:18:00.000Z"
#   created_at="2022-07-06T22:57:56.650Z"
#   access_code_id="09c1ba5a-623a-4de4-9826-91377e468c14">]
```
{% endtab %}
{% endtabs %}

