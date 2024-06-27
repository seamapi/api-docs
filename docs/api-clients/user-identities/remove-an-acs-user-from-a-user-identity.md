---
description: Remove a specified ACS user from a specified user identity
---

# Remove an ACS User from a User Identity

Removes a specified [ACS user](../../products/access-systems/#what-is-a-user) from a specified [user identity](../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).

{% swagger src="https://connect.getseam.com/openapi.json" path="/user_identities/remove_acs_user" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired user identity and ACS user by including the corresponding `user_identity_id` and `acs_user_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identity_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired user identity</td></tr><tr><td><code>acs_user_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired ACS user</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/remove_acs_user' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  "acs_user_id": "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe"
}'
```
{% endtab %}

{% tab title="Go" %}
```go
_, uErr := client.UserIdentities.RemoveAcsUser(context.Background(), &useridentities.UserIdentitiesRemoveAcsUserRequest{
    UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    AcsUserId: "4d223973-0874-4831-8630-bfcb29e6bce0",
})

if uErr != nil {
    return uErr
}

return nil
```
{% endtab %}
{% endtabs %}

## Response

Returns a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "ok": true
}
```
{% endtab %}
{% endtabs %}
