---
description: Get a specified ACS user
---

# Get a User

Returns a specified [ACS user](../../../products/access-systems/user-management.md).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/users/get" method="post" %}
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
seam.acs.users.get(
 acs_user_id="33333333-3333-3333-3333-333333333333"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
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
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.users.get({
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
$seam->acs->users->get(
  acs_user_id: "33333333-3333-3333-3333-333333333333"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.AcsUsers.Get(
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
acs_user, uErr := client.Acs.Users.Get(
  context.Background(), &acs.UsersGetRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
  },
)
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_user` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>ID of the ACS user</td></tr><tr><td><code>display_name</code></td><td>Display name for the ACS user</td></tr><tr><td><code>full_name</code></td><td>Full name of the ACS user</td></tr><tr><td><code>email</code></td><td>Email address of the ACS user (for backward compatibility)</td></tr><tr><td><code>email_address</code></td><td>Email address of the ACS user</td></tr><tr><td><code>phone_number</code></td><td>Phone number of the ACS user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the <a href="../../../products/access-systems/">access control system</a> that contains the ACS user</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the ACS user</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the ACS user was created</td></tr><tr><td><code>is_suspended</code></td><td>Indicates whether the ACS user is currently <a href="../../../products/access-systems/suspending-and-unsuspending-users.md">suspended</a></td></tr><tr><td><code>access_schedule</code></td><td><code>starts_at</code> and <code>ends_at</code> dates/times for the ACS user's access</td></tr><tr><td><code>user_identity_id</code></td><td>ID of the user identity associated with the ACS user</td></tr><tr><td><code>user_identity_email_address</code></td><td>Email address of the user identity associated with the ACS user</td></tr><tr><td><code>user_identity_phone_number</code></td><td>Phone number of the user identity associated with the ACS user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr></tbody></table>

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
AcsUser(
  acs_user_id='33333333-3333-3333-3333-333333333333',
  display_name='Jane Doe',
  full_name='Jane Doe',
  email='jane@example.com',
  email_address='jane@example.com',
  phone_number='+15555550100',
  acs_system_id='11111111-1111-1111-1111-111111111111',
  workspace_id='00000000-0000-0000-0000-000000000000',
  created_at='2024-04-05T07:14:28.531Z',
  is_suspended=False,
  access_schedule={
    'starts_at': '2024-03-01T10:40:00.000Z',
    'ends_at': '2024-03-04T10:40:00.000Z'
  },
  user_identity_id='22222222-2222-2222-2222-222222222222',
  user_identity_email_address='jane@example.com',
  user_identity_phone_number='+15555550100'
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "acs_user": {
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "display_name": "Jane Doe",
    "full_name": "Jane Doe",
    "email": "jane@example.com",
    "email_address": "jane@example.com",
    "phone_number": "+15555550100",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2024-04-05T07:14:28.531Z",
    "is_suspended": false,
    "access_schedule": {
      "starts_at": "2024-03-01T10:40:00.000Z",
      "ends_at": "2024-03-04T10:40:00.000Z"
    },
    "user_identity_id": "22222222-2222-2222-2222-222222222222",
    "user_identity_email_address": "jane@example.com",
    "user_identity_phone_number": "+15555550100"
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
{
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  display_name: 'Jane Doe',
  full_name: 'Jane Doe',
  email: 'jane@example.com',
  email_address: 'jane@example.com',
  phone_number: '+15555550100',
  acs_system_id: '11111111-1111-1111-1111-111111111111',
  workspace_id: '00000000-0000-0000-0000-000000000000',
  created_at: '2024-04-05T07:14:28.531Z',
  is_suspended: false,
  access_schedule: {
    "starts_at": "2024-03-01T10:40:00.000Z",
    "ends_at": "2024-03-04T10:40:00.000Z"
  },
  user_identity_id: '22222222-2222-2222-2222-222222222222',
  user_identity_email_address: 'jane@example.com',
  user_identity_phone_number: '+15555550100'
}
```
{% endtab %}

{% tab title="Ruby" %}
```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
```json
{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "display_name": "Jane Doe",
  "full_name": "Jane Doe",
  "email": "jane@example.com",
  "email_address": "jane@example.com",
  "phone_number": "+15555550100",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "created_at": "2024-04-05T07:14:28.531Z",
  "is_suspended": false,
  "access_schedule": {
    "starts_at": "2024-03-01T10:40:00.000Z",
    "ends_at": "2024-03-04T10:40:00.000Z"
  },
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "user_identity_email_address": "jane@example.com",
  "user_identity_phone_number": "+15555550100"
}
```
{% endtab %}

{% tab title="C#" %}
```json
{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "display_name": "Jane Doe",
  "full_name": "Jane Doe",
  "email": "jane@example.com",
  "email_address": "jane@example.com",
  "phone_number": "+15555550100",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "created_at": "2024-04-05T07:14:28.531Z",
  "is_suspended": false,
  "access_schedule": {
    "starts_at": "2024-03-01T10:40:00.000Z",
    "ends_at": "2024-03-04T10:40:00.000Z"
  },
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "user_identity_email_address": "jane@example.com",
  "user_identity_phone_number": "+15555550100"
}
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
  "acs_user": {
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "display_name": "Jane Doe",
    "full_name": "Jane Doe",
    "email": "jane@example.com",
    "email_address": "jane@example.com",
    "phone_number": "+15555550100",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2024-04-05T07:14:28.531Z",
    "is_suspended": false,
    "access_schedule": {
      "starts_at": "2024-03-01T10:40:00.000Z",
      "ends_at": "2024-03-04T10:40:00.000Z"
    },
    "user_identity_id": "22222222-2222-2222-2222-222222222222",
    "user_identity_email_address": "jane@example.com",
    "user_identity_phone_number": "+15555550100"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
