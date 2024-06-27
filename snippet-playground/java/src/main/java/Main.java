import java.io.Console;
import java.util.Random;
import java.util.*;
import com.seam.api.Seam;
import com.seam.api.types.Device;
import com.seam.api.types.AccessCode;
import com.seam.api.types.ActionAttempt;
import com.seam.api.types.AccessCodesUpdateRequestType;
import com.seam.api.types.UnmanagedListResponseAccessCodesItem;
import com.seam.api.types.ThermostatsHeatResponse;
import com.seam.api.types.ThermostatsUpdateRequestDefaultClimateSetting;
import com.seam.api.types.ClimateSettingSchedule;
import com.seam.api.types.HvacModeSetting;
// import com.seam.api.types.Thermostat;
import com.seam.api.types.ClimateSettingSchedulesCreateResponse;
import com.seam.api.types.NoiseThreshold;
import com.seam.api.types.ConnectWebview;
import com.seam.api.types.CustomMetadataValue;
import com.seam.api.types.AcceptedProvider;
import com.seam.api.types.ProviderCategory;
import com.seam.api.types.DeviceType;
import com.seam.api.types.Manufacturer;
import com.seam.api.types.SelectionMode;
import com.seam.api.types.DevicesListDeviceProvidersRequestProviderCategory;
import com.seam.api.types.ConnectedAccount;
import com.seam.api.types.EventsListRequestEventType;
import com.seam.api.resources.devices.requests.DevicesGetRequest;
import com.seam.api.resources.devices.requests.DevicesListRequest;
import com.seam.api.resources.locks.requests.LocksGetRequest;
import com.seam.api.resources.locks.requests.LocksLockDoorRequest;
import com.seam.api.resources.locks.requests.LocksUnlockDoorRequest;
import com.seam.api.resources.actionattempts.requests.ActionAttemptsGetRequest;
import com.seam.api.resources.actionattempts.requests.ActionAttemptsListRequest;
import com.seam.api.resources.accesscodes.requests.AccessCodesCreateRequest;
import com.seam.api.resources.accesscodes.requests.AccessCodesListRequest;
import com.seam.api.resources.accesscodes.requests.AccessCodesGetRequest;
import com.seam.api.resources.accesscodes.requests.AccessCodesUpdateRequest;
import com.seam.api.resources.accesscodes.requests.AccessCodesDeleteRequest;
import com.seam.api.resources.accesscodes.requests.AccessCodesPullBackupAccessCodeRequest;
import com.seam.api.resources.accesscodes.unmanaged.requests.UnmanagedListRequest;
import com.seam.api.resources.accesscodes.unmanaged.requests.UnmanagedGetRequest;
import com.seam.api.resources.accesscodes.unmanaged.requests.UnmanagedConvertToManagedRequest;
import com.seam.api.resources.accesscodes.unmanaged.requests.UnmanagedDeleteRequest;
import com.seam.api.resources.thermostats.requests.ThermostatsHeatRequest;
import com.seam.api.resources.thermostats.requests.ThermostatsListRequest;
import com.seam.api.resources.thermostats.requests.ThermostatsGetRequest;
import com.seam.api.resources.thermostats.requests.ThermostatsUpdateRequest;
import com.seam.api.resources.thermostats.requests.ThermostatsSetFanModeRequest;
import com.seam.api.resources.thermostats.climatesettingschedules.requests.ClimateSettingSchedulesCreateRequest;
import com.seam.api.resources.thermostats.climatesettingschedules.requests.ClimateSettingSchedulesListRequest;
import com.seam.api.resources.thermostats.climatesettingschedules.requests.ClimateSettingSchedulesGetRequest;
import com.seam.api.resources.thermostats.climatesettingschedules.requests.ClimateSettingSchedulesUpdateRequest;
import com.seam.api.resources.thermostats.climatesettingschedules.requests.ClimateSettingSchedulesDeleteRequest;
import com.seam.api.resources.noisesensors.noisethresholds.requests.NoiseThresholdsCreateRequest;
import com.seam.api.resources.connectwebviews.requests.ConnectWebviewsCreateRequest;
import com.seam.api.resources.connectwebviews.requests.ConnectWebviewsGetRequest;
import com.seam.api.resources.devices.requests.DevicesListDeviceProvidersRequest;
import com.seam.api.resources.devices.requests.DevicesUpdateRequest;
import com.seam.api.resources.devices.unmanaged.requests.UnmanagedUpdateRequest;
import com.seam.api.resources.connectedaccounts.requests.ConnectedAccountsDeleteRequest;
// import com.seam.api.resources.connectedaccounts.requests.ConnectedAccountsUpdateRequest;
import com.seam.api.resources.events.requests.EventsListRequest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seam.api.core.ObjectMappers;
import java.util.Objects;
import java.util.Optional;


