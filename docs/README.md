---
description: Seam makes it easy to integrate IoT devices with your applications!
---

# 🎉 Seam API Docs

We've integrated many door locks, thermostats, and other devices brands, and created simple APIs for interacting with them. Use the [Seam API console](https://console.seam.co/) to get your API keys. Follow the [get started guide](broken-reference/) to connect and control your first device.

## Getting Started

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Quick Start</strong> (5 mins)</td><td>Learn how to connect a device and issue your first API call →</td><td></td><td><a href=".gitbook/assets/seam-quick-start-light.png">seam-quick-start-light.png</a></td><td><a href="quickstart/get-api-key.md">get-api-key.md</a></td></tr><tr><td><strong>Get</strong> <strong>API Key</strong> (free)</td><td>Sign-up for the Seam developer console and get your API keys →</td><td></td><td><a href=".gitbook/assets/seam-api-key.png">seam-api-key.png</a></td><td><a href="https://console.seam.co/">https://console.seam.co/</a></td></tr></tbody></table>

{% embed url="https://youtu.be/XzzJ7gMPOGE" %}

## Install Client Libraries

{% tabs %}
{% tab title="Javascript" %}
```bash
npm i seamapi
```
{% endtab %}

{% tab title="Python" %}
```bash
pip install seamapi
```
{% endtab %}

{% tab title="Java" %}
For Gradle, add the dependency in your `build.gradle`:
```groovy
dependencies {
    implementation 'io.github.seamapi:java:0.x.x'
}
```

