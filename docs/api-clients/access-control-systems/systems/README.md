<header>
  <h1>acs_system</h1>
</header>

<hr>

<header>
  <h3>acs_system_id</h3>
</header>
<div>
  <p>ID of the `acs_system`.</p>
  <div>
    <span>Format:</span>
    <span>string</span>
  </div>
</div>

<hr>
<header>
  <h3>can_add_acs_users_to_acs_access_groups</h3>
</header>
<div>
  <p>Indicates whether the `acs_system` supports [adding users to access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups#add-an-acs-user-to-an-access-group.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).</p>
  <div>
    <span>Format:</span>
    <span>boolean</span>
  </div>
</div>

<hr>
<header>
  <h3>can_automate_enrollment</h3>
</header>
<div>
  <p>Indicates whether it is possible to [launch enrollment automations](../../../capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut.md) for the `acs_system`.</p>
  <div>
    <span>Format:</span>
    <span>boolean</span>
  </div>
</div>

<hr>
<header>
  <h3>can_create_acs_access_groups</h3>
</header>
<div>
  <p>Indicates whether the `acs_system` supports creating [access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).</p>
  <div>
    <span>Format:</span>
    <span>boolean</span>
  </div>
</div>

<hr>
<header>
  <h3>can_remove_acs_users_from_acs_access_groups</h3>
</header>
<div>
  <p>Indicates whether the `acs_system` supports [removing users from access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups#remove-an-acs-user-from-an-access-group.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).</p>
  <div>
    <span>Format:</span>
    <span>boolean</span>
  </div>
</div>

<hr>
<header>
  <h3>connected_account_ids</h3>
</header>
<div>
  <p>IDs of the [connected accounts](../../../core-concepts/connected-accounts.md) associated with the `acs_system`.</p>
  <div>
    <span>Format:</span>
    <span>list</span>
  </div>
</div>

<hr>
<header>
  <h3>created_at</h3>
</header>
<div>
  <p>Date and time at which the `acs_system` was created.</p>
  <div>
    <span>Format:</span>
    <span>string</span>
  </div>
</div>

<hr>
<header>
  <h3>errors</h3>
</header>
<div>
  <p>Errors associated with the `acs_system`.</p>
  <div>
    <span>Format:</span>
    <span>list</span>
  </div>
</div>

<hr>
<header>
  <h3>external_type</h3>
</header>
<div>
  <p>Brand-specific terminology for the `acs_system` type.</p>
  <div>
    <span>Format:</span>
    <span>enum</span>
  </div>
</div>

<hr>
<header>
  <h3>external_type_display_name</h3>
</header>
<div>
  <p>Display name that corresponds to the brand-specific terminology for the `acs_system` type.</p>
  <div>
    <span>Format:</span>
    <span>string</span>
  </div>
</div>

<hr>
<header>
  <h3>image_alt_text</h3>
</header>
<div>
  <p>Alternative text for the `acs_system` image.</p>
  <div>
    <span>Format:</span>
    <span>string</span>
  </div>
</div>

<hr>
<header>
  <h3>image_url</h3>
</header>
<div>
  <p>URL for the image that represents the `acs_system`.</p>
  <div>
    <span>Format:</span>
    <span>string</span>
  </div>
</div>

<hr>
<header>
  <h3>name</h3>
</header>
<div>
  <p>Name of the `acs_system`.</p>
  <div>
    <span>Format:</span>
    <span>string</span>
  </div>
</div>

<hr>
<header>
  <h3>system_type</h3>
</header>
<div>
  <p></p>
  <div>
    <span>Format:</span>
    <span>enum</span>
  </div>
  <p>This property is deprecated.</p>
</div>

<hr>
<header>
  <h3>system_type_display_name</h3>
</header>
<div>
  <p></p>
  <div>
    <span>Format:</span>
    <span>string</span>
  </div>
  <p>This property is deprecated.</p>
</div>

<hr>
<header>
  <h3>visionline_metadata</h3>
</header>
<div>
  <p></p>
  <div>
    <span>Format:</span>
    <span>record</span>
  </div>
</div>

<hr>
<header>
  <h3>warnings</h3>
</header>
<div>
  <p></p>
  <div>
    <span>Format:</span>
    <span>list</span>
  </div>
</div>

<hr>
<header>
  <h3>workspace_id</h3>
</header>
<div>
  <p>ID of the [workspace](../../../core-concepts/workspaces.md) that contains the `acs_system`.</p>
  <div>
    <span>Format:</span>
    <span>string</span>
  </div>
</div>

<hr>
