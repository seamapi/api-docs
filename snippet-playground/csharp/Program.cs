using System.Collections;
using System.ComponentModel;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Security.AccessControl;
using Seam.Api;
using Seam.Client;
using Seam.Model;

// var r = new string(Enumerable.Range(0, 10).Select(_ => "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[new Random().Next(36)]).ToArray());

// var SEAM_API_KEY = "seam_test8yup_77ut771wVzFPcfhce9ti5Ccq";
var SEAM_API_KEY = "seam_testMyUj_6Exz7BVtFUM6GrHggvm9DFXm";

// Get a Seam Client
var seam = new SeamClient(
    // basePath: "https://connect.getseam.com",
    // apiToken: "seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy"
    // apiToken: "seam_test8yup_77ut771wVzFPcfhce9ti5Ccq"
    apiToken: SEAM_API_KEY

);
// var seam = new SeamClient(
//     // basePath: "https://connect.getseam.com",
//     apiToken: "seam_test8yup_77ut771wVzFPcfhce9ti5Ccq"
// );
// var seam = new SeamClient(
//     basePath: "https://connect.getseam.com",
//     // Specify PAT.
//     apiToken: "seam_at134EHBFs3_2YuxzbTCZ5EJZcHTzy5b2Z8u",
//     // Specify workspace ID.
//     workspaceId: "98feb997-ff3c-4320-a907-1585108b1c08"
// );

    // NOTE: in the future Console.WriteLine(device) will print
    // something pretty, but currently it doesn't print pretty
    // Console.WriteLine(device.Properties.Name);
    // foreach (var prop in device.GetProperties())
    // {
    //   Console.WriteLine(prop);
    // };

// Console.WriteLine(seam.Devices.List());
// var devices = seam.Devices.List();
// List<string> deviceIds = new() {
//   "30fd243b-3054-4384-a713-5487076a3826",
//   "9689dc30-77d8-4728-9968-b3abd0835f47"
// };
// var devices = seam.Devices.List(deviceIds: deviceIds);

// foreach (var device in devices)
// {
//   Console.WriteLine(device);
// }

// foreach (var device in seam.Devices.List(
  // deviceTypes: new() {Seam.Api.Devices.ListRequest.DeviceTypesEnum.MinutSensor, Seam.Api.Devices.ListRequest.DeviceTypesEnum.AugustLock}
  // includeIf: new() {"CanRemotelyUnlock"}
// )) {Console.WriteLine(device);};

// Console.WriteLine(seam.Devices.Get(deviceId: "13c59a88-7808-42d3-be0b-adb8f2f1d076"));

// // Confirm that the device can remotely lock.
// if (seam.Locks.Get(deviceId: "59112086-537a-49c0-96dc-ce74f5abfbd7").CanRemotelyLock == true) {
//   // Perform the lock operation.
//   seam.Locks.LockDoor(deviceId: "59112086-537a-49c0-96dc-ce74f5abfbd7");
//   // Console.WriteLine(seam.Locks.LockDoor(deviceId: "59112086-537a-49c0-96dc-ce74f5abfbd7"));
// }

// // Get the device.
// // Device device = seam.Locks.Get(deviceId: "11111111-1111-1111-1111-444444444444");
// Device device = seam.Locks.Get(deviceId: "59112086-537a-49c0-96dc-ce74f5abfbd7");
// // Confirm that the device supports online access codes.
// if (device.CanProgramOnlineAccessCodes == true) {
//   // Create the ongoing online access code.
//   seam.AccessCodes.Create(
//     deviceId: device.DeviceId,
//     name: "my ongoing code",
//     // code: "1234"
//     code: "5234"
//   );
// }

// if (device.Properties.HasDirectPower == true)
// {
//   Console.WriteLine("Power Source: Wired");
// }

// var deviceProviders = seam.Devices.ListDeviceProviders(providerCategory: Seam.Api.Devices.ListDeviceProvidersRequest.ProviderCategoryEnum.Stable);
// foreach (var deviceProvider in deviceProviders)
// {
//   Console.WriteLine(deviceProvider);
// }

// Device device = seam.Devices.Get("30fd243b-3054-4384-a713-5487076a3826");
// Console.WriteLine(device);

// SDK is missing Devices.Update!
// var deviceId = "30fd243b-3054-4384-a713-5487076a3826";
// var deviceUpdate = seam.Devices. (
//   deviceId: deviceId,
//   name: "my ongoing code",
//   code: "1234"
// );

// Console.WriteLine("Created access code ID: " + createdAccessCode.AccessCodeId);

// var unmanagedDevices = seam.UnmanagedDevices.List();

// foreach (var unmanagedDevice in unmanagedDevices)
// {
//   Console.WriteLine(unmanagedDevice);
// }

// var unmanagedDevice = seam.UnmanagedDevices.Get("882dd63f-db9b-4210-bac2-68372aa0aff7");
// Console.WriteLine(unmanagedDevice);

