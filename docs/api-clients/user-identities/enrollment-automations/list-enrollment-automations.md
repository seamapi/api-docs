---
description: Get all enrollment automations for a specified user identity
---

# List Enrollment Automations

Returns a list of all [enrollment automations](../../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md) for a specified [user identity](../../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).

{% swagger src="https://connect.getseam.com/openapi.json" path="/user_identities/enrollment_automations/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the user identity for which you want to retrieve all enrollment automations by including the corresponding `acs_system_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identity_id</code></td><td>String<br><em>Required</em></td><td>ID of the user identity for which you want to retrieve all enrollment automations</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/user_identities/enrollment_automations/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f"
}'
```
{% endtab %}

{% tab title="Go" %}
```go
enrollmentAutomations, uErr := client.UserIdentities.EnrollmentAutomations.List(context.Background(), &useridentities.EnrollmentAutomationsListRequest{
    UserIdentityId: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
})

if uErr != nil {
    return uErr
}

fmt.Println(enrollmentAutomations)
return nil
```
{% endtab %}
{% endtabs %}

## Response

Returns an `enrollment_automations` array, in which each returned enrollment automation (`enrollment_automation`) contains the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identity_id</code></td><td>ID of the associated user identity</td></tr><tr><td><code>enrollment_automation_id</code></td><td>ID of the enrollment automation</td></tr><tr><td><code>acs_credential_provisioning_automation_id</code></td><td>ID of the ACS credential provisioning automation</td></tr><tr><td><code>credential_manager_acs_system_id</code></td><td>ID of the associated ACS system that serves as the credential manager</td></tr><tr><td><code>is_running</code></td><td>Boolean value to indicate whether the enrollment automation is running</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the enrollment automation</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the enrollment automation was created</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "enrollment_automations": [
    {
      "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
      "enrollment_automation_id": "05505650-aa57-49ab-8f19-429738758895",
      "acs_credential_provisioning_automation_id": "05505650-aa57-49ab-8f19-429738758895",
      "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
      "is_running": true,
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "created_at": "2024-01-09T05:45:33.068Z"
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
