---
description: Delete a specified client session
---

# Delete a Client Session

Deletes a specified [client session](../../core-concepts/authentication/client-session-tokens/).

{% swagger src="https://connect.getseam.com/openapi.json" path="/client_sessions/delete" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired client session by including the corresponding `client_session_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>client_session_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired client session</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="JavaScript" %}
```javascript
await seam.clientSessions.delete({
  client_session_id: "639eb8af-19a9-4ae5-817c-6ad08fd078e7",
})
```
{% endtab %}
{% endtabs %}

## Response

Returns a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{ ok: true }
```
{% endtab %}
{% endtabs %}
