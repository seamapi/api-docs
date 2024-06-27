---
description: >-
  Learn how to manage your ACS users and sync tenants and visitors from your
  property management platform.
---

# Managing ACS Users

An ACS user typically refers to an individual who requires access, like an employee or resident. Each user can possess multiple credentials that serve as their keys or identifiers for access. The type of credential can vary widely. For example, in the [Salto](../../device-guides/salto-locks.md) system, a user can have a PIN code, a mobile app account, and a fob. In other platforms, it is not uncommon for a user to have more than one of the same credential type, such as multiple key cards. Additionally, these credentials can have a schedule or validity period.

This guide explains how to create and manage ACS users. Using the [Access Control Systems API](../../api-clients/access-control-systems/), you can automate issuing access to long-term tenants or visitors.

***

## Before You Begin: Identify the ACS System ID

To add ACS users to your access control system, first retrieve the `acs_system_id` of the ACS that you want to configure. To retrieve the ACS details, use [Get a System](../../api-clients/access-control-systems/systems/get-system.md) or [List Systems](../../api-clients/access-control-systems/systems/list-systems.md). Then, continue to the remaining sections in this topic to learn how to manage ACS users.

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
  -H 'Content-Type: application/json' \
  -d '{}'
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

## Create an ACS User

To [create an ACS user](../../api-clients/access-control-systems/users/create-user.md), provide the `acs_system_id` of the ACS system and the attributes of the user, such as the `full_name`, `email_address`, `phone_number`, and so on.&#x20;

Also, if your [ACS architecture](../../capability-guides/access-systems/understanding-access-control-system-differences.md) supports access groups, you can also assign an ACS user to one or more access groups. To do so, when you create the user, include the IDs of the access group to which you want add the user. The `acs_access_group_ids` parameter accepts an array of strings.

In addition, if your ACS architecture supports assigning access schedules directly to ACS users, you can specify an `access_schedule` for the user, including a `starts_at` and `ends_at` date and time. &#x20;

Further, you can use the `user_identity_id` parameter to associate a new ACS user with a [user identity](../../api-clients/user-identities/). You can use a user identity to link an ACS user with an app user in your system, such as a [mobile access app user](../mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) or an app user who needs access to multiple ACSs.

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

## List ACS Users

To [list all ACS users](../../api-clients/access-control-systems/users/list-users.md) within an `acs_system`, provide the `acs_system_id` of the ACS. You can also filter users by `user_identity_id`, `user_identity_email_address`, or `user_identity_phone_number`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.users.list(
  acs_system_id="11111111-1111-1111-1111-111111111111"
)
```

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

***

## Get an ACS User

To [get an ACS user](../../api-clients/access-control-systems/users/get-user.md), provide the `acs_user_id` of the user that you want to retrieve. These details include the contact details for the user, the user's access schedule, the associated [user identity](../../api-clients/user-identities/), if applicable, and so on.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.users.get(
 acs_user_id="33333333-3333-3333-3333-333333333333"
)
```

**Response:**

```
AcsUser(
  acs_user_id='33333333-3333-3333-3333-333333333333',
  full_name='Jane Doe',
  email_address='jane@example.com',
  phone_number='+15555550100',
  acs_system_id='11111111-1111-1111-1111-111111111111',
  access_schedule={
    'starts_at': '2024-03-01T10:40:00.000Z',
    'ends_at': '2024-03-04T10:40:00.000Z'
  },
  user_identity_id='22222222-2222-2222-2222-222222222222',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/users/get' \
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
  "acs_user": {
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "full_name": "Jane Doe",
    "email_address": "jane@example.com",
    "phone_number": "+15555550100",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "access_schedule": {
      "starts_at": "2024-03-01T10:40:00.000Z",
      "ends_at": "2024-03-04T10:40:00.000Z"
    },
    "user_identity_id": "22222222-2222-2222-2222-222222222222",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.users.get({
  acs_user_id: "33333333-3333-3333-3333-333333333333"
});
```

**Response:**

```json
{
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  full_name: 'Jane Doe',
  email_address: 'jane@example.com',
  phone_number: '+15555550100',
  acs_system_id: '11111111-1111-1111-1111-111111111111',
  access_schedule: {
    "starts_at": "2024-03-01T10:40:00.000Z",
    "ends_at": "2024-03-04T10:40:00.000Z"
  },
  user_identity_id: '22222222-2222-2222-2222-222222222222',
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
$seam->acs->users->get(
  acs_user_id: "33333333-3333-3333-3333-333333333333"
);
```

**Response:**

```
{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550100",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "access_schedule": {
    "starts_at": "2024-03-01T10:40:00.000Z",
    "ends_at": "2024-03-04T10:40:00.000Z"
  },
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.AcsUsers.Get(
  acsUserId: "33333333-3333-3333-3333-333333333333"
);
```

**Response:**

```
{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550100",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "access_schedule": {
    "starts_at": "2024-03-01T10:40:00.000Z",
    "ends_at": "2024-03-04T10:40:00.000Z"
  },
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  ..
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
acs_user, uErr := client.Acs.Users.Get(
  context.Background(), &acs.UsersGetRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
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
    "phone_number": "+15555550100",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "access_schedule": {
      "starts_at": "2024-03-01T10:40:00.000Z",
      "ends_at": "2024-03-04T10:40:00.000Z"
    },
    "user_identity_id": "22222222-2222-2222-2222-222222222222",
    ...
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

## Update an ACS User

To [update an ACS user](../../api-clients/access-control-systems/users/update-user.md), provide the `acs_user_id` of the user that you want to update, along with the attributes that you want to modify, such as the contact details for the user or the user's access schedule.

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

## Delete an ACS User

To [delete an ACS user](../../api-clients/access-control-systems/users/delete-user.md), provide the `acs_user_id` of the user that you want to delete.

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
