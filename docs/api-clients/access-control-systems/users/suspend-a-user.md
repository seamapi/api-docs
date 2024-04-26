---
description: Suspend a specified ACS user
---

# Suspend a User

[Suspends](../../../products/access-systems/suspending-and-unsuspending-users.md) a specified [ACS user](../../../products/access-systems/#what-is-a-user). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](unsuspend-a-user.md) them.

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/users/suspend" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired ACS user by including the corresponding `acs_user_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the desired ACS user</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.users.suspend(
  acs_user_id="33333333-3333-3333-3333-333333333333"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
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
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.users.suspend({
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
$seam->acs->users->suspend(
  acs_user_id: "33333333-3333-3333-3333-333333333333"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.UsersAcs.Suspend(
  acsUserId: "33333333-3333-3333-3333-333333333333",
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
suspend, uErr := client.Acs.Users.Suspend(
  context.Background(), &acs.UsersSuspendRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
  },
);
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
