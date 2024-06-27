<?php
require __DIR__ . '/vendor/autoload.php';

// $seam = new Seam\SeamClient(
//   "seam_apikey1_token",
//   "https://r" . md5(random_bytes(8)) . ".fakeseamconnect.seam.vc"
// );

// $seam = new Seam\SeamClient(
//   "seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy",
//   "https://connect.getseam.com"
// );

// $SEAM_API_KEY = "seam_test8yup_77ut771wVzFPcfhce9ti5Ccq";

// use Seam\SeamClient;

// $seam = new SeamClient($SEAM_API_KEY);

$seam = new Seam\SeamClient(
  // "seam_test8yup_77ut771wVzFPcfhce9ti5Ccq",
  // $SEAM_API_KEY
  // "https://connect.getseam.com"
);
// $seam = new Seam\SeamClient(
//   // Specify PAT.
//   "seam_at134EHBFs3_2YuxzbTCZ5EJZcHTzy5b2Z8u",
//   // Specify workspace ID.
//   "98feb997-ff3c-4320-a907-1585108b1c08",
//   "https://connect.getseam.com"
// );


// print_r($seam->devices->list());
// $devices = $seam->devices->list();

// echo json_encode($seam->devices->list(
//   // device_types: ["minut_sensor"]
//   include_if: ["can_remotely_unlock"]
// ));

// print_r($devices);
// print_r($devices[0]);

// // Confirm that the device can remotely lock.
// if ($seam->locks->get(device_id: "59112086-537a-49c0-96dc-ce74f5abfbd7")->can_remotely_lock) {
//   // Perform the lock operation.
//   $seam->locks->lock_door(device_id: "59112086-537a-49c0-96dc-ce74f5abfbd7");
//   // echo json_encode($seam->locks->lock_door("59112086-537a-49c0-96dc-ce74f5abfbd7"));
// }

// // Get the device.
// // $device = $seam->locks->get(device_id: "11111111-1111-1111-1111-444444444444");
// $device = $seam->locks->get(device_id: "59112086-537a-49c0-96dc-ce74f5abfbd7");
// // Confirm that the device supports online access codes.
// if ($device->can_program_online_access_codes) {
//   // Create the ongoing online access code.
//   $seam->access_codes->create(
//     device_id: $device->device_id,
//     name: "my ongoing code",
//     // code: "1234"
//     code: "2234"
//   );
// }

// echo json_encode($seam->action_attempts->get(action_attempt_id: "b1607dc9-929c-4800-95d4-c97e34bb7778"));

// echo $seam->connected_accounts->delete("25aa45e4-ee1d-44a6-91a0-b53e8c06a6d5");

// $connect_webview = $seam->connect_webviews->create(
//   provider_category: "stable"
// );
// $connect_webview_id = $connect_webview->connect_webview_id;
// // $client_session = $seam->client_sessions->create();
// $seam->client_sessions->create();
// // echo $client_session;
// $webview = $seam->connect_webviews->create(
//   custom_metadata: array('internal_account_id' => 'user-1')
// );
// echo json_encode($webview);

// $connect_webview = $seam->connect_webviews->create(
//   accepted_providers: ["google_nest"]
// );
// echo json_encode($connect_webview);

// $connect_webview = $seam->connect_webviews->create(
//   accepted_providers: ["four_suites"]
// );

// echo $connect_webview->url;

// $connect_webview = $seam->connect_webviews->create(
//   accepted_providers: ["four_suites"]
// );

// echo $connect_webview->login_successful ? 'true' : 'false', "\n"; // false

// // Use the Connect Webview URL to display the
// // Connect Webview authorization flow to your user.
// echo $connect_webview->url;

// $connectWebviewId = "44912603-23e8-4126-8f02-29c875875a64";
// $updated_connect_webview = $seam->connect_webviews->get(
//   // connect_webview_id: $connect_webview->connect_webview_id
//   connect_webview_id: $connectWebviewId
// );

// echo $updated_connect_webview->login_successful ? 'true' : 'false', "\n"; // true


