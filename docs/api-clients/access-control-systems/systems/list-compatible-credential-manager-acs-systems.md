---
description: >-
  Get all credential manager ACS systems that are compatible with a specified
  ACS
---

# List Compatible Credential Manager ACS Systems

Returns a list of all credential manager ACS systems that are compatible with a specified [access control system](../../../products/access-systems/).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/systems/list_compatible_credential_manager_acs_systems" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the ACS [system](./) for which you want to retrieve all compatible credential manager ACS systems by including the corresponding `acs_system_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_system_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the ACS system for which you want to retrieve all compatible credential manager ACS systems</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.systems.list_compatible_credential_manager_acs_systems(
 acs_system_id="11111111-1111-1111-1111-111111111111"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/systems/list_compatible_credential_manager_acs_systems' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "11111111-1111-1111-1111-111111111111"
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.systems.listCompatibleCredentialManagerAcsSystems({
  acs_system_id: "11111111-1111-1111-1111-111111111111"
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
$seam->acs->systems->list_compatible_credential_manager_acs_systems(
  acs_system_id: "11111111-1111-1111-1111-111111111111"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.SystemsAcs.ListCompatibleCredentialManagerAcsSystems(
  acsSystemId: "11111111-1111-1111-1111-111111111111"
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
credential_manager, uErr := client.Acs.Systems.ListCompatibleCredentialManagerAcsSystems(
  context.Background(), &acs.SystemsListCompatibleCredentialManagerAcsSystemsRequest{
    AcsSystemId: "11111111-1111-1111-1111-111111111111",
  },
)
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_systems` array of compatible credential managers, in which each returned credential manager is an `acs_system` that contains the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_system_id</code></td><td>ID of the credential manager</td></tr><tr><td><code>name</code></td><td>Name of the credential manager</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the credential manager</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the credential manager was created</td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the credential manager type</td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the credential manager type</td></tr><tr><td><code>connected_account_ids</code></td><td>Array of <a href="../../connected-accounts/">connected account</a> IDs associated with the credential manager</td></tr><tr><td><code>image_url</code></td><td>URL for the image that represents the credential manager</td></tr><tr><td><code>image_alt_text</code></td><td>Alternative text for the credential manager image</td></tr></tbody></table>

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
[
  AcsSystem(
    acs_system_id='88888888-8888-8888-8888-888888888888',
    connected_account_ids=[
      '11111111-1111-1111-1111-222222222222'
    ],
    created_at='2024-03-26T14:32:06.350Z',
    external_type='example_credential_service',
    external_type_display_name='Example Credential Service',
    image_alt_text='Example Credential Service Logo',
    image_url='https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/example_credential_service.png',
    name='Example Credential Service',
    workspace_id='00000000-0000-0000-0000-000000000000',
    can_automate_enrollment=True
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "acs_systems": [
    {
      "acs_system_id": "88888888-8888-8888-8888-888888888888",
      "name": "Example Credential Service",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "created_at": "2024-03-26T14:32:06.350Z",
      "external_type": "example_credential_service",
      "external_type_display_name": "Example Credential Service",
      "connected_account_ids": [
        "11111111-1111-1111-1111-222222222222"
      ],
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/example_credential_service.png",
      "image_alt_text": "Example Credential Service Logo",
      "errors": [],
      "warnings": [],
      "can_automate_enrollment": true
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
    acs_system_id: '88888888-8888-8888-8888-888888888888',
    name: 'Example Credential Service',
    workspace_id: '00000000-0000-0000-0000-000000000000',
    created_at: '2024-03-26T14:32:06.350Z',
    external_type: 'example_credential_service',
    external_type_display_name: 'Example Credential Service',
    connected_account_ids: [
      '11111111-1111-1111-1111-222222222222'
    ],
    image_url: 'https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/example_credential_service.png',
    image_alt_text: 'Example Credential Service Logo',
    errors: [],
    warnings: [],
    can_automate_enrollment: true
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
```json
[
  {
    "acs_system_id": "88888888-8888-8888-8888-888888888888",
    "can_automate_enrollment": true,
    "connected_account_ids": [
      "11111111-1111-1111-1111-222222222222"
    ],
    "created_at": "2024-03-26T14:32:06.350Z",
    "errors": [],
    "external_type": "example_credential_service",
    "external_type_display_name": "Example Credential Service",
    "image_alt_text": "Example Credential Service Logo",
    "image_url": "https:\/\/connect.getseam.com\/_next\/image?url=https:\/\/connect.getseam.com\/assets\/images\/acs_systems\/example_credential_service.png",
    "name": "Example Credential Service",
    "warnings": [],
    "workspace_id": "00000000-0000-0000-0000-000000000000"
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
```json
{
  "acs_system_id": "88888888-8888-8888-8888-888888888888",
  "name": "Example Credential Service",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "created_at": "2024-03-26T14:32:06.350Z",
  "external_type": "example_credential_service",
  "external_type_display_name": "Example Credential Service",
  "connected_account_ids": [
    "11111111-1111-1111-1111-222222222222"
  ],
  "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/example_credential_service.png",
  "image_alt_text": "Example Credential Service Logo",
  "errors": [],
  "warnings": [],
  "can_automate_enrollment": true
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
  "acs_systems": [
    {
      "acs_system_id": "88888888-8888-8888-8888-888888888888",
      "name": "Example Credential Service",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "created_at": "2024-03-26T14:32:06.350Z",
      "external_type": "example_credential_service",
      "external_type_display_name": "Example Credential Service",
      "connected_account_ids": [
        "11111111-1111-1111-1111-222222222222"
      ],
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/example_credential_service.png",
      "image_alt_text": "Example Credential Service Logo",
      "errors": [],
      "warnings": [],
      "can_automate_enrollment": true
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