// SDK is missing UnmanagedDevices.Update!
// var deviceId = "30fd243b-3054-4384-a713-5487076a3826";
// var unmanagedDeviceUpdate = seam.UnmanagedDevices.Update(
//   deviceId: deviceId,
//   name: "my ongoing code",
//   code: "1234"
// );

// Console.WriteLine("Created access code ID: " + createdAccessCode.AccessCodeId);



// var attempt = seam.Locks.LockDoor("6aae9d08-fed6-4ca5-8328-e36849ab48fe");
// Type t = attempt.GetType();
// PropertyInfo[] props = t.GetProperties();
// foreach (var prop in props)
// {
//   Console.WriteLine(prop.Name + ": " + prop.GetValue(attempt));
// }

// var attempt = seam.Locks.UnlockDoor("6aae9d08-fed6-4ca5-8328-e36849ab48fe");
// Type t = attempt.GetType();
// PropertyInfo[] props = t.GetProperties();
// foreach (var prop in props)
// {
//   Console.WriteLine(prop.Name + ": " + prop.GetValue(attempt));
// }

// var attempt = seam.ActionAttempts.Get("114c135a-e7f4-4f22-80f9-0fb879f20543");
// Type t = attempt.GetType();
// PropertyInfo[] props = t.GetProperties();
// foreach (var prop in props)
// {
//   Console.WriteLine(prop.Name + ": " + prop.GetValue(attempt));
// }

// var attempt = seam.ActionAttempts.Get("f1428d39-7dbd-45bf-bb9f-cfc9815baec2");
// Type t = attempt.GetType();
// PropertyInfo[] props = t.GetProperties();
// foreach (var prop in props)
// {
//   Console.WriteLine(prop.Name + ": " + prop.GetValue(attempt));
// }

// var device = seam.Devices.Get("6aae9d08-fed6-4ca5-8328-e36849ab48fe");
// Console.WriteLine("Device ID: " + device.DeviceId);
// // Console.WriteLine("Device Name: " + device.Properties.Name);
// // Console.WriteLine("Locked: " + device.Properties.Locked);
// Console.WriteLine("Capabilities:");
// foreach (var capability in device.CapabilitiesSupported)
// {
//   Console.WriteLine(capability);
// }

// var device = seam.Devices.Get("882dd63f-db9b-4210-bac2-68372aa0aff7");
// Console.WriteLine("Device ID: " + device.DeviceId);
// Console.WriteLine("Capabilities:");
// foreach (var capability in device.CapabilitiesSupported)
// {
//   Console.WriteLine(capability);
// }
// Console.WriteLine("Supports online access codes: " + device.Properties.Online);

// foreach (object device in devices)
// {
//   Type t = device.GetType();
//   PropertyInfo[] props = t.GetProperties();

//   foreach (var prop in props)
//   {
//     var name = prop.Name;
//     var type = prop.GetValue(device).GetType();
//     if (prop.GetValue(device).GetType() is not System.Collections.Generic.List)
//     {
//       var value = prop.GetValue(device);
//       Console.WriteLine("{0} ({1}): {2}", name, type, value);
//     }
//     else
//     {
//       Console.Write(name + ": ");
//       var value = "";
//       var elements = prop.GetValue(device).GetType() as IList;
//       foreach (var item in elements)
//       {
//         Console.Write(item + " ");
//       }
//       Console.WriteLine();
//     }
//     // List<object> value = (List<object>)prop.GetValue(device);
//     // var val = (prop.GetValue(device).GetType() == List<>) ? : ;
//     // Console.WriteLine("{0}: {1}", name, type);
//     // Console.WriteLine("{0}: {1}", prop.Name, prop.GetValue(t));
//     // if (prop.GetIndexParameters() == );
//     // Console.WriteLine("{0} ({1}): {2}", prop.Name, prop.PropertyType.Name, prop.GetValue(device));
//     // Console.WriteLine("{0} ({1}): {2}", name, type, value);
//   }
//   Console.WriteLine();
// }

// var device = seam.Devices.Get("6aae9d08-fed6-4ca5-8328-e36849ab48fe");
//   Console.WriteLine("Device ID: " + device.DeviceId);
//   Console.WriteLine("Capabilities:");
//   foreach (var capability in device.CapabilitiesSupported)
//   {
//     Console.WriteLine(capability);
//   }


// var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
// var createdAccessCode = seam.AccessCodes.Create(
//   deviceId: deviceId,
//   name: "my ongoing code",
//   code: "1234"
// );

// Console.WriteLine("Created access code ID: " + createdAccessCode.AccessCodeId);

// var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
// var createdAccessCode = seam.AccessCodes.Create(
//   deviceId: deviceId,
//   name: "my time-bound code",
//   startsAt: "2025-01-01T16:00:00Z",
//   endsAt: "2025-01-22T12:00:00Z",
//   code: "2345"
// );

// Console.WriteLine("Created access code ID: " + createdAccessCode.AccessCodeId);

// var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
// var accessCodes = seam.AccessCodes.List(deviceId: deviceId);

// foreach (var accessCode in accessCodes)
// {
//   Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
//   Console.WriteLine("Type: " + accessCode.Type);
//   Console.WriteLine("Code: " + accessCode.Code);
//   Console.WriteLine();
// }

