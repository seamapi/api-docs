#!/usr/bin/env node

import { Seam } from "seam"

// const seam = new Seam({
//   endpoint: `https://r${Math.random()
//     .toString(16)
//     .slice(2)}.fakeseamconnect.seam.vc`,
//   apiKey: "seam_apikey1_token",
// })

// const seam = new Seam();

const seam = new Seam({
  // endpoint: `https://connect.getseam.com`,
  apiKey: "seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy"
  // apiKey: "seam_test8yup_77ut771wVzFPcfhce9ti5Ccq"
  // apiKey: "seam_test24tc_7Mhe64ZMWJctwRodv8eK3PBJ"
})

// const seam = new Seam({
//   endpoint: `https://connect.getseam.com`,
//   // Specify PAT.
//   apiKey: "seam_at134EHBFs3_2YuxzbTCZ5EJZcHTzy5b2Z8u",
//   // Specify workspace ID.
//   workspaceId: "98feb997-ff3c-4320-a907-1585108b1c08"
// })

// console.log(await seam.devices.list())
// console.log(await seam.devices.listDeviceProviders({provider_category: "stable"}))
// console.log(await seam.devices.get({device_id: "30fd243b-3054-4384-a713-5487076a3826"}))

// const deviceId = "30fd243b-3054-4384-a713-5487076a3826"
// const deviceUpdate = await seam.devices.update({
//   device_id: deviceId,
//   name: "My Lock"
// })

// console.log(deviceUpdate)

// console.log(await seam.devices.unmanaged.list())
// console.log(await seam.devices.unmanaged.get({device_id: "882dd63f-db9b-4210-bac2-68372aa0aff7"}))

// const deviceId = "882dd63f-db9b-4210-bac2-68372aa0aff7"
// const unmanagedDeviceUpdate = await seam.devices.unmanaged.update({
//   device_id: deviceId,
//   is_managed: true
// })

// console.log(unmanagedDeviceUpdate)


// console.log(await seam.locks.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
// console.log(await seam.locks.get("ed4bb795-f29f-43e5-bc0f-35f69f9141b5"))
// console.log(await seam.locks.lockDoor("6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
// console.log(await seam.locks.unlockDoor("6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
// console.log(await seam.actionAttempts.get("99537f1c-31c3-43ba-a981-3dd005615b0c"))

// const deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

// const createdAccessCode = await seam.accessCodes.create({
//     device_id: deviceId,
//     name: "my ongoing code",
//     code: "1234"
// })

// console.log(createdAccessCode)

// const deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

// const createdAccessCode = await seam.accessCodes.create({
//   device_id: deviceId,
//   name: "my time-bound code",
//   starts_at: "2025-01-01T16:00:00Z",
//   ends_at: "2025-01-22T12:00:00Z",
//   code: "2345"
// })

// console.log(createdAccessCode)

//     starts_at: new Date("2025-01-01T16:00:00Z").toISOString(),
//     ends_at: new Date("2025-01-22T12:00:00Z").toISOString()

// console.log(await seam.accessCodes.list({
//   device_id: "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
// }))

// console.log(await seam.accessCodes.list({
//   device_id: "9689dc30-77d8-4728-9968-b3abd0835f47"
// }))


// const accessCodeIds = ['80aa1afa-f0e5-43c2-96ea-6ab141112f9c', 'f4780806-076e-4cec-8081-df0ea2139d5a']
// console.log(await seam.accessCodes.list({
//   access_code_ids: accessCodeIds
// }))

// console.log(await seam.accessCodes.get({
//   access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
// }))

// const updatedAccessCode = await seam.accessCodes.update({
//   access_code_id: "80aa1afa-f0e5-43c2-96ea-6ab141112f9c",
//   name: "my updated code name",
//   starts_at: "2025-02-01T16:00:00Z",
//   ends_at: "2025-02-22T12:00:00Z",
//   code: "5432"
// })

// console.log(updatedAccessCode)

// console.log(await seam.accessCodes.get({
//   access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
// }))

// const updatedAccessCode = await seam.accessCodes.update({
//   access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a",
//   starts_at: "2025-02-01T16:00:00Z",
//   ends_at: "2025-02-22T12:00:00Z"
// })

