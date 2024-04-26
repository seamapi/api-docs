---
description: >-
  Learn how to make temporary access changes by suspending or unsuspending
  users.
---

# Suspending and Unsuspending Users

You can suspend a user to revoke their access temporarily. Suspending a user is a good action to take for users who may be behind on payment or have not fulfilled the requirements for entry. Then, once the user rectifies the payment, requirements, or other deficiency, you can unsuspend the user to restore their access.

***

## Suspend a User

To [suspend a user](../../api-clients/access-control-systems/users/suspend-a-user.md), provide the user ID (`acs_user_id`).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.users.suspend(
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
  'https://connect.getseam.com/acs/users/suspend' \
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
await seam.acs.users.suspend({
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
$seam->acs->users->suspend(
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
seam.UsersAcs.Suspend(
  acsUserId: "33333333-3333-3333-3333-333333333333",
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
suspend, uErr := client.Acs.Users.Suspend(
  context.Background(), &acs.UsersSuspendRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
  },
);
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

## Unsuspend a User

To [unsuspend a user](../../api-clients/access-control-systems/users/unsuspend-a-user.md), provide the user ID (`acs_user_id`).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.users.unsuspend(
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
  'https://connect.getseam.com/acs/users/unsuspend' \
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
await seam.acs.users.unsuspend({
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
$seam->acs->users->unsuspend(
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
seam.UsersAcs.Unsuspend(
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
unsuspend, uErr := client.Acs.Users.Unsuspend(
  context.Background(), &acs.UsersUnsuspendRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
  },
);
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}
{% endtabs %}
