---
description: Learn how to lock and unlock a smart lock, and confirm the action's success.
---

# Locking and Unlocking

## Overview

Seam enables you to lock or unlock your door lock remotely. This guide walks you through how to perform these actions using the Seam API.

When you send a command to a smart lock, it might take a while for Seam to confirm the action's success. To handle this, Seam provides [an "action attempt" object](../../core-concepts/action-attempts.md), which indicates whether the action was successful.

To ensure that the action has been successfully executed, we advise checking the status of the action attempt object by polling the ["Get Action Attempt" request](../../api-clients/action-attempt/get-action-attempt.md). Once Seam has successfully confirmed the action, the action attempt's `status` will indicate `success`.

For those who prefer using webhooks to verify the success of an action, we'll soon introduce events that confirm an action's success.

***

## Before You Begin: Confirm Capabilities

Before you attempt to lock or unlock a device, be sure to confirm that your device has the capability to perform these operations. You can inspect the capabilities of a device by checking the following [capability flags](../../capability-guides/device-and-system-capabilities.md#capability-flags) for the device:

* `can_remotely_lock`
* `can_remotely_unlock`

Use [Get Device](../../api-clients/devices/get-device.md) (or [Get Lock](../../api-clients/locks/get-lock.md)) for a specific device to return these capability flags. Then, use an `if` statement or similar check to confirm that the relevant flag is both present and `true` before attempting to lock or unlock the device.

If either of these capability flags is `false` or not present, you can view the [properties](../../api-clients/devices/#device-properties) of the device, [errors](../../api-clients/devices/#device-error-types) or [warnings](../../api-clients/devices/#device-warning-types) for the device, and [events](../../api-clients/events/#event-types) related to the device to learn more about the cause of these issues. For example, you could examine `device.properties.online`. In addition, you could look for a `device.disconnected` event.

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
  can_remotely_lock=True,   // You can use seam.locks.lock_door() on this device.
  can_remotely_unlock=True, // You can use seam.locks.unlock_door() on this device.
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

<pre class="language-bash"><code class="lang-bash"># Use GET or POST.
<strong>curl -X 'GET' \
</strong>  'https://connect.getseam.com/locks/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "11111111-1111-1111-1111-444444444444"
}'
</code></pre>

**Response:**

```json
{
  "lock": {
    "device_id": "11111111-1111-1111-1111-444444444444",
    "can_remotely_lock": true,   // You can use /locks/lock_door on this device.
    "can_remotely_unlock": true, // You can use /locks/unlock_door on this device.
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
  can_remotely_lock: true,   // You can use seam.locks.lockDoor() on this device.
  can_remotely_unlock: true, // You can use seam.locks.unlockDoor() on this device.
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
<
  Seam::Device:0x00438
    device_id="11111111-1111-1111-1111-444444444444"
    can_remotely_lock=true   // You can use client.locks.lock_door() on this device.
    can_remotely_unlock=true // You can use client.locks.unlock_door() on this device.
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
  "can_remotely_lock": true,   // You can use $seam->locks->lock_door() on this device.
  "can_remotely_unlock": true, // You can use $seam->locks->unlock_door() on this device.
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
  "can_remotely_lock": true,   // You can use seam.Locks.LockDoor() on this device.
  "can_remotely_unlock": true, // You can use seam.Locks.UnlockDoor() on this device.
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
  "can_remotely_lock": true,   // You can use seam.locks.lockDoor() on this device.
  "can_remotely_unlock": true, // You can use seam.locks.unlockDoor() on this device.
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
  "can_remotely_lock": true,   // You can use client.Locks.LockDoor() on this device.
  "can_remotely_unlock": true, // You can use client.Locks.UnlockDoor() on this device.
  ...
}
```
{% endtab %}
{% endtabs %}

***

## Locking a Door

You can lock a door using the [`lock_door`](../../api-clients/locks/lock-a-lock.md) endpoint. To confirm the success of the action, see [Verifying the success of a lock or unlock action](lock-and-unlock.md#verifying-the-success-of-a-lock-or-unlock-action).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the device.
device = seam.locks.get(
  device_id="11111111-1111-1111-1111-444444444444"
)

# Confirm that the device can remotely lock.
if device.can_remotely_lock:
  # Perform the lock operation.
  seam.locks.lock_door(device_id=device.device_id)
```

**Response:**

```
ActionAttempt(status='pending',
              action_type='LOCK_DOOR',
              action_attempt_id='11111111-2222-3333-4444-555555555555',
              result=None,
              error={})
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
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

# Confirm that the device can remotely lock.
if  $(jq -r '.device.can_remotely_lock' <<< ${device}); then \
  # Perform the lock operation.
  curl -X 'POST' \
    'https://connect.getseam.com/locks/lock_door' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\"
  }';
fi
```

**Response:**

```json
{
  "action_attempt": {
    "status":"pending",
    "action_type":"LOCK_DOOR",
    "action_attempt_id":"11111111-2222-3333-4444-555555555555",
    "result":null,
    "error":null
  },
  "ok":true
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

// Confirm that the device can remotely lock.
if (device.can_remotely_lock) {
  // Perform the lock operation.
  await seam.locks.lockDoor({
    device_id: device.device_id,
    waitForActionAttempt: true
  })
};
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '11111111-2222-3333-4444-555555555555',
    action_type: 'LOCK_DOOR',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Get the device.
device = client.locks.get("11111111-1111-1111-1111-444444444444")

# Confirm that the device can remotely lock.
if (device.can_remotely_lock)
  # Perform the lock operation.
  client.locks.lock_door(device.device_id)
end
```

**Response:**

```
<Seam::ActionAttempt:0x00438
  status="pending"
  action_type="LOCK_DOOR"
  action_attempt_id="11111111-2222-3333-4444-555555555555"
  result=nil>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the device.
$device = $seam->locks->get(device_id: "11111111-1111-1111-1111-444444444444");

// Confirm that the device can remotely lock.
if ($device->can_remotely_lock) {
  // Perform the lock operation.
  $seam->locks->lock_door(device_id: $device->device_id);
}
```

**Response:**

```json
{
  "action_attempt_id":"11111111-2222-3333-4444-555555555555",
  "action_type":"LOCK_DOOR",
  "error":null,
  "result":{},
  "status":"success"
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Get the device.
Device device = seam.Locks.Get(deviceId: "11111111-1111-1111-1111-444444444444");

// Confirm that the device can remotely lock.
if (device.CanRemotelyLock == true) {
  // Perform the lock operation.
  seam.Locks.LockDoor(deviceId: device.DeviceId);
}
```

**Response:**

```json
{
  "status": "pending",
  "action_type": "LOCK_DOOR",
  "action_attempt_id": "11111111-2222-3333-4444-555555555555"
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

// Confirm that the device can remotely lock.
if (device.getCanRemotelyLock())
{
  // Perform the lock operation.
  seam.locks()
    .lockDoor(LocksLockDoorRequest.builder()
      .deviceId(device.getDeviceId())
      .build());
}
```

**Response:**

```json
Optional[
  {
    "action_type" : "LOCK_DOOR",
    "action_attempt_id" : "11111111-2222-3333-4444-555555555555",
    "status" : "pending"
  }
]
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

// Confirm that the device can remotely lock.
if *device.CanRemotelyLock {
  // Perform the lock operation.
  client.Locks.LockDoor(
      context.Background(),
      &api.LocksLockDoorRequest{
        DeviceId: device.DeviceId,
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
&{pending <nil>
  {
    "status": "pending",
    "action_type": "LOCK_DOOR",
    "action_attempt_id": "11111111-2222-3333-4444-555555555555",
    "result": null,
    "error": null
  }
<nil>} <nil>
```
{% endtab %}
{% endtabs %}

***

## Unlocking a Door

You can lock a door using the [unlock\_door](../../api-clients/locks/unlock-a-lock.md) endpoint. To confirm the success of the action, see [Verifying the success of a lock or unlock action](lock-and-unlock.md#verifying-the-success-of-a-lock-or-unlock-action).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the device.
device = seam.locks.get(
  device_id="11111111-1111-1111-1111-444444444444"
)

# Confirm that the device can remotely unlock.
if device.can_remotely_unlock:
  # Perform the unlock operation.
  seam.locks.unlock_door(device_id=device.device_id)
```

**Response:**

```
ActionAttempt(status='pending',
              action_type='UNLOCK_DOOR',
              action_attempt_id='11111111-2222-3333-4444-555555555555',
              result=None,
              error={})
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
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

# Confirm that the device can remotely unlock.
if  $(jq -r '.device.can_remotely_lock' <<< ${device}); then \
  # Perform the unlock operation.
  curl -X 'POST' \
    'https://connect.getseam.com/locks/unlock_door' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\"
  }";
fi
```

**Response:**

```json
{
  "action_attempt": {
    "status":"pending",
    "action_type":"UNLOCK_DOOR",
    "action_attempt_id":"11111111-2222-3333-4444-555555555555",
    "result":null,
    "error":null
  },
  "ok":true
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

// Confirm that the device can remotely unlock.
if (device.can_remotely_unlock) {
  // Perform the unlock operation.
  await seam.locks.unlockDoor({
    device_id: device.device_id,
    waitForActionAttempt: true
  })
};
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '11111111-2222-3333-4444-555555555555',
    action_type: 'UNLOCK_DOOR',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Get the device.
device = client.locks.get("11111111-1111-1111-1111-444444444444")

# Confirm that the device can remotely unlock.
if (device.can_remotely_unlock)
  # Perform the unlock operation.
  client.locks.unlock_door(device.device_id)
end
```

**Response:**

```
<Seam::ActionAttempt:0x00438
  status="pending"
  action_type="UNLOCK_DOOR"
  action_attempt_id="11111111-2222-3333-4444-555555555555"
  result=nil>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the device.
$device = $seam->locks->get(device_id: "11111111-1111-1111-1111-444444444444");

// Confirm that the device can remotely unlock.
if ($device->can_remotely_unlock) {
  // Perform the unlock operation.
  $seam->locks->unlock_door(device_id: $device->device_id);
}
```

**Response:**

```json
{
  "action_attempt_id":"11111111-2222-3333-4444-555555555555",
  "action_type":"UNLOCK_DOOR",
  "error":null,
  "result":{},
  "status":"success"
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Get the device.
Device device = seam.Locks.Get(deviceId: "11111111-1111-1111-1111-444444444444");

// Confirm that the device can remotely unlock.
if (device.CanRemotelyUnlock == true) {
  // Perform the unlock operation.
  seam.Locks.UnlockDoor(deviceId: device.DeviceId);
}
```

**Response:**

```json
{
  "status": "pending",
  "action_type": "UNLOCK_DOOR",
  "action_attempt_id": "11111111-2222-3333-4444-555555555555"
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

// Confirm that the device can remotely unlock.
if (device.getCanRemotelyUnlock())
{
  // Perform the unlock operation.
  seam.locks()
    .lockDoor(LocksUnlockDoorRequest.builder()
      .deviceId(device.getDeviceId())
      .build());
}
```

**Response:**

```json
Optional[
  {
    "action_type" : "UNLOCK_DOOR",
    "action_attempt_id" : "11111111-2222-3333-4444-555555555555",
    "status" : "pending"
  }
]
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

// Confirm that the device can remotely unlock.
if *device.CanRemotelyUnlock {
  // Perform the unlock operation.
  client.Locks.UnlockDoor(
      context.Background(),
      &api.LocksUnlockDoorRequest{
        DeviceId: device.DeviceId,
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
&{pending <nil>
  {
    "status": "pending",
    "action_type": "UNLOCK_DOOR",
    "action_attempt_id": "11111111-2222-3333-4444-555555555555",
    "result": null,
    "error": null
  }
<nil>} <nil>
```
{% endtab %}
{% endtabs %}

***

## Verifying the Success of a Lock or Unlock Action

### 1. Execute a Lock request (or other action)

When initiating a lock or unlock action, the Seam API returns an action attempt, which monitors the success or failure of the action.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.locks.lock_door(device_id="11111111-1111-1111-1111-444444444444")
```

**Response:**

```
ActionAttempt(status='pending',
              action_type='LOCK_DOOR',
              action_attempt_id='11111111-2222-3333-4444-555555555555',
              result=None,
              error={})
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/locks/lock_door' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "11111111-1111-1111-1111-444444444444"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status":"pending",
    "action_type":"LOCK_DOOR",
    "action_attempt_id":"11111111-2222-3333-4444-555555555555",
    "result":null,
    "error":null
  },
  "ok":true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.locks.lockDoor({
  device_id: "11111111-1111-1111-1111-444444444444",
  waitForActionAttempt: true
});
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '11111111-2222-3333-4444-555555555555',
    action_type: 'LOCK_DOOR',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
client.locks.lock_door("11111111-1111-1111-1111-444444444444")
```

**Response:**

```
<Seam::ActionAttempt:0x00438
  status="pending"
  action_type="LOCK_DOOR"
  action_attempt_id="11111111-2222-3333-4444-555555555555"
  result=nil>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->locks->lock_door(device_id: "11111111-1111-1111-1111-444444444444");
```

**Response:**

```json
{
  "action_attempt_id":"11111111-2222-3333-4444-555555555555",
  "action_type":"LOCK_DOOR",
  "error":null,
  "result":{},
  "status":"success"
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.Locks.LockDoor(deviceId: "11111111-1111-1111-1111-444444444444");
```

**Response:**

```json
{
  "status": "pending",
  "action_type": "LOCK_DOOR",
  "action_attempt_id": "11111111-2222-3333-4444-555555555555"
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
seam.locks().lockDoor(LocksLockDoorRequest.builder()
  .deviceId("11111111-1111-1111-1111-444444444444")
  .build());
```

**Response:**

```json
Optional[
  {
    "action_type" : "LOCK_DOOR",
    "action_attempt_id" : "11111111-2222-3333-4444-555555555555",
    "status" : "pending"
  }
]
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
_, uErr := client.Locks.LockDoor(
  context.Background(),
  &api.LocksLockDoorRequest{
    DeviceId: "11111111-1111-1111-1111-444444444444",
  },
)

if uErr != nil {
    return uErr
}

return nil
```

**Response:**

```json
&{pending <nil>
  {
    "status": "pending",
    "action_type": "LOCK_DOOR",
    "action_attempt_id": "11111111-2222-3333-4444-555555555555",
    "result": null,
    "error": null
  }
<nil>} <nil>
```
{% endtab %}
{% endtabs %}

### 2. Poll the Action Attempt to Verify the Success of the Action

Use the `action_attempt_id` from the prior response to make a [Get Action Attempt request](../../api-clients/action-attempt/get-action-attempt.md). When the action attempt's `status` changes to `success`, it indicates the action has been successful.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.action_attempts.get(action_attempt_id="11111111-2222-3333-4444-555555555555")
```

**Response:**

```
ActionAttempt(action_attempt_id='11111111-2222-3333-4444-555555555555',
              action_type='LOCK_DOOR',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/action_attempts/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "action_attempt_id": "11111111-2222-3333-4444-555555555555"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "success",
    "action_attempt_id": "11111111-2222-3333-4444-555555555555",
    "action_type": "LOCK_DOOR",
    "result": {},
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.actionAttempts.get({action_attempt_id: "11111111-2222-3333-4444-555555555555"});
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '11111111-2222-3333-4444-555555555555',
  action_type: 'LOCK_DOOR',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
client.action_attempts.get("11111111-2222-3333-4444-555555555555")
```

**Response:**

```
<Seam::ActionAttempt:0x00438
  status="success"
  action_attempt_id="11111111-2222-3333-4444-555555555555"
  action_type="LOCK_DOOR"
  result={}>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->action_attempts->get(action_attempt_id: "11111111-2222-3333-4444-555555555555");
```

**Response:**

```json
{
  "action_attempt_id":"11111111-2222-3333-4444-555555555555",
  "action_type":"LOCK_DOOR",
  "error":null,
  "result":{},
  "status":"success"
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.ActionAttempts.Get("11111111-2222-3333-4444-555555555555");
```

**Response:**

```
{
  "status": "success",
  "action_type": "LOCK_DOOR",
  "action_attempt_id": "11111111-2222-3333-4444-555555555555",
  "result": {},
  "error": null
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
seam.actionAttempts().get(ActionAttemptsGetRequest.builder()
  .actionAttemptId("11111111-2222-3333-4444-555555555555")
  .build());
```

**Response:**

```
Optional[
  {
    "action_type" : "LOCK_DOOR",
    "action_attempt_id" : "11111111-2222-3333-4444-555555555555",
    "status" : "success",
    "result": {},
    "error": null
  }
]
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
action_attempt, uErr := client.ActionAttempts.Get(context.Background(), &api.ActionAttemptsGetRequest{
  ActionAttemptId: "11111111-2222-3333-4444-555555555555",
})

if uErr != nil {
return uErr
}

return nil
```

**Response:**

```json
&{success
  {
    "status": "success",
    "action_attempt_id": "11111111-2222-3333-4444-555555555555",
    "action_type": "LOCK_DOOR",
    "result": {},
    "error": null
  }
<nil> <nil>}
```
{% endtab %}
{% endtabs %}

***

## Checking the Locked Status of a Lock

To retrieve the locked status of a specific door lock, use the [Get Lock](../../api-clients/locks/get-lock.md) or [Get Device](../../api-clients/devices/get-device.md) endpoint by providing the `device_id` of the desired lock. This operation returns detailed information, including the current locked status.

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
  properties={
    'locked': True,
    ...
  },
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

<pre class="language-bash"><code class="lang-bash"># Use GET or POST.
<strong>curl -X 'GET' \
</strong>  'https://connect.getseam.com/locks/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "11111111-1111-1111-1111-444444444444"
}'
</code></pre>

**Response:**

```json
{
  "lock": {
    "device_id": "11111111-1111-1111-1111-444444444444",
    "properties": {
      "locked": true,
      ...
    },
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
  properties: {
    locked: true,
    ...
  },
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
  properties={
    "locked"=>true,
    ...
  }
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
  "properties": {
    "locked": true,
    ...
  },
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.Devices.Get("11111111-1111-1111-1111-444444444444");
```

**Response:**

```json
{
  "device_id": "11111111-1111-1111-1111-444444444444",
  "properties": {
    "locked": true,
    ...
  },
  ...
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
seam.locks().get(LocksGetRequest.builder()
  .deviceId("11111111-1111-1111-1111-444444444444")
  .build());
```

**Response:**

```json
{
  "device_id" : "11111111-1111-1111-1111-444444444444",
  "properties" : {
    "locked" : true,
    ...
  },
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
  "properties" : {
    "locked" : true,
    ...
  },
  ...
}
```
{% endtab %}
{% endtabs %}

***

## Lock and Unlock Events

Whenever a lock is locked or unlocked, Seam emits a `lock.locked` or `lock.unlocked` event. You can see these events by making a [List Events request](../../api-clients/events/list-events.md) or by setting up a webhook. For more information on how to set up webhooks, see the [Webhooks guide](../../core-concepts/webhooks.md).

A lock or unlock event looks like the following:

```json
{
  "event": {
    "event_id": "22222222-3333-4444-5555-666666666666",
    "device_id": "11111111-1111-1111-1111-444444444444",
    "event_type": "lock.locked",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2023-10-13T15:10:18.443Z",
    "occurred_at": "2023-10-13T15:09:08.531Z",
    "method": "unknown",
    "connected_account_id": "11111111-1111-1111-1111-222222222222"
  },
  "ok": true
}
```

For more information about the `lock.locked` and `lock.unlocked` attributes, please see[ Events](../../api-clients/events/).
