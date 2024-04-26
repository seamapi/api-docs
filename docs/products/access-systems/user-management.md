---
description: >-
  Learn how to manage your users and sync tenants and visitors from your
  property management platform.
---

# Managing Users

This guide explains how to create and manage users in an access control system (ACS). Using the [Access Control Systems API](../../api-clients/access-control-systems/), you can automate issuing access to long-term tenants or visitors.

***

## Before You Begin

To add users to your access system, first retrieve the ID (`acs_system_id`) of the access system that you want to configure. To retrieve the access system details, use [Get a System](../../api-clients/access-control-systems/systems/get-system.md) or [List Systems](../../api-clients/access-control-systems/systems/list-systems.md). Then, continue to the remaining sections in this topic to learn how to manage users.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.systems.list()
```

**Response:**

```
[
  AcsSystem(
    acs_system_id='11111111-1111-1111-1111-111111111111',
    name='Visionline System',
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/systems/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json'
```

**Response:**

```json
{
  "acs_systems": [
    {
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "name": "Visionline System",
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.systems.list();
```

**Response:**

```json
[
  {
    acs_system_id: '11111111-1111-1111-1111-111111111111',
    name: 'Visionline System',
    ...
  },
  ...
]
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
$seam->acs->systems->list();
```

**Response:**

```json
[
  {
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "name": "Visionline System",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.SystemsAcs.List();
```

**Response:**

```json
{
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "name": "Visionline System",
  ...
}
...
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
acs_systems, uErr := client.Acs.Systems.List(
  context.Background(), &acs.SystemsListRequest{},
)
```

**Response:**

```json
{
  "acs_systems": [
    {
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "name": "Visionline System",
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

## Create a User

To [create a user](../../api-clients/access-control-systems/users/create-user.md), provide the ACS system ID (`acs_system_id`) of the system and the attributes of the user, such as the full name (`full_name`), email address (`email_address`), phone number (`phone_number`), and so on.&#x20;

You can also assign a user to one or more access groups by including the access group IDs for the user as an array of strings in the `acs_access_group_ids` parameter. Further, you can use the `user_identity_id` parameter to associate a new user with a [mobile access user identity](../mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity), if desired. You can also specify an `access_schedule` for the user, including a `starts_at` and `ends_at` date and time.&#x20;

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.users.create(
  acs_system_id="11111111-1111-1111-1111-111111111111",
  user_identity_id="22222222-2222-2222-2222-222222222222",
  full_name="Jane Doe",
  email_address="jane@example.com",
  phone_number="+15555550101"
)
```

**Response:**

```
AcsUser(
  acs_user_id='33333333-3333-3333-3333-333333333333',
  full_name='Jane Doe',
  email_address='jane@example.com',
  phone_number='+15555550101',
  acs_system_id='11111111-1111-1111-1111-111111111111',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550101"
}'
```

**Response:**

```json
{
  "acs_user": {
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "full_name": "Jane Doe",
    "email_address": "jane@example.com",
    "phone_number": "+15555550101",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.users.create({
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  phone_number: "+15555550101"
});
```

**Response:**

```json
{
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  full_name: 'Jane Doe',
  email_address: 'jane@example.com',
  phone_number: '+15555550101',
  acs_system_id: '11111111-1111-1111-1111-111111111111',
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
$seam->acs->users->create(
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  phone_number: "+15555550101"
);
```

**Response:**

```json
{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550101",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.UsersAcs.Create(
  acsSystemId: "11111111-1111-1111-1111-111111111111",
  userIdentityId: "22222222-2222-2222-2222-222222222222",
  fullName: "Jane Doe",
  emailAddress: "jane@example.com",
  phoneNumber: "+15555550101"
);
```

**Response:**

```json
{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550101",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
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
acs_user, uErr := client.Acs.Users.Create(
  context.Background(), &acs.UsersCreateRequest{
    AcsSystemId: "11111111-1111-1111-1111-111111111111",
    UserIdentityId: api.String("22222222-2222-2222-2222-222222222222"),
    FullName: api.String("Jane Doe"),
    EmailAddress: api.String("jane@example.com"),
    PhoneNumber: api.String("+15555550101")
  },
)
```

**Response:**

```json
{
  "acs_user": {
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "full_name": "Jane Doe",
    "email_address": "jane@example.com",
    "phone_number": "+15555550101",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    ...
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

## Update a User

To [update a user](../../api-clients/access-control-systems/users/update-user.md), provide the ID (`acs_user_id`) of the desired user, along with the attributes that you want to modify.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.users.update(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  full_name="Jack Doe"
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
  "https://connect.getseam.com/acs/users/update" \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "full_name": "Jack Doe"
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
await seam.acs.users.update({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  full_name: "Jack Doe"
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
$seam->acs->users->update(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  full_name: "Jack Doe"
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
seam.UsersAcs.Update(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  fullName: "Jack Doe"
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
acs_user, uErr := client.Acs.Users.Update(
  context.Background(), &acs.UsersUpdateRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
    FullName: api.String("Jack Doe"),
  },
)
```

**Response:**

```json
{
  "acs_user": {
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "full_name": "Jack Doe",
    ...
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

## Delete a User

To [delete a user](../../api-clients/access-control-systems/users/delete-user.md), provide the ID (`acs_user_id`) of the user that you want to delete.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.users.delete(
  acs_user_id="33333333-3333-3333-3333-333333333333"
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
  'https://connect.getseam.com/acs/users/delete' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333"
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
await seam.acs.users.delete({
  acs_user_id: "33333333-3333-3333-3333-333333333333"
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
$seam->acs->users->delete(
  acs_user_id: "33333333-3333-3333-3333-333333333333"
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
seam.UsersAcs.Delete(
  acsUserId: "33333333-3333-3333-3333-333333333333"
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
deletion, uErr := client.Acs.Users.Delete(
  context.Background(), &acs.UsersDeleteRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
  },
)
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

## List Users

To list all users within an ACS, provide the ID (`acs_system_id)` of the ACS. You can also filter users by `user_identity_id`, `user_identity_email_address`, or `user_identity_phone_number`.

{% tabs %}
{% tab title="Python" %}
**Request:**

<pre class="language-python"><code class="lang-python"><strong>seam.acs.users.list(
</strong>  acs_system_id="11111111-1111-1111-1111-111111111111"
)
</code></pre>

**Response:**

```
[
  AcsUser(
    acs_user_id='33333333-3333-3333-3333-333333333333',
    full_name='Jane Doe',
    email_address='jane@example.com',
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/users/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "11111111-1111-1111-1111-111111111111"
}'
```

**Response:**

```json
{
  "acs_users": [
    {
      "acs_user_id": "33333333-3333-3333-3333-333333333333",
      "full_name": "Jane Doe",
      "email_address": "jane@example.com",
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.users.list({
  acs_system_id: "11111111-1111-1111-1111-111111111111"
});
```

**Response:**

```json
[
  {
    acs_user_id: '33333333-3333-3333-3333-333333333333',
    full_name: 'Jane Doe',
    email_address: 'jane@example.com',
    ...
  },
  ...
]
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
$seam->acs->users->list(
  acs_system_id: "11111111-1111-1111-1111-111111111111"
);
```

**Response:**

```json
[
  {
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "full_name": "Jane Doe",
    "email_address": "jane@example.com",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.UsersAcs.List(
  acsSystemId: "11111111-1111-1111-1111-111111111111"
);
```

**Response:**

```json
{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  ...
}
...
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
acs_users, uErr := client.Acs.Users.List(
  context.Background(), &acs.UsersListRequest{
    AcsSystemId: api.String("11111111-1111-1111-1111-111111111111"),
  },
)
```

**Response:**

```json
{
  "acs_users": [
    {
      "acs_user_id": "33333333-3333-3333-3333-333333333333",
      "full_name": "Jane Doe",
      "email_address": "jane@example.com",
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
