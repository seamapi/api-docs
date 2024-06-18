---
description: >-
  Learn how to create offline access codes for applicable smart locks with
  keypads.
---

# Managing Offline Access Codes

## Overview

This guide explains how to create [offline access (PIN) codes](./#offline-access-codes) for smart locks that support these types of codes. Use the [Access Codes](../../../api-clients/access-codes/) API to generate a [time-bound](./#time-bound-offline-access-codes) or [one-time-use](./#one-time-use-offline-access-codes) offline access code. Note that Seam support for offline access code functions varies depending on the device manufacturer. For details, see the corresponding device guide.

* [igloohome Locks device guide](../../../device-guides/igloohome-locks.md)
* [dormakaba Oracode Locks device guide](../../../device-guides/dormakaba-oracode-locks.md)

{% hint style="info" %}
For information about online access codes, see [Managing Access Codes](./).
{% endhint %}

***

## Before You Begin: Confirm Capabilities

Before you attempt to create an offline access code, be sure to confirm that your device has the capability to perform this operation. You can check the following [capability flag](../../../capability-guides/device-and-system-capabilities.md#capability-flags) for the device:

* `can_program_offline_access_codes`

Use [Get Device](../../../api-clients/devices/get-device.md) (or [Get Lock](../../../api-clients/locks/get-lock.md)) for a specific device to return this capability flag. Then, use an `if` statement or similar check to confirm that this flag is both present and `true` before attempting to create an offline access code.

Further, before creating an offline access code, it is imperative to understand any manufacturer- or device-specific constraints, such as the maximum number of access codes, any time slot or activation requirements, and so on. For details, see the corresponding device guide and any manufacturer-specific properties within the retrieved lock.

* [igloohome Locks device guide](../../../device-guides/igloohome-locks.md)
* [dormakaba Oracode Locks device guide](../../../device-guides/dormakaba-oracode-locks.md)

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.locks.get(device="11111111-1111-1111-1111-444444444444")
```

**Response:**

```
Device(
  device_id='11111111-1111-1111-1111-444444444444',
  can_program_offline_access_codes=True, // You can create offline access codes for this device.
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/locks/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "11111111-1111-1111-1111-444444444444"
}'
```

**Response:**

```json
{
  "lock": {
    "device_id": "11111111-1111-1111-1111-444444444444",
    "can_program_offline_access_codes": true, // You can create offline access codes for this device.
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.locks.get("11111111-1111-1111-1111-444444444444")
```

**Response:**

```json
{
  device_id: '11111111-1111-1111-1111-444444444444',
  can_program_offline_access_codes: true, // You can create offline access codes for this device.
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
client.locks.get("11111111-1111-1111-1111-444444444444")
```

**Response:**

```
<Seam::Device:0x00438
  device_id="11111111-1111-1111-1111-444444444444"
  can_program_offline_access_codes=true // You can create offline access codes for this device.
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->devices->get("11111111-1111-1111-1111-444444444444");
```

**Response:**

```json
{
  "device_id": "11111111-1111-1111-1111-444444444444",
  "can_program_offline_access_codes": true, // You can create offline access codes for this device.
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.Devices.Get(deviceId: "11111111-1111-1111-1111-444444444444");
```

**Response:**

```
{
  "device_id": "11111111-1111-1111-1111-444444444444",
  "can_program_offline_access_codes": true, // You can create offline access codes for this device.
  ...
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
seam.locks()
  .get(LocksGetRequest.builder()
    .deviceId("11111111-1111-1111-1111-444444444444")
    .build());
```

**Response:**

```json
{
  "device_id": "11111111-1111-1111-1111-444444444444",
  "can_program_offline_access_codes": true, // You can create offline access codes for this device.
  ...
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
device, uErr := client.Devices.Get(
  context.Background(),
  &api.DevicesGetRequest{
    DeviceId: "11111111-1111-1111-1111-444444444444",
  })
```

**Response:**

```json
{
  "device_id": "11111111-1111-1111-1111-444444444444",
  "can_program_offline_access_codes": true, // You can create offline access codes for this device.
  ...
}
```
{% endtab %}
{% endtabs %}

***

## Creating Time-Bound Offline Access Codes

For [igloohome locks](../../../device-guides/igloohome-locks.md) and [dormakaba Oracode locks](../../../device-guides/dormakaba-oracode-locks.md), you can create time-bound offline access codes with validity durations at either the hour level or the day level.

Some device manufacturers enforce a maximum duration for hourly-bound offline access codes. For example, [igloohome](../../../device-guides/igloohome-locks.md) and [dormakaba Oracode](../../../device-guides/dormakaba-oracode-locks.md) enforce the following duration rules for hourly- and daily-bound offline access codes:

| Manufacturer      | Code Type                    | Duration Rule            |
| ----------------- | ---------------------------- | ------------------------ |
| igloohome         | Hourly-bound codes           | 1 to 672 hours (28 days) |
| igloohome         | Daily-bound codes            | 29 to 367 days           |
| dormakaba Oracode | Hourly- or daily-bound codes | 1 to 31 days             |

{% hint style="info" %}
dormakaba Oracode locks also use specific access code time slots (called "user levels" or "user prefixes"). You must adhere to these time slots when you create offline access codes. For more information, see [User Levels](../../../device-guides/dormakaba-oracode-locks.md#user-levels).
{% endhint %}

To [create an hourly-bound offline access code](offline-access-codes.md#program-an-hourly-bound-offline-access-code), set `is_offline_access_code` to `true`, and specify the desired `starts_at` and `ends_at` date and time.&#x20;

To [create a daily-bound offline access code](offline-access-codes.md#1.-create-a-daily-bound-access-code), set `is_offline_access_code` to `true`, and specify the same time (but not the same date) in the `starts_at` and `ends_at` properties. Because daily-bound offline access codes must be valid for a number of days, that is, day-level granularity, you can set `max_time_rounding` to `1day` (or `1d`), instead of the default `1hour` (or `1h`). In this case, Seam rounds the time period that you specify to the nearest day.

### Program an Hourly-Bound Offline Access Code

To create an hourly-bound offline access code, first issue a creation request. Then, poll or use a webhook to confirm the successful code registration in the offline access code server that the device manufacturer maintains.

#### 1. Create an Hourly-Bound Offline Access Code&#x20;

To create an hourly-bound offline access code, provide the `device_id` of the lock for which you want to create the code and set `is_offline_access_code` to `true`. Specify the `starts_at` and `ends_at` [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamps to define the active time window for the offline code. You can also assign an optional `name` to the offline access code. For more details, see the [Create Access Code endpoint](../../../api-clients/access-codes/create-an-access-code.md).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the device.
device = seam.locks.get(
  device_id="11111111-1111-1111-1111-444444444444"
)

# Confirm that the device supports offline access codes.
if device.can_program_offline_access_codes:
  # Create the hourly-bound offline access code.
  seam.access_codes.create(
    device_id = device.device_id,
    name = "my hourly-bound offline code",
    starts_at = "2023-11-10T00:00:00-00:00",
    ends_at = "2023-11-15T18:00:00-00:00",
    is_offline_access_code = True
  )
```

**Response:**

```
AccessCode(
  access_code_id='11111111-1111-1111-1111-777777777777',
  device_id='11111111-1111-1111-1111-444444444444',
  type='time_bound',
  starts_at='2023-11-10T00:00:00.000Z',
  ends_at='2023-11-15T18:00:00.000Z',
  name='my hourly-bound offline code',
  is_offline_access_code=True,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
### Request:

```sh
# Get the device.
device=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "11111111-1111-1111-1111-444444444444"
  }')

# Confirm that the device supports offline access codes.
if  $(jq -r '.device.can_program_offline_access_codes' <<< ${device}); then \
  # Create the hourly-bound offline access code.
  curl -X 'POST' \
    'https://connect.getseam.com/access_codes/create' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\",
      \"name\": \"my hourly-bound offline code\",
      \"starts_at\": \"2023-11-10T00:00:00-00:00\",
      \"ends_at\": \"2023-11-15T18:00:00-00:00\",
      \"is_offline_access_code\": true
  }";
fi
```

### Response:

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "11111111-2222-3333-4444-555555555555",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "11111111-1111-1111-1111-777777777777",
    "device_id": "11111111-1111-1111-1111-444444444444",
    "name": "my hourly-bound offline code",
    "type": "time_bound",
    "starts_at": "2023-11-10T00:00:00.000Z",
    "ends_at": "2023-11-15T18:00:00.000Z",
    "is_offline_access_code": true,
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
// Get the device.
const device = await seam.locks.get({
  device_id: "11111111-1111-1111-1111-444444444444"
});

// Confirm that the device supports offline access codes.
if (device.can_program_offline_access_codes) {
  // Create the hourly-bound offline access code.
  await seam.accessCodes.create({
    device_id: device.device_id,
    name: "my hourly-bound offline code",
    starts_at: "2023-11-10T00:00:00-00:00",
    ends_at: "2023-11-15T18:00:00-00:00",
    is_offline_access_code: true
  })
};
```

**Response:**

```json
{
  access_code_id: '11111111-1111-1111-1111-777777777777',
  device_id: '11111111-1111-1111-1111-444444444444',
  name: 'my hourly-bound offline code',
  type: 'time_bound',
  starts_at: '2023-11-10T00:00:00.000Z',
  ends_at: '2023-11-15T18:00:00.000Z',
  is_offline_access_code: true,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Get the device.
device = client.locks.get("11111111-1111-1111-1111-444444444444")

# Confirm that the device supports offline access codes.
if (device.can_program_offline_access_codes)
  # Create the hourly-bound offline access code.
  client.access_codes.create(
    device_id: device.device_id,
    name: "my hourly-bound offline code",
    starts_at: "2023-11-10T00:00:00-00:00",
    ends_at: "2023-11-15T18:00:00-00:00",
    is_offline_access_code: true
  )
end
```

**Response:**

```
<Seam::AccessCode:0x00438
  access_code_id="11111111-1111-1111-1111-777777777777"
  device_id="11111111-1111-1111-1111-444444444444"
  name="my hourly-bound offline code"
  type="time_bound"
  starts_at=2023-11-10 00:00:00 UTC
  ends_at=2023-11-15 18:00:00 UTC
  is_offline_access_code: true
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the device.
$device = $seam->locks->get(device_id: "11111111-1111-1111-1111-444444444444");

// Confirm that the device supports offline access codes.
if ($device->can_program_offline_access_codes) {
  // Create the hourly-bound offline access code.
  $seam->access_codes->create(
    device_id: $device->device_id,
    name: "my hourly-bound offline code",
    starts_at: "2023-11-10T00:00:00Z",
    ends_at: "2023-11-15T18:00:00Z",
    is_offline_access_code: true
  );
}
```

**Response:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-777777777777",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my hourly-bound offline code",
  "type": "time_bound",
  "starts_at": "2023-11-10T00:00:00.000Z",
  "ends_at": "2023-11-15T18:00:00.000Z",
  "is_offline_access_code": true,
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Get the device.
Device device = seam.Locks.Get(deviceId: "11111111-1111-1111-1111-444444444444");

// Confirm that the device supports offline access codes.
if (device.CanProgramOfflineAccessCodes == true) {
  // Create the hourly-bound offline access code.
  seam.AccessCodes.Create(
    deviceId: device.DeviceId,
    name: "my hourly-bound offline code",
    startsAt: "2023-11-10T00:00:00Z",
    endsAt: "2023-11-15T18:00:00Z",
    isOfflineAccessCode: true
  );
}
```

**Response:**

```
{
  "type": "time_bound",
  "access_code_id": "11111111-1111-1111-1111-777777777777",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my hourly-bound offline code",
  "starts_at": "2023-11-10T00:00:00Z",
  "ends_at": "2023-11-15T18:00:00Z",
  "is_offline_access_code": true,
  ...
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Get the device.
Device device = seam.devices()
  .get(DevicesGetRequest.builder()
    .deviceId("11111111-1111-1111-1111-444444444444")
    .build());

// Confirm that the device supports offline access codes.
if (device.getCanProgramOfflineAccessCodes())
{
  // Create the hourly-bound offline access code.
  seam.accessCodes()
    .create(AccessCodesCreateRequest.builder()
      .deviceId(device.getDeviceId())
      .name("my hourly-bound offline code")
      .startsAt("2023-11-10T00:00:00Z")
      .endsAt("2023-11-15T18:00:00Z")
      .isOfflineAccessCode(true)
      .build());
}
```

**Response:**

```json
{
  "access_code_id" : "11111111-1111-1111-1111-777777777777",
  "device_id" : "11111111-1111-1111-1111-444444444444",
  "name" : "my hourly-bound offline code",
  "type" : "time_bound",
  "starts_at" : "2023-11-10T00:00:00Z",
  "ends_at" : "2023-11-15T18:00:00Z",
  "is_offline_access_code": true,
  ...
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
// Get the device.
device, uErr := client.Locks.Get(
  context.Background(),
  &api.LocksGetRequest{
    DeviceId: api.String("11111111-1111-1111-1111-444444444444"),
  })

// Confirm that the device supports offline access codes.
if *device.CanProgramOfflineAccessCodes {
  // Create the hourly-bound offline access code.
  client.AccessCodes.Create(
      context.Background(),
      &api.AccessCodesCreateRequest{
        DeviceId: device.DeviceId,
        Name: api.String("my hourly-bound offline code"),
        StartsAt: api.String("2023-11-10T00:00:00Z"),
        EndsAt: api.String("2023-11-15T18:00:00Z"),
        IsOfflineAccessCode: api.Bool(true),
      },
    )
  }

if uErr != nil {
    return uErr
}

return nil
```

**Response:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-777777777777",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my hourly-bound offline code",
  "type": "time_bound",
  "starts_at": "2023-11-10T00:00:00.000Z",
  "ends_at": "2023-11-15T18:00:00.000Z",
  "is_offline_access_code": true,
  ...
}
```
{% endtab %}
{% endtabs %}

#### 2. Verify Successful Time-Bound Code Registration

The [lifecycle of a time-bound access code](lifecycle-of-access-codes.md) is marked by distinct phases:

1. `Unset`: When initially created on Seam, the offline access code remains in an `unset` state, indicating that it is not yet available for use on the lock due to a configured future activation time.
2. `Setting`: As the scheduled `starts_at` time approaches, Seam initiates the process of readying the code for use on the lock, transitioning the `status` of the offline code to `setting`.
3. `Set`: Upon successful programming, the status updates to `set`, signaling that the code is ready to grant the designated user the ability to unlock the door.

There are two methods to verify that an time-bound offline access code has been registered in the offline access code server that the device manufacturer maintains:

* **Polling**: Continuously query the access code until the `status` is updated. For instructions, see [Polling Method](creating-access-codes.md#polling-method-1).
* **Webhook**: Wait for updates to arrive using webhook requests from the Seam API. For instructions, see [Webhook Events Method](creating-access-codes.md#webhook-events-method-1).

### Program a Daily-Bound Offline Access Code

To create a daily-bound offline access code, first issue a creation request. Then, poll or use a webhook to confirm the successful code registration in the offline access code server that the device manufacturer maintains.

#### 1. Create a Daily-Bound Access Code&#x20;

To create a daily-bound offline access code, provide the `device_id` of the lock for which you want to create the code and set `is_offline_access_code` to `true`. Specify the `starts_at` and `ends_at` [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamps to define the active time window for the offline code. For a daily-bound offline access code, you must specify the same time (but not the same date) in the `starts_at` and `ends_at` properties.

Because daily-bound offline access codes require day-level duration granularity, you can also set `max_time_rounding` to `1day` (or `1d`), instead of the default `1hour` (or `1h`). Note that the Seam API returns an error if `max_time_rounding` is `1hour` and the necessary rounding amount exceeds one hour.

You can also assign an optional `name` to the offline access code. For more details, see the [Create Access Code endpoint](../../../api-clients/access-codes/create-an-access-code.md).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the device.
device = seam.locks.get(
  device_id="11111111-1111-1111-1111-444444444444"
)

# Confirm that the device supports offline access codes.
if device.can_program_offline_access_codes:
  # Create the daily-bound offline access code.
  seam.access_codes.create(
    device_id = device.device_id,
    name = "my daily-bound offline code",
    starts_at = "2023-11-17T00:00:00-00:00",
    ends_at = "2023-12-18T00:00:00-00:00",
    max_time_rounding = "1d",
    is_offline_access_code = True
  )
```

**Response:**

```
AccessCode(
  access_code_id='11111111-1111-1111-1111-888888888888',
  device_id='11111111-1111-1111-1111-444444444444',
  type='time_bound',
  starts_at='2023-11-17T00:00:00.000Z',
  ends_at='2023-12-18T00:00:00.000Z',
  name='my daily-bound offline code',
  is_offline_access_code=True,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
### Request:

```sh
# Get the device.
device=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "11111111-1111-1111-1111-444444444444"
  }')

# Confirm that the device supports offline access codes.
if  $(jq -r '.device.can_program_offline_access_codes' <<< ${device}); then \
  # Create the daily-bound offline access code.
  curl -X 'POST' \
    'https://connect.getseam.com/access_codes/create' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\",
      \"name\": \"my daily-bound offline code\",
      \"starts_at\": \"2023-11-17T00:00:00-00:00\",
      \"ends_at\": \"2023-12-18T00:00:00-00:00\",
      \"max_time_rounding\": \"1d\",
      \"is_offline_access_code\": true
  }";
fi
```

### Response:

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "11111111-2222-3333-4444-555555555555",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "11111111-1111-1111-1111-888888888888",
    "device_id": "11111111-1111-1111-1111-444444444444",
    "name": "my daily-bound offline code",
    "type": "time_bound",
    "starts_at": "2023-11-17T00:00:00.000Z",
    "ends_at": "2023-12-18T00:00:00.000Z",
    "is_offline_access_code": true,
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
// Get the device.
const device = await seam.locks.get({
  device_id: "11111111-1111-1111-1111-444444444444"
});

// Confirm that the device supports offline access codes.
if (device.can_program_offline_access_codes) {
  // Create the daily-bound offline access code.
  await seam.accessCodes.create({
    device_id: device.device_id,
    name: "my daily-bound offline code",
    starts_at: "2023-11-17T00:00:00-00:00",
    ends_at: "2023-12-18T00:00:00-00:00",
    max_time_rounding: "1d",
    is_offline_access_code: true
  })
};
```

**Response:**

```json
{
  access_code_id: '11111111-1111-1111-1111-888888888888',
  device_id: '11111111-1111-1111-1111-444444444444',
  name: 'my daily-bound offline code',
  type: 'time_bound',
  starts_at: '2023-11-17T00:00:00.000Z',
  ends_at: '2023-12-18T00:00:00.000Z',
  is_offline_access_code: true,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Get the device.
device = client.locks.get("11111111-1111-1111-1111-444444444444")

# Confirm that the device supports offline access codes.
if (device.can_program_offline_access_codes)
  # Create the daily-bound offline access code.
  client.access_codes.create(
    device_id: device.device_id,
    name: "my daily-bound offline code",
    starts_at: "2023-11-17T00:00:00-00:00",
    ends_at: "2023-12-18T00:00:00-00:00",
    max_time_rounding: "1d",
    is_offline_access_code: true
  )
end
```

**Response:**

```
<Seam::AccessCode:0x00438
  access_code_id="11111111-1111-1111-1111-888888888888"
  device_id="11111111-1111-1111-1111-444444444444"
  name="my daily-bound offline code"
  type="time_bound"
  starts_at=2023-11-17 00:00:00 UTC
  ends_at=2023-12-18 00:00:00 UTC
  is_offline_access_code: true
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the device.
$device = $seam->locks->get(device_id: "11111111-1111-1111-1111-444444444444");

// Confirm that the device supports offline access codes.
if ($device->can_program_offline_access_codes) {
  // Create the daily-bound offline access code.
  $seam->access_codes->create(
    device_id: $device->device_id,
    name: "my daily-bound offline code",
    starts_at: "2023-11-17T00:00:00Z",
    ends_at: "2023-12-18T00:00:00Z",
    max_time_rounding: "1d",
    is_offline_access_code: true
  );
}
```

**Response:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-888888888888",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my daily-bound offline code",
  "type": "time_bound",
  "starts_at": "2023-11-17T00:00:00.000Z",
  "ends_at": "2023-12-18T00:00:00.000Z",
  "is_offline_access_code": true,
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Get the device.
Device device = seam.Locks.Get(deviceId: "11111111-1111-1111-1111-444444444444");

// Confirm that the device supports offline access codes.
if (device.CanProgramOfflineAccessCodes == true) {
  // Create the daily-bound offline access code.
  seam.AccessCodes.Create(
    deviceId: device.DeviceId,
    name: "my daily-bound offline code",
    startsAt: "2023-11-17T00:00:00Z",
    endsAt: "2023-12-18T00:00:00Z",
    maxTimeRounding: "1d",
    isOfflineAccessCode: true
  );
}
```

**Response:**

```
{
  "type": "time_bound",
  "access_code_id": "11111111-1111-1111-1111-888888888888",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my daily-bound offline code",
  "starts_at": "2023-11-17T00:00:00Z",
  "ends_at": "2023-12-18T00:00:00Z",
  "is_offline_access_code": true,
  ...
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Get the device.
Device device = seam.devices()
  .get(DevicesGetRequest.builder()
    .deviceId("11111111-1111-1111-1111-444444444444")
    .build());

// Confirm that the device supports offline access codes.
if (device.getCanProgramOfflineAccessCodes())
{
  // Create the daily-bound offline access code.
  seam.accessCodes()
    .create(AccessCodesCreateRequest.builder()
      .deviceId(device.getDeviceId())
      .name("my daily-bound offline code")
      .startsAt("2023-11-17T00:00:00Z")
      .endsAt("2023-12-18T00:00:00Z")
      .maxTimeRounding("1d")
      .isOfflineAccessCode(true)
      .build());
}
```

**Response:**

```json
{
  "access_code_id" : "11111111-1111-1111-1111-888888888888",
  "device_id" : "11111111-1111-1111-1111-444444444444",
  "name" : "my daily-bound offline code",
  "type" : "time_bound",
  "starts_at" : "2023-11-17T00:00:00Z",
  "ends_at" : "2023-12-18T00:00:00Z",
  "is_offline_access_code": true,
  ...
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
// Get the device.
device, uErr := client.Locks.Get(
  context.Background(),
  &api.LocksGetRequest{
    DeviceId: api.String("11111111-1111-1111-1111-444444444444"),
  })

// Confirm that the device supports offline access codes.
if *device.CanProgramOfflineAccessCodes {
  // Create the daily-bound offline access code.
  client.AccessCodes.Create(
      context.Background(),
      &api.AccessCodesCreateRequest{
        DeviceId: device.DeviceId,
        Name: api.String("my daily-bound offline code"),
        StartsAt: api.String("2023-11-17T00:00:00Z"),
        EndsAt: api.String("2023-12-18T00:00:00Z"),
        MaxTimeRounding: api.String("1d"),
        IsOfflineAccessCode: api.Bool(true),
      },
    )
  }

if uErr != nil {
    return uErr
}

return nil
```

**Response:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-888888888888",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my daily-bound offline code",
  "type": "time_bound",
  "starts_at": "2023-11-17T00:00:00.000Z",
  "ends_at": "2023-12-18T00:00:00.000Z",
  "is_offline_access_code": true,
  ...
}
```
{% endtab %}
{% endtabs %}

#### 2. Verify Successful Time-Bound Code Registration

The [lifecycle of a time-bound access code](lifecycle-of-access-codes.md) is marked by distinct phases:

1. `Unset`: When initially created on Seam, the offline access code remains in an `unset` state, indicating that it is not yet available for use on the lock due to a configured future activation time.
2. `Setting`: As the scheduled `starts_at` time approaches, Seam initiates the process of readying the code for use on the lock, transitioning the `status` of the offline code to `setting`.
3. `Set`: Upon successful programming, the status updates to `set`, signaling that the code is ready to grant the designated user the ability to unlock the door.

There are two methods to verify that an time-bound offline access code has been registered in the offline access code server that the device manufacturer maintains:

* **Polling**: Continuously query the access code until the `status` is updated. For instructions, see [Polling Method](creating-access-codes.md#polling-method-1).
* **Webhook**: Wait for updates to arrive using webhook requests from the Seam API. For instructions, see [Webhook Events Method](creating-access-codes.md#webhook-events-method-1).

***

## Creating One-Time-Use Offline Access Codes

For [igloohome locks](../../../device-guides/igloohome-locks.md), you can create one-time-use offline access codes that are valid for 24 hours from the `starts_at` date and time that you configure. These codes expire after a single use. To confirm that your device supports one-time-use offline access codes, see the corresponding [device guide](../../../device-guides/igloohome-locks.md).

To create a one-time-use offline access code, first issue a creation request. In this request, set `is_offline_access_code` and `is_one_time_use` to `true`, and specify the desired `starts_at` date and time. Then, poll or use a webhook to confirm the successful code registration in the offline access code server that the device manufacturer maintains.

### 1. Create a One-Time-Use Offline Access Code&#x20;

To create a one-time-use offline access code, provide the `device_id` of the lock for which you want to create the code. Set `is_offline_access_code` and `is_one_time_use` to `true`. Specify the `starts_at` [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp to define the beginning of the active time window for the offline code.

You can also assign an optional `name` to the offline access code. For more details, see the [Create Access Code endpoint](../../../api-clients/access-codes/create-an-access-code.md).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the device.
device = seam.locks.get(
  device_id="11111111-1111-1111-1111-444444444444"
)

# Confirm that the device supports offline access codes.
if device.can_program_offline_access_codes:
  # Create the one-time-use offline access code.
  seam.access_codes.create(
    device_id = device.device_id,
    name = "my one-time-use offline code",
    starts_at = "2023-11-12T00:00:00-00:00",
    is_offline_access_code = True,
    is_one_time_use = True
  )
```

**Response:**

```
AccessCode(
  access_code_id='11111111-1111-1111-1111-777777888888',
  device_id='11111111-1111-1111-1111-444444444444',
  type='time_bound',
  starts_at='2023-11-12T00:00:00.000Z',
  name='my one-time-use offline code',
  is_offline_access_code=True,
  is_one_time_use=True,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
### Request:

```sh
# Get the device.
device=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "11111111-1111-1111-1111-444444444444"
  }')

# Confirm that the device supports offline access codes.
if  $(jq -r '.device.can_program_offline_access_codes' <<< ${device}); then \
  # Create the one-time-use offline access code.
  curl -X 'POST' \
    'https://connect.getseam.com/access_codes/create' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\",
      \"name\": \"my one-time-use offline code\",
      \"starts_at\": \"2023-11-12T00:00:00-00:00\",
      \"is_offline_access_code\": true,
      \"is_one_time_use\": true
  }";
fi
```

### Response:

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "11111111-2222-3333-4444-555555555555",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "11111111-1111-1111-1111-777777888888",
    "device_id": "11111111-1111-1111-1111-444444444444",
    "name": "my one-time-use offline code",
    "type": "time_bound",
    "starts_at": "2023-11-12T00:00:00.000Z",
    "is_offline_access_code": true,
    "is_one_time_use": true,
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
// Get the device.
const device = await seam.locks.get({
  device_id: "11111111-1111-1111-1111-444444444444"
});

// Confirm that the device supports offline access codes.
if (device.can_program_offline_access_codes) {
  // Create the one-time-use offline access code.
  await seam.accessCodes.create({
    device_id: device.device_id,
    name: "my one-time-use offline code",
    starts_at: "2023-11-12T00:00:00-00:00",
    is_offline_access_code: true,
    is_one_time_use: true
  })
};
```

**Response:**

```json
{
  access_code_id: '11111111-1111-1111-1111-777777888888',
  device_id: '11111111-1111-1111-1111-444444444444',
  name: 'my one-time-use offline code',
  type: 'time_bound',
  starts_at: '2023-11-12T00:00:00.000Z',
  is_offline_access_code: true,
  is_one_time_use: true,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Get the device.
device = client.locks.get("11111111-1111-1111-1111-444444444444")

# Confirm that the device supports offline access codes.
if (device.can_program_offline_access_codes)
  # Create the one-time-use offline access code.
  client.access_codes.create(
    device_id: device.device_id,
    name: "my one-time-use offline code",
    starts_at: "2023-11-12T00:00:00-00:00",
    is_offline_access_code: true,
    is_one_time_use: true
  )
end
```

**Response:**

```
<Seam::AccessCode:0x00438
  access_code_id="11111111-1111-1111-1111-777777888888"
  device_id="11111111-1111-1111-1111-444444444444"
  name="my one-time-use offline code"
  type="time_bound"
  starts_at=2023-11-12 00:00:00 UTC
  is_offline_access_code: true
  is_one_time_use: true
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the device.
$device = $seam->locks->get(device_id: "11111111-1111-1111-1111-444444444444");

// Confirm that the device supports offline access codes.
if ($device->can_program_offline_access_codes) {
  // Create the one-time-use offline access code.
  $seam->access_codes->create(
    device_id: $device->device_id,
    name: "my one-time-use offline code",
    starts_at: "2023-11-12T00:00:00Z",
    is_offline_access_code: true,
    is_one_time_use: true
  );
}
```

**Response:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-777777888888",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my one-time-use offline code",
  "type": "time_bound",
  "starts_at": "2023-11-12T00:00:00.000Z",
  "is_offline_access_code": true,
  "is_one_time_use": true,
  ...
}    
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Get the device.
Device device = seam.Locks.Get(deviceId: "11111111-1111-1111-1111-444444444444");

// Confirm that the device supports offline access codes.
if (device.CanProgramOfflineAccessCodes == true) {
  // Create the one-time-use offline access code.
  seam.AccessCodes.Create(
    deviceId: device.DeviceId,
    name: "my one-time-use offline code",
    startsAt: "2023-11-12T00:00:00Z",
    isOfflineAccessCode: true,
    isOneTimeUse: true
  );
}
```

**Response:**

```
{
  "type": "time_bound",
  "access_code_id": "11111111-1111-1111-1111-777777888888",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my one-time-use offline code",
  "starts_at": "2023-11-12T00:00:00Z",
  "is_offline_access_code": true,
  "is_one_time_use": true,
  ...
}  
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Get the device.
Device device = seam.devices()
  .get(DevicesGetRequest.builder()
    .deviceId("11111111-1111-1111-1111-444444444444")
    .build());

// Confirm that the device supports offline access codes.
if (device.getCanProgramOfflineAccessCodes())
{
  // Create the one-time-use offline access code.
  seam.accessCodes()
    .create(AccessCodesCreateRequest.builder()
      .deviceId(device.getDeviceId())
      .name("my one-time-use offline code")
      .startsAt("2023-11-12T00:00:00Z")
      .isOfflineAccessCode(true)
      .isOneTimeUse(true)
      .build());
}
```

**Response:**

```json
{
  "access_code_id" : "11111111-1111-1111-1111-777777888888",
  "device_id" : "11111111-1111-1111-1111-444444444444",
  "name" : "my one-time-use offline code",
  "type" : "time_bound",
  "starts_at" : "2023-11-12T00:00:00Z",
  "is_offline_access_code": true,
  "is_one_time_use": true,
  ...
}    
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
// Get the device.
device, uErr := client.Locks.Get(
  context.Background(),
  &api.LocksGetRequest{
    DeviceId: api.String("11111111-1111-1111-1111-444444444444"),
  })

// Confirm that the device supports offline access codes.
if *device.CanProgramOfflineAccessCodes {
  // Create the one-time-use offline access code.
  client.AccessCodes.Create(
      context.Background(),
      &api.AccessCodesCreateRequest{
        DeviceId: device.DeviceId,
        Name: api.String("my one-time-use offline code"),
        StartsAt: api.String("2023-11-12T00:00:00Z"),
        IsOfflineAccessCode: api.Bool(true),
        IsOneTimeUse: api.Bool(true),
      },
    )
  }

if uErr != nil {
    return uErr
}

return nil
```

**Response:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-777777888888",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my one-time-use offline code",
  "type": "time_bound",
  "starts_at": "2023-11-12T00:00:00.000Z",
  "is_offline_access_code": true,
  "is_one_time_use": true,
  ...
}
```
{% endtab %}
{% endtabs %}

#### 2. Verify Successful One-Time-Use Code Registration

The [lifecycle of a one-time-use access code](lifecycle-of-access-codes.md) is marked by distinct phases:

1. `Unset`: When initially created on Seam, the offline access code remains in an `unset` state, indicating that it is not yet available for use on the lock due to a configured future activation time.
2. `Setting`: As the scheduled `starts_at` time approaches, Seam initiates the process of readying the code for use on the lock, transitioning the `status` of the offline code to `setting`.
3. `Set`: Upon successful programming, the status updates to `set`, signaling that the code is ready to grant the designated user the ability to unlock the door.

There are two methods to verify that a one-time-use offline access code has been registered in the offline access code server that the device manufacturer maintains:

* **Polling**: Continuously query the access code until the `status` is updated. For instructions, see [Polling Method](creating-access-codes.md#polling-method-1).
* **Webhook**: Wait for updates to arrive using webhook requests from the Seam API. For instructions, see [Webhook Events Method](creating-access-codes.md#webhook-events-method-1).
