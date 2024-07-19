---
description: >-
  Learn the requirements and restrictions for developing Android apps that
  integrate with the Visionline ACS.
---

# Special Requirements for Android Mobile Access SDK Development

## Add XML File with ASSA ABLOY AID

To develop an Android mobile app that integrates with the ASSA ABLOY Visionline ACS, you must register for the ASSA ABLOY partnership program. Note that if you plan to integrate with the [ASSA ABLOY Visionline credential manager](../../device-guides/assa-abloy-credential-services-credential-manager-in-development.md), you must also register for this program. For details, see [https://www.abloy.com/global/en/partnership-and-integrations](https://www.abloy.com/global/en/partnership-and-integrations).

After you register for the ASSA ABLOY partnership program, ASSA ABLOY provides a Host-based Card Emulation application ID (HCE AID).

When developing your Android app, you must include the following `res/xml/seos_hce_service.xml` resource file that contains your HCE Application ID:

```xml
<?xml version="1.0" encoding="utf-8"?>
<host-apdu-service xmlns:android="http://schemas.android.com/apk/res/android"
      android:description="@string/seos_hce_description"
      android:requireDeviceUnlock="false"
      android:requireDeviceScreenOn="true">
    <aid-group android:description="@string/seos_hce_aid_description" android:category="other">
        <!-- Specify your AID from ASSA ABLOY here. -->
        <aid-filter android:name="..."/>
    </aid-group>
</host-apdu-service>
```

For additional information about this resource file, contact [ASSA ABLOY](https://www.abloy.com/global/en/partnership-and-integrations#gw-group-text-and-media-eabfaa4827).

***

## BLE Scanning Restriction

When developing a mobile app for Android 7, you cannot start and stop Bluetooth low energy (BLE) scanning within a timeframe of approximately 30 seconds. This Android restriction is intended to optimize mobile device battery life. Instead, use a continuous BLE scan.

For more information, see the [ASSA ABLOY knowledge base](https://my.assaabloyglobalsolutions.com/tpp?id=kb\_article\_view\&sys\_kb\_id=a42f98e8db340450812df3b31d9619b1) (ASSA ABLOY login required).

***

## Unlock Success Event Limitation

The `SUCCESS` event indicates that the phone has communicated successfully with the door reader. That is, the Seam mobile SDK cannot determine whether the door reader granted access. It can only determine whether the communication with the reader succeeded. This limitation is the result of the underlying ASSA ABLOY SEOS SDK.
