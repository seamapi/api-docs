---
description: Delete a specified enrollment automation
---

# Delete an Enrollment Automation

Deletes a specified [enrollment automation](../../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md). You must delete all enrollment automations associated with a [user identity](../../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) before [deleting the user identity](../delete-a-user-identity.md).

{% swagger src="https://connect.getseam.com/openapi.json" path="/user_identities/enrollment_automations/delete" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired enrollment automation by including the corresponding `enrollment_automation_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>enrollment_automation_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired enrollment automation</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/enrollment_automations/delete' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "enrollment_automation_id": "05505650-aa57-49ab-8f19-429738758895"
}'
```
{% endtab %}

{% tab title="Go" %}
```go
_, uErr := client.EnrollmentAutomations.Delete(context.Background(), &api.EnrollmentAutomationsDeleteRequest{
  EnrollmentAutomationId: "05505650-aa57-49ab-8f19-429738758895",
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
