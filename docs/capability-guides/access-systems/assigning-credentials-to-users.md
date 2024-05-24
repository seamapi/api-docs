---
description: >-
  Learn how to assign existing credentials the ACS users and unassign
  credentials from ACS users.
---

# Assigning Credentials to ACS Users

This guide explains how to assign existing [credentials](managing-credentials.md) to [ACS users](../../products/access-systems/user-management.md) and unassign credentials from users. Once you assign credentials to ACS users, these users can use the credentials to access areas and resources according to their permissions. When you unassign credentials from ACS users, these users can no longer use these specific credentials to access areas or resources.

***

## Assign a Credential to an ACS User

To [assign a credential to an ACS user](../../api-clients/access-control-systems/credentials/assign-a-credential-to-a-user.md), provide both the `acs_user_id` and the `acs_credential_id`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.credentials.assign(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  acs_credential_id="66666666-6666-6666-6666-666666666666"
)
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

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
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/assign' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "acs_credential_id": "66666666-6666-6666-6666-666666666666"
}'
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

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
**Request:**

```javascript
await seam.acs.credentials.assign({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
});
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

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
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->acs->credentials->assign(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-66666666"
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

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
**Request:**

```csharp
seam.CredentialsAcs.Assign(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  acsCredentialId: "66666666-6666-6666-6666-66666666"
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

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
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
acs_credential, uErr := client.Acs.Credentials.Assign(
  context.Background(), &acs.CredentialsAssignRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
    AcsCredentialId: "66666666-6666-6666-6666-66666666",
  },
)
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

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

***

## Unassign a Credential from an ACS User

To [unassign a credential from an ACS user](../../api-clients/access-control-systems/credentials/unassign-a-credential-from-a-user.md), provide both the `acs_user_id` and the `acs_credential_id`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.credentials.unassign(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  acs_credential_id="66666666-6666-6666-6666-666666666666"
)
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

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
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/unassign' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "acs_credential_id": "66666666-6666-6666-6666-666666666666"
}'
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

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
**Request:**

```javascript
await seam.acs.credentials.unassign({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
});
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

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
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->acs->credentials->unassign(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-66666666"
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

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
**Request:**

```csharp
seam.CredentialsAcs.Unassign(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  acsCredentialId: "66666666-6666-6666-6666-66666666"
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

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
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
acs_credential, uErr := client.Acs.Credentials.Unassign(
  context.Background(), &acs.CredentialsUnassignRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
    AcsCredentialId: "66666666-6666-6666-6666-66666666",
  },
)
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

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
