---
description: >-
  Seam provides a unified API to connect and control IoT devices, such as smart
  locks, thermostats, cameras, and sensors. This guide walks you through issuing
  your first device API call.
---

# 🚲 Quick Start

## Step 1 — Connect Devices

To get started with Seam, first connect a set of devices.

1. In a web browser, navigate to the [Seam Console](core-concepts/seam-console.md) at [**console.seam.co**](https://console.seam.co/) and create an account.\
   Once you have logged in to the Seam Console, you are working in the default [sandbox workspace](core-concepts/workspaces/#sandbox-workspaces).
2.  In the upper-right corner of the **Devices** page, click **+ Add Devices**.

    The Seam Console displays an authorization flow (known as a [Connect Webview](core-concepts/connect-webviews/)) that enables you to connect a device account to Seam.
3. In the Connect Webview, click **Continue**.
4. In the manufacturer list, select [**August**](https://august.com/).
5. When prompted, type the following sample (sandbox) credentials:
   * **Email:** `jane@example.com`
   * **Password:** `1234`
6. Click **Submit**.
7. When prompted for a two-factor authentication (2FA) method, select **Email**.
8. In the **Two Factor Code** field, type `123456` and then click **Submit and Continue**.

Once authorized, the devices associated with this test account appear in your workspace.

{% @supademo/embed demoId="h1y5QMki-7vzlghMzobuf" url="https://app.supademo.com/demo/h1y5QMki-7vzlghMzobuf" %}

## Step 2 — Get an API Key and SDK

To control the devices that you connected in [Step 1](quickstart.md#step-1-connect-devices), you must create an API key and install the Seam SDK in the programming language of your choice.

### Create an API Key

1. In left navigation pane of the [Seam Console](https://console.seam.co/), click **API Keys**.
2. In the upper-right corner of the **API Keys** page, click **+ Add API Key**.
3. In the **Add API Key** dialog, type a name for your new API key and then click **Create API Key**.
4. Copy the newly-created API key and store it for future use.

{% @supademo/embed demoId="vLRzYM2Nwoi4j_cH9WCNQ" url="https://app.supademo.com/demo/vLRzYM2Nwoi4j_cH9WCNQ" %}

### Install the Seam SDK

Install one of the Seam SDKs in the programming language of your choice.&#x20;

Seam supports many programming languages, such as the following:

* [JavaScript / TypeScript](https://github.com/seamapi/javascript)
* [Python](https://github.com/hello-seam/seamapi-python)
* [Ruby Gem](https://rubygems.org/gems/seamapi)
* [PHP](https://github.com/seamapi/php)
* [Java](https://github.com/seamapi/java)
* [C#](https://github.com/seamapi/csharp)
* [Go](https://github.com/seamapi/go)

{% tabs %}
{% tab title="JavaScript" %}
```bash
npm i seamapi
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

{% tab title="Rust" %}
```bash
cargo add seamapi-rs
```

Hello Crustacean! This is a community library and is not officially being maintained by Seam.
{% endtab %}
{% endtabs %}

## Step 3 — Unlock a Door

Unlock your first door!

To start, open a terminal window and export your API key as an environment variable.

```sh
$ export SEAM_API_KEY=seam_test2bMS_94SrGUXuNR2JmJkjtvBQDg5c
```

The Seam SDK that you have installed automatically uses this API key once you have exported it.

Next, use the following code to retrieve one of the devices that you connected in [Step 1](quickstart.md#step-1-connect-devices), inspect the supported capabilities of the device, and use the Seam API to unlock the door:

{% tabs %}
{% tab title="JavaScript" %}
<pre class="language-javascript"><code class="lang-javascript">import Seam from "seamapi";
const seam = new Seam(); // SEAM_API_KEY environment variable picked up here.

// Retrieve all authorized locks and select the first lock.
const [someLock] = await seam.locks.list();

<strong>// Inspect this device to see which capabilities it supports.
</strong>console.log(someLock.enabled_capabilities);
/*
  [ 'access_code', 'lock' ] 
*/

// This device supports the 'lock' capability, so you can use the Seam API to
// unlock the lock if it is locked or to lock it if it is unlocked.
if (someLock.properties.locked) {
  await seam.locks.unlockDoor(someLock.device_id);
} else {
  await seam.locks.lockDoor(someLock.device_id);
}
</code></pre>
{% endtab %}

{% tab title="Python" %}
```python
from seamapi import Seam

# SEAM_API_KEY environment variable picked up here.
seam = Seam()

# Retrieve all authorized locks and select the first lock.
some_lock = seam.locks.list()[0]

# Inspect this device to see which capabilities it supports.
print(some_lock.enabled_capabilities)
# ['access_code', 'lock']

# This device supports the 'lock' capability, so you can use the Seam API to
# unlock the lock if it is locked or to lock it if it is unlocked.
if some_lock.properties["locked"]:
    seam.locks.unlock_door(some_lock)
else:
    seam.locks.lock_door(some_lock)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

# SEAM_API_KEY environment variable picked up here.
seam = Seam::Client.new()

# Retrieve all authorized locks and select the first lock.
some_lock = seam.locks.list().first
# Note the capabilities that this device supports.
# enabled_capabilities=["access_code", "lock"]

# This device supports the "lock" capability, so you can use the Seam API to
# unlock the lock if it is locked or to lock it if it is unlocked.
if some_lock.properties["locked"]
    seam.locks.unlock_door(some_lock.device_id)
else
    seam.locks.lock_door(some_lock.device_id)
end
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

# SEAM_API_KEY environment variable picked up here.
$seam = new SeamClient("YOUR_API_KEY");

# Retrieve all authorized locks and select the first lock.
$some_lock = $seam->locks->list()[0];

# Inspect this device to see which capabilities it supports.
echo json_encode($some_lock->enabled_capabilities, JSON_PRETTY_PRINT);
# [
#     "access_code",
#     "lock"
# ]

# This device supports the "lock" capability, so you can use the Seam API to
# unlock the lock if it is locked or to lock it if it is unlocked.
if ($some_lock->properties->locked) {
  $seam->locks->unlock_door($some_lock->device_id);
} else {
  $seam->locks->lock_door($some_lock->device_id);
}
```
{% endtab %}
{% endtabs %}

## Congrats! :tada:

Now that you have completed the Seam API Quick Start, you are well on your way to writing code that can actually control the physical world! :sunglasses:

Here are some ideas of what you can do next.

### Connect a Real Device

If you have a real device, you can try to control it using the steps in this Quick Start. Note that you must first [create a production workspace](going-live.md#create-a-production-workspace) because sandbox workspaces only enable you to connect test accounts and devices. For more information, see [Workspaces](core-concepts/workspaces/).

### Connect Users' Devices

If you are creating an application (app) to control your users' devices, see [Connect Webviews](core-concepts/connect-webviews/). Seam Connect Webviews are fully-embedded client-side components that you add to your app if you want to enable your users to import their own devices using your app. Your users interact with your embedded Connect Webviews to link their IoT device accounts to Seam through your app. That is, Connect Webviews walk your users through the process of logging in to their device accounts. Seam handles all the authentication steps, and—once your user has completed the authorization through your app—you can access and control their devices using the Seam API.

<figure><img src=".gitbook/assets/Seam Connect.png" alt="Use Connect Webviews to enable your users to authorize your app to control their devices."><figcaption></figcaption></figure>

### Learn about Devices and Capabilities

Seam supports many device categories. Each device can be broken down into [device capabilities](broken-reference). A capability indicates what the device can do, what properties it has, and what events it emits. To learn more about specific capabilities, such as access codes or thermostats, see the following guides:

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-type="select"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Door Locks API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/smart-locks-16-9.png">smart-locks-16-9.png</a></td><td></td><td><a href="device-guides/get-started-with-smartlocks-api.md">get-started-with-smartlocks-api.md</a></td></tr><tr><td><strong>Thermostats API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/thermostats-16-9.png">thermostats-16-9.png</a></td><td></td><td><a href="broken-reference/">broken-reference</a></td></tr><tr><td><strong>Noise</strong> <strong>Sensors API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/sensors-16-9.png">sensors-16-9.png</a></td><td></td><td><a href="device-guides/get-started-with-minut-sensors.md">get-started-with-minut-sensors.md</a></td></tr></tbody></table>
