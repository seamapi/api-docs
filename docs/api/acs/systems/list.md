# List ACS Systems

Returns a list of all [access control systems](../../../capability-guides/access-systems.md).

To filter the list of returned access control systems by a specific connected account ID, include the 
`connected_account_id` in the request body. If you omit the `connected_account_id` parameter, the 
response includes all access control systems connected to your workspace.


### Request Parameters

**connected_account_id**
*Type:* ``
*Required:* No

ID of the connected account by which to filter the list of returned access control systems.

### Response Properties

**acs_system_id**
ID of the `acs_system`.
**can_add_acs_users_to_acs_access_groups**
Indicates whether the `acs_system` supports [adding users to access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups#add-an-acs-user-to-an-access-group.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).
**can_automate_enrollment**
Indicates whether it is possible to [launch enrollment automations](../../../capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut.md) for the `acs_system`.
**can_create_acs_access_groups**
Indicates whether the `acs_system` supports creating [access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).
**can_remove_acs_users_from_acs_access_groups**
Indicates whether the `acs_system` supports [removing users from access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups#remove-an-acs-user-from-an-access-group.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).
**connected_account_ids**
IDs of the [connected accounts](../../../core-concepts/connected-accounts.md) associated with the `acs_system`.
**created_at**
Date and time at which the `acs_system` was created.
**errors**
Errors associated with the `acs_system`.
**external_type**
Brand-specific terminology for the `acs_system` type.
**external_type_display_name**
Display name that corresponds to the brand-specific terminology for the `acs_system` type.
**image_alt_text**
Alternative text for the `acs_system` image.
**image_url**
URL for the image that represents the `acs_system`.
**name**
Name of the `acs_system`.
**system_type**

**system_type_display_name**

**visionline_metadata**

**warnings**

**workspace_id**
ID of the [workspace](../../../core-concepts/workspaces.md) that contains the `acs_system`.

## Samples

{% tabs %}
    {% tab title="JavaScript" %}
  ### Request
  ```javascript
  await seam.acs.systems.list({"connected_account_id":"8d7e0b3a-b889-49a7-9164-4b71a0506a33"})
  ```

  ### Response
  ```javascript
  [{"acs_system_id":"8d7e0b3a-b889-49a7-9164-4b71a0506a33"}]
  ```
    {% endtab %}
    {% tab title="Python" %}
  ### Request
  ```python
  seam.acs.systems.list(connected_account_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33")
  ```

  ### Response
  ```python
  [AcsSystem(acs_system_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33")]
  ```
    {% endtab %}
    {% tab title="Ruby" %}
  ### Request
  ```ruby
  seam.acs.systems.list(connected_account_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33")
  ```

  ### Response
  ```ruby
  [<Seam::AcsSystems:0x00000
acs_system_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33">]
  ```
    {% endtab %}
    {% tab title="PHP" %}
  ### Request
  ```php
  $seam->acs->systems->list(connected_account_id:"8d7e0b3a-b889-49a7-9164-4b71a0506a33")
  ```

  ### Response
  ```php
  [{"acs_system_id":"8d7e0b3a-b889-49a7-9164-4b71a0506a33"}]
  ```
    {% endtab %}
{% endtabs %}
