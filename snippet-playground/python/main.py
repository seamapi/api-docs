#!/usr/bin/env python

import random
from seamapi import Seam
from pprint import pprint

# seam = Seam(
#     api_url=f"https://pws{random.randint(0,1e6)}{random.randint(0,1e6)}.fakeseamconnect.seam.vc",
#     api_key="seam_apikey1_token"
# )

# seam = Seam(
#     api_url=f"https://connect.getseam.com",
#     api_key="seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy"
# )

# Temp sandbox workspace
seam = Seam(
    api_url=f"https://connect.getseam.com",
    api_key="seam_test8yup_77ut771wVzFPcfhce9ti5Ccq"
)


# seam = Seam(
#     api_url=f"https://connect.getseam.com",
#     # Specify PAT.
#     api_key="seam_at134EHBFs3_2YuxzbTCZ5EJZcHTzy5b2Z8u",
#     # Specify workspace ID.
#     workspace_id="98feb997-ff3c-4320-a907-1585108b1c08"
# )

# pprint(seam.devices.list())
# pprint(seam.devices.list_device_providers(provider_category="stable"))

# pprint(seam.devices.get("30fd243b-3054-4384-a713-5487076a3826"))

# device_id = "30fd243b-3054-4384-a713-5487076a3826"
# device_update = seam.devices.update(
#     device = device_id,
#     name = "BACK DOOR"
# )

# pprint(device_update)

# pprint(seam.devices.unmanaged.list())

# pprint(seam.devices.unmanaged.get("882dd63f-db9b-4210-bac2-68372aa0aff7"))

# device_id = "882dd63f-db9b-4210-bac2-68372aa0aff7"
# unmanaged_device_update = seam.devices.unmanaged.update(
#     device = device_id,
#     is_managed= True
# )

# pprint(unmanaged_device_update)

# device_id = "882dd63f-db9b-4210-bac2-68372aa0aff7"
# device_update = seam.devices.update(
#     device = device_id,
#     is_managed= False
# )

# pprint(device_update)



# pprint(seam.locks.unlock_door(device="6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
# pprint(seam.locks.lock_door(device="094b7a11-98da-4bba-8ef6-f6c4e4769a8e"))
# pprint(seam.action_attempts.get(action_attempt="47f2ba20-a2e5-4f3d-9add-e5ac33a415a3"))
# pprint(seam.locks.get(device="6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
# pprint(seam.locks.get(device="ed4bb795-f29f-43e5-bc0f-35f69f9141b5"))
# pprint(seam.locks.get(device="0168fba8-8275-49a3-acf5-b2bced519a2c"))

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# created_access_code = seam.access_codes.create(
#   device = device_id,
#   name = "my ongoing code",
#   code = "1234"
# )

# pprint(created_access_code)

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# created_access_code = seam.access_codes.create(
#   device = device_id,
#   name="my time-bound code",
#   starts_at="2025-01-01T16:00:00Z",
#   ends_at="2025-01-22T12:00:00Z",
#   code = "2345"
# )

# pprint(created_access_code)

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
# access_codes = seam.access_codes.list(device=device_id)

# pprint(access_codes)

# access_code_ids = [
#     "1bbd1eba-e4a2-4f96-b1b9-8498a5405b2b",
#     "daf89de3-ad3a-49aa-93bd-25f27d58f699"
# ]
# access_codes = seam.access_codes.list(access_codes=access_code_ids)

# pprint(access_codes)

# access_code_id = "daf89de3-ad3a-49aa-93bd-25f27d58f699"
# access_code = seam.access_codes.get(access_code_id)

# pprint(access_code)

# access_code_id = "1bbd1eba-e4a2-4f96-b1b9-8498a5405b2b"

# updated_access_code = seam.access_codes.update(
#   access_code = access_code_id,
#   name = "my updated code name",
#   code = "5432",
#   starts_at = "2025-02-01T16:00:00Z",
#   ends_at = "2025-02-22T12:00:00Z"
# )

# pprint(updated_access_code)

# access_code_id="daf89de3-ad3a-49aa-93bd-25f27d58f699"
# access_code = seam.access_codes.get(access_code_id)