// console.log(updatedAccessCode)

// const updatedAccessCode = await seam.accessCodes.update({
//   access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a",
//   type: "ongoing"
// })

// console.log(updatedAccessCode)

// console.log(await seam.accessCodes.get({
//   access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
// }))

// console.log(await seam.accessCodes.delete({
  // access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
  // access_code_id: "da21c436-82a1-4b29-8077-ada9f9b7c0b0"
// }))

// // confirm that you get a 404
// try {
//   await seam.accessCodes.get({
//     access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
//   })
// } catch(error) {
//     console.log(error)
// }


// console.log(await seam.devices.get({
//   device_id: "ed4bb795-f29f-43e5-bc0f-35f69f9141b5"
// }))

// const device = await seam.devices.get({
//     device_id: "ed4bb795-f29f-43e5-bc0f-35f69f9141b5"
//   })

// console.log(device)
// console.log(device.properties.code_constraints)

// const deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

// const createdAccessCode = await seam.accessCodes.create({
//     device_id: deviceId,
//     name: "my ongoing code",
//     allow_external_modification: true
// })

// console.log(createdAccessCode)

// const accessCode = await seam.accessCodes.get({
//   access_code_id: "38a569bb-40b9-4e42-97bd-bb78f8d96777"
// })

// console.log("Errors:")
// console.log(accessCode.errors)
// console.log("Warnings:")
// console.log(accessCode.warnings)

// console.log(await seam.devices.get({
//   device_id: "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
// }))

// const deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

// const createdAccessCode = await seam.accessCodes.create({
//     device_id: deviceId,
//     name: "my time-bound code",
//     starts_at: "2025-01-01T16:00:00Z",
//     ends_at: "2025-01-22T12:00:00Z",
//     use_backup_access_code_pool: true
// })

// console.log(createdAccessCode)

// const accessCode = await seam.accessCodes.get({
//   access_code_id: "f863cb36-7f96-4b56-ac91-115742c31c00"
// })

// console.log("Is backup access code available: "
//   + accessCode.is_backup_access_code_available)

// const backupAccessCode = await seam.accessCodes.pullBackupAccessCode({
//     access_code_id: "f863cb36-7f96-4b56-ac91-115742c31c00"
// })

// console.log(backupAccessCode)

// console.log(await seam.accessCodes.unmanaged.list({
//   device_id: "374d3ee2-5e5d-4141-b828-6c2fa458212f"
// }))

// console.log(await seam.accessCodes.unmanaged.convertToManaged({
//   access_code_id: "5824d0be-5e96-432e-b3c5-f4c49c07b1ba"
// }))

// console.log(await seam.accessCodes.unmanaged.delete({
//   access_code_id: "5824d0be-5e96-432e-b3c5-f4c49c07b1ba"
// }))

///////////////////////////////////
// Offline Access Codes
///////////////////////////////////

// const lock = await seam.locks.get("ea12f6c6-e63e-447d-856b-ec9e92981000")
// const lock = await seam.locks.get("bc14aaee-f485-470a-9bda-2abbcec2e4a6")
// console.log(lock)
// console.log("\nPredefined time slots:")
// console.log(lock.properties.dormakaba_oracode_metadata.predefined_time_slots)

// const deviceId = "ea12f6c6-e63e-447d-856b-ec9e92981000"
// const deviceId = "bc14aaee-f485-470a-9bda-2abbcec2e4a6"

// const createdAccessCode = await seam.accessCodes.create({
//   device_id: deviceId,
//   name: "my hourly-bound offline code",
//   type: "time_bound",
//   starts_at: "2023-12-22T06:00:00-00:00",
//   ends_at: "2023-12-22T18:00:00-00:00",
//   is_offline_access_code: true,
//   // max_time_rounding: "1h"
// })

// console.log(createdAccessCode)
// console.log(await seam.accessCodes.get({access_code_id: "75187cd8-16b8-4529-ab28-d6d33c6406d6"}))

// const deviceId = "ea12f6c6-e63e-447d-856b-ec9e92981000"

