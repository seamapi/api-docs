---
description: Update the code for a specified credential
---

# Update a Credential

Updates the code for a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/credentials/update" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired credential and updated code by including the corresponding `acs_credential_id` and `code` parameters, respectively, in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_credential_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the desired credential</td></tr><tr><td><code>code</code></td><td>String<br><em>Required</em></td><td>Replacement access (PIN) code for the credential</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.credentials.update(
  acs_credential_id="66666666-6666-6666-6666-666666666666",
  code="7890"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  "https://connect.getseam.com/acs/credentials/update" \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "code": "7890"
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.credentials.update({
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
  code: "7890"
});
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
```php
$seam->acs->credentials->update(
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
  code: "7890"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.CredentialsAcs.Update(
  acsCredentialId: "66666666-6666-6666-6666-666666666666",
  code: "7890"
);
```
{% endtab %}

{% tab title="Java" %}
```java
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
```go
acs_credential, uErr := client.Acs.Credentials.Update(
  context.Background(), &acs.CredentialsUpdateRequest{
    AcsCredentialId: api.String("66666666-6666-6666-6666-666666666666"),
    Code: "7890",
  },
)
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_credential` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_credential_id</code></td><td>ID of the credential</td></tr><tr><td><code>acs_user_id</code></td><td>ID of the user to whom the credential belongs</td></tr><tr><td><code>display_name</code></td><td>Display name that corresponds to the credential type</td></tr><tr><td><code>code</code></td><td>Access (PIN) code for the credential</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the <a href="../../../products/access-systems/">access control system</a> that contains the credential</td></tr><tr><td><code>access_method</code></td><td>Access method for the credential. Supported values: <code>code</code>, <code>card</code>, <code>mobile_key</code></td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the credential type</td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the credential type</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the credential</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the credential was created</td></tr><tr><td><code>is_multi_phone_sync_credential</code></td><td>Indicates whether the credential is a <a href="../../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md#what-are-multi-phone-sync-credentials">multi-phone sync credential</a></td></tr><tr><td><code>starts_at</code></td><td>Date and time at which the credential validity starts, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format</td></tr><tr><td><code>ends_at</code></td><td>Date and time at which the credential validity ends, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format</td></tr><tr><td><code>XXX_metadata</code></td><td>ACS manufacturer-specific metadata for the credential, where <code>XXX</code> is the <a href="../../../device-and-system-integration-guides/overview.md#access-control-systems">manufacturer</a></td></tr></tbody></table>

### Sample Response

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

{% tabs %}
{% tab title="Python" %}
```
AcsCredential(
  acs_credential_id='99999999-9999-9999-9999-999999999999',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  display_name='Multi Phone Sync Credential',
  code='7890',
  acs_system_id='11111111-1111-1111-1111-111111111111',
  access_method='mobile_key',
  workspace_id='00000000-0000-0000-0000-000000000000',
  created_at='2024-04-12T03:56:22.396Z',
  is_multi_phone_sync_credential=True,
  # manufacturer-specific metadata
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "acs_credential": {
    "acs_credential_id": "99999999-9999-9999-9999-999999999999",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "display_name": "Multi Phone Sync Credential",
    "code": "7890",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "access_method": "mobile_key",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2024-04-12T03:56:22.396Z",
    "is_multi_phone_sync_credential": true,
    # manufacturer-specific metadata
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
{
  acs_credential_id: '99999999-9999-9999-9999-999999999999',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  display_name: 'Multi Phone Sync Credential',
  code: '7890',
  acs_system_id: '11111111-1111-1111-1111-111111111111',
  access_method: 'mobile_key',
  workspace_id: '00000000-0000-0000-0000-000000000000',
  created_at: '2024-04-12T03:56:22.396Z',
  is_multi_phone_sync_credential: true,
  // manufacturer-specific metadata
}
```
{% endtab %}

{% tab title="Ruby" %}
```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
```json
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "display_name": "Multi Phone Sync Credential",
  "code": "7890",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "access_method": "mobile_key",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "created_at": "2024-04-12T03:56:22.396Z",
  "is_multi_phone_sync_credential": true,
  // manufacturer-specific metadata
}
```
{% endtab %}

{% tab title="C#" %}
```json
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "display_name": "Multi Phone Sync Credential",
  "code": "7890",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "access_method": "mobile_key",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "created_at": "2024-04-12T03:56:22.396Z",
  "is_multi_phone_sync_credential": true,
  // manufacturer-specific metadata
}
```
{% endtab %}

{% tab title="Java" %}
```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
```json
{
  "acs_credential": {
    "acs_credential_id": "99999999-9999-9999-9999-999999999999",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "display_name": "Multi Phone Sync Credential",
    "code": "7890",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "access_method": "mobile_key",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2024-04-12T03:56:22.396Z",
    "is_multi_phone_sync_credential": true,
    # manufacturer-specific metadata
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
