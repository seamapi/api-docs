---
description: >-
  Learn how to create igloohome offline access codes, including understanding
  manufacturer-specific requirements.
---

# Creating igloohome Offline Access Codes

In addition to supporting [online access codes](../../products/smart-locks/access-codes/), the Seam integration for igloohome supports the generation of offline access codes (that is, igloohome [algoPIN™](https://www.igloohome.co/en-US/how-it-works) codes) for all igloohome lock models, without the need for a bridge. You generate offline access (PIN) codes remotely, and the manufacturer maintains a server-based registry of synchronized encryption keys (tokens) to enable these offline codes. Then, owners or managers can share these codes with users through messaging or other similar applications, and the users do not need to install a special application to unlock the device.

To learn about the special requirements regarding offline access codes for igloohome locks, see [Offline Access Code Requirements](creating-igloohome-offline-access-codes.md#offline-access-code-requirements). For more information about using offline access codes, see [Offline Access Codes](../../products/smart-locks/access-codes/#offline-access-codes) and [Managing Offline Access Codes](../../products/smart-locks/access-codes/offline-access-codes.md).

***

## Offline Access Code Requirements

Seam supports the following types of [offline access codes](../../products/smart-locks/access-codes/offline-access-codes.md) for igloohome locks:

* [Hourly-bound](creating-igloohome-offline-access-codes.md#hourly-bound-offline-access-codes)
* [Daily-bound](creating-igloohome-offline-access-codes.md#daily-bound-offline-access-codes)
* [One-time-use](creating-igloohome-offline-access-codes.md#one-time-use-offline-access-codes)

Note the following igloohome-specific offline access code constraints:

### **General igloohome Offline Access Code Constraints**

| Constraint                            | Description                                                                                                                                              |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Total maximum number of offline codes | 199 PINs, including online and offline PINs.                                                                                                             |
| Creation                              | You cannot set a custom code for an offline access code that represents an algoPIN.                                                                      |
| Update                                | You cannot modify an offline access code that represents an algoPIN.                                                                                     |
| Activation                            | For codes that last longer than 24 hours, algoPINs have a 24-hour activation window. Use the code within the first 24 hours of the start time.           |
| Revocation                            | To delete algoPINs, you must be within Bluetooth® range of the lock. You cannot use the Seam API to delete offline access codes that represent algoPINs. |

### **Hourly-Bound Offline Access Code Constraints**

| Constraint                                    | Description               |
| --------------------------------------------- | ------------------------- |
| Range of hourly-bound codes                   | 1 to 672 hours (28 days). |
| Maximum number of hourly-bound codes per hour | 3                         |

### **Daily-Bound Offline Access Code Constraints**

| Constraint                                  | Description                         |
| ------------------------------------------- | ----------------------------------- |
| Range of daily-bound codes                  | 29 to 367 days.                     |
| Daily-bound code schedule restrictions      | Start time and end time must match. |
| Maximum number of daily-bound codes per day | 3                                   |

### **One-Time-User Offline Access Code Constraints**

| Constraint                                               | Description                                                                    |
| -------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Timeframe for one-time-use codes                         | <ul><li>Must have a start date and time.</li><li>Lasts for 24 hours.</li></ul> |
| Maximum number of one-time-use codes per start date slot | 5                                                                              |
| One-time-use code expiration                             | Expire after a single use.                                                     |

***

## Programming igloohome Offline Access Codes

You can create hourly-bound, daily-bound, and one-time-use offline access codes for igloohome devices.

### Hourly-Bound Offline Access Codes

To [create an hourly-bound offline access code](../../products/smart-locks/access-codes/offline-access-codes.md#creating-time-bound-offline-access-codes), issue an access code creation request. Then, poll or use a webhook to confirm that the code was registered successfully in the igloohome offline access code server.

#### 1. Create an Hourly-Bound Offline Access Code

To create an hourly-bound offline access code, provide the `device_id` of the lock for which you want to create the code and set `is_offline_access_code` to `true`. Specify the `starts_at` and `ends_at` [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamps to define the active time window for the offline code. You can also assign an optional `name` to the offline access code. For more details, see the [Create Access Code endpoint](../../api-clients/access-codes/create-an-access-code.md).

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
#### Request:

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

#### Response:

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

The [lifecycle of a time-bound access code](../../products/smart-locks/access-codes/lifecycle-of-access-codes.md) is marked by distinct phases:

1. `Unset`: When initially created on Seam, the offline access code remains in an `unset` state, indicating that it is not yet available for use on the lock due to a configured future activation time.
2. `Setting`: As the scheduled `starts_at` time approaches, Seam initiates the process of readying the code for use on the lock, transitioning the `status` of the offline code to `setting`.
3. `Set`: Upon successful programming, the status updates to `set`, signaling that the code is ready to grant the designated user the ability to unlock the door.

There are two methods to verify that an time-bound offline access code has been registered in the offline access code server that the device manufacturer maintains:

* **Polling**: Continuously query the access code until the `status` is updated. For instructions, see [Polling Method](../../products/smart-locks/access-codes/creating-access-codes.md#polling-method-1).
* **Webhook**: Wait for updates to arrive using webhook requests from the Seam API. For instructions, see [Webhook Events Method](../../products/smart-locks/access-codes/creating-access-codes.md#webhook-events-method-1).

***

### Daily-Bound Offline Access Codes

To [create a daily-bound offline access code](../../products/smart-locks/access-codes/offline-access-codes.md#creating-time-bound-offline-access-codes), first issue a creation request. Then, poll or use a webhook to confirm that the code was registered successfully in the igloohome offline access code server.

#### 1. Create a Daily-Bound Access Code

To create a daily-bound offline access code, provide the `device_id` of the lock for which you want to create the code and set `is_offline_access_code` to `true`. Specify the `starts_at` and `ends_at` [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamps to define the active time window for the offline code. For a daily-bound offline access code, you must specify the same time (but not the same date) in the `starts_at` and `ends_at` properties.

Because daily-bound offline access codes require day-level duration granularity, you can also set `max_time_rounding` to `1day` (or `1d`), instead of the default `1hour` (or `1h`). Note that the Seam API returns an error if `max_time_rounding` is `1hour` and the necessary rounding amount exceeds one hour.

You can also assign an optional `name` to the offline access code. For more details, see the [Create Access Code endpoint](../../api-clients/access-codes/create-an-access-code.md).

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
#### Request:

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

#### Response:

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

The [lifecycle of a time-bound access code](../../products/smart-locks/access-codes/lifecycle-of-access-codes.md) is marked by distinct phases:

1. `Unset`: When initially created on Seam, the offline access code remains in an `unset` state, indicating that it is not yet available for use on the lock due to a configured future activation time.
2. `Setting`: As the scheduled `starts_at` time approaches, Seam initiates the process of readying the code for use on the lock, transitioning the `status` of the offline code to `setting`.
3. `Set`: Upon successful programming, the status updates to `set`, signaling that the code is ready to grant the designated user the ability to unlock the door.

There are two methods to verify that an time-bound offline access code has been registered in the offline access code server that the device manufacturer maintains:

* **Polling**: Continuously query the access code until the `status` is updated. For instructions, see [Polling Method](../../products/smart-locks/access-codes/creating-access-codes.md#polling-method-1).
* **Webhook**: Wait for updates to arrive using webhook requests from the Seam API. For instructions, see [Webhook Events Method](../../products/smart-locks/access-codes/creating-access-codes.md#webhook-events-method-1).

***

### One-Time-Use Offline Access Codes

igloohome one-time-use offline access codes are valid for 24 hours from the `starts_at` timestamp that you configure. These codes expire after a single use. For detailed instructions, see [Creating One-Time-Use Offline Access Codes](../../products/smart-locks/access-codes/offline-access-codes.md#creating-one-time-use-offline-access-codes).