// List<string> accessCodeIds = new() {
//   "2928083e-4377-4467-ab33-c600ec48cdec",
//   "fe372cb9-1fa5-492f-9494-ea01c5558333"
// };
// var accessCodes = seam.AccessCodes.List(accessCodeIds: accessCodeIds);

// foreach (var accessCode in accessCodes)
// {
//   Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
//   Console.WriteLine("Type: " + accessCode.Type);
//   Console.WriteLine("Code: " + accessCode.Code);
//   Console.WriteLine();
// }

// var accessCode = seam.AccessCodes.Get(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");

// Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
// Console.WriteLine("Type: " + accessCode.Type);
// Console.WriteLine("Code: " + accessCode.Code);
// Console.WriteLine();

// var accessCodeId = "2928083e-4377-4467-ab33-c600ec48cdec";
// var updatedAccessCode = seam.AccessCodes.Update(
//   accessCodeId: accessCodeId,
//   name: "my updated code name",
//   startsAt: "2025-02-01T16:00:00Z",
//   endsAt: "2025-02-22T12:00:00Z",
//   code: "5432"
// );

// var accessCode = seam.AccessCodes.Get(accessCodeId: accessCodeId);

//   Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
//   Console.WriteLine("Name: " + accessCode.Name);
//   Console.WriteLine("Type: " + accessCode.Type);
//   Console.WriteLine("Starts at: " + accessCode.StartsAt);
//   Console.WriteLine("Ends at: " + accessCode.EndsAt);
//   Console.WriteLine("Code: " + accessCode.Code);

// var accessCode = seam.AccessCodes.Get(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");

// Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
// Console.WriteLine("Device ID: " + accessCode.DeviceId);
// Console.WriteLine("Name: " + accessCode.Name);
// Console.WriteLine("Type: " + accessCode.Type);

// var accessCodeId = "fe372cb9-1fa5-492f-9494-ea01c5558333";
// var updatedAccessCode = seam.AccessCodes.Update(
//   accessCodeId: accessCodeId,
//   startsAt: "2025-02-01T16:00:00Z",
//   endsAt: "2025-02-22T12:00:00Z"
// );

// Type t = updatedAccessCode.GetType();
// PropertyInfo[] props = t.GetProperties();
// foreach (var prop in props)
// {
//   Console.WriteLine(prop.Name + ": " + prop.GetValue(updatedAccessCode));
// }

// var accessCode = seam.AccessCodes.Get(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");

// Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
// Console.WriteLine("Device ID: " + accessCode.DeviceId);
// Console.WriteLine("Name: " + accessCode.Name);
// Console.WriteLine("Type: " + accessCode.Type);

// var accessCode = seam.AccessCodes.Get(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");

// Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
// Console.WriteLine("Device ID: " + accessCode.DeviceId);
// Console.WriteLine("Name: " + accessCode.Name);
// Console.WriteLine("Type: " + accessCode.Type);

// var accessCodeId = "fe372cb9-1fa5-492f-9494-ea01c5558333";
// var updatedAccessCode = seam.AccessCodes.Update(
//   accessCodeId: accessCodeId,
//   type: Seam.Api.AccessCodes.UpdateRequest.TypeEnum.Ongoing
// );

// Type t = updatedAccessCode.GetType();
// PropertyInfo[] props = t.GetProperties();
// foreach (var prop in props)
// {
//   Console.WriteLine(prop.Name + ": " + prop.GetValue(updatedAccessCode));
// }

// var accessCode = seam.AccessCodes.Get(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");

// Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
// Console.WriteLine("Device ID: " + accessCode.DeviceId);
// Console.WriteLine("Name: " + accessCode.Name);
// Console.WriteLine("Type: " + accessCode.Type);
// Console.WriteLine("Starts at: " + accessCode.StartsAt);
// Console.WriteLine("Ends at: " + accessCode.EndsAt);

// var attempt = seam.AccessCodes.Delete(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");

// Type t = attempt.GetType();
// PropertyInfo[] props = t.GetProperties();
// foreach (var prop in props)
// {
//   Console.WriteLine(prop.Name + ": " + prop.GetValue(attempt));
// }

// try
// {
//   seam.AccessCodes.Get(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");
// }
// catch (Exception e)
// {
//   Console.WriteLine(e.Message);
// }

// var device = seam.Devices.Get(deviceId: "ed4bb795-f29f-43e5-bc0f-35f69f9141b5");
// Console.WriteLine("Device ID: " + device.DeviceId);
// Console.WriteLine("Type: " + device.DeviceType);
// Console.WriteLine("Capabilities supported:");
// foreach (var capability in device.CapabilitiesSupported)
// {
//   Console.WriteLine(capability);
// }
// Console.WriteLine("Supported code lengths:");
// if (device.Properties.SupportedCodeLengths is not null)
// {
//   foreach (var supportedCodeLength in device.Properties.SupportedCodeLengths)
//   {
//     Console.WriteLine(supportedCodeLength);

