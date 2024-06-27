---
description: Delete a specified Connect Webview
---

# Delete a Connect Webview

Deletes a specified [Connect Webview](../../core-concepts/connect-webviews/).

{% hint style="info" %}
You do not need to delete a Connect Webview once a user completes it. Instead, you can simply ignore completed Connect Webviews.
{% endhint %}

{% swagger src="https://connect.getseam.com/openapi.json" path="/connect_webviews/delete" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired Connect Webview by including the corresponding `connect_webview_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>connect_webview_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired Connect Webview</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/connect_webviews/delete' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "connect_webview_id": "123e4567-e89b-12d3-a456-426614174000"
}'
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
