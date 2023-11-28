---
description: Use Connect Webviews to connect to your users' smart devices to the Seam API
---

# Connect Webviews

The `connect_webview` object represents a [Connect Webview](../../core-concepts/connect-webviews/). Connect Webviews are fully-embedded client-side components that you add to your app. Your users interact with your embedded Connect Webviews to link their IoT device accounts to Seam. That is, Connect Webviews walk your users through the process of logging in to their device accounts. Seam handles all the authentication steps, and—once your user has completed the authorization through your app—you can access and control their devices using the Seam API.

Connect Webviews perform credential validation, multifactor authentication (when applicable), and error handling for each device brand that Seam supports. Further, Connect Webviews work across all modern browsers and platforms, including Chrome, Safari, and Firefox.

To enable a user to connect their device account to Seam through your app, you must first create a `connect_webview`. Once created, this `connect_webview` includes a URL that you can use to open an [iframe](https://www.w3schools.com/html/html\_iframe.asp) or new window containing the Connect Webview for your user.

![](<../../.gitbook/assets/image (12).png>)

## `connect_webview` Properties

| **`connect_webview_id`**          | uuid             | ID of the Connect Webview                                                                                                          |
| --------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **`accepted_providers`**          | string\[]        | List of accepted [device providers keys](./#device-provider-keys)                                                                  |
| **`selected_provider`**           | string           | Selected provider of the webview, one of [device providers keys](./#device-provider-keys)                                          |
| **`custom_metadata`**             | object, optional | Specify up to 50 keys, with key names up to 40 characters long. Use any non-object value. Strings are limited to 500 characters.   |
| **`custom_redirect_url`**         | string, optional | If set, the Connect Webview will redirect to this url when the user successfully pairs a device, or runs into an unexpected error. |
| **`custom_redirect_failure_url`** | string, optional | If set, the Connect Webview will redirect to this url when an unexpected error occurs.                                             |
| **`status`**                      | string           | `pending` or `authorized`                                                                                                          |
| **`url`**                         | string           | URL to the webview                                                                                                                 |
| **`login_successful`**            | boolean          | Whether the user logged in successfully using the webview                                                                          |
| **`connected_account_id`**        | uuid             | ID of the Connected Account that was created after the user successfully logged in                                                 |

### Accepted Provider Category Keys

| key      | Description                                         |
| -------- | --------------------------------------------------- |
| `stable` | Only returns provider integration marked as stable. |

### Device Provider Keys

| Brand Name                                                                     | Device Provider Key | Device Features supported                                                    |
| ------------------------------------------------------------------------------ | ------------------- | ---------------------------------------------------------------------------- |
| [August Home](https://august.com/)                                             | `august`            | [Access Codes](../access-codes/), [Locks](../locks/)                         |
| [Noiseaware](https://noiseaware.com/)                                          | `noiseaware`        | [Noise Detection](broken-reference/)                                         |
| [Schlage Connect](https://www.schlage.com/en/home/smart-locks/connect.html)    | `schlage`           | [Access Codes](../access-codes/), [Locks](../locks/)                         |
| [SmartThings](https://www.smartthings.com/)                                    | `smartthings`       | [Access Codes](../access-codes/), [Locks](../locks/)                         |
| [ButterflyMX](https://butterflymx.com/)                                        | `butterflymx`       | [Locks](../locks/)                                                           |
| [Genie Aladdin Connect](https://www.geniecompany.com/aladdin-connect-by-genie) | `genie`             | [Locks](../locks/)                                                           |
| [Salto](https://saltosystems.com/)                                             | `salto`             | [Access Codes](../access-codes/), [Locks](../locks/)                         |
| [Yale](https://www.yalehome.com/)                                              | `yale_access`       | [Access Codes](../access-codes/), [Locks](../locks/)                         |
| [Brivo](https://www.brivo.com/)                                                | `brivo`             | [Locks](../locks/)                                                           |
| [Akuvox](https://akuvox.com/)                                                  | `akuvox`            | [Access Codes](../access-codes/), [Locks](../locks/)                         |
| [DoorKing](https://www.doorking.com/)                                          | `doorking`          | [Remote Unlock](../locks/unlock-a-lock.md)                                   |
| [Linear](https://linear-solutions.com/)                                        | `linear`            | [Access Codes](../access-codes/), [Remote Unlock](../locks/unlock-a-lock.md) |
| [Minut](https://www.minut.com/)                                                | `minut`             | Noise Detection                                                              |

## `connect_webview` Methods

You can perform the following actions on `connect_webview` objects:

* [Create a Connect Webview](create-a-connect-webview.md)
* [List Connect Webviews](list-connect-webviews.md)
* [Get a Connect Webview](get-a-connect-webview.md)
* [Check a Connect Webview](get-a-connect-webview.md)
* [Delete Webview](broken-reference/)
* [View Connect Webview](broken-reference/)
