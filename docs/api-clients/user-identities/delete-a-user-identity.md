---
description: Delete a specified user identity
---

# Delete a User Identity

Deletes a specified [user identity](../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity). To delete a user identity, you must first delete any [ACS credentials](../access-control-systems/credentials/delete-credential.md) and [enrollment automations](enrollment-automations/delete-an-enrollment-automation.md) associated with the user identity. You must also deactivate any associated phones.

{% swagger src="https://connect.getseam.com/openapi.json" path="/user_identities/delete" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired user identity by including the corresponding `user_identity_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identity_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired user identity</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/delete' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "44d48b20-0dbe-419d-91ca-ab8bceecd135"
}'
```
{% endtab %}

{% tab title="Go" %}
```go
_, uErr := client.UserIdentities.Delete(context.Background(), &api.UserIdentitiesDeleteRequest{
  UserIdentityId: "44d48b20-0dbe-419d-91ca-ab8bceecd135"
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