For Maven, add the dependency in your `pom.xml`:
```xml
<dependency>
    <groupId>io.github.seamapi:java</groupId>
    <artifactId>seam</artifactId>
    <version>0.x.x</version>
</dependency>
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

{% tab title="Rust" %}
```bash
cargo add seamapi-rs
```

Hello Crustacean! This is a community library and is not officially being maintained by Seam.
{% endtab %}
{% endtabs %}

Make sure to export your [Seam API Key](quickstart/get-api-key.md) in order for the client library to pick it up:

```
$ export SEAM_API_KEY=seam_test2ZTo_0mEYQW2TvNDCxG5Atpj85Ffw
```

## Device APIs

Explore our Device API guides to start connecting and controlling specific device categories.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-type="select"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Door Lock API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/smart-locks-16-9.png">smart-locks-16-9.png</a></td><td></td><td><a href="device-guides/get-started-with-smartlocks-api.md">get-started-with-smartlocks-api.md</a></td></tr><tr><td><strong>Thermostats API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/thermostats-16-9.png">thermostats-16-9.png</a></td><td></td><td><a href="broken-reference">Broken link</a></td></tr><tr><td><strong>Noise</strong> <strong>Sensors API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/sensors-16-9.png">sensors-16-9.png</a></td><td></td><td><a href="device-guides/get-started-with-minut-sensors.md">get-started-with-minut-sensors.md</a></td></tr></tbody></table>

## Brand Guides

Explore in-depth guides below to get started with a specific device or brand.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-type="content-ref"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>August Locks</strong></td><td>Connect and control August lock →</td><td><a href=".gitbook/assets/august-getting-started-guide-cover.jpg">august-getting-started-guide-cover.jpg</a></td><td><a href="device-guides/get-started-with-august-locks.md">get-started-with-august-locks.md</a></td><td><a href="device-guides/get-started-with-august-locks.md">get-started-with-august-locks.md</a></td></tr><tr><td><strong>Yale Locks</strong></td><td>Connect and control Yale lock →</td><td><a href=".gitbook/assets/yale-getting-started-guide-cover.jpg">yale-getting-started-guide-cover.jpg</a></td><td><a href="device-guides/get-started-with-yale-locks.md">get-started-with-yale-locks.md</a></td><td><a href="device-guides/get-started-with-yale-locks.md">get-started-with-yale-locks.md</a></td></tr><tr><td><strong>Schlage Locks</strong></td><td>Connect and control Schlage locks →</td><td><a href=".gitbook/assets/schlage-getting-started-guide-cover.jpg">schlage-getting-started-guide-cover.jpg</a></td><td><a href="device-guides/get-started-with-schlage-locks.md">get-started-with-schlage-locks.md</a></td><td><a href="device-guides/get-started-with-schlage-locks.md">get-started-with-schlage-locks.md</a></td></tr><tr><td><strong>Kwikset Locks</strong></td><td>Connect and control Kwikset locks →</td><td><a href=".gitbook/assets/guides/kwikset-getting-started-guide-cover.jpg">kwikset-getting-started-guide-cover.jpg</a></td><td><a href="device-guides/get-started-with-kwikset-wifi-locks.md">get-started-with-kwikset-wifi-locks.md</a></td><td><a href="device-guides/get-started-with-kwikset-wifi-locks.md">get-started-with-kwikset-wifi-locks.md</a></td></tr><tr><td><strong>Salto Locks</strong></td><td>Connect and control Salto locks and devices →</td><td><a href=".gitbook/assets/salto-getting-started-guide-cover.jpg">salto-getting-started-guide-cover.jpg</a></td><td><a href="device-guides/get-started-with-salto-locks.md">get-started-with-salto-locks.md</a></td><td><a href="device-guides/get-started-with-salto-locks.md">get-started-with-salto-locks.md</a></td></tr><tr><td><strong>TTLock</strong></td><td>Connect and control TTLock devices →</td><td><a href=".gitbook/assets/guides/ttlock-getting-started-seo-cover.png">ttlock-getting-started-seo-cover.png</a></td><td><a href="device-guides/get-started-with-ttlock-devices.md">get-started-with-ttlock-devices.md</a></td><td><a href="device-guides/get-started-with-ttlock-devices.md">get-started-with-ttlock-devices.md</a></td></tr><tr><td><strong>Nuki Locks</strong></td><td>Connect and control Nuki devices →</td><td><a href=".gitbook/assets/guides/nuki-getting-seo-cover.jpg">nuki-getting-seo-cover.jpg</a></td><td><a href="device-guides/get-started-with-nuki-locks.md">get-started-with-nuki-locks.md</a></td><td><a href="device-guides/get-started-with-nuki-locks.md">get-started-with-nuki-locks.md</a></td></tr><tr><td><strong>Minut Sensors</strong></td><td>Connect and control Minut Sensors →</td><td><a href=".gitbook/assets/guides/minut-getting-seo-cover.jpg">minut-getting-seo-cover.jpg</a></td><td><a href="device-guides/get-started-with-minut-sensors.md">get-started-with-minut-sensors.md</a></td><td><a href="device-guides/get-started-with-minut-sensors.md">get-started-with-minut-sensors.md</a></td></tr><tr><td><strong>NoiseAware Sensors</strong></td><td>Connect and control NoiseAware sensors →</td><td><a href=".gitbook/assets/guides/noiseaware-getting-seo-cover.jpg">noiseaware-getting-seo-cover.jpg</a></td><td><a href="device-guides/get-started-with-noiseaware-sensors.md">get-started-with-noiseaware-sensors.md</a></td><td><a href="device-guides/get-started-with-noiseaware-sensors.md">get-started-with-noiseaware-sensors.md</a></td></tr><tr><td><strong>2N Intercom</strong></td><td>Connect and control 2N Devices →</td><td><a href=".gitbook/assets/guides/2n-getting-started-seo-cover.png">2n-getting-started-seo-cover.png</a></td><td><a href="device-guides/get-started-with-2n-intercoms.md">get-started-with-2n-intercoms.md</a></td><td><a href="device-guides/get-started-with-2n-intercoms.md">get-started-with-2n-intercoms.md</a></td></tr><tr><td><strong>Ecobee Thermostats</strong></td><td>Connect and control Ecobee thermostats →</td><td><a href=".gitbook/assets/ecobee-getting-seo-cover (1).png">ecobee-getting-seo-cover (1).png</a></td><td></td><td></td></tr><tr><td><strong>Igloohome Locks</strong></td><td>Connect and control Igloohome locks →</td><td><a href=".gitbook/assets/guides/igloo-getting-seo-cover.png">igloo-getting-seo-cover.png</a></td><td></td><td><a href="device-guides/get-started-with-igloo-locks.md">get-started-with-igloo-locks.md</a></td></tr></tbody></table>
