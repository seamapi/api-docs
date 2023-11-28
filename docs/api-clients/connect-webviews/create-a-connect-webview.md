---
description: >-
  To allow a user to sign in, you need to create a connect_webview . After
  creating the webview, you'll receive a URL that you can use to open an iframe
  or new window containing a login page for your us
---

# Create a Connect Webview

![An example of what the webview will look like to your user:](<../../.gitbook/assets/image (12).png>)

{% swagger baseUrl="https://connect.getseam.com" method="post" path="/connect_webviews/create" summary="Create a connect_webview" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="accepted_providers" required="true" type="string[]" %}
Array of accepted

**device provider keys**

. See

[Device Provider Keys](create-a-connect-webview.md#device-providers)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="custom_redirect_url" required="false" %}
URL to redirect user to after provider login is complete
{% endswagger-parameter %}

{% swagger-parameter in="body" name="custom_redirect_failure_url" type="type: string Optional" required="false" %}
Alternative URL to redirect the user on error. If this is not set, falls back to

`custom_redirect_url`
{% endswagger-parameter %}

{% swagger-parameter in="body" name="device_selection_mode" required="false" %}
'none', 'single' or 'multiple'
{% endswagger-parameter %}

{% swagger-response status="201: Created" description="connect_webview successfully created" %}
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
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
  "error": {
    "type": "invalid_input",
    "message": "Invalid enum value. Expected 'akuvox' | 'august' | 'butterflymx' | 'schlage' | 'smartthings' | 'yale' | 'noiseaware' | 'salto' | 'doorking' | 'salto' | 'genie' | 'linear' | 'seam_relay_admin' for provided \"accepted_providers.0\"",
    "validation_errors": {
      "_errors": [],
      "accepted_providers": {
        "0": {
          "_errors": [
            "Invalid enum value. Expected 'akuvox' | 'august' | 'butterflymx' | 'schlage' | 'smartthings' | 'yale' | 'noiseaware' | 'salto' | 'doorking' | 'salto' | 'genie' | 'linear' | 'seam_relay_admin'"
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
{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Javascript" %}
```javascript
await seam.connectWebviews.create({
    provider_category: "stable",
});

/*{
  url: 'https://connect.getseam.com/connect_webviews/view?connect_webview_id=7a85bb60-3d0c-4bf1-b75d-c802df011509&auth_token=DTnrAuQU4FCEz2koXGZ7wJ6Yi1owHb3d1',
  status: 'pending',
  created_at: '2022-08-23T15:14:49.672196+00:00',
  workspace_id: 'f97073eb-c003-467a-965b-e6dba3a0131d',
  accepted_devices: [],
  login_successful: false,
  provider_category: "stable",
  any_device_allowed: null,
  connect_webview_id: '7a85bb60-3d0c-4bf1-b75d-c802df011509',
  custom_redirect_url: null,
  custom_redirect_failure_url: null,
  any_provider_allowed: false,
  device_selection_mode: 'none'
}*/
```
{% endtab %}

{% tab title="Python" %}
```python
seam.connect_webviews.create(provider_category="stable")

# ConnectWebview(
#   connect_webview_id='61c2877a-81e0-4474-ba8d-f96950dc095f',
#   status='pending',
#   url='https://connect.getseam.com/connect_webviews/viewconnect_webview_id=61c277a-81e0-4474-ba8d-f96950dc095f&auth_token=Codur8hWGnxJBv7rgoEg2mBDbYY4xnMXh',
#   login_successful=False,
#   custom_redirect_url=NOne,
#   custom_redirect_failure_url=None,
#   connected_account_id=None
# )
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
seam.connect_webviews.create(
  provider_category: "stable"
)

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
#   custom_redirect_failure_url=nil
#   any_provider_allowed=false
#   device_selection_mode="none">
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
//       "ttlock",
//       "noiseaware",
//       "igloohome",
//       "ecobee",
//       "hubitat",
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
**You should make a new connect\_webview for each unique login request:** Each `connect_webview` tracks the user that signed in with it, you'll get an error if you re-use a webview for the same user twice, or if you use the same webview for multiple users.
{% endhint %}

### Parameters

| `provider_category`                | type: string                       | Specifies the category of providers to allow (e.g. "stable"). See [Provider Category Keys](./#accepted-provider-keys).                                                                                           |
| ---------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accepted_providers`               | type: string\[]                    | Array of accepted **device provider keys** and an alternative to `provider_category`. This lets you explicitly specified accepted providers (e.g. "august"). See [Device Provider Keys](./#device-provider-keys) |
| `custom_redirect_url`              | <p>type: string<br>Optional</p>    | URL to redirect user to after provider login is complete                                                                                                                                                         |
| `custom_redirect_failure_url`      | <p>type: string</p><p>Optional</p> | Alternative URL to redirect the user on error. If this is not set, falls back to `custom_redirect_url`                                                                                                           |
| `device_selection_mode`            | type: 'none'                       | 'multiple'                                                                                                                                                                                                       |
| `automatically_manage_new_devices` | type: 'boolean'                    | Defaults to `true`, whether newly added devices should appear as a Managed Device                                                                                                                                |

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
		"smartthings"
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