//   }
// }
// Console.WriteLine("Code constraints:");
// if (device.Properties.CodeConstraints is not null)
// {
//   foreach (var codeConstraint in device.Properties.CodeConstraints)
//   {
//     Console.WriteLine(codeConstraint);
//   }
// }
// Console.WriteLine("Supports backup access code pool: " + device.Properties.SupportsBackupAccessCodePool);

// var device = seam.Devices.Get(deviceId: "ed4bb795-f29f-43e5-bc0f-35f69f9141b5");
// var device = seam.Devices.Get(deviceId: "b7d5b9d4-c293-4237-baab-0f4f75e6b80a");
// Console.WriteLine("Device ID: " + device.DeviceId);
// Console.WriteLine("Type: " + device.DeviceType);
// Console.WriteLine("Max. active codes supported: " + device.Properties.MaxActiveCodesSupported);

// var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
// var createdAccessCode = seam.AccessCodes.Create(
//   deviceId: deviceId,
//   name: "my ongoing code",
//   allowExternalModification: true
// );

// Console.WriteLine("Created access code ID: " + createdAccessCode.AccessCodeId);
// Console.WriteLine("Allow external modification: " + createdAccessCode.IsExternalModificationAllowed);

// var accessCode = seam.AccessCodes.Get(accessCodeId: "65f4a1d3-5f3a-45a4-a6b7-372c7f16c007");

// Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
// Console.WriteLine("Errors:");
// Console.WriteLine(accessCode.Errors);
// Console.WriteLine("Warnings:");
// Console.WriteLine(accessCode.Warnings);

// var device = seam.Devices.Get(deviceId: "6aae9d08-fed6-4ca5-8328-e36849ab48fe");
// Console.WriteLine("Device ID: " + device.DeviceId);
// Console.WriteLine("Supports backup access code pool: " + device.Properties.SupportsBackupAccessCodePool);

// var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
// var createdAccessCode = seam.AccessCodes.Create(
//   deviceId: deviceId,
//   name: "my time-bound code",
//   startsAt: "2025-01-01T16:00:00Z",
//   endsAt: "2025-01-22T12:00:00Z",
//   useBackupAccessCodePool: true
// );

// Console.WriteLine("Created access code ID: " + createdAccessCode.AccessCodeId);
// Console.WriteLine("Is backup access code available: " + createdAccessCode.IsBackupAccessCodeAvailable);

// var accessCode = seam.AccessCodes.Get(accessCodeId: "4ea6c172-cff7-4502-a766-f9293f36cba5");
// Console.WriteLine("Created access code ID: " + accessCode.AccessCodeId);
// Console.WriteLine("Is backup access code available: " + accessCode.IsBackupAccessCodeAvailable);

// var backupAccessCode = seam.AccessCodes.PullBackupAccessCode(accessCodeId: "4ea6c172-cff7-4502-a766-f9293f36cba5");
// Console.WriteLine("Backup access code ID: " + backupAccessCode.AccessCodeId);
// Console.WriteLine("Device ID: " + backupAccessCode.DeviceId);
// Console.WriteLine("Name: " + backupAccessCode.Name);
// Console.WriteLine("Code: " + backupAccessCode.Code);
// Console.WriteLine("Type: " + backupAccessCode.Type);
// Console.WriteLine("Status: " + backupAccessCode.Status);
// Console.WriteLine("Starts at: " + backupAccessCode.StartsAt);
// Console.WriteLine("Ends at: " + backupAccessCode.EndsAt);
// Console.WriteLine("Is backup: " + backupAccessCode.IsBackup);
// Console.WriteLine("Is backup access code available: " + backupAccessCode.IsBackupAccessCodeAvailable);

// var backupAccessCode = seam.AccessCodes.PullBackupAccessCode(accessCodeId: "4ea6c172-cff7-4502-a766-f9293f36cba5");
// Type t = backupAccessCode.GetType();
// foreach (var property in t.GetProperties())
// {
//   Console.WriteLine(property.Name + ": " + property.GetValue(backupAccessCode));
// }

// var unmanagedCodes = seam.UnmanagedAccessCodes.List(deviceId: "374d3ee2-5e5d-4141-b828-6c2fa458212f");
// foreach (var unmanagedCode in unmanagedCodes)
// {
//   Console.WriteLine("Access code ID: " + unmanagedCode.AccessCodeId);
//   Console.WriteLine("Is managed: " + unmanagedCode.IsManaged);
// }
// Type t = unmanagedCodes.GetType();
// foreach (var property in t.GetProperties())
// {
//   Console.WriteLine(property.Name + ": " + property.GetValue(unmanagedCodes));
// }

// var attempt = seam.UnmanagedAccessCodes.ConvertToManaged(accessCodeId: "449b03e6-1c6f-4ff3-b055-b9cf8146d2b0");

// Type t = attempt.GetType();
// PropertyInfo[] props = t.GetProperties();
// foreach (var prop in props)
// {
//   Console.WriteLine(prop.Name + ": " + prop.GetValue(attempt));
// }

//////////////////////////////////////////////////////////////////////////////////

