# Authentication

Export your API key as an environment variable. Seam client libs will automatically pick it up. For example:

```
$ export SEAM_API_KEY=seam_test2ZTo_0mEYQW2TvNDCxG5Atpj85Ffw
```

Next, run the code below to check you are correctly authenticated:

{% tabs %}
{% tab title="Javascript" %}
```javascript
// Replace with
// const Seam = require("seam")
// if not using ES6 modules and/or TypeScript.
import { Seam } from "seam";

// Seam will automatically use the SEAM_API_KEY environment
// variable if you don't provide an apiKey to `new Seam()`
const seam = new Seam();

const checkAuth = async () => {
  const workspace = await seam.workspaces.get();
  console.log(workspace);
}

checkAuth();

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

# Seam will automatically use the SEAM_API_KEY environment variable if you
# don't provide an api_key to `Seam()`
seam = Seam()

workspace = seam.workspaces.get()
print(workspace)
# Workspace(workspace_id='ab804f5a-7dd2-42c8-8d09-0beff4f795eb', 
#   name='Sanbox', is_sandbox=True)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new(api_key: "MY_API_KEY")

workspace = seam.workspaces.get

puts workspace
# <Seam::Workspace:0x0070328                                          
#   workspace_id="123e4567-e89b-12d3-a456-426614174000"               
#   name="MySandbox"                                           
#   connect_partner_name="Partner Sandbox"                           
#   is_sandbox=true> 
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$workspace = $seam->workspaces->get();

echo json_encode($workspace);
/*
{
  workspace_id: 'ab804f5a-7dd2-42c8-8d09-0beff4f795eb',
  name: 'Sanbox',
  connect_partner_name: 'Acme',
  is_sandbox: true
}
*/
```
{% endtab %}
{% endtabs %}
