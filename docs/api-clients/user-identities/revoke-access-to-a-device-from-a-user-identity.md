---
description: Revoke access to a specified device from a specified user identity
---

# Revoke Access to a Device from a User Identity

Revokes access to a specified [device](../../core-concepts/devices/) from a specified [user identity](../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).

{% swagger src="https://connect.getseam.com/openapi.json" path="/user_identities/revoke_access_to_device" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired user identity and device by including the corresponding `user_identity_id` and `device_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identity_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired user identity</td></tr><tr><td><code>device_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired managed device</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/revoke_access_to_device' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
  "device_id": "054765c8-a2fc-4599-b486-14c19f462c45"
}'
```
{% endtab %}

{% tab title="Go" %}
```go
_, uErr := client.UserIdentities.RevokeAccessToDevice(context.Background(), &api.UserIdentitiesRevokeAccessToDeviceRequest{
    UserIdentityId: "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
    DeviceId: "054765c8-a2fc-4599-b486-14c19f462c45",
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
