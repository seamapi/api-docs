
---
description: Get a specified client session.
---
# GetClientSession
Returns a specified [client session](../../core-concepts/authentication/client-session-tokens/).
{% swagger src="https://connect.getseam.com/openapi.json" path="/client_sessions/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}
## Request
Specify the desired client session by including the corresponding `client_session_id` or `user_identifier_key` in the request body.
### Request Body Parameters
<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody>

<tr><td><code>client_session_id</code></td><td>String<br><em>Optional</em></td><td>ID of the desired client session.</td></tr>

<tr><td><code>user_identifier_key</code></td><td>String<br><em>Optional</em></td><td>Your own internal user ID for the user associated with the client session to retrieve.</td></tr>

</tbody></table>
### Sample Request
{% tabs %}
{% tab title="JavaScript" %}
```javascript
const clientSession = await seam.clientSessions.get({
    client_session_id: &#34;c75d4330-ae01-4dfd-b6c5-f3e94e0d8168&#34;,
  })
```
{% endtab %}
{% endtabs %}
## Response
Returns a `client_session` containing the following properties:
<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody>

<tr><td><code>workspace_id</code></td><td>ID of the workspace that contains the client session</td></tr>

<tr><td><code>token</code></td><td>Client session token associated with the client session</td></tr>

<tr><td><code>user_identifier_key</code></td><td>Your own internal user ID for the user</td></tr>

<tr><td><code>created_at</code></td><td>Date and time at which the client session was created</td></tr>

<tr><td><code>client_session_id</code></td><td>ID of the client session</td></tr>

<tr><td><code>device_count</code></td><td>Number of devices to which the client session grants access</td></tr>

<tr><td><code>connected_account_ids</code></td><td>Array of connected account IDs associated with this client session</td></tr>

<tr><td><code>connect_webview_ids</code></td><td>Array of Connect Webview IDs associated with the client session</td></tr>

<tr><td><code>user_identity_ids</code></td><td>Array of user identity IDs on behalf of which the client session may act</td></tr>

</tbody></table>
### Sample Response
{% tabs %}
{% tab title="JSON" %}
```json
{
    &#34;workspace_id&#34;: &#34;398d80b7-3f96-47c2-b85a-6f8ba21d07be&#34;,
    &#34;token&#34;: &#34;seam_cst1271Q3JUh_A3ECdSrrqgYp98SmB9qY2NGp&#34;,
    &#34;user_identifier_key&#34;: &#34;internal user ID 1&#34;,
    &#34;created_at&#34;: &#34;2023-12-26T04:23:46.829Z&#34;,
    &#34;client_session_id&#34;: &#34;c75d4330-ae01-4dfd-b6c5-f3e94e0d8168&#34;,
    &#34;device_count&#34;: 4,
    &#34;connected_account_ids&#34;: [
      &#34;3ea0b67f-649f-4131-bfe3-f2035e77a3f9&#34;,
      &#34;6e1cad57-b244-40ca-b4f3-30a46c8000d4&#34;
    ],
    &#34;connect_webview_ids&#34;: [],
    &#34;user_identity_ids&#34;: []
  }
```
{% endtab %}
{% endtabs %}