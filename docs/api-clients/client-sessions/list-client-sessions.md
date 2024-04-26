---
description: Get all client sessions
---

# List Client Sessions

Returns a list of all [client sessions](../../core-concepts/authentication/client-session-tokens/).

{% swagger src="https://connect.getseam.com/openapi.json" path="/client_sessions/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

List all client sessions or filter the list of client sessions by including the corresponding filter parameters in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>client_session_id</code></td><td>String<br><em>Optional</em></td><td>ID of the client session that you want to retrieve</td></tr><tr><td><code>user_identifier_key</code></td><td>String<br><em>Optional</em></td><td>Your own internal user ID for the user</td></tr><tr><td><code>connect_webview_id</code></td><td>String<br><em>Optional</em></td><td>ID of the <a href="../../core-concepts/connect-webviews/">Connect Webview</a> for which you want to retrieve client sessions</td></tr><tr><td><code>without_user_identifier_key</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether to retrieve only client sessions without associated user identifier keys</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="JavaScript" %}
```javascript
await seam.clientSessions.list()
```
{% endtab %}
{% endtabs %}

## Response

Returns a `client_sessions` array, in which each returned client session (`client_session`) contains the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../core-concepts/workspaces/">workspace</a> that contains the client session</td></tr><tr><td><code>token</code></td><td>Client session token associated with the client session</td></tr><tr><td><code>user_identifier_key</code></td><td>Your own internal user ID for the user</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the client session was created</td></tr><tr><td><code>client_session_id</code></td><td>ID of the client session</td></tr><tr><td><code>user_identity_ids</code></td><td>Array of user identity IDs on behalf of which which the client session may act</td></tr><tr><td><code>third_party_account_ids</code></td><td>Array of <a href="../connected-accounts/">connected account</a> IDs associated with this client session</td></tr><tr><td><code>connect_webview_ids</code></td><td>Array of <a href="../../core-concepts/connect-webviews/">Connect Webview</a> IDs associated with the client session</td></tr><tr><td><code>device_count</code></td><td>Number of devices to which the client session grants access</td></tr><tr><td><code>connected_account_ids</code></td><td>Array of <a href="../connected-accounts/">connected account</a> IDs associated with this client session</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
[
  {
    workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    token: 'seam_cst1271Q3JUh_A3ECdSrrqgYp98SmB9qY2NGp',
    user_identifier_key: 'internal user ID 1',
    created_at: '2023-12-26T04:23:46.829Z',
    client_session_id: 'c75d4330-ae01-4dfd-b6c5-f3e94e0d8168',
    user_identity_ids: [],
    third_party_account_ids: [
      '3ea0b67f-649f-4131-bfe3-f2035e77a3f9',
      '6e1cad57-b244-40ca-b4f3-30a46c8000d4'
    ],
    connect_webview_ids: [],
    device_count: 4,
    connected_account_ids: [
      '3ea0b67f-649f-4131-bfe3-f2035e77a3f9',
      '6e1cad57-b244-40ca-b4f3-30a46c8000d4'
    ]
  },
  {
    workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    token: 'seam_cst1891oqCmE_6dBwV8PJ2Ffoe9dWYVyMfVHq',
    user_identifier_key: 'internal user ID 2',
    created_at: '2023-12-26T04:25:50.041Z',
    client_session_id: 'e1006128-19a8-4e4d-9a91-536d80cf9c21',
    user_identity_ids: [],
    third_party_account_ids: [
      '2e884e71-b2c1-41a0-bb2c-ec94a7b4c6a4',
      'b0ccf472-cb63-400c-bf21-5b809f5e1afd'
    ],
    connect_webview_ids: [],
    device_count: 4,
    connected_account_ids: [
      '2e884e71-b2c1-41a0-bb2c-ec94a7b4c6a4',
      'b0ccf472-cb63-400c-bf21-5b809f5e1afd'
    ]
  },
  ...
]
```
{% endtab %}
{% endtabs %}