public class Main {

    private static final Random rand = new Random();

    public static void main(String[] args) {
        int randomNumber = rand.nextInt(1_000_000);

        String SEAM_API_KEY = "seam_test8yup_77ut771wVzFPcfhce9ti5Ccq";

        // Get a Seam Client
        // Seam seam = Seam.builder()
        //     .apiKey("seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy")
        //     .url("https://connect.getseam.com")
        //     .build();
        // Seam seam = Seam.builder()
        //     .apiKey("seam_test8yup_77ut771wVzFPcfhce9ti5Ccq")
        //     .url("https://connect.getseam.com")
        //     .build();
        Seam seam = Seam.builder()
            .apiKey(SEAM_API_KEY)
            .build();

//         Seam seam = Seam.builder()
//             // Specify PAT.
//             .apiKey("seam_at134EHBFs3_2YuxzbTCZ5EJZcHTzy5b2Z8u")
//             .url("https://connect.getseam.com")
//             // Specify workspace ID.
//             // .seamWorkspace("98feb997-ff3c-4320-a907-1585108b1c08")
//             .seamWorkspace("398d80b7-3f96-47c2-b85a-6f8ba21d07be")
//             .build();

// System.out.println(seam.devices().list());
// var devices = seam.devices().list();
// System.out.println(devices);

// System.out.println(seam.devices()
//   .list(DevicesListRequest.builder()
//     .deviceTypes(List.of(DeviceType.AUGUST_LOCK, DeviceType.MINUT_SENSOR))
//     // .includeIf(List.of("canRemotelyUnlock"))
//     .build())
// );

// // Confirm that the device can remotely lock.
// if (seam.devices()
//   .get(DevicesGetRequest.builder()
//     .deviceId("59112086-537a-49c0-96dc-ce74f5abfbd7")
//     .build())
//   // .getCanRemotelyLock())
//   .getIsManaged())
// {
//   // Perform the lock operation.
//   System.out.println(seam.locks()
//     .lockDoor(LocksLockDoorRequest.builder()
//       .deviceId("59112086-537a-49c0-96dc-ce74f5abfbd7")
//       .build()).getPending());
// }

// // Get the device.
// Device device = seam.devices()
//   .get(DevicesGetRequest.builder()
//     // .deviceId("11111111-1111-1111-1111-444444444444")
//     .deviceId("59112086-537a-49c0-96dc-ce74f5abfbd7")
//     .build());
// // Confirm that the device supports online access codes.
// // if (device.getCanProgramOnlineAccessCodes())
// if (device.getIsManaged())
// {
//   // Create the ongoing online access code.
//   seam.accessCodes()
//     .create(AccessCodesCreateRequest.builder()
//       .deviceId(device.getDeviceId())
//       .name("my ongoing code")
//       .code("1234")
//       .build());
// }

// Device device = seam.devices()
//       .get(DevicesGetRequest.builder()
//               .deviceId("36cf1a96-196d-41b0-9804-88154387f1f9")
//               .build());
// if (device.getProperties().getHasDirectPower() == true)
// {
//   System.out.println("Power Source: Wired");
// } else {



// var deviceProviders = seam.devices()
//         .listDeviceProviders(DevicesListDeviceProvidersRequest.builder()
//                 .providerCategory(DevicesListDeviceProvidersRequestProviderCategory.STABLE)
//                 .build());
// System.out.println(deviceProviders);

// Device device = seam.devices()
//       .get(DevicesGetRequest.builder()
//               .deviceId("30fd243b-3054-4384-a713-5487076a3826")
//               .build());
// System.out.println(device);

// var deviceId = "30fd243b-3054-4384-a713-5487076a3826";

// seam.devices().update(DevicesUpdateRequest.builder()
//         .deviceId(deviceId)
//         .name("My Lock2")
//         .build());

// var unmanagedDevices = seam.devices().unmanaged().list();
// System.out.println(unmanagedDevices);

// var deviceId = "882dd63f-db9b-4210-bac2-68372aa0aff7";

// seam.devices().unmanaged().update(UnmanagedUpdateRequest.builder()
//         .deviceId(deviceId)
//         .isManaged(true)
//         .build());


// Device lock = seam.locks()
//         .get(LocksGetRequest.builder()
//                 .deviceId("0168fba8-8275-49a3-acf5-b2bced519a2c")
//                 .build());
// System.out.println(lock);

// Device lock = seam.locks()
//         .get(LocksGetRequest.builder()
//                 .deviceId("882dd63f-db9b-4210-bac2-68372aa0aff7")
//                 .build());
// System.out.println(lock);

// ActionAttempt attempt = seam.locks()
//         .lockDoor(LocksLockDoorRequest.builder()
//                 // .deviceId("6aae9d08-fed6-4ca5-8328-e36849ab48fe")
//                 .deviceId("0168fba8-8275-49a3-acf5-b2bced519a2c")
//                 .build());
// System.out.println(attempt.getPending());

// ActionAttempt attempt = seam.locks()
//         .unlockDoor(LocksUnlockDoorRequest.builder()
//                 // .deviceId("6aae9d08-fed6-4ca5-8328-e36849ab48fe")
//                 .deviceId("0168fba8-8275-49a3-acf5-b2bced519a2c")
//                 .build());
// System.out.println(attempt.getPending());

// ActionAttempt attempt = seam.actionAttempts()
//         .get(ActionAttemptsGetRequest.builder()
//                 .actionAttemptId("19eb6b25-51b5-4398-82e1-666bba616774")
//                 .build());
// System.out.println(attempt.isSuccess());

// Device lock = seam.locks()
//         .get(LocksGetRequest.builder()
//                 // .deviceId("6aae9d08-fed6-4ca5-8328-e36849ab48fe")
//                 .deviceId("ed4bb795-f29f-43e5-bc0f-35f69f9141b5")
//                 .build());
// System.out.println(lock);

// // var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
// var deviceId = "0168fba8-8275-49a3-acf5-b2bced519a2c";

// AccessCode CreatedAccessCode = seam.accessCodes().create(AccessCodesCreateRequest.builder()
//         .deviceId(deviceId)
//         .name("my ongoing code")
//         .code("1234")
//         .build());
// System.out.println(CreatedAccessCode);

// // var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
// var deviceId = "0168fba8-8275-49a3-acf5-b2bced519a2c";

// AccessCode CreatedAccessCode = seam.accessCodes().create(AccessCodesCreateRequest.builder()
//         .deviceId(deviceId)
//         .name("my time-bound code")
//         .startsAt("2025-01-01T16:00:00Z")
//         .endsAt("2025-01-22T12:00:00Z")
//         .code("2345")
//         .build());
// System.out.println(CreatedAccessCode);

// // var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
// var deviceId = "0168fba8-8275-49a3-acf5-b2bced519a2c";

// List<AccessCode> accessCodes = seam.accessCodes().list(AccessCodesListRequest.builder()
//         .deviceId(deviceId)
//         .build());
// System.out.println(accessCodes);

// // var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
// var deviceId = "0168fba8-8275-49a3-acf5-b2bced519a2c";
// List<String> accessCodeIds = new ArrayList<>(Arrays.asList(
//   "48e8f0e3-11a4-49a4-b589-27a1baf7aee4",
//   "aff0c858-22f6-4587-9aac-1f5d550be560"
// ));

// List<AccessCode> accessCodes = seam.accessCodes().list(AccessCodesListRequest.builder()
//         .deviceId(deviceId)
//         .accessCodeIds(accessCodeIds)
//         .build());
// System.out.println(accessCodes);

// AccessCode accessCode = seam.accessCodes()
//         .get(AccessCodesGetRequest.builder()
//                 // .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
//                 .accessCodeId("48e8f0e3-11a4-49a4-b589-27a1baf7aee4")
//                 .build());
// System.out.println(accessCode);

// ActionAttempt attempt = seam.accessCodes()
//         .update(AccessCodesUpdateRequest.builder()
//                 .accessCodeId("48e8f0e3-11a4-49a4-b589-27a1baf7aee4")
//                 .name("my updated code name")
//                 .startsAt("2025-02-01T16:00:00Z")
//                 .endsAt("2025-02-22T12:00:00Z")
//                 .code("5432")
//                 .build());
// System.out.println(attempt.getPending());

// ActionAttempt attempt = seam.accessCodes()
//         .update(AccessCodesUpdateRequest.builder()
//                 .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
//                 .startsAt("2025-02-01T16:00:00Z")
//                 .endsAt("2025-02-22T12:00:00Z")
//                 .build());
// System.out.println(attempt.getPending());

// AccessCode accessCode = seam.accessCodes()
//         .get(AccessCodesGetRequest.builder()
//                 .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
//                 .build());
// System.out.println(accessCode);

// ActionAttempt attempt = seam.accessCodes()
//         .update(AccessCodesUpdateRequest.builder()
//                 .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
//                 .type(AccessCodesUpdateRequestType.ONGOING)
//                 .build());
// System.out.println(attempt.getPending());

// AccessCode accessCode = seam.accessCodes()
//         .get(AccessCodesGetRequest.builder()
//                 .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
//                 .build());
// System.out.println(accessCode);

// ActionAttempt attempt = seam.accessCodes()
//         .delete(AccessCodesDeleteRequest.builder()
//                 .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
//                 .build());
// System.out.println(attempt.getPending());

// try {
//   AccessCode accessCode = seam.accessCodes()
//         .get(AccessCodesGetRequest.builder()
//                 .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
//                 .build());
// }
// catch(Exception e) {
//   System.out.println(e);
// }

// Device device = seam.devices()
//         .get(DevicesGetRequest.builder()
//                 .deviceId("ed4bb795-f29f-43e5-bc0f-35f69f9141b5")
//                 .build());
// System.out.println(device);

// var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
// var deviceId = "0168fba8-8275-49a3-acf5-b2bced519a2c";

// AccessCode CreatedAccessCode = seam.accessCodes().create(AccessCodesCreateRequest.builder()
//         .deviceId(deviceId)
//         .name("my ongoing code")
//         // .allowExternalModification(true)
//         .build());
// System.out.println(CreatedAccessCode);

// AccessCode accessCode = seam.accessCodes()
//         .get(AccessCodesGetRequest.builder()
//                 .accessCodeId("cd7f5b14-56e3-48b1-a351-9cab819eea6a")
//                 .build());
// System.out.println("Errors:");
// System.out.println(accessCode.getErrors());
// System.out.println("Warnings:");
// System.out.println(accessCode.getWarnings());

// Device device = seam.devices()
//         .get(DevicesGetRequest.builder()
//                 .deviceId("0168fba8-8275-49a3-acf5-b2bced519a2c")
//                 .build());
// System.out.println(device);

// var deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe";
// var deviceId = "0168fba8-8275-49a3-acf5-b2bced519a2c";

// AccessCode CreatedAccessCode = seam.accessCodes().create(AccessCodesCreateRequest.builder()
//         .deviceId(deviceId)
//         .name("my time-bound code")
//         .startsAt("2025-01-01T16:00:00Z")
//         .endsAt("2025-01-22T12:00:00Z")
//         .useBackupAccessCodePool(true)
//         .build());
// System.out.println(CreatedAccessCode);

// AccessCode accessCode = seam.accessCodes()
//         .get(AccessCodesGetRequest.builder()
//                 .accessCodeId("206491e0-000f-49cb-8f18-db47a12bc785")
//                 .build());
// System.out.println("Is backup access code available: "
//   + accessCode.getIsBackupAccessCodeAvailable());

// AccessCode backupAccessCode = seam.accessCodes().pullBackupAccessCode(AccessCodesPullBackupAccessCodeRequest.builder()
//         .accessCodeId("206491e0-000f-49cb-8f18-db47a12bc785")
//         .build());
// System.out.println(backupAccessCode);

// var deviceId = "2339da8d-ce38-4d86-9bb7-573f95af691c";

// List<UnmanagedListResponseAccessCodesItem> unmanagedAccessCodes = seam.accessCodes().unmanaged().list(UnmanagedListRequest.builder()
//         .deviceId(deviceId)
//         .build());
// System.out.println(unmanagedAccessCodes);

// var unmanagedAccessCode = seam.accessCodes().unmanaged().get(UnmanagedGetRequest.builder()
//         .accessCodeId("ceae76b7-9929-4eef-8e46-eaafefa63acb")
//         .build());
// System.out.println(unmanagedAccessCode);

// var convert = seam.accessCodes().unmanaged().convertToManaged(UnmanagedConvertToManagedRequest.builder()
//         .accessCodeId("ceae76b7-9929-4eef-8e46-eaafefa63acb")
//         .build());
// System.out.println(convert);

// var delete = seam.accessCodes().unmanaged().delete(UnmanagedDeleteRequest.builder()
//         .accessCodeId("9b7d4bf4-1c0f-480f-8476-c69a4500c8ce")
//         .build());
// System.out.println(delete);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
// Device thermostat = seam.thermostats()
//         .get(ThermostatsGetRequest.builder()
//                 .deviceId(deviceId)
//                 .build());
// System.out.println(thermostat);

// var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
// seam.thermostats().update(ThermostatsUpdateRequest.builder()
//                 .deviceId(deviceId)
//                 .defaultClimateSetting(ThermostatsUpdateRequestDefaultClimateSetting.builder()
//                         .hvacModeSetting(HvacModeSetting.HEAT_COOL)
//                         .coolingSetPointCelsius(25.0)
//                         .heatingSetPointCelsius(20.0)
//                         .manualOverrideAllowed(true)
//                         .build())
//                 .build());
// var thermostat = seam.thermostats()
//         .get(ThermostatsGetRequest.builder()
//                 .deviceId(deviceId)
//                 .build());
// System.out.println(thermostat);
// System.out.println("Thermostat ID: " + thermostat.getDeviceId());
// System.out.println("Default climate setting: " + thermostat.getProperties().getCurrentClimateSetting().get());
// System.out.println("Mode: " + thermostat.getProperties().getDefaultClimateSetting().get().getHvacModeSetting());
// System.out.println("Cooling set point (Celsius): " +
//   thermostat.getProperties().getCurrentClimateSetting().get().getCoolingSetPointCelsius());
// System.out.println("Heating set point (Celsius): " +
//   thermostat.getProperties().getCurrentClimateSetting().get().getHeatingSetPointCelsius());
// System.out.println("Cooling set point (Celsius): " +
//   thermostat.getProperties().getCurrentClimateSetting().get().getCoolingSetPointCelsius());

// var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
// var climateSettingSchedule = seam.thermostats().climateSettingSchedules()
//             .create(ClimateSettingSchedulesCreateRequest.builder()
//                     .deviceId(deviceId)
//                     .scheduleStartsAt("2023-12-10T15:00:00.000Z")
//                     .scheduleEndsAt("2023-12-17T11:00:00.000Z")
//                     .hvacModeSetting(HvacModeSetting.HEAT_COOL)
//                     .coolingSetPointCelsius(25.0)
//                     .heatingSetPointCelsius(20.0)
//                     .manualOverrideAllowed(true)
//                     .name("Guest Stay 1")
//                     .build());
// System.out.println(climateSettingSchedule);

// var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
// var climateSettingSchedules = seam.thermostats().climateSettingSchedules()
//       .list(ClimateSettingSchedulesListRequest.builder()
//               .deviceId(deviceId)
//               .build());
// System.out.println(climateSettingSchedules);

// var climateSettingSchedule = seam.thermostats().climateSettingSchedules()
//       .get(ClimateSettingSchedulesGetRequest.builder()
//               .climateSettingScheduleId("6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7")
//               .build());
// System.out.println(climateSettingSchedule);

// var thermostats = seam.thermostats().list();
// System.out.println(thermostats);

// Device thermostat = seam.thermostats().get(ThermostatsGetRequest.builder()
//               .deviceId("518f692b-f865-4590-8c3e-3849e9984c75")
//               .build());
// System.out.println(thermostat);

// var climateSettingScheduleId = "b7d5cc0c-defc-4af1-9448-85b96aff5fd6";
// var updatedSchedule = seam.thermostats().climateSettingSchedules()
//             .update(ClimateSettingSchedulesUpdateRequest.builder()
//                     .climateSettingScheduleId(climateSettingScheduleId)
//                     .scheduleEndsAt("2023-12-18T11:00:00.000Z")
//                     .hvacModeSetting(HvacModeSetting.HEAT_COOL)
//                     .coolingSetPointFahrenheit(75.0)
//                     .heatingSetPointFahrenheit(65.0)
//                     .build());
// System.out.println(updatedSchedule);

// var climateSettingScheduleId = "736a9241-c2ef-4d11-86c9-dff554377be9";
// var deletion = seam.thermostats().climateSettingSchedules()
//         .delete(ClimateSettingSchedulesDeleteRequest.builder()
//                 .climateSettingScheduleId(climateSettingScheduleId)
//                 .build());
// System.out.println(deletion);

// try {
//   var climateSettingSchedule = seam.thermostats().climateSettingSchedules()
//         .get(ClimateSettingSchedulesGetRequest.builder()
//                 .climateSettingScheduleId("736a9241-c2ef-4d11-86c9-dff554377be9")
//                 .build());
// }
// catch(Exception e) {
//   System.out.println(e);
// }



// var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
// seam.thermostats().heat(ThermostatsHeatRequest.builder()
//                 .deviceId(deviceId)
//                 // .heatingSetPointCelsius(20.0)
//                 .heatingSetPointFahrenheit(60.0)
//                 .build());
// Device thermostat = seam.thermostats()
//         .get(ThermostatsGetRequest.builder()
//                 .deviceId(deviceId)
//                 .build());
// System.out.println(thermostat);
// System.out.println("Thermostat ID: " + thermostat.getDeviceId());
// System.out.println("Mode: " + thermostat.getProperties().getCurrentClimateSetting().get().getHvacModeSetting());
// System.out.println("Heating set point (Celsius): " +
//   thermostat.getProperties().getCurrentClimateSetting().get().getHeatingSetPointCelsius());

// ActionAttempt attempt = seam.actionAttempts()
//         .get(ActionAttemptsGetRequest.builder()
//                 .actionAttemptId("4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90")
//                 .build());
// System.out.println(attempt.isSuccess());

// var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
// seam.thermostats().update(ThermostatsUpdateRequest.builder()
//                 .deviceId(deviceId)
//                 .defaultClimateSetting(ThermostatsUpdateRequestDefaultClimateSetting.builder()
//                         .hvacModeSetting(HvacModeSetting.COOL)
//                         .coolingSetPointCelsius(25.0)
//                         .manualOverrideAllowed(true)
//                         .build())
//                 .build());
// Device thermostat = seam.thermostats()
//         .get(ThermostatsGetRequest.builder()
//                 .deviceId(deviceId)
//                 .build());
// System.out.println("Thermostat ID: " + thermostat.getDeviceId());
// System.out.println("Mode: " + thermostat.getProperties().getCurrentClimateSetting().get().getHvacModeSetting());
// System.out.println("Cooling set point (Celsius): " +
//   thermostat.getProperties().getCurrentClimateSetting().get().getCoolingSetPointCelsius());

// var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
// seam.thermostats().update(ThermostatsUpdateRequest.builder()
//                 .deviceId(deviceId)
//                 .defaultClimateSetting(ThermostatsUpdateRequestDefaultClimateSetting.builder()
//                         .hvacModeSetting(HvacModeSetting.HEAT_COOL)
//                         .heatingSetPointCelsius(20.0)
//                         .coolingSetPointCelsius(25.0)
//                         .manualOverrideAllowed(true)
//                         .build())
//                 .build());
// Device thermostat = seam.thermostats()
//         .get(ThermostatsGetRequest.builder()
//                 .deviceId(deviceId)
//                 .build());
// System.out.println("Thermostat ID: " + thermostat.getDeviceId());
// System.out.println("Mode: " + thermostat.getProperties().getCurrentClimateSetting().get().getHvacModeSetting());
// System.out.println("Heating set point (Celsius): " +
//   thermostat.getProperties().getCurrentClimateSetting().get().getHeatingSetPointCelsius());
// System.out.println("Cooling set point (Celsius): " +
//   thermostat.getProperties().getCurrentClimateSetting().get().getCoolingSetPointCelsius());

// var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
// seam.thermostats().update(ThermostatsUpdateRequest.builder()
//                 .deviceId(deviceId)
//                 .defaultClimateSetting(ThermostatsUpdateRequestDefaultClimateSetting.builder()
//                         .hvacModeSetting(HvacModeSetting.OFF)
//                         .build())
//                 .build());
// Device thermostat = seam.thermostats()
//         .get(ThermostatsGetRequest.builder()
//                 .deviceId(deviceId)
//                 .build());
// System.out.println("Thermostat ID: " + thermostat.getDeviceId());
// System.out.println("Mode: " + thermostat.getProperties().getCurrentClimateSetting().get().getHvacModeSetting());

// var deviceId = "98dc7c66-045d-49cb-a62b-4bb431b0a9fa";
// ActionAttempt noiseThresholdAttempt = seam.noiseSensors().noiseThresholds().create(NoiseThresholdsCreateRequest.builder()
//                 .deviceId(deviceId)
//                 .startsDailyAt("20:00:00[America/Los_Angeles]")
//                 .endsDailyAt("06:00:00[America/Los_Angeles]")
//                 .noiseThresholdDecibels(70.0)
//                 .build());
// System.out.println(noiseThresholdAttempt.getPending());

// Map<String, CustomMetadataValue> customMetadata =
//     // Map.of("id", CustomMetadataValue.of("user1"));
//     Map.of("id", CustomMetadataValue.of(Optional.of("user1")));

// ConnectWebview createdConnectWebview = seam.connectWebviews().create(ConnectWebviewsCreateRequest.builder()
//                 .providerCategory(ProviderCategory.STABLE)
//                 .customMetadata(customMetadata)
//                 .build());
// System.out.println(createdConnectWebview);

// ConnectWebview createdConnectWebview = seam.connectWebviews().create(ConnectWebviewsCreateRequest.builder()
//                 .acceptedProviders(List.of(
//                   AcceptedProvider.AUGUST,
//                   AcceptedProvider.SCHLAGE))
//                 .build());
// System.out.println(createdConnectWebview);

// ConnectWebview createdConnectWebview = seam.connectWebviews().create(ConnectWebviewsCreateRequest.builder()
//                 .acceptedProviders(List.of(
//                   AcceptedProvider.ECOBEE))
//                 .build());
// System.out.println(createdConnectWebview.getLoginSuccessful()); // false
// System.out.println(createdConnectWebview.getUrl());

// ConnectWebview connectWebview = seam.connectWebviews().create(ConnectWebviewsCreateRequest.builder()
//                 .acceptedProviders(List.of(
//                   AcceptedProvider.ECOBEE))
//                 .build());
// System.out.println(connectWebview.getLoginSuccessful()); // false
// System.out.println(connectWebview.getUrl());

// String connectWebviewId = "44912603-23e8-4126-8f02-29c875875a64";
// ConnectWebview updatedConnectWebview = seam.connectWebviews().get(ConnectWebviewsGetRequest.builder()
//   // .connectWebviewId(connectWebview.getConnectWebviewId())
//   .connectWebviewId(connectWebviewId)
//   .build());

// System.out.println(updatedConnectWebview.getLoginSuccessful()); // true

// ConnectWebview updatedConnectWebview = seam.connectWebviews().get(ConnectWebviewsGetRequest.builder()
//                 .connectWebviewId(createdConnectWebview.getConnectWebviewId())
//                 .build());
// System.out.println(updatedConnectWebview.getLoginSuccessful()); // true


// ConnectWebview createdConnectWebview = seam.connectWebviews().create(ConnectWebviewsCreateRequest.builder()
//                 .customRedirectUrl("https://example.com/redirect")
//                 .customRedirectFailureUrl("https://example.com/failure-redirect")
//                 .providerCategory(ProviderCategory.STABLE)
//                 .automaticallyManageNewDevices(true)
//                 .waitForDeviceCreation(true)
//                 .build());
// System.out.println(createdConnectWebview);

// seam.connectedAccounts().delete(ConnectedAccountsDeleteRequest.builder()
//                 .connectedAccountId("f8538776-3b5e-4c48-9796-9fdea38617de")
//                 .build());


// System.out.println(seam.connectedAccounts().list());

// Retrieve all devices, filtered by manufacturer,
// which is one of several filters that list() supports.
// var all4suitesLocks = seam.devices().list(DevicesListRequest.builder()
//   .manufacturer(Manufacturer.FOURSUITES)
//   .build());
var all4suitesLocks = seam.devices().list(DevicesListRequest.builder()
  // .manufacturer(Manufacturer.YALE)
  .manufacturer(Manufacturer.AUGUST)
  .build());

// Select the first device as an example.
Device someLock = all4suitesLocks.get(0);

// Inspect specific properties.
System.out.println(someLock.getProperties().getOnline()); // true
// System.out.println(someLock.getProperties().getLocked()); // true

// View the entire returned device object.
System.out.println(someLock);

// // Confirm that the device can remotely unlock.
// // if (someLock.getCanRemotelyUnlock())
// if (someLock.getProperties().getOnline()) // WRONG! Using for now because the Java SDK does not yet have canRemotelyUnlock.
// {
//   // Perform the unlock operation
//   // and return an action attempt.
//   ActionAttempt actionAttempt = seam.locks()
//     .unlockDoor(LocksUnlockDoorRequest.builder()
//       .deviceId(someLock.getDeviceId())
//       .build());
//   System.out.println(actionAttempt.getPending());
//   System.out.println(actionAttempt.getSuccess());
// }

// // Get the device by ID.
// var updatedLock = seam.devices().get(DevicesGetRequest.builder()
//   .deviceId(someLock.getDeviceId())
//   .build());

// // Inspect the locked property to confirm
// // that the unlock operation was successful.
// // System.out.println(updatedLock.getProperties().getLocked()); // false

// // Confirm that the device supports online access codes.
// // if (updatedLock.getCanProgramOnlineAccessCodes())
// if (updatedLock.getProperties().getOnline()) // WRONG! Using for now because the Java SDK does not yet have getCanProgramOnlineAccessCodes.
// {
//   // Create an ongoing online access code.
//   seam.accessCodes()
//     .create(AccessCodesCreateRequest.builder()
//       .deviceId(updatedLock.getDeviceId())
//       .name("my ongoing code")
//       .code("1234")
//       .build());
//   // Create a time-bound online access code.
//   seam.accessCodes()
//     .create(AccessCodesCreateRequest.builder()
//       .deviceId(updatedLock.getDeviceId())
//       .name("my time-bound code")
//       .startsAt("2025-01-01T16:00:00Z")
//       .endsAt("2025-01-22T12:00:00Z")
//       .code("2345")
//       .build());
//   // List all access codes for this device.
//   var accessCodes = seam.accessCodes()
//     .list(AccessCodesListRequest.builder()
//       .deviceId(updatedLock.getDeviceId())
//       .build());
//   System.out.println(accessCodes);
// }


// Map<String, CustomMetadataValue> customMetadata =
//     Map.of("internal_account_id", CustomMetadataValue.of(Optional.of("user-1")));

// var devices = seam.devices().list(DevicesListRequest.builder()
//                 .customMetadataHas(customMetadata)
//                 .build());

// System.out.println(devices);
// System.out.println(seam.devices().list());

// Map<String, CustomMetadataValue> customMetadata =
//     Map.of("internal_account_id", CustomMetadataValue.of(Optional.of("user-1")));

// seam.connectedAccounts().update(ConnectedAccountsUpdateRequest.builder()
//         .connectedAccountId("6e1cad57-b244-40ca-b4f3-30a46c8000d4")
//         // .automaticallyManageNewDevices(true)
//         .custom_metadata(customMetadata)
//         .build());

// seam.devices().update(DevicesUpdateRequest.builder()
//         .deviceId(deviceId)
//         .name("My Lock2")
//         .build());

// Device device = seam.devices()
//       .get(DevicesGetRequest.builder()
//               .deviceId("36cf1a96-196d-41b0-9804-88154387f1f9")
//               .build());
// System.out.println("Online: " + device.getProperties().getOnline());

// var deviceConnectedEvents = seam.events()
//           .list(EventsListRequest.builder()
//                   .deviceId("36cf1a96-196d-41b0-9804-88154387f1f9")
//                   .eventType(EventsListRequestEventType.DEVICE_CONNECTED)
//                   .since("2024-01-01T00:00:00Z")
//                   .build());
// System.out.println(deviceConnectedEvents);


// Device device = seam.devices()
//       .get(DevicesGetRequest.builder()
//               .deviceId("c2cc3831-f347-444e-b83b-d1f14dbb5893")
//               .build());
// Device device = seam.devices()
//       .get(DevicesGetRequest.builder()
//               .deviceId("36cf1a96-196d-41b0-9804-88154387f1f9")
//               .build());
// if (device.getProperties().getHasDirectPower() == true)
// {
//   System.out.println("Power Source: Wired");
// } else {
//   System.out.println("Power Source: Battery-powered");
//   System.out.println("Battery Level: " + device.getProperties().getBattery().getLevel());
//   System.out.println("Battery Status: " + device.getProperties().getBattery().getStatus());
// }

//Doesn't work?!
// var deviceId = "5ce2cd35-09b1-458c-bb08-51ee83c35be7";
// seam.thermostats().setFanMode(ThermostatsUpdateRequest.builder()
//                 .deviceId(deviceId)
//                 .defaultClimateSetting(ThermostatsUpdateRequestDefaultClimateSetting.builder()
//                         .hvacModeSetting(HvacModeSetting.OFF)
//                         .build())
//                 .build());
// Device thermostat = seam.thermostats()
//         .get(ThermostatsGetRequest.builder()
//                 .deviceId(deviceId)
//                 .build());
// System.out.println("Thermostat ID: " + thermostat.getDeviceId());
// System.out.println("Mode: " + thermostat.getProperties().getCurrentClimateSetting().get().getHvacModeSetting());

// var devices = seam.devices().list(DevicesListRequest.builder()
//                 .deviceType(DeviceType.ECOBEE_THERMOSTAT)
//                 .build());

// System.out.println(devices);

// var devices = seam.devices().list(DevicesListRequest.builder()
//                 .deviceType(DeviceType.NEST_THERMOSTAT)
//                 .build());

// System.out.println(devices);

// var devices = seam.devices().list(DevicesListRequest.builder()
//                 .deviceType(DeviceType.HONEYWELL_THERMOSTAT)
//                 .build());

// System.out.println(devices);

// Device device = seam.devices()
//         .get(DevicesGetRequest.builder()
//                 .deviceId("06a561b6-09d2-401c-a25f-ddb1e1efd59e")
//                 .build());
// System.out.println(device);

















    }
}
