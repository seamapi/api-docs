---
description: Learn how to connect and control your Kwikset Halo lock with the Seam API.
---

# Get started with Kwikset Wi-Fi Locks

<figure><img src="../.gitbook/assets/guides/kwikset-getting-started-guide-cover.jpg" alt=""><figcaption><p>Kwikset Halo Smart Locks</p></figcaption></figure>

## Overview

Seam provides a universal API to connect and control many brands of smart locks. This guide provides a rapid introduction to connecting and controlling your [Kwikset Halo](https://www.seam.co/manufacturers/kwikset) lock using the Seam API. To learn more about other smart lock brands supported by Seam such as Yale, Schlage, and August, head over to our [integration page](https://www.seam.co/supported-devices-and-systems).

{% hint style="warning" %}
Enabling MFA (Multi-Factor Authentication) on your Kwikset app can block our login flow from successfully authorizing with your account.

Please ensure your Kwikset MFA settings are disabled before attempting to connect your account with Seam. After connecting your account, you can re-enable your MFA settings.

To disable MFA, head to **Account Settings** in your Kwikset app:

<img src="../.gitbook/assets/kwikset-MFA-settings.png" alt="Kwikset MFA Settings" data-size="original">
{% endhint %}

## 1 — Install Seam SDK

Seam provides client libraries for many languages, such as JavaScript, Python, Ruby, PHP, and others, as well as a Postman collection and [OpenAPI](https://connect.getseam.com/openapi.json) spec.

* JavaScript / TypeScript ([npm](https://www.npmjs.com/package/seam), [GitHub](https://github.com/seamapi/javascript))
* Python ([pip](https://pypi.org/project/seam/), [GitHub](https://github.com/seamapi/python))
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
pip install seam
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
This guide uses a Sandbox Workspace. Only virtual devices can be connected. If you need to connect a real Kwikset Halo Lock, use a non-sandbox workspace and API key.
{% endhint %}

## 2 — Link Kwikset Account with Seam

To control your Kwikset Halo lock via the Seam API, you must first authorize your Seam workspace against your Kwikset account. To do so, Seam provides[ Connect Webviews](../core-concepts/connect-webviews/): pre-built UX flows that walk you through authorizing your application to control your Kwikset Halo lock.

#### Request a Connect Webview

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

webview = seam.connect_webviews.create(accepted_providers=["kwikset"])

assert webview.login_successful is False

# Send the webview URL to your user
print(webview.url)
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
import { Seam } from 'seam'

const seam = new Seam()

const connectWebview = await seam.connectWebviews.create({
  accepted_providers: ['kwikset'],
})

console.log(connectWebview.login_successful) // false

// Send the webview URL to your user
console.log(connectWebview.url)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new(api_key: "MY_API_KEY")

webview = seam.connect_webviews.create(
  accepted_providers: ["kwikset"]
)

puts webview.login_successful # false

# Send the webview URL to your user 
puts webview.url
```
{% endtab %}
{% endtabs %}

#### Authorize Your Workspace

Navigate to the URL returned by the Webview object. Since you are using a sandbox workspace, complete the login flow by entering the Kwikset [sandbox test accounts ](https://docs.seam.co/latest/device-guides/sandbox-and-sample-data)credentials below:

* **email:** jane@example.com
* **password:** 1234

{% hint style="warning" %}
Enabling MFA (Multi-Factor Authentication) on your Kwikset app can block our login flow from successfully authorizing with your account.

Please ensure your Kwikset MFA settings are disabled before attempting to connect your account with Seam. After connecting your account, you can re-enable your MFA settings.

To disable MFA, head to **Account Settings** in your Kwikset app:

<img src="../.gitbook/assets/kwikset-MFA-settings.png" alt="Kwikset MFA Settings" data-size="original">
{% endhint %}

<figure><img src="../.gitbook/assets/guides/kwikset-connect-flow-screens.jpg" alt=""><figcaption><p>Seam Connect Webview flow to connect Kwikset account with Seam</p></figcaption></figure>

Confirm the Connect Webview was successful by querying its status:

{% tabs %}
{% tab title="Python" %}
```python
updated_webview = seam.connect_webviews.get(webview.connect_webview_id)

assert updated_webview.login_successful # true
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
const updatedWebview = await seam.connectWebviews.get(
  connectWebview.connect_webview_id,
)

console.log(updatedWebview.login_successful) // true
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
updated_webview = seam.connect_webviews.get(webview.connect_webview_id)

puts updated_webview.login_successful # true
```
{% endtab %}
{% endtabs %}

## 3 — Retrieve Kwikset Halo Lock Devices

After a Kwikset account is linked with Seam, you can retrieve devices for this Kwikset account. The Seam API exposes most of the device's properties such as battery level or door lock status.

{% tabs %}
{% tab title="Python" %}
````python
all_locks = seam.locks.list()

some_lock = all_locks[0]

assert some_lock.properties["online"] is True
assert some_lock.properties["locked"] is True

print(some_lock)
```python
# Device(
#     device_id='10891c43-29e0-4b93-b071-34749025a123',
#     device_type='kwikset_lock',
#     location=None,
#     properties={
#         'locked': True,
#         'online': True,
#         'manufacturer': 'kwikset',
#         'battery_level': 0.65,
#         'kwikset_metadata': {
#             'device_id': '10d221f8e8445dbe07',
#             'device_name': 'Kwikset Halo Touch',
#             'model_number': 'HALO-01'
#         },
#         'name': 'Kwikset Halo Touch',
#         'battery': {
#             'level': 0.65,
#             'status': 'good'
#         },
#         'image_url': 'https://connect.getseam.com/assets/images/devices/kwikset_halo_touchscreen-wi-fi-enabled-smart-lock_polished-chrome_front.png',
#         'image_alt_text': 'Kwikset Halo Touchscreen Wifi Enabled Smart Lock, Polished Chrome, Front'
#     },
#     capabilities_supported=['lock']
# )
````
{% endtab %}

{% tab title="Javascript" %}
```javascript
const allLocks = await seam.locks.list()

const someLock = allLocks[0]

console.log(someLock.properties.online) // true
console.log(someLock.properties.locked) // true

console.log(someLock)
/*
{
  device_id: '10891c43-29e0-4b93-b071-34749025a123',
  device_type: 'kwikset_lock',
  capabilities_supported: [
    'lock'
  ],
  properties: {
    locked: true,
    online: true,
    manufacturer: 'kwikset',
    battery_level: 0.65,
    kwikset_metadata: {
      device_id: '10d221f8e8445dbe07',
      device_name: 'Kwikset Halo Touch',
      model_number: 'HALO-01'
    },
    name: 'Kwikset Halo Touch',
    battery: {
      level: 0.65,
      status: 'good'
    },
    image_url: 'https://connect.getseam.com/assets/images/devices/kwikset_halo_touchscreen-wi-fi-enabled-smart-lock_polished-chrome_front.png',
    image_alt_text: 'Kwikset Halo Touchscreen Wifi Enabled Smart Lock, Polished Chrome, Front'
  },
  location: null,
}
*/
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
some_lock = seam.locks.list.first

puts some_lock.properties['online'] # true
puts some_lock.properties['locked'] # true

puts some_lock.inspect
# <Seam::Device:0x00438
#   device_id="10891c43-29e0-4b93-b071-34749025a123"
#   device_type="kwikset_lock"
#   properties={
#     "locked"=>true,
#     "online"=>true,
#     "manufacturer"=>"kwikset",
#     "battery_level"=>0.65,
#     "kwikset_metadata"=>{"device_id"=>"10d221f8e8445dbe07", "device_name"=>"Kwikset Halo Touch", "model_number"=>"HALO-01"},
#     "name"=>"Kwikset Halo Touch",
#     "battery"=>{"level"=>0.65, "status"=>"good"},
#     "image_url"=>"https://connect.getseam.com/assets/images/devices/kwikset_halo_touchscreen-wi-fi-enabled-smart-lock_polished-chrome_front.png",
#     "image_alt_text"=>"Kwikset Halo Touchscreen Wifi Enabled Smart Lock, Polished Chrome, Front"
#   }
>

```
{% endtab %}
{% endtabs %}

### 4 — Locking & Unlocking a Door

Next, you can perform the basic action of locking and unlocking the door.

{% swagger src="../.gitbook/assets/openapi (1).json" path="/locks/lock_door" method="post" %}
[openapi (1).json](<../.gitbook/assets/openapi (1).json>)
{% endswagger %}

## Unlock a door

<mark style="color:green;">`POST`</mark> `https://connect.getseam.com/locks/unlock_door`

#### Request Body

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| device\_id | String |             |

{% tabs %}
{% tab title="Python" %}
```python
# lock the door
seam.locks.lock_door(some_lock)
updated_lock = seam.locks.get(some_lock.device_id)
assert updated_lock.properties["locked"] is True

# Now unlock the door
seam.locks.unlock_door(some_lock)
updated_lock = seam.locks.get(some_lock.device_id)
assert updated_lock.properties["locked"] is False
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
// lock the door
await seam.locks.lockDoor(someLock.device_id)
const updatedLock = await seam.locks.get(someLock.device_id)
console.log(updatedLock.properties.locked) // true

// unlock the door
await seam.locks.unlockDoor(someLock.device_id)
updatedLock = await seam.locks.get(someLock.device_id)
console.log(updatedLock.properties.locked) // false
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# lock the door
seam.locks.lock_door(some_lock)
updated_lock = seam.locks.get(some_lock.device_id)
puts updated_lock.properties['locked'] # true

# unlock the door
seam.locks.unlock_door(some_lock)
updated_lock = seam.locks.get(some_lock.device_id)
puts updated_lock.properties['locked'] # false
```
{% endtab %}
{% endtabs %}

###

### 5 — Setting Access Code on Kwikset Lock

{% hint style="info" %}
In the Kwikset app, you cannot see access codes that were set from an external source (such as Seam) unless you are connected via bluetooth to the lock.

If you're connected through Wi-Fi and not bluetooth, the Kwikset app will _only_ show the access codes you have set from the app itself and not the codes set from Seam.
{% endhint %}

Some Kwikset locks have a keypad paired to them to program access codes. These codes can then be entered to unlock a Kwikset lock.

The Seam API makes it easy to program both `ongoing` codes and `timebound` codes on a Kwikset lock. You can find out more about Kwikset lock access code in our [core concept section on access codes.](../products/smart-locks/access-codes/)

**Access Code Constraints** Kwikset locks place the following constraints on access code attributes:

* Access code name has to be between 2-14 characters
  * You can create a Seam access code for Kwikset with a name longer than 14 characters. The full name will be stored in Seam but on the Kwikset device, the name will be truncated to 14 characters
* Pin code length has to be between 4-8 digits
* A `timebound` code requires both a `starts_at` and `ends_at` time
* A `timebound` code's `starts_at` time has to be greater than the current time (for best results, set `starts_at` at least 15 minutes ahead of current time)

{% tabs %}
{% tab title="Python" %}
```python
# create an ongoing code
seam.access_codes.create(
    device=some_lock, code="123456", name="My Access Code"
)

# create a timebound code
seam.access_codes.create(
    device=some_lock,
    code="888888",
    name="Scheduled Code",
    starts_at="2028-08-12T19:23:42+0000",
    ends_at="2028-08-13T19:23:42+0000"
)

# you can use a device or a device_id as the "device" parameter
seam.access_codes.list(device=some_lock)
# [
#   AccessCode(
#     access_code_id='af5272b1-2a49-4eb5-9388-2447fc7b5bd1',
#     type='ongoing',
#     code='123459'
#   ),
#   AccessCode(
#     access_code_id='8c2db4da-b137-4c08-a2c3-d611e6ff91b3',
#     type='timebound',
#     code='888888',
#     starts_at='2028-08-12T19:24:00.000Z',
#     ends_at='2028-08-13T19:24:00.000Z',
#   )
# ]

```
{% endtab %}

{% tab title="Javascript" %}
```javascript
// create an ongoing code
await seam.accessCodes.create({
  device_id: someLock.device_id,
  code: '123456',
  name: 'My Access Code',
})

// create a timebound code
await seam.accessCodes.create({
  device_id: someLock.device_id,
  code: '888888',
  name: 'Scheduled Code',
  starts_at: '2028-11-12T19:23:42+0000',
  ends_at: '2028-11-13T19:23:42+0000',
})

// use a device_id as the "device_id" parameter
await seam.accessCodes.list({
  device_id: someLock.device_id,
})

/*
[
  {
    code: '1988',
    type: 'ongoing',
    status: 'setting',
    created_at: '2022-08-26T12:50:17.858Z',
    access_code_id: '26d6138c-6524-4f3c-ac96-43cc3bea0a8d'
  },
  {
    type: 'timebound',
    code: '888888',
    starts_at: '2028-08-12T19:24:00.000Z', 
    ends_at: '2028-08-13T19:24:00.000Z',
    access_code_id: '8c2db4da-b137-4c08-a2c3-d611e6ff91b3',
  }
]
*/
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# create an ongoing code
seam.access_codes.create(
  device_id: some_lock.device_id, code: '123456', name: 'My Access Code'
)

# create a timebound code
seam.access_codes.create(
  device_id: some_lock.device_id,
  code: '888888',
  name: 'Scheduled Code',
  starts_at: '2028-08-12T19:23:42+0000',
  ends_at: '2028-08-13T19:23:42+0000'
)

# you can use a device or a device_id as the "device" parameter
seam.access_codes.list(some_lock)

# [<Seam::AccessCode:0x00730
#   code="888888"
#   name="Scheduled Code"
#   type="time_bound"
#   errors=[]
#   warnings=[]
#   access_code_id="ce2c298c-364f-4b13-aa12-712f3976288e"
#   ends_at=2028-08-13 19:24:00 UTC
#   starts_at=2028-08-12 19:24:00 UTC>, <Seam::AccessCode:0x00758
#   code="123456"
#   name="My Access Code"
#   type="ongoing"
#   errors=[]
#   warnings=[]
#   access_code_id="75f49550-fc9b-481a-a158-5bc53ac9bb34">, <Seam::AccessCode:0x00780
#   code="086355"
#   name="some-code2"
#   type="ongoing"
#   errors=[]
#   warnings=[]
#   access_code_id="5243e5f3-528a-4378-ba3c-21447bf844a8">, <Seam::AccessCode:0x007a8
#   code="376525"
#   name="some-code"
#   type="ongoing"
#   errors=[]
#   warnings=[]
#   access_code_id="91a08a3d-a0bb-4ff0-bfb4-ced164353988">]
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$some_lock = $seam->locks->list()[0];
$seam->access_codes->create(
  device_id: $some_lock->device_id, code: '123456', name: 'My Access Code'
);

$seam->access_codes->create(
  device_id: $some_lock->device_id,
  name: 'Scheduled Code',
  code: '888888',
  starts_at: '2028-08-12T19:23:42+0000',
  ends_at: '2028-08-13T19:23:42+0000'
);

```
{% endtab %}
{% endtabs %}

## Next Steps

Now that you've completed this guide, you can try to connect a real Kwikset Halo device. To do so, make sure to switch to a non-sandbox workspace and API key as real devices cannot be connected to sandbox workspaces.

In addition, if you'd like to explore other aspects of Seam, here is a list of helpful resources:

* [Yale Getting Started Guide](get-started-with-yale-locks.md)
* [August Getting Started Guide](get-started-with-august-locks.md)
* [Schlage Getting Started Guide](get-started-with-schlage-locks.md)
* [SmartThings Getting Started Guide](get-started-with-smartthings-hubs-+-smart-locks.md)
* [Receiving webhook](../core-concepts/webhooks.md) for [device events](../api-clients/events/list-events.md)
* [Core Concepts](../core-concepts/overview.md)

If you have any questions or want to report an issue, email us at support@seam.co.
