---
description: Get all device providers
---

# List Device Providers

Returns a list of all [device providers](./#device-providers).

{% swagger src="https://connect.getseam.com/openapi.json" path="/devices/list_device_providers" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

To filter the list of returned device providers by a specific device provider category, include the `provider_category` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>provider_category</code></td><td>String<br><em>Optional</em></td><td><p>Provider category by which to filter device providers.</p><p>Supported categories:</p><ul><li><code>stable</code></li><li><code>consumer_smartlocks</code></li><li><code>thermostats</code></li><li><code>noise_sensors</code></li></ul></td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
pprint(seam.devices.list_device_providers(provider_category="stable"))
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/devices/list_device_providers' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "provider_category": "stable"
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
console.log(await seam.devices.listDeviceProviders({provider_category: "stable"}))
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
puts client.devices.list_device_providers(provider_category: "stable").inspect
```
{% endtab %}

{% tab title="C#" %}
```csharp
var deviceProviders = seam.Devices.ListDeviceProviders(providerCategory: Seam.Api.Devices.ListDeviceProvidersRequest.ProviderCategoryEnum.Stable);
foreach (var deviceProvider in deviceProviders)
{
  Console.WriteLine(deviceProvider);
}
```
{% endtab %}

{% tab title="Java" %}
```java
var deviceProviders = seam.devices()
        .listDeviceProviders(DevicesListDeviceProvidersRequest.builder()
                .providerCategory(DevicesListDeviceProvidersRequestProviderCategory.STABLE)
                .build());
System.out.println(deviceProviders);
```
{% endtab %}
{% endtabs %}

## Response

Returns an `device_providers` array, in which each returned device provider (`device_provider`) contains the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>device_provider_name</code></td><td>Name of the device provider.</td></tr><tr><td><code>display_name</code></td><td>Display name that corresponds to the device provider type.</td></tr><tr><td><code>image_url</code></td><td>Image URL for the device provider.</td></tr><tr><td><code>provider_categories</code></td><td>List of provider categories for the device provider.</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
[{'device_provider_name': 'august',
  'display_name': 'August',
  'image_url': 'https://connect.getseam.com/assets/images/logos/august_logo_square.png',
  'provider_categories': ['stable', 'consumer_smartlocks']},
 {'device_provider_name': 'avigilon_alta',
  'display_name': 'Avigilon Alta',
  'image_url': 'https://connect.getseam.com/assets/images/logos/avigilon_alta_logo_openpath_square.png',
  'provider_categories': ['stable']},
 {'device_provider_name': 'brivo',
  'display_name': 'Brivo',
  'image_url': 'https://connect.getseam.com/assets/images/logos/brivo_logo_square.png',
  'provider_categories': ['stable']},
 {'device_provider_name': 'controlbyweb',
  'display_name': 'ControlByWeb',
  'image_url': 'https://connect.getseam.com/assets/images/logos/controlbyweb_logo_square.png',
  'provider_categories': ['stable']},
 {'device_provider_name': 'dormakaba_oracode',
  'display_name': 'Dormakaba Oracode',
  'image_url': 'https://connect.getseam.com/assets/images/logos/dormakaba_logo_square.png',
  'provider_categories': ['stable']},
 {'device_provider_name': 'ecobee',
  'display_name': 'Ecobee',
  'image_url': 'https://connect.getseam.com/assets/images/logos/ecobee_logo_square.png',
  'provider_categories': ['stable', 'thermostats']},
 {'device_provider_name': 'four_suites',
  'display_name': '4SUITES',
  'image_url': 'https://connect.getseam.com/assets/images/logos/four_suites_logo_square.png',
  'provider_categories': ['stable']},
 {'device_provider_name': 'igloohome',
  'display_name': 'Igloo Home',
  'image_url': 'https://connect.getseam.com/assets/images/logos/igloohome_logo_square.png',
  'provider_categories': ['stable', 'consumer_smartlocks']},
 {'device_provider_name': 'kwikset',
  'display_name': 'Kwikset',
  'image_url': 'https://connect.getseam.com/assets/images/logos/kwikset_logo_square.png',
  'provider_categories': ['stable', 'consumer_smartlocks']},
 {'device_provider_name': 'lockly',
  'display_name': 'Lockly',
  'image_url': 'https://connect.getseam.com/assets/images/logos/lockly_logo_square.png',
  'provider_categories': ['stable']},
 {'device_provider_name': 'minut',
  'display_name': 'Minut',
  'image_url': 'https://connect.getseam.com/assets/images/logos/minut_logo_wordmark.png',
  'provider_categories': ['stable', 'noise_sensors']},
 {'device_provider_name': 'my_2n',
  'display_name': 'My2N',
  'image_url': 'https://connect.getseam.com/assets/images/logos/2n_logo_square.png',
  'provider_categories': ['stable']},
 {'device_provider_name': 'nest',
  'display_name': 'Google Nest Thermostats',
  'image_url': 'https://connect.getseam.com/assets/images/logos/nest_logo_square.png',
  'provider_categories': ['stable', 'thermostats']},
 {'device_provider_name': 'noiseaware',
  'display_name': 'Noiseaware',
  'image_url': 'https://connect.getseam.com/assets/images/logos/noiseaware_logo_square.png',
  'provider_categories': ['stable', 'noise_sensors']},
 {'device_provider_name': 'nuki',
  'display_name': 'Nuki',
  'image_url': 'https://connect.getseam.com/assets/images/logos/nuki_logo_square.png',
  'provider_categories': ['stable', 'consumer_smartlocks']},
 {'device_provider_name': 'salto',
  'display_name': 'Salto',
  'image_url': 'https://connect.getseam.com/assets/images/logos/salto_logo_square.png',
  'provider_categories': ['stable']},
 {'device_provider_name': 'schlage',
  'display_name': 'Schlage',
  'image_url': 'https://connect.getseam.com/assets/images/logos/schlage_logo_square.png',
  'provider_categories': ['stable', 'consumer_smartlocks']},
 {'device_provider_name': 'smartthings',
  'display_name': 'SmartThings',
  'image_url': 'https://connect.getseam.com/assets/images/logos/smartthings_logo_square.png',
  'provider_categories': ['stable', 'consumer_smartlocks']},
 {'device_provider_name': 'tedee',
  'display_name': 'Tedee',
  'image_url': 'https://connect.getseam.com/assets/images/logos/tedee.png',
  'provider_categories': ['stable', 'consumer_smartlocks']},
 {'device_provider_name': 'ttlock',
  'display_name': 'TTLock',
  'image_url': 'https://connect.getseam.com/assets/images/logos/ttlock_logo_square.png',
  'provider_categories': ['stable', 'consumer_smartlocks']},
 {'device_provider_name': 'wyze',
  'display_name': 'Wyze',
  'image_url': 'https://connect.getseam.com/assets/images/logos/wyze_logo_square.png',
  'provider_categories': ['stable', 'consumer_smartlocks']},
 {'device_provider_name': 'yale',
  'display_name': 'Yale',
  'image_url': 'https://connect.getseam.com/assets/images/logos/yale_logo_square.png',
  'provider_categories': ['stable', 'consumer_smartlocks']}]
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "device_providers": [
    {
      "device_provider_name": "august",
      "display_name": "August",
      "image_url": "https://connect.getseam.com/assets/images/logos/august_logo_square.png",
      "provider_categories": [
        "stable",
        "consumer_smartlocks"
      ]
    },
    {
      "device_provider_name": "avigilon_alta",
      "display_name": "Avigilon Alta",
      "image_url": "https://connect.getseam.com/assets/images/logos/avigilon_alta_logo_openpath_square.png",
      "provider_categories": [
        "stable"
      ]
    },
    {
      "device_provider_name": "brivo",
      "display_name": "Brivo",
      "image_url": "https://connect.getseam.com/assets/images/logos/brivo_logo_square.png",
      "provider_categories": [
        "stable"
      ]
    },
    {
      "device_provider_name": "controlbyweb",
      "display_name": "ControlByWeb",
      "image_url": "https://connect.getseam.com/assets/images/logos/controlbyweb_logo_square.png",
      "provider_categories": [
        "stable"
      ]
    },
    {
      "device_provider_name": "dormakaba_oracode",
      "display_name": "Dormakaba Oracode",
      "image_url": "https://connect.getseam.com/assets/images/logos/dormakaba_logo_square.png",
      "provider_categories": [
        "stable"
      ]
    },
    {
      "device_provider_name": "ecobee",
      "display_name": "Ecobee",
      "image_url": "https://connect.getseam.com/assets/images/logos/ecobee_logo_square.png",
      "provider_categories": [
        "stable",
        "thermostats"
      ]
    },
    {
      "device_provider_name": "four_suites",
      "display_name": "4SUITES",
      "image_url": "https://connect.getseam.com/assets/images/logos/four_suites_logo_square.png",
      "provider_categories": [
        "stable"
      ]
    },
    {
      "device_provider_name": "igloohome",
      "display_name": "Igloo Home",
      "image_url": "https://connect.getseam.com/assets/images/logos/igloohome_logo_square.png",
      "provider_categories": [
        "stable",
        "consumer_smartlocks"
      ]
    },
    {
      "device_provider_name": "kwikset",
      "display_name": "Kwikset",
      "image_url": "https://connect.getseam.com/assets/images/logos/kwikset_logo_square.png",
      "provider_categories": [
        "stable",
        "consumer_smartlocks"
      ]
    },
    {
      "device_provider_name": "lockly",
      "display_name": "Lockly",
      "image_url": "https://connect.getseam.com/assets/images/logos/lockly_logo_square.png",
      "provider_categories": [
        "stable"
      ]
    },
    {
      "device_provider_name": "minut",
      "display_name": "Minut",
      "image_url": "https://connect.getseam.com/assets/images/logos/minut_logo_wordmark.png",
      "provider_categories": [
        "stable",
        "noise_sensors"
      ]
    },
    {
      "device_provider_name": "my_2n",
      "display_name": "My2N",
      "image_url": "https://connect.getseam.com/assets/images/logos/2n_logo_square.png",
      "provider_categories": [
        "stable"
      ]
    },
    {
      "device_provider_name": "nest",
      "display_name": "Google Nest Thermostats",
      "image_url": "https://connect.getseam.com/assets/images/logos/nest_logo_square.png",
      "provider_categories": [
        "stable",
        "thermostats"
      ]
    },
    {
      "device_provider_name": "noiseaware",
      "display_name": "Noiseaware",
      "image_url": "https://connect.getseam.com/assets/images/logos/noiseaware_logo_square.png",
      "provider_categories": [
        "stable",
        "noise_sensors"
      ]
    },
    {
      "device_provider_name": "nuki",
      "display_name": "Nuki",
      "image_url": "https://connect.getseam.com/assets/images/logos/nuki_logo_square.png",
      "provider_categories": [
        "stable",
        "consumer_smartlocks"
      ]
    },
    {
      "device_provider_name": "salto",
      "display_name": "Salto",
      "image_url": "https://connect.getseam.com/assets/images/logos/salto_logo_square.png",
      "provider_categories": [
        "stable"
      ]
    },
    {
      "device_provider_name": "schlage",
      "display_name": "Schlage",
      "image_url": "https://connect.getseam.com/assets/images/logos/schlage_logo_square.png",
      "provider_categories": [
        "stable",
        "consumer_smartlocks"
      ]
    },
    {
      "device_provider_name": "smartthings",
      "display_name": "SmartThings",
      "image_url": "https://connect.getseam.com/assets/images/logos/smartthings_logo_square.png",
      "provider_categories": [
        "stable",
        "consumer_smartlocks"
      ]
    },
    {
      "device_provider_name": "tedee",
      "display_name": "Tedee",
      "image_url": "https://connect.getseam.com/assets/images/logos/tedee.png",
      "provider_categories": [
        "stable",
        "consumer_smartlocks"
      ]
    },
    {
      "device_provider_name": "ttlock",
      "display_name": "TTLock",
      "image_url": "https://connect.getseam.com/assets/images/logos/ttlock_logo_square.png",
      "provider_categories": [
        "stable",
        "consumer_smartlocks"
      ]
    },
    {
      "device_provider_name": "wyze",
      "display_name": "Wyze",
      "image_url": "https://connect.getseam.com/assets/images/logos/wyze_logo_square.png",
      "provider_categories": [
        "stable",
        "consumer_smartlocks"
      ]
    },
    {
      "device_provider_name": "yale",
      "display_name": "Yale",
      "image_url": "https://connect.getseam.com/assets/images/logos/yale_logo_square.png",
      "provider_categories": [
        "stable",
        "consumer_smartlocks"
      ]
    }
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
[
  {
    device_provider_name: 'august',
    display_name: 'August',
    image_url: 'https://connect.getseam.com/assets/images/logos/august_logo_square.png',
    provider_categories: [ 'stable', 'consumer_smartlocks' ]
  },
  {
    device_provider_name: 'avigilon_alta',
    display_name: 'Avigilon Alta',
    image_url: 'https://connect.getseam.com/assets/images/logos/avigilon_alta_logo_openpath_square.png',
    provider_categories: [ 'stable' ]
  },
  {
    device_provider_name: 'brivo',
    display_name: 'Brivo',
    image_url: 'https://connect.getseam.com/assets/images/logos/brivo_logo_square.png',
    provider_categories: [ 'stable' ]
  },
  {
    device_provider_name: 'controlbyweb',
    display_name: 'ControlByWeb',
    image_url: 'https://connect.getseam.com/assets/images/logos/controlbyweb_logo_square.png',
    provider_categories: [ 'stable' ]
  },
  {
    device_provider_name: 'dormakaba_oracode',
    display_name: 'Dormakaba Oracode',
    image_url: 'https://connect.getseam.com/assets/images/logos/dormakaba_logo_square.png',
    provider_categories: [ 'stable' ]
  },
  {
    device_provider_name: 'ecobee',
    display_name: 'Ecobee',
    image_url: 'https://connect.getseam.com/assets/images/logos/ecobee_logo_square.png',
    provider_categories: [ 'stable', 'thermostats' ]
  },
  {
    device_provider_name: 'four_suites',
    display_name: '4SUITES',
    image_url: 'https://connect.getseam.com/assets/images/logos/four_suites_logo_square.png',
    provider_categories: [ 'stable' ]
  },
  {
    device_provider_name: 'igloohome',
    display_name: 'Igloo Home',
    image_url: 'https://connect.getseam.com/assets/images/logos/igloohome_logo_square.png',
    provider_categories: [ 'stable', 'consumer_smartlocks' ]
  },
  {
    device_provider_name: 'kwikset',
    display_name: 'Kwikset',
    image_url: 'https://connect.getseam.com/assets/images/logos/kwikset_logo_square.png',
    provider_categories: [ 'stable', 'consumer_smartlocks' ]
  },
  {
    device_provider_name: 'lockly',
    display_name: 'Lockly',
    image_url: 'https://connect.getseam.com/assets/images/logos/lockly_logo_square.png',
    provider_categories: [ 'stable' ]
  },
  {
    device_provider_name: 'minut',
    display_name: 'Minut',
    image_url: 'https://connect.getseam.com/assets/images/logos/minut_logo_wordmark.png',
    provider_categories: [ 'stable', 'noise_sensors' ]
  },
  {
    device_provider_name: 'my_2n',
    display_name: 'My2N',
    image_url: 'https://connect.getseam.com/assets/images/logos/2n_logo_square.png',
    provider_categories: [ 'stable' ]
  },
  {
    device_provider_name: 'nest',
    display_name: 'Google Nest Thermostats',
    image_url: 'https://connect.getseam.com/assets/images/logos/nest_logo_square.png',
    provider_categories: [ 'stable', 'thermostats' ]
  },
  {
    device_provider_name: 'noiseaware',
    display_name: 'Noiseaware',
    image_url: 'https://connect.getseam.com/assets/images/logos/noiseaware_logo_square.png',
    provider_categories: [ 'stable', 'noise_sensors' ]
  },
  {
    device_provider_name: 'nuki',
    display_name: 'Nuki',
    image_url: 'https://connect.getseam.com/assets/images/logos/nuki_logo_square.png',
    provider_categories: [ 'stable', 'consumer_smartlocks' ]
  },
  {
    device_provider_name: 'salto',
    display_name: 'Salto',
    image_url: 'https://connect.getseam.com/assets/images/logos/salto_logo_square.png',
    provider_categories: [ 'stable' ]
  },
  {
    device_provider_name: 'schlage',
    display_name: 'Schlage',
    image_url: 'https://connect.getseam.com/assets/images/logos/schlage_logo_square.png',
    provider_categories: [ 'stable', 'consumer_smartlocks' ]
  },
  {
    device_provider_name: 'smartthings',
    display_name: 'SmartThings',
    image_url: 'https://connect.getseam.com/assets/images/logos/smartthings_logo_square.png',
    provider_categories: [ 'stable', 'consumer_smartlocks' ]
  },
  {
    device_provider_name: 'tedee',
    display_name: 'Tedee',
    image_url: 'https://connect.getseam.com/assets/images/logos/tedee.png',
    provider_categories: [ 'stable', 'consumer_smartlocks' ]
  },
  {
    device_provider_name: 'ttlock',
    display_name: 'TTLock',
    image_url: 'https://connect.getseam.com/assets/images/logos/ttlock_logo_square.png',
    provider_categories: [ 'stable', 'consumer_smartlocks' ]
  },
  {
    device_provider_name: 'wyze',
    display_name: 'Wyze',
    image_url: 'https://connect.getseam.com/assets/images/logos/wyze_logo_square.png',
    provider_categories: [ 'stable', 'consumer_smartlocks' ]
  },
  {
    device_provider_name: 'yale',
    display_name: 'Yale',
    image_url: 'https://connect.getseam.com/assets/images/logos/yale_logo_square.png',
    provider_categories: [ 'stable', 'consumer_smartlocks' ]
  }
]
```
{% endtab %}

{% tab title="Ruby" %}
```
[<Seam::DeviceProvider:0x00438
  device_provider_name="august"
  display_name="August"
  image_url="https://connect.getseam.com/assets/images/logos/august_logo_square.png"
  provider_categories=["stable", "consumer_smartlocks"]>, <Seam::DeviceProvider:0x00460
  device_provider_name="avigilon_alta"
  display_name="Avigilon Alta"
  image_url="https://connect.getseam.com/assets/images/logos/avigilon_alta_logo_openpath_square.png"
  provider_categories=["stable"]>, <Seam::DeviceProvider:0x00488
  device_provider_name="brivo"
  display_name="Brivo"
  image_url="https://connect.getseam.com/assets/images/logos/brivo_logo_square.png"
  provider_categories=["stable"]>, <Seam::DeviceProvider:0x004b0
  device_provider_name="controlbyweb"
  display_name="ControlByWeb"
  image_url="https://connect.getseam.com/assets/images/logos/controlbyweb_logo_square.png"
  provider_categories=["stable"]>, <Seam::DeviceProvider:0x004d8
  device_provider_name="dormakaba_oracode"
  display_name="Dormakaba Oracode"
  image_url="https://connect.getseam.com/assets/images/logos/dormakaba_logo_square.png"
  provider_categories=["stable"]>, <Seam::DeviceProvider:0x00500
  device_provider_name="ecobee"
  display_name="Ecobee"
  image_url="https://connect.getseam.com/assets/images/logos/ecobee_logo_square.png"
  provider_categories=["stable", "thermostats"]>, <Seam::DeviceProvider:0x00528
  device_provider_name="four_suites"
  display_name="4SUITES"
  image_url="https://connect.getseam.com/assets/images/logos/four_suites_logo_square.png"
  provider_categories=["stable"]>, <Seam::DeviceProvider:0x00578
  device_provider_name="igloohome"
  display_name="Igloo Home"
  image_url="https://connect.getseam.com/assets/images/logos/igloohome_logo_square.png"
  provider_categories=["stable", "consumer_smartlocks"]>, <Seam::DeviceProvider:0x005a0
  device_provider_name="kwikset"
  display_name="Kwikset"
  image_url="https://connect.getseam.com/assets/images/logos/kwikset_logo_square.png"
  provider_categories=["stable", "consumer_smartlocks"]>, <Seam::DeviceProvider:0x005c8
  device_provider_name="lockly"
  display_name="Lockly"
  image_url="https://connect.getseam.com/assets/images/logos/lockly_logo_square.png"
  provider_categories=["stable"]>, <Seam::DeviceProvider:0x005f0
  device_provider_name="minut"
  display_name="Minut"
  image_url="https://connect.getseam.com/assets/images/logos/minut_logo_wordmark.png"
  provider_categories=["stable", "noise_sensors"]>, <Seam::DeviceProvider:0x00618
  device_provider_name="my_2n"
  display_name="My2N"
  image_url="https://connect.getseam.com/assets/images/logos/2n_logo_square.png"
  provider_categories=["stable"]>, <Seam::DeviceProvider:0x00640
  device_provider_name="nest"
  display_name="Google Nest Thermostats"
  image_url="https://connect.getseam.com/assets/images/logos/nest_logo_square.png"
  provider_categories=["stable", "thermostats"]>, <Seam::DeviceProvider:0x00668
  device_provider_name="noiseaware"
  display_name="Noiseaware"
  image_url="https://connect.getseam.com/assets/images/logos/noiseaware_logo_square.png"
  provider_categories=["stable", "noise_sensors"]>, <Seam::DeviceProvider:0x00690
  device_provider_name="nuki"
  display_name="Nuki"
  image_url="https://connect.getseam.com/assets/images/logos/nuki_logo_square.png"
  provider_categories=["stable", "consumer_smartlocks"]>, <Seam::DeviceProvider:0x006b8
  device_provider_name="salto"
  display_name="Salto"
  image_url="https://connect.getseam.com/assets/images/logos/salto_logo_square.png"
  provider_categories=["stable"]>, <Seam::DeviceProvider:0x006e0
  device_provider_name="schlage"
  display_name="Schlage"
  image_url="https://connect.getseam.com/assets/images/logos/schlage_logo_square.png"
  provider_categories=["stable", "consumer_smartlocks"]>, <Seam::DeviceProvider:0x00708
  device_provider_name="smartthings"
  display_name="SmartThings"
  image_url="https://connect.getseam.com/assets/images/logos/smartthings_logo_square.png"
  provider_categories=["stable", "consumer_smartlocks"]>, <Seam::DeviceProvider:0x00730
  device_provider_name="tedee"
  display_name="Tedee"
  image_url="https://connect.getseam.com/assets/images/logos/tedee.png"
  provider_categories=["stable", "consumer_smartlocks"]>, <Seam::DeviceProvider:0x00758
  device_provider_name="ttlock"
  display_name="TTLock"
  image_url="https://connect.getseam.com/assets/images/logos/ttlock_logo_square.png"
  provider_categories=["stable", "consumer_smartlocks"]>, <Seam::DeviceProvider:0x00780
  device_provider_name="wyze"
  display_name="Wyze"
  image_url="https://connect.getseam.com/assets/images/logos/wyze_logo_square.png"
  provider_categories=["stable", "consumer_smartlocks"]>, <Seam::DeviceProvider:0x007a8
  device_provider_name="yale"
  display_name="Yale"
  image_url="https://connect.getseam.com/assets/images/logos/yale_logo_square.png"
  provider_categories=["stable", "consumer_smartlocks"]>]
```
{% endtab %}

{% tab title="C#" %}
```json
{
  "device_provider_name": "august",
  "display_name": "August",
  "image_url": "https://connect.getseam.com/assets/images/logos/august_logo_square.png",
  "provider_categories": [
    "stable",
    "consumer_smartlocks"
  ]
}
{
  "device_provider_name": "avigilon_alta",
  "display_name": "Avigilon Alta",
  "image_url": "https://connect.getseam.com/assets/images/logos/avigilon_alta_logo_openpath_square.png",
  "provider_categories": [
    "stable"
  ]
}
{
  "device_provider_name": "brivo",
  "display_name": "Brivo",
  "image_url": "https://connect.getseam.com/assets/images/logos/brivo_logo_square.png",
  "provider_categories": [
    "stable"
  ]
}
{
  "device_provider_name": "controlbyweb",
  "display_name": "ControlByWeb",
  "image_url": "https://connect.getseam.com/assets/images/logos/controlbyweb_logo_square.png",
  "provider_categories": [
    "stable"
  ]
}
{
  "device_provider_name": "dormakaba_oracode",
  "display_name": "Dormakaba Oracode",
  "image_url": "https://connect.getseam.com/assets/images/logos/dormakaba_logo_square.png",
  "provider_categories": [
    "stable"
  ]
}
{
  "device_provider_name": "ecobee",
  "display_name": "Ecobee",
  "image_url": "https://connect.getseam.com/assets/images/logos/ecobee_logo_square.png",
  "provider_categories": [
    "stable",
    "thermostats"
  ]
}
{
  "device_provider_name": "four_suites",
  "display_name": "4SUITES",
  "image_url": "https://connect.getseam.com/assets/images/logos/four_suites_logo_square.png",
  "provider_categories": [
    "stable"
  ]
}
{
  "device_provider_name": "igloohome",
  "display_name": "Igloo Home",
  "image_url": "https://connect.getseam.com/assets/images/logos/igloohome_logo_square.png",
  "provider_categories": [
    "stable",
    "consumer_smartlocks"
  ]
}
{
  "device_provider_name": "kwikset",
  "display_name": "Kwikset",
  "image_url": "https://connect.getseam.com/assets/images/logos/kwikset_logo_square.png",
  "provider_categories": [
    "stable",
    "consumer_smartlocks"
  ]
}
{
  "device_provider_name": "lockly",
  "display_name": "Lockly",
  "image_url": "https://connect.getseam.com/assets/images/logos/lockly_logo_square.png",
  "provider_categories": [
    "stable"
  ]
}
{
  "device_provider_name": "minut",
  "display_name": "Minut",
  "image_url": "https://connect.getseam.com/assets/images/logos/minut_logo_wordmark.png",
  "provider_categories": [
    "stable",
    "noise_sensors"
  ]
}
{
  "device_provider_name": "my_2n",
  "display_name": "My2N",
  "image_url": "https://connect.getseam.com/assets/images/logos/2n_logo_square.png",
  "provider_categories": [
    "stable"
  ]
}
{
  "device_provider_name": "nest",
  "display_name": "Google Nest Thermostats",
  "image_url": "https://connect.getseam.com/assets/images/logos/nest_logo_square.png",
  "provider_categories": [
    "stable",
    "thermostats"
  ]
},
{
  "device_provider_name": "noiseaware",
  "display_name": "Noiseaware",
  "image_url": "https://connect.getseam.com/assets/images/logos/noiseaware_logo_square.png",
  "provider_categories": [
    "stable",
    "noise_sensors"
  ]
}
{
  "device_provider_name": "nuki",
  "display_name": "Nuki",
  "image_url": "https://connect.getseam.com/assets/images/logos/nuki_logo_square.png",
  "provider_categories": [
    "stable",
    "consumer_smartlocks"
  ]
}
{
  "device_provider_name": "salto",
  "display_name": "Salto",
  "image_url": "https://connect.getseam.com/assets/images/logos/salto_logo_square.png",
  "provider_categories": [
    "stable"
  ]
}
{
  "device_provider_name": "schlage",
  "display_name": "Schlage",
  "image_url": "https://connect.getseam.com/assets/images/logos/schlage_logo_square.png",
  "provider_categories": [
    "stable",
    "consumer_smartlocks"
  ]
}
{
  "device_provider_name": "smartthings",
  "display_name": "SmartThings",
  "image_url": "https://connect.getseam.com/assets/images/logos/smartthings_logo_square.png",
  "provider_categories": [
    "stable",
    "consumer_smartlocks"
  ]
}
{
  "device_provider_name": "tedee",
  "display_name": "Tedee",
  "image_url": "https://connect.getseam.com/assets/images/logos/tedee.png",
  "provider_categories": [
    "stable",
    "consumer_smartlocks"
  ]
}
{
  "device_provider_name": "ttlock",
  "display_name": "TTLock",
  "image_url": "https://connect.getseam.com/assets/images/logos/ttlock_logo_square.png",
  "provider_categories": [
    "stable",
    "consumer_smartlocks"
  ]
}
{
  "device_provider_name": "wyze",
  "display_name": "Wyze",
  "image_url": "https://connect.getseam.com/assets/images/logos/wyze_logo_square.png",
  "provider_categories": [
    "stable"
  ]
}
{
  "device_provider_name": "yale",
  "display_name": "Yale",
  "image_url": "https://connect.getseam.com/assets/images/logos/yale_logo_square.png",
  "provider_categories": [
    "stable",
    "consumer_smartlocks"
  ]
}
```
{% endtab %}

{% tab title="Java" %}
```json
[{
  "device_provider_name" : "august",
  "display_name" : "August",
  "image_url" : "https://connect.getseam.com/assets/images/logos/august_logo_square.png",
  "provider_categories" : [ "stable", "consumer_smartlocks" ]
}, {
  "device_provider_name" : "avigilon_alta",
  "display_name" : "Avigilon Alta",
  "image_url" : "https://connect.getseam.com/assets/images/logos/avigilon_alta_logo_openpath_square.png",
  "provider_categories" : [ "stable" ]
}, {
  "device_provider_name" : "brivo",
  "display_name" : "Brivo",
  "image_url" : "https://connect.getseam.com/assets/images/logos/brivo_logo_square.png",
  "provider_categories" : [ "stable" ]
}, {
  "device_provider_name" : "controlbyweb",
  "display_name" : "ControlByWeb",
  "image_url" : "https://connect.getseam.com/assets/images/logos/controlbyweb_logo_square.png",
  "provider_categories" : [ "stable" ]
}, {
  "device_provider_name" : "dormakaba_oracode",
  "display_name" : "Dormakaba Oracode",
  "image_url" : "https://connect.getseam.com/assets/images/logos/dormakaba_logo_square.png",
  "provider_categories" : [ "stable" ]
}, {
  "device_provider_name" : "ecobee",
  "display_name" : "Ecobee",
  "image_url" : "https://connect.getseam.com/assets/images/logos/ecobee_logo_square.png",
  "provider_categories" : [ "stable", "thermostats" ]
}, {
  "device_provider_name" : "four_suites",
  "display_name" : "4SUITES",
  "image_url" : "https://connect.getseam.com/assets/images/logos/four_suites_logo_square.png",
  "provider_categories" : [ "stable" ]
}, {
  "device_provider_name" : "igloohome",
  "display_name" : "Igloo Home",
  "image_url" : "https://connect.getseam.com/assets/images/logos/igloohome_logo_square.png",
  "provider_categories" : [ "stable", "consumer_smartlocks" ]
}, {
  "device_provider_name" : "kwikset",
  "display_name" : "Kwikset",
  "image_url" : "https://connect.getseam.com/assets/images/logos/kwikset_logo_square.png",
  "provider_categories" : [ "stable", "consumer_smartlocks" ]
}, {
  "device_provider_name" : "lockly",
  "display_name" : "Lockly",
  "image_url" : "https://connect.getseam.com/assets/images/logos/lockly_logo_square.png",
  "provider_categories" : [ "stable" ]
}, {
  "device_provider_name" : "minut",
  "display_name" : "Minut",
  "image_url" : "https://connect.getseam.com/assets/images/logos/minut_logo_wordmark.png",
  "provider_categories" : [ "stable", "noise_sensors" ]
}, {
  "device_provider_name" : "my_2n",
  "display_name" : "My2N",
  "image_url" : "https://connect.getseam.com/assets/images/logos/2n_logo_square.png",
  "provider_categories" : [ "stable" ]
}, {
  "device_provider_name": "nest",
  "display_name": "Google Nest Thermostats",
  "image_url": "https://connect.getseam.com/assets/images/logos/nest_logo_square.png",
  "provider_categories": [ "stable", "thermostats" ]
}, {
  "device_provider_name" : "noiseaware",
  "display_name" : "Noiseaware",
  "image_url" : "https://connect.getseam.com/assets/images/logos/noiseaware_logo_square.png",
  "provider_categories" : [ "stable", "noise_sensors" ]
}, {
  "device_provider_name" : "nuki",
  "display_name" : "Nuki",
  "image_url" : "https://connect.getseam.com/assets/images/logos/nuki_logo_square.png",
  "provider_categories" : [ "stable", "consumer_smartlocks" ]
}, {
  "device_provider_name" : "salto",
  "display_name" : "Salto",
  "image_url" : "https://connect.getseam.com/assets/images/logos/salto_logo_square.png",
  "provider_categories" : [ "stable" ]
}, {
  "device_provider_name" : "schlage",
  "display_name" : "Schlage",
  "image_url" : "https://connect.getseam.com/assets/images/logos/schlage_logo_square.png",
  "provider_categories" : [ "stable", "consumer_smartlocks" ]
}, {
  "device_provider_name" : "smartthings",
  "display_name" : "SmartThings",
  "image_url" : "https://connect.getseam.com/assets/images/logos/smartthings_logo_square.png",
  "provider_categories" : [ "stable", "consumer_smartlocks" ]
}, {
  "device_provider_name" : "tedee",
  "display_name" : "Tedee",
  "image_url" : "https://connect.getseam.com/assets/images/logos/tedee.png",
  "provider_categories" : [ "stable", "consumer_smartlocks" ]
}, {
  "device_provider_name" : "ttlock",
  "display_name" : "TTLock",
  "image_url" : "https://connect.getseam.com/assets/images/logos/ttlock_logo_square.png",
  "provider_categories" : [ "stable", "consumer_smartlocks" ]
}, {
  "device_provider_name" : "wyze",
  "display_name" : "Wyze",
  "image_url" : "https://connect.getseam.com/assets/images/logos/wyze_logo_square.png",
  "provider_categories" : [ "stable" ]
}, {
  "device_provider_name" : "yale",
  "display_name" : "Yale",
  "image_url" : "https://connect.getseam.com/assets/images/logos/yale_logo_square.png",
  "provider_categories" : [ "stable", "consumer_smartlocks" ]
}]
```
{% endtab %}
{% endtabs %}
