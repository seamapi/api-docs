---
description: Users to whom to grant access to specific physical spaces
---

# Users

The `acs_user` object represents a [user](../../../products/access-systems/#what-is-a-user) within an [access control system](../../../products/access-systems/) (ACS).

## `acs_user` Properties

The `acs_user` object has the following properties:

<table><thead><tr><th width="309">Property</th><th width="114">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the user</td></tr><tr><td><code>acs_system_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the access control system that contains the user</td></tr><tr><td><code>workspace_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the user</td></tr><tr><td><code>created_at</code></td><td>String<br><em>Required</em></td><td>Date and time at which the user was created</td></tr><tr><td><code>display_name</code></td><td>String<br><em>Required</em></td><td>Display name for the user</td></tr><tr><td><code>external_type</code></td><td>String<br><em>Optional</em></td><td>Brand-specific terminology for the user type</td></tr><tr><td><code>external_type_display_name</code></td><td>String<br><em>Optional</em></td><td>Display name that corresponds to the brand-specific terminology for the user type</td></tr><tr><td><code>is_suspended</code></td><td>Boolean<br>Required</td><td>Indicates whether the user is currently <a href="../../../products/access-systems/suspending-and-unsuspending-users.md">suspended</a></td></tr><tr><td><code>access_schedule</code></td><td>Object<br><em>Optional</em></td><td><code>starts_at</code> and <code>ends_at</code> dates/times for the user's access</td></tr><tr><td><code>user_identity_id</code></td><td>String (UUID)<br><em>Optional</em></td><td>ID of the user identity associated with the user</td></tr><tr><td><code>user_identity_email_address</code></td><td>String<br><em>Optional</em></td><td>Email address of the user identity associated with the user</td></tr><tr><td><code>user_identity_phone_number</code></td><td>String<br><em>Optional</em></td><td>Phone number of the user identity associated with the user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr><tr><td><code>full_name</code></td><td>String<br><em>Optional</em></td><td>Full name of the user</td></tr><tr><td><code>email_address</code></td><td>String<br><em>Optional</em></td><td>Email address of the user</td></tr><tr><td><code>phone_number</code></td><td>String<br><em>Optional</em></td><td>Phone number of the user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr></tbody></table>

## `acs_user` Methods

You can perform the following actions on `acs_user` objects:

* [Create a user](create-user.md)
* [List users](list-users.md)
* [Get a user](get-user.md)
* [Update a user](update-user.md)
* [Suspend a user](suspend-a-user.md)
* [Unsuspend a user](unsuspend-a-user.md)
* [Delete a user](delete-user.md)
* [Add a user to an access group](add-user-to-access-group.md)
* [Remove a user from an access group](remove-user-from-access-group.md)
