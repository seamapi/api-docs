---
description: Reset Workspace on the Account
---

# Reset Workspace

## Reset Your Workspace Sandbox

{% hint style="info" %}
This method is only available on Sandbox Workspaces
{% endhint %}

{% swagger method="post" path="/workspaces/reset_sandbox" baseUrl="https://connect.getseam.com" summary="Reset the sandbox on this workspace" %}
{% swagger-description %}
Resetting a Sandbox Workspace clears all the accounts and devices on the Workspace
{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Workspace successfully reset" %}
```javascript
{
  "message": "Successfully reset workspace sandbox",
  "ok": true
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Workspace is not a Sandbox" %}
```javascript
{
    "type": "workspace_not_sandbox",
    "message": "can only reset sandbox on sandbox workspaces",
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
seam.workspaces.reset_sandbox()

# None
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.workspaces.resetSandbox()

// { message: 'Successfully reset workspace sandbox', ok: true }
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
seam.workspaces.reset_sandbox

# {"message"=>"Successfully reset workspace sandbox", "ok"=>true}
```
{% endtab %}
{% endtabs %}

### Parameters

This method doesn't take any parameters.

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "message": "Successfully reset workspace sandbox",
  "ok": true
}
```
{% endtab %}
{% endtabs %}
