---
description: Grant a client session access to resources
---

# Grant Access to a Client Session

Grants a [client session](../../core-concepts/authentication/client-session-tokens/) access to one or more resources, such as [Connect Webviews](../../core-concepts/connect-webviews/), [user identities](../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity), and so on.

{% swagger src="https://connect.getseam.com/openapi.json" path="/client_sessions/grant_access" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the resources that you want a client session to be able to access by including the corresponding parameters in the request body. You can also specify an existing client session ID if desired.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>client_session_id</code></td><td>String<br><em>Optional</em></td><td>ID of the desired client session</td></tr><tr><td><code>user_identifier_key</code></td><td>String<br><em>Optional</em></td><td>Your own internal user ID for the user to associate with the client session</td></tr><tr><td><code>connected_account_ids</code></td><td>Array of strings<br><em>Optional</em></td><td>Array of IDs of the <a href="../connected-accounts/">connected accounts</a> to associate with the client session</td></tr><tr><td><code>connect_webview_ids</code></td><td>Array of strings<br><em>Optional</em></td><td>Array of IDs of the <a href="../../core-concepts/connect-webviews/">Connect Webviews</a> to associate with the client session</td></tr><tr><td><code>user_identity_ids</code></td><td>Array of strings<br><em>Optional</em></td><td>Array of IDs of the <a href="../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity">user identities</a> to associate with the client session</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="JavaScript" %}
```javascript
await seam.clientSessions.grant_access({
  user_identifier_key: "internal user ID 2",
  connect_webview_ids: [
    "b9f2ad01-12b7-47cf-b566-ed5d9b47e834"
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
  workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
  token: 'seam_cst12GGG4LUp_AoHvcSx39aY4AoHQ7GdMDRTH',
  user_identifier_key: 'internal user ID 2',
  created_at: '2023-12-26T05:11:55.048Z',
  client_session_id: '911b4a3f-e566-44a9-a8ac-267d9e586754',
  connected_account_ids: [
      '3ea0b67f-649f-4131-bfe3-f2035e77a3f9',
      '6e1cad57-b244-40ca-b4f3-30a46c8000d4'],
  connect_webview_ids: [
      'b9f2ad01-12b7-47cf-b566-ed5d9b47e834'],
  user_identity_ids: [
      '5c945ab5-c75e-4bcb-8e5f-9410061c401f'],
  device_count: 4
}
```
{% endtab %}
{% endtabs %}
