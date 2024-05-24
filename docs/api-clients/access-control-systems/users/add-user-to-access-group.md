---
description: Add a specified ACS user to a specified access group
---

# Add a User to an Access Group

Adds a specified [ACS user](../../../products/access-systems/user-management.md) to a specified [access group](../../../products/access-systems/assigning-users-to-access-groups.md).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/users/add_to_access_group" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired ACS user and access group by including the corresponding `acs_user_id` and `acs_access_group_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the desired ACS user</td></tr><tr><td><code>acs_access_group_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the desired access group</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.users.add_to_access_group(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  acs_access_group_id="44444444-4444-4444-4444-444444444444"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
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
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.users.addToAccessGroup({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_access_group_id: "44444444-4444-4444-4444-444444444444"
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
$seam->acs->users->add_to_access_group(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_access_group_id: "44444444-4444-4444-4444-444444444444"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.UsersAcs.AddToAccessGroup(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  acsAccessGroupId: "44444444-4444-4444-4444-444444444444"
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
add, uErr := client.Acs.Users.AddToAccessGroup(
  context.Background(), &acs.UsersAddToAccessGroupRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
    AcsAccessGroupId: "44444444-4444-4444-4444-444444444444",
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
