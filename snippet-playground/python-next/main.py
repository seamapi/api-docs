#!/usr/bin/env python

import random
from seam import Seam
from pprint import pprint

seam = Seam(
#     # api_url=f"https://pws{random.randint(0,1e6)}{random.randint(0,1e6)}.fakeseamconnect.seam.vc",
#     # api_key="seam_apikey1_token"
    # api_key="seam_test8yup_77ut771wVzFPcfhce9ti5Ccq"
    # api_key="seam_testjMPq_3wh4WmfXuMRMZbAfpCmvUkUi"
) # Seam automatically uses your exported SEAM_API_KEY.

# pprint(seam.devices.list())

# pprint(seam.devices.list(
#     # include_if=["can_remotely_unlock"]
#     device_types=["minut_sensor", "hubitat_lock"]
# ))

# # Confirm that the device can remotely lock.
# if seam.locks.get(device_id="59112086-537a-49c0-96dc-ce74f5abfbd7").can_remotely_lock:
#   # Perform the lock operation.
#   seam.locks.lock_door(device_id="59112086-537a-49c0-96dc-ce74f5abfbd7")

# Confirm that the device supports online access codes.
# device = seam.locks.get(
#   device_id="59112086-537a-49c0-96dc-ce74f5abfbd7"
# )
# if device.can_program_online_access_codes:
#   # Create the ongoing online access code.
#   seam.access_codes.create(
#     device_id = device.device_id,
#     name = "my ongoing code",
#     code = "1234"
#   )

# seam.action_attempts.get(action_attempt_id="")

# pprint(seam.acs.access_groups.list(
#     acs_system_id="449c8955-4741-4c44-aa41-943c79a46368",
#     acs_user_id="412b7bd5-d6ca-4836-9b41-0c5a0ce360a1"
# ))

# pprint(seam.acs.access_groups.get(
#     acs_access_group_id="d959202c-d9cc-4469-a053-74fb7d85b2fa"
# ))

# seam.acs.access_groups.add_user(
#     acs_access_group_id="d959202c-d9cc-4469-a053-74fb7d85b2fa",
#     acs_user_id="412b7bd5-d6ca-4836-9b41-0c5a0ce360a1"
# )

# pprint(seam.acs.access_groups.list_users(
#   acs_access_group_id="d959202c-d9cc-4469-a053-74fb7d85b2fa"
# ))

# seam.acs.credentials.assign()

# pprint(seam.acs.credentials.create(
#   acs_user_id="412b7bd5-d6ca-4836-9b41-0c5a0ce360a1",
#   allowed_acs_entrance_ids=[
#     "e961348a-2ffb-4a17-a7d2-943bf304d782",
#     "b87fd32c-6599-45be-be8a-99e1683fa1d2"
#   ],
#   credential_manager_acs_system_id="f43c0c38-ae6e-4a54-911d-8c802302eced",
#   access_method="mobile_key",
#   is_multi_phone_sync_credential=True,
#   starts_at="2024-03-01T10:40:00Z",
#   ends_at="2024-03-04T10:40:00Z",
#   # manufacturer-specific metadata
# ))

# pprint(seam.acs.systems.list_compatible_credential_manager_acs_systems(
#  acs_system_id="14a43ebe-a1a3-4f95-ba34-ffdc909f86d3"
# ))

# pprint(seam.acs.credentials.list_accessible_entrances(
#   # acs_credential_id="66666666-6666-6666-6666-666666666666"
#   acs_credential_id="0dff92de-0681-4926-8f28-8afe9a708d49"
# ))

# pprint(seam.acs.entrances.list_credentials_with_access(
#   # acs_credential_id="66666666-6666-6666-6666-666666666666"
#   acs_entrance_id="e961348a-2ffb-4a17-a7d2-943bf304d782"
# ))

# connect_webview = seam.connect_webviews.create(accepted_providers=["august"])

# assert connect_webview.login_successful is False

# # Use the Connect Webview URL to display the
# # Connect Webview authorization flow to your user.
# print(connect_webview.url)
# # print(connect_webview.connect_webview_id)

# connect_webview_id = "44912603-23e8-4126-8f02-29c875875a64";

# updated_connect_webview = seam.connect_webviews.get(connect_webview_id=connect_webview_id)

# assert updated_connect_webview.login_successful

# # Retrieve all devices, filtered by manufacturer.
# # all_4suites_locks = seam.devices.list(manufacturer="four_suites")
# all_4suites_locks = seam.devices.list(manufacturer="yale")
# all_4suites_locks = seam.devices.list(manufacturer="august")

# some_lock = all_4suites_locks[0]

# # assert some_lock.properties["online"] is True
# # assert some_lock.properties["locked"] is True

# pprint(some_lock)

# # Confirm that the device can remotely unlock.
# if some_lock.can_remotely_unlock:
#   # Perform the unlock operation.
#   action_attempt=seam.locks.unlock_door(device_id=some_lock.device_id)
#   pprint(action_attempt)

# # Get the device by ID.
# updated_lock = seam.devices.get(device_id=some_lock.device_id)

# # Inspect the locked property to confirm
# # that the unlock operation was successful.
# assert updated_lock.properties["locked"] is False
# pprint(updated_lock.properties["locked"])