// const createdAccessCode = await seam.accessCodes.create({
//   device_id: deviceId,
//   name: "my daily-bound offline code",
//   starts_at: "2023-12-22T23:00:00-00:00",
//   ends_at: "2023-12-27T22:59:00-00:00",
//   max_time_rounding: "1d",
//   is_offline_access_code: true
// })

// console.log(createdAccessCode)


////////////////////////////////////////////////////////////////////////////

// const heat_request = await seam.thermostats.update({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   default_climate_setting: {
//     hvac_mode_setting: "heat",
//     heating_set_point_celsius: 20,
//     manual_override_allowed: true
//   }
// })

// console.log(heat_request)

// const heat_request = await seam.thermostats.heat({
//       device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//       heating_set_point_celsius: 20
// })

// console.log(heat_request)


// console.log(await seam.actionAttempts.get("4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90"))

// const cool_request = await seam.thermostats.update({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   default_climate_setting: {
//     hvac_mode_setting: "cool",
//     cooling_set_point_celsius: 25,
//     manual_override_allowed: true
//   }
// })

// console.log(cool_request)

// const cool_request = await seam.thermostats.cool({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   cooling_set_point_celsius: 25
// })

// console.log(cool_request)


// const heat_cool_request = await seam.thermostats.update({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   default_climate_setting: {
//     hvac_mode_setting: "heat_cool",
//     heating_set_point_celsius: 20,
//     cooling_set_point_celsius: 25,
//     manual_override_allowed: true
//   }
// })

// console.log(heat_cool_request)

// const heat_cool_request = await seam.thermostats.heatCool({
//       device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//       heating_set_point_celsius: 20,
//       cooling_set_point_celsius: 25,
// })

// console.log(heat_cool_request)


// const off_request = await seam.thermostats.update({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   default_climate_setting: {
//     hvac_mode_setting: "off",
//     manual_override_allowed: true
//   }
// })

// console.log(off_request)

// const off_request = await seam.thermostats.off({
//       device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
// })

// console.log(off_request)


// console.log(await seam.thermostats.get({device_id : "518f692b-f865-4590-8c3e-3849e9984c75"}))

// const update = await seam.thermostats.update({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   default_climate_setting: {
//     "hvac_mode_setting": "heat_cool",
//     "cooling_set_point_celsius": 25,
//     "heating_set_point_celsius": 20,
//     "manual_override_allowed": true
//   }
// })

// console.log(update)

// const climate_setting_schedule = await seam.thermostats.climateSettingSchedules.create({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   name: "Guest Stay 1",
//   schedule_starts_at: "2023-12-10T15:00:00.000Z",
//   schedule_ends_at: "2023-12-17T11:00:00.000Z",
//   hvac_mode_setting: "heat_cool",
//   cooling_set_point_celsius: 25,
//   heating_set_point_celsius: 20,
//   manual_override_allowed: true
// })

// console.log(climate_setting_schedule)

// console.log(await seam.actionAttempts.get("c2b9e70a-2df9-4f14-9738-7642422343e3"))

// console.log(await seam.thermostats.climateSettingSchedules.list({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
// }))

// console.log(await seam.thermostats.climateSettingSchedules.get({
//   climate_setting_schedule_id: "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"
// }))

// console.log(await seam.thermostats.list())

// console.log(await seam.thermostats.get({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
// }))

// const updated_schedule = await seam.thermostats.climateSettingSchedules.update({
//   climate_setting_schedule_id: "b7d5cc0c-defc-4af1-9448-85b96aff5fd6",
//   schedule_ends_at: "2023-12-18T11:00:00.000Z",
//   hvac_mode_setting: "heat_cool",
//   cooling_set_point_fahrenheit: 75,
//   heating_set_point_fahrenheit: 65
// })

// console.log(updated_schedule)

// console.log(await seam.thermostats.climateSettingSchedules.delete({
//   climate_setting_schedule_id: "baac3a3a-90fa-4456-8cc2-6d1f94b2f15b"
// }))

// try {
//   await seam.thermostats.climateSettingSchedules.get({
//     climate_setting_schedule_id: "baac3a3a-90fa-4456-8cc2-6d1f94b2f15b"
//   })
// } catch(error) {
//     console.log(error)
// }



