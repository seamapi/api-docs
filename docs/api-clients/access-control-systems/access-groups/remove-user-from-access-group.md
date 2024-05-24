---
description: Remove a specified ACS user from a specified access group
---

# Remove a User from an Access Group

Removes a specified [ACS user](../../../products/access-systems/user-management.md) from a specified [access group](../../../products/access-systems/assigning-users-to-access-groups.md).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/access_groups/remove_user" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired access group and user by including the corresponding `acs_access_group_id` and `acs_user_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_access_group_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the desired access group</td></tr><tr><td><code>acs_user_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the desired user</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.access_groups.remove_user(
  acs_access_group_id="44444444-4444-4444-4444-444444444444",
  acs_user_id="33333333-3333-3333-3333-333333333333"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/access_groups/remove_user' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_access_group_id": "44444444-4444-4444-4444-444444444444",
  "acs_user_id": "33333333-3333-3333-3333-333333333333"
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.access_groups.removeUser({
  acs_access_group_id: "44444444-4444-4444-4444-444444444444",
  acs_user_id: "33333333-3333-3333-3333-333333333333"
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
$seam->acs->access_groups->remove_user(
  acs_access_group_id: "44444444-4444-4444-4444-444444444444",
  acs_user_id: "33333333-3333-3333-3333-333333333333"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.AccessGroupsAcs.RemoveUser(
  acsAccessGroupId: "44444444-4444-4444-4444-444444444444",
  acsUserId: "33333333-3333-3333-3333-333333333333"
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
remove, uErr := client.Acs.AccessGroups.RemoveUser(
  context.Background(), &acs.AccessGroupsRemoveUserRequest{
    AcsAccessGroupId: "44444444-4444-4444-4444-444444444444",
    AcsUserId: "33333333-3333-3333-3333-333333333333",
  },
)
```
{% endtab %}
{% endtabs %}

## Response

Returns a Boolean `ok` status indicator or void.

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
void
```
{% endtab %}

{% tab title="Ruby" %}
```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
```
void
```
{% endtab %}

{% tab title="C#" %}
```
void
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
  "ok": true
}
```
{% endtab %}
{% endtabs %}