# # Confirm that the device supports online access codes.
# if updated_lock.can_program_online_access_codes:
#   # Create an ongoing online access code.
#   seam.access_codes.create(
#     device_id = updated_lock.device_id,
#     name = "my ongoing code",
#     code = "1234"
#   )
#   # Create a time-bound online access code.
#   seam.access_codes.create(
#     device_id = updated_lock.device_id,
#     name = "my time-bound code",
#     starts_at = "2025-01-01T16:00:00Z",
#     ends_at = "2025-01-22T12:00:00Z",
#     code = "2345"
#   )
#   # List all access codes for this device.
#   access_codes = seam.access_codes.list(
#     device_id = updated_lock.device_id
#   )
#   pprint(access_codes)

# jane_user = seam.user_identities.get(user_identity_id="b81318c1-843f-4dd8-8db9-323fcb8229da")
# entrances = seam.acs.entrances.list(acs_system_id="5240705c-6a64-46cf-add2-795efb54c007")
# for entrance in seam.acs.entrances.list(acs_system_id="5240705c-6a64-46cf-add2-795efb54c007"):
#     pprint("Entrance:")
#     pprint(entrance.display_name)
#     pprint(seam.acs.entrances.list_credentials_with_access(acs_entrance_id=entrance.acs_entrance_id))

# # Step 1:
# # Create the new user on the Latch ACS.
# # jane_user is a user_identity that represents
# # a user within your set of app users.
# building_a_resident = seam.acs.users.create(
#   # acs_system_id="11111111-1111-1111-1111-111111111111",
#   acs_system_id="5240705c-6a64-46cf-add2-795efb54c007",
#   user_identity_id=jane_user.user_identity_id,
#   full_name="Jane Doe 2",
#   email_address="jane@example.com"
# )

# # Step 2:
# # Create a PIN code for each door for the ACS user.
# for entrance in entrances:
#   pprint("Entrance:")
#   pprint(entrance)
#   credential = seam.acs.credentials.create(
#     acs_user_id=building_a_resident.acs_user_id,
#     # Use either acs_user_id or user_identity_id.
#     # user_identity_id = jane_user.user_identity_id,
#     access_method="code",
#     allowed_acs_entrance_ids=[
#       # You must specify only one entrance per PIN code.
#       entrance.acs_entrance_id
#     ],
#     starts_at="2024-07-13T16:50:42.072Z",
#     ends_at="2024-07-18T16:50:42.072Z"
#   )

#   pprint(credential)
# pprint(seam.acs.entrances.list_credentials_with_access(acs_entrance_id="053f5414-269f-4a47-a942-9231799b6b42"))
# pprint(seam.acs.entrances.list_credentials_with_access(acs_entrance_id="49ec448d-b9ff-43fa-909a-2ff471e7435f"))
# pprint(entrances[1])

# pprint(seam.acs.systems.list_compatible_credential_manager_acs_systems(
#   acs_system_id="6929fa70-a6c4-4dcf-be3f-34b1a4116553"
# )[0])

# # Step 1:
# # Create a user identity that corresponds to your user's app account.
# jane_user = seam.user_identities.create(
#   email_address = "jane@example.com"
# )
jane_user = seam.user_identities.get(
    user_identity_id="62557800-3619-4070-9aab-70e69b2b15a6"
)
building_a = seam.acs.systems.get(
    acs_system_id="f4f660da-c96a-4cf6-9f81-507ff4772b30"
)

# # Step 2:
# # Retrieve a credential manager.
# latch_credential_manager = seam.acs.systems.list_compatible_credential_manager_acs_systems(
#     acs_system_id=building_a.acs_system_id
#   )[0]

# # Step 3:
# # Set up an enrollment automation for the user identity, to enable mobile keys.
# seam.user_identities.enrollment_automations.launch(
#   user_identity_id=jane_user.user_identity_id,
#   create_credential_manager_user=True,
#   credential_manager_acs_system_id=latch_credential_manager.acs_system_id
# )

# # Step 4:
# # Create an ACS user on the Latch ACS
# # or assign the ACS user to the user identity.
# building_a_resident = seam.acs.users.create(
#   # To associate the ACS user with a user identity,
#   # include the user_identity_id.
#   # Resources that you create for this ACS user
#   # are available under the associated user identity.
#   user_identity_id=jane_user.user_identity_id,
#   acs_system_id=building_a.acs_system_id,
#   full_name="Jane Doe",
#   email_address="jane@example.com"
# )
building_a_resident = seam.acs.users.get(
    acs_user_id="11877d08-f101-4532-96f0-02c48e0392e3"
)
entrances = seam.acs.entrances.list(
    acs_system_id="f4f660da-c96a-4cf6-9f81-507ff4772b30"
)
# Step 5:
# Create a mobile key for each door for the ACS user.
for entrance in entrances:
  mobile_key = seam.acs.credentials.create(
    acs_user_id=building_a_resident.acs_user_id,
    is_multi_phone_sync_credential=True,
    access_method="mobile_key",
    allowed_acs_entrance_ids=[
      # You must specify only one entrance per mobile key.
      entrance.acs_entrance_id
    ],
    starts_at="2024-07-13T16:50:42.072Z",
    ends_at="2024-07-18T16:50:42.072Z"
  )

  pprint(mobile_key)
