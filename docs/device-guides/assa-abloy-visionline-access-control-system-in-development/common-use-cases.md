# Common Use Cases

When integrating with the Visionline system, ASSA ABLOY requires handling a set of common scenarios to meet their integration requirements. This topic explains some of these key scenarios.

***

## Issue Guest Mobile Credentials

This section describes how to issue guest mobile credentials of various types.&#x20;

### Single Guest in a Single Room

```python
acs_user = seam.acs.user.get(acs_user_id="xxx")

guest_room = seam.acs.entrances.list(
  acs_system_id=hotel_acs_system_id
)[0]

seam.acs.credentials.create(
  acs_user_id=acs_user.acs_user_id
  credential_manager_acs_system_id="xxx"
  is_multi_phone_sync_credential=True,
  access_method="mobile_key",
  starts_at="2023-01-01 10:40:00.000",
  ends_at="2023-01-04 10:40:00.000",
  allowed_acs_entrance_ids=[
    guest_room.acs_entrance_id,
    main_entrance.acs_entrance_id
  ],
  visionline_metadata={
    "cardFormat": "rfid48",
    "cardType": "guest",
    "label": "%ROOMNUM% - %SITENAME%",
    "is_override_key": True
  }
)
```

### Returning Guest to a Single Room

A new mobile key automatically overrides a previously issued mobile credential.

<pre class="language-python"><code class="lang-python"><strong>acs_user = seam.acs.user.get(acs_user_id="xxx")
</strong>
new_guest_room = seam.acs.entrances.list(
  acs_system_id=hotel_acs_system_id
)[0]

seam.acs.credentials.create(
  acs_user_id=acs_user.acs_user_id
  credential_manager_acs_system_id="xxx"
  is_multi_phone_sync_credential=True,
  access_method="mobile_key",
  starts_at="2023-01-01 10:40:00.000",
  ends_at="2023-01-04 10:40:00.000",
  allowed_acs_entrance_ids=[
    new_guest_room.acs_entrance_id,
    main_entrance.acs_entrance_id
  ],
  visionline_metadata={
    "cardFormat": "rfid48",
    "cardType": "guest",
    "label": "%ROOMNUM% - %SITENAME%",
    "is_override_key": True
  }
)
</code></pre>

### Multiple Guests in Multiple Rooms

<pre class="language-python"><code class="lang-python"><strong>guest_room_1 = seam.acs.entrances.list(
</strong>  acs_system_id=hotel_acs_system_id
)[0]

guest_room_2 = seam.acs.entrances.list(
  acs_system_id=hotel_acs_system_id
)[0]

first_acs_user = seam.acs.user.get(acs_user_id="xxx")

# First credential should be an override credential.
first_credential = seam.acs.credentials.create(
  acs_user_id=first_acs_user.acs_user_id
  credential_manager_acs_system_id="xxx"
  is_multi_phone_sync_credential=True,
  access_method="mobile_key",
  starts_at="2023-01-01 10:40:00.000",
  ends_at="2023-01-04 10:40:00.000",
  allowed_acs_entrance_ids=[
    guest_room_1.acs_entrance_id,
    guest_room_2.acs_entrance_id,
    main_entrance.acs_entrance_id
  ],
  visionline_metadata={
    "cardFormat": "rfid48",
    "cardType": "guest",
    "label": "%ROOMNUM% - %SITENAME%",
    "is_override_key": True
  }
)

second_acs_user = seam.acs.user.get(acs_user_id="yyy")

# Subsequent credentials should be joiners to the first credential.
seam.acs.credentials.create(
  acs_user_id=second_acs_user.acs_user_id
  credential_manager_acs_system_id="xxx"
  is_multi_phone_sync_credential=True,
  access_method="mobile_key",
  starts_at="2023-01-01 10:40:00.000",
  ends_at="2023-01-04 10:40:00.000",
  allowed_acs_entrance_ids=[
    guest_room_1.acs_entrance_id,
    guest_room_2.acs_entrance_id,
    main_entrance.acs_entrance_id
  ],
  visionline_metadata={
    "cardFormat": "rfid48",
    "cardType": "guest",
    "label": "%ROOMNUM% - %SITENAME%",
    "joiner_acs_credential_ids": [first_credential.acs_credential_id]
  }
)
</code></pre>

***

## Issue Joiner Credentials

This section describes how to issue joiner credentials of various types.&#x20;

### Join to a Seam Mobile Credential

You can select either the multi-phone sync credential or its child credentials. Make sure to grab the `acs_credential_id` to include in the `joiner_acs_credential_ids` list.

<pre class="language-python"><code class="lang-python"><strong>joiners = [joiner_mobile_parent_sync_credential, joiner_mobile_child_credential]
</strong><strong>
</strong><strong># Create the mobile credential.
</strong>cred = seam.acs.credentials.create({
  acs_user_id: "xxx",
  credential_manager_acs_system_id="xxs"
  is_multi_phone_sync_credential: True,
  access_method = "mobile_key",
  starts_at: "2023-01-01 10:40:00.000",
  ends_at: "2023-01-04 10:40:00.000",
  visionline_metadata: {
    "cardFormat": "rfid48",
    "label": "%ROOMNUM% - %SITENAME%",
    "joiner_acs_credential_ids": [
      joiner.acs_credential_id for joiner in joiners
    ]
  }
})
</code></pre>