// const fan_on_request = await seam.thermostats.setFanMode({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   fan_mode_setting: "on"
// })

// console.log(fan_on_request)

// const deviceId = "98dc7c66-045d-49cb-a62b-4bb431b0a9fa"

// const noiseThresholdAttempt = await seam.noiseThresholds.create({
//   device_id: deviceId,
//   starts_daily_at: "20:00:00[America/Los_Angeles]",
//   ends_daily_at: "06:00:00[America/Los_Angeles]",
//   noise_threshold_decibels: 70
// })

// console.log(noiseThresholdAttempt)

// const userId = "user1"

// const createdConnectWebview = await seam.connectWebviews.create({
//   provider_category: "stable",
//   custom_metadata: {
//     "id": userId
//   }
// })

// console.log(createdConnectWebview)

// const createdConnectWebview = await seam.connectWebviews.create({
//   custom_redirect_url: "https://example.com/redirect",
//   custom_redirect_failure_url: "https://example.com/failure-redirect",
//   provider_category: "stable",
//   automatically_manage_new_devices: true,
//   wait_for_device_creation: true
// })

// console.log(createdConnectWebview)

// console.log(await seam.connectedAccounts.delete({
//   connected_account_id: "f767ceff-2c5c-4888-8f25-898e16c7a728"
// }))

// const user_identifier_key = "internal user ID 2"
// const connected_account_ids = ["3ea0b67f-649f-4131-bfe3-f2035e77a3f9", "6e1cad57-b244-40ca-b4f3-30a46c8000d4"]

// const client_session = await seam.clientSessions.create({
//   user_identifier_key: user_identifier_key,
//   connected_account_ids: connected_account_ids
// })

// const client_session_token = client_session.token
// console.log("Client session token: " + client_session_token)

// console.log(await seam.clientSessions.list())

// const client_session = await seam.clientSessions.getOrCreate({
//   user_identifier_key: user_identifier_key,
//   connected_account_ids: connected_account_ids
// })

// console.log(client_session)

// await seam.clientSessions.grant_access({
//   user_identifier_key: "internal user ID 2",
//   connect_webview_ids: [
//     "b9f2ad01-12b7-47cf-b566-ed5d9b47e834"
//   ]
// })



// const client_session_id = "c75d4330-ae01-4dfd-b6c5-f3e94e0d8168"
// console.log(await seam.clientSessions.get(client_session_id))

// const client_session_id = "639eb8af-19a9-4ae5-817c-6ad08fd078e7"
// console.log(await seam.clientSessions.delete({
//   client_session_id: client_session_id
// }))

// // Use the API key for your workspace in the initial seam constructor.
// const seam = new Seam({
//     apiKey: "seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy"
// })

// // Define the user and connected accounts.
// const user_identifier_key = "internal user ID 3"
// const connected_account_ids = ["3ea0b67f-649f-4131-bfe3-f2035e77a3f9", "6e1cad57-b244-40ca-b4f3-30a46c8000d4"]

// // Create the client session.
// const client_session = await seam.clientSessions.create({
//   user_identifier_key: user_identifier_key,
//   connected_account_ids: connected_account_ids
// })

// // Get the associated client session token.
// const client_session_token = client_session.token

// // Use the client session token in a new seam constructor.
// const seam_using_client_session_token = new Seam({
//   clientSessionToken: client_session_token
// })

// // Create a Connect Webview restricted by the client session token.
// const connect_webview_creation_action_attempt = await seam.connectWebviews.create({
//   provider_category: "stable"
// }

// console.log(connect_webview_creation_action_attempt)

// const user_identifier_key = "internal user ID 4"
// const connected_account_ids = ["3ea0b67f-649f-4131-bfe3-f2035e77a3f9", "6e1cad57-b244-40ca-b4f3-30a46c8000d4"]

// const client_session = await seam.clientSessions.create({
//   user_identifier_key: user_identifier_key,
//   connected_account_ids: connected_account_ids
// })

// console.log(client_session)

// console.log(await seam.clientSessions.list({
//   without_user_identifier_key: true
// }))

