#!/usr/bin/env ruby

require 'seamapi'

# random_number = rand(1e6).to_i
api_url = "https://connect.getseam.com"

# client = Seam::Client.new(base_uri: api_url, api_key: 'seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy')
client = Seam::Client.new(base_uri: api_url, api_key: 'seam_test8yup_77ut771wVzFPcfhce9ti5Ccq')
# client = Seam::Client.new(base_uri: api_url, api_key: 'seam_test8yup_77ut771wVzFPcfhce9ti5Ccq')
# client = Seam::Client.new(api_key: 'seam_test8yup_77ut771wVzFPcfhce9ti5Ccq')
# client = Seam::Client.new(
#   base_uri: api_url,
#   # Specify PAT.
#   api_key: 'seam_at134EHBFs3_2YuxzbTCZ5EJZcHTzy5b2Z8u',
#   # Specify workspace ID.
#   workspace_id: '98feb997-ff3c-4320-a907-1585108b1c08'
# )

# # print client.devices.list
# puts client.devices.list().inspect

puts client.devices.list(
  include_if: ["can_remotely_unlock"]
).inspect

# puts client.devices.list_device_providers(provider_category: "stable").inspect
# puts client.devices.get("30fd243b-3054-4384-a713-5487076a3826").inspect

# device_id = "30fd243b-3054-4384-a713-5487076a3826"
# device_update = client.devices.update(
#   device_id: device_id,
#   name: "My Lock"
# )

# puts device_update.inspect

# puts client.unmanaged_devices.list().inspect
# puts client.unmanaged_devices.get("882dd63f-db9b-4210-bac2-68372aa0aff7").inspect

# device_id = "882dd63f-db9b-4210-bac2-68372aa0aff7"
# unmanaged_device_update = client.unmanaged_devices.update(
#   device_id: device_id,
#   is_managed: true
# )

# puts unmanaged_device_update.inspect



# device="6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# print client.devices.get(device_or_id: "6aae9d08-fed6-4ca5-8328-e36849ab48fe")
# device = client.devices.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe")
# device = client.devices.get("ed4bb795-f29f-43e5-bc0f-35f69f9141b5")
# puts JSON.pretty_generate(device.properties)

# puts client.locks.lock_door("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
# puts client.devices.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
# puts client.locks.get("882dd63f-db9b-4210-bac2-68372aa0aff7").inspect
# puts client.locks.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
# puts client.locks.unlock_door("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
# puts client.action_attempts.get("f16b6775-7f74-4c06-ae88-ed30703cbb74").inspect

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# created_access_code = client.access_codes.create(
#   device_id: device_id,
#   name: "my ongoing code",
#   code: "1234"
# )

# puts created_access_code.inspect

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# created_access_code = client.access_codes.create(
#   device_id: device_id,
#   name: "my time-bound code",
#   starts_at: "2025-01-01T16:00:00Z",
#   ends_at: "2025-01-22T12:00:00Z",
#   code: "2345"
# )

# puts created_access_code.inspect

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# puts client.access_codes.list(device_id).inspect

# access_code_ids = ["0d2c8b21-c71f-4301-82ea-22830f749d9b", "6fe348a8-5938-4b73-8a36-86f7ffdfc431"]
# access_codes = client.access_codes.list(access_code_ids: access_code_ids)
# puts access_codes.inspect

# puts client.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect

# updated_access_code = client.access_codes.update(
#   access_code_id: "0d2c8b21-c71f-4301-82ea-22830f749d9b",
#   name: "my updated code name",
#   starts_at: "2025-02-01T16:00:00Z",
#   ends_at: "2025-02-22T12:00:00Z",
#   code: "5432"
# )

# puts updated_access_code.inspect

# puts client.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect

# updated_access_code = client.access_codes.update(
#   access_code_id: "6fe348a8-5938-4b73-8a36-86f7ffdfc431",
#   starts_at: "2025-02-01T16:00:00Z",
#   ends_at: "2025-02-22T12:00:00Z"
# )

# puts updated_access_code.inspect

# puts client.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect

# updated_access_code = client.access_codes.update(
#   access_code_id: "6fe348a8-5938-4b73-8a36-86f7ffdfc431",
#   type: "ongoing"
# )

# puts updated_access_code.inspect

# puts client.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect

# puts client.access_codes.delete("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect

# begin
#   client.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431")
# rescue => e
#   puts e
# end

# puts client.devices.get("ed4bb795-f29f-43e5-bc0f-35f69f9141b5").inspect

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# created_access_code = client.access_codes.create(
#   device_id: device_id,
#   name: "my ongoing code",
#   allow_external_modification: true
# )

# puts created_access_code.inspect

# access_code = client.access_codes.get("8f1f576f-ee52-4f12-97f6-7a1593965dec")
# puts "Errors:"
# puts access_code.errors
# puts "Warnings:"
# puts access_code.warnings

# puts client.devices.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# created_access_code = client.access_codes.create(
#   device_id: device_id,
#   name: "my time-bound code",
#   starts_at: "2025-01-01T16:00:00Z",
#   ends_at: "2025-01-22T12:00:00Z",
#   use_backup_access_code_pool: true
# )

