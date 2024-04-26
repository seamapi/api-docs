---
description: Initialize a specified user identity with a specified credential manager
---

# Launch an Enrollment Automation

Sets up a new [enrollment automation](../../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md) for a specified [user identity](../../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) with a specified [credential manager](../../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md).

{% swagger src="https://connect.getseam.com/openapi.json" path="/user_identities/enrollment_automations/launch" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired user identity and credential manager by including the corresponding `user_identity_id` and `credential_manager_acs_system_id` in the request body. You can also either specify an existing `credential_manager_acs_user_id` for the user identity or indicate that you want to create a new credential manager user. Further, you can specify an `acs_credential_pool_id` from which to obtain credentials for the user identity.

### Request Body Parameters

<table><thead><tr><th width="369">Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identity_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired user identity</td></tr><tr><td><code>credential_manager_acs_system_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired <a href="../../../products/access-systems/">ACS system</a> that serves as the <a href="../../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md">credential manager</a></td></tr><tr><td><code>acs_credential_pool_id</code></td><td>String<br><em>Optional</em></td><td>ID of the ACS credential pool from which to obtain credentials for the user identity</td></tr><tr><td><code>create_credential_manager_user</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether to create an associated credential manager user<br>If you set <code>create_credential_manager_user</code> to <code>true</code>, you cannot specify a <code>credential_manager_acs_user_id</code>.</td></tr><tr><td><code>credential_manager_acs_user_id</code></td><td>String<br><em>Optional</em></td><td>ID of the associated ACS user within the credential manager<br>If you specify a <code>credential_manager_acs_user_id</code>, you cannot set <code>create_credential_manager_user</code> to <code>true</code>.</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/enrollment_automations/launch' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
  "acs_credential_pool_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "create_credential_manager_user": true
}'
```
{% endtab %}

{% tab title="Go" %}
```go
enrollmentAutomation, uErr := client.UserIdentities.EnrollmentAutomations.Launch(context.Background(), &useridentities.EnrollmentAutomationsLaunchRequest{
    UserIdentityId: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172",
    AcsCredentialPoolId: api.String("3fa85f64-5717-4562-b3fc-2c963f66afa6"),
    CreateCredentialManagerUser: api.Bool(true),
})

if uErr != nil {
    return uErr
}

fmt.Println(enrollmentAutomation)
return nil
```
{% endtab %}
{% endtabs %}

## Response

Returns an `enrollment_automation` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identity_id</code></td><td>ID of the associated user identity</td></tr><tr><td><code>enrollment_automation_id</code></td><td>ID of the enrollment automation</td></tr><tr><td><code>acs_credential_provisioning_automation_id</code></td><td>ID of the ACS credential provisioning automation</td></tr><tr><td><code>credential_manager_acs_system_id</code></td><td>ID of the associated ACS system that serves as the credential manager</td></tr><tr><td><code>is_running</code></td><td>Boolean value to indicate whether the enrollment automation is running</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the enrollment automation</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the enrollment automation was created</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "enrollment_automation": {
    "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    "enrollment_automation_id": "05505650-aa57-49ab-8f19-429738758895",
    "acs_credential_provisioning_automation_id": "05505650-aa57-49ab-8f19-429738758895",
    "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
    "is_running": true,
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-09T05:45:33.068Z"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
