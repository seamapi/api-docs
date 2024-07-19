---
description: Learn how to configure Visionline mobile credentials.
---

# Configuring Visionline Mobile Credentials

In the ASSA ABLOY Visionline Access Management System, the locks are standalone and battery-powered. All access permissions and scheduling details are contained within the key cards and mobile credentials, characterizing these systems as "data-on-card" systems. This guide describes how to issue credentials on the Visionline system.

{% hint style="info" %}
Seam currently only supports issuing guest mobile credentials. We will extend support to plastic card and staff credentials in the future.
{% endhint %}

***

## Visionline Mobile Credential Restrictions

When creating a Seam mobile key for a Visionline ACS, you must set `is_multi_phone_sync_credential` to `true`.

***

## Granting Users Access to Entrances

Your ACS type determines the method that you use to grant users access to entrances. When managing mobile credentials for a Visionline ACS, grant access by creating credentials. For details, see [Managing Credentials](../../capability-guides/access-systems/managing-credentials.md).

***

## Guest Mobile Credential Properties

When issuing a guest mobile credential, you can use the following relevant properties:

<table><thead><tr><th width="260">Property</th><th width="176">Type</th><th width="290">Description</th></tr></thead><tbody><tr><td><code>cardFormat</code> in <code>visionline_metadata</code></td><td><code>Enum</code><br><em>Required</em></td><td><p><code>rfid48</code> | <code>TLCode</code></p><p>For guest cards, generally it’s <code>rfid48</code>, a low-capacity card. It can store up to 33 consecutive guest rooms, 28 common rooms, and 7 additional rooms. The exception is a guest advanced card, which needs a higher capacity format.</p><p><code>TLCode</code> is a high capacity RFID card (for card types needing more than 48 bytes). These are used for staff cards and guest advanced cards.</p></td></tr><tr><td><code>is_override_key</code> in <code>visionline_metadata</code></td><td><code>Boolean</code><br><em>Optional</em></td><td>Indicates whether this credential invalidates any previously-issued credentials for overlapping entrances.</td></tr><tr><td><code>allowed_acs_entrance_ids</code></td><td><code>String[]</code><br><em>Optional</em></td><td>List of ACS entrance IDs to which you want to grant the specified ACS user access.</td></tr><tr><td><code>joiners</code> in <code>visionline_metadata</code></td><td><code>String[]</code><br><em>Optional</em></td><td>List of credential IDs with which the current credential shares entrance access. When <code>override_previous_credentials</code> is <code>false</code>, <code>jointCredentialIDs</code> becomes a mandatory field.</td></tr><tr><td><code>label</code> in <code>visionline_metadata</code></td><td><code>String</code><br><em>Optional</em></td><td>"Label" field data for mobile credentials. This field may contain plain text, as well as predefined placeholders. The placeholders are surrounded by percentage signs (<code>%</code>).</td></tr><tr><td><code>starts_at</code></td><td><a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format<br><em>Optional</em></td><td>Start date and time stamp for credential activation.</td></tr><tr><td><code>ends_at</code></td><td><a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format<br>Required</td><td>End date and time stamp for credential expiration.</td></tr></tbody></table>

For more information about Visionline-specific credential properties, see [Visionline Credential Metadata](visionline-credential-metadata.md).

### Label Placeholders

The `label` field provides "label" field data for mobile credentials. This field may contain plain text, as well as predefined placeholders. The placeholders are surrounded by percentage signs (`%`). Visionline replaces these placeholders with the actual values before issuing mobile keys. The final text is truncated to 32 characters. The valid placeholders are as follows:

* `%ROOMNUM%`: Replaced with main guest room number or name.
* `%ROOMLIST%`: Replaced with comma-separated list of guest rooms.
* `%ROOMRANGE%`: Replaced with hyphen-separated room range. Alternately, if some rooms do not fit into any range, then they are added as a comma-separated list.
* `%SITENAME%`: Name of the property.
* `%CARDNUM%`: Credential ID.
* `%UUID%`: BLE UUID.
* `%USERID%`: Value passed in the UI field.

***

### Issue the First Credential for a Reservation

When issuing guest credentials, hotels need to guarantee that all previous access to guest room entrances is revoked. You accomplish this by issuing an override credential, which overrides any existing credentials that previously granted access to the same guest room entrances.

