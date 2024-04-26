---
description: >-
  Learn about Seam support for dormakaba Oracode offline access codes and
  related manufacturer-specific requirements.
---

# Offline Access Code Support and Requirements

In addition to supporting [online access codes](../../products/smart-locks/access-codes/), the Seam integration for dormakaba Oracode enables you to manage offline access codes for dormakaba Oracode lock models that do not have Wi-Fi capabilities. You generate offline access (PIN) codes remotely, and the manufacturer maintains a server-based registry of synchronized encryption keys (tokens) to enable these offline codes. Then, owners or managers can share these codes with users through messaging or other similar applications, and the users do not need to install a special application to unlock the device.

To learn about the special requirements regarding offline access codes for dormakaba Oracode locks, see [Offline Access Code Requirements](offline-access-code-support-and-requirements.md#offline-access-code-requirements). For more information about using offline access codes, see [Offline Access Codes](../../products/smart-locks/access-codes/#offline-access-codes).

## Offline Access Code Requirements

Seam supports daily-bound and hourly-bound [offline access codes](../../products/smart-locks/access-codes/offline-access-codes.md) for dormakaba Oracode locks. Note the following dormakaba Oracode-specific restrictions and requirements for offline access codes:

### Duration

The duration limit for a dormakaba Oracode offline access code is 31 consecutive days.

### Deletion and Access Code Limits

You cannot delete dormakaba Oracode offline access codes. Consequently, it is important to be aware of device- and installation-specific access code limits, especially if you plan to create large numbers of codes simultaneously. For more information about these limits, see the user manual for your dormakaba Oracode lock or contact your dormakaba Oracode support representative.

### User Levels

dormakaba Oracode locks use pre-programmed sets of access code time slots called "user levels" or "user prefixes." All the access codes in a specific user level have the same prefix, for example, `123` in `123456789` and `123987654`. Further, all access codes in a specific user level use the same configuration for the following characteristics:

* Check in and check out time
* Whether the access code is a one-time-use code
* Whether the access code is daily-bound (`is_24_hour`)
* Whether the access code is a biweekly code (that is, a code that is valid for two weeks)
* Whether the access code is a master code that exists indefinitely, for example, for site owners

When you create a dormakaba Oracode offline access code, you must set the duration of the code to match—exactly—one of the time slots on the device. To view a list of all available time slots for a specific device, [get the lock](../../api-clients/locks/get-lock.md) and view the `device.properties.dormakaba_oracode_metadata.predefined_time_slots` property for the device.

```json
"predefined_time_slots": [
  {
      "name": "Guest RCI D 3:30pm-10:30am",
      "prefix": 0,
      "is_master": false,
      "is_24_hour": false,
      "is_one_shot": false,
      "check_in_time": "15:30:00[PST8PDT]",
      "check_out_time": "10:30:00[PST8PDT]",
      "is_biweekly_mode": false,
      "dormakaba_oracode_user_level_id": "f23721ec-6dce-4c54-8971-40d58449a366",
      "ext_dormakaba_oracode_user_level_prefix": 0
  },
  ...
]
```

### Time Zones

All time zone configuration and display for dormakaba Oracode locks occur in the local time zone of the lock, itself. Consequently, when you configure an access code for a dormakaba Oracode lock, you must set the starting and ending times to match the relative local time zone of the lock. Note that the `starts_at` and `ends_at` properties use a time zone offset, rather than a time zone. Further, we recommend specifying all times as UTC times. In this case, the UTC time that you specify must be equivalent to the desired local time of the device.

To view the local time zone of a dormakaba Oracode lock, [get the lock](../../api-clients/locks/get-lock.md) and see the `check_in_time` and `check_out_time` within each time slot in the `device.properties.dormakaba_oracode_metadata.predefined_time_slots` property for the device. You can also see the local time zone for a dormakaba Oracode lock in the `dormakaba_oracode_device_metadata.iana_timezone` property.

### Master Codes

Seam does not currently support dormakaba Oracode master offline access codes.

### One-Time-Use Codes

Seam does not currently support dormakaba Oracode one-time-use offline access codes.
