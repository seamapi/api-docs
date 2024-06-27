---
description: >-
  Unless you're using the custom_redirect_url you'll probably want to poll your
  newly created connect_webview to know if the user has signed in, or to get
  details about what devices they connected.
---

# Get a Connect Webview

{% swagger src="https://connect.getseam.com/openapi.json" path="/connect_webviews/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
seam.connect_webviews.get("123e4567-e89b-12d3-a456-426614174000")

# ConnectWebview(
#   connect_webview_id='d8e981cb-5f67-461f-9ab8-f7716e8aef4a',
#   status='authorized',
#   url='https://connect.getseam.com/connect_webviews/view?connect_webview_id=d8e981cb-5f67-461f-9ab8-f7716e8aef4a&auth_token=L9ASMhP19fTbuWbsTLjWdGLUsT1UAVqLX',
#   login_successful=True, 
#   connected_account_id='137db755-0b63-47d6-a2de-3ff673a77e5a'
# )
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.connectWebviews.get(
    "d8e981cb-5f67-461f-9ab8-f7716e8aef4a"
);
  
// {
//   connect_webview_id: 'd8e981cb-5f67-461f-9ab8-f7716e8aef4a',
//   url: 'https://connect.getseam.com/connect_webviews/view?connect_webview_id=d8e981cb-5f67-461f-9ab8-f7716e8aef4a&#x26;auth_token=L9ASMhP19fTbuWbsTLjWdGLUsT1UAVqLX',
//   workspace_id: 'f97073eb-c003-467a-965b-e6dba3a0131d',
//   device_selection_mode: 'none',
//   accepted_providers: [ 'schlage' ],
//   selected_provider: 'schlage',
//   accepted_devices: [],
//   any_provider_allowed: false,
//   any_device_allowed: null,
//   created_at: '2022-08-23T15:01:55.636Z',
//   login_successful: true,
//   authorized_at: '2022-08-23T15:02:12.295Z',
//   status: 'authorized',
//   connected_account_id: '137db755-0b63-47d6-a2de-3ff673a77e5a'
// }
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
seam.connect_webviews.get("123e4567-e89b-12d3-a456-426614174000")

# <Seam::ConnectWebview:0x00bd4e8                                                            
#   url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=48880840-278b-4f55-bdc4-42ba8611952b&auth_token=asjDHKADH8392hf923FH"
#   status="pending"                                                                         
#   created_at="2022-07-06T14:18:41.556Z"                                                    
#   workspace_id="182ad8b2-4212-4640-873b-343c10b11c91"                                      
#   accepted_devices=[]                                                                      
#   login_successful=false                                                                   
#   accepted_providers=["august"] 
#   selected_provider="schlage"                                                           
#   any_device_allowed=nil                                                                   
#   connect_webview_id="48880840-278b-4f55-bdc4-42ba8611952b"                                
#   any_provider_allowed=false                                                               
#   device_selection_mode="none">
```
{% endtab %}

{% tab title="PHP" %}
```php
$webview = $seam->connect_webviews->get($webview->id);
echo json_encode($webview);
```
{% endtab %}
{% endtabs %}

### Parameters

| `connected_account_id` | <p>type: string<br>Optional</p> | <p><br>ID of the Connected Account</p> |
| ---------------------- | ------------------------------- | -------------------------------------- |
| `email`                | <p>type: string<br>Optional</p> | Email address used to create account   |

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
	"selected_provider": "smartthings",
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
{% endtabs %}
