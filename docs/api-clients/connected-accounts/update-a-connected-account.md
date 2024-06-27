---
description: Update the properties of a specified connected account.
---

# Update a Connected Account

Updates any of the following properties of a specified [connected account](./):

* `automatically_manage_new_devices`
* `custom_metadata`

{% swagger src="https://connect.getseam.com/openapi.json" path="/connected_accounts/update" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired connected account by including the corresponding `connected_account_id` in the request body. In addition, in the request body, include the properties that you want to update, along with the desired replacement values.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>connected_account_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired connected account</td></tr><tr><td><code>automatically_manage_new_devices</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether Seam should import all new devices for the connected account to make these devices available for use and management by the Seam API.<br>You <a href="../../core-concepts/connect-webviews/customizing-connect-webviews.md#automatically_manage_new_devices">initially specify the value for this property</a> when creating the corresponding <a href="../../core-concepts/connect-webviews/">Connect Webview</a>.</td></tr><tr><td><code>custom_metadata</code></td><td>JSON object<br><em>Optional</em></td><td>Specify up to 50 keys, with key names up to 40 characters long. Accepts string or Boolean values. Strings are limited to 500 characters.<br>For more information, see <a href="../../core-concepts/connected-accounts/adding-custom-metadata-to-a-connected-account.md">Adding Custom Metadata to Connected Accounts</a>.</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
connected_account_update = seam.connected_accounts.update(
    connected_account_id = "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
    automatically_manage_new_devices = True,
    custom_metadata = {
        "internal_account_id": "user-1"
    }
)

pprint(connected_account_update)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/connected_accounts/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "connected_account_id": "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
  "automatically_manage_new_devices": true,
  "custom_metadata": {
    "internal_account_id": "user-1"
  }
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
const connectedAccountUpdate = await seam.connectedAccounts.update({
  connected_account_id: "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
  automatically_manage_new_devices: true,
  custom_metadata: {
    "internal_account_id": "user-1"
  }
})

console.log(connectedAccountUpdate)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
connected_account_update = client.connected_accounts.update(
  connected_account_id: "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
  automatically_manage_new_devices: true,
  custom_metadata: {
    "internal_account_id": "user-1"
  }
)

puts connected_account_update.inspect
```
{% endtab %}

{% tab title="PHP" %}
```php
$connected_account_update = $seam->connected_accounts->update(
  connected_account_id: "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
  automatically_manage_new_devices: true,
  custom_metadata: array('internal_account_id' => 'user-1')
)
echo json_encode($connected_account_update, JSON_PRETTY_PRINT);
```
{% endtab %}

{% tab title="Java" %}
```java
Map<String, CustomMetadataValue> customMetadata =
    Map.of("internal_account_id", CustomMetadataValue.of(Optional.of("user-1")));

seam.connectedAccounts().update(ConnectedAccountsUpdateRequest.builder()
        .connectedAccountId("6e1cad57-b244-40ca-b4f3-30a46c8000d4")
        .automaticallyManageNewDevices(true)
        .custom_metadata(customMetadata)
        .build());
```
{% endtab %}
{% endtabs %}

## Response

Returns a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "ok": true
}
```
{% endtab %}
{% endtabs %}