// Device thermostat = seam.Thermostats.Get(deviceId: "518f692b-f865-4590-8c3e-3849e9984c75");
// Console.WriteLine(thermostat);

// var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
// ClimateSettingSchedule climateSettingSchedule = seam.ClimateSettingSchedulesThermostats.Create(
//       deviceId: deviceId,
//       name: "Guest Stay 3",
//       scheduleStartsAt: "2023-12-20T15:00:00.000Z",
//       scheduleEndsAt: "2023-12-29T11:00:00.000Z",
//       hvacModeSetting: Seam.Api.ClimateSettingSchedulesThermostats.CreateRequest.HvacModeSettingEnum.HeatCool,
//       coolingSetPointFahrenheit: 78,
//       heatingSetPointFahrenheit: 65,
//       manualOverrideAllowed: true
//       );
// Console.WriteLine(climateSettingSchedule);

// var climateSettingScheduleId = "b7d5cc0c-defc-4af1-9448-85b96aff5fd6";
// ClimateSettingSchedule updatedSchedule = seam.ClimateSettingSchedulesThermostats.Update(
//       climateSettingScheduleId: climateSettingScheduleId,
//       scheduleEndsAt: "2023-12-18T11:00:00.000Z",
//       hvacModeSetting: Seam.Api.ClimateSettingSchedulesThermostats.UpdateRequest.HvacModeSettingEnum.HeatCool,
//       coolingSetPointFahrenheit: 75,
//       heatingSetPointFahrenheit: 65
// );
// Console.WriteLine(updatedSchedule);

// var deletion = seam.ClimateSettingSchedulesThermostats.Delete(climateSettingScheduleId: "ef800068-9e0a-4a76-97f6-7e54b8b22bd2");

// Console.WriteLine(deletion);

// try
// {
//   seam.ClimateSettingSchedulesThermostats.Get(climateSettingScheduleId: "ef800068-9e0a-4a76-97f6-7e54b8b22bd2");
// }
// catch (Exception e)
// {
//   Console.WriteLine(e.Message);
// }



// List<ClimateSettingSchedule> climateSettingSchedules = seam.ClimateSettingSchedulesThermostats.List(deviceId: "518f692b-f865-4590-8c3e-3849e9984c75");
// foreach (ClimateSettingSchedule climateSettingSchedule in climateSettingSchedules)
// {
//   Console.WriteLine(climateSettingSchedule);
// }

// ClimateSettingSchedule climateSettingSchedule = seam.ClimateSettingSchedulesThermostats.Get(climateSettingScheduleId: "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7");
// Console.WriteLine(climateSettingSchedule);

// var thermostats = seam.Thermostats.List();
// foreach (var thermostat in thermostats)
// {
//   Console.WriteLine(thermostat);
// }

// Device thermostat = seam.Thermostats.Get(deviceId: "518f692b-f865-4590-8c3e-3849e9984c75");
// Console.WriteLine(thermostat);




// var deviceId = "98dc7c66-045d-49cb-a62b-4bb431b0a9fa";
// var noiseThresholdAttempt = seam.NoiseThresholdsNoiseSensors.Create(
//   deviceId: deviceId,
//   startsDailyAt: "20:00:00[America/Los_Angeles]",
//   endsDailyAt: "06:00:00[America/Los_Angeles]",
//   noiseThresholdDecibels: 70
// );
// Type t = noiseThresholdAttempt.GetType();
// PropertyInfo[] props = t.GetProperties();
// foreach (var prop in props)
// {
//   Console.WriteLine(prop.Name + ": " + prop.GetValue(noiseThresholdAttempt));
// }

// var noiseThresholdAttempt = seam.ActionAttempts.Get("eb611597-64d2-4b1a-995b-fb00361922c6");
// Type t = noiseThresholdAttempt.GetType();
// PropertyInfo[] props = t.GetProperties();
// foreach (var prop in props)
// {
//   Console.WriteLine(prop.Name + ": " + prop.GetValue(noiseThresholdAttempt));
// }

// var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
// var createdAccessCode = seam.AccessCodes.Create(
//   deviceId: deviceId,
//   name: "my time-bound code",
//   startsAt: "2025-01-01T16:00:00Z",
//   endsAt: "2025-01-22T12:00:00Z",
//   code: "2345"
// );

// Console.WriteLine("Created access code ID: " + createdAccessCode.AccessCodeId);

// var userId = "user1";
// var customMetadata = new Dictionary<string, string>()
// {
//   {"id", userId}
// };

// var createdConnectWebview = seam.ConnectWebviews.Create(
//   providerCategory: Seam.Api.ConnectWebviews.CreateRequest.ProviderCategoryEnum.Stable,
//   customMetadata: customMetadata
// );

// Console.WriteLine(createdConnectWebview);

// List<Seam.Api.ConnectWebviews.CreateRequest.AcceptedProvidersEnum> acceptedProviders = new() {
//   Seam.Api.ConnectWebviews.CreateRequest.AcceptedProvidersEnum.August,
//   Seam.Api.ConnectWebviews.CreateRequest.AcceptedProvidersEnum.Schlage
// };

