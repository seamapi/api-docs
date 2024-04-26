---
description: Means by which a user gains access at an entrance
---

# Credentials

The `acs_credential` object represents a [credential](../../../capability-guides/access-systems/managing-credentials.md) that enables a [user](../../../products/access-systems/#what-is-a-user) to access one or more [entrances](../entrances/) within an [Access Control System](../../../products/access-systems/) (ACS). For each `acs_credential` object, you define the access method. You can also specify additional properties, such as a code.

## `acs_credential` Properties

The `acs_credential` object has the following properties:

<table><thead><tr><th width="306">Property</th><th width="114">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_credential_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the credential</td></tr><tr><td><code>acs_user_id</code></td><td>String (UUID)<br><em>Optional</em></td><td>ID of the user to whom the credential belongs</td></tr><tr><td><code>acs_system_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the access control system that contains the credential</td></tr><tr><td><code>parent_acs_credential_id</code></td><td>String (UUID)<br><em>Optional</em></td><td>ID of the parent credential</td></tr><tr><td><code>display_name</code></td><td>String<br><em>Optional</em></td><td>Display name that corresponds to the credential type</td></tr><tr><td><code>code</code></td><td>String<br><em>Optional</em></td><td>Access (PIN) code for the credential</td></tr><tr><td><code>access_method</code></td><td>Enum (string)<br><em>Required</em></td><td>Access method for the credential. Supported values: <code>code</code>, <code>card</code>, <code>mobile_key</code></td></tr><tr><td><code>external_type</code></td><td>Enum (string)<br><em>Optional</em></td><td>Brand-specific terminology for the credential type<br>Supported values: <code>pti_card</code>, <code>brivo_credential</code>, <code>hid_credential</code>, <code>visionline_card</code></td></tr><tr><td><code>external_type_display_name</code></td><td>String<br><em>Optional</em></td><td>Display name that corresponds to the brand-specific terminology for the credential type</td></tr><tr><td><code>created_at</code></td><td>String<br><em>Required</em></td><td>Date and time at which the credential was created</td></tr><tr><td><code>workspace_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the credential</td></tr><tr><td><code>starts_at</code></td><td>String (datetime)<br><em>Optional</em></td><td>Date and time at which the credential validity starts, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format</td></tr><tr><td><code>ends_at</code></td><td>String (datetime)<br><em>Optional</em></td><td>Date and time at which the credential validity ends, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format</td></tr><tr><td><code>is_multi_phone_sync_credential</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether the credential is a <a href="../../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md#what-are-multi-phone-sync-credentials">multi-phone sync credential</a></td></tr><tr><td><code>XXX_metadata</code></td><td>Object<br><em>Optional</em></td><td>ACS <a href="broken-reference">manufacturer</a>-specific metadata for the credential, where <code>XXX</code> is the manufacturer</td></tr></tbody></table>

## `acs_credential` Methods

You can perform the following actions on `acs_credential` objects:

* [Create a credential for a user](create-credential-for-user.md)
* [Assign a credential to a user](assign-a-credential-to-a-user.md)
* [List credentials](list-credentials.md)
* [Get a credential](get-credential.md)
* [Update a credential](update-a-credential.md)
* [Unassign a credential from a user](unassign-a-credential-from-a-user.md)
* [Delete a credential](delete-credential.md)
