---
description: >-
  Groups that define the entrances to which a set of users has access, as well
  as the access schedule for these entrances and users
---

# Access Groups

The `acs_access_group` object represents an [access group](../../../products/access-systems/assigning-users-to-access-groups.md) within an [access control system](../../../products/access-systems/).

## `acs_access_group` Properties

The `acs_access_group` object has the following properties:

<table><thead><tr><th width="293">Property</th><th width="114">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_access_group_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the access group</td></tr><tr><td><code>acs_system_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the access control system that contains the access group</td></tr><tr><td><code>workspace_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the access group</td></tr><tr><td><code>name</code></td><td>String<br><em>Required</em></td><td>Name of the access group</td></tr><tr><td><code>external_type</code></td><td>String<br><em>Required</em></td><td>Brand-specific terminology for the access group type</td></tr><tr><td><code>external_type_display_name</code></td><td>String<br><em>Required</em></td><td>Display name that corresponds to the brand-specific terminology for the access group type</td></tr><tr><td><code>created_at</code></td><td>String<br><em>Required</em></td><td>Date and time at which the access group was created</td></tr></tbody></table>

## `acs_access_group` Methods

You can perform the following actions on `acs_access_group` objects:

* [List access groups](list-access-groups.md)
* [Get an access group](get-access-group.md)
* [Add a user to an access group](add-user-to-access-group.md)
* [Remove a user from an access group](remove-user-from-access-group.md)
* [List users in an access group](list-users-in-access-group.md)