### Join to a Plastic Card

```python
joiners = [joiner_plastic_card_credential]

# Create the mobile credential.
cred = seam.acs.credentials.create({
    acs_user_id: "xxx",
    credential_manager_acs_system_id="xxs"
    is_multi_phone_sync_credential: True,
    access_method = "mobile_key",
    starts_at: "2023-01-01 10:40:00.000",
    ends_at: "2023-01-04 10:40:00.000",
    visionline_metadata: {
        "cardFormat": "rfid48",
        "label": "%ROOMNUM% - %SITENAME%",
        "joiner_acs_credential_ids": [
            joiner.acs_credential_id for joiner in joiners
        ]
    }
})
```

***

## Update Guest Mobile Credentials

Instead of updating the guest credential, you can issue a new joiner credential with the updated parameters. Seam automatically replaces the old credential with the new one.

```python
# Creating a new mobile credential automatically revokes 
# the previous one.
seam.acs.credentials.create({
    acs_user_id: "xxx",
    credential_manager_acs_system_id="xxx"
    is_multi_phone_sync_credential: True,
    access_method = "mobile_key",
    starts_at: "2023-01-01 10:40:00.000",
    ends_at: "2023-01-04 10:40:00.000",
    visionline_metadata: {
        "cardFormat": "rfid48",
        "label": "%ROOMNUM% - %SITENAME%",
        "joiners": [
            "xxx", "yyy"
        ]
    }
})
```

***

## Revoke a Mobile Credential

Seam issues a discard command for the Visionline card. If deleting a multi-phone sync credential, Seam discards all of the credentials that were created underneath it.

```javascript
seam.acs.credentials.delete({
    acs_credential_id: "xxx"
})
```

***

## Remove a User Identity

To delete a user identity, you must first delete any [ACS credentials](../../api-clients/access-control-systems/credentials/delete-credential.md) and [enrollment automations](../../api-clients/user-identities/enrollment-automations/) associated with the user identity. You must also deactivate any associated phones. Then, delete the user identity.

```python
import asyncio

async def delete_user_identity(user_identity_id):
    # Delete the client sessions.
    client_sessions = await seam.client_sessions.list(
        user_identity_id=user_identity_id
    )
    
    for session in client_sessions:
        await seam.client_sessions.delete(
            session_id=session['client_session_id']
        )
    
    # Delete the ACS users and credentials.
    acs_users = await seam.acs.users.list(
        user_identity_id=user_identity_id
    )
    
    for acs_user in acs_users:
        credentials = await seam.acs.credentials.list(
            acs_user_id=acs_user['acs_user_id']
        )
    
        for credential in credentials:
            await seam.acs.credentials.delete(
                acs_credential_id=credential['acs_credential_id']
            )
        
        await asyncio.gather(*[
            wait_for_acs_credential_deleted(credential) 
            for credential in credentials
        ])
        
        await seam.acs.users.delete(
            acs_user_id=acs_user['acs_user_id']
        )
    
    await asyncio.gather(*[
        wait_for_acs_user_deleted(acs_user) for acs_user in acs_users
    ])
    
    # Delete the enrollment automations.
    enrollment_automations = await seam.user_identities.enrollment_automations.list(
        user_identity_id=user_identity_id
    )
    
    for automation in enrollment_automations:
        await seam.user_identities.enrollment_automations.delete(
            enrollment_automation_id=automation['enrollment_automation_id']
        )
    
    await asyncio.gather(*[
        wait_for_enrollment_automation_deleted(automation) 
        for automation in enrollment_automations
    ])
    
    # Delete the phones.
    phones = await seam.phones.list(
        owner_user_identity_id=user_identity_id
    )
    
    for phone in phones:
        await seam.phones.deactivate(
            device_id=phone['device_id']
        )

    await asyncio.gather(*[
        wait_for_phone_deactivated(phone) for phone in phones
    ])
    
    # Finally, delete the user identity.
    await seam.user_identities.delete(
        user_identity_id=user_identity_id
    )

# Helper functions for waiting on deletion events
async def wait_for_event(event_type, event_filter):
    while True:
        events = await seam.events.list(event_type=event_type)
        if any(event_filter(event) for event in events):
            break

async def wait_for_acs_user_deleted(acs_user):
    await wait_for_event(
        'acs_user.deleted',
        lambda event: 'acs_user_id' in event and 
                      event.acs_user_id == acs_user.acs_user_id
    )

async def wait_for_enrollment_automation_deleted(enrollment_automation):
    await wait_for_event(
        'enrollment_automation.deleted',
        lambda event: 'enrollment_automation_id' in event and 
                      event.enrollment_automation_id == enrollment_automation.enrollment_automation_id
    )

async def wait_for_acs_credential_deleted(acs_credential):
    await wait_for_event(
        'acs_credential.deleted',
        lambda event: 'acs_credential_id' in event and 
                      event.acs_credential_id == acs_credential.acs_credential_id
    )

await delete_user_identity("xxx")

```
