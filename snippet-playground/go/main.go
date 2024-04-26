package main

import (
	"context"
	"fmt"
	// "math/rand"
	"os"
  // "encoding/json"
//   "time"

  api "github.com/seamapi/go"
	seam "github.com/seamapi/go/client"
  // "github.com/seamapi/go/useridentities"
  // "github.com/seamapi/go/acs"



)

func main() {
	if err := run(); err != nil {
		_, _ = fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	}
}

func run() error {
	client := seam.NewClient(
		// seam.WithBaseURL(fmt.Sprintf("https://%d.fakeseamconnect.seam.vc", rand.Intn(1000000))),
		// seam.WithApiKey("seam_apikey1_token"),
		// seam.WithApiKey("seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy"),
		seam.WithApiKey("seam_test8yup_77ut771wVzFPcfhce9ti5Ccq"),
	)
	// devices, err := client.Devices.List(context.Background(), nil)
	// if err != nil {
	// 	return err
	// }
	// fmt.Println(devices)
	// return nil

devices, uErr := client.Devices.List(
  context.Background(),
  &api.DevicesListRequest{
    IncludeIf: []api.DevicesListRequestIncludeIfItem{
      api.DevicesListRequestIncludeIfItemCanRemotelyUnlock,
    },
  })

if uErr != nil {
    return uErr
}

fmt.Println(devices)
return nil

// userIdentityKey := "jenny_lee"
// email := "jenny@example.com"
// // phoneNumber := "+15555550111"
// // fullName := "Jenny Lee"

// userIdentity, uErr := client.UserIdentities.Create(context.Background(), &useridentities.UserIdentitiesCreateRequest{
//     // UserIdentityKey: &userIdentityKey,
//     UserIdentityKey: api.String("fred_smith"),
//     EmailAddress: api.String("fred@example.com"),
//     // EmailAddress: &email,
//     // PhoneNumber: &phoneNumber,
//     // FullName: &fullName,
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(userIdentity)
// return nil

// userIdentity, uErr := client.UserIdentities.Create(context.Background(), &api.UserIdentitiesCreateRequest{
//     UserIdentityKey: api.String("12345"),
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(userIdentity)
// return nil


// userIdentities, err := client.UserIdentities.List(context.Background())
// if err != nil {
//     return err
// }
// fmt.Println(userIdentities)
// return nil

// userIdentity, uErr := client.UserIdentities.Get(
//     context.Background(),
//     useridentities.NewUserIdentitiesGetRequestFromUserIdentitiesGetRequestUserIdentityId(
//         &useridentities.UserIdentitiesGetRequestUserIdentityId{
//             UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
//         },
//     ),
// )

// if uErr != nil {
//     return uErr
// }

// fmt.Println(userIdentity)
// return nil

// _, uErr := client.UserIdentities.AddAcsUser(context.Background(), &useridentities.UserIdentitiesAddAcsUserRequest{
//     UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
//     AcsUserId: "4d223973-0874-4831-8630-bfcb29e6bce0",
// })

// if uErr != nil {
//     return uErr
// }

// return nil

// acsUsers, uErr := client.UserIdentities.ListAcsUsers(context.Background(), &useridentities.UserIdentitiesListAcsUsersRequest{
//     UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(acsUsers)
// return nil

// acsSystems, uErr := client.UserIdentities.ListAcsSystems(context.Background(), &useridentities.UserIdentitiesListAcsSystemsRequest{
//     UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(acsSystems)
// return nil

// _, uErr := client.UserIdentities.RemoveAcsUser(context.Background(), &useridentities.UserIdentitiesRemoveAcsUserRequest{
//     UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
//     AcsUserId: "4d223973-0874-4831-8630-bfcb29e6bce0",
// })

// if uErr != nil {
//     return uErr
// }

// return nil

// _, uErr := client.UserIdentities.GrantAccessToDevice(context.Background(), &api.UserIdentitiesGrantAccessToDeviceRequest{
//     UserIdentityId: "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
//     DeviceId: "054765c8-a2fc-4599-b486-14c19f462c45",
// })

// if uErr != nil {
//     return uErr
// }

// // fmt.Println(deviceGrant)
// return nil

// accessibleDevices, uErr := client.UserIdentities.ListAccessibleDevices(context.Background(), &api.UserIdentitiesListAccessibleDevicesRequest{
//     UserIdentityId: "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(accessibleDevices)
// return nil

// _, uErr := client.UserIdentities.RevokeAccessToDevice(context.Background(), &api.UserIdentitiesRevokeAccessToDeviceRequest{
//     UserIdentityId: "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
//     DeviceId: "054765c8-a2fc-4599-b486-14c19f462c45",
// })

// if uErr != nil {
//     return uErr
// }

// // fmt.Println(revokeDevice)
// return nil




// _, uErr := client.UserIdentities.Delete(context.Background(), &api.UserIdentitiesDeleteRequest{
//   UserIdentityId: "44d48b20-0dbe-419d-91ca-ab8bceecd135",
// })

// if uErr != nil {
//   return uErr
// }

// return nil

// enrollmentAutomation, uErr := client.UserIdentities.EnrollmentAutomations.Launch(context.Background(), &useridentities.EnrollmentAutomationsLaunchRequest{
//     UserIdentityId: "eec124d4-ece5-4367-b154-dbd42127c2bb",
//     CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172",
//     AcsCredentialPoolId: api.String("3fa85f64-5717-4562-b3fc-2c963f66afa6"),
//     CreateCredentialManagerUser: api.Bool(true),
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(enrollmentAutomation)
// return nil

// enrollmentAutomation, uErr := client.UserIdentities.EnrollmentAutomations.Launch(context.Background(), &useridentities.EnrollmentAutomationsLaunchRequest{
//     // Use the ACS system ID for the credential service.
//     CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172",
//     // Use the user identity ID for the guest user identity.
//     UserIdentityId: "f3dd17cd-4a23-41e1-8aac-1905ae05ad6d",
//     CreateCredentialManagerUser: api.Bool(true),
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(enrollmentAutomation)
// return nil


// enrollmentAutomation, uErr := client.UserIdentities.EnrollmentAutomations.Launch(context.Background(), &useridentities.EnrollmentAutomationsLaunchRequest{
//     UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
//     CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172",
//     AcsCredentialPoolId: api.String("3fa85f64-5717-4562-b3fc-2c963f66afa6"),
//     CreateCredentialManagerUser: api.Bool(true),
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(enrollmentAutomation)
// return nil

// enrollmentAutomations, uErr := client.UserIdentities.EnrollmentAutomations.List(context.Background(), &useridentities.EnrollmentAutomationsListRequest{
//     UserIdentityId: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(enrollmentAutomations)
// return nil

// enrollmentAutomation, uErr := client.UserIdentities.EnrollmentAutomations.Get(
//     context.Background(),
//     useridentities.NewEnrollmentAutomationsGetRequestFromEnrollmentAutomationsGetRequestUserIdentityId(
//         &useridentities.EnrollmentAutomationsGetRequestUserIdentityId{
//             UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
//         },
//     ),
// )

// if uErr != nil {
//     return uErr
// }

// fmt.Println(enrollmentAutomation)
// return nil

// acsCredential, uErr := client.Acs.Credentials.Create(context.Background(), &acs.CredentialsCreateRequest{
//     AcsUserId: "4d223973-0874-4831-8630-bfcb29e6bce0",
//     IsMultiPhoneSyncCredential: api.Bool(true),
//     CardFormat: acs.CredentialsCreateRequestCardFormatRfid48.Ptr(),
//     // FacilityCode: "9",
//     AccessMethod: "mobile_key",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(acsCredential)
// return nil

// users, err := client.Acs.Users.List(context.Background(), &acs.UsersListRequest{})
// if err != nil {
//     return err
// }
// fmt.Println(users)
// return nil

	// devices, err := client.Devices.List(context.Background(), nil)
	// if err != nil {
	// 	return err
	// }
	// fmt.Println(devices)
	// return nil

// DOES NOT WORK (YET?)
// connectWebviews, err := client.ConnectWebviews.List(
//   context.Background(),
//   &api.ConnectWebviewsListRequest{
//     CustomMetadataHas: {"internal_account_id":"user-1"},
//   },
// )
// if err != nil {
//   return err
// }
// fmt.Println(connectWebviews)
// return nil

// customMetadata := map[string]ConnectWebviewsCreateRequestCustomMetadataValue

// INCORRECT
// connectWebview, err := client.ConnectWebviews.Create(
//   context.Background(),
//   &api.ConnectWebviewsCreateRequest{
//     CustomMetadata: map[string]string{"internal_account_id":"user-1"},
//   },
// )
// if err != nil {
//   return err
// }
// fmt.Println(connectWebview)
// return nil

// connectWebview, err := client.ConnectWebviews.Create(
//   context.Background(),
//   &api.ConnectWebviewsCreateRequest{
// 			AcceptedProviders: []api.AcceptedProvider{
// 				api.AcceptedProviderEcobee,
// 			},
//   },
// )
// if err != nil {
//   return err
// }
// fmt.Println(connectWebview.LoginSuccessful) // false
// fmt.Println(connectWebview.Url)
// return nil

// updatedConnectWebview, err := client.ConnectWebviews.Get(
//   context.Background(),
//   &api.ConnectWebviewsGetRequest{
// 			ConnectWebviewId: connectWebview.ConnectWebviewId,
//   },
// )
// if err != nil {
//   return err
// }
// fmt.Println(updatedConnectWebview.LoginSuccessful) // true
// return nil

// connectedAccounts, err := client.ConnectedAccounts.List(context.Background())
// if err != nil {
//   return err
// }
// fmt.Println(connectedAccounts)
// return nil

// connectWebviews, err := client.ConnectWebviews.List(context.Background(), nil)
// if err != nil {
//   return err
// }
// fmt.Println(connectWebviews)
// return nil

// devices, err := client.Devices.List(
// 	context.Background(), nil)
// if err != nil {
// 	return err
// }
// fmt.Println(devices)
// return nil

// devices, err := client.Devices.List(
// 	context.Background(), &api.DevicesListRequest{
//     DeviceType: api.DeviceTypeEcobeeThermostat.Ptr(),
//   },
// )
// if err != nil {
// 	return err
// }
// fmt.Println(devices)
// return nil


// device, err := client.Devices.Get(
// 	context.Background(),
//   &api.DevicesGetRequest{
//     DeviceId: api.String("36cf1a96-196d-41b0-9804-88154387f1f9"),
//   },
// )
// if err != nil {
// 	return err
// }
// fmt.Println("Online:", device.Properties.Online)
// return nil

// device_connected_events, err := client.Events.List(
// 	context.Background(),
//   &api.EventsListRequest{
//     DeviceId: api.String("36cf1a96-196d-41b0-9804-88154387f1f9"),
//     EventType: api.EventTypeDeviceConnected.Ptr(),
//     Since: api.String("2024-01-01T00:00:00Z"),
//   },
// )
// if err != nil {
// 	return err
// }
// fmt.Println(device_connected_events)
// return nil

// In progress
// device, err := client.Devices.Get(
// 	context.Background(),
//   &api.DevicesGetRequest{
//     // DeviceId: api.String("c2cc3831-f347-444e-b83b-d1f14dbb5893"),
//     DeviceId: api.String("36cf1a96-196d-41b0-9804-88154387f1f9"),
//   },
// )
// if err != nil {
// 	return err
// }
// fmt.Println("Online:", device.Properties.Online)
// return nil

// if ($device->properties->has_direct_power === true) {
//   echo "Power Source: Wired\n";
// } else {
//   echo "Power Source: Battery-powered\n";
//   // echo "Battery Level: " + $device->properties->battery->level + "\n";
//   echo "Battery Level: {$device->properties->battery->level}\n";
//   echo "Battery Status: {$device->properties->battery->status}\n";
// }

// acsUsers, uErr := client.UserIdentities.ListAcsUsers(context.Background(), &api.UserIdentitiesListAcsUsersRequest{
//     UserIdentityId: "c041aa50-6495-4d16-8dcf-86664bdee28d",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(acsUsers)
// return nil




// credentials, uErr := client.Acs.Credentials.List(context.Background(), &acs.CredentialsListRequest{
//     UserIdentityId: "c041aa50-6495-4d16-8dcf-86664bdee28d",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(credentials)
// return nil

// credentials, uErr := client.Acs.Credentials.List(context.Background(), acs.NewCredentialsListRequestFromCredentialsListRequestUserIdentityId(&acs.CredentialsListRequestUserIdentityId{
// 	UserIdentityId: "c041aa50-6495-4d16-8dcf-86664bdee28d",
// }))

// if uErr != nil {
// 	return uErr
// }

// fmt.Println(credentials)
// return nil



// _, uErr := client.Acs.Credentials.Delete(context.Background(), &acs.CredentialsDeleteRequest{
//     AcsCredentialId: "967c1fe0-fa8e-43a5-b7d1-3cfe1ffca31d",
// })

// if uErr != nil {
//     return uErr
// }

// return nil

// _, uErr := client.Acs.Credentials.Delete(context.Background(), &acs.CredentialsDeleteRequest{
//     AcsCredentialId: "2abb3708-92f1-4692-95bc-89fba36030fd",
// })

// if uErr != nil {
//     return uErr
// }

// return nil

// enrollmentAutomations, uErr := client.UserIdentities.EnrollmentAutomations.List(context.Background(), &useridentities.EnrollmentAutomationsListRequest{
//     UserIdentityId: "c041aa50-6495-4d16-8dcf-86664bdee28d",
// })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(enrollmentAutomations)
// return nil

// acsUser, uErr := client.Acs.Users.Get(
//     context.Background(),
//     &acs.UsersGetRequest{
//         AcsUserId: "d15565e5-d8d1-4e0d-b107-6082929fb31d",
//     },
// )

// if uErr != nil {
//     return uErr
// }

// Incorrect
// _, err := client.UserIdentities.AddAcsUser(context.Background(), &api.UserIdentitiesAddAcsUserRequest{
//     UserIdentityId: "f3dd17cd-4a23-41e1-8aac-1905ae05ad6d",
//     AcsUserId: &acsUser.acsUserId,
// })

// if err != nil {
//     return err
// }

// return nil

// thermostats, uErr := client.Thermostats.List(context.Background(), nil)

// if uErr != nil {
//     return uErr
// }

// fmt.Println(thermostats)
// return nil

// thermostat, uErr := client.Thermostats.Get(context.Background(), &api.ThermostatsGetRequest{
//       DeviceId: api.String("5ce2cd35-09b1-458c-bb08-51ee83c35be7"),
//   })

// if uErr != nil {
//     return uErr
// }

// fmt.Println(thermostat)
// return nil

// heat_attempt, uErr := client.Thermostats.Heat(context.Background(), &api.ThermostatsHeatRequest{
//   DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
//   HeatingSetPointCelsius: api.Float64(20),
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(heat_attempt)
// return nil

// action_attempt, uErr := client.ActionAttempts.Get(context.Background(), &api.ActionAttemptsGetRequest{
//   ActionAttemptId: "40dc817d-9ae0-4037-9d4a-736700ee467b",
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(action_attempt)
// return nil

// heat_cool_request, uErr := client.Thermostats.HeatCool(context.Background(), &api.ThermostatsHeatCoolRequest{
//   DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
//   HeatingSetPointCelsius: api.Float64(20),
//   CoolingSetPointCelsius: api.Float64(25),
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(heat_cool_request)
// return nil

// off_request, uErr := client.Thermostats.Off(context.Background(), &api.ThermostatsOffRequest{
//   DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(off_request)
// return nil
// }

// fan_on_request, uErr := client.Thermostats.SetFanMode(context.Background(), &api.ThermostatsSetFanModeRequest{
//   DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
//   FanMode: api.FanModeOn.Ptr(),
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(fan_on_request)
// return nil
// }


// heat_request, uErr := client.Thermostats.Heat(context.Background(), &api.ThermostatsHeatRequest{
//   DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
//   HeatingSetPointCelsius: api.Float64(20),
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(heat_request)

// // {
// //   "action_attempt": {
// //     "status": "pending",
// //     "action_type": "SET_HEAT",
// //     "action_attempt_id": "241e79cd-4bda-499f-8e2e-d7ae01d273cf",
// //     "result": null,
// //     "error": null
// //   },
// //   "ok": true
// // }

// fan_on_request, uErr := client.Thermostats.SetFanMode(context.Background(), &api.ThermostatsSetFanModeRequest{
//   DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
//   FanMode: api.FanModeOn.Ptr(),
// })

// if uErr != nil {
// return uErr
// }

// fmt.Println(fan_on_request)
// return nil

// // {
// //   "action_attempt": {
// //     "status": "pending",
// //     "action_type": "SET_FAN_MODE",
// //     "action_attempt_id": "1a6993af-4b00-4ca5-bacf-074164959878",
// //     "result": null,
// //     "error": null
// //   },
// //   "ok": true
// // }

// devices, err := client.Devices.List(
// 	context.Background(), &api.DevicesListRequest{
//     DeviceType: api.DeviceTypeNestThermostat.Ptr(),
//   },
// )
// if err != nil {
// 	return err
// }
// fmt.Println(devices)
// return nil

// devices, err := client.Devices.List(
// 	context.Background(), &api.DevicesListRequest{
//     DeviceType: api.DeviceTypeHoneywellThermostat.Ptr(),
//   },
// )
// if err != nil {
// 	return err
// }
// fmt.Println(devices)
// return nil

// // Create the user identity.
// response, uErr := client.UserIdentities.Create(context.Background(), &api.UserIdentitiesCreateRequest{
//     EmailAddress: api.String("jane_go3@example.com"),
// })

// if uErr != nil {
//     return uErr
// }

// // Launch the enrollment automation.
// client.UserIdentities.EnrollmentAutomations.Launch(context.Background(), &useridentities.EnrollmentAutomationsLaunchRequest{
//   // Use the AcsSystemId for the credential manager.
//   CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172",
//   UserIdentityId: response.UserIdentity.UserIdentityId,
//   // Automatically create a new credential manager user
//   // or specify the desired existing CredentialManagerAcsUserId.
//   CreateCredentialManagerUser: api.Bool(true),
// })

// // Create the client session.
// clientSession, uErr := client.ClientSessions.Create(context.Background(), &api.ClientSessionsCreateRequest{
//   UserIdentityIds: []string{response.UserIdentity.UserIdentityId},
// })

// // Use this token to launch your mobile controller.
// token := clientSession.Token
// fmt.Println("Token:", token)

// return nil

// acs_systems, uErr := client.Acs.Systems.List(
//   context.Background(), &acs.SystemsListRequest{},
// )

// acs_user, uErr := client.Acs.Users.Create(
//   context.Background(), &acs.UsersCreateRequest{
//     // AcsSystemId: "11111111-1111-1111-1111-111111111111",
//     AcsSystemId: "14a43ebe-a1a3-4f95-ba34-ffdc909f86d3",
//     // UserIdentityId: api.String("22222222-2222-2222-2222-222222222222"),
//     UserIdentityId: api.String("3cb62920-6a5e-4226-8db8-9e9c795f15a6"),
//     AcsAccessGroupIds: []string{"b1626096-1a2f-4de6-8bdc-f194e6c141ef"},
//     // AcsAccessGroupIds: []string{"44444444-4444-4444-4444-444444444444"},
//     FullName: api.String("Jane Doe"),
//     EmailAddress: api.String("jane@example.com"),
//     PhoneNumber: api.String("+15555550101"),
//   },
// )

// startsAt, err := time.Parse(time.RFC3339, "2024-03-01T10:40:00Z")
// endsAt, err := time.Parse(time.RFC3339, "2024-03-04T10:40:00Z")
// if err != nil {
//   return err
// }

// acs_user, uErr := client.Acs.Users.Create(
//     context.Background(), &acs.UsersCreateRequest{
//       AcsSystemId: "14a43ebe-a1a3-4f95-ba34-ffdc909f86d3",
//       UserIdentityId: api.String("3cb62920-6a5e-4226-8db8-9e9c795f15a6"),
//       AcsAccessGroupIds: []string{"b1626096-1a2f-4de6-8bdc-f194e6c141ef"},
//       FullName: api.String("Jane Doe"),
//       EmailAddress: api.String("jane@example.com"),
//       PhoneNumber: api.String("+15555550101"),
//       AccessSchedule: &acs.UsersCreateRequestAccessSchedule{
//         StartsAt: startsAt,
//         EndsAt: endsAt,
//       },
//     },
//   )

// acs_user, uErr := client.Acs.Entrances.ListCredentialsWithAccess


// acs_user, uErr := client.Acs.Users.Update(
//   context.Background(), &acs.UsersUpdateRequest{
//     // AcsUserId: "33333333-3333-3333-3333-333333333333",
//     AcsUserId: "8ba2ad9c-09c9-4921-979c-e031cedef346",
//     FullName: api.String("Jack Doe"),
//   },
// )

// _, uErr := client.Acs.Users.Delete(
//   context.Background(), &acs.UsersDeleteRequest{
//     // AcsUserId: string("33333333-3333-3333-3333-333333333333"),
//     AcsUserId: "7066c6d3-b946-46eb-b334-cb2de4091c52",
//   },
// )

// acs_users, uErr := client.Acs.Users.List(
//   context.Background(), &acs.UsersListRequest{
//     // AcsSystemId: api.String("11111111-1111-1111-1111-111111111111"),
//     AcsSystemId: api.String("14a43ebe-a1a3-4f95-ba34-ffdc909f86d3"),
//   },
// )

// add, uErr := client.Acs.Users.AddToAccessGroup(
//   context.Background(), &acs.UsersAddToAccessGroupRequest{
//     AcsUserId: string("29a5cebd-0d45-409e-93b1-ad97cf7a04f6"),
//     AcsAccessGroupId: string("44444444-4444-4444-4444-444444444444"),
//   },
// )

// remove, uErr := client.Acs.Users.RemoveFromAccessGroup(
//   context.Background(), &acs.UsersRemoveFromAccessGroupRequest{
//     AcsUserId: string("33333333-3333-3333-3333-333333333333"),
//     AcsAccessGroupId: string("44444444-4444-4444-4444-444444444444"),
//   },
// )

// acs_entrances, uErr := client.Acs.Entrances.List(
//   context.Background(), &acs.EntrancesListRequest{
//     // AcsSystemId: api.String("11111111-1111-1111-1111-111111111111"),
//     AcsSystemId: api.String("14a43ebe-a1a3-4f95-ba34-ffdc909f86d3"),
//   },
// )

// acs_entrance, uErr := client.Acs.Entrances.Get(
//   context.Background(), &acs.EntrancesGetRequest{
//     // AcsEntranceId: "55555555-5555-5555-5555-555555555555",
//     AcsEntranceId: "e961348a-2ffb-4a17-a7d2-943bf304d782",
//   },
// )

// access, uErr := client.Acs.Entrances.GrantAccess(
//   context.Background(), &acs.EntrancesGrantAccessRequest{
//     // AcsEntranceId: "55555555-5555-5555-5555-555555555555",
//     AcsEntranceId: "e961348a-2ffb-4a17-a7d2-943bf304d782",
//     // AcsUserId: "33333333-3333-3333-3333-333333333333",
//     AcsUserId: "29a5cebd-0d45-409e-93b1-ad97cf7a04f6",
//   },
// )

// startsAt, err := time.Parse(time.RFC3339, "2024-03-01T10:40:00Z")
// // if err != nil {
// //   return err
// // }
// endsAt, err := time.Parse(time.RFC3339, "2024-03-04T10:40:00Z")
// if err != nil {
//   return err
// }

// credential, uErr := client.Acs.Credentials.Create(
//   context.Background(), &acs.CredentialsCreateRequest{
//     // AcsUserId: "33333333-3333-3333-3333-333333333333",
//     AcsUserId: "0cc73a31-db4b-4b4e-a7ce-ada9b71ced15",
//     AllowedEntranceIds: {
//         // "55555555-5555-5555-5555-555555555555",
//         "e961348a-2ffb-4a17-a7d2-943bf304d782",
//         // "55555555-5555-5555-5555-000000000000",
//         "fb6565fa-f9c6-4f7e-899d-f7f061260c17",
//       },
//     // CredentialManagerAcsSystemId: api.String("88888888-8888-8888-8888-888888888888"),
//     CredentialManagerAcsSystemId: api.String("f43c0c38-ae6e-4a54-911d-8c802302eced"),
//     AccessMethod: "mobile_key",
//     IsMultiPhoneSyncCredential: api.Bool(true),
// 	  // StartsAt: api.Time(startsAt),
//     // EndsAt: api.Time(endsAt),
//   },
// )

// credential, uErr := client.Acs.Credentials.Create(
//   context.Background(), &acs.CredentialsCreateRequest{
//     // AcsUserId: "33333333-3333-3333-3333-333333333333",
//     AcsUserId: "b530cda9-bdc1-4c95-b44d-bf9a99711bbf",
//     AccessMethod: "code",
//     Code: api.String("824759"),
//   },
// );

// credential, uErr := client.Acs.Credentials.Create(
//   context.Background(), &acs.CredentialsCreateRequest{
//     // AcsUserId: "33333333-3333-3333-3333-333333333333",
//     AcsUserId: "b530cda9-bdc1-4c95-b44d-bf9a99711bbf",
//     AccessMethod: "card",
//     Code: api.String("123456"),
//   },
// );

// deletion, uErr := client.Acs.Credentials.Delete(
//   context.Background(), &acs.CredentialsDeleteRequest{
//     // acsCredentialId: "66666666-6666-6666-6666-666666666666",
//     AcsCredentialId: "73840f76-191f-40c9-b65b-1bfa77fcc7ee",
//   },
// );

// suspend, uErr := client.Acs.Users.Suspend(
//   context.Background(), &acs.UsersSuspendRequest{
//     // AcsUserId: "33333333-3333-3333-3333-333333333333",
//     AcsUserId: "b530cda9-bdc1-4c95-b44d-bf9a99711bbf",
//   },
// );

// unsuspend, uErr := client.Acs.Users.Unsuspend(
//   context.Background(), &acs.UsersUnsuspendRequest{
//     // AcsUserId: "33333333-3333-3333-3333-333333333333",
//     AcsUserId: "b530cda9-bdc1-4c95-b44d-bf9a99711bbf",
//   },
// );

// acs_system, uErr := client.Acs.Systems.Get(
//   context.Background(), &acs.SystemsGetRequest{
//     // AcsSystemId: "55555555-5555-5555-5555-555555555555",
//     AcsSystemId: "449c8955-4741-4c44-aa41-943c79a46368",
//   },
// )

// acs_access_groups, uErr := client.Acs.AccessGroups.List(
//   context.Background(), &acs.AccessGroupsListRequest{
//     AcsSystemId: api.String("449c8955-4741-4c44-aa41-943c79a46368"),
//     AcsUserId: api.String("412b7bd5-d6ca-4836-9b41-0c5a0ce360a1"),
//   },
// )

// acs_access_group, uErr := client.Acs.AccessGroups.Get(
//   context.Background(), &acs.AccessGroupsGetRequest{
//     AcsAccessGroupId: "d959202c-d9cc-4469-a053-74fb7d85b2fa",
//   },
// )

// add, uErr := client.Acs.Users.AddToAccessGroup(
//   context.Background(), &acs.UsersAddToAccessGroupRequest{
//     AcsUserId: "412b7bd5-d6ca-4836-9b41-0c5a0ce360a1",
//     AcsAccessGroupId: "d959202c-d9cc-4469-a053-74fb7d85b2fa",
//   },
// )

// remove, uErr := client.Acs.Users.RemoveFromAccessGroup(
//   context.Background(), &acs.UsersRemoveFromAccessGroupRequest{
//     AcsUserId: "412b7bd5-d6ca-4836-9b41-0c5a0ce360a1",
//     AcsAccessGroupId: "d959202c-d9cc-4469-a053-74fb7d85b2fa",
//   },
// )

// add, uErr := client.Acs.AccessGroups.AddUser(
//   context.Background(), &acs.AccessGroupsAddUserRequest{
//     AcsAccessGroupId: "d959202c-d9cc-4469-a053-74fb7d85b2fa",
//     AcsUserId: "412b7bd5-d6ca-4836-9b41-0c5a0ce360a1",
//   },
// )

// remove, uErr := client.Acs.AccessGroups.RemoveUser(
//   context.Background(), &acs.AccessGroupsRemoveUserRequest{
//     AcsAccessGroupId: "d959202c-d9cc-4469-a053-74fb7d85b2fa",
//     AcsUserId: "412b7bd5-d6ca-4836-9b41-0c5a0ce360a1",
//   },
// )

// acs_users, uErr := client.Acs.AccessGroups.ListUsers(
//   context.Background(), &acs.AccessGroupsListUsersRequest{
//     AcsAccessGroupId: "d959202c-d9cc-4469-a053-74fb7d85b2fa",
//   },
// )

// assign, uErr := client.Acs.Credentials.Assign(
//     context.Background(), &acs.CredentialsAssignRequest{
//       AcsUserId: "412b7bd5-d6ca-4836-9b41-0c5a0ce360a1",
//       AcsCredentialId: "15a42839-3517-40fe-ab07-17d78b410b23",
//     },
//   )

// acs_credentials, uErr := client.Acs.Credentials.List(
//     context.Background(), &acs.CredentialsListRequest{
//       AcsUserId: api.String("412b7bd5-d6ca-4836-9b41-0c5a0ce360a1"),
//       AcsSystemId: api.String("449c8955-4741-4c44-aa41-943c79a46368"),
//       UserIdentityId: api.String("3cb62920-6a5e-4226-8db8-9e9c795f15a6"),
//       IsMultiPhoneSyncCredential: api.Bool(true),
//     },
//   )

// acs_credential, uErr := client.Acs.Credentials.Get(
//     context.Background(), &acs.CredentialsGetRequest{
//       AcsCredentialId: "15a42839-3517-40fe-ab07-17d78b410b23",
//     },
//   )

// acs_credential, uErr := client.Acs.Credentials.Update(
//     context.Background(), &acs.CredentialsUpdateRequest{
//       AcsCredentialId: "15a42839-3517-40fe-ab07-17d78b410b23",
//       Code: "7890",
//     },
//   )

// acs_credential, uErr := client.Acs.Credentials.Unassign(
//     context.Background(), &acs.CredentialsUnassignRequest{
//       AcsUserId: "412b7bd5-d6ca-4836-9b41-0c5a0ce360a1",
//       AcsCredentialId: "15a42839-3517-40fe-ab07-17d78b410b23",
// },
//   )

// deletion, uErr := client.Acs.Credentials.Delete(
//   context.Background(), &acs.CredentialsDeleteRequest{
//     AcsCredentialId: "15a42839-3517-40fe-ab07-17d78b410b23",
//   },
// )

// if uErr != nil {
//   return uErr
// }
// fmt.Println(deletion)
// return nil

}
