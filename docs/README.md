---
description: Seam makes it easy to integrate IoT devices with your applications!
---

# 🎉 Seam Documentation

We have integrated many door locks, thermostats, and other device brands, and we have created simple application programming interfaces (APIs) for interacting with these devices.

To get started quickly with Seam, follow the [Quick Start](quickstart.md) to create an API key and then connect and control your first device.

## Getting Started

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Get</strong> <strong>API Key</strong> (free)</td><td>Sign up for the Seam Console and get your API keys. →</td><td></td><td><a href=".gitbook/assets/seam-api-key.png">seam-api-key.png</a></td><td><a href="https://console.seam.co/">https://console.seam.co/</a></td></tr><tr><td><strong>Quick Start</strong> (5 mins)</td><td>Learn how to connect a device and issue your first API call. →</td><td></td><td><a href=".gitbook/assets/seam-quick-start-light.png">seam-quick-start-light.png</a></td><td><a href="quickstart.md">quickstart.md</a></td></tr></tbody></table>

{% embed url="https://youtu.be/XzzJ7gMPOGE" %}

## Install an SDK

Use one of the following methods to install the Seam software development kit (SDK) in the programming language of your choice:

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

## Create and Export Your Seam API Key

[Create your Seam API key](core-concepts/authentication/api-keys.md#create-an-api-key) using the [Seam Console](https://console.seam.co/). Then, make sure to export this key so that the installed SDK can use it.

```bash
$ export SEAM_API_KEY=seam_test2ZTo_0mEYQW2TvNDCxG5Atpj85Ffw
```

## Device APIs

Explore our device API guides to start connecting and controlling specific device categories.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden><select></select></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Door Locks API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/smart-locks-16-9.png">smart-locks-16-9.png</a></td><td></td><td><a href="products/smart-locks/">smart-locks</a></td></tr><tr><td><strong>Thermostats API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/thermostats-16-9.png">thermostats-16-9.png</a></td><td></td><td><a href="products/thermostats/">thermostats</a></td></tr><tr><td><strong>Noise</strong> <strong>Sensors API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/sensors-16-9.png">sensors-16-9.png</a></td><td></td><td><a href="products/noise-sensors/">noise-sensors</a></td></tr></tbody></table>

## Brand Guides

Explore our in-depth guides to get started with specific devices or brands.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-type="content-ref"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>August Locks</strong></td><td>Connect and control August locks. →</td><td><a href=".gitbook/assets/august-getting-started-guide-cover.jpg">august-getting-started-guide-cover.jpg</a></td><td><a href="device-guides/get-started-with-august-locks.md">get-started-with-august-locks.md</a></td><td><a href="device-guides/get-started-with-august-locks.md">get-started-with-august-locks.md</a></td></tr><tr><td><strong>Yale Locks</strong></td><td>Connect and control Yale locks. →</td><td><a href=".gitbook/assets/yale-getting-started-guide-cover.jpg">yale-getting-started-guide-cover.jpg</a></td><td><a href="device-guides/get-started-with-yale-locks.md">get-started-with-yale-locks.md</a></td><td><a href="device-guides/get-started-with-yale-locks.md">get-started-with-yale-locks.md</a></td></tr><tr><td><strong>Schlage Locks</strong></td><td>Connect and control Schlage locks. →</td><td><a href=".gitbook/assets/schlage-getting-started-guide-cover.jpg">schlage-getting-started-guide-cover.jpg</a></td><td><a href="device-guides/get-started-with-schlage-locks.md">get-started-with-schlage-locks.md</a></td><td><a href="device-guides/get-started-with-schlage-locks.md">get-started-with-schlage-locks.md</a></td></tr><tr><td><strong>Kwikset Locks</strong></td><td>Connect and control Kwikset locks. →</td><td><a href=".gitbook/assets/guides/kwikset-getting-started-guide-cover.jpg">kwikset-getting-started-guide-cover.jpg</a></td><td><a href="device-guides/get-started-with-kwikset-wifi-locks.md">get-started-with-kwikset-wifi-locks.md</a></td><td><a href="device-guides/get-started-with-kwikset-wifi-locks.md">get-started-with-kwikset-wifi-locks.md</a></td></tr><tr><td><strong>Salto Locks</strong></td><td>Connect and control Salto locks and devices. →</td><td><a href=".gitbook/assets/salto-getting-started-guide-cover.jpg">salto-getting-started-guide-cover.jpg</a></td><td><a href="device-guides/get-started-with-salto-locks.md">get-started-with-salto-locks.md</a></td><td><a href="device-guides/get-started-with-salto-locks.md">get-started-with-salto-locks.md</a></td></tr><tr><td><strong>TTLock</strong></td><td>Connect and control TTLock devices. →</td><td><a href=".gitbook/assets/guides/ttlock-getting-started-seo-cover.png">ttlock-getting-started-seo-cover.png</a></td><td><a href="device-guides/get-started-with-ttlock-devices.md">get-started-with-ttlock-devices.md</a></td><td><a href="device-guides/get-started-with-ttlock-devices.md">get-started-with-ttlock-devices.md</a></td></tr><tr><td><strong>Nuki Locks</strong></td><td>Connect and control Nuki devices. →</td><td><a href=".gitbook/assets/guides/nuki-getting-seo-cover.jpg">nuki-getting-seo-cover.jpg</a></td><td><a href="device-guides/get-started-with-nuki-locks.md">get-started-with-nuki-locks.md</a></td><td><a href="device-guides/get-started-with-nuki-locks.md">get-started-with-nuki-locks.md</a></td></tr><tr><td><strong>Minut Sensors</strong></td><td>Connect and control Minut sensors. →</td><td><a href=".gitbook/assets/guides/minut-getting-seo-cover.jpg">minut-getting-seo-cover.jpg</a></td><td><a href="device-guides/get-started-with-minut-sensors.md">get-started-with-minut-sensors.md</a></td><td><a href="device-guides/get-started-with-minut-sensors.md">get-started-with-minut-sensors.md</a></td></tr><tr><td><strong>NoiseAware Sensors</strong></td><td>Connect and control NoiseAware sensors. →</td><td><a href=".gitbook/assets/guides/noiseaware-getting-seo-cover.jpg">noiseaware-getting-seo-cover.jpg</a></td><td><a href="device-guides/get-started-with-noiseaware-sensors.md">get-started-with-noiseaware-sensors.md</a></td><td><a href="device-guides/get-started-with-noiseaware-sensors.md">get-started-with-noiseaware-sensors.md</a></td></tr><tr><td><strong>2N Intercom</strong></td><td>Connect and control 2N devices. →</td><td><a href=".gitbook/assets/guides/2n-getting-started-seo-cover.png">2n-getting-started-seo-cover.png</a></td><td><a href="device-guides/get-started-with-2n-intercoms.md">get-started-with-2n-intercoms.md</a></td><td><a href="device-guides/get-started-with-2n-intercoms.md">get-started-with-2n-intercoms.md</a></td></tr><tr><td><strong>ecobee Thermostats</strong></td><td>Connect and control ecobee thermostats. →</td><td><a href=".gitbook/assets/ecobee-getting-seo-cover (1).png">ecobee-getting-seo-cover (1).png</a></td><td></td><td></td></tr><tr><td><strong>igloohome Locks</strong></td><td>Connect and control igloohome locks. →</td><td><a href=".gitbook/assets/guides/igloo-getting-seo-cover.png">igloo-getting-seo-cover.png</a></td><td></td><td><a href="device-guides/get-started-with-igloo-locks.md">get-started-with-igloo-locks.md</a></td></tr></tbody></table>