{% tabs %}
{% tab title="Python" %}
```python
# Set up the mobile user account.
user_identity = seam.user_identities.create(
    user_identity_key="xxx"
)

# Turn on the enrollment automation for this user identity
# and credential manager.
seam.enrollment_automation.launch(
    credential_manager_acs_system_id=assa_credential_services.acs_system_id,
    user_identity_id=guest_user_identity.user_identity_id,
    create_credential_manager_user=True
)

# Associate the user identity with the ACS user.
acs_user = seam.acs.users.get(
    email="jane@example.com"
)
seam.user_identities.add_acs_user(
    user_identity=user_identity.user_identity_id,
    acs_user_id=acs_user.acs_user_id
)

# Gather entrances to which the credential should have access.
room_entrance = seam.acs.entrances.get(name=f"Room {room_number}")
common_door = seam.acs.entrances.get(name=f"Main Entrance")

# Check whether the user identity has an active endpoint on their phones.
# To learn how to verify this condition, see "Check if a user identity has 
# a phone that is set up for a credential manager."
if has_active_endpoint(user_identity.user_identity_id):
  # Create the override mobile credential.
  cred = seam.acs.credentials.create(
    acs_user_id="xxx",
    credential_manager_acs_system_id="xx"
    is_multi_phone_sync_credential=True,
    access_method="mobile_key",
    starts_at="2023-01-01 10:40:00.000",
    ends_at="2023-01-04 10:40:00.000"
    allowed_acs_entrance_ids=[
      room_entrance.acs_entrance_id,
      common_door.acs_entrance_id
    ],
    visionline_metadata={
      "cardFormat": "rfid48",
      "label": "%ROOMNUM% - %SITENAME%",
      "is_override_key": True
    }
)
```
{% endtab %}
{% endtabs %}

***

### Issue Subsequent Credentials for a Reservation