// console.log(await seam.clientSessions.list())

// console.log(await seam.clientSessions.get())

// console.log(await seam.connectWebviews.list({
//   custom_metadata_has: {
//     "internal_account_id": "user-1"
//   }
// }));

// console.log(await seam.connectedAccounts.list());

// console.log(await seam.connectedAccounts.list({
//   // custom_metadata_has: {
//   //   "internal_account_id": "user-1"
//   // }
// }));

// const device = await seam.devices.get({device_id: "36cf1a96-196d-41b0-9804-88154387f1f9"});
// console.log("Online:", device.properties.online);

// const device_connected_events = await seam.events.list({
//   device_id: "36cf1a96-196d-41b0-9804-88154387f1f9",
//   event_type: "device.connected",
//   since: "2024-01-01T00:00:00Z"
// })
// console.log(device_connected_events)

// // const device = await seam.devices.get({device_id: "c2cc3831-f347-444e-b83b-d1f14dbb5893"});
// const device = await seam.devices.get({device_id: "36cf1a96-196d-41b0-9804-88154387f1f9"});
// if (device.properties.has_direct_power == true) {
//   console.log("Power Source: Wired");
// } else {
//   console.log("Power Source: Battery-powered");
//   console.log("Battery Level: " + device.properties.battery.level.toString());
//   console.log("Battery Status: " + device.properties.battery.status);
// }

console.log(await seam.devices.get({device_id: "ffc4d67f-e3a6-4ef8-ac84-f3770750422a"}));

////////////////////////////////////


// console.log(await seam.devices.list());
// console.log(await seam.devices.list({manufacturer: "four_suites"}));

// const all4suitesLocks = await seam.devices.list({manufacturer: "four_suites"});
// const all4suitesLocks = await seam.devices.list({manufacturer: "yale"});
// const all4suitesLocks = await seam.devices.list({manufacturer: "august"});

// const someLock = all4suitesLocks[0];

// console.log(someLock.properties.online); // true
// console.log(someLock.properties.locked); // true

// console.log(someLock);

// // Confirm that the device can remotely unlock.
// if (someLock.can_remotely_unlock) {
//   // Perform the unlock operation
//   // and return an action attempt.
//   const actionAttempt = await seam.locks.unlockDoor({
//     device_id: someLock.device_id,
//     waitForActionAttempt: true
//   });
//   console.log(actionAttempt);
// };

// // Get the device by ID.
// const updatedLock = await seam.devices.get({device_id: someLock.device_id});

// // Inspect the locked property to confirm
// // that the unlock operation was successful.
// console.log(updatedLock.properties.locked) // false

// // Confirm that the device supports online access codes.
// if (updatedLock.can_program_online_access_codes) {
//   // Create an ongoing online access code.
//   await seam.accessCodes.create({
//     device_id: updatedLock.device_id,
//     name: "my ongoing code",
//     code: "1234"
//   });
//   // Create a time-bound online access code.
//   await seam.accessCodes.create({
//     device_id: updatedLock.device_id,
//     name: "my time-bound code",
//     starts_at: "2025-01-01T16:00:00Z",
//     ends_at: "2025-01-22T12:00:00Z",
//     code: "2345"
//   });
//   // List all access codes for this device.
//   const accessCodes = await seam.accessCodes.list({
//     device_id: updatedLock.device_id
//   });
//   console.log(accessCodes);
// };

// const janeUser = await seam.userIdentities.get({user_identity_id: "a392551c-aadc-404d-b93b-e367d0771773"});
// const entrances = await seam.acs.entrances.list({acs_system_id: "6929fa70-a6c4-4dcf-be3f-34b1a4116553"})

// // Step 1:
// // Create the new user on the Latch ACS.
// // janeUser is a user_identity that represents
// // a user within your set of app users.
// const buildingAResident = await seam.acs.users.create({
//   // acs_system_id: "11111111-1111-1111-1111-111111111111",
//   acs_system_id: "6929fa70-a6c4-4dcf-be3f-34b1a4116553",
//   user_identity_id: janeUser.user_identity_id,
//   full_name: "Jane Doe2",
//   email_address: "jane2@example.com"
// });

