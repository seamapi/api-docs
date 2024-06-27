---
description: >-
  Use Connect Webviews to enable your users to connect their devices and systems
  to Seam.
---

# Create a Connect Webview

To enable a user to connect their devices or systems to Seam, they must sign in to their device or system account. To enable a user to sign in, you create a `connect_webview`. After creating the Connect Webview object, you receive a URL that you can use to display the visual component of this Connect Webview for your user. You can open an iframe or new window to display the Connect Webview.

![This example shows how a Connect Webview looks when you display it to your user.](<../../.gitbook/assets/image (12).png>)

## Create a `connect_webview`

<mark style="color:green;">`POST`</mark> `https://connect.getseam.com/connect_webviews/create`

#### Request Body

| Name                                                   | Type                               | Description                                                                                                                     |
| ------------------------------------------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `accepted_providers`<mark style="color:red;">\*</mark> | String\[]                          | <p>Array of accepted</p><p>device provider keys. See</p><p><a href="./#device-provider-keys">Device Provider Keys</a>.</p>      |
| `custom_redirect_url`                                  | String                             | URL to redirect user to after provider login is complete.                                                                       |
| `custom_redirect_failure_url`                          | <p>String<br><em>Optional</em></p> | <p>Alternative URL to redirect the user on error. If this is not set, falls back to</p><p><code>custom_redirect_url</code>.</p> |

{% tabs %}
{% tab title="201: Created connect_webview successfully created" %}
```javascript
{
    "connect_webview": {
    	"connect_webview_id": "123e4567-e89b-12d3-a456-426614174000",
    "custom_metadata": {},
	"custom_redirect_url": null,
	"custom_redirect_failure_url": null,
	"url": "https://connect.getseam.com/v1/connect_webviews/view?connect_webview_id=02454094-1cab-4693-babc-afa9e1c55f09&auth_token=P7XLD4hYXva24WqwSKTC4pKQMP7v3zWUz",
	"workspace_id": "84dda4b8-f327-4d97-a720-e0504a13a441",
	"device_selection_mode": "none",
	"accepted_providers": [
		"smartthings"
	],
	"accepted_devices": [],
	"any_provider_allowed": false,
	"any_device_allowed": null,
	"created_at": "2022-02-07T18:33:50.271Z",
	"login_successful": false,
	"status": "pending"
    }
}
```
{% endtab %}

{% tab title="400: Bad Request " %}
```javascript
{
  "error": {
    "type": "invalid_input",
    "message": "Invalid enum value. Expected 'akuvox' | 'august' |  'schlage' | 'smartthings' | 'yale' | 'noiseaware' | 'salto' | 'doorking' | 'salto' | 'genie' | 'linear' | 'seam_relay_admin' for provided \"accepted_providers.0\"",
    "validation_errors": {
      "_errors": [],
      "accepted_providers": {
        "0": {
          "_errors": [
            "Invalid enum value. Expected 'akuvox' | 'august' |  'schlage' | 'smartthings' | 'yale' | 'noiseaware' | 'salto' | 'doorking' | 'salto' | 'genie' | 'linear' | 'seam_relay_admin'"
          ]
        },
        "_errors": []
      }
    },
    "request_id": "23bc6c4b-286f-4485-9531-a8f3300370cd"
  },
  "ok": false
}
```
{% endtab %}
{% endtabs %}

### Code Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
await seam.connectWebviews.create({
    provider_category: "stable",
});

/*{
  url: 'https://connect.getseam.com/connect_webviews/view?connect_webview_id=28fa1da1-d4ab-454c-a622-3ca95f22028a&auth_token=2r2Rn8V5QUtxE79gNhTmTK58KkuqrwU8d',
  status: 'pending',
  workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
  custom_metadata: {},
  accepted_devices: [],
  login_successful: false,
  selected_provider: null,
  accepted_providers: [
    'august',            'avigilon_alta',
    'brivo',             'schlage',
    'smartthings',       'yale',
    'nuki',              'salto',
    'controlbyweb',      'minut',
    'my_2n',             'kwikset',
    'tedee',             'ttlock',
    'nest',              'noiseaware',
    'igloohome',         'ecobee',
    'hubitat',           'four_suites',
    'dormakaba_oracode', 'lockly',
    'wyze'
  ],
  any_device_allowed: false,
  connect_webview_id: '28fa1da1-d4ab-454c-a622-3ca95f22028a',
  custom_redirect_url: null,
  any_provider_allowed: false,
  device_selection_mode: 'none',
  wait_for_device_creation: true,
  custom_redirect_failure_url: null,
  automatically_manage_new_devices: true,
  created_at: '2023-11-15T23:28:03.845Z',
  authorized_at: null
}*/
```
{% endtab %}

{% tab title="Python" %}
```python
seam.connect_webviews.create(provider_category="stable")

# ConnectWebview(workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be',
#              connect_webview_id='2c852289-ee42-49d0-bddc-0410b518003d',
#              status='pending',
#              url='https://connect.getseam.com/connect_webviews/view?connect_webview_id=2c852289-ee42-49d0-bddc-0410b518003d&#x26;auth_token=z7Wu2Lc85gYUbNUhdvCWaEhmQv61FziA',
#              login_successful=False,
#              device_selection_mode='none',
#              any_provider_allowed=False,
#              any_device_allowed=False,
#              created_at='2023-11-15T23:24:36.947Z',
#              custom_metadata={},
#              connected_account_id=None,
#              authorized_at=None,
#              custom_redirect_url=None,
#              custom_redirect_failure_url=None,
#              accepted_providers=['august',
#                                  'avigilon_alta',
#                                  'brivo',
#                                  'schlage',
#                                  'smartthings',
#                                  'yale',
#                                  'nuki',
#                                  'salto',
#                                  'controlbyweb',
#                                  'minut',
#                                  'my_2n',
#                                  'kwikset',
#                                  'tedee',
#                                  'ttlock',
#                                  'nest',
#                                  'noiseaware',
#                                  'igloohome',
#                                  'ecobee',
#                                  'hubitat',
#                                  'four_suites',
#                                  'dormakaba_oracode',
#                                  'lockly',
#                                  'wyze'],
#              accepted_devices=[],
#              selected_provider=None,
#              wait_for_device_creation=True,
#              automatically_manage_new_devices=True)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
seam.connect_webviews.create(
  provider_category: "stable"
)