# # Confirm that the access code starts as an ongoing code.
# pprint("Access code ID: " + access_code.access_code_id)
# pprint("Type: " + access_code.type)
# pprint("Starts at: " + str(access_code.starts_at))
# pprint("Ends at: " + str(access_code.ends_at))

# Update the code to set starts_at and ends_at timestamps.
# access_code_id = "f26947f8-db1e-4bc2-a708-b2f3e62fe7e4"
# pprint(seam.access_codes.update(
#   access_code = access_code_id,
#   starts_at = "2025-01-01T16:00:00Z",
#   ends_at = "2025-01-22T12:00:00Z"
# ))

# # Confirm that the type has changed to time-bound.
# pprint("Access code ID: " + access_code.access_code_id)
# pprint("Type: " + access_code.type)
# pprint("Starts at: " + str(access_code.starts_at))
# pprint("Ends at: " + str(access_code.ends_at))

# access_code_id="daf89de3-ad3a-49aa-93bd-25f27d58f699"
# access_code = seam.access_codes.get(access_code_id)

# # Confirm that the access code starts as a time-bound code.
# pprint("Access code ID: " + access_code.access_code_id)
# pprint("Type: " + access_code.type)
# pprint("Starts at: " + str(access_code.starts_at))
# pprint("Ends at: " + str(access_code.ends_at))

# Update the code to set the type to ongoing.
# pprint(seam.access_codes.update(
#   access_code = access_code_id,
#   type = "ongoing"
# ))

# Confirm that the type has changed to ongoing
# and the starts_at and ends_at are None.
# pprint("Access code ID: " + access_code.access_code_id)
# pprint("Type: " + access_code.type)
# pprint("Starts at: " +str(access_code.starts_at))
# pprint("Ends at: " + str(access_code.ends_at))

# pprint(seam.access_codes.delete(access_code="668bfcf7-8cc1-42f3-8387-1cabe189fe5d"))

# access_code_id="daf89de3-ad3a-49aa-93bd-25f27d58f699"
# access_code_id="1bbd1eba-e4a2-4f96-b1b9-8498a5405b2b"

# Delete the access code.
# pprint(seam.access_codes.delete(access_code_id))

# Confirm that a request for the deleted access code returns 404.
# try:
#     seam.access_codes.get(access_code_id)
# except Exception as e:
#     print(e)
# SeamAPIException("SeamAPIException: status=404, request_id=f4723c0d-f03c-48dd-967d-4e3cdab517e7, metadata={'type': 'access_code_not_found', 'message': 'Could not find an access_code with device_id or access_code_id', 'data': {'access_code_id': 'fb61e71c-d165-40a4-a65f-1a9ee44f8774'}, 'request_id': 'f4723c0d-f03c-48dd-967d-4e3cdab517e7'}")

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# created_access_code = seam.access_codes.create(
#   device = device_id,
#   name = "my ongoing code",
#   allow_external_modification = True
# )

# pprint(created_access_code)

# access_code = seam.access_codes.get("1d9fe873-3393-4b29-b93e-87fe7f923462")

# pprint("Errors:")
# pprint(access_code.errors)
# pprint("Warnings:")
# pprint(access_code.warnings)

# device = seam.devices.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe")
# pprint("Supports backup access code pool: "
#     + str(device.properties.supports_backup_access_code_pool))

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# created_access_code = seam.access_codes.create(
#   device = device_id,
#   name = "my time-bound code",
#   starts_at = "2025-01-01T16:00:00Z",
#   ends_at = "2025-01-22T12:00:00Z",
#   use_backup_access_code_pool = True
# )

# pprint(created_access_code)

# access_code = seam.access_codes.get("dc83d82d-55d2-4178-8c8c-10382311aed2")

# pprint("Is backup access code available: "
#     + str(access_code.is_backup_access_code_available))

# access_code_id = "dc83d82d-55d2-4178-8c8c-10382311aed2"

# backup_code = seam.access_codes.pull_backup_access_code(
#     access_code = access_code_id
# )

# pprint(backup_code)

