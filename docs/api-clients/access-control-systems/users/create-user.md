---
description: Create a new ACS user
---

# Create a User

Creates a new [ACS user](../../../products/access-systems/#what-is-a-user).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/users/create" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the characteristics of the new ACS user by including the corresponding parameters in the request body. Also, include the `acs_system_id` of the [access control system](../../../products/access-systems/) to which you want to add the new ACS user. In addition, you can specify the `acs_access_group_ids` of the [access groups](../../../products/access-systems/#what-is-an-access-group) to which you want to add the new ACS user, as well as a `user_identity_id` if you want to associate the new ACS user with a [user identity](../../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_system_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the access control system to which to add the new ACS user</td></tr><tr><td><code>acs_access_group_ids</code></td><td>Array of strings (UUIDs)<br><em>Optional</em></td><td>Array of access group IDs to indicate the access groups to which to add the new ACS user</td></tr><tr><td><code>user_identity_id</code></td><td>String (UUID)<br><em>Optional</em></td><td>ID of the user identity with which to associate the new ACS user</td></tr><tr><td><code>full_name</code></td><td>String<br><em>Optional</em></td><td>Full name of the new ACS user</td></tr><tr><td><code>email_address</code></td><td>String<br><em>Optional</em></td><td>Email address of the new ACS user</td></tr><tr><td><code>phone_number</code></td><td>String<br><em>Optional</em></td><td>Phone number of the new ACS user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr><tr><td><code>access_schedule</code></td><td>Object<br><em>Optional</em></td><td><code>starts_at</code> and <code>ends_at</code> dates/times for the new ACS user's access</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.users.create(
  acs_system_id="11111111-1111-1111-1111-111111111111",
  user_identity_id="22222222-2222-2222-2222-222222222222",
  acs_access_group_ids=["44444444-4444-4444-4444-444444444444"],
  full_name="Jane Doe",
  email_address="jane@example.com",
  phone_number="+15555550100",
  access_schedule={
    "starts_at": "2024-03-01T10:40:00Z",
    "ends_at": "2024-03-04T10:40:00Z"
  }
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "acs_access_group_ids": ["44444444-4444-4444-4444-444444444444"],
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550100",
  "access_schedule": {
    "starts_at": "2024-03-01T10:40:00Z",
    "ends_at": "2024-03-04T10:40:00Z"
  }
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.users.create({
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  acs_access_group_ids: ["44444444-4444-4444-4444-444444444444"],
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  phone_number: "+15555550100",
  access_schedule: {
    "starts_at": "2024-03-01T10:40:00Z",
    "ends_at": "2024-03-04T10:40:00Z"
  }
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
$seam->acs->users->create(
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  acs_access_group_ids: ["44444444-4444-4444-4444-444444444444"],
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  phone_number: "+15555550100",
  access_schedule: array(
    "starts_at" => "2024-03-01T10:40:00Z",
    "ends_at" => "2024-03-04T10:40:00Z"
  )
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.UsersAcs.Create(
  acsSystemId: "11111111-1111-1111-1111-111111111111",
  userIdentityId: "22222222-2222-2222-2222-222222222222",
  acsAccessGroupIds: new List<string>(new string[] {"44444444-4444-4444-4444-444444444444"}),
  fullName: "Jane Doe",
  emailAddress: "jane@example.com",
  phoneNumber: "+15555550100",
  accessSchedule: new Dictionary<string, string>()
    {
      {"starts_at", "2024-03-01T10:40:00Z"},
      {"ends_at", "2024-03-04T10:40:00Z"}
    }
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
startsAt, err := time.Parse(time.RFC3339, "2024-03-01T10:40:00Z")
endsAt, err := time.Parse(time.RFC3339, "2024-03-04T10:40:00Z")
if err != nil {
  return err
}

acs_user, uErr := client.Acs.Users.Create(
  context.Background(), &acs.UsersCreateRequest{
    AcsSystemId: "11111111-1111-1111-1111-111111111111",
    UserIdentityId: api.String("22222222-2222-2222-2222-222222222222"),
    AcsAccessGroupIds: []string{"44444444-4444-4444-4444-444444444444"},
    FullName: api.String("Jane Doe"),
    EmailAddress: api.String("jane@example.com"),
    PhoneNumber: api.String("+15555550100"),
    AccessSchedule: &acs.UsersCreateRequestAccessSchedule{
      StartsAt: startsAt,
      EndsAt: endsAt,
    },
  },
)
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_user` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>ID of the ACS user</td></tr><tr><td><code>display_name</code></td><td>Display name for the ACS user</td></tr><tr><td><code>full_name</code></td><td>Full name of the ACS user</td></tr><tr><td><code>email</code></td><td>Email address of the ACS user (for backward compatibility)</td></tr><tr><td><code>email_address</code></td><td>Email address of the ACS user</td></tr><tr><td><code>phone_number</code></td><td>Phone number of the ACS user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the access control system that contains the ACS user</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the ACS user</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the ACS user was created</td></tr><tr><td><code>is_suspended</code></td><td>Indicates whether the ACS user is currently <a href="../../../products/access-systems/suspending-and-unsuspending-users.md">suspended</a></td></tr><tr><td><code>access_schedule</code></td><td><code>starts_at</code> and <code>ends_at</code> dates/times for the ACS user's access</td></tr><tr><td><code>user_identity_id</code></td><td>ID of the user identity associated with the ACS user</td></tr><tr><td><code>user_identity_email_address</code></td><td>Email address of the user identity associated with the ACS user</td></tr><tr><td><code>user_identity_phone_number</code></td><td>Phone number of the user identity associated with the ACS user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr></tbody></table>

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
    starts_at='2024-03-01T10:40:00.000Z',
    ends_at='2024-03-04T10:40:00.000Z'
  },
  user_identity_id='22222222-2222-2222-2222-222222222222'
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
    "user_identity_id": "22222222-2222-2222-2222-222222222222"
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
  created_at: '2024-04-05T07:28:06.012Z',
  is_suspended: false,
  access_schedule: {
    starts_at: '2024-03-01T10:40:00.000Z',
    ends_at: '2024-03-04T10:40:00.000Z'
  },
  user_identity_id: '22222222-2222-2222-2222-222222222222'
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
  "user_identity_id": "22222222-2222-2222-2222-222222222222"
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
  "user_identity_id": "22222222-2222-2222-2222-222222222222"
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
    "created_at": "2024-04-05T07:57:05.323Z",
    "is_suspended": false,
    "access_schedule": {
      "starts_at": "2024-03-01T10:40:00.000Z",
      "ends_at": "2024-03-04T10:40:00.000Z"
    },
    "user_identity_id": "22222222-2222-2222-2222-222222222222"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
