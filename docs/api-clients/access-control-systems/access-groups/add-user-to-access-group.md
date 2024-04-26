---
description: Add a specified user to a specified access group
---

# Add a User to an Access Group

Adds a specified [user](../../../products/access-systems/#what-is-a-user) to a specified [access group](../../../products/access-systems/#what-is-an-access-group).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/access_groups/add_user" method="post" %}
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
seam.acs.access_groups.add_user(
  acs_access_group_id="44444444-4444-4444-4444-444444444444",
  acs_user_id="33333333-3333-3333-3333-333333333333"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/access_groups/add_user' \
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
await seam.acs.access_groups.addUser({
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
$seam->acs->access_groups->add_user(
  acs_access_group_id: "44444444-4444-4444-4444-444444444444",
  acs_user_id: "33333333-3333-3333-3333-333333333333"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.AccessGroupsAcs.AddUser(
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
add, uErr := client.Acs.AccessGroups.AddUser(
  context.Background(), &acs.AccessGroupsAddUserRequest{
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
