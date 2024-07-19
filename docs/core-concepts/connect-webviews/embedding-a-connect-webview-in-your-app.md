---
description: Use redirection or an iframe to embed a Connect Webview in your app.
---

# Embedding a Connect Webview in Your App

<figure><img src="../../.gitbook/assets/connect-webview-embedding-2.png" alt=""><figcaption></figcaption></figure>

You can use either of the following two methods to incorporate a [Connect Webview](./) in your app:

* [Redirect to the Connect Webview URL.](embedding-a-connect-webview-in-your-app.md#redirect-to-the-connect-webview-url)
* [Embed the Connect Webview in an inline frame (iframe).](embedding-a-connect-webview-in-your-app.md#embed-the-connect-webview-in-an-iframe)

***

## Opening a Connect Webview

To allow users to connect their devices with your app, you will need to present a button to launch a new Connect Webview. If your app has a settings section, we recommend creating a device setting page and adding an "Add Devices" or "Link Devices" button (see example below).&#x20;

Upon clicking this button, you can then either [redirect to the Connect Webview url](embedding-a-connect-webview-in-your-app.md#redirect-to-the-connect-webview-url) or [embed the Connect Webview in an iFrame](embedding-a-connect-webview-in-your-app.md#embed-the-connect-webview-in-an-iframe) and present it in a modal. Please contact us if you would like guidance on best practices.&#x20;

<figure><img src="../../.gitbook/assets/connect-webview-embedding-1 (1).png" alt=""><figcaption></figcaption></figure>

***

## Redirect to the Connect Webview URL

To incorporate a Connect Webview in your app using redirection, first create the Connect Webview. Redirect your app to the URL for the created Connect Webview. After your user has completed the Connect Webview, verify that your user has connected their device account successfully to Seam. Then, you can use the Seam API to control your users' connected devices.

### 1. Create a Connect Webview

When your user initiates an action in your app to connect their device account to Seam, [create a Connect Webview](../../api-clients/connect-webviews/create-a-connect-webview.md) (`connect_webview` object).

When creating the new Connect Webview, note the following suggestions:

*   Make sure to set a `custom_redirect_url` so that the Connect Webview redirects back to the desired page within your application after the Connect Webview flow completes.

    If you want to redirect to a different page when there is an error, you can set the `custom_redirect_failure_url` to the URL for the desired page.
* We recommend setting `wait_for_device_creation` to `true` so that the Connect Webview does not complete until Seam completes the first sync of the connected account and devices.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
created_connect_webview = seam.connect_webviews.create(
  custom_redirect_url = "https://example.com/redirect",
  custom_redirect_failure_url = "https://example.com/failure-redirect",
  provider_category = "stable",
  wait_for_device_creation = True
)

pprint(created_connect_webview)
```

**Response:**

```
ConnectWebview(
    workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    connect_webview_id='2c852289-ee42-49d0-bddc-0410b518003d',
    status='pending',
    url='https://connect.getseam.com/connect_webviews/view?connect_webview_id=2c852289-ee42-49d0-bddc-0410b518003d&auth_token=z7Wu2Lc85gYUbNUhdvCWaEhmQv61FziA',
    login_successful=False,
    device_selection_mode='none',
    any_provider_allowed=False,
    any_device_allowed=False,
    created_at='2023-11-15T23:24:36.947Z',
    custom_metadata={},
    connected_account_id=None,
    authorized_at=None,
    custom_redirect_url='https://example.com/redirect',
    custom_redirect_failure_url='https://example.com/failure-redirect',
    accepted_providers=[
        'august', 'avigilon_alta', 'brivo', 'schlage', 'smartthings', 'yale', 'nuki', 
        'salto', 'controlbyweb', 'minut', 'my_2n', 'kwikset', 'tedee', 'ttlock', 
        'nest', 'noiseaware', 'igloohome', 'ecobee', 'four_suites', 
        'dormakaba_oracode', 'lockly', 'wyze'
    ],
    accepted_devices=[],
    selected_provider=None,
    wait_for_device_creation=True,
    automatically_manage_new_devices=True
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/connect_webviews/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "custom_redirect_url": "https://example.com/redirect",
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "provider_category": "stable",
  "wait_for_device_creation": true
}'
```

**Response:**

```json
{
  "connect_webview": {
    "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=e386fe69-7bce-4796-bceb-44cc240fd604&auth_token=CvPDERYGGMvqgo6N1gsT7XRBieBtPqtUG",
    "status": "pending",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "custom_metadata": {},
    "accepted_devices": [],
    "login_successful": false,
    "selected_provider": null,
    "accepted_providers": [
      "august",
      "avigilon_alta",
      "brivo",
      "schlage",
      "smartthings",
      "yale",
      "nuki",
      "salto",
      "controlbyweb",
      "minut",
      "my_2n",
      "kwikset",
      "tedee",
      "ttlock",
      "nest",
      "noiseaware",
      "igloohome",
      "ecobee",
      "four_suites",
      "dormakaba_oracode",
      "lockly",
      "wyze"
    ],
    "any_device_allowed": false,
    "connect_webview_id": "e386fe69-7bce-4796-bceb-44cc240fd604",
    "custom_redirect_url": "https://example.com/redirect",
    "any_provider_allowed": false,
    "device_selection_mode": "none",
    "wait_for_device_creation": true,
    "custom_redirect_failure_url": "https://example.com/failure-redirect",
    "automatically_manage_new_devices": true,
    "created_at": "2023-11-15T23:25:47.222Z",
    "authorized_at": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const createdConnectWebview = await seam.connectWebviews.create({
  custom_redirect_url: "https://example.com/redirect",
  custom_redirect_failure_url: "https://example.com/failure-redirect",
  provider_category: "stable",
  wait_for_device_creation: true
})

console.log(createdConnectWebview)
```

**Response:**

```json
{
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
    'four_suites',       'dormakaba_oracode',
    'lockly',            'wyze'
  ],
  any_device_allowed: false,
  connect_webview_id: '28fa1da1-d4ab-454c-a622-3ca95f22028a',
  custom_redirect_url: 'https://example.com/redirect',
  any_provider_allowed: false,
  device_selection_mode: 'none',
  wait_for_device_creation: true,
  custom_redirect_failure_url: 'https://example.com/failure-redirect',
  automatically_manage_new_devices: true,
  created_at: '2023-11-15T23:28:03.845Z',
  authorized_at: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
created_connect_webview = client.connect_webviews.create(
  custom_redirect_url: "https://example.com/redirect",
  custom_redirect_failure_url: "https://example.com/failure-redirect",
  provider_category: "stable",
  wait_for_device_creation: true
)

puts created_connect_webview.inspect
```

**Response:**

```
<Seam::ConnectWebview:0x00438
  url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=c1350df4-278f-42cc-9c16-4f9e41103796&auth_token=6zrib4wrGZMDxvJxPQQFiB6snmx7UAU6E"
  status="pending"
  workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be"
  custom_metadata={}
  accepted_devices=[]
  login_successful=false
  selected_provider=nil
  accepted_providers=["august", "avigilon_alta", "brivo", "schlage", "smartthings", "yale", "nuki", "salto", "controlbyweb", "minut", "my_2n", "kwikset", "tedee", "ttlock", "nest", "noiseaware", "igloohome", "ecobee", "four_suites", "dormakaba_oracode", "lockly", "wyze"]
  any_device_allowed=false
  connect_webview_id="c1350df4-278f-42cc-9c16-4f9e41103796"
  custom_redirect_url="https://example.com/redirect"
  any_provider_allowed=false
  device_selection_mode="none"
  wait_for_device_creation=true
  custom_redirect_failure_url="https://example.com/failure-redirect"
  automatically_manage_new_devices=true
  created_at=2023-11-15 23:31:12.082 UTC>
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var createdConnectWebview = seam.ConnectWebviews.Create(
  customRedirectUrl: "https://example.com/redirect",
  customRedirectFailureUrl: "https://example.com/failure-redirect",
  providerCategory: Seam.Api.ConnectWebviews.CreateRequest.ProviderCategoryEnum.Stable,
  waitForDeviceCreation: true
);

Console.WriteLine(createdConnectWebview);
```

**Response:**

```
{
  "connect_webview_id": "382034e3-0568-4e56-a226-d77778913e27",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=382034e3-0568-4e56-a226-d77778913e27&auth_token=9eBKNtzB6ZKkSPPD33MZFshYSbmBcSMz7",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "accepted_providers": [
    "august",
    "avigilon_alta",
    "brivo",
    "schlage",
    "smartthings",
    "yale",
    "nuki",
    "salto",
    "controlbyweb",
    "minut",
    "my_2n",
    "kwikset",
    "tedee",
    "ttlock",
    "nest",
    "noiseaware",
    "igloohome",
    "ecobee",
    "four_suites",
    "dormakaba_oracode",
    "lockly",
    "wyze"
  ],
  "accepted_devices": [],
  "created_at": "2023-11-15T23:34:13.279Z"
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
ConnectWebview createdConnectWebview = seam.connectWebviews().create(ConnectWebviewsCreateRequest.builder()
                .customRedirectUrl("https://example.com/redirect")
                .customRedirectFailureUrl("https://example.com/failure-redirect")
                .providerCategory(ProviderCategory.STABLE)
                .waitForDeviceCreation(true)
                .build());
System.out.println(createdConnectWebview);
```

**Response:**

{% code overflow="wrap" %}
```json
{
  "connect_webview_id" : "945554d6-ab1f-4f82-9683-21003f547cd1",
  "url" : "https://connect.getseam.com/connect_webviews/view?connect_webview_id=945554d6-ab1f-4f82-9683-21003f547cd1&auth_token=3ArqVmE7WzA4SWpMLypojEChSsvjPH5s9",
  "workspace_id" : "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "device_selection_mode" : "none",
  "accepted_providers" : [ "august", "avigilon_alta", "brivo", "schlage", "smartthings", "yale", "nuki", "salto", "controlbyweb", "minut", "my_2n", "kwikset", "tedee", "ttlock", "nest", "noiseaware", "igloohome", "ecobee", "four_suites", "dormakaba_oracode", "lockly", "wyze" ],
  "any_provider_allowed" : false,
  "any_device_allowed" : false,
  "created_at" : "2023-11-15T23:39:34.136Z",
  "login_successful" : false,
  "status" : "pending",
  "custom_redirect_url" : "https://example.com/redirect",
  "wait_for_device_creation" : true,
  "custom_redirect_failure_url" : "https://example.com/failure-redirect",
  "automatically_manage_new_devices" : true,
  "authorized_at" : null,
  "custom_metadata" : { },
  "selected_provider" : null
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

Store the `connect_webview_id` and `url` for the created Connect Webview.

You use the URL to redirect your app to the Connect Webview. You use the ID later to verify the success of the connection attempt.

### 2. Redirect Your App to the Connect Webview

Pass the Connect Webview `url` to the client portion of your app and redirect your app to this URL.

The resulting page displays the [authorization flow](./#connect-webview-flow) through which your app user can link their device account to Seam.

<figure><img src="../../.gitbook/assets/connect-webview-user-flow.png" alt="The page to which you redirect your app displays the authorization flow through which your app user can link their device account to Seam."><figcaption></figcaption></figure>

Once the user has completed the authorization flow, the Connect Webview redirects back to your app (specifically to the `custom_redirect_url`). Note that Seam appends the following search parameters to the URL after the redirect:

* `connect_webview_id`
* If there is an error, `error_code` and `error_message`

### 3. Verify Successful Device Account Connection

Use one of the following methods to verify that your user successfully connected their account to Seam through your app:

* **Polling:** Use the `connect_webview_id` to retrieve the Connect Webview. Check the `status` of the Connect Webview to see if it changed to `success`.
* **Webhook:** Watch for a `connected_account.connected` event with a `connect_webview_id` that matches that of the Connect Webview that you created.

Once the connection has occurred successfully, the Connect Webview and the `connected_account.connected` event payload include a `connected_account_id`.

{% hint style="info" %}
You do not need to delete a Connect Webview once a user completes it. Instead, you can simply ignore completed Connect Webviews.
{% endhint %}

### 4. Use the Seam API to Control Your Users' Connected Devices

Use the `connected_account_id` to make requests for your user's account and devices. Note that if you set `wait_for_device_creation` to `false` for the Connect Webview, you should wait for the `connected_account.completed_first_sync` event before retrieving the user's devices. This event indicates that Seam has finished the first sync of the connected account and the devices are now available.

***

## Embed the Connect Webview in an iframe

To incorporate a Connect Webview in your app using an HTML [iframe](https://www.w3schools.com/html/html\_iframe.asp), first create the Connect Webview. Display the URL for the created Connect Webview in an iframe. After your user has completed the Connect Webview, verify that your user has connected their device account successfully to Seam. Then, you can use the Seam API to control your users' connected devices.

### 1. Create a Connect Webview

When your user initiates an action in your app to connect their device account to Seam, [create a Connect Webview](../../api-clients/connect-webviews/create-a-connect-webview.md) (`connect_webview` object).

We recommend setting `wait_for_device_creation` to `true` so that the Connect Webview does not complete until Seam completes the first sync of the connected account and devices.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
created_connect_webview = seam.connect_webviews.create(
  custom_redirect_url = "https://example.com/redirect",
  custom_redirect_failure_url = "https://example.com/failure-redirect",
  provider_category = "stable",
  wait_for_device_creation = True
)

pprint(created_connect_webview)
```

**Response:**

```
ConnectWebview(workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be',
               connect_webview_id='2c852289-ee42-49d0-bddc-0410b518003d',
               status='pending',
               url='https://connect.getseam.com/connect_webviews/view?connect_webview_id=2c852289-ee42-49d0-bddc-0410b518003d&auth_token=z7Wu2Lc85gYUbNUhdvCWaEhmQv61FziA',
               login_successful=False,
               device_selection_mode='none',
               any_provider_allowed=False,
               any_device_allowed=False,
               created_at='2023-11-15T23:24:36.947Z',
               custom_metadata={},
               connected_account_id=None,
               authorized_at=None,
               custom_redirect_url='https://example.com/redirect',
               custom_redirect_failure_url='https://example.com/failure-redirect',
               accepted_providers=['august',
                                   'avigilon_alta',
                                   'brivo',
                                   'schlage',
                                   'smartthings',
                                   'yale',
                                   'nuki',
                                   'salto',
                                   'controlbyweb',
                                   'minut',
                                   'my_2n',
                                   'kwikset',
                                   'tedee',
                                   'ttlock',
                                   'nest',
                                   'noiseaware',
                                   'igloohome',
                                   'ecobee',
                                   'four_suites',
                                   'dormakaba_oracode',
                                   'lockly',
                                   'wyze'],
               accepted_devices=[],
               selected_provider=None,
               wait_for_device_creation=True,
               automatically_manage_new_devices=True)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/connect_webviews/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "custom_redirect_url": "https://example.com/redirect",
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "provider_category": "stable",
  "wait_for_device_creation": true
}'
```

**Response:**

```json
{
  "connect_webview": {
    "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=e386fe69-7bce-4796-bceb-44cc240fd604&auth_token=CvPDERYGGMvqgo6N1gsT7XRBieBtPqtUG",
    "status": "pending",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "custom_metadata": {},
    "accepted_devices": [],
    "login_successful": false,
    "selected_provider": null,
    "accepted_providers": [
      "august",
      "avigilon_alta",
      "brivo",
      "schlage",
      "smartthings",
      "yale",
      "nuki",
      "salto",
      "controlbyweb",
      "minut",
      "my_2n",
      "kwikset",
      "tedee",
      "ttlock",
      "nest",
      "noiseaware",
      "igloohome",
      "ecobee",
      "four_suites",
      "dormakaba_oracode",
      "lockly",
      "wyze"
    ],
    "any_device_allowed": false,
    "connect_webview_id": "e386fe69-7bce-4796-bceb-44cc240fd604",
    "custom_redirect_url": "https://example.com/redirect",
    "any_provider_allowed": false,
    "device_selection_mode": "none",
    "wait_for_device_creation": true,
    "custom_redirect_failure_url": "https://example.com/failure-redirect",
    "automatically_manage_new_devices": true,
    "created_at": "2023-11-15T23:25:47.222Z",
    "authorized_at": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const createdConnectWebview = await seam.connectWebviews.create({
  custom_redirect_url: "https://example.com/redirect",
  custom_redirect_failure_url: "https://example.com/failure-redirect",
  provider_category: "stable",
  wait_for_device_creation: true
})

console.log(createdConnectWebview)
```

**Response:**

```json
{
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
    'four_suites',       'dormakaba_oracode',
    'lockly',            'wyze'
  ],
  any_device_allowed: false,
  connect_webview_id: '28fa1da1-d4ab-454c-a622-3ca95f22028a',
  custom_redirect_url: 'https://example.com/redirect',
  any_provider_allowed: false,
  device_selection_mode: 'none',
  wait_for_device_creation: true,
  custom_redirect_failure_url: 'https://example.com/failure-redirect',
  automatically_manage_new_devices: true,
  created_at: '2023-11-15T23:28:03.845Z',
  authorized_at: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
created_connect_webview = client.connect_webviews.create(
  custom_redirect_url: "https://example.com/redirect",
  custom_redirect_failure_url: "https://example.com/failure-redirect",
  provider_category: "stable",
  wait_for_device_creation: true
)

puts created_connect_webview.inspect
```

**Response:**

```
<Seam::ConnectWebview:0x00438
  url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=c1350df4-278f-42cc-9c16-4f9e41103796&auth_token=6zrib4wrGZMDxvJxPQQFiB6snmx7UAU6E"
  status="pending"
  workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be"
  custom_metadata={}
  accepted_devices=[]
  login_successful=false
  selected_provider=nil
  accepted_providers=["august", "avigilon_alta", "brivo", "schlage", "smartthings", "yale", "nuki", "salto", "controlbyweb", "minut", "my_2n", "kwikset", "tedee", "ttlock", "nest", "noiseaware", "igloohome", "ecobee", "four_suites", "dormakaba_oracode", "lockly", "wyze"]
  any_device_allowed=false
  connect_webview_id="c1350df4-278f-42cc-9c16-4f9e41103796"
  custom_redirect_url="https://example.com/redirect"
  any_provider_allowed=false
  device_selection_mode="none"
  wait_for_device_creation=true
  custom_redirect_failure_url="https://example.com/failure-redirect"
  automatically_manage_new_devices=true
  created_at=2023-11-15 23:31:12.082 UTC>
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var createdConnectWebview = seam.ConnectWebviews.Create(
  customRedirectUrl: "https://example.com/redirect",
  customRedirectFailureUrl: "https://example.com/failure-redirect",
  providerCategory: Seam.Api.ConnectWebviews.CreateRequest.ProviderCategoryEnum.Stable,
  waitForDeviceCreation: true
);

Console.WriteLine(createdConnectWebview);
```

**Response:**

```
{
  "connect_webview_id": "382034e3-0568-4e56-a226-d77778913e27",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=382034e3-0568-4e56-a226-d77778913e27&auth_token=9eBKNtzB6ZKkSPPD33MZFshYSbmBcSMz7",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "accepted_providers": [
    "august",
    "avigilon_alta",
    "brivo",
    "schlage",
    "smartthings",
    "yale",
    "nuki",
    "salto",
    "controlbyweb",
    "minut",
    "my_2n",
    "kwikset",
    "tedee",
    "ttlock",
    "nest",
    "noiseaware",
    "igloohome",
    "ecobee",
    "four_suites",
    "dormakaba_oracode",
    "lockly",
    "wyze"
  ],
  "accepted_devices": [],
  "created_at": "2023-11-15T23:34:13.279Z"
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
ConnectWebview createdConnectWebview = seam.connectWebviews().create(ConnectWebviewsCreateRequest.builder()
                .customRedirectUrl("https://example.com/redirect")
                .customRedirectFailureUrl("https://example.com/failure-redirect")
                .providerCategory(ProviderCategory.STABLE)
                .waitForDeviceCreation(true)
                .build());
System.out.println(createdConnectWebview);
```

**Response:**

{% code overflow="wrap" %}
```json
{
  "connect_webview_id" : "945554d6-ab1f-4f82-9683-21003f547cd1",
  "url" : "https://connect.getseam.com/connect_webviews/view?connect_webview_id=945554d6-ab1f-4f82-9683-21003f547cd1&auth_token=3ArqVmE7WzA4SWpMLypojEChSsvjPH5s9",
  "workspace_id" : "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "device_selection_mode" : "none",
  "accepted_providers" : [ "august", "avigilon_alta", "brivo", "schlage", "smartthings", "yale", "nuki", "salto", "controlbyweb", "minut", "my_2n", "kwikset", "tedee", "ttlock", "nest", "noiseaware", "igloohome", "ecobee", "four_suites", "dormakaba_oracode", "lockly", "wyze" ],
  "any_provider_allowed" : false,
  "any_device_allowed" : false,
  "created_at" : "2023-11-15T23:39:34.136Z",
  "login_successful" : false,
  "status" : "pending",
  "custom_redirect_url" : "https://example.com/redirect",
  "wait_for_device_creation" : true,
  "custom_redirect_failure_url" : "https://example.com/failure-redirect",
  "automatically_manage_new_devices" : true,
  "authorized_at" : null,
  "custom_metadata" : { },
  "selected_provider" : null
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

Store the `connect_webview_id` and `url` for the created Connect Webview.

You use the URL to display the Connect Webview in an iframe. You use the ID later to verify the success of the connection attempt.

### 2. Display the Connect Webview in an iframe

Pass the Connect Webview `url` to the client portion of your app and use an HTML [iframe](https://www.w3schools.com/html/html\_iframe.asp) to display the Connect Webview URL.

For example:

```html
<iframe style="border: none;min-height: 600px;height: 100%;width: 100%"
allow="clipboard-write"
src="<your connect_webview.url>"
/>
```

### 3. Verify Successful Device Account Connection

Use one of the following methods to verify that your user successfully connected their account to Seam through your app:

* **Polling:** Use the `connect_webview_id` to retrieve the Connect Webview. Check the `status` of the Connect Webview to see if it changed to `success`.
* **Webhook:** Watch for a `connected_account.connected` event with a `connect_webview_id` that matches that of the Connect Webview that you created.
*   **Event listening:** When you host a Connect Webview in an iframe, the iframe uses `window.parent.postMessage` to send messages to the parent window that is hosting the iframe. `window.parent.postMessage` is a cross-origin communication mechanism available in web browsers.\
    Register an event listener for the parent window containing the iframe to monitor for `message` events.

    For example:

    ```javascript
    window.addEventListener(
      "message",
      (event) => {
        if (event.data?.event?.event_type === "webview.login_successful") {
          // Do something.
        }
      },
      false
    );
    ```

    When the device account connection occurs successfully, the Connect Webview issues a `webview.login_successful` event. This event includes the `connect_webview_id`. If the device account connection fails, the Connect Webview issues a `webview.login_failed` event. If there is an error, this event also includes the `error_code` and `error_message`.\
    For example:

    ```
    {
        "event": {
    	"event_type": "webview.login_successful",
        	"connect_webview_id": "123e4567-e89b-12d3-a456-426614174000"
        }
    }
    ```

Once the connection has occurred successfully, the Connect Webview and the `connected_account.connected` event payload include a `connected_account_id`.

{% hint style="info" %}
You do not need to delete a Connect Webview once a user completes it. Instead, you can simply ignore completed Connect Webviews.
{% endhint %}

### 4. Use the Seam API to Control Your Users' Connected Devices

Use the `connected_account_id` to make requests for your user's account and devices.\
Note that if you set `wait_for_device_creation` to `false` for the Connect Webview, you should wait for the `connected_account.completed_first_sync` event before retrieving the user's devices. This event indicates that Seam has finished the first sync of the connected account and the devices are now available.
