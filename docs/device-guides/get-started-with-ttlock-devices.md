---
description: Learn how to connect and control your TTLock locks with the Seam API.
---

# Get started with TTLock Devices

<figure><img src="../.gitbook/assets/guides/ttlock-getting-started-seo-cover.png" alt=""><figcaption></figcaption></figure>

## Overview

Seam provides a universal API to connect and control many brands of locks, including TTLock. This guide provides a rapid introduction to connecting and controlling your [TTLock](https://www.seam.co/manufacturers/ttlock) locks using the Seam API. To learn more about other device brands supported by the Seam API, such as August, Igloohome, Schlage, and Kwikset, head over to our [integration page](https://www.seam.co/supported-devices-and-systems).

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
This guide uses a Sandbox Workspace. Only virtual devices can be connected. If you need to connect a real TTLock device, use a non-sandbox workspace and API key.
{% endhint %}

## 2 — Link Your TTLock Account with Seam

To control your TTLock locks via the Seam API, you must first authorize your Seam workspace against your TTLock account. To do so, Seam provides [Connect Webviews](../core-concepts/connect-webviews/): pre-built UX flows that walk you through authorizing your application to control your TTLock devices.

#### Request a Connect Webview

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

webview = seam.connect_webviews.create(accepted_providers=["ttlock"])

assert webview.login_successful is False

# Send the webview URL to your user
print(webview.url)
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
import { Seam } from 'seam'

const seam = new Seam()

const { connect_webview: connectWebview } = await seam.connectWebviews.create({
  accepted_providers: ['ttlock'],
})

console.log(connectWebview.login_successful) // false

// Send the webview URL to your user
console.log(connectWebview.url)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require 'seamapi'

seam = Seam::Client.new(api_key: 'MY_API_KEY')

webview = seam.connect_webviews.create(accepted_providers: %w[ttlock])

puts webview.login_successful # false

# Send the webview URL to your user
puts webview.url
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$webview = $seam->connect_webviews->create(
  accepted_providers: ["ttlock"]
);

echo json_encode($webview)
/*
{"connect_webview_id":"70c4df9e-1070-441f-92f8-fd6524062cec","workspace_id":"d7418ff3-a476-4f48-9a4b-211d1d21a03d","url":"https:\/\/connect.getseam.com\/connect_webviews\/view?connect_webview_id=70c4df9e-1070-441f-92f8-fd6524062cec&auth_token=9HJbwWKbD5aJLifZcozU9WWZXxropn9Bg","connected_account_id":null,"status":"pending","custom_redirect_url":null,"custom_redirect_failure_url":null,"created_at":"2023-02-09T02:14:06.147745+00:00","error":null}
*/
```
{% endtab %}
{% endtabs %}

#### Authorize Your Workspace

Navigate to the URL returned by the Webview object. Since you are using a sandbox workspace, complete the login flow by entering the TTLock [sandbox test accounts](https://docs.seam.co/latest/device-guides/sandbox-and-sample-data) credentials below:

* **email:** jane@example.com
* **password:** 1234

<figure><img src="../.gitbook/assets/guides/ttlock-connect-flow-screens.png" alt=""><figcaption><p>Seam Connect Webview flow to connect TTLock account with Seam</p></figcaption></figure>

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

{% tab title="PHP" %}
```php
$webview = $seam->connect_webviews->get($webview->id);
echo json_encode($webview);
```
{% endtab %}
{% endtabs %}

## 3 — Retrieve TTLock Devices

After a TTLock account is linked with Seam, you can retrieve devices for this TTLock account. The Seam API exposes device properties like battery level, lock status, and more.

{% tabs %}
{% tab title="Python" %}
```python
all_locks = seam.locks.list()

some_lock = all_locks[0]

assert some_lock.properties["online"] is True
assert some_lock.properties["battery_level"] is True

print(some_lock)
# Device(device_id='60d0f1b6-26ae-4366-8d1b-d20ad0d6a62e', device_type='ttlock_lock', location=None, properties={'locked': False, 'online': True, 'manufacturer': 'ttlock', 'battery_level': 0.86, 'ttlock_metadata': {'lock_id': 545636388, 'lock_alias': 'Office Lock'}, 'supported_code_lengths': [4, 6, 8], 'name': 'Office Lock'}, capabilities_supported=['access_code', 'lock'], errors=[])
```
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
  device_id: '60d0f1b6-26ae-4366-8d1b-d20ad0d6a62e',
  device_type: 'ttlock_lock',
  capabilities_supported: [ 'access_code', 'lock' ],
  properties: {
    locked: false,
    online: true,
    manufacturer: 'ttlock',
    battery_level: 0.86,
    ttlock_metadata: { lock_id: 545636388, lock_alias: 'Office Lock' },
    supported_code_lengths: [ 4, 6, 8 ],
    name: 'Office Lock'
  },
  location: null,
  connected_account_id: '32e92b46-7978-4d48-a3e7-9b04662151b3',
  workspace_id: 'd7418ff3-a476-4f48-9a4b-211d1d21a03d',
  created_at: '2023-02-11T00:46:12.940Z',
  errors: [],
  warnings: []
}
*/
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
some_lock = seam.locks.list.first

puts some_lock.properties['online'] # true
puts some_lock.properties['locked'] # true

puts some_lock

# <Seam::Device:0x00730
#   device_id="60d0f1b6-26ae-4366-8d1b-d20ad0d6a62e"
#   device_type="ttlock_lock"
#   properties={"locked"=>false, "online"=>true, "manufacturer"=>"ttlock", "battery_level"=>0.86, "ttlock_metadata"=>{"lock_id"=>545636388, "lock_alias"=>"Office Lock"}, "supported_code_lengths"=>[4, 6, 8], "name"=>"Office Lock"}
#   created_at=2023-02-11 00:46:12.94 UTC
#   errors=[]
#   warnings=[]>
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient('YOUR_API_KEY');

$locks = $seam->locks->list();

echo json_encode($locks);
/*
[{"device_id":"60d0f1b6-26ae-4366-8d1b-d20ad0d6a62e","workspace_id":"d7418ff3-a476-4f48-9a4b-211d1d21a03d","connected_account_id":"32e92b46-7978-4d48-a3e7-9b04662151b3","device_type":"ttlock_lock","properties":{"online":true,"locked":false,"door_open":null,"battery_level":0.86,"name":"Office Lock","manufacturer":"ttlock","ttlock_metadata": {lock_id: 545636388, lock_alias: "Office Lock"}},"location":null,"created_at":"2023-02-11T00:46:12.940Z","capabilities_supported":["access_code","lock"],"errors":[]}]
*/
```
{% endtab %}
{% endtabs %}

### 4 — Locking & Unlocking a Door

{% hint style="warning" %}
The Remote Unlock feature must be enabled in your lock settings in order to unlock a TTLock device. To do so, open the TTLock app, navigate to your lock settings, and turn on the Remote Unlock feature.

If we detect that this feature is disabled, a warning is added to the device.
{% endhint %}

Next, you can perform the basic action of locking and unlocking a door.

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

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient('YOUR_API_KEY');

$some_lock = $seam->locks->list()[0];

# unlock the door
$seam->locks->unlock_door($lock->device_id);
# lock the door
$seam->locks->lock_door($lock->device_id);
```
{% endtab %}
{% endtabs %}

### 5 — Setting Access Codes on TTLock Devices

The Seam API makes it easy to program both `ongoing` codes and `timebound` codes on a TTLock device. You can find out more about access codes in our [core concept section on access codes.](../products/smart-locks/access-codes/)

{% tabs %}
{% tab title="Python" %}
```python
# create an ongoing code
seam.access_codes.create(
  device=some_lock,
  code="492332",
  name="Personal Access Code")

# create a timebound code
seam.access_codes.create(
  device=some_lock,
  code="498882",
  name="My Temp Access Code",
  starts_at="2028-08-12T19:23:42+0000",
  ends_at="2028-08-13T19:23:42+0000")

# you can use a device or a device_id as the "device" parameter
seam.access_codes.list(device=some_lock)


```
{% endtab %}

{% tab title="Javascript" %}
```javascript
// create an ongoing code
await seam.accessCodes.create({
  device_id: someLock.device_id,
  code: '123456',
  name: 'Personal Access Code',
})

// create a timebound code
await seam.accessCodes.create({
  device_id: someLock.device_id,
  code: '888888',
  name: 'My Temp Access Code',
  starts_at: '2028-11-12T19:23:42+0000',
  ends_at: '2028-11-13T19:23:42+0000',
})

// use a device_id as the "device_id" parameter
await seam.accessCodes.list({
  device_id: someLock.device_id,
})
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# create an ongoing code
seam.access_codes.create(
  device_id: some_lock.device_id, code: '123456', name: 'Personal Access Code'
)

# create a timebound code
seam.access_codes.create(
  device_id: some_lock.device_id,
  code: '888888',
  name: 'My Temp Access Code',
  starts_at: '2028-08-12T19:23:42+0000',
  ends_at: '2028-08-13T19:23:42+0000'
)

# you can use a device or a device_id as the "device" parameter
seam.access_codes.list(some_lock)
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$some_lock = $seam->locks->list()[0];
$seam->access_codes->create(
  device_id: $some_lock->device_id, code: '123456', name: 'Personal Access Code'
);

$seam->access_codes->create(
  device_id: $some_lock->device_id,
  name: 'My Temp Access Code',
  code: '888888',
  starts_at: '2028-08-12T19:23:42+0000',
  ends_at: '2028-08-13T19:23:42+0000'
);

```
{% endtab %}
{% endtabs %}

###

## Next Steps

Now that you've completed this guide, you can try to connect a real TTLock device. To do so, make sure to switch to a non-sandbox workspace and API key as real devices cannot be connected to sandbox workspaces.

In addition, if you'd like to explore other aspects of Seam, here is a list of helpful resources:

* [Schlage Getting Started Guide](broken-reference/)
* [Yale Getting Started Guide](get-started-with-yale-locks.md)
* [SmartThings Getting Started Guide](get-started-with-smartthings-hubs-+-smart-locks.md)
* [Receiving webhook](../core-concepts/webhooks.md) for [device events](../api-clients/events/list-events.md)
* [Core Concepts](broken-reference/)

If you have any questions or want to report an issue, email us at support@seam.co.
