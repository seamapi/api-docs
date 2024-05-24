---
description: Learn how to list and get information about your ACS systems.
---

# Retrieving ACS System Details

You can list details for all the ACSs in your [workspace](../../core-concepts/workspaces/) or get these details for a specific ACS. Note that Seam represents the ACS as an [`acs_system`](../../api-clients/access-control-systems/systems/) resource. When you want to [create ACS users](../../products/access-systems/user-management.md#create-a-user) for your ACS, you must first obtain the ID of the `acs_system` for which you want to create these users.

***

## List ACS Systems

You can [list all `acs_system` resources](../../api-clients/access-control-systems/systems/list-systems.md) in your workspace. Note the `acs_system_id` in the response.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.systems.list()
```

**Response:**

```
[
  AcsSystem(
    acs_system_id='11111111-1111-1111-1111-111111111111',
    name='Visionline System',
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/systems/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Response:**

```json
{
  "acs_systems": [
    {
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "name": "Visionline System",
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.systems.list();
```

**Response:**

```json
[
  {
    acs_system_id: '11111111-1111-1111-1111-111111111111',
    name: 'Visionline System',
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->acs->systems->list();
```

**Response:**

```json
[
  {
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "name": "Visionline System",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.SystemsAcs.List();
```

**Response:**

```json
{
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "name": "Visionline System",
  ...
}
...
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
acs_systems, uErr := client.Acs.Systems.List(
  context.Background(), &acs.SystemsListRequest{},
)
```

**Response:**

```json
{
  "acs_systems": [
    {
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "name": "Visionline System",
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

## Get an ACS System

You can [get the details of a specific `acs_system`](../../api-clients/access-control-systems/systems/get-system.md) in your workspace. These details include the `acs_system_id`, date and time at which the `acs_system` was created in Seam, the name and type of the `acs_system`, and so on.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.systems.get(
 acs_system_id="11111111-1111-1111-1111-111111111111"
)
```

**Response:**

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
**Request:**

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

**Response:**

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
**Request:**

```javascript
await seam.acs.systems.get({
  acs_system_id: "11111111-1111-1111-1111-111111111111"
});
```

**Response:**

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
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->acs->systems->get(
  acs_system_id: "11111111-1111-1111-1111-111111111111"
);
```

**Response:**

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
**Request:**

```csharp
seam.AcsSystems.Get(
  acsSystemId: "11111111-1111-1111-1111-111111111111"
);
```

**Response:**

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
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
acs_system, uErr := client.Acs.Systems.Get(
  context.Background(), &acs.SystemsGetRequest{
    AcsSystemId: "11111111-1111-1111-1111-111111111111",
  },
)
```

**Response:**

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
