---
description: Get all credentials with access to a specified entrance
---

# List Credentials with Access to an Entrance

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md) with access to a specified [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/entrances/list_credentials_with_access" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the entrance for which you want to retrieve all credentials with access by including the corresponding `acs_entrance_id` in the request body.

{% hint style="info" %}
You can also use a manufacturer-specific filter for entrances in a [Visionline ACS](../../../device-and-system-integration-guides/assa-abloy-visionline-access-control-system/). For details, see [List All Valid Credentials for a Set of Guest Entrances to Add as Joiners](../../../device-and-system-integration-guides/assa-abloy-visionline-access-control-system/credential-types.md#list-all-valid-credentials-for-a-set-of-guest-entrances-to-add-as-joiners).
{% endhint %}

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_entrance_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the entrance for which you want to retrieve all credentials with access</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.entrances.list_credentials_with_access(
  acs_entrance_id="55555555-5555-5555-5555-555555555555"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/entrances/list_credentials_with_access' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_entrance_id": "55555555-5555-5555-5555-555555555555"
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.entrances.list_credentials_with_access({
  acs_entrance_id: "55555555-5555-5555-5555-555555555555"
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
$seam->acs->entrances->list_credentials_with_access(
  acs_entrance_id: "55555555-5555-5555-5555-555555555555"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.EntrancesAcs.ListCredentialsWithAccess(
  acsEntranceId: "55555555-5555-5555-5555-555555555555"
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
acs_users, uErr := client.Acs.Entrances.ListEntrancesWithAccess(
  context.Background(), &acs.UsersListRequest{
    AcsEntranceId: api.String("55555555-5555-5555-5555-555555555555")
  },
)
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_credentials` array, in which each returned `acs_credential` contains the following properties:

<table><thead><tr><th width="306">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_credential_id</code></td><td>ID of the credential</td></tr><tr><td><code>acs_user_id</code></td><td>ID of the user to whom the credential belongs</td></tr><tr><td><code>parent_acs_credential_id</code></td><td>ID of the parent ACS credential</td></tr><tr><td><code>display_name</code></td><td>Display name that corresponds to the credential type</td></tr><tr><td><code>code</code></td><td>Access (PIN) code for the credential</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the access control system that contains the credential</td></tr><tr><td><code>access_method</code></td><td>Access method for the credential. Supported values: <code>code</code>, <code>card</code>, <code>mobile_key</code></td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the credential type<br>Supported values: <code>pti_card</code>, <code>brivo_credential</code>, <code>hid_credential</code>, <code>visionline_card</code></td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the credential type</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the credential</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the credential was created</td></tr><tr><td><code>starts_at</code></td><td>Date and time at which the credential validity starts, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format</td></tr><tr><td><code>ends_at</code></td><td>Date and time at which the credential validity ends, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format</td></tr><tr><td><code>is_multi_phone_sync_credential</code></td><td>Indicates whether the credential is a <a href="../../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md#what-are-multi-phone-sync-credentials">multi-phone sync credential</a></td></tr><tr><td><code>XXX_metadata</code></td><td>ACS manufacturer-specific metadata for the entrance, where <code>XXX</code> is the <a href="../../../device-and-system-integration-guides/overview.md#access-control-systems">manufacturer</a></td></tr></tbody></table>

### Sample Response

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

{% tabs %}
{% tab title="Python" %}
```
[
  AcsCredential(
    acs_credential_id='77777777-7777-7777-7777-777777777777',
    acs_user_id='33333333-3333-3333-3333-333333333333',
    parent_acs_credential_id='66666666-6666-6666-6666-666666666666',
    display_name='Credential 2',
    code=null,
    acs_system_id='11111111-1111-1111-1111-111111111111',
    access_method='mobile_key',
    external_type='visionline_card',
    external_type_display_name='Visionline Card',
    errors=[],
    warnings=[],
    workspace_id='00000000-0000-0000-0000-000000000000',
    created_at='2024-04-09T14:30:56.343Z',
    starts_at='2024-04-09T14:30:55.688Z',
    ends_at='2024-03-04T10:40:00.000Z',
    is_multi_phone_sync_credential=False,
    visionline_metadata={}
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "acs_credentials": [
    {
      "acs_credential_id": "77777777-7777-7777-7777-777777777777",
      "acs_user_id": "33333333-3333-3333-3333-333333333333",
      "parent_acs_credential_id": "66666666-6666-6666-6666-666666666666",
      "display_name": "Credential 2",
      "code": null,
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "access_method": "mobile_key",
      "external_type": "visionline_card",
      "external_type_display_name": "Visionline Card",
      "errors": [],
      "warnings": [],
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "created_at": "2024-04-09T14:30:56.343Z",
      "starts_at": "2024-04-09T14:30:55.688Z",
      "ends_at": "2024-03-04T10:40:00.000Z",
      "is_multi_phone_sync_credential": false,
      "visionline_metadata": {}
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
[
  {
    acs_credential_id: '77777777-7777-7777-7777-777777777777',
    acs_user_id: '33333333-3333-3333-3333-333333333333',
    parent_acs_credential_id: '66666666-6666-6666-6666-666666666666',
    display_name: 'Credential 2',
    code: null,
    acs_system_id: '11111111-1111-1111-1111-111111111111',
    access_method: 'mobile_key',
    external_type: 'visionline_card',
    external_type_display_name: 'Visionline Card',
    errors: [],
    warnings: 
    workspace_id: '00000000-0000-0000-0000-000000000000',
    created_at: '2024-04-09T14:30:56.343Z',
    starts_at: '2024-04-09T14:30:55.688Z',
    ends_at: '2024-03-04T10:40:00.000Z',
    is_multi_phone_sync_credential: false,
    visionline_metadata: {}
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
```
# Coming Soon!
```
{% endtab %}

{% tab title="PHP" %}
```json
[
  {
    "acs_credential_id": "77777777-7777-7777-7777-777777777777",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "parent_acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "display_name": "Credential 2",
    "code": null,
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "access_method": "mobile_key",
    "external_type": "visionline_card",
    "external_type_display_name": "Visionline Card",
    "errors": [],
    "warnings": [],
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2024-04-09T14:30:56.343Z",
    "starts_at": "2024-04-09T14:30:55.688Z",
    "ends_at": "2024-03-04T10:40:00.000Z",
    "is_multi_phone_sync_credential": false,
    "visionline_metadata": {}
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
```json
{
  "acs_credential_id": "77777777-7777-7777-7777-777777777777",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "parent_acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "display_name": "Credential 2",
  "code": null,
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "access_method": "mobile_key",
  "external_type": "visionline_card",
  "external_type_display_name": "Visionline Card",
  "errors": [],
  "warnings": [],
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "created_at": "2024-04-09T14:30:56.343Z",
  "starts_at": "2024-04-09T14:30:55.688Z",
  "ends_at": "2024-03-04T10:40:00.000Z",
  "is_multi_phone_sync_credential": false,
  "visionline_metadata": {}
}
...
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
  "acs_credentials": [
    {
      "acs_credential_id": "77777777-7777-7777-7777-777777777777",
      "acs_user_id": "33333333-3333-3333-3333-333333333333",
      "parent_acs_credential_id": "66666666-6666-6666-6666-666666666666",
      "display_name": "Credential 2",
      "code": null,
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "access_method": "mobile_key",
      "external_type": "visionline_card",
      "external_type_display_name": "Visionline Card",
      "errors": [],
      "warnings": [],
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "created_at": "2024-04-09T14:30:56.343Z",
      "starts_at": "2024-04-09T14:30:55.688Z",
      "ends_at": "2024-03-04T10:40:00.000Z",
      "is_multi_phone_sync_credential": false,
      "visionline_metadata": {}
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
