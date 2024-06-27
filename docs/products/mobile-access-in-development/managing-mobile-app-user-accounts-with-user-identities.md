---
description: Learn how to use Seam user identities to manage mobile app user accounts.
---

# Managing Mobile App User Accounts with User Identities

## What is a User Identity?

Seam user identities are a feature for tracking and managing user accounts in your application. This feature assigns unique identifiers to each of your users, enabling you to issue and manage their [mobile credentials](./#managing-mobile-credentials) and access permissions. Each user identity is mapped to a user account in your app.

<figure><img src="../../.gitbook/assets/identities accounts.png" alt="Each user identity is mapped to a user account in your app." width="563"><figcaption></figcaption></figure>



### User Identities Can Be Connected to Users in Multiple Access Control Systems

User identities can be linked to one [ACS user](../access-systems/#what-is-a-user) in each access control system. Any mobile credentials issued to these ACS users are consolidated under the user identity. Consequently, a user's mobile app account has access to these credentials through the user identity.

<figure><img src="../../.gitbook/assets/acs identites.png" alt="A user identity can be connected to an ACS user in each ACS." width="563"><figcaption></figcaption></figure>

***

## Create a User Identity and Associate it with an ACS User

### 1. Create a User Identity

To [create a user identity](../../api-clients/user-identities/create-a-user-identity.md), you can specify any of the following characteristics:

* Unique user identity key (`user_identity_key`)
* Unique email address (`email_address`)
* Unique phone number (`phone_number`)
* Full name (`full_name`)

Note that if you specify one or more of the `user_identity_key`, `email_address`, or `phone_number`, each of these values must be unique within your [workspace](../../core-concepts/workspaces/).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.user_identities.create(
  user_identity_key = "jean_doe",
  email_address = "jean@example.com",
  phone_number = "+15555550110",
  full_name = "Jean Doe"
)
```

**Response:**

```
UserIdentity"(user_identity_id='48500a8e-5e7e-4bde-b7e5-0be97cae5d7a',
              user_identity_key='jean_doe',
              email_address='jean@example.com',
              phone_number='+15555550110',
              display_name='Jean Doe',
              full_name='Jean Doe',
              created_at='2024-01-11T05:37:50.264Z',
              workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be')
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_key": "jean_doe",
  "email_address": "jean@example.com",
  "phone_number": "+15555550110",
  "full_name": "Jean Doe"
}'
```

**Response:**

```json
{
  "user_identity": {
    "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "user_identity_key": "jean_doe",
    "email_address": "jean@example.com",
    "phone_number": "+15555550110",
    "display_name": "Jean Doe",
    "full_name": "Jean Doe",
    "created_at": "2024-01-11T05:37:50.264Z",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be"
  },
  "ok": true
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
userIdentity, uErr := client.UserIdentities.Create(context.Background(), &useridentities.UserIdentitiesCreateRequest{
    UserIdentityKey: api.String("jenny_lee"),
    EmailAddress: api.String("jenny@example.com"),
    PhoneNumber: api.String("+15555550111"),
    FullName: api.String("Jenny Lee"),
})

if uErr != nil {
    return uErr
}

fmt.Println(userIdentity)
return nil
```

**Response:**

```json
{
    "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "user_identity_key": "jean_doe",
    "email_address": "jean@example.com",
    "phone_number": "+15555550110",
    "display_name": "Jean Doe",
    "full_name": "Jean Doe",
    "created_at": "2024-01-11T05:37:50.264Z",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be"
}
```
{% endtab %}
{% endtabs %}

### 2. Assign an ACS User to the User Identity

To [link an ACS user with a user identity](../../api-clients/user-identities/add-an-acs-user-to-a-user-identity.md), provide the ID of the user identity and the ID of the ACS user.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
user_identity = seam.user_identities.get(email_address="jean@example.com")
acs_user = seam.acs.users.get(email_address="jean@example.com")

seam.user_identities.add_acs_user(
  user_identity_id=user_identity.user_identity_id,
  acs_user_id=acs_user.acs_user_id
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
  'https://connect.getseam.com/user_identities/add_acs_user' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
  "acs_user_id": "4d223973-0874-4831-8630-bfcb29e6bce0"
}'
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
_, uErr := client.UserIdentities.AddAcsUser(context.Background(), &useridentities.UserIdentitiesAddAcsUserRequest{
    UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    AcsUserId: "4d223973-0874-4831-8630-bfcb29e6bce0",
})

if uErr != nil {
    return uErr
}

return nil
```

**Response:**

```
None
```
{% endtab %}
{% endtabs %}
