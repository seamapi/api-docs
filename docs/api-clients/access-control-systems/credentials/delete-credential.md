---
description: Delete a specified credential
---

# Delete a Credential

Deletes a specified [credential](../../../products/access-systems/#what-is-a-credential).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/credentials/delete" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired credential by including the corresponding `acs_credential_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_credential_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the desired credential</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.credentials.delete(
  acs_credential_id="66666666-6666-6666-6666-666666666666"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/delete' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666"
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.credentials.delete({
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
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
$seam->acs->credentials->delete(
  acs_credential_id: "66666666-6666-6666-6666-66666666"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.CredentialsAcs.Delete(
  acsCredentialId: "66666666-6666-6666-6666-66666666"
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
_, uErr := client.Acs.Credentials.Delete(
  context.Background(), &acs.CredentialsDeleteRequest{
    AcsCredentialId: "66666666-6666-6666-6666-66666666",
  },
)
```
{% endtab %}
{% endtabs %}

## Response

Returns a Boolean `ok` status indicator or void.

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
void
```
{% endtab %}

{% tab title="Ruby" %}
```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
```
void
```
{% endtab %}

{% tab title="C#" %}
```
void
```
{% endtab %}

{% tab title="Java" %}
```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
```json
void
```
{% endtab %}
{% endtabs %}
