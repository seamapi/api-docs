---
description: Get a specified access control system
---

# Get a System

Returns a specified [access control system](../../../products/access-systems/).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/systems/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired access control system by including the corresponding `acs_system_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_system_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the desired access control system</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.systems.get(
 acs_system_id="11111111-1111-1111-1111-111111111111"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/systems/get' \
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
await seam.acs.systems.get({
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
$seam->acs->systems->get(
  acs_system_id: "11111111-1111-1111-1111-111111111111"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.AcsSystems.Get(
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
acs_system, uErr := client.Acs.Systems.Get(
  context.Background(), &acs.SystemsGetRequest{
    AcsSystemId: "11111111-1111-1111-1111-111111111111",
  },
)
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_system` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_system_id</code></td><td>ID of the access control system</td></tr><tr><td><code>name</code></td><td>Name of the access control system</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the access control system</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the access control system was created</td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the access control system type</td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the access control system type</td></tr><tr><td><code>connected_account_ids</code></td><td>Array of <a href="../../connected-accounts/">connected account</a> IDs associated with the access control system</td></tr><tr><td><code>image_url</code></td><td>URL for the image that represents the access control system</td></tr><tr><td><code>image_alt_text</code></td><td>Alternative text for the access control system image</td></tr></tbody></table>

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
AcsSystem(
  acs_system_id='11111111-1111-1111-1111-111111111111',
  name='Example Inc',
  workspace_id='00000000-0000-0000-0000-000000000000',
  created_at='2023-11-30T06:27:14.961Z',
  external_type='pti_site',
  external_type_display_name='PTI site",
  connected_account_ids=[
    '11111111-1111-1111-1111-222222222222'
  ],
  image_url='https://connect.getseam.com/assets/images/acs_systems/pti_site.png',
  image_alt_text='PTI site Logo'
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "acs_system": {
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "name": "Example Inc",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2023-11-30T06:27:14.961Z",
    "external_type": "pti_site",
    "external_type_display_name": "PTI site",
    "connected_account_ids": [
      "11111111-1111-1111-1111-222222222222"
    ],
    "image_url": "https://connect.getseam.com/assets/images/acs_systems/pti_site.png",
    "image_alt_text": "PTI site Logo"
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
{
  acs_system_id: '11111111-1111-1111-1111-111111111111',
  name: 'Example Inc',
  workspace_id: '00000000-0000-0000-0000-000000000000',
  created_at: '2023-11-30T06:27:14.961Z',
  external_type: 'pti_site',
  external_type_display_name: 'PTI site',
  connected_account_ids: [ '11111111-1111-1111-1111-222222222222' ],
  image_url: 'https://connect.getseam.com/assets/images/acs_systems/pti_site.png',
  image_alt_text: 'PTI site Logo'
}
```
{% endtab %}

{% tab title="Ruby" %}
```
# Coming Soon!
```
{% endtab %}

{% tab title="PHP" %}
```json
{
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "name": "Example Inc",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "created_at": "2023-11-30T06:27:14.961Z",
  "external_type": "pti_site",
  "external_type_display_name": "PTI site",
  "connected_account_ids": [
    "11111111-1111-1111-1111-222222222222"
  ],
  "image_url": "https://connect.getseam.com/assets/images/acs_systems/pti_site.png",
  "image_alt_text": "PTI site Logo"
}
```
{% endtab %}

{% tab title="C#" %}
```json
{
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "name": "Example Inc",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "created_at": "2023-11-30T06:27:14.961Z",
  "external_type": "pti_site",
  "external_type_display_name": "PTI site",
  "connected_account_ids": [
    "11111111-1111-1111-1111-222222222222"
  ],
  "image_url": "https://connect.getseam.com/assets/images/acs_systems/pti_site.png",
  "image_alt_text": "PTI site Logo"
}
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
  "acs_system": {
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "name": "Example Inc",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2023-11-30T06:27:14.961Z",
    "external_type": "pti_site",
    "external_type_display_name": "PTI site",
    "connected_account_ids": [
      "11111111-1111-1111-1111-222222222222"
    ],
    "image_url": "https://connect.getseam.com/assets/images/acs_systems/pti_site.png",
    "image_alt_text": "PTI site Logo"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
