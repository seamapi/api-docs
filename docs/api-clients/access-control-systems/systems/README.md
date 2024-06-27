---
description: Systems for managing and monitoring access to physical spaces
---

# Systems

The `acs_system` object represents an [Access Control System](../../../products/access-systems/) (ACS).

## `acs_system` Properties

The `acs_system` object has the following properties:

<table><thead><tr><th width="306">Property</th><th width="114">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_system_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the access control system</td></tr><tr><td><code>external_type</code></td><td>Enum (string)<br><em>Required</em></td><td>Brand-specific terminology for the access control system type</td></tr><tr><td><code>external_type_display_name</code></td><td>String<br><em>Optional</em></td><td>Display name that corresponds to the brand-specific terminology for the access control system type</td></tr><tr><td><code>name</code></td><td>String<br><em>Required</em></td><td>Name of the access control system</td></tr><tr><td><code>created_at</code></td><td>String<br><em>Required</em></td><td>Date and time at which the access control system was created</td></tr><tr><td><code>workspace_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the access control system</td></tr><tr><td><code>connected_account_ids</code></td><td>Array of strings (UUIDs)<br><em>Required</em></td><td>Array of <a href="../../connected-accounts/">connected account</a> IDs associated with the access control system</td></tr><tr><td><code>image_url</code></td><td>String<br><em>Required</em></td><td>URL for the image that represents the access control system</td></tr><tr><td><code>image_alt_text</code></td><td>String<br><em>Required</em></td><td>Alternative text for the access control system image</td></tr></tbody></table>

## `acs_system` Methods

You can perform the following actions on `acs_system` objects:

* [List systems](list-systems.md)
* [Get a system](get-system.md)
* [List compatible credential manager ACS systems](list-compatible-credential-manager-acs-systems.md)
