---
description: >-
  Learn how to use access groups to manage ACS user permissions across different
  doors and areas.
---

# Assigning ACS Users to Access Groups

Some ACSs use access groups, which are sets of ACS users, combined with sets of permissions. These permissions include both the set of areas or assets that the ACS users can access and the schedule during which the users can access these areas or assets. Instead of assigning access rights individually to each ACS user, which can be time-consuming and error-prone, administrators can assign users to an access group, thereby ensuring that the users inherit all the permissions associated with the access group. Using access groups streamlines the process of managing large numbers of ACS users, especially in bigger organizations or complexes.

{% hint style="info" %}
To learn whether your ACS supports access groups, see the [system integration guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for your ACS.
{% endhint %}

This guide explains how to grant access permissions to ACS users by adding them to the appropriate access groups.

***

## Add an ACS User to an Access Group

To [add an ACS user to an access group](../../api-clients/access-control-systems/users/add-user-to-access-group.md), provide both the `acs_user_id` and the `acs_access_group_id`.

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

## Remove an ACS User from an Access Group

To [remove an ACS user from an access group](../../api-clients/access-control-systems/users/remove-user-from-access-group.md), provide both the `acs_user_id` and the `acs_access_group_id`.

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
