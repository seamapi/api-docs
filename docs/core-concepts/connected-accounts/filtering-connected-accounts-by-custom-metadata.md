---
description: When listing connected accounts, you can filter by custom metadata.
---

# Filtering Connected Accounts by Custom Metadata

When you use [List Connected Accounts](../../api-clients/connected-accounts/list-connected-accounts.md), you can filter the list by one or more [custom metadata](./) pairs. Include the `custom_metadata_has` parameter with a JSON string that specifies the desired key:value pairs.

{% hint style="info" %}
If the [Connect Webview](../connect-webviews/) associated with a connected account contains custom metadata, Seam transfers this custom metadata to the connected account. However, you can also use the [Update Connected Account](../../api-clients/connected-accounts/update-a-connected-account.md) method with the optional [`custom_metadata` property](../../api-clients/connected-accounts/#connected\_account-properties) to [change or add custom metadata for a connected account](adding-custom-metadata-to-a-connected-account.md).
{% endhint %}

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
connected_accounts = seam.connected_accounts.list(
  custom_metadata_has = {
    "internal_account_id": "user-1"
  }
)

pprint(connected_accounts)
```

**Response:**

```
[ConnectedAccount(connected_account_id='c993818b-bf3c-4836-bef4-9a76d89bf1d3',
                  created_at='2024-01-05T07:20:07.692Z',
                  user_identifier={'username': 'jane'},
                  account_type='visionline',
                  errors=[],
                  custom_metadata={"internal_account_id": "user-1"}),
...]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/connected_accounts/list' \
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
  "connected_accounts": [
    {
      "connected_account_id": "c993818b-bf3c-4836-bef4-9a76d89bf1d3",
      "created_at": "2024-01-05T07:20:07.692Z",
      "user_identifier": {
        "username": "jane"
      },
      "account_type": "visionline",
      "account_type_display_name": "Visionline",
      "errors": [],
      "warnings": [],
      "custom_metadata": {
        "internal_account_id": "user-1"
      },
      "automatically_manage_new_devices": true
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
const connected_accounts = await seam.connectedAccounts.list({
  custom_metadata_has: {
    "internal_account_id": "user-1"
  }
});

console.log(connected_accounts);
```

**Response:**

```json
[
  {
    connected_account_id: 'c993818b-bf3c-4836-bef4-9a76d89bf1d3',
    created_at: '2024-01-05T07:20:07.692Z',
    user_identifier: { username: 'jane' },
    account_type: 'visionline',
    account_type_display_name: 'Visionline',
    errors: [],
    warnings: [],
    custom_metadata: { internal_account_id: 'user-1' },
    automatically_manage_new_devices: true
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
connected_accounts = client.connected_accounts.list(
  custom_metadata_has: {
    "internal_account_id": "user-1"
  }
)

puts connected_accounts.inspect
```

**Response:**

```
[<Seam::ConnectedAccount:0x004d8
  connected_account_id="c993818b-bf3c-4836-bef4-9a76d89bf1d3"
  created_at=2024-01-05 07:20:07.692 UTC
  user_identifier={"username"=>"jane"}
  account_type="visionline"
  errors=[]
  warnings=[]
  custom_metadata={"internal_account_id"=>"user-1"}>, ...]
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$accounts = $seam->connected_accounts->list(
  custom_metadata_has: array('internal_account_id' => 'user-1')
);

echo json_encode($accounts);
```

**Response:**

{% code overflow="wrap" %}
```json
[{"connected_account_id":"c993818b-bf3c-4836-bef4-9a76d89bf1d3","account_type":"visionline","user_identifier":{"username":"jane", "email":null,"phone":null},"errors":[],"warnings":[],"created_at":"2024-01-05T07:20:07.692Z","custom_metadata":{"internal_account_id":"user-1"},"automatically_manage_new_devices":true},...]
```
{% endcode %}
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var customMetadata = new Dictionary<string, string>()
{
  {"internal_account_id", "user-1"}
};

var connectedAccounts = seam.ConnectedAccounts.List(
  customMetadataHas: customMetadata
);

foreach (var connectedAccount in connectedAccounts)
{
  Console.WriteLine(connectedAccount);
}
```

**Response:**

```json
{
  "connected_account_id": "c993818b-bf3c-4836-bef4-9a76d89bf1d3",
  "created_at": "2024-01-05T07:20:07.692Z",
  "user_identifier": {
    "username": "jane"
  },
  "account_type": "visionline",
  "account_type_display_name": "Visionline",
  "errors": [],
  "warnings": [],
  "custom_metadata": {
    "internal_account_id": "user-1"
  },
  "automatically_manage_new_devices": true
}
...
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
Map<String, CustomMetadataValue> customMetadata =
    Map.of("internal_account_id", CustomMetadataValue.of(Optional.of("user-1")));

var connectedAccounts = seam.connectedAccounts().list(ConnectedAccountsListRequest.builder()
                .customMetadataHas(customMetadata)
                .build());

System.out.println(connectedAccounts);
```

**Response:**

```json
[{
  "connected_account_id" : "c993818b-bf3c-4836-bef4-9a76d89bf1d3",
  "created_at" : "2024-01-05T07:20:07.692Z",
  "user_identifier" : {
    "username" : "jane"
  },
  "account_type" : "visionline",
  "errors" : [ ],
  "warnings" : [ ],
  "custom_metadata" : {
    "internal_account_id" : "user-1"
  },
  "account_type_display_name" : "Visionline",
  "automatically_manage_new_devices" : true
},...
]
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
connectedAccounts, err := client.ConnectedAccounts.List(
	context.Background(),
	&api.ConnectedAccountsListRequest{
		CustomMetadataHas: {"internal_account_id":"user-1"},
	},
)
if err != nil {
	return err
}
fmt.Println(connectedAccounts)
return nil
```

**Response:**

```json
[{
  "connected_account_id": "c993818b-bf3c-4836-bef4-9a76d89bf1d3",
  "created_at": "2024-01-05T07:20:07.692Z",
  "user_identifier": {
    "username": "jane"
  },
  "account_type": "visionline",
  "account_type_display_name": "Visionline",
  "errors": [],
  "warnings": [],
  "custom_metadata": {
    "internal_account_id": "user-1"
  },
  "automatically_manage_new_devices": true
}...
]
```
{% endtab %}
{% endtabs %}
