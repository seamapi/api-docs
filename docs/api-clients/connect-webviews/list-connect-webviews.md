---
description: List all Connect Webviews
---

# List Connect Webviews

Returns a list of all [Connect Webviews](../../core-concepts/connect-webviews/).

{% swagger src="https://connect.getseam.com/openapi.json" path="/connect_webviews/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

To filter the list of returned Connect Webviews by a specific set of [custom metadata](../../core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md) or a user identifier key, include `custom_metadata_has` or [`user_identifier_key`](../client-sessions/#client\_session-properties) in the request body. If you include `custom_metadata_has`, specify the desired metadata filters as a JSON object containing key:value pairs.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identifier_key</code></td><td>String<br><em>Optional</em></td><td>The internal user ID (your own internal ID for a user) by which you want to filter Connect Webviews.</td></tr><tr><td><code>custom_metadata_has</code></td><td>JSON object<br><em>Optional</em></td><td>Set of key:value <a href="./#connect_webview-properties">custom metadata</a> pairs by which you want to filter Connect Webviews.</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
connect_webviews = seam.connect_webviews.list()
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/connect_webviews/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.connectWebviews.list();
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
seam.connect_webviews.list()
```
{% endtab %}

{% tab title="PHP" %}
```php
$webviews = $seam->connect_webviews->list();
echo json_encode($webviews);
```
{% endtab %}
{% endtabs %}

## Response

Returns a `connect_webviews` array, in which each returned `connect_webview` contains the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>connect_webview_id</code></td><td>ID of the Connect Webview</td></tr><tr><td><code>connected_account_id</code></td><td>ID of the <a href="../connected-accounts/">connected account</a> that was created after the user successfully logged in</td></tr><tr><td><code>url</code></td><td>URL for the Connect Webview</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../core-concepts/workspaces/">workspace</a> that contains the Connect Webview</td></tr><tr><td><code>device_selection_mode</code></td><td>Device selection mode, including <code>none</code>, <code>single</code>, or <code>multiple</code></td></tr><tr><td><code>accepted_providers</code></td><td>List of accepted <a href="list-connect-webviews.md#device-provider-keys">device provider keys</a></td></tr><tr><td><code>accepted_devices</code></td><td>List of accepted <a href="../../core-concepts/devices/">devices</a></td></tr><tr><td><code>any_provider_allowed</code></td><td>Indicates whether any provider is allowed</td></tr><tr><td><code>any_device_allowed</code></td><td>Indicates whether any device is allowed</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the Connect Webview was created</td></tr><tr><td><code>login_successful</code></td><td>Indicates whether the user logged in successfully using the Connect Webview</td></tr><tr><td><code>status</code></td><td>Status of the Connect Webview, including <code>pending</code> or <code>authorized</code></td></tr><tr><td><code>custom_redirect_url</code></td><td>If set, the Connect Webview redirects to this URL when the user successfully pairs a device or, if the <code>custom_redirect_failure_url</code> is not set, when an unexpected error occurs</td></tr><tr><td><code>custom_redirect_failure_url</code></td><td>If set, the Connect Webview redirects to this URL when an unexpected error occurs</td></tr><tr><td><code>custom_metadata</code></td><td>Set of up to 50 keys, with key names up to 40 characters long. Accepts string or Boolean values. Strings are limited to 500 characters<br>For more information, see <a href="../../core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md">Attaching Custom Data to the Connect Webview</a>.</td></tr><tr><td><code>automatically_manage_new_devices</code></td><td>Indicates whether Seam should <a href="../../core-concepts/connect-webviews/customizing-connect-webviews.md#automatically_manage_new_devices">import all new devices</a> for the connected account to make these devices available for use and management by the Seam API</td></tr><tr><td><code>wait_for_device_creation</code></td><td>Indicates whether Seam should <a href="../../core-concepts/connect-webviews/customizing-connect-webviews.md#wait_for_device_creation">finish syncing all devices</a> in a newly-connected account before completing the associated Connect Webview</td></tr><tr><td><code>authorized_at</code></td><td>Date and time at which the user authorized (through the Connect Webview) the management of their devices</td></tr><tr><td><code>selected_provider</code></td><td>Selected provider of the Connec Webview, one of <a href="list-connect-webviews.md#device-provider-keys">device provider keys</a></td></tr></tbody></table>

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "connect_webviews": [
    {
      "connect_webview_id": "2a4a0a19-4936-4379-8770-7cf74f87e7b1",
      "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=2a4a0a19-4936-4379-8770-7cf74f87e7b1&auth_token=NhbgghSPXPeXd7wZYVPxQKksR1eoxam8N",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "device_selection_mode": "none",
      "accepted_providers": [
        "august",
        "brivo",
        "schlage",
        "yale",
      ],
      "selected_provider": "august",
      "accepted_devices": [],
      "any_provider_allowed": false,
      "any_device_allowed": false,
      "created_at": "2023-12-15T06:23:32.780Z",
      "login_successful": true,
      "authorized_at": "2023-12-15T06:23:55.024Z",
      "status": "authorized",
      "custom_metadata": {
          "internal_account_id": "user-1"
      },
      "custom_redirect_url": null,
      "wait_for_device_creation": false,
      "custom_redirect_failure_url": null,
      "automatically_manage_new_devices": true,
      "connected_account_id": "f891acfd-d228-4bb2-8399-c0f7e24e6b16"
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
