---
description: >-
  Get a client session with specific characteristics or create it if it does not
  yet exist
---

# Get or Create a Client Session

Gets a [client session](../../core-concepts/authentication/client-session-tokens/) with specific characteristics or create a new client session with these characteristics if it does not yet exist.

{% swagger src="https://connect.getseam.com/openapi.json" path="/client_sessions/get_or_create" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify any combination of desired client session characteristics by including the corresponding parameters in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identifier_key</code></td><td>String<br><em>Optional</em></td><td>Your own internal user ID for the user to associate with the client session (or that is already associated with the existing client session)</td></tr><tr><td><code>connect_webview_ids</code></td><td>Array of strings<br><em>Optional</em></td><td>Array of IDs of the <a href="../../core-concepts/connect-webviews/">Connect Webviews</a> to associate with the client session (or that are already associated with the existing client session)</td></tr><tr><td><code>connected_account_ids</code></td><td>Array of strings<br><em>Optional</em></td><td>Array of IDs of the <a href="../connected-accounts/">connected accounts</a> to associate with the client session (or that are already associated with the existing client session)</td></tr><tr><td><code>user_identity_ids</code></td><td>Array of strings<br><em>Optional</em></td><td>Array of IDs of the <a href="../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity">user identities</a> to associate with the client session (or that are already associated with the existing client session)</td></tr><tr><td><code>expires_at</code></td><td>String<br><em>Optional</em></td><td>Date and time at which the client session should expire (or at which the existing client session expires)</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="JavaScript" %}
```javascript
await seam.clientSessions.getOrCreate({
  user_identifier_key: "internal-user-id-1",
  connected_account_ids: [
    "3ea0b67f-649f-4131-bfe3-f2035e77a3f9",
    "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
  ]
})
```
{% endtab %}
{% endtabs %}

## Response

Returns a `client_session` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>token</code></td><td>Client session token associated with the client session</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../core-concepts/workspaces/">workspace</a> that contains the client session</td></tr><tr><td><code>user_identifier_key</code></td><td>Your own internal user ID for the user</td></tr><tr><td><code>client_session_id</code></td><td>ID of the client session</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the client session was created</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  token: 'seam_cst12GGG4LUp_AoHvcSx39aY4AoHQ7GdMDRTH',
  workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
  user_identifier_key: 'internal user ID 1',
  client_session_id: '911b4a3f-e566-44a9-a8ac-267d9e586754',
  created_at: '2023-12-26T05:11:55.048Z'
}
```
{% endtab %}
{% endtabs %}
