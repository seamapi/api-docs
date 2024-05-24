# Get started with SmartThings Hubs + Smart Locks

## Overview

Seam provides a universal API to connect and control many brands of smart locks. This guide provides a rapid introduction to connecting and controlling your [SmartThings Hub](https://www.seam.co/manufacturers/smartthings) and smart lock using the Seam API. SmartThings Hub is connected to your local network using either Wi-Fi or Ethernet. The smart lock is paired to SmartThings via Zigbee or Z-Wave. These locks can then be remotely locked, unlocked, and have access codes programmed to allow keyless entry.

To learn more about other smart lock brands supported by Seam such as August, Yale, and Salto, head over to our [integration page](https://www.seam.co/supported-devices-and-systems).

## 1 — Install Seam SDK

Seam provides client libraries for many languages, such as JavaScript, Python, Ruby, PHP, and others, as well as a Postman collection and [OpenAPI](https://connect.getseam.com/openapi.json) spec.

* JavaScript / TypeScript ([npm](https://www.npmjs.com/package/seam), [GitHub](https://github.com/seamapi/javascript))
* Python ([pip](https://pypi.org/project/seamapi/), [GitHub](https://github.com/seamapi/python))
* Ruby Gem ([rubygem](https://rubygems.org/gems/seamapi), [GitHub](https://github.com/seamapi/ruby))
* PHP ([packagist](https://packagist.org/packages/seamapi/seam), [GitHub](https://github.com/seamapi/php))
* Java ([GitHub](https://github.com/seamapi/java))
* C# ([nuget](https://www.nuget.org/packages/Seam), [GitHub](https://github.com/seamapi/csharp))
* Go ([GitHub](https://github.com/seamapi/go))

{% tabs %}
{% tab title="JavaScript" %}
```bash
npm i seam
```
{% endtab %}

{% tab title="Python" %}
```bash
pip install seamapi
# For some development environments, use pip3 in this command instead of pip.
```
{% endtab %}

{% tab title="Ruby" %}
```bash
bundle add seamapi
```
{% endtab %}

{% tab title="PHP" %}
```bash
composer require seamapi/seam
```
{% endtab %}

{% tab title="Java" %}
**Gradle:**

```gradle
// build.gradle
dependencies {
    implementation 'io.github.seamapi:java:0.x.x'
}
```

**Maven:**

```xml
<!-- pom.xml -->
<dependency>
    <groupId>io.github.seamapi</groupId>
    <artifactId>java</artifactId>
    <version>0.x.x</version>
</dependency>
```
{% endtab %}

{% tab title="C#" %}
Install using [nuget](https://www.nuget.org/packages/Seam).
{% endtab %}

{% tab title="Go" %}
```bash
go get github.com/seamapi/go
```
{% endtab %}
{% endtabs %}

Once installed, [sign-up for Seam](https://console.seam.co/) to get your API key, and export it as an environment variable:

```
$ export SEAM_API_KEY=seam_test2ZTo_0mEYQW2TvNDCxG5Atpj85Ffw
```

{% hint style="info" %}
This guide uses a sandbox workspace. You can only connect virtual devices in a sandbox workspace. If you need to connect a real device, use a non-sandbox workspace and API key.
{% endhint %}

## 2 — Link Your SmartThings Account with Seam

To pair a SmartThings Hub and smart lock with our API, you must sign in to a SmartThings account. To do so, create a Seam Connect Webview.

{% tabs %}
{% tab title="Python" %}
```python
from seamapi import Seam

seam = Seam()

webview = seam.connect_webviews.create(accepted_providers=["smartthings"])

assert webview.login_successful is False

# Send the webview URL to your user
print(webview.url)
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
import { Seam } from "seam"

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

Now, send the Connect Webview URL to the user. When the user signs in, you see a "completed" status on the Connect Webview or `login_successful` set to `true.`

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

You can now find all the devices that are associated with the connected account. From the returned payload, see whether the door lock is locked or unlocked.

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

## Lock a door

<mark style="color:green;">`POST`</mark> `https://connect.getseam.com/locks/lock_door`

#### Headers

| Name                                            | Type   | Description        |
| ----------------------------------------------- | ------ | ------------------ |
| Authorization<mark style="color:red;">\*</mark> | String | Bearer \<API\_KEY> |

#### Request Body

| Name                                         | Type   | Description                   |
| -------------------------------------------- | ------ | ----------------------------- |
| device\_id<mark style="color:red;">\*</mark> | String | ID of the Device to be locked |

{% tabs %}
{% tab title="200: OK Returns a pending action attempt" %}
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
{% endtab %}
{% endtabs %}

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

## Unlock a door

<mark style="color:green;">`POST`</mark> `https://connect.getseam.com/locks/unlock_door`

#### Headers

| Name                                            | Type   | Description        |
| ----------------------------------------------- | ------ | ------------------ |
| Authorization<mark style="color:red;">\*</mark> | String | Bearer \<API\_KEY> |

#### Request Body

| Name                                         | Type   | Description                     |
| -------------------------------------------- | ------ | ------------------------------- |
| device\_id<mark style="color:red;">\*</mark> | String | ID of the Device to be unlocked |

{% tabs %}
{% tab title="200: OK Returns a pending action attempt" %}
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
{% endtab %}
{% endtabs %}

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

<mark style="color:green;">`POST`</mark> `https://connect.getseam.com/access_codes/create`

#### Headers

| Name                                            | Type   | Description        |
| ----------------------------------------------- | ------ | ------------------ |
| Authorization<mark style="color:red;">\*</mark> | String | Bearer \<API\_KEY> |

#### Request Body

| Name                                         | Type   | Description                                                                                              |
| -------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| device\_id<mark style="color:red;">\*</mark> | String | ID of the Device to be programmed                                                                        |
| code                                         | String | digits to set on the device                                                                              |
| name<mark style="color:red;">\*</mark>       | String | Name of Access Code                                                                                      |
| starts\_at                                   | String | iso8601 timestamp for desired start time of code. null implies that the code will be immediately active. |
| ends\_at                                     | String | iso8601 timestamp for desired end time of code. null implies that the code will be permanent.            |

{% tabs %}
{% tab title="200: OK Returns an Action Attempt" %}
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
{% endtab %}
{% endtabs %}

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

<mark style="color:red;">`DELETE`</mark> `https://connect.getseam.com/access_codes/remove`

#### Headers

| Name                                           | Type   | Description        |
| ---------------------------------------------- | ------ | ------------------ |
| Authorizaion<mark style="color:red;">\*</mark> | String | Bearer \<API\_KEY> |

#### Request Body

| Name                                               | Type   | Description |
| -------------------------------------------------- | ------ | ----------- |
| access\_code\_id<mark style="color:red;">\*</mark> | String |             |

{% tabs %}
{% tab title="200: OK Returns an Action Attempt" %}
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
{% endtab %}
{% endtabs %}

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

<mark style="color:blue;">`GET`</mark> `https://connect.getseam.com/access_codes`

#### Query Parameters

| Name       | Type   | Description      |
| ---------- | ------ | ---------------- |
| device     | String | Filter by Device |
| device\_id | String | Filter by Device |

#### Headers

| Name                                           | Type   | Description        |
| ---------------------------------------------- | ------ | ------------------ |
| Authorizaion<mark style="color:red;">\*</mark> | String | Bearer \<API\_KEY> |

{% tabs %}
{% tab title="200: OK Returns a list of Access Codes" %}
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
{% endtab %}
{% endtabs %}

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
