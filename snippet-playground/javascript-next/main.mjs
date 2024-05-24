#!/usr/bin/env node

import { Seam } from "seam"

// const seam = new Seam({
//   endpoint: `https://r${Math.random()
//     .toString(16)
//     .slice(2)}.fakeseamconnect.seam.vc`,
//   apiKey: "seam_apikey1_token",
// })

const seam = new Seam({
  // apiKey: "seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy",
  apiKey: "seam_test8yup_77ut771wVzFPcfhce9ti5Ccq"
})

// console.log(await seam.devices.list())

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
//   acs_system_id: "14a43ebe-a1a3-4f95-ba34-ffdc909f86d3"
//   // acs_system_id: "11111111-1111-1111-1111-111111111111"
// }));

await seam.acs.systems.listCompatibleCredentialManagerAcsSystems({
  acs_system_id: "f43c0c38-ae6e-4a54-911d-8c802302eced"
});