# pprint(seam.access_codes.unmanaged.list(device="374d3ee2-5e5d-4141-b828-6c2fa458212f"))

# access_code_id = "449b03e6-1c6f-4ff3-b055-b9cf8146d2b0"
# attempt = seam.access_codes.unmanaged.convert_to_managed(
#   access_code = access_code_id
# )

# pprint(attempt)

# access_code_id = "ea3395d6-6d2a-4a16-9f38-396ecbba736f"
# pprint(seam.access_codes.unmanaged.delete(access_code = access_code_id))

# access_code_id = "1bbd1eba-e4a2-4f96-b1b9-8498a5405b2b"

#########################################################

# pprint(seam.thermostats.get(device="518f692b-f865-4590-8c3e-3849e9984c75"))
# pprint(seam.thermostats.climate_setting_schedules.list(device="518f692b-f865-4590-8c3e-3849e9984c75"))

# update = seam.thermostats.update(
#     device = "518f692b-f865-4590-8c3e-3849e9984c75",
#     default_climate_setting = {
#       "hvac_mode_setting": "heat_cool",
#       "cooling_set_point_celsius": 25,
#       "heating_set_point_celsius": 20,
#       "manual_override_allowed": True
#     }
# )

# pprint(update)

# heat_request = seam.thermostats.heat(
#   device = "518f692b-f865-4590-8c3e-3849e9984c75",
#   heating_set_point_celsius = 20
# )

# pprint(heat_request)

# pprint(seam.action_attempts.get(action_attempt="4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90"))

# cool_request = seam.thermostats.cool(
#   device = "518f692b-f865-4590-8c3e-3849e9984c75",
#   cooling_set_point_celsius = 25
# )

# pprint(cool_request)

# heat_and_cool_request = seam.thermostats.heat_cool(
#   device = "518f692b-f865-4590-8c3e-3849e9984c75",
#   heating_set_point_celsius = 25,
#   cooling_set_point_celsius = 20
# )

# pprint(heat_and_cool_request)

# off_request = seam.thermostats.off(
#   device = "518f692b-f865-4590-8c3e-3849e9984c75"
# )

# pprint(off_request)

# fan_on_request = seam.thermostats.set_fan_mode(
#   device = "518f692b-f865-4590-8c3e-3849e9984c75",
#   fan_mode = "on"
# )

# pprint(fan_on_request)

# pprint(seam.thermostats.get(device="518f692b-f865-4590-8c3e-3849e9984c75"))

# device_id = "518f692b-f865-4590-8c3e-3849e9984c75"
# thermostat = seam.thermostats.get(device_id)

# pprint(thermostat)

# climate_setting_schedule = seam.thermostats.climate_setting_schedules.create(
#     device = "518f692b-f865-4590-8c3e-3849e9984c75",
#     name = "Guest 1 Stay",
#     schedule_starts_at = "2023-12-05T15:00:00.000Z",
#     schedule_ends_at = "2023-12-09T11:00:00.000Z",
#     hvac_mode_setting = "heat_cool",
#     cooling_set_point_celsius = 25,
#     heating_set_point_celsius = 20,
#     manual_override_allowed = True
# )

# pprint(climate_setting_schedule)

# device_id = "518f692b-f865-4590-8c3e-3849e9984c75"
# climate_setting_schedules = seam.thermostats.climate_setting_schedules.list(device=device_id)

# pprint(climate_setting_schedules)

# device_id = "518f692b-f865-4590-8c3e-3849e9984c75"
# climate_setting_schedule_1_id = "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"
# climate_setting_schedule_2_id = "b7d5cc0c-defc-4af1-9448-85b96aff5fd6"

# climate_setting_schedule_id = "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"
# climate_setting_schedule = seam.thermostats.climate_setting_schedules.get(climate_setting_schedule_id)

# pprint(climate_setting_schedule)

# pprint(seam.thermostats.list())


# pprint(seam.thermostats.climate_setting_schedules.get(climate_setting_schedule="b7d5cc0c-defc-4af1-9448-85b96aff5fd6"))

