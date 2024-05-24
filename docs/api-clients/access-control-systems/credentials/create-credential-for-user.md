---
description: Create a new credential for a specified ACS user
---

# Create a Credential for a User

Creates a new [credential](../../../capability-guides/access-systems/managing-credentials.md) for a specified [ACS user](../../../products/access-systems/user-management.md).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/credentials/create" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the user to which the new credential belongs and the access method for the new credential by including the corresponding `acs_user_id` and `access_method` in the request body. You can also specify additional parameters, such as a `code` for the credential. Note that the `access_method` determines the additional required and useful parameters.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the user to whom the new credential belongs</td></tr><tr><td><code>access_method</code></td><td>Enum (string)<br><em>Required</em></td><td>Access method for the new credential. Supported values: <code>code</code>, <code>card</code>, <code>mobile_key</code></td></tr><tr><td><code>code</code></td><td>String<br><em>Optional</em></td><td>Access (PIN) code for the new credential<br>There may be manufacturer-specific code restrictions. For details, see the applicable <a href="broken-reference">device or system integration guide</a>.</td></tr><tr><td><code>is_multi_phone_sync_credential</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether the new credential is a <a href="../../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md#what-are-multi-phone-sync-credentials">multi-phone sync credential</a></td></tr><tr><td><code>allowed_acs_entrance_ids</code></td><td>Array of strings (UUIDs)<br><em>Optional</em></td><td>Set of IDs of the <a href="../../../capability-guides/access-systems/retrieving-entrance-details.md">entrances</a> for which the new credential grants access</td></tr><tr><td><code>credential_manager_acs_system_id</code></td><td>Enum (string)<br><em>Optional</em></td><td>ACS system ID of the credential manager for the new user</td></tr><tr><td><code>XXX_metadata</code></td><td>Object<br><em>Optional</em></td><td>ACS manufacturer-specific metadata for the new credential, where <code>XXX</code> is the <a href="../../../device-and-system-integration-guides/overview.md#access-control-systems">manufacturer</a></td></tr><tr><td><code>starts_at</code></td><td>Datetime<br><em>Optional</em></td><td>Date and time at which the validity of the new credential starts, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format</td></tr><tr><td><code>ends_at</code></td><td>Datetime<br><em>Optional</em></td><td>Date and time at which the validity of the new credential ends, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format</td></tr></tbody></table>

### Sample Request

#### PIN Code-Based Credential

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.credentials.create(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  access_method="code",
  code="824759"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "code",
  "code": "824759"
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.credentials.create({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "code",
  code: "824759"
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
$seam->acs->credentials->create(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "code",
  code: "824759"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.CredentialsAcs.Create(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  accessMethod: "code",
  code: "824759"
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
credential, uErr := client.Acs.Credentials.Create(
  context.Background(), &acs.CredentialsCreateRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
    AccessMethod: "code",
    Code: api.String("824759"),
  },
);
```
{% endtab %}
{% endtabs %}

#### Key Card-Based Credential

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.credentials.create(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  access_method="card",
  code="123456"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "card",
  "code": "123456"
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.credentials.create({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "card",
  code: "123456"
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
$seam->acs->credentials->create(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "card",
  code: "123456"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.CredentialsAcs.Create(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  accessMethod: "card",
  code: "123456"
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
credential, uErr := client.Acs.Credentials.Create(
  context.Background(), &acs.CredentialsCreateRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
    AccessMethod: "card",
    Code: api.String("123456"),
  },
);
```
{% endtab %}
{% endtabs %}

#### Seam Mobile Key

{% hint style="info" %}
This request contains manufacturer-specific metadata that may vary by [manufacturer](../../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.credentials.create(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  allowed_acs_entrance_ids=[
    "55555555-5555-5555-5555-555555555555",
    "55555555-5555-5555-5555-000000000000"
  ],
  credential_manager_acs_system_id="88888888-8888-8888-8888-888888888888",
  access_method="mobile_key",
  is_multi_phone_sync_credential=True,
  starts_at="2024-03-01T10:40:00Z",
  ends_at="2024-03-04T10:40:00Z",
  # manufacturer-specific metadata
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "allowed_acs_entrance_ids": [
    "55555555-5555-5555-5555-555555555555",
    "55555555-5555-5555-5555-000000000000"
  ],
  "credential_manager_acs_system_id": "88888888-8888-8888-8888-888888888888",
  "access_method": "mobile_key",
  "is_multi_phone_sync_credential": true,
  "starts_at": "2024-03-01T10:40:00Z",
  "ends_at": "2024-03-04T10:40:00Z",
  # manufacturer-specific metadata
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.credentials.create({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  allowed_acs_entrance_ids: [
    "55555555-5555-5555-5555-555555555555",
    "55555555-5555-5555-5555-000000000000"
  ],
  credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
  access_method: "mobile_key",
  is_multi_phone_sync_credential: true,
  starts_at: "2024-03-01T10:40:00Z",
  ends_at: "2024-03-04T10:40:00Z",
  // manufacturer-specific metadata
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
$seam->acs->credentials->create(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  allowed_acs_entrance_ids: [
    "55555555-5555-5555-5555-555555555555",
    "55555555-5555-5555-5555-000000000000"
  ],
  credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
  access_method: "mobile_key",
  is_multi_phone_sync_credential: true,
  starts_at: "2024-03-01T10:40:00Z",
  ends_at: "2024-03-04T10:40:00Z",
  // manufacturer-specific metadata
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.CredentialsAcs.Create(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  allowedAcsEntranceIds: new List<string>
    {
      "55555555-5555-5555-5555-555555555555",
      "55555555-5555-5555-5555-000000000000"
    },
  credentialManagerAcsSystemId: "88888888-8888-8888-8888-888888888888",
  accessMethod: "mobile_key",
  isMultiPhoneSyncCredential: true,
  startsAt: "2024-03-01T10:40:00Z",
  endsAt: "2024-03-04T10:40:00Z",
  // manufacturer-specific metadata
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
startsAt, err := time.Parse(time.RFC3339, "2024-03-01T10:40:00Z")
endsAt, err := time.Parse(time.RFC3339, "2024-03-04T10:40:00Z")
if err != nil {
  return err
}

credential, uErr := client.Acs.Credentials.Create(
  context.Background(), &acs.CredentialsCreateRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
    AllowedAcsEntranceIds: {
        "55555555-5555-5555-5555-555555555555",
        "55555555-5555-5555-5555-000000000000",
      },
    CredentialManagerAcsSystemId: api.String("88888888-8888-8888-8888-888888888888"),
    AccessMethod: "mobile_key",
    IsMultiPhoneSyncCredential: api.Bool(true),
    StartsAt: api.Time(startsAt),
    EndsAt: api.Time(endsAt),
    // manufacturer-specific metadata
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
  code=null,
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
    "code": null,
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
  code: null,
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
  "code": null,
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
  "code": null,
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
    "code": null,
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
