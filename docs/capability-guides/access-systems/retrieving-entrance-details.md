---
description: >-
  Learn how to get details about the entrances in your ACS, including listing
  the credentials that provide access to a specific entrance.
---

# Retrieving Entrance Details

In an ACS, an entrance is a secured door, gate, zone, or other method of entry. You can list details for all the `acs_entrance` resources in your [workspace](../../core-concepts/workspaces/) or get these details for a specific `acs_entrance`. You can also list all entrances associated with a specific [credential](managing-credentials.md), and you can list all credentials associated with a specific entrance.

***

## List All Entrances

You can [list all `acs_entrance` resources](../../api-clients/access-control-systems/entrances/list-entrances.md) in your workspace. Note that entrance details include manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.entrances.list()
```

**Response:**

```
[
  AcsEntrance(
    acs_entrance_id='55555555-5555-5555-5555-555555555555',
    acs_system_id='11111111-1111-1111-1111-111111111111',
    workspace_id='00000000-0000-0000-0000-000000000000',
    display_name='Guest Lock 2',
    ....
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
  'https://connect.getseam.com/acs/entrances/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Response:**

```json
{
  "acs_entrances": [
    {
      "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "display_name": "Guest Lock 2",
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
await seam.acs.entrances.list();
```

**Response:**

```json
[
  {
    acs_entrance_id: '55555555-5555-5555-5555-555555555555',
    acs_system_id: '11111111-1111-1111-1111-111111111111',
    workspace_id: '00000000-0000-0000-0000-000000000000',
    display_name: 'Guest Lock 2',
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
$seam->acs->entrances->list();
```

**Response:**

```json
[
  {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "display_name": "Guest Lock 2",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Untitled" %}

{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.EntrancesAcs.List();
```

**Response:**

```json
{
  "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "display_name": "Guest Lock 2",
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
acs_entrances, uErr := client.Acs.Entrances.List(
  context.Background(), &acs.EntrancesListRequest{},
)
```

**Response:**

```json
{
  "acs_entrances": [
    {
      "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "display_name": "Guest Lock 2",
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

## List Entrances in an ACS

To list all `acs_entrance`s in a specific ACS, include the `acs_system_id` filter in the [List Entrances](../../api-clients/access-control-systems/entrances/list-entrances.md) request. Note that entrance details include manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.entrances.list(
  acs_system_id="11111111-1111-1111-1111-111111111111"
)
```

**Response:**

```
[
  AcsEntrance(
    acs_entrance_id='55555555-5555-5555-5555-555555555555',
    acs_system_id='11111111-1111-1111-1111-111111111111',
    workspace_id='00000000-0000-0000-0000-000000000000',
    display_name='Guest Lock 2',
    ....
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
  'https://connect.getseam.com/acs/entrances/list' \
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
  "acs_entrances": [
    {
      "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "display_name": "Guest Lock 2",
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
await seam.acs.entrances.list({
  acs_system_id: "11111111-1111-1111-1111-111111111111"
});
```

**Response:**

```json
[
  {
    acs_entrance_id: '55555555-5555-5555-5555-555555555555',
    acs_system_id: '11111111-1111-1111-1111-111111111111',
    workspace_id: '00000000-0000-0000-0000-000000000000',
    display_name: 'Guest Lock 2',
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
$seam->acs->entrances->list(
  acs_system_id: "11111111-1111-1111-1111-111111111111"
);
```

**Response:**

```json
[
  {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "display_name": "Guest Lock 2",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.EntrancesAcs.List(
  acsSystemId: "11111111-1111-1111-1111-111111111111"
);
```

**Response:**

```json
{
  "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "display_name": "Guest Lock 2",
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
acs_entrances, uErr := client.Acs.Entrances.List(
  context.Background(), &acs.EntrancesListRequest{
    AcsSystemId: api.String("11111111-1111-1111-1111-111111111111"),
  },
)
```

**Response:**

```json
{
  "acs_entrances": [
    {
      "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "display_name": "Guest Lock 2",
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

## List Entrances Associated with a Credential

To list all `acs_entrance`s associated with a specific ACS, include the `acs_credential_id` filter in the [List Entrances](../../api-clients/access-control-systems/entrances/list-entrances.md) request. Note that entrance details include manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.entrances.list(
  acs_credential_id="66666666-6666-6666-6666-666666666666"
)
```

**Response:**

```
[
  AcsEntrance(
    acs_entrance_id='55555555-5555-5555-5555-555555555555',
    acs_system_id='11111111-1111-1111-1111-111111111111',
    workspace_id='00000000-0000-0000-0000-000000000000',
    display_name='Guest Lock 2',
    ....
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
  'https://connect.getseam.com/acs/entrances/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666"
}'
```

**Response:**

```json
{
  "acs_entrances": [
    {
      "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "display_name": "Guest Lock 2",
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
await seam.acs.entrances.list({
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
});
```

**Response:**

```json
[
  {
    acs_entrance_id: '55555555-5555-5555-5555-555555555555',
    acs_system_id: '11111111-1111-1111-1111-111111111111',
    workspace_id: '00000000-0000-0000-0000-000000000000',
    display_name: 'Guest Lock 2',
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
$seam->acs->entrances->list(
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
);
```

**Response:**

```json
[
  {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "display_name": "Guest Lock 2",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.EntrancesAcs.List(
  acsCredentialId: "66666666-6666-6666-6666-666666666666"
);
```

**Response:**

```json
{
  "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "display_name": "Guest Lock 2",
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
acs_entrances, uErr := client.Acs.Entrances.List(
  context.Background(), &acs.EntrancesListRequest{
    AcsCredentialId: api.String("66666666-6666-6666-6666-666666666666"),
  },
)
```

**Response:**

```json
{
  "acs_entrances": [
    {
      "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "display_name": "Guest Lock 2",
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

## Get an Entrance

You can [get the details of a specific `acs_entrance`](../../api-clients/access-control-systems/entrances/get-an-entrance.md). Note that entrance details include manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.entrances.get(
  acs_entrance_id="55555555-5555-5555-5555-555555555555"
)
```

**Response:**

```
AcsEntrance(
  acs_entrance_id: '55555555-5555-5555-5555-555555555555',
  acs_system_id: '11111111-1111-1111-1111-111111111111',
  workspace_id: '00000000-0000-0000-0000-000000000000',
  display_name: 'Guest Lock 2',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

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

**Response:**

```json
{
  "acs_entrance": {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "display_name": "Guest Lock 2",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.entrances.get({
  acs_entrance_id: "55555555-5555-5555-5555-555555555555"
});
```

**Response:**

```json
{
  acs_entrance_id: '55555555-5555-5555-5555-555555555555',
  acs_system_id: '11111111-1111-1111-1111-111111111111',
  workspace_id: '00000000-0000-0000-0000-000000000000',
  display_name: 'Guest Lock 2',
  ...
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
$seam->acs->entrances->get(
  acs_entrance_id: "55555555-5555-5555-5555-555555555555"
);
```

**Response:**

```json
{
  "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "display_name": "Guest Lock 2",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.EntrancesAcs.Get(
  acsEntranceId: "55555555-5555-5555-5555-555555555555"
);
```

**Response:**

```json
{
  "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "display_name": "Guest Lock 2",
  ...
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
acs_entrance, uErr := client.Acs.Entrances.Get(
  context.Background(), &acs.EntrancesGetRequest{
    AcsEntranceId: "55555555-5555-5555-5555-555555555555",
  },
)
```

**Response:**

```json
{
  "acs_entrance": {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "display_name": "Guest Lock 2",
    ...
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