# updated_schedule = seam.thermostats.climate_setting_schedules.update(
#     climate_setting_schedule="b7d5cc0c-defc-4af1-9448-85b96aff5fd6",
#     schedule_ends_at="2023-12-18T11:00:00.000Z",
#     hvac_mode_setting="heat_cool",
#     cooling_set_point_fahrenheit=75,
#     heating_set_point_fahrenheit=65
# )

# pprint(updated_schedule)

# climate_setting_schedule_id="6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"
# climate_setting_schedule_id="449b0b40-4c74-4c33-a2a2-3f88a7e19e55"

# pprint(seam.thermostats.climate_setting_schedules.delete(climate_setting_schedule_id))

# climate_setting_schedule_id="6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"

# try:
#     seam.thermostats.climate_setting_schedules.get(climate_setting_schedule_id)
# except Exception as e:
#     print(e)

# pprint(seam.thermostats.get("518f692b-f865-4590-8c3e-3849e9984c75"))

# device_id = "98dc7c66-045d-49cb-a62b-4bb431b0a9fa"

# noise_threshold = seam.noise_sensors.noise_thresholds.create(
#     device_id = device_id,
#     starts_daily_at = "20:00:00[America/Los_Angeles]",
#     ends_daily_at = "06:00:00[America/Los_Angeles]",
#     noise_threshold_decibels = 70
# )

# pprint(noise_threshold)

# pprint(seam.locks.get(device="9689dc30-77d8-4728-9968-b3abd0835f47"))

# device_id = "9689dc30-77d8-4728-9968-b3abd0835f47"

# created_access_code = seam.access_codes.create(
#   device = device_id,
#   name = "my hourly-bound offline code5",
#   # type = "time_bound",
#   starts_at = "2023-11-10T00:00:00-00:00",
#   ends_at = "2023-11-15T18:00:00-00:00",
#   is_offline_access_code = True
# )

# pprint(created_access_code)

# pprint(seam.access_codes.get(access_code="dda1da8d-9e90-4c8d-bae6-fedad609d54c"))

# pprint(seam.access_codes.list(device ="9689dc30-77d8-4728-9968-b3abd0835f47"))
# pprint(seam.acs.users.list(acs_system_id ="fc793d86-dcfd-4cfe-859f-0b9c1a5c1360"))

# device_id = "9689dc30-77d8-4728-9968-b3abd0835f47"

# created_access_code = seam.access_codes.create(
#   device = device_id,
#   name = "my daily-bound offline code",
#   starts_at = "2023-11-17T00:00:00-00:00",
#   ends_at = "2023-12-18T00:00:00-00:00",
#   max_time_rounding = "1d",
#   is_offline_access_code = True
# )

# pprint(created_access_code)

# device_id = "9689dc30-77d8-4728-9968-b3abd0835f47"

# created_access_code = seam.access_codes.create(
#   device = device_id,
#   name = "my one-time-use offline code3",
#   starts_at = "2023-11-12T00:00:00-00:00",
#   # max_time_rounding = "1day",
#   is_offline_access_code = True,
#   is_one_time_use = True
# )

# pprint(created_access_code)

# user_id = "user1"

# created_connect_webview = seam.connect_webviews.create(
#   provider_category = "stable",
#   custom_metadata = {
#     "id": user_id
#   }
# )

# pprint(created_connect_webview)

# created_connect_webview = seam.connect_webviews.create(
#   accepted_providers = ["august", "schlage"]
# )

# pprint(created_connect_webview)

# created_connect_webview = seam.connect_webviews.create(
#   custom_redirect_url = "https://example.com/redirect",
#   custom_redirect_failure_url = "https://example.com/failure-redirect",
#   provider_category = "stable",
#   automatically_manage_new_devices = True,
#   wait_for_device_creation = True
# )

# pprint(created_connect_webview)

# pprint(seam.connect_webviews.get())

# pprint(seam.devices.get("518f692b-f865-4590-8c3e-3849e9984c75"))

# pprint(seam.connected_accounts.delete("215e0ac8-554d-40d2-ace3-017996f506b8"))

# connect_webview_id = seam.connect_webviews.create(
#     provider_category = "stable"
# ).connect_webview_id
# seam.client_sessions.create(
#     connect_webview_ids = connect_webview_id
# )

