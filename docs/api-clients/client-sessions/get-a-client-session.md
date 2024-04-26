---
description: Get a specified client session
---

# Get a Client Session

Returns a specified [client session](../../core-concepts/authentication/client-session-tokens/).

{% swagger src="https://connect.getseam.com/openapi.json" path="/client_sessions/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired client session by including the corresponding `client_session_id` in the request body.

### Sample Request

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const clientSession = await seam.clientSessions.get({
  client_session_id: "c75d4330-ae01-4dfd-b6c5-f3e94e0d8168",
})
```
{% endtab %}
{% endtabs %}

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>client_session_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired client session</td></tr></tbody></table>

## Response

Returns a `client_session` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../core-concepts/workspaces/">workspace</a> that contains the client session</td></tr><tr><td><code>token</code></td><td>Client session token associated with the client session</td></tr><tr><td><code>user_identifier_key</code></td><td>Your own internal user ID for the user</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the client session was created</td></tr><tr><td><code>client_session_id</code></td><td>ID of the client session</td></tr><tr><td><code>device_count</code></td><td>Number of devices to which the client session grants access</td></tr><tr><td><code>connected_account_ids</code></td><td>Array of <a href="../connected-accounts/">connected account</a> IDs associated with this client session</td></tr><tr><td><code>connect_webview_ids</code></td><td>Array of <a href="../../core-concepts/connect-webviews/">Connect Webview</a> IDs associated with the client session</td></tr><tr><td><code>user_identity_ids</code></td><td>Array of user identity IDs on behalf of which which the client session may act</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
  token: 'seam_cst1271Q3JUh_A3ECdSrrqgYp98SmB9qY2NGp',
  user_identifier_key: 'internal user ID 1',
  created_at: '2023-12-26T04:23:46.829Z',
  client_session_id: 'c75d4330-ae01-4dfd-b6c5-f3e94e0d8168',
  device_count: 4,
  connected_account_ids: [
    '3ea0b67f-649f-4131-bfe3-f2035e77a3f9',
    '6e1cad57-b244-40ca-b4f3-30a46c8000d4'
  ],
  connect_webview_ids: [],
  user_identity_ids: []
}
```
{% endtab %}
{% endtabs %}