For reservations involving multiple parties, hotels often need to provide credentials to additional guests. This is facilitated through the issuance of a "joiner credential." This type of credential allows shared access with any existing credentials that already grant entry to the same guest room entrances. To issue a joiner credential, you must specify the credentials with which to associate the new joiner credential. For instructions on how to retrieve credentials that have overlapping access, see [List all valid credentials for a set of guest entrances to add as joiners](credential-types.md#list-all-valid-credentials-for-a-set-of-guest-entrances-to-add-as-joiners).

{% tabs %}
{% tab title="Python" %}
```python
# Set up the mobile user account.
user_identity = seam.user_identities.create(
    user_identity_key="xxx"
)

# Turn on the enrollment automation for this user identity
# and credential manager.
seam.enrollment_automation.launch(
  credential_manager_acs_system_id=assa_credential_services.acs_system_id,
  user_identity_id=guest_user_identity.user_identity_id,
  create_credential_manager_user: true
)

# Associate the user identity with the ACS user.
acs_user = seam.acs.users.get(
  email="jane@example.com"
)
seam.user_identities.add_acs_user(
  user_identity=user_identity.user_identity_id,
  acs_user_id=acs_user.acs_user_id
)

# Gather entrances to which the credential should have access.
room_entrance = seam.acs.entrances.get(name=f"Room {room_number}")
common_door = seam.acs.entrances.get(name=f"Main Entrance")

# Retrieve existing valid credentials for guest doors to add as joiners.
# Be sure to check that these credentials correspond with the correct
# reservation.
joiner1 = seam.acs.credentials.get(id="xxx")
joiner2 = seam.acs.credentials.get(id="yyy")
joiners = [joiner1, joiner2]

# Create the mobile credential.
cred = seam.acs.credentials.create({
  acs_user_id: "xxx",
  credential_manager_acs_system_id="xxs"
  is_multi_phone_sync_credential: True,
  access_method = "mobile_key",
  starts_at: "2023-01-01 10:40:00.000",
  ends_at: "2023-01-04 10:40:00.000",
  allowed_acs_entrance_ids: [
    common_door.acs_entrance_id,
    room_entrance.acs_entrance_id
  ],
  visionline_metadata: {
    "cardFormat": "rfid48",
    "label": "%ROOMNUM% - %SITENAME%",
    "joiner_acs_credential_ids": [
      joiner['acs_credential_id'] for joiner in joiners
    ]
  }
})
```
{% endtab %}
{% endtabs %}

***

## Retrieve Guest and Common Entrances

To differentiate between guest and common entrances, you can look at the `door_category` attribute within the `visionline_metadata` property for an entrance.

### Fetch Guest Entrances

To fetch only guest entrances, filter entrances to include only those with a `visionline_metadata.properties.door_category` of `guest`.

{% tabs %}
{% tab title="Python" %}
```python
all_entrances = seam.acs.entrances.list(
  acs_system_id=acs_system.acs_system_id
)

# Filter for entrances with the guest entrance category type.
guest_entrance_category_types = ["guest"]

def filter_entrances_by_profile_type(entrance_list, category_types):
    guest_entrances = []
    for entrance in entrance_list:
        if entrance["visionline_metadata"]["door_category"] in category_types:
            guest_entrances.append(entrance)
    return guest_entrances

guest_entrances = filter_entrances_by_profile_type(
    all_entrances,
    guest_entrance_category_types
)
```
{% endtab %}
{% endtabs %}

### Fetch Common Entrances

To fetch only common entrances, filter entrances to include only those with a `visionline_metadata.properties.door_category` of `common` or `common (PMS)`.

{% tabs %}
{% tab title="Python" %}
```python
all_entrances = seam.acs.entrances.list(
  acs_system_id=acs_system.acs_system_id
)

# Filter for entrances with the common entrance category types.
common_entrance_category_types = ["common", "common (PMS)"]

def filter_entrances_by_profile_type(entrance_list, category_types):
    common_entrances = []
    for entrance in entrance_list:
        if entrance["visionline_metadata"]["door_category"] in category_types:
            common_entrances.append(entrance)
    return common_entrances

common_entrances = filter_entrances_by_profile_type(
    all_entrances,
    common_entrance_category_types
)
```
{% endtab %}
{% endtabs %}

***

## List All Valid Credentials for a Set of Guest Entrances to Add as Joiners

Use the `seam.acs.entrances.list_credentials_with_access` endpoint to fetch a list of credentials. Provide the list of `acs_entrance_id`s for the guest entrances, and set `include_if` to `["visionline_metadata.is_valid"]` to filter for valid credentials.

{% tabs %}
{% tab title="Python" %}
```python
# Define the list of guest entrances to check.
guest_entrance_ids = [
    room_101.acs_entrance_id,
    room_102.acs_entrance_id,
]

# Initialize a list to hold credentials for each entrance.
all_credentials = []

# Retrieve all valid credentials for each entrance individually.
for entrance_id in guest_entrance_ids:
    credentials = seam.acs.entrances.list_credentials_with_access(
        acs_entrance_id=entrance_id,
        include_if=["visionline_metadata.is_valid"]
    )
    all_credentials.append({
        "entrance_id": entrance_id,
        "credentials": credentials
    })
```
{% endtab %}
{% endtabs %}

***

## Check if a User Identity Has a Phone That Is Set up for a Credential Manager

To issue an override credential to an app user, the app user must first set up their phone. If you want to disable the "override" option where it's not available, you can use the following check before allowing a user to configure an override credential:

{% tabs %}
{% tab title="Python" %}
```
def has_active_endpoint(user_identity_id):
    phones = seam.phones.list({
        owner_user_identity_id=user_identity_id
    })
    for phone in phones:
        metadata = phone.get('assa_abloy_credential_service_metadata', {})
        if metadata.get('has_active_endpoint'):
            return True
    return False

# Check if any phone has an active endpoint.
user_identity = seam.user_identities.get(phone_number="1234567890")
active_endpoint_exists = has_active_endpoint(user_identity.user_identity_id)
```
{% endtab %}
{% endtabs %}

#### Example of Disabling the Override Option When it Is Not Available

<figure><img src="../../.gitbook/assets/Join only.png" alt="In the Seam Console, we disable the Override option when a user identity has not set up their phone to receive Visionline credentials." width="421"><figcaption><p>In the Seam Console, we disable the Override option when a user identity has not set up their phone to receive Visionline credentials.</p></figcaption></figure>
