---
description: Get all access groups
---

# List Access Groups

Returns a list of all [access groups](../../../products/access-systems/assigning-users-to-access-groups.md).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/access_groups/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

To filter the list of returned access groups by a specific [access control system](../../../products/access-systems/) or [ACS user](../../../products/access-systems/user-management.md), include one or both of the `acs_system_id` or `acs_user_id` parameters, respectively, in the request body. If you omit these parameters, the response includes all access groups in your [workspace](../../../core-concepts/workspaces/).

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_system_id</code></td><td>String (UUID)<br><em>Optional</em></td><td>ID of the access control system for which you want to retrieve all access groups</td></tr><tr><td><code>acs_user_id</code></td><td>String (UUID)<br><em>Optional</em></td><td>ID of the user for which you want to retrieve all access groups</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.access_groups.list(
  acs_system_id="11111111-1111-1111-1111-111111111111",
  acs_user_id="33333333-3333-3333-3333-333333333333"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/access_groups/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "acs_user_id": "33333333-3333-3333-3333-333333333333"
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.access_groups.list({
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  acs_user_id: "33333333-3333-3333-3333-333333333333"
});
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# Coming Soon!
```
{% endtab %}

{% tab title="PHP" %}
```php
$seam->acs->access_groups->list(
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  acs_user_id: "33333333-3333-3333-3333-333333333333"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.AccessGroupsAcs.List(
  acsSystemId: "11111111-1111-1111-1111-111111111111",
  acsUserId: "33333333-3333-3333-3333-333333333333"
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
acs_access_groups, uErr := client.Acs.AccessGroups.List(
  context.Background(), &acs.AccessGroupsListRequest{
    AcsSystemId: api.String("11111111-1111-1111-1111-111111111111"),
    AcsUserId: api.String("33333333-3333-3333-3333-333333333333"),
  },
)
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_access_groups` array, in which each returned `acs_access_group` contains the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_access_group_id</code></td><td>ID of the access group</td></tr><tr><td><code>name</code></td><td>Name of the access group</td></tr><tr><td><code>display_name</code></td><td>Display name for the access group</td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the access group type</td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the access group type</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the access control system that contains the access group</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the access group</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the access group was created</td></tr></tbody></table>

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
[
  AcsAccessGroup(
    acs_access_group_id='44444444-4444-4444-4444-444444444444',
    acs_system_id='11111111-1111-1111-1111-111111111111',
    workspace_id='00000000-0000-0000-0000-000000000000',
    name='Lobby Access',
    access_group_type='pti_access_level',
    access_group_type_display_name='PTI access level',
    external_type='pti_access_level',
    external_type_display_name='PTI access level',
    created_at='2023-11-30T06:27:15.437Z'
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "acs_access_groups": [
    {
      "acs_access_group_id": "44444444-4444-4444-4444-444444444444",
      "name": "Lobby Access",
      "display_name": "Lobby Access",
      "access_group_type_display_name": "PTI access level",
      "access_group_type": "pti_access_level",
      "external_type": "pti_access_level",
      "external_type_display_name": "PTI access level",
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "created_at": "2023-11-30T06:27:15.437Z"
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
    acs_access_group_id: '44444444-4444-4444-4444-444444444444',
    name: 'Lobby Access',
    display_name: 'Lobby Access',
    access_group_type_display_name: 'PTI access level',
    access_group_type: 'pti_access_level',
    external_type: 'pti_access_level',
    external_type_display_name: 'PTI access level',
    acs_system_id: '11111111-1111-1111-1111-111111111111',
    workspace_id: '00000000-0000-0000-0000-000000000000',
    created_at: '2023-11-30T06:27:15.437Z'
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
<pre class="language-json"><code class="lang-json">[
<strong>  {
</strong>    "acs_access_group_id": "44444444-4444-4444-4444-444444444444",
    "name": "Lobby Access",
    "display_name": "Lobby Access",
    "access_group_type_display_name": "PTI access level",
    "access_group_type": "pti_access_level",
    "external_type": "pti_access_level",
    "external_type_display_name": "PTI access level",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2023-11-30T06:27:15.437Z"
  },
  ...
]
</code></pre>
{% endtab %}

{% tab title="C#" %}
```json
{
  "acs_access_group_id": "44444444-4444-4444-4444-444444444444",
  "name": "Lobby Access",
  "display_name": "Lobby Access",
  "access_group_type_display_name": "PTI access level",
  "access_group_type": "pti_access_level",
  "external_type": "pti_access_level",
  "external_type_display_name": "PTI access level",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "created_at": "2023-11-30T06:27:15.437Z"
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
  "acs_access_groups": [
    {
      "acs_access_group_id": "44444444-4444-4444-4444-444444444444",
      "name": "Lobby Access",
      "display_name": "Lobby Access",
      "access_group_type_display_name": "PTI access level",
      "access_group_type": "pti_access_level",
      "external_type": "pti_access_level",
      "external_type_display_name": "PTI access level",
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "created_at": "2023-11-30T06:27:15.437Z"
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