// var createdConnectWebview = seam.ConnectWebviews.Create(
//   acceptedProviders: acceptedProviders
// );

// Console.WriteLine(createdConnectWebview);

// var connectWebview = seam.ConnectWebviews.Create(
//   acceptedProviders: new() {Seam.Api.ConnectWebviews.CreateRequest.AcceptedProvidersEnum.FourSuites}
// );

// Console.WriteLine(connectWebview.LoginSuccessful); // False

// // Use the Connect Webview URL to display the
// // Connect Webview authorization flow to your user.
// Console.WriteLine(connectWebview.Url);

// var connectWebviewId = "44912603-23e8-4126-8f02-29c875875a64";
// var updatedConnectWebview = seam.ConnectWebviews.Get(
//   // connectWebviewId: connectWebview.connectWebviewId
//   connectWebviewId: connectWebviewId
// );

// Console.WriteLine(updatedConnectWebview.LoginSuccessful); // True

// var createdConnectWebview = seam.ConnectWebviews.Create(
//   customRedirectUrl: "https://example.com/redirect",
//   customRedirectFailureUrl: "https://example.com/failure-redirect",
//   providerCategory: Seam.Api.ConnectWebviews.CreateRequest.ProviderCategoryEnum.Stable,
//   automaticallyManageNewDevices: true,
//   waitForDeviceCreation: true
// );

// Console.WriteLine(createdConnectWebview);

// foreach (var connectedAccount in seam.ConnectedAccounts.List())
// {
//   Console.WriteLine(connectedAccount);
// }

// var customMetadata = new Dictionary<string, string>()
// {
//   {"internal_account_id", "user-1"}
// };

// // Retrieve all devices, filtered by manufacturer,
// // which is one of several filters that list() supports.
// // var all4suitesLocks = seam.Devices.List(manufacturer: Seam.Api.Devices.ListRequest.ManufacturerEnum.FourSuites);
// var all4suitesLocks = seam.Devices.List(
//   // manufacturer: Seam.Api.Devices.ListRequest.ManufacturerEnum.Yale
//   manufacturer: Seam.Api.Devices.ListRequest.ManufacturerEnum.August
// );

// // Select the first device as an example.
// Device someLock = all4suitesLocks[0];

// // Inspect specific properties.
// Console.WriteLine(someLock.Properties.Online); // true
// Console.WriteLine(someLock.Properties.Locked); // true

// // View the entire returned device object.
// Console.WriteLine(someLock);

// // Confirm that the device can remotely unlock.
// if (someLock.CanRemotelyUnlock == true) {
//   // Perform the unlock operation
//   // and return an action attempt.
//   ActionAttempt actionAttempt = seam.Locks.UnlockDoor(deviceId: someLock.DeviceId);
//   Console.WriteLine(actionAttempt);
// }

// System.Threading.Thread.Sleep(20000);

// // Get the device by ID.
// var updatedLock = seam.Devices.Get(
//   deviceId: someLock.DeviceId
// );

// // Inspect the locked property to confirm
// // that the unlock operation was successful.
// Console.WriteLine(updatedLock.Properties.Locked); // false

// // Confirm that the device supports online access codes.
// if (updatedLock.CanProgramOnlineAccessCodes == true) {
//   // Create an ongoing online access code.
//   seam.AccessCodes.Create(
//     deviceId: updatedLock.DeviceId,
//     name: "my ongoing code",
//     code: "1234"
//   );
//   // Create a time-bound online access code.
//   seam.AccessCodes.Create(
//     deviceId: updatedLock.DeviceId,
//     name: "my time-bound code",
//     startsAt: "2025-01-01T16:00:00Z",
//     endsAt: "2025-01-22T12:00:00Z",
//     code: "2345"
//   );
//   // List all access codes for this device.
//   var accessCodes = seam.AccessCodes.List(
//     deviceId: updatedLock.DeviceId
//   );
//   foreach (var accessCode in accessCodes)
//   {
//     Console.WriteLine(accessCode);
//   }
// }


// // Step 1:
// // Create the new user on the Latch ACS.
// // janeUser is a UserIdentity that represents
// // a user within your set of app users.
// AcsUser buildingAResident = seam.UsersAcs.Create(
//   acsSystemId: "11111111-1111-1111-1111-111111111111",
//   userIdentityId: janeUser.userIdentityId,
//   fullName: "Jane Doe",
//   emailAddress: "jane@example.com"
// );

// // Step 2:
// // Create a PIN code for each door for the ACS user.
// foreach (AcsEntrance entrance in entrances)
// {
//   AcsCredential credential = seam.CredentialsAcs.Create(
//     acsUserId: buildingAResident.acsUserId,
//     // Use either acsUserId or userIdentityId.
//     userIdentityId: janeUser.userIdentityId,
//     accessMethod: "code",
//     allowedAcsEntranceIds: new List<string>
//     {
//       // You must specify only one entrance per PIN code.
//       entrance.acsEntranceId
//     },
//     startsAt: "2024-07-13T16:50:42Z",
//     endsAt: "2024-07-18T16:50:42Z"
//   );