# <Seam::ConnectWebview:0x00438
# url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=c1350df4-278f-42cc-9c16-4f9e41103796&auth_token=6zrib4wrGZMDxvJxPQQFiB6snmx7UAU6E"
# status="pending"
# workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be"
# custom_metadata={}
# accepted_devices=[]
# login_successful=false
# selected_provider=nil
# accepted_providers=["august", "avigilon_alta", "brivo", "schlage", "smartthings", "yale", "nuki", "salto", "controlbyweb", "minut", "my_2n", "kwikset", "tedee", "ttlock", "nest", "noiseaware", "igloohome", "ecobee", "hubitat", "four_suites", "dormakaba_oracode", "lockly", "wyze"]
# any_device_allowed=false
# connect_webview_id="c1350df4-278f-42cc-9c16-4f9e41103796"
# custom_redirect_url=nil
# any_provider_allowed=false
# device_selection_mode="none"
# wait_for_device_creation=true
# custom_redirect_failure_url=nil
# automatically_manage_new_devices=true
# created_at=2023-11-15 23:31:12.082 UTC>
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$webview = $seam->connect_webviews->create(
    provider_category: "stable"
  );
  
echo json_encode($webview);


// {
//     "connect_webview_id": "68940a5e-c1d9-4ea6-b138-df273f687308",
//     "workspace_id": "1d2826eb-4a26-4f46-bddb-ef5898baa859",
//     "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=68940a5e-c1d9-4ea6-b138-df273f687308&auth_token=QEUQ5yEheEjaK5EqJN32egPL7YpSYySHu",
//     "connected_account_id": null,
//     "created_at": "2023-09-16T20:40:29.272Z",
//     "device_selection_mode": "none",
//     "accepted_providers": [
//       "august",
//       "avigilon_alta",
//       "brivo",
//       "schlage",
//       "smartthings",
//       "yale",
//       "nuki",
//       "salto",
//       "controlbyweb",
//       "minut",
//       "my_2n",
//       "kwikset",
//       "tedee",
//       "ttlock",
//       "nest",
//       "noiseaware",
//       "igloohome",
//       "ecobee",
//       "four_suites",
//       "dormakaba_oracode"
//       "wyze
//     ],
//     "accepted_devices": [],
//     "any_provider_allowed": false,
//     "any_device_allowed": false,
//     "login_successful": false,
//     "wait_for_device_creation": false,
//     "automatically_manage_new_devices": true,
//     "custom_metadata": {},
//     "status": "pending",
//     "custom_redirect_url": null,
//     "custom_redirect_failure_url": null,
//     "error": null
//   }
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
You should make a new`connect_webview`for each unique login request.

Each `connect_webview` tracks the user that signed in with it. You receive an error if you reuse a Connect Webview for the same user twice or if you use the same Connect Webview for multiple users.
{% endhint %}

### Parameters

| `provider_category`                | type: string                       | <p>Specifies the category of providers to include.<br>Supported categories:</p><ul><li><code>stable</code></li><li><code>consumer_smartlocks</code></li><li><code>thermostats</code></li><li><code>noise_sensors</code></li></ul><p>See <a href="./#accepted-provider-category-keys">Accepted Provider Category Keys</a>.</p> |
| ---------------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accepted_providers`               | type: string\[]                    | Array of accepted **device provider keys** and an alternative to `provider_category`. This lets you explicitly specified accepted providers (e.g. "august"). See [Device Provider Keys](./#device-provider-keys).                                                                                                             |
| `custom_redirect_url`              | <p>type: string<br>Optional</p>    | URL to redirect user to after provider login is complete                                                                                                                                                                                                                                                                      |
| `custom_redirect_failure_url`      | <p>type: string</p><p>Optional</p> | Alternative URL to redirect the user on error. If this is not set, falls back to `custom_redirect_url`                                                                                                                                                                                                                        |
| `device_selection_mode`            | type: 'none'                       | 'multiple'                                                                                                                                                                                                                                                                                                                    |
| `automatically_manage_new_devices` | type: 'boolean'                    | <p>Indicates whether newly added devices should appear as managed devices<br>Default: <code>true</code></p>                                                                                                                                                                                                                   |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
    "connect_webview": {
    	"connect_webview_id": "123e4567-e89b-12d3-a456-426614174000",
	"custom_redirect_url": null,
	"url": "https://connect.getseam.com/v1/connect_webviews/view?connect_webview_id=02454094-1cab-4693-babc-afa9e1c55f09&auth_token=P7XLD4hYXva24WqwSKTC4pKQMP7v3zWUz",
	"workspace_id": "84dda4b8-f327-4d97-a720-e0504a13a441",
	"device_selection_mode": "none",
	"accepted_providers": [
		"august",
		...
	],
	"accepted_devices": [],
	"any_provider_allowed": false,
	"any_device_allowed": null,
	"created_at": "2022-02-07T18:33:50.271Z",
	"login_successful": false,
	"custom_redirect_url": null,
  	"custom_redirect_failure_url": null,
	"status": "pending"
    }
}
```
{% endtab %}
{% endtabs %}
