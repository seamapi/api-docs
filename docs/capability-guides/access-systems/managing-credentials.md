---
description: Learn how to manage credentials and assign them to users.
---

# Managing Credentials

Credentials determine the means by which a user gains access at an entrance. Types of credentials include key cards, mobile passes, and PIN codes. This guide provide instructions on creating and removing credentials, and reassigning them to users.

***

## Create a Credential for a User

To [create a credential for a user](../../api-clients/access-control-systems/credentials/create-credential-for-user.md), provide the user ID (`acs_user_id`) and the desired access method (`access_method`). Seam supports the following access methods:

* `code` for a PIN code-based credential
* `card` for a key card-based credential
* `mobile_key` for a [Seam mobile key](../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md#what-are-multi-phone-sync-credentials).

Depending on the access control system and the type of credential you are issuing, you can also specify the following properties for the new credential:

* PIN code (`code`).
* Start and end time frame for the validity of the credential (`starts_at` and `ends_at`).
* Whether the credential is a multi-phone sync credential.\
  When creating a Seam mobile key, make sure to issue a multi-phone sync credential (`is_multi_phone_sync_credential`).
* Brand-specific data.

{% hint style="info" %}
Make sure to note any brand-specific metadata and restrictions. For details, see the applicable [device or system integration guide](broken-reference).
{% endhint %}

The response includes the ID (`acs_credential_id`) of the newly-created credential, the user (`acs_user_id`) associated with the credential, and other additional properties of the credential.

***

### Create a PIN Code-Based Credential

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.credentials.create(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  access_method="code",
  code="824759"
)
```

**Response:**

```
AcsCredential(
  acs_credential_id='66666666-6666-6666-6666-666666666666',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  code='824759',
  access_method='code',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

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

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "code": "824759",
    "access_method": "code",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.credentials.create({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "code",
  code: "824759"
});
```

**Response:**

```json
{
  acs_credential_id: '66666666-6666-6666-6666-666666666666',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  code: '824759',
  access_method: 'code',
  ...
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
$seam->acs->credentials->create(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "code",
  code: "824759"
);
```

**Response:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "code": "824759",
  "access_method": "code",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.CredentialsAcs.Create(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  accessMethod: "code",
  code: "824759"
);
```

**Response:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "code": "824759",
  "access_method": "code",
  ...
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
credential, uErr := client.Acs.Credentials.Create(
  context.Background(), &acs.CredentialsCreateRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
    AccessMethod: "code",
    Code: api.String("824759"),
  },
);
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "code": "824759",
    "access_method": "code",
    ...
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Create a Key Card-Based Credential

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.credentials.create(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  access_method="card",
  code="123456"
)
```

**Response:**

```
AcsCredential(
  acs_credential_id='77777777-7777-7777-7777-777777777777',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  access_method='card',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

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

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "77777777-7777-7777-7777-777777777777",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "access_method": "card",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.credentials.create({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "card",
  code: "123456"
});
```

**Response:**

```json
{
  acs_credential_id: '77777777-7777-7777-7777-777777777777',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  access_method: 'card',
  ...
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
$seam->acs->credentials->create(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "card",
  code: "123456"
);
```

**Response:**

```json
{
  "acs_credential_id": "77777777-7777-7777-7777-777777777777",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "card",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.CredentialsAcs.Create(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  accessMethod: "card",
  code: "123456"
);
```

**Response:**

```
{
  "acs_credential_id": "77777777-7777-7777-7777-777777777777",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "card",
  ...
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
credential, uErr := client.Acs.Credentials.Create(
  context.Background(), &acs.CredentialsCreateRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
    AccessMethod: "card",
    Code: api.String("123456"),
  },
);
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "77777777-7777-7777-7777-777777777777",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "access_method": "card",
    ...
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Create a Seam Mobile Key

Depending on the ACS for which you want to create a credential, you may also need to include system-specific metadata. See the [system integration guide](broken-reference) for your ACS. For more information about mobile access and issuing mobile credentials, see [Mobile Access](../../products/mobile-access-in-development/) and [Issuing Mobile Credentials from an Access Control System](../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md).

{% tabs %}
{% tab title="Python" %}
**Request:**

{% hint style="info" %}
This request contains manufacturer-specific metadata that may vary by [manufacturer](broken-reference).
{% endhint %}

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
  ...
)
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](broken-reference).
{% endhint %}

```
AcsCredential(
  acs_credential_id='99999999-9999-9999-9999-999999999999',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  access_method='mobile_key',
  is_multi_phone_sync_credential=True,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

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
  ...
}'
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "99999999-9999-9999-9999-999999999999",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "access_method": "mobile_key",
    "is_multi_phone_sync_credential": true,
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

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
  ...
});
```

**Response:**

```json
{
  acs_credential_id: '99999999-9999-9999-9999-999999999999',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  access_method: 'mobile_key',
  is_multi_phone_sync_credential: true,
  ...
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
  ...
);
```

**Response:**

```json
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "mobile_key",
  "is_multi_phone_sync_credential": true,
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

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
  ...
);
```

**Response:**

```json
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "mobile_key",
  "is_multi_phone_sync_credential": true,
  ...
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
    ...
  },
)
```

**Response:**

```json
{
  "acs_user": {
    "acs_credential_id": "99999999-9999-9999-9999-999999999999",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "access_method": "mobile_key",
    "is_multi_phone_sync_credential": true,
    ...
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

## Delete a Credential

To [delete a credential](../../api-clients/access-control-systems/credentials/delete-credential.md), provide the credential ID (`acs_credential_id`).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.credentials.delete(
  acs_credential_id="66666666-6666-6666-6666-666666666666"
)
```

**Response:**

```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/delete' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666"
}'
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.credentials.delete({
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
});
```

**Response:**

```json
void
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
$seam->acs->credentials->delete(
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
);
```

**Response:**

```
void
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.CredentialsAcs.Delete(
  acsCredentialId: "66666666-6666-6666-6666-666666666666"
);
```

**Response:**

```
void
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
_, uErr := client.Acs.Credentials.Delete(
  context.Background(), &acs.CredentialsDeleteRequest{
    acsCredentialId: "66666666-6666-6666-6666-666666666666",
  },
);
```

**Response:**

```json
void
```
{% endtab %}
{% endtabs %}
