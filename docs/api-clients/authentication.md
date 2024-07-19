---
description: Learn how to authenticate to the Seam API.
---

# Authentication

Export your API key as an environment variable. Seam client libraries automatically pick up this exported key. For example:

```
$ export SEAM_API_KEY=seam_test2bMS_94SrGUXuNR2JmJkjtvBQDg5c
```

Next, run the following code to confirm that you are correctly authenticated:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
from seam import Seam

seam = Seam()  # Seam automatically uses your exported SEAM_API_KEY.

workspace = seam.workspaces.get()
pprint(workspace)
```

**Output:**

```
Workspace(
  workspace_id='00000000-0000-0000-0000-000000000000',
  name='Sandbox',
  company_name='Acme',
  connect_partner_name='Acme',
  is_sandbox=True
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/workspaces/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Output:**

```json
{
  "workspace": {
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "name": "Sandbox",
    "company_name": "Acme",
    "connect_partner_name": "Acme",
    "is_sandbox": true
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
import { Seam } from "seam";

const seam = new Seam(); // Seam automatically uses your exported SEAM_API_KEY.

const checkAuth = async () => {
  const workspace = await seam.workspaces.get();
  console.log(workspace);
}

checkAuth();
```

**Output:**

```json
{
  workspace_id: '00000000-0000-0000-0000-000000000000',
  name: 'Sandbox',
  company_name: 'Acme',
  connect_partner_name: 'Acme',
  is_sandbox": true
} 
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
require "seamapi"

seam = Seam::Client.new() # Seam automatically uses your exported SEAM_API_KEY.

workspace = seam.workspaces.get()

puts workspace.inspect
```

**Output:**

```
<
  Seam::Workspace:0x0070328                                          
    workspace_id="00000000-0000-0000-0000-000000000000"
    name="Sandbox"
    company_name="Acme"      
    connect_partner_name="Acme"
    is_sandbox=true
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
<?php
require 'vendor/autoload.php';

$seam = new Seam\SeamClient(); // Seam automatically uses your exported SEAM_API_KEY.

$workspace = $seam->workspaces->get();

echo json_encode($workspace, JSON_PRETTY_PRINT);
```

**Output:**

```json
{
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "name": "Sandbox",
  "company_name": "Acme",
  "connect_partner_name": "Acme",
  "is_sandbox": true
}
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
using Seam.Client;

var seam = new SeamClient(apiToken: SEAM_API_KEY);

var workspace = seam.Workspaces.Get();

Console.WriteLine(workspace);
```

**Output:**

```json
{
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "name": "Sandbox",
  "company_name": "Acme",
  "connect_partner_name": "Acme",
  "is_sandbox": true
}
```
{% endtab %}

{% tab title="Java" %}
**Code:**

```java
import java.io.Console;
import java.util.*;
import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seam.api.Seam;
import com.seam.api.core.ObjectMappers;
import com.seam.api.types.Workspace;
import com.seam.api.resources.workspaces.requests.WorkspacesGetRequest;

public class Main {

  public static void main(String[] args) {

    Seam seam = Seam.builder()
      .apiKey(SEAM_API_KEY)
      .build();

    Workspace workspace = seam.workspaces().get();

    System.out.println(workspace);

  }
}
```

**Output:**

```json
{
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "name": "Sandbox",
  "company_name": "Acme",
  "connect_partner_name": "Acme",
  "is_sandbox": true
}
```
{% endtab %}

{% tab title="Go" %}
**Code:**

```go
package main

import (
  "context"
  "fmt"
  "os"

  api "github.com/seamapi/go"
  seam "github.com/seamapi/go/client"
)

func main() {
  if err := run(); err != nil {
    _, _ = fmt.Fprintln(os.Stderr, err.Error())
    os.Exit(1)
  }
}

func run() error {
  client := seam.NewClient(
    seam.WithApiKey(SEAM_API_KEY),
  )

  workspace, err := client.Workspaces.Get(
    context.Background(), &api.WorkspacesGetRequest{},
  )
  
  if err != nil {
    return err
  }
  
  fmt.Println(workspace)

  return nil		
}
```

**Output:**

```json
{
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "name": "Sandbox",
  "company_name": "Acme",
  "connect_partner_name": "Acme",
  "is_sandbox": true
}
```
{% endtab %}
{% endtabs %}