// // Step 2:
// // Create a PIN code for each door for the ACS user.
// for (const entrance of entrances) {
//   const credential = await seam.acs.credentials.create({
//     acs_user_id: buildingAResident.acs_user_id,
//     // Use either acs_user_id or user_identity_id.
//     user_identity_id: janeUser.user_identity_id,
//     access_method: "code",
//     allowed_acs_entrance_ids: [
//       // You must specify only one entrance per PIN code.
//       entrance.acs_entrance_id
//     ],
//     starts_at: "2024-07-13T16:50:42.072Z",
//     ends_at: "2024-07-18T16:50:42.072Z"
//   });

//   console.log(credential);
// }

// Retrieve all devices for the connectedAccountId.
const connectedDevices = await seam.devices.list({
  // connected_account_id: "11111111-1111-1111-1111-222222222222"
  connected_account_id: "486466da-a19f-48b3-824d-b9aa30b936c9"
});
console.log(connectedDevices);

// const buildingA = await seam.acs.systems.get({
//   acs_system_id: "f4f660da-c96a-4cf6-9f81-507ff4772b30"
// });

// const entrances = await seam.acs.entrances.list({
//   acs_system_id: "f4f660da-c96a-4cf6-9f81-507ff4772b30"
// });

// // Step 1:
// // Create a user identity that corresponds to your user's app account.
// const janeUser = await seam.userIdentities.create({
//   email_address: "jane4@example.com"
// });

// // Step 2:
// // Retrieve a credential manager.
// const latchCredentialManager = (await seam.acs.systems
//   .listCompatibleCredentialManagerAcsSystems({
//     acs_system_id: buildingA.acs_system_id
//   }))[0];

// // Step 3:
// // Set up an enrollment automation for the user identity, to enable mobile keys.
// await seam.userIdentities.enrollmentAutomations.launch({
//   user_identity_id: janeUser.user_identity_id,
//   create_credential_manager_user: true,
//   credential_manager_acs_system_id: latchCredentialManager.acs_system_id
// });

// // Step 4:
// // Create an ACS user on the Latch ACS
// // or assign the ACS user to the user identity.
// const buildingAResident = await seam.acs.users.create({
//   // To associate the ACS user with a user identity,
//   // include the user_identity_id.
//   // Resources that you create for this ACS user
//   // are available under the associated user identity.
//   user_identity_id: janeUser.user_identity_id,
//   acs_system_id: buildingA.acs_system_id,
//   full_name: "Jane Doe4",
//   email_address: "jane4@example.com"
// });

// // Step 5:
// // Create a mobile key for each door for the ACS user.
// for (const entrance of entrances) {
//   const mobileKey = await seam.acs.credentials.create({
//     acs_user_id: buildingAResident.acs_user_id,
//     access_method: "mobile_key",
//     allowed_acs_entrance_ids: [
//       // You must specify only one entrance per mobile key.
//       entrance.acs_entrance_id
//     ],
//     starts_at: "2024-07-13T16:50:42.072Z",
//     ends_at: "2024-07-18T16:50:42.072Z"
//   });

//   console.log(mobileKey);
// }





// console.log(await seam.connectedAccounts.list({
//   // custom_metadata_has: {
//   //   "internal_account_id": "user-1"
//   // }
// }));

// console.log(await seam.devices.list({
//   // custom_metadata_has: {
//   //   "internal_account_id": "user-1"
//   // }
// }));

// console.log(await seam.devices.listDeviceProviders({provider_category: "stable"}))

// console.log(await seam.connectedAccounts.delete({connected_account_id: "6e1cad57-b244-40ca-b4f3-30a46c8000d4"}))

// console.log(await seam.devices.get({device_id: "70ea1ecb-902c-48e6-962e-532e59db46d5"}))
// const devices = await seam.devices.list({device_type: "honeywell_thermostat"})
// console.log(devices[0])
// const devices = await seam.devices.list({device_type: "nest_thermostat"})
// console.log(devices[0])

// // Create the user identity.
// const user_identity = await seam.userIdentities.create({
//     email_address: "jane_js-next@example.com"
// });

