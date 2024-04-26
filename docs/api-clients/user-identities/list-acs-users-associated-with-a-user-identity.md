---
description: Get all ACS users for a specified user identity
---

# List ACS Users Associated with a User Identity

Returns a list of all [ACS users](../../products/access-systems/#what-is-a-user) assigned to a [user identity](../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).

{% swagger src="https://connect.getseam.com/openapi.json" path="/user_identities/list_acs_users" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the user identity for which you want to retrieve all ACS users by including the corresponding `user_identity_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identity_id</code></td><td>String<br><em>Required</em></td><td>ID of the user identity for which you want to retrieve all ACS users</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/user_identities/list_acs_users' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a"
}'
```
{% endtab %}

{% tab title="Go" %}
```go
acsUsers, uErr := client.UserIdentities.ListAcsUsers(context.Background(), &useridentities.UserIdentitiesListAcsUsersRequest{
    UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
})

if uErr != nil {
    return uErr
}

fmt.Println(acsUsers)
return nil
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_users` array, in which each returned ACS user (`acs_user`) contains the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>ID of the ACS user</td></tr><tr><td><code>display_name</code></td><td>Display name for the ACS user</td></tr><tr><td><code>full_name</code></td><td>Full name of the ACS user</td></tr><tr><td><code>email_address</code></td><td>Email address of the ACS user</td></tr><tr><td><code>phone_number</code></td><td>Unique phone number of the ACS user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the access control system that contains the ACS user</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../core-concepts/workspaces/">workspace</a> that contains the ACS user</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the ACS user was created</td></tr><tr><td><code>is_suspended</code></td><td>Boolean value to indicate whether the ACS user is currently <a href="../../products/access-systems/suspending-and-unsuspending-users.md">suspended</a></td></tr><tr><td><code>user_identity_id</code></td><td>ID of the user identity associated with the ACS user</td></tr><tr><td><code>user_identity_email_address</code></td><td>Email address for the user identity associated with the ACS user</td></tr><tr><td><code>user_identity_phone_number</code></td><td>Phone number for the user identity associated with the ACS user</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "acs_users": [
    {
      "acs_user_id": "4d223973-0874-4831-8630-bfcb29e6bce0",
      "display_name": "Jean Doe",
      "full_name": "Jean Doe",
      "email_address": "jean@example.com",
      "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "created_at": "2024-01-11T05:45:41.349Z",
      "is_suspended": false,
      "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
      "user_identity_email_address": "jean@example.com",
      "user_identity_phone_number": "+15555550110"
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
