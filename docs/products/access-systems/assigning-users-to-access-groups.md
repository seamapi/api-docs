---
description: >-
  Learn how to use access groups to manage user permissions across different
  doors and areas.
---

# Assigning Users to Access Groups

Access groups define sets of users, combined with sets of permissions. These permissions include both the sets of doors, areas, or other assets that the users can access and the schedules during which the users can access these assets. By using access groups, property managers can assign or revoke access rights easily for numerous users, based on their rights and needs.

This guide explains how to grant access permissions to users by adding them to the appropriate access groups.

***

## Add a User to an Access Group

To [add a user to an access group](../../api-clients/access-control-systems/users/add-user-to-access-group.md), provide both the user ID (`acs_user_id`) and the access group ID (`acs_access_group_id`).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.users.add_to_access_group(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  acs_access_group_id="44444444-4444-4444-4444-444444444444"
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
  'https://connect.getseam.com/acs/users/add_to_access_group' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "acs_access_group_id": "44444444-4444-4444-4444-444444444444"
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
await seam.acs.users.addToAccessGroup({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_access_group_id: "44444444-4444-4444-4444-444444444444"
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
$seam->acs->users->add_to_access_group(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_access_group_id: "44444444-4444-4444-4444-444444444444"
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
seam.UsersAcs.AddToAccessGroup(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  acsAccessGroupId: "44444444-4444-4444-4444-444444444444"
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
add, uErr := client.Acs.Users.AddToAccessGroup(
  context.Background(), &acs.UsersAddToAccessGroupRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
    AcsAccessGroupId: "44444444-4444-4444-4444-444444444444",
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

## Remove a User from an Access Group

To [remove a user from an access group](../../api-clients/access-control-systems/users/remove-user-from-access-group.md), provide both the user ID (`acs_user_id`) and the access group ID (`acs_access_group_id`).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.users.remove_from_access_group(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  acs_access_group_id="44444444-4444-4444-4444-444444444444"
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
  'https://connect.getseam.com/acs/users/remove_from_access_group' \
  -H 'accept: */*' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "acs_access_group_id": "44444444-4444-4444-4444-444444444444"
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
await seam.acs.users.removeFromAccessGroup({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_access_group_id: "44444444-4444-4444-4444-444444444444"
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
$seam->acs->users->remove_from_access_group(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_access_group_id: "44444444-4444-4444-4444-444444444444"
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
seam.UsersAcs.RemoveFromAccessGroup(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  acsAccessGroupId: "44444444-4444-4444-4444-444444444444"
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

<pre class="language-go"><code class="lang-go"><strong>remove, uErr := client.Acs.Users.RemoveFromAccessGroup(
</strong>  context.Background(), &#x26;acs.UsersRemoveFromAccessGroupRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
    AcsAccessGroupId: "44444444-4444-4444-4444-444444444444",
  },
)
</code></pre>

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}
{% endtabs %}