# connect_webviews = seam.connect_webviews.list(
#   # custom_metadata_has = {
#   #   "internal_account_id": "user-1"
#   # }
# )
# pprint(connect_webviews)

# pprint(seam.acs.entrances.list("8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4"))

# connected_accounts = seam.connected_accounts.list(
#   # custom_metadata_has = {
#   #   "internal_account_id": "user-1"
#   # }
# )
# pprint(connected_accounts)

# devices = seam.devices.list(
#   # custom_metadata_has = {
#   #   "internal_account_id": "user-1"
#   # }
# )

# pprint(devices)

# connected_account_update = seam.connected_accounts.update(
#     connected_account_id = "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
#     automatically_manage_new_devices = True
# )

# pprint(connected_account_update)

# device_update = seam.devices.update(
#     device = "f7a7fb02-9277-4354-8dd1-28e2d016a7a9",
#     is_managed = True
# )

# pprint(device_update)

# device = seam.devices.get("36cf1a96-196d-41b0-9804-88154387f1f9")
# pprint("Online: " + str(device.properties.online))

# device_connected_events = seam.events.list(
#     device_id = "36cf1a96-196d-41b0-9804-88154387f1f9",
#     event_type = "device.connected",
#     since = "2024-01-01T00:00:00Z"
# )
# pprint(device_connected_events)

# device = seam.devices.get("c2cc3831-f347-444e-b83b-d1f14dbb5893")
# device = seam.devices.get("36cf1a96-196d-41b0-9804-88154387f1f9")
# if device.properties.has_direct_power == True:
#   pprint("Power Source: Wired")
# else:
#   pprint("Power Source: Battery-powered")
#   pprint("Battery Level: " + str(device.properties.battery.level))
#   pprint("Battery Status: " + device.properties.battery.status)

# print(seam.devices.get("ffc4d67f-e3a6-4ef8-ac84-f3770750422a"))

# device_battery_status_changed_events = seam.events.list(
#     device_id = "36cf1a96-196d-41b0-9804-88154387f1f9",
#     event_type = "device.battery_status_changed",
#     since = "2024-01-01T00:00:00Z"
# )
# pprint(device_battery_status_changed_events)

# devices = seam.devices.list(device_type="honeywell_thermostat")
# pprint(devices[0])
# devices = seam.devices.list(device_type="nest_thermostat")
# pprint(devices[0])

# # Create the user identity.
# user_identity = seam.user_identities.create(
#     email="jane_python@example.com"
# )

# # Launch the enrollment automation.
# seam.enrollment_automations.launch(
#     # Use the acs_system_id for the credential manager.
#     credential_manager_acs_system_id="6737e186-8d54-48ce-a7da-a0be4d252172",
#     user_identity_id=user_identity.user_identity_id
# )

# # Create the client session.
# client_session = seam.client_sessions.create(
#     user_identity_ids=[user_identity.user_identity_id]
# )

# # Use this token to launch your mobile controller.
# token = client_session.token


# seam.acs.systems.list()

# pprint(seam.devices.list())

# seam.acs.users.create(
#     acs_system_id="11111111-1111-1111-1111-111111111111",
#     acs_access_group_ids=[],
#     user_identity_id="22222222-2222-2222-2222-222222222222",
#     full_name="Jane Doe",
#     email_address="jane@example.com",
#     phone_number="+15555550101"
# )

# seam.acs.users.update(
#     acs_user_id="33333333-3333-3333-3333-333333333333",
#     full_name="Jack Doe"
# )

# seam.acs.users.delete(
#     acs_user_id="33333333-3333-3333-3333-333333333333"
# )

# seam.acs.users.list(
#     acs_system_id="11111111-1111-1111-1111-111111111111"
# )

# pprint(seam.access_codes.get("1a68084d-ec97-4ece-8010-d6ede99d3c9c"))

# seam.acs.systems.get(
#   acs_system_id="11111111-1111-1111-1111-111111111111"
# )

seam.acs.systems.list_compatible_credential_manager_acs_systems(
 acs_system_id="449c8955-4741-4c44-aa41-943c79a46368"
)