//   Console.WriteLine(credential);
// }


// var buildingA = seam.SystemsAcs.Get(
//   acs_system_id: "f4f660da-c96a-4cf6-9f81-507ff4772b30"
// );

// var entrances = seam.EntrancesAcs.List(
//   acs_system_id: "f4f660da-c96a-4cf6-9f81-507ff4772b30"
// );

// // Step 1:
// // Create a user identity that corresponds to your user's app account.
// var janeUser = seam.UserIdentities.Create(
//   emailAddress: "jane6@example.com"
// );

// // Step 2:
// // Retrieve a credential manager.
// var latchCredentialManager = seam.SystemsAcs
//   .ListCompatibleCredentialManagerAcsSystems(
//     acsSystemId: buildingA.acsSystemId
//   )["acs_systems"][0];

// // Step 3:
// // Set up an enrollment automation for the user identity, to enable mobile keys.
// seam.UserIdentities.EnrollmentAutomations.Launch(
//   userIdentityId: janeUser.userIdentityId,
//   createCredentialManagerUser: true,
//   credentialManagerAcsSystemId: latchCredentialManager.acsSystemId
// );

// // Step 4:
// // Create an ACS user on the Latch ACS
// // or assign the ACS user to the user identity.
// AcsUser buildingAResident = seam.UsersAcs.Create(
//   // To associate the ACS user with a user identity,
//   // include the userIdentityId.
//   // Resources that you create for this ACS user
//   // are available under the associated user identity.
//   userIdentityId: janeUser.userIdentityId,
//   acsSystemId: buildingA.acsSystemId,
//   fullName: "Jane Doe",
//   emailAddress: "jane@example.com"
// );

// // Step 5:
// // Create a mobile key for each door for the ACS user.
// foreach (AcsEntrance entrance in entrances)
// {
//   AcsCredential mobileKey = seam.CredentialsAcs.Create(
//     acsUserId: buildingAResident.acsUserId,
//     isMultiPhoneSyncCredential: true,
//     accessMethod: "mobile_key",
//     allowedAcsEntranceIds: new List<string>
//     {
//       // You must specify only one entrance per mobile key.
//       entrance.acsEntranceId
//     },
//     startsAt: "2024-07-13T16:50:42Z",
//     endsAt: "2024-07-18T16:50:42Z"
//   );

//   Console.WriteLine(mobileKey);
// }



// var devices = seam.Devices.List(
//   // customMetadataHas: customMetadata
// );

// foreach (var device in devices)
// {
//   Console.WriteLine(device);
// }

// var customMetadata = new Dictionary<string, string>()
// {
//   {"internal_account_id", "user-1"}
// };

// var connectedAccountUpdate = seam.ConnectedAccounts.Update(
//   connectedAccountId: "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
//   automaticallyManageNewDevices: true
//   // customMetadata: customMetadata
// );

// Console.WriteLine(connectedAccountUpdate);

// var customMetadata = new Dictionary<string, string>()
// {
//   {"internal_account_id", "user-1"}
// };

// var deviceUpdate = seam.Devices.Update(
//   deviceId: "30fd243b-3054-4384-a713-5487076a3826",
//   customMetadata: customMetadata
// );

// Console.WriteLine(deviceUpdate);

// Console.WriteLine(seam.Devices.Get(deviceId: "f7a7fb02-9277-4354-8dd1-28e2d016a7a9"));

// var device = seam.Devices.Get(deviceId: "36cf1a96-196d-41b0-9804-88154387f1f9");
// Console.WriteLine("Online: " + device.Properties.Online);

// var device_connected_events = seam.Events.List(
//     deviceId: "36cf1a96-196d-41b0-9804-88154387f1f9",
//     eventType: Seam.Api.Events.ListRequest.EventTypeEnum.DeviceConnected,
//     since: "2024-01-01T00:00:00Z"
// );
// foreach (var device_connected_event in device_connected_events)
// {
//   Console.WriteLine(device_connected_event);
// }

// var device = seam.Devices.Get(deviceId: "c2cc3831-f347-444e-b83b-d1f14dbb5893");
// var device = seam.Devices.Get(deviceId: "36cf1a96-196d-41b0-9804-88154387f1f9");
// if (device.Properties.HasDirectPower == true)
// {
//   Console.WriteLine("Power Source: Wired");
// } else {
//   Console.WriteLine("Power Source: Battery-powered");
//   if (device.Properties.Battery != null)
//   {
//     Console.WriteLine("Battery Level: " + device.Properties.Battery.Level);
//     Console.WriteLine("Battery Status: " + device.Properties.Battery.Status);
//   }
// }

// seam.SystemsAcs.List();

// seam.UsersAcs.Create(
//   acsSystemId: "11111111-1111-1111-1111-111111111111",
//   userIdentityId: "22222222-2222-2222-2222-222222222222",
//   fullName: "Jane Doe",
//   emailAddress: "jane@example.com",
//   phoneNumber: "+15555550101"
// );

