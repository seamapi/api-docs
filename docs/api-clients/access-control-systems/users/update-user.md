---
description: Update the properties of a specified ACS user
---

# Update a User

Updates any of the following properties of a specified [ACS user](../../../products/access-systems/user-management.md):

* `full_name`
* `email_address`
* `phone_number`
* `access_schedule`

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/users/update" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired ACS user by including the corresponding `acs_user_id` in the request body. In addition, in the request body, include the properties that you want to update, along with the desired replacement values.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the desired ACS user</td></tr><tr><td><code>full_name</code></td><td>String<br><em>Optional</em></td><td>Replacement full name for the ACS user</td></tr><tr><td><code>email_address</code></td><td>String<br><em>Optional</em></td><td>Replacement email address for the ACS user</td></tr><tr><td><code>phone_number</code></td><td>String<br><em>Optional</em></td><td>Replacement phone number for the ACS user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr><tr><td><code>access_schedule</code></td><td>Object<br><em>Optional</em></td><td>Replacement <code>starts_at</code> and <code>ends_at</code> dates/times for the ACS user's access</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.users.update(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  full_name="Jack Doe",
  email_address="jack@example.com",
  phone_number="+15555550101",
  access_schedule={
    "starts_at": "2024-04-01T10:40:00Z",
    "ends_at": "2024-04-04T10:40:00Z"
  }
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  "https://connect.getseam.com/acs/users/update" \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "full_name": "Jack Doe",
  "email_address": "jack@example.com",
  "phone_number": "+15555550101",
  "access_schedule": {
    "starts_at": "2024-04-01T10:40:00Z",
    "ends_at": "2024-04-04T10:40:00Z"
  }
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.users.update({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  full_name: "Jack Doe",
  email_address: "jack@example.com",
  phone_number: "+15555550101",
  access_schedule: {
    "starts_at": "2024-04-01T10:40:00Z",
    "ends_at": "2024-04-04T10:40:00Z"
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
$seam->acs->users->update(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  full_name: "Jack Doe",
  email_address: "jack@example.com",
  phone_number: "+15555550101",
  access_schedule: array(
    "starts_at" => "2024-04-01T10:40:00Z",
    "ends_at" => "2024-04-04T10:40:00Z"
  )
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.UsersAcs.Update(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  fullName: "Jack Doe",
  emailAddress: "jack@example.com",
  phoneNumber: "+15555550101",
  accessSchedule: new Dictionary<string, string>()
    {
      {"starts_at", "2024-04-01T10:40:00Z"},
      {"ends_at", "2024-04-04T10:40:00Z"}
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
startsAt, err := time.Parse(time.RFC3339, "2024-04-01T10:40:00Z")
endsAt, err := time.Parse(time.RFC3339, "2024-04-04T10:40:00Z")
if err != nil {
  return err
}

acs_user, uErr := client.Acs.Users.Update(
  context.Background(), &acs.UsersUpdateRequest{
    AcsUserId: "33333333-3333-3333-3333-333333333333",
    FullName: api.String("Jack Doe"),
    EmailAddress: api.String("jack@example.com"),
    PhoneNumber: api.String("+15555550101"),
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
  "acs_user": {
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "display_name": "Jack Doe",
    "full_name": "Jack Doe",
    "email": "jack@example.com",
    "email_address": "jack@example.com",
    "phone_number": "+15555550101",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2024-04-02T09:53:26.421Z",
    "is_suspended": false,
    "user_identity_id": "22222222-2222-2222-2222-222222222222"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