// $webviews = $seam->connect_webviews->list(
//   custom_metadata_has: array('internal_account_id' => 'user-1')
// );
// echo json_encode($webviews);

// echo json_encode($seam->connected_accounts->list());

// $devices = $seam->devices->list(
//   // custom_metadata_has: array('internal_account_id' => 'user-1')
// );

// echo json_encode($devices);

// $device = $seam->devices->get("36cf1a96-196d-41b0-9804-88154387f1f9");
// if ($device->properties->online === true) {
//   echo "Online: true\n";
// } else {
//   echo "Online: false\n";
// }

// $device_connected_events = $seam->events->list(
//   device_id: "36cf1a96-196d-41b0-9804-88154387f1f9",
//   event_type: "device.connected",
//   since: "2024-01-01T00:00:00Z"
// );
// echo json_encode($device_connected_events), "\n";

// Retrieve all devices, filtered by manufacturer,
// which is one of several filters that list() supports.
// $all_4suites_locks = $seam->devices->list(manufacturer: "four_suites");
// $all_4suites_locks = $seam->devices->list(manufacturer: "yale");
// $all_4suites_locks = $seam->devices->list(manufacturer: "august");

// // Select the first device as an example.
// $some_lock = $all_4suites_locks[0];

// // Inspect specific properties.
// echo $some_lock->properties->online ? 'true' : 'false', "\n"; // true
// echo $some_lock->properties->locked ? 'true' : 'false', "\n"; // true

// // View the entire returned device object.
// echo json_encode($some_lock, JSON_PRETTY_PRINT);

// Confirm that the device can remotely unlock.
// if ($some_lock->can_remotely_unlock) {
//   // Perform the unlock operation
//   // and return an action attempt.
//   $action_attempt = $seam->locks->unlock_door(device_id: $some_lock->device_id);
//   echo json_encode($action_attempt, JSON_PRETTY_PRINT);
// }

// // Get the device by ID.
// $updated_lock = $seam->devices->get(device_id: $some_lock->device_id);

// // Inspect the locked property to confirm
// // that the unlock operation was successful.
// echo $updated_lock->properties->locked ? 'true' : 'false', "\n"; // false

// // Confirm that the device supports online access codes.
// if ($updated_lock->can_program_online_access_codes) {
//   // Create an ongoing online access code.
//   $seam->access_codes->create(
//     device_id: $updated_lock->device_id,
//     name: "my ongoing code",
//     code: "1234"
//   );
//   // Create a time-bound online access code.
//   $seam->access_codes->create(
//     device_id: $updated_lock->device_id,
//     name: "my time-bound code",
//     starts_at:  "2025-01-01T16:00:00Z",
//     ends_at: "2025-01-22T12:00:00Z",
//     code: "2345"
//   );
//   // List all access codes for this device.
//   $access_codes = $seam->access_codes->list(
//     device_id: $updated_lock->device_id
//   );
//   echo json_encode($access_codes, JSON_PRETTY_PRINT);
// }

// $jane_user = $seam->user_identities->get(
//   user_identity_id: "c915686e-66b8-4079-94aa-fd8541da23cc"
// );
// $entrances = $seam->acs->entrances->list(
//   acs_system_id: "6929fa70-a6c4-4dcf-be3f-34b1a4116553"
// );

// // Step 1:
// // Create the new user on the Latch ACS.
// // $jane_user is a user_identity that represents
// // a user within your set of app users.
// $building_a_resident = $seam->acs->users->create(
//   // acs_system_id: "11111111-1111-1111-1111-111111111111",
//   acs_system_id: "6929fa70-a6c4-4dcf-be3f-34b1a4116553",
//   user_identity_id: $jane_user->user_identity_id,
//   full_name: "Jane Doe3",
//   email_address: "jane3@example.com"
// );

