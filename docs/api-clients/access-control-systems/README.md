---
description: Systems for managing and monitoring access to physical spaces
---

# Access Control Systems

In the Seam platform and API, [Access Control Systems](../../products/access-systems/) (ACSs) consist of the following components:

<table><thead><tr><th width="150.33333333333331">Component</th><th width="203">API Object</th><th>Description</th></tr></thead><tbody><tr><td><a href="../../products/access-systems/#what-is-an-access-system">System</a></td><td><a href="systems/"><code>acs_system</code></a></td><td>An ACS itself. You create users, access groups, and credentials in the context of an <code>acs_system</code>.</td></tr><tr><td><a href="../../products/access-systems/#what-is-a-user">User</a></td><td><a href="users/"><code>acs_user</code></a></td><td>A user to whom to grant access to specific physical spaces.</td></tr><tr><td><a href="../../products/access-systems/#access-system-components">Entrance</a></td><td><a href="entrances/"><code>acs_entrance</code></a></td><td>A secured door, gate, service, or other method of entry.</td></tr><tr><td><a href="../../products/access-systems/#what-is-an-access-group">Access group</a></td><td><a href="access-groups/"><code>acs_access_group</code></a></td><td>A group that defines the entrances to which a set of users has access, as well as the access schedule for these entrances and users. </td></tr><tr><td><a href="../../capability-guides/access-systems/managing-credentials.md">Credential</a></td><td><a href="credentials/"><code>acs_credential</code></a></td><td>A means by which a user gains access at an entrance, such as access codes, key cards, and mobile passes.</td></tr></tbody></table>

