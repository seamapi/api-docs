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
  // apiKey: "seam_test8yup_77ut771wVzFPcfhce9ti5Ccq"
})

// const seam = new Seam();

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


const buildingA = await seam.acs.systems.get({
  acs_system_id: "f4f660da-c96a-4cf6-9f81-507ff4772b30"
});

const entrances = await seam.acs.entrances.list({
  acs_system_id: "f4f660da-c96a-4cf6-9f81-507ff4772b30"
});

// Step 1:
// Create a user identity that corresponds to your user's app account.
const janeUser = await seam.userIdentities.create({
  email_address: "jane4@example.com"
});

// Step 2:
// Retrieve a credential manager.
const latchCredentialManager = (await seam.acs.systems
  .listCompatibleCredentialManagerAcsSystems({
    acs_system_id: buildingA.acs_system_id
  }))[0];

// Step 3:
// Set up an enrollment automation for the user identity, to enable mobile keys.
await seam.userIdentities.enrollmentAutomations.launch({
  user_identity_id: janeUser.user_identity_id,
  create_credential_manager_user: true,
  credential_manager_acs_system_id: latchCredentialManager.acs_system_id
});

// Step 4:
// Create an ACS user on the Latch ACS
// or assign the ACS user to the user identity.
const buildingAResident = await seam.acs.users.create({
  // To associate the ACS user with a user identity,
  // include the user_identity_id.
  // Resources that you create for this ACS user
  // are available under the associated user identity.
  user_identity_id: janeUser.user_identity_id,
  acs_system_id: buildingA.acs_system_id,
  full_name: "Jane Doe4",
  email_address: "jane4@example.com"
});

// Step 5:
// Create a mobile key for each door for the ACS user.
for (const entrance of entrances) {
  const mobileKey = await seam.acs.credentials.create({
    acs_user_id: buildingAResident.acs_user_id,
    access_method: "mobile_key",
    allowed_acs_entrance_ids: [
      // You must specify only one entrance per mobile key.
      entrance.acs_entrance_id
    ],
    starts_at: "2024-07-13T16:50:42.072Z",
    ends_at: "2024-07-18T16:50:42.072Z"
  });

  console.log(mobileKey);
}





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

