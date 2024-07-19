---
description: When listing Connect Webviews, you can filter by custom metadata.
---

# Filtering Connect Webviews by Custom Metadata

When you use [List Connect Webviews](../../api-clients/connect-webviews/list-connect-webviews.md), you can filter the list by one or more [custom metadata](attaching-custom-data-to-the-connect-webview.md) pairs. Include the `custom_metadata_has` parameter with a JSON string that specifies the desired key:value pairs.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
connect_webviews = seam.connect_webviews.list(
  custom_metadata_has = {
    "internal_account_id": "user-1"
  }
)

pprint(connect_webviews)
```

**Response:**

```
[
  ConnectWebview(
    workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    connect_webview_id='3c3f4c15-e7db-47c6-bc5a-1bf206ff269c',
    status='pending',
    url='https://connect.getseam.com/connect_webviews/view?connect_webview_id=xxxx&auth_token=yyyy',
    custom_metadata={"internal_account_id": "user-1"},
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/connect_webviews/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "custom_metadata_has": {
    "internal_account_id": "user-1"
  },
}'
```

**Response:**

```json
{
  "connect_webviews": [
    {
      "connect_webview_id": "3c3f4c15-e7db-47c6-bc5a-1bf206ff269c",
      "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=3c3f4c15-e7db-47c6-bc5a-1bf206ff269c&auth_token=LrpMC4MVHAY8YJRcNFeX1nQcb7tGNwpot",
      "status": "pending",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "custom_metadata": {
        "id": "internal_id_1"
      },
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
const connect_webviews = await seam.connectWebviews.list({
  custom_metadata_has: {
    "internal_account_id": "user-1"
  }
});

console.log(connect_webviews);
```

**Response:**

```json
[
  {
    connect_webview_id: '3c3f4c15-e7db-47c6-bc5a-1bf206ff269c',
    url: 'https://connect.getseam.com/connect_webviews/view?connect_webview_id=3c3f4c15-e7db-47c6-bc5a-1bf206ff269c&auth_token=LrpMC4MVHAY8YJRcNFeX1nQcb7tGNwpot',
    status: 'pending',
    workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    custom_metadata: { internal_account_id: 'user-1' },
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
connect_webviews = client.connect_webviews.list(
  custom_metadata_has: {
    "internal_account_id": "user-1"
  }
)

puts connect_webviews.inspect
```

**Response:**

```
[
  &#x3C;Seam::ConnectWebview:0x00438
    connect_webview_id="3c3f4c15-e7db-47c6-bc5a-1bf206ff269c"
    url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=3c3f4c15-e7db-47c6-bc5a-1bf206ff269c&#x26;auth_token=LrpMC4MVHAY8YJRcNFeX1nQcb7tGNwpot"
    status="pending"
    workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be"
    custom_metadata={"internal_account_id"=>"user-1"}
    ...
  >,
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$webviews = $seam->connect_webviews->list(
  custom_metadata_has: array('internal_account_id' => 'user-1')
);

echo json_encode($webviews);
```

**Response:**

```json
[
  {
    "connect_webview_id":"3c3f4c15-e7db-47c6-bc5a-1bf206ff269c",
    "url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=xxxx&auth_token=yyyy",
    "status"="pending",
    "workspace_id"="398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "custom_metadata"={"internal_account_id"=>"user-1"},
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var customMetadata = new Dictionary<string, string>() {
  {"internal_account_id", "user-1"}
};

seam.ConnectWebviews.List(
  customMetadataHas: customMetadata
);
```

**Response:**

```json
{
  "connect_webview_id": "3874d8b4-4bb5-470a-9fc7-a54931a4b933",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=3c3f4c15-e7db-47c6-bc5a-1bf206ff269c&auth_token=LrpMC4MVHAY8YJRcNFeX1nQcb7tGNwpot",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "custom_metadata": {
    "internal_account_id": "user-1"
  },
  ...
}...
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
Map<String, CustomMetadataValue> customMetadata = Map.of(
  "internal_account_id",
  CustomMetadataValue.of(Optional.of("user-1"))
);

seam.connectWebviews().list(
  ConnectWebviewsListRequest.builder()
    .customMetadataHas(customMetadata)
    .build()
);
```

**Response:**

```json
[
  {
    "connect_webview_id" : "72dffd65-71e0-4035-9c85-199dd756a11c",
    "url" : "https://connect.getseam.com/connect_webviews/view?connect_webview_id=3c3f4c15-e7db-47c6-bc5a-1bf206ff269c&auth_token=LrpMC4MVHAY8YJRcNFeX1nQcb7tGNwpot",
    "workspace_id" : "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    ...
    "custom_metadata" : {
      "internal_account_id" : "user-1"
    },
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
connectWebviews, err := client.ConnectWebviews.List(
	context.Background(),
	&api.ConnectWebviewsListRequest{
		CustomMetadataHas: {"internal_account_id":"user-1"},
	},
)
if err != nil {
	return err
}
fmt.Println(connectWebviews)
return nil
```

**Response:**

```json
[
  {
    "connect_webview_id" : "72dffd65-71e0-4035-9c85-199dd756a11c",
    "url" : "https://connect.getseam.com/connect_webviews/view?connect_webview_id=3c3f4c15-e7db-47c6-bc5a-1bf206ff269c&auth_token=LrpMC4MVHAY8YJRcNFeX1nQcb7tGNwpot",
    "workspace_id" : "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    ...
    "custom_metadata" : {
      "internal_account_id" : "user-1"
    },
    ...
  }
  ...
]
```
{% endtab %}
{% endtabs %}
