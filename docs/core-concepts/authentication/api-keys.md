---
description: >-
  Create an API key for authorization that enables you to control devices
  connected to a specific Seam workspace.
---

# API Keys

You [create an API key](api-keys.md#create-an-api-key) in your [sandbox workspace](../workspaces/#sandbox-workspaces) or [production workspace](../workspaces/#production-workspaces) to authorize your use of the Seam API. When using the Seam HTTP API or any of the Seam SDKs, you must provide this API key to issue commands that enable you to control the devices in the associated workspace. It is useful to [export your API key](api-keys.md#export-an-api-key) as an environment variable. You can also [test your API key](api-keys.md#test-an-api-key).

{% hint style="warning" %}
Never use an API key in a web browser or expose it to your users.
{% endhint %}

## Create an API Key

Each API key is associated with a specific workspace. For example, if you have a sandbox workspace and a production workspace, you must create and use a different API key for each of these two workspaces.

{% hint style="info" %}
If you need to access multiple workspaces, create a [Personal Access Token](personal-access-tokens.md) to use instead of a workspace-specific API key.
{% endhint %}

1. In the upper-right corner of the [Seam Console](https://console.seam.co/), click the down arrow to display the workspace list.
2. Click the workspace for which you want to create an API key.
3. In the left navigation pane, click **API Keys**.
4. In the upper-right corner of the **API Keys** page, click **+ Add API Key**.
5. In the **Add API Key** dialog, type a name for your new API key and then click **Create API Key**.
6. Copy the newly-created API key and store it for future use.

{% hint style="info" %}
Production API keys do not include `test`, while API keys for sandbox workspaces do include `test`. In addition, if you accidentally commit your API key to a GitHub repo, the `seam_` prefix is detected, and you are notified.
{% endhint %}

{% @supademo/embed demoId="vLRzYM2Nwoi4j_cH9WCNQ" url="https://app.supademo.com/demo/vLRzYM2Nwoi4j_cH9WCNQ" %}

## Export an API Key

Once you have created an API key, it is useful to export this key as an environment variable. Then, all installed Seam SDKs automatically use this exported API key.

Open a terminal window and enter the following command to export your API key:

```sh
$ export SEAM_API_KEY=my_seam_api_key
```

Where `my_seam_api_key` is your API key.

## Test an API Key

Test an API key by [exporting the key](api-keys.md#export-an-api-key) as an environment variable and then running the code in this section. If the API key is valid, the response displays the corresponding workspace information.

First, export the API key, as follows:

```sh
$ export SEAM_API_KEY=my_seam_api_key
```

Where `my_seam_api_key` is your API key.

Then, run the following code to test the API key:

{% tabs %}
{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

// Seam automatically uses the SEAM_API_KEY environment variable if you
// do not provide an apiKey to `new Seam()`.
const seam = new Seam();

const { workspace } = await seam.workspaces.get();
console.log(workspace);

/*
{
  workspace_id: 'ab804f5a-7dd2-42c8-8d09-0beff4f795eb',
  name: 'Sandbox',
  connect_partner_name: 'Acme',
  is_sandbox: true
}
*/
```
{% endtab %}

{% tab title="Python" %}
```python
from seam import Seam

# Seam automatically uses the SEAM_API_KEY environment variable if you
# do not provide an api_key to `Seam()`.
seam = Seam()

workspace = seam.workspaces.get()
print(workspace)
# Workspace(workspace_id='1d2826eb-4a26-4f46-bddb-ef5898baa859', name="Anna's Sandbox", is_sandbox=True)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new()

workspace = seam.workspaces.get

puts workspace
# <Seam::Workspace:0x00438
#   workspace_id="1d2826eb-4a26-4f46-bddb-ef5898baa859"
#   name="Anna's Sandbox"
#   connect_partner_name="Anna Smith"
#   is_sandbox=true>
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient();

$workspace = $seam->workspaces->get();
echo json_encode($workspace, JSON_PRETTY_PRINT);

# {
#     "workspace_id": "1d2826eb-4a26-4f46-bddb-ef5898baa859",
#     "name": "Anna's Sandbox",
#     "is_sandbox": true,
#     "connect_partner_name": null
# }
```
{% endtab %}
{% endtabs %}