// seam.UsersAcs.Create(
//   acsSystemId: "14a43ebe-a1a3-4f95-ba34-ffdc909f86d3",
//   userIdentityId: "3cb62920-6a5e-4226-8db8-9e9c795f15a6",
//   acsAccessGroupIds: new List<string>(new string[] {"b1626096-1a2f-4de6-8bdc-f194e6c141ef"}),
//   fullName: "Jane Doe",
//   emailAddress: "jane@example.com",
//   phoneNumber: "+15555550101",
//   accessSchedule: new Dictionary<string, string>()
//     {
//       {"starts_at", "2024-03-01T10:40:00Z"},
//       {"ends_at", "2024-03-04T10:40:00Z"}
//     }
// );


// seam.UsersAcs.Update(
//   // acsUserId: "33333333-3333-3333-3333-333333333333",
//   acsUserId: "ac0b10d4-b37c-4104-8179-bb3effae917e",
//   fullName: "John Doe"
// );

// seam.UsersAcs.AddToAccessGroup(
//   // acsUserId: "33333333-3333-3333-3333-333333333333",
//   acsUserId: "b530cda9-bdc1-4c95-b44d-bf9a99711bbf",
//   // acsAccessGroupId: "44444444-4444-4444-4444-444444444444"
//   acsAccessGroupId: "b1626096-1a2f-4de6-8bdc-f194e6c141ef"
// );

// seam.UsersAcs.RemoveFromAccessGroup(
//   // acsUserId: "33333333-3333-3333-3333-333333333333",
//   acsUserId: "b530cda9-bdc1-4c95-b44d-bf9a99711bbf",
//   // acsAccessGroupId: "44444444-4444-4444-4444-444444444444"
//   acsAccessGroupId: "b1626096-1a2f-4de6-8bdc-f194e6c141ef"
// );

// seam.EntrancesAcs.List(
//   acsSystemId: "11111111-1111-1111-1111-111111111111"
// );

// seam.EntrancesAcs.Get(
//   acsEntranceId: "55555555-5555-5555-5555-555555555555"
// );

// seam.EntrancesAcs.GrantAccess(
//   // acsEntranceId: "55555555-5555-5555-5555-555555555555",
//   acsEntranceId: "e961348a-2ffb-4a17-a7d2-943bf304d782",
//   // acsUserId: "33333333-3333-3333-3333-333333333333"
//   acsUserId: "ff44664d-e6ae-4cb4-a9a1-73a8abe6a405"
// );

// seam.CredentialsAcs.Create(
//   acsUserId: "33333333-3333-3333-3333-333333333333",
//   allowedEntranceIds: new List<string>
//     {
//       "55555555-5555-5555-5555-555555555555",
//       "55555555-5555-5555-5555-000000000000"
//     },
//   credentialManagerAcsSystemId: "88888888-8888-8888-8888-888888888888",
//   accessMethod: "mobile_key",
//   isMultiPhoneSyncCredential: true,
//   startsAt: "2024-03-01T10:40:00Z",
//   endsAt: "2024-03-04T10:40:00Z",
//   ...
// );

// seam.CredentialsAcs.Delete(
//   // acsCredentialId: "66666666-6666-6666-6666-666666666666"
//   acsCredentialId: "caf7adc0-9656-49fc-9da6-4d9b132927ea"
// );

// seam.UsersAcs.Suspend(
//   // acsUserId: "33333333-3333-3333-3333-333333333333"
//   acsUserId: "ff44664d-e6ae-4cb4-a9a1-73a8abe6a405"
// );

seam.UsersAcs.Unsuspend(
  // acsUserId: "33333333-3333-3333-3333-333333333333"
  acsUserId: "ff44664d-e6ae-4cb4-a9a1-73a8abe6a405"
);


// Console.WriteLine(seam.Devices.List(connectedAccountIds: new List<string> {"ebb67664-c6c0-4a40-9955-5d9b25af8a08", "63f3d878-58b0-46f6-a066-7be9d824b688"}));

// var connectedAccountUpdate = seam.ConnectedAccounts.Update(
//   connectedAccountId: "35ac4d12-2365-48d9-8d83-979ac3c90a04",
//   customMetadata: new Dictionary<string, string>()
//     {
//       {"internal_account_id", "user-1"}
//     }
// );

// var devices = seam.Devices.List(manufacturer: Seam.Api.Devices.ListRequest.ManufacturerEnum.August);
// foreach (var device in devices)
// {
// Console.WriteLine(device);
// };

// Console.WriteLine(seam.AcsSystems.List());

// Console.WriteLine(seam.AcsSystems.Get(
//   acsSystemId: "11111111-1111-1111-1111-111111111111"
// ));

// Console.WriteLine(seam.Devices.List(
//   connectedAccountIds: new List<string>(new string[] {"63f3d878-58b0-46f6-a066-7be9d824b688"})
// ));

// seam.SystemsAcs.ListCompatibleCredentialManagerAcsSystems(
//   acsSystemId: "11111111-1111-1111-1111-111111111111"
// );
