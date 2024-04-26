---
description: >-
  Learn about dormakaba Oracode-specific requirements and behaviors for online
  access codes.
---

# Online Access Code Requirements and Behaviors

## PIN Code Rotation

When programming permanent codes on Oracode locks, these PIN codes are rotated every 30 days. When the code changes, Seam issues an `access_code.changed` event with the new PIN code. For details about this event, see [Event Types](../../api-clients/events/#event-types).

For more information about using online access codes, see [Managing Access Codes](../../products/smart-locks/access-codes/).

## Time Zones

All time zone configuration and display for dormakaba Oracode locks occur in the local time zone of the lock, itself. Consequently, when you configure an access code for a dormakaba Oracode lock, you must set the starting and ending times to match the relative local time zone of the lock. Note that the `starts_at` and `ends_at` properties use a time zone offset, rather than a time zone. Further, we recommend specifying all times as UTC times. In this case, the UTC time that you specify must be equivalent to the desired local time of the device.

To view the local time zone of a dormakaba Oracode lock, [get the lock](../../api-clients/locks/get-lock.md) and see the `check_in_time` and `check_out_time` within each time slot in the `device.properties.dormakaba_oracode_metadata.predefined_time_slots` property for the device. You can also see the local time zone for a dormakaba Oracode lock in the `dormakaba_oracode_device_metadata.iana_timezone` property.
