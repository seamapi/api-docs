---
description: Learn about how to diagnose and fix access code issues.
---

# Troubleshooting Access Codes

Seam might encounter issues when programming an access code on a lock. This troubleshooting guide helps you to determine the cause of access code programming issues and learn how to fix these issues.

When scheduling an access code on a device that supports [native scheduling](./#native-scheduling), Seam begins to load it onto the device three days in advance, unless it's a [just-in-time code](./#native-scheduling). Seam records any errors or warnings on the access code when it attempts to set it on the device. This approach ensures that you have ample time to address any issues, using the mitigation steps in this guide. Note that not all device brands support the ability to program codes in advance. See [Native Scheduling—Supported Providers](./#native-scheduling-supported-providers) for details.

## Determine the issue

The first step is to figure out what the issue is from Seam's point of view. Make a [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) or [List Access Codes](../../../api-clients/access-codes/list-access-codes.md) request, and look at the `errors` and `warnings` payloads on the access code object. Look at the error and warning codes, and go to the matching remedy below for next steps.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
access_code = seam.access_codes.get("1d9fe873-3393-4b29-b93e-87fe7f923462")

pprint("Errors:")
pprint(access_code.errors)
pprint("Warnings:")
pprint(access_code.warnings)
```

**Response:**

```
'Errors:'
[...]
'Warnings:'
[...]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "a7b85c1f-9963-4fa8-b106-7ce580a41256"
}'
```

**Response:**

```json
{
  "access_code": {
    "access_code_id": "a7b85c1f-9963-4fa8-b106-7ce580a41256",
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
    "name": "my ongoing code",
    "appearance": {
      "name": "my ongoing code",
      "last_name": "ongoing code",
      "first_name": "my"
    },
    "code": "5048",
    "common_code_key": null,
    "type": "ongoing",
    "status": "set",
    "pulled_backup_access_code_id": null,
    "is_backup_access_code_available": true,
    "created_at": "2023-10-19T08:10:24.248Z",
    "errors": [...],
    "warnings": [...],
    "is_managed": true,
    "is_external_modification_allowed": true
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const accessCode = await seam.accessCodes.get({
  access_code_id: "38a569bb-40b9-4e42-97bd-bb78f8d96777"
})

console.log("Errors:")
console.log(accessCode.errors)
console.log("Warnings:")
console.log(accessCode.warnings)
```

**Response:**

```json
Errors:
[...]
Warnings:
[...]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
access_code = client.access_codes.get("8f1f576f-ee52-4f12-97f6-7a1593965dec")
puts "Errors:"
puts access_code.errors
puts "Warnings:"
puts access_code.warnings
```

**Response:**

```
Errors:
Warnings:
```
{% endtab %}

{% tab title="PHP" %}
```php
$access_code = $seam->access_codes->get('ed4a1f62-9070-4379-8c46-ea30a99e4d74');

if (property_exists($access_code, 'errors')) {
    echo json_encode($access_code->errors);
}

if (property_exists($access_code, 'warnings')) {
    echo json_encode($access_code->warnings);
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var accessCode = seam.AccessCodes.Get(accessCodeId: "65f4a1d3-5f3a-45a4-a6b7-372c7f16c007");

Console.WriteLine("Access code ID: " + accessCode.AccessCodeId);
Console.WriteLine("Errors:");
Console.WriteLine(accessCode.Errors);
Console.WriteLine("Warnings:");
Console.WriteLine(accessCode.Warnings);
```

**Response:**

```
Errors:
[]
Warnings:
[]
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
AccessCode accessCode = seam.accessCodes()
        .get(AccessCodesGetRequest.builder()
                .accessCodeId("cd7f5b14-56e3-48b1-a351-9cab819eea6a")
                .build());
System.out.println("Errors:");
System.out.println(accessCode.getErrors());
System.out.println("Warnings:");
System.out.println(accessCode.getWarnings());
```

**Response:**

```json
Errors:
Optional[[]]
Warnings:
Optional[[]]
```
{% endtab %}
{% endtabs %}

***

## How to investigate and fix access code errors

See our list of recommended mitigations for different error codes:

| Error Code                                         | Recommended remedies                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `failed_to_set_on_device`                          | Check the error message for more specific mitigation steps or use a [backup access code](backup-access-codes.md)                                                                                                                                                                                                                                                                                             |
| `failed_to_remove_from_device`                     | Check the error message for more specific mitigation steps. Confirm using the provider's app if the access code is still on the device, as it may have been deleted through another source.                                                                                                                                                                                                                  |
| `code_modified_external_to_seam`                   | To resolve a conflict due to a Seam access code being modified or created by an external source, you can delete and re-create the code through Seam or convert the code from an unmanaged to managed access code (if it was created by an external source). By default, Seam will attempt to reset the code.                                                                                                 |
| `august_device_programming_delay`                  | Verify that the device has a stable internet connection (e.g. by attempting to lock and unlock the device through Seam) and troubleshoot any connectivity issues that may be causing intermittent or unreliable access to the device.                                                                                                                                                                        |
| `august_device_slots_full`                         | Delete existing access codes on the device to free up slots for new access codes. This should be done through Seam if possible.                                                                                                                                                                                                                                                                              |
| `august_lock_bad_access_code_format`               | Review the pin code and name requirements specific to your August device and update the access code on Seam to match these requirements.                                                                                                                                                                                                                                                                     |
| `august_lock_temporarily_offline`                  | Verify that the device has a stable internet connection (e.g. by attempting to lock and unlock the device through Seam) and troubleshoot any connectivity issues that may be causing intermittent or unreliable access to the device.                                                                                                                                                                        |
| `duplicate_code_on_device`                         | Check for [unmanaged access codes](migrating-existing-access-codes.md) through the provider's app or Seam with the same pin code or name. If a duplicate is found, either delete the duplicate code or convert it to a managed code.                                                                                                                                                                         |
| `salto_site_user_not_subscribed`                   | Check the Salto user's subscription and your Salto site's subscription limit.                                                                                                                                                                                                                                                                                                                                |
| `smartthings_failed_to_set_after_multiple_retries` | Check for duplicate codes caused by third-party software managing the device. RBoy Apps in particular can cause this, so disable these for devices that are managed using Seam if possible.                                                                                                                                                                                                                  |
| `smartthings_no_free_slots_available`              | Delete existing access codes on the device to free up slots for new access codes. Note that in addition to the codes managed by Seam, there are 3 other codes on the device.                                                                                                                                                                                                                                 |
| `kwikset_unable_to_confirm_code`                   | This error is usually caused by a duplicate pin code on the device that was set outside of Seam. Try to update this access code's 'code' value through Seam Console or by using our [Update Access Code](../../../api-clients/access-codes/update-an-access-code.md) endpoint                                                                                                                                |
| `kwikset_unable_to_confirm_deletion`               | You can see a master list of access codes from the Kwikset mobile app (must be from a mobile device connected to the lock through Bluetooth). If the code is not in the list, it may have already been deleted by a source other than Seam. In this case, contact us, and we will remove our record of the access code. Otherwise, we will continue to attempt and confirm deletion of the code on the lock. |
