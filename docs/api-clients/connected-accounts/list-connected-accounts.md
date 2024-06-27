---
description: Get all Connected accounts
---

# List Connected Accounts

Returns a list of all [connected accounts](./).

{% swagger src="https://connect.getseam.com/openapi.json" path="/connected_accounts/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

To filter the list of returned connected accounts by a specific set of [custom metadata](../../core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md), include `custom_metadata_has` in the request body. If you include `custom_metadata_has`, specify the desired metadata filters as a JSON object containing key:value pairs.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>custom_metadata_has</code></td><td>JSON object<br><em>Optional</em></td><td>Set of key:value <a href="../connect-webviews/#connect_webview-properties">custom metadata</a> pairs by which you want to filter connected accounts<br>For more information, see <a href="../../core-concepts/connected-accounts/adding-custom-metadata-to-a-connected-account.md">Adding Custom Metadata to Connected Accounts</a>.</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
connected_accounts = seam.connected_accounts.list()
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/connected_accounts/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.connectedAccounts.list();
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
seam.connected_accounts.list()
```
{% endtab %}

{% tab title="PHP" %}
```php
$connected_accounts = $seam->connected_accounts->list();
echo json_encode($connected_accounts);
```
{% endtab %}
{% endtabs %}

## Response

Returns a `connected_accounts` array, in which each returned connected account (`connected_account`) contains the following properties:

| Property                           | Description                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connected_account_id`             | ID of the connected account                                                                                                                                                                                                                                                                                                                                                             |
| `created_at`                       | Date and time at which the connected account was created                                                                                                                                                                                                                                                                                                                                |
| `user_identifier`                  | Unique identifier for the connected account, such as an email address or phone number                                                                                                                                                                                                                                                                                                   |
| `account_type`                     | Type of manufacturer to which the connected account belongs, such as `august`, `schlage`, `yale`, `salto`, `smartthings`, and so on                                                                                                                                                                                                                                                     |
| `account_type_display_name`        | Version of `account_type` that can be displayed in a user interface                                                                                                                                                                                                                                                                                                                     |
| `custom_metadata`                  | Set of `custom_metadata` set on the [Connect Webview](../../core-concepts/connect-webviews/) that connected the account. You can also modify or add to this `custom_metadata`.                                                                                                                                                                                                          |
| `automatically_manage_new_devices` | <p>Indicates whether Seam should import all new devices for the connected account to make these devices available for use and management by the Seam API.<br>You <a href="../../core-concepts/connect-webviews/customizing-connect-webviews.md#automatically_manage_new_devices">initially specify the value for this property</a> when creating the corresponding Connect Webview.</p> |

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "connected_accounts": [
    {
      "connected_account_id": "c993818b-bf3c-4836-bef4-9a76d89bf1d3",
      "created_at": "2024-01-05T07:20:07.692Z",
      "user_identifier": {
        "username": "jane"
      },
      "account_type": "visionline",
      "account_type_display_name": "Visionline",
      "errors": [],
      "warnings": [],
      "custom_metadata": {
          "internal_account_id": "user-1"
      },
      "automatically_manage_new_devices": true
    },
	...
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
