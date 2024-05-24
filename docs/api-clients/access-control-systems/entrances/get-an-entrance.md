---
description: Get a specified entrance
---

# Get an Entrance

Returns a specified [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/entrances/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired entrance by including the corresponding `acs_entrance_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_entrance_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the desired entrance</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.entrances.get(
  acs_entrance_id="55555555-5555-5555-5555-555555555555"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/entrances/get' \
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
await seam.acs.entrances.get({
  acs_entrance_id: "55555555-5555-5555-5555-555555555555"
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
$seam->acs->entrances->get(
  acs_entrance_id: "55555555-5555-5555-5555-555555555555"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.EntrancesAcs.Get(
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
acs_entrance, uErr := client.Acs.Entrances.Get(
  context.Background(), &acs.EntrancesGetRequest{
    AcsEntranceId: "55555555-5555-5555-5555-555555555555",
  },
)
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_entrance` containing the following properties:

<table><thead><tr><th width="309">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_entrance_id</code></td><td>ID of the entrance</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the access control system that contains the entrance</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the user</td></tr><tr><td><code>display_name</code></td><td>Display name for the entrance</td></tr><tr><td><code>XXX_metadata</code></td><td>ACS manufacturer-specific metadata for the entrance, where <code>XXX</code> is the <a href="../../../device-and-system-integration-guides/overview.md#access-control-systems">manufacturer</a></td></tr><tr><td><code>created_at</code></td><td>Date and time at which the entrance was created</td></tr></tbody></table>

### Sample Response

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

{% tabs %}
{% tab title="Python" %}
```
AcsEntrance(
  acs_entrance_id: '55555555-5555-5555-5555-555555555555',
  acs_system_id: '11111111-1111-1111-1111-111111111111',
  workspace_id: '00000000-0000-0000-0000-000000000000',
  visionline_metadata: {
    profiles: [
      {
        visionline_door_profile_id: 'Guest Door',
        visionline_door_profile_type: 'BLE'
      }
    ],
    door_name: 'Guest Lock 2',
    door_category: 'guest'
  },
  latch_metadata: null,
  display_name: 'Guest Lock 2',
  created_at: '2024-03-26T14:31:18.979Z'
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "acs_entrance": {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "visionline_metadata": {
      "profiles": [
        {
          "visionline_door_profile_id": "Guest Door",
          "visionline_door_profile_type": "BLE"
        }
      ],
      "door_name": "Guest Lock 2",
      "door_category": "guest"
    },
    "latch_metadata": null,
    "display_name": "Guest Lock 2",
    "created_at": "2024-03-26T14:31:18.979Z"
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
{
  acs_entrance_id: '55555555-5555-5555-5555-555555555555',
  acs_system_id: '11111111-1111-1111-1111-111111111111',
  workspace_id: '00000000-0000-0000-0000-000000000000',
  visionline_metadata: {
    profiles: [
      {
        visionline_door_profile_id: 'Guest Door',
        visionline_door_profile_type: 'BLE'
      }
    ],
    door_name: 'Guest Lock 2',
    door_category: 'guest'
  },
  latch_metadata: null,
  display_name: 'Guest Lock 2',
  created_at: '2024-03-26T14:31:18.979Z'
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
  "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "visionline_metadata": {
    "profiles": [
      {
        "visionline_door_profile_id": "Guest Door",
        "visionline_door_profile_type": "BLE"
      }
    ],
    "door_name": "Guest Lock 2",
    "door_category": "guest"
  },
  "latch_metadata": null,
  "display_name": "Guest Lock 2",
  "created_at": "2024-03-26T14:31:18.979Z"
}
```
{% endtab %}

{% tab title="C#" %}
```json
{
  "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "visionline_metadata": {
    "profiles": [
      {
        "visionline_door_profile_id": "Guest Door",
        "visionline_door_profile_type": "BLE"
      }
    ],
    "door_name": "Guest Lock 2",
    "door_category": "guest"
  },
  "latch_metadata": null,
  "display_name": "Guest Lock 2",
  "created_at": "2024-03-26T14:31:18.979Z"
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
  "acs_entrance": {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "visionline_metadata": {
      "profiles": [
        {
          "visionline_door_profile_id": "Guest Door",
          "visionline_door_profile_type": "BLE"
        }
      ],
      "door_name": "Guest Lock 2",
      "door_category": "guest"
    },
    "latch_metadata": null,
    "display_name": "Guest Lock 2",
    "created_at": "2024-03-26T14:31:18.979Z"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