// // Step 2:
// // Create a PIN code for each door for the ACS user.
// foreach ($entrances as $entrance) {
//   $credential = $seam->acs->credentials->create(
//     acs_user_id: $building_a_resident->acs_user_id,
//     // Use either acs_user_id or user_identity_id.
//     // user_identity_id: $jane_user->user_identity_id,
//     access_method: "code",
//     allowed_acs_entrance_ids: [
//       // You must specify only one entrance per PIN code.
//       $entrance->acs_entrance_id
//     ],
//     starts_at: "2024-07-13T16:50:42.072Z",
//     ends_at: "2024-07-18T16:50:42.072Z"
//   );

//   echo json_encode($credential, JSON_PRETTY_PRINT);
// }


$building_a = $seam->acs->systems->get(
  acs_system_id: "f4f660da-c96a-4cf6-9f81-507ff4772b30"
);

$entrances =  $seam->acs->entrances->list(
  acs_system_id: "f4f660da-c96a-4cf6-9f81-507ff4772b30"
);

// Step 1:
// Create a user identity that corresponds to your user's app account.
$jane_user = $seam->user_identities->create(
  email_address: "jane5@example.com"
);

// Step 2:
// Retrieve a credential manager.
$latch_credential_manager = $seam->acs->systems->list_compatible_credential_manager_acs_systems(
  acs_system_id: $building_a->acs_system_id
)[0];

// Step 3:
// Set up an enrollment automation for the user identity, to enable mobile keys.
$seam->user_identities->enrollment_automations->launch(
  user_identity_id: $jane_user->user_identity_id,
  create_credential_manager_user: true,
  credential_manager_acs_system_id: $latch_credential_manager->acs_system_id
);

// Step 4:
// Create an ACS user on the Latch ACS
// or assign the ACS user to the user identity.
$building_a_resident = $seam->acs->users->create(
  // To associate the ACS user with a user identity,
  // include the user_identity_id.
  // Resources that you create for this ACS user
  // are available under the associated user identity.
  user_identity_id: $jane_user->user_identity_id,
  acs_system_id: $building_a->acs_system_id,
  full_name: "Jane Doe5",
  email_address: "jane5@example.com"
);

// Step 5:
// Create a mobile key for each door for the ACS user.
foreach ($entrances as $entrance) {
  $mobile_key = $seam->acs->credentials->create(
    acs_user_id: $building_a_resident->acs_user_id,
    is_multi_phone_sync_credential: true,
    access_method: "mobile_key",
    allowed_acs_entrance_ids: [
      // You must specify only one entrance per mobile key.
      $entrance->acs_entrance_id
    ],
    starts_at: "2024-07-13T16:50:42.072Z",
    ends_at: "2024-07-18T16:50:42.072Z"
  );

  echo json_encode($mobile_key, JSON_PRETTY_PRINT);
}


// $device = $seam->devices->get("c2cc3831-f347-444e-b83b-d1f14dbb5893");
// $device = $seam->devices->get("36cf1a96-196d-41b0-9804-88154387f1f9");
// if ($device->properties->has_direct_power === true) {
//   echo "Power Source: Wired\n";
// } else {
//   echo "Power Source: Battery-powered\n";
//   // echo "Battery Level: " + $device->properties->battery->level + "\n";
//   echo "Battery Level: {$device->properties->battery->level}\n";
//   echo "Battery Status: {$device->properties->battery->status}\n";
// }

// echo json_encode($seam->devices->get("ffc4d67f-e3a6-4ef8-ac84-f3770750422a"));

// $devices = $seam->devices->list(
//   device_type: "honeywell_thermostat"
// );
// echo json_encode($devices[5]), "\n";

// $devices = $seam->devices->list(
//   device_type: "ecobee_thermostat"
// );
// echo json_encode($devices[0]), "\n";

// $devices = $seam->devices->list(
//   device_type: "nest_thermostat"
// );
// echo json_encode($devices[0]), "\n";

// $thermostats = $seam->thermostats->list();
// echo json_encode($thermostats, JSON_PRETTY_PRINT);

