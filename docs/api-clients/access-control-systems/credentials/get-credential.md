---
description: Get a specified credential
---

# Get a Credential

Returns a specified [credential](../../../products/access-systems/issuing-credentials.md) (`acs_credential` object).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/credentials/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired credential by including the corresponding `acs_credentials_id` in the request body.

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credentials_id": "d3bb3509-b3a6-4101-b697-27626327aa59"
}'
```
{% endtab %}
{% endtabs %}

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_credentials_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired credential</td></tr></tbody></table>

## Response

Returns an `acs_credential` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_credential_id</code></td><td>ID of the credential</td></tr><tr><td><code>acs_user_id</code></td><td>ID of the user to whom the credential belongs</td></tr><tr><td><code>code</code></td><td><a href="../../../products/smart-locks/access-codes/">Access (PIN) code</a> for the credential</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the <a href="../../../products/access-systems/">access control system</a> that contains the credential</td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the credential type</td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the credential type</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces.md">workspace</a> that contains the credential</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the credential was created</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "acs_credential": {
    "acs_credential_id": "d3bb3509-b3a6-4101-b697-27626327aa59",
    "acs_user_id": "efaeae64-e471-4e1f-a621-f518c624d99c",
    "code": "669781",
    "acs_system_id": "fc793d86-dcfd-4cfe-859f-0b9c1a5c1360",
    "external_type": "pti_card",
    "external_type_display_name": "PTI card",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2023-09-30T06:29:04.966Z"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}