// // Launch the enrollment automation.
// await seam.userIdentities.enrollmentAutomations.launch({
//     // Use the acs_system_id for the credential manager.
//     credential_manager_acs_system_id: "6737e186-8d54-48ce-a7da-a0be4d252172",
//     user_identity_id: user_identity.user_identity_id,
//     // Automatically create a new credential manager user
//     // or specify the desired existing credential_manager_acs_user_id.
//     create_credential_manager_user: true
// });

// // Create the client session.
// const client_session = await seam.clientSessions.create({
//     user_identity_ids: [user_identity.user_identity_id]
// });

// // Use this token to launch your mobile controller.
// const token = client_session.token;
// console.log("Token: ",token);

// console.log(await seam.thermostats.climateSettingSchedules.update);

// console.log(await seam.accessCodes.get({access_code_id: "1a68084d-ec97-4ece-8010-d6ede99d3c9c"}));

// console.log(await seam.acs.systems.list());

// console.log(await seam.acs.users.create({
//   acs_system_id: "11111111-1111-1111-1111-111111111111",
//   user_identity_id: "22222222-2222-2222-2222-222222222222",
//   full_name: "Jane Doe",
//   email_address: "jane@example.com",
//   phone_number: "+15555550101"
// }));
// console.log(await seam.acs.users.create({
//   acs_system_id: "14a43ebe-a1a3-4f95-ba34-ffdc909f86d3",
//   user_identity_id: "3cb62920-6a5e-4226-8db8-9e9c795f15a6",
//   full_name: "Jane Doe",
//   email_address: "jane@example.com",
//   phone_number: "+15555550101"
// }));

// console.log(await seam.devices.list({device_type: "ttlock_lock"}));

// console.log(await seam.devices.list({
//   include_if: ["can_remotely_unlock"]
// }));


// // Confirm that the device can remotely lock.
// if ((await seam.locks.get({device_id: "59112086-537a-49c0-96dc-ce74f5abfbd7"})).can_remotely_lock) {
//   // Perform the lock operation.
//   console.log(await seam.locks.lockDoor({
//     device_id: "59112086-537a-49c0-96dc-ce74f5abfbd7",
//     waitForActionAttempt: true
//   }))
// };

// await seam.actionAttempts.get({action_attempt_id: ""});

// await seam.acs.accessGroups.addUser();
// await seam.acs.users.addToAccessGroup();

// console.log(await seam.acs.users.create({
//   acs_system_id: "14a43ebe-a1a3-4f95-ba34-ffdc909f86d3",
//   user_identity_id: "3cb62920-6a5e-4226-8db8-9e9c795f15a6",
//   acs_access_group_ids: ["b1626096-1a2f-4de6-8bdc-f194e6c141ef"],
//   full_name: "Jane Doe",
//   email_address: "jane@example.com",
//   phone_number: "+15555550101",
//   access_schedule: {
//     "starts_at": "2024-03-01T10:40:00Z",
//     "ends_at": "2024-03-04T10:40:00Z"
//   }
// }));

// console.log(await seam.acs.users.update({
//   acs_user_id: "33333333-3333-3333-3333-333333333333",
//   full_name: "Jack Doe"
// }));
// console.log(await seam.acs.users.update({
//   acs_user_id: "12837222-9c36-4d5b-a651-2229f46cb2bf",
//   full_name: "Jack Doe"
// }));

// await seam.acs.users.delete({
//   acs_user_id: "12837222-9c36-4d5b-a651-2229f46cb2bf"
// });

// console.log(await seam.acs.users.list({
//   acs_system_id: "14a43ebe-a1a3-4f95-ba34-ffdc909f86d3"
//   // acs_system_id: "11111111-1111-1111-1111-111111111111"
// }));

// console.log(await seam.acs.users.addToAccessGroup({
//   acs_user_id: "33333333-3333-3333-3333-333333333333",
//   acs_access_group_id: "44444444-4444-4444-4444-444444444444"
// }));
// console.log(await seam.acs.users.removeFromAccessGroup({
//   acs_user_id: "33333333-3333-3333-3333-333333333333",
//   acs_access_group_id: "44444444-4444-4444-4444-444444444444"
// }));