// $thermostat = $seam->thermostats->get(
//   device_id: "5ce2cd35-09b1-458c-bb08-51ee83c35be7"
// );
// echo json_encode($thermostat, JSON_PRETTY_PRINT);

// $action_attempt = $seam->action_attempts->get(
//   action_attempt_id: "241e79cd-4bda-499f-8e2e-d7ae01d273cf"
// );
// echo json_encode($action_attempt, JSON_PRETTY_PRINT);


// $heat_request = $seam->thermostats->heat(
//   device_id: "06a561b6-09d2-401c-a25f-ddb1e1efd59e",
//   heating_set_point_celsius: 20
// );

// echo json_encode($heat_request), "\n";

// $off_request = $seam->thermostats->off(
//   device_id: "06a561b6-09d2-401c-a25f-ddb1e1efd59e"
// );

// $fan_on_request = $seam->thermostats->set_fan_mode(
//   device_id: "06a561b6-09d2-401c-a25f-ddb1e1efd59e",
//   fan_mode_setting: "on"
// );

// echo json_encode($fan_on_request), "\n";

// $webview = $seam->connect_webviews->create(
//   accepted_providers: ["ecobee"]
// );

// echo json_encode($webview->login_successful), "\n"; # false

// # Send the Connect Webview URL to your user.
// echo json_encode($webview->url), "\n";

// // Create the user identity.
// $user_identity = $seam->user_identities->create(
//   email_address: "jane_php@example.com"
// );

// // Launch the enrollment automation.
// $seam->user_identities->enrollment_automations->launch(
//   // Use the acs_system_id for the credential manager.
//   credential_manager_acs_system_id: "6737e186-8d54-48ce-a7da-a0be4d252172",
//   user_identity_id: $user_identity->user_identity_id,
//   // Automatically create a new credential manager user
//   // or specify the desired existing credential_manager_acs_user_id.
//   create_credential_manager_user: true
// );

// // Create the client session.
// $client_session = $seam->client_sessions->create(
//   user_identity_ids: [$user_identity->user_identity_id]
// );

// // Use this token to launch your mobile controller.
// $token = $client_session->token;
// echo $token;

// echo json_encode($seam->acs->systems->list());
// echo json_encode($seam->acs->users->list());
// echo json_encode($seam->access_codes->list(
//   device_id: "b0d98fe5-1145-4a50-a91e-c94ecbd77f3c"
// ), JSON_PRETTY_PRINT);

// echo json_encode($seam->acs->users->create(
//   acs_system_id: "449c8955-4741-4c44-aa41-943c79a46368",
//   user_identity_id: "3cb62920-6a5e-4226-8db8-9e9c795f15a6",
//   full_name: "Jane Doe3",
//   email_address: "jane@example.com",
//   phone_number: "+15555550101"
// ), JSON_PRETTY_PRINT);

// echo json_encode($seam->devices->list(device_type: "ttlock_lock"), JSON_PRETTY_PRINT);

// echo json_encode($seam->acs->access_groups->list_users(
//   acs_access_group_id: "b1626096-1a2f-4de6-8bdc-f194e6c141ef"
// ), JSON_PRETTY_PRINT);

// echo json_encode($seam->acs->users->create(
//   acs_system_id: "449c8955-4741-4c44-aa41-943c79a46368",
//   user_identity_id: "3cb62920-6a5e-4226-8db8-9e9c795f15a6",
//   acs_access_group_ids: ["b1626096-1a2f-4de6-8bdc-f194e6c141ef"],
//   full_name: "Jane Doe",
//   email_address: "jane@example.com",
//   phone_number: "+15555550101",
//   access_schedule: array(
//     "starts_at" => "2024-03-01T10:40:00Z",
//     "ends_at" => "2024-03-04T10:40:00Z"
//   )
// ), JSON_PRETTY_PRINT);

// echo json_encode($seam->acs->users->update(
//   acs_user_id: "11845264-508e-4e3d-af17-db00a8a0a470",
//   full_name: "Jack Doe"
// ), JSON_PRETTY_PRINT);