# puts created_access_code.inspect

# access_code = client.access_codes.get("995d1927-e0db-4a97-b759-515193e6edbc")
# puts "Is backup access code available: #{access_code.is_backup_access_code_available}"

# access_code_id="995d1927-e0db-4a97-b759-515193e6edbc"
# puts client.access_codes.pull_backup_access_code(access_code_id).inspect

# device_id = "374d3ee2-5e5d-4141-b828-6c2fa458212f"
# puts client.unmanaged_access_codes.list(device_id).inspect

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
# puts client.access_codes.list(device_id).inspect

# puts client.unmanaged_access_codes.get("449b03e6-1c6f-4ff3-b055-b9cf8146d2b0").inspect


# access_code_id = "ddb6e6b7-7156-471e-9199-4106db2f2e57"
# client.unmanaged_access_codes.convert_to_managed(access_code_id).inspect

# access_code_id = "ddb6e6b7-7156-471e-9199-4106db2f2e57"
# client.unmanaged_access_codes.delete(access_code_id).inspect

#########################################################################

# puts client.thermostats.get("518f692b-f865-4590-8c3e-3849e9984c75").inspect

# heat_request = client.thermostats.heat_request(
#   access_code_id: "0d2c8b21-c71f-4301-82ea-22830f749d9b",
#   name: "my updated code name",
#   starts_at: "2025-02-01T16:00:00Z",
#   ends_at: "2025-02-22T12:00:00Z",
#   code: "5432"
# )

# puts updated_access_code.inspect

# puts client.thermostats.clientSettingSchedules.list("518f692b-f865-4590-8c3e-3849e9984c75").inspect


# deviceId = "98dc7c66-045d-49cb-a62b-4bb431b0a9fa"

# noiseThreshold = client.noiseThresholds.create({
#   device_id: deviceId,
#   starts_daily_at: "20:00:00[America/Los_Angeles]",
#   ends_daily_at: "06:00:00[America/Los_Angeles]",
#   noise_threshold_decibels: 70
# })

# puts noiseThreshold.inspect

# some_lock = client.locks.list().first
# puts client.locks.get(some_lock).capabilities_supported

# user_id = "user1"

# created_connect_webview = client.connect_webviews.create(
#   provider_category: "stable",
#   custom_metadata: {
#     "id": user_id
#   }
# )

# puts created_connect_webview.inspect

# created_connect_webview = client.connect_webviews.create(
#   custom_redirect_url: "https://example.com/redirect",
#   custom_redirect_failure_url: "https://example.com/failure-redirect",
#   provider_category: "stable",
#   automatically_manage_new_devices: true,
#   wait_for_device_creation: true
# )

# puts created_connect_webview.inspect

# puts client.connected_accounts.delete("25aa45e4-ee1d-44a6-91a0-b53e8c06a6d5").inspect

# puts client.connected_accounts.list().inspect

# devices = client.devices.list(
#   # custom_metadata_has: {
#   #   "internal_account_id": "user-1"
#   # }
# )

# puts devices.inspect

# device = client.devices.get("36cf1a96-196d-41b0-9804-88154387f1f9")
# puts "Online: " + device.properties['online'].to_s

# device_connected_events = client.events.list(
#   device_id: "36cf1a96-196d-41b0-9804-88154387f1f9",
#   event_type: "device.connected",
#   since: "2024-01-01T00:00:00Z"
# )
# puts device_connected_events.inspect

# # device = client.devices.get("c2cc3831-f347-444e-b83b-d1f14dbb5893")
# device = client.devices.get("36cf1a96-196d-41b0-9804-88154387f1f9")
# if(device.properties['has_direct_power'] == true)
#   puts "Power Source: Wired"
# else
#   puts "Power Source: Battery-powered"
#   puts "Battery Level: " + device.properties['battery']['level'].to_s
#   puts "Battery Status: " + device.properties['battery']['status']
# end

# puts client.devices.get("ffc4d67f-e3a6-4ef8-ac84-f3770750422a").inspect;

# devices = client.devices.list(device_type: "honeywell_thermostat")
# puts devices[4].inspect

# # Create the user identity.
# user_identity = client.user_identities.create(
#     email_address: "jane_ruby@example.com"
# )

# # Launch the enrollment automation.
# client.user_identities.enrollment_automations.launch(
#     # Use the acs_system_id for the credential manager.
#     credential_manager_acs_system_id: "6737e186-8d54-48ce-a7da-a0be4d252172",
#     user_identity_id: user_identity.user_identity_id,
#     # Automatically create a new credential manager user
#     # or specify the desired existing credential_manager_acs_user_id.
#     create_credential_manager_user: true
# )

# # Create the client session.
# client_session = client.client_sessions.create(
#     user_identity_ids: [user_identity.user_identity_id]
# )

# # Use this token to launch your mobile controller.
# token = client_session.token
# puts token

# puts client.acs.systems.list().inspect