// console.log(await seam.acs.entrances.list({
//     acs_system_id: "14a43ebe-a1a3-4f95-ba34-ffdc909f86d3"
//     // acs_system_id: "11111111-1111-1111-1111-111111111111"
//   }));

// console.log(await seam.acs.entrances.get({
//     acs_entrance_id: "e961348a-2ffb-4a17-a7d2-943bf304d782"
//     // acs_entrance_id: "55555555-5555-5555-5555-555555555555"
//   }));

// console.log(await seam.acs.entrances.grantAccess({
//   acs_entrance_id: "e961348a-2ffb-4a17-a7d2-943bf304d782",
//   acs_user_id: "ff44664d-e6ae-4cb4-a9a1-73a8abe6a405"
// }));

// console.log(await seam.userIdentities.enrollmentAutomations.launch({
//   user_identity_id: "3cb62920-6a5e-4226-8db8-9e9c795f15a6",
//   credential_manager_acs_system_id: "f43c0c38-ae6e-4a54-911d-8c802302eced",
//   create_credential_manager_user: true
// }));

// console.log(await seam.acs.credentials.create({
//   // acs_user_id: "ac0b10d4-b37c-4104-8179-bb3effae917e",
//   acs_user_id: "ff44664d-e6ae-4cb4-a9a1-73a8abe6a405",
//   // acs_user_id: "33333333-3333-3333-3333-333333333333",
//   access_method: "mobile_key",
//   is_multi_phone_sync_credential: true,
//   starts_at: "2024-04-01T10:40:00Z",
//   ends_at: "2024-04-04T10:40:00Z",
//   visionline_metadata: {
//     card_format: "rfid48",
//     is_override_key: true
//   }
// }));

// await seam.acs.credentials.create({
//   acs_user_id: "ac0b10d4-b37c-4104-8179-bb3effae917e",
//   // acs_user_id: "33333333-3333-3333-3333-333333333333",
//   access_method: "code",
//   code: "8247590"
// });

// await seam.acs.credentials.create({
//   acs_user_id: "ac0b10d4-b37c-4104-8179-bb3effae917e",
//   // acs_user_id: "33333333-3333-3333-3333-333333333333",
//   access_method: "card",
//   code: "1234560"
// });


// console.log(await seam.acs.credentials.delete({
//   acs_credential_id: "6f27a1e2-8451-4447-b3f5-66cdb30f1afb"
// }));

// console.log(await seam.acs.users.suspend({
//   acs_user_id: "ac0b10d4-b37c-4104-8179-bb3effae917e"
// }));

// console.log(await seam.acs.users.unsuspend({
//   acs_user_id: "ac0b10d4-b37c-4104-8179-bb3effae917e"
// }));

// console.log(await seam.acs.users.get({
//   acs_user_id: "ac0b10d4-b37c-4104-8179-bb3effae917e"
// }));

// console.log(await seam.acs.systems.list());

// console.log(await seam.acs.systems.get({
//   // acs_system_id: "14a43ebe-a1a3-4f95-ba34-ffdc909f86d3"
//   acs_system_id: "f43c0c38-ae6e-4a54-911d-8c802302eced"
//   // acs_system_id: "11111111-1111-1111-1111-111111111111"
// }));

// console.log(await seam.acs.systems.listCompatibleCredentialManagerAcsSystems({
//   acs_system_id: "14a43ebe-a1a3-4f95-ba34-ffdc909f86d3"
// }));

// await seam.acs.credentials.listAccessibleEntrances({
//   acs_credential_id: "66666666-6666-6666-6666-666666666666"
// });

// const connectWebview = await seam.connectWebviews.create({
//   accepted_providers: ['four_suites']
// })

// console.log(connectWebview.login_successful) // false

// // Use the Connect Webview URL to display the
// // Connect Webview authorization flow to your user.
// console.log(connectWebview.url)

// const connectWebviewId = "44912603-23e8-4126-8f02-29c875875a64";
// const updatedConnectWebview = await seam.connectWebviews.get({
//   connect_webview_id: connectWebviewId
// })

// console.log(updatedConnectWebview.login_successful) // true

