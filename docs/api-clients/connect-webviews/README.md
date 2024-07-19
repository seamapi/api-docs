---
description: Use Connect Webviews to connect to your users' smart devices to the Seam API
---

# Connect Webviews

The `connect_webview` object represents a [Connect Webview](../../core-concepts/connect-webviews/). Connect Webviews are fully-embedded client-side components that you add to your app. Your users interact with your embedded Connect Webviews to link their IoT device accounts to Seam. That is, Connect Webviews walk your users through the process of logging in to their device accounts. Seam handles all the authentication steps, and—once your user has completed the authorization through your app—you can access and control their devices using the Seam API.

Connect Webviews perform credential validation, multifactor authentication (when applicable), and error handling for each device brand that Seam supports. Further, Connect Webviews work across all modern browsers and platforms, including Chrome, Safari, and Firefox.

To enable a user to connect their device account to Seam through your app, you must first create a `connect_webview`. Once created, this `connect_webview` includes a URL that you can use to open an [iframe](https://www.w3schools.com/html/html\_iframe.asp) or new window containing the Connect Webview for your user.

![](<../../.gitbook/assets/image (12).png>)

## `connect_webview` Properties

| **`connect_webview_id`**               | String (UUID)                              | ID of the Connect Webview                                                                                                                                                                                                                                                                                                     |
| -------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`accepted_providers`**               | Array of strings                           | List of accepted [device provider keys](./#device-provider-keys)                                                                                                                                                                                                                                                              |
| **`accepted_devices`**                 | Array of strings                           | List of accepted [devices](../../core-concepts/devices/)                                                                                                                                                                                                                                                                      |
| **`any_provider_allowed`**             | Boolean                                    | Indicates whether any provider is allowed                                                                                                                                                                                                                                                                                     |
| **`any_device_allowed`**               | Boolean                                    | Indicates whether any device is allowed                                                                                                                                                                                                                                                                                       |
| **`selected_provider`**                | String                                     | Selected provider of the Connect Webview, one of [device provider keys](./#device-provider-keys)                                                                                                                                                                                                                              |
| **`custom_metadata`**                  | <p>JSON object</p><p><em>Optional</em></p> | <p>A set of up to 50 keys, with key names up to 40 characters long. Accepts string or Boolean values. Strings are limited to 500 characters<br>For more information, see <a href="../../core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md">Attaching Custom Data to the Connect Webview</a>.</p> |
| **`automatically_manage_new_devices`** | Boolean                                    | Indicates whether Seam should [import all new devices](../../core-concepts/connect-webviews/customizing-connect-webviews.md#automatically\_manage\_new\_devices) for the connected account to make these devices available for use and management by the Seam API                                                             |
| **`wait_for_device_creation`**         | Boolean                                    | Indicates whether Seam should [finish syncing all devices](../../core-concepts/connect-webviews/customizing-connect-webviews.md#wait\_for\_device\_creation) in a newly-connected account before completing the associated Connect Webview                                                                                    |
| **`custom_redirect_url`**              | <p>String</p><p><em>Optional</em></p>      | If set, the Connect Webview redirects to this URL when the user successfully pairs a device or, if the `custom_redirect_failure_url` is not set, when an unexpected error occurs                                                                                                                                              |
| **`custom_redirect_failure_url`**      | <p>String</p><p><em>Optional</em></p>      | If set, the Connect Webview redirects to this URL when an unexpected error occurs                                                                                                                                                                                                                                             |
| **`status`**                           | String                                     | `pending` or `authorized`                                                                                                                                                                                                                                                                                                     |
| **`url`**                              | String                                     | URL to the webview                                                                                                                                                                                                                                                                                                            |
| **`login_successful`**                 | Boolean                                    | Indicates whether the user logged in successfully using the Connect Webview                                                                                                                                                                                                                                                   |
| **`connected_account_id`**             | String (UUID)                              | ID of the Connected Account that was created after the user successfully logged in                                                                                                                                                                                                                                            |
| **`created_at`**                       | String                                     | Date and time at which the Connect Webview was created                                                                                                                                                                                                                                                                        |
| **`authorized_at`**                    | String                                     | Date and time at which the user authorized (through the Connect Webview) the management of their devices                                                                                                                                                                                                                      |
| **`workspace_id`**                     | String (UUID)                              | ID of the [workspace](../../core-concepts/workspaces/) that contains the Connect Webview                                                                                                                                                                                                                                      |

### Accepted Provider Category Keys

| key                   | Description                                                        |
| --------------------- | ------------------------------------------------------------------ |
| `stable`              | Only returns provider integrations marked as stable.               |
| `consumer_smartlocks` | Only returns provider integrations marked as consumer smart locks. |
| `thermostats`         | Only returns provider integrations marked as thermostats.          |
| `noise_sensors`       | Only returns provider instegrations marked as noise sensors.       |

{% hint style="info" %}
To list all providers within a category, use the [List Device Providers](../devices/list-device-providers.md) method with the desired `provider_category` filter.
{% endhint %}

### Device Provider Keys

To list all provider keys, use the [List Device Providers](../devices/list-device-providers.md) method with no filters.

| Provider Name                                                                                                                          | Device Provider Key             |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [2N](../../device-guides/2n-intercom-systems.md)                                                                                       | `my_2n`                         |
| [4SUITES](../../device-and-system-integration-guides/4suites-locks/)                                                                   | `four_suites`                   |
| [Akuvox](https://akuvox.com/)                                                                                                          | `akuvox`                        |
| [ASSA ABLOY Credential Service](../../device-guides/assa-abloy-credential-services-credential-manager-in-development.md)               | `assa_abloy_credential_service` |
| [ASSA ABLOY Visionline Access Control System](../../device-and-system-integration-guides/assa-abloy-visionline-access-control-system/) | `visionline`                    |
| [August Home](../../device-guides/august-locks.md)                                                                                     | `august`                        |
| [Avigilon Alta](../../device-guides/avigilon-alta-access-system.md)                                                                    | `avigilon_alta`                 |
| [Brivo](../../device-guides/brivo-access.md)                                                                                           | `brivo`                         |
| [ControlByWeb](../../device-guides/get-started-with-controlbyweb-devices.md)                                                           | `controlbyweb`                  |
| [DoorKing](https://www.doorking.com/)                                                                                                  | `doorking`                      |
| [dormakaba Oracode](../../device-guides/dormakaba-oracode-locks.md)                                                                    | `dormakaba_oracode`             |
| [ecobee](../../device-guides/ecobee-thermostats.md)                                                                                    | `ecobee`                        |
| [Genie Aladdin Connect](https://www.geniecompany.com/aladdin-connect-by-genie)                                                         | `genie`                         |
| [Honeywell Resideo](../../device-and-system-integration-guides/honeywell-thermostats/)                                                 | `honeywell_resideo`             |
| [igloohome](../../device-guides/igloohome-locks.md)                                                                                    | `igloohome`                     |
| [Kwikset](../../device-guides/kwikset-locks.md)                                                                                        | `kwikset`                       |
| [Latch](../../device-and-system-integration-guides/latch-access-control-system/)                                                       | `latch`                         |
| [Linear](https://linear-solutions.com/)                                                                                                | `linear`                        |
| [Lockly](../../device-and-system-integration-guides/lockly-locks/)                                                                     | `lockly`                        |
| [Minut](../../device-guides/minut-sensors.md)                                                                                          | `minut`                         |
| [Nest](../../device-guides/google-nest-thermostats/)                                                                                   | `google_nest`                   |
| [NoiseAware](../../device-guides/noiseaware-sensors.md)                                                                                | `noiseaware`                    |
| [Nuki](../../device-guides/nuki-locks.md)                                                                                              | `nuki`                          |
| [PTI Storlogix Cloud](../../device-guides/pti-storlogix-cloud.md)                                                                      | `pti`                           |
| [Salto](../../device-guides/salto-locks.md)                                                                                            | `salto`                         |
| [Schlage](https://www.schlage.com/en/home/products/products-smart-locks.html)                                                          | `schlage`                       |
| [SmartThings](https://www.smartthings.com/)                                                                                            | `smartthings`                   |
| [Tedee](../../device-and-system-integration-guides/tedee-locks/)                                                                       | `tedee`                         |
| [TTLock](../../device-guides/ttlock-locks.md)                                                                                          | `ttlock`                        |
| [Wyze](../../device-guides/wyze-locks.md)                                                                                              | `wyze`                          |
| [Yale](../../device-guides/yale-locks.md)                                                                                              | `yale`                          |

## `connect_webview` Methods

You can perform the following actions on `connect_webview` objects:

* [Create a Connect Webview](create-a-connect-webview.md)
* [List Connect Webviews](list-connect-webviews.md)
* [Get a Connect Webview](get-a-connect-webview.md)
* [Check a Connect Webview](get-a-connect-webview.md)
* [Delete a Connect Webview](delete-a-connect-webview.md)

Also, learn about [embedding a Connect Webview](embedding-a-connect-webview.md) in your app.
