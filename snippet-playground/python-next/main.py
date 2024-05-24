#!/usr/bin/env python

import random
from seam import Seam
from pprint import pprint

seam = Seam(
    # api_url=f"https://pws{random.randint(0,1e6)}{random.randint(0,1e6)}.fakeseamconnect.seam.vc",
    # api_key="seam_apikey1_token"
    api_key="seam_test8yup_77ut771wVzFPcfhce9ti5Ccq"
)

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

pprint(seam.acs.systems.list_compatible_credential_manager_acs_systems(
 acs_system_id="14a43ebe-a1a3-4f95-ba34-ffdc909f86d3"
))