// $seam->acs->users->delete(
//   acs_user_id: "11845264-508e-4e3d-af17-db00a8a0a470"
// );

// $seam->acs->users->list(
//   acs_system_id: "449c8955-4741-4c44-aa41-943c79a46368"
// );

// $seam->acs->users->add_to_access_group(
//   // acs_user_id: "33333333-3333-3333-3333-333333333333",
//   acs_user_id: "b530cda9-bdc1-4c95-b44d-bf9a99711bbf",
//   // acs_access_group_id: "44444444-4444-4444-4444-444444444444"
//   acs_access_group_id: "b1626096-1a2f-4de6-8bdc-f194e6c141ef"
// );

// $seam->acs->entrances->list(
//   acs_system_id: "11111111-1111-1111-1111-111111111111"
// );

// $seam->acs->entrances->get(
//   // acs_entrance_id: "55555555-5555-5555-5555-555555555555"
//   acs_entrance_id: "e961348a-2ffb-4a17-a7d2-943bf304d782"
// );

// $seam->acs->entrances->grant_access(
//   // acs_entrance_id: "55555555-5555-5555-5555-555555555555",
//   acs_entrance_id: "e961348a-2ffb-4a17-a7d2-943bf304d782",
//   // acs_user_id: "33333333-3333-3333-3333-333333333333"
//   acs_user_id: "ff44664d-e6ae-4cb4-a9a1-73a8abe6a405"
// );

// $seam->acs->credentials->create(
//   // acs_user_id: "33333333-3333-3333-3333-333333333333",
//   acs_user_id: "ff44664d-e6ae-4cb4-a9a1-73a8abe6a405",
//   // allowed_entrance_ids: [
//   //   // "55555555-5555-5555-5555-555555555555",
//   //   "e961348a-2ffb-4a17-a7d2-943bf304d782",
//   //   // "55555555-5555-5555-5555-000000000000"
//   //   "b87fd32c-6599-45be-be8a-99e1683fa1d2"
//   // ],
//   // credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
//   // credential_manager_acs_system_id: "f43c0c38-ae6e-4a54-911d-8c802302eced",
//   access_method: "mobile_key",
//   is_multi_phone_sync_credential: true,
//   starts_at: "2024-03-01T10:40:00Z",
//   ends_at: "2024-03-04T10:40:00Z",
//   visionline_metadata: array('card_format' => "rfid48", 'is_override_key' => true)
// );

// $seam->acs->credentials->delete(
//   // acs_credential_id: "66666666-6666-6666-6666-666666666666"
//   acs_credential_id: "e38a4617-1eff-44dd-b565-3329aa882bd7"
// );

// $seam->acs->users->suspend(
//   acs_user_id: "ff44664d-e6ae-4cb4-a9a1-73a8abe6a405"
//   // acs_user_id: "33333333-3333-3333-3333-333333333333"
// );

// $seam->acs->users->unsuspend(
//   acs_user_id: "ff44664d-e6ae-4cb4-a9a1-73a8abe6a405"
//   // acs_user_id: "33333333-3333-3333-3333-333333333333"
// );


// echo json_encode($seam->devices->list(), JSON_PRETTY_PRINT);


// echo json_encode($seam->acs->users->get(
//   acs_user_id: "ff44664d-e6ae-4cb4-a9a1-73a8abe6a405"
// ));

// echo json_encode($seam->devices->list(manufacturer: "august"), JSON_PRETTY_PRINT);

// $seam->acs->systems->get(
//   acs_system_id: "449c8955-4741-4c44-aa41-943c79a46368"
// );

// echo json_encode($seam->acs->systems->list_compatible_credential_manager_acs_systems(
//   // acs_system_id: "11111111-1111-1111-1111-111111111111"
//   acs_system_id: "14a43ebe-a1a3-4f95-ba34-ffdc909f86d3"
// ), JSON_PRETTY_PRINT);

// $seam->acs->credentials->list_accessible_entrances(
//   acs_credential_id: "66666666-6666-6666-6666-666666666666"
// );
