# Initializing the Seam Mobile SDK

## 1. Install the Seam SDK

The Seam SDK is [available for download on request](mailto:support@seam.co), and is [fully documented](../../../developer-tools/mobile-sdks/android-sdk.md).

{% hint style="info" %}
You must also use the Seam API to perform server-side actions. Consequently, [install a Seam server-side SDK](../../../api-clients/installation.md) in the language of your choice if you have not done so already.
{% endhint %}

{% tabs %}
{% tab title="Android Kotlin" %}
To install the Seam Android SDK, add `seam-phone-sdk-android` to the `dependencies` block of your [`app/build.gradle`](https://developer.android.com/studio/build/dependencies) file.

{% code title="build.gradle.kts" %}
```kotlin
plugins {
    id("com.android.application")
}

android { ... }

dependencies {
    // ...

    // Add the Seam Android SDK.
    implementation(project(":seam-phone-sdk-android"))
}
```
{% endtab %}

{% tab title="iOS Swift" %}
To install the Seam iOS SDK, add the `SeamSdk.podspec` to the `target` block of your [Podfile](https://guides.cocoapods.org/using/using-cocoapods.html).

{% code title="Podfile" %}
```ruby
use_frameworks!

platform :ios, '...'

target 'YourApp' do
  // ...
  // Local pod install with file path to SeamSdk.podspec
  pod 'SeamSdk', :path => './SeamSdk.podspec'
end
```
{% endcode %}
{% endtab %}
{% endtabs %}

***

## 2. Implement any Manufacturer-Specific Requirements

See the [device or system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems) for the access control system or device for which you are planning to develop. Further, you may need to register for developer access with the ACS that you have chosen to use.

***

## 3. Configure a User Identity for your App User and Generate a Client Session Token

A [user identity](../../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md) enables the application to request a user's mobile access permissions and use the app to unlock doors.

First, use the Seam API to create a [user identity](../../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) that will correspond to the App User Account using your internal user ID or other identifying information.&#x20;

Then, using the user identity, create a [client session](../../../core-concepts/authentication/client-session-tokens/) and capture the resulting [client session token](../../../core-concepts/authentication/client-session-tokens/). This token will be used to authenticate the user on your application.

{% tabs %}
{% tab title="Python" %}
```python
# Create the user identity.
user_identity = seam.user_identities.create(
    email_address="jane@example.com"
)

# Create the client session.
client_session = seam.client_sessions.create(
    user_identity_ids=[user_identity.user_identity_id]
)

# Use this token to launch your mobile controller.
token = client_session.token
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Create the user identity.
user_identity=$(curl -X 'POST' \
  'https://connect.getseam.com/user_identities/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
        "email_address": "jane@example.com"
  }')
  
# Get the user identity ID.
user_identity_id=$(echo $user_identity | jq -r '.user_identity.user_identity_id')

# Create the client session.
client_session=$(curl -X 'POST' \
  'https://connect.getseam.com/client_sessions/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
        \"user_identity_ids\": [\"$user_identity_id\"]
  }")

# Get the resulting client session token and 
# use this token to launch your mobile controller.
token=$(echo $client_session | jq -r '.client_session.token')
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
// Create the user identity.
const user_identity = await seam.userIdentities.create({
    email_address: "jane@example.com"
});

// Create the client session.
const client_session = await seam.clientSessions.create({
    user_identity_ids: [user_identity.user_identity_id]
});

// Use this token to launch your mobile controller.
const token = client_session.token;
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# Create the user identity.
user_identity = client.user_identities.create(
    email_address: "jane@example.com"
)

# Create the client session.
client_session = client.client_sessions.create(
    user_identity_ids: [user_identity.user_identity_id]
)

# Use this token to launch your mobile controller.
token = client_session.token
```
{% endtab %}

{% tab title="PHP" %}
```php
// Create the user identity.
$user_identity = $seam->user_identities->create(
  email_address: "jane@example.com"
);

// Create the client session.
$client_session = $seam->client_sessions->create(
  user_identity_ids: [$user_identity->user_identity_id]
);

// Use this token to launch your mobile controller.
$token = $client_session->token;
```
{% endtab %}

{% tab title="Go" %}
```go
// Create the user identity.
response, uErr := client.UserIdentities.Create(context.Background(), &api.UserIdentitiesCreateRequest{
    EmailAddress: api.String("jane@example.com"),
})

if uErr != nil {
    return uErr
}

// Create the client session.
clientSession, uErr := client.ClientSessions.Create(context.Background(), &api.ClientSessionsCreateRequest{
  UserIdentityIds: []string{response.UserIdentity.UserIdentityId},
})

// Use this token to launch your mobile controller.
token := clientSession.Token
fmt.Println("Token:", token)

return nil
```
{% endtab %}
{% endtabs %}

***

## 4. Configure the User Identity for an Access Platform or Lock Brand

To enable a user identity to utilize mobile credentials from different platforms or unlock various lock brands through our SDK, you may need to launch an enrollment automation for each system or brand you wish to include. Please refer to [system integration guides](../../../device-and-system-integration-guides/overview.md#access-control-systems) for more details on how to launch an enrollment automation for a particular system.

To launch an enrollment automation, include the `user_identity_id`, and include the system-specific settings, such as the `credential_manager_acs_system_id`.

{% tabs %}
{% tab title="Python" %}
```python
# Launch the enrollment automation.
seam.user_identities_enrollment_automations.launch(
    # Use the acs_system_id for the credential manager.
    credential_manager_acs_system_id="6737e186-8d54-48ce-a7da-a0be4d252172",
    user_identity_id=user_identity.user_identity_id,
    # Automatically create a new credential manager user
    # or specify the desired existing credential_manager_acs_user_id.
    create_credential_manager_user=True
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Get the credential manager ACS system ID.
# credential_manager_acs_system_id=...

# Launch the enrollment automation.
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/enrollment_automations/launch' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
        \"credential_manager_acs_system_id\": \"$credential_manager_acs_system_id\",
        \"user_identity_id\": \"$user_identity_id\"
  }"
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
// Launch the enrollment automation.
await seam.userIdentities.enrollmentAutomations.launch({
    // Use the acs_system_id for the credential manager.
    credential_manager_acs_system_id: "6737e186-8d54-48ce-a7da-a0be4d252172",
    user_identity_id: user_identity.user_identity_id,
    // Automatically create a new credential manager user
    // or specify the desired existing credential_manager_acs_user_id.
    create_credential_manager_user: true
});
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# Launch the enrollment automation.
client.user_identities.enrollment_automations.launch(
    # Use the acs_system_id for the credential manager.
    credential_manager_acs_system_id: "6737e186-8d54-48ce-a7da-a0be4d252172",
    user_identity_id: user_identity.user_identity_id,
    # Automatically create a new credential manager user
    # or specify the desired existing credential_manager_acs_user_id.
    create_credential_manager_user: true
)
```
{% endtab %}

{% tab title="PHP" %}
```php
// Launch the enrollment automation.
$seam->user_identities->enrollment_automations->launch(
  // Use the acs_system_id for the credential manager.
  credential_manager_acs_system_id: "6737e186-8d54-48ce-a7da-a0be4d252172",
  user_identity_id: $user_identity->user_identity_id,
  // Automatically create a new credential manager user
  // or specify the desired existing credential_manager_acs_user_id.
  create_credential_manager_user: true
);
```
{% endtab %}

{% tab title="Go" %}
```go
// Launch the enrollment automation.
client.UserIdentities.EnrollmentAutomations.Launch(context.Background(), &useridentities.EnrollmentAutomationsLaunchRequest{
  UserIdentityId: response.UserIdentity.UserIdentityId,
  // Use the AcsSystemId for the credential manager.
  CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172",
  // Automatically create a new credential manager user
  // or specify the desired existing CredentialManagerAcsUserId.
  CreateCredentialManagerUser: api.Bool(true),
})
```
{% endtab %}
{% endtabs %}

***

## 5. Initialize the Mobile SDK with the Client Session Token

Use the client session token generated earlier to initialize the Seam Mobile SDK. This initializes the Mobile SDK for the app user, and retrieves the relevant provider-specific settings. This also launches a background process that will continually poll for any updates to the access permissions.

### Initialization and Handling Configuration Errors

The initialization process may fail if the Seam workspace or provider-specific settings are not configured properly. If the initialization process encounters any irrecoverable errors, this block will catch these exceptions, specifically those identified as `SeamError`. These errors point to development errors, and should be addressed by making sure that your Workspace and User Identity is configured properly.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
import co.seam.sdk.Seam
import co.seam.sdk.SeamError


// Initialize the Seam client with the client session token. nclude the
// Android activity context and a .
val seam = SeamClient(
    clientSessionToken = seamClientSessionToken,
    androidContext = activityContext,
    seamEventHandler = 
)

try {
    seam.phone.native.initialize(
        // Opt into features with these options
        enableUnlockWithTap = true
    )
} catch (e: SeamError) {
    // Handle unrecoverable initialization errors.
}
```
{% endtab %}

{% tab title="iOS Swift" %}
```swift
import Seam

//  client session token for th user
let clientSessionToken = 

let seam = SeamClient(
    clientSessionToken: clientSessionToken,
    seamEventDelegate: 
)

try seam.phone.native.initialize(
    enableUnlockWithTap: true
)
```
{% endtab %}
{% endtabs %}

### Handling Provider Initialization Errors from the Background Process

Any failures during the background process will produce errors. These errors can be accessed from the error list, and events will also be emitted. To handle these operational errors, you may log the error in logs or displaying a message to the user.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
fun (
    seam: Seam,
    event: SeamEvent
) {
    // If the event is under the phone namespace, the phone state may have changed.
    if event is SeamEvent.Phone {
        val phone = seam.phone.get().nativeMetadata
    
        // Check for the desired state of the phone for all app features to work.
        if (!phone.isInitialized || !phone.canUnlockWithTap) {
            // Check errors and display them to the user.
            phone.errors
            // For example:
            // SeamError.Phone.Native.MissingRequiredAndroidPermissions: Missing required permissions.
            // SeamError.Phone.Native.InternetConnectionRequired: No internet.
            // SeamError.AuthenticationError: Invalid client session token.
            // SeamError.Internal.Phone.Native.ProviderInitializationFailure: Invalid provider configuration.
    	    // SeamError.Internal.Phone.Native.ProviderInitializationFailure: Android version not compatible.
    
            // Display error message and disable functionality/access, 
            // until the user resolves the issue.
        } else {
          // Set the UI state to indicate that all app features are working.
        }
    }
}

val seam = SeamClient(
  seamEventHandler = eventHandler,
  // ...
)
```
{% endtab %}

{% tab title="iOS Swift" %}
```swift
func (
    seam: Seam,
    event: SeamEvent
) {
    // If the event is under the phone namespace, the phone state may have changed.
    switch(event) {
    case .phone:
        let phone = seam.phone.get().nativeMetadata
        
        // Check for the desired state of the phone for all app features to work.
        if (!phone.isInitialized || !phone.canUnlockWithTap) {
            // check errors and display them to the user.
            phone.errors
            // For example:
            // seam.phone.native.missing_required_ios_permissions: Missing required permissions.
            // seam.phone.native.internet_connection_required: No internet.
            // seam.authentication_error: Invalid client session token.
            // seam.internal.phone.native.provider_initialization_failure: Invalid provider configuration.
        } else {
            // Set the UI state to indicate that all app features are working.
        }
    }
}

let seam = SeamClient(
  seamEventHandler = eventHandler,
  // ...
)
```
{% endtab %}
{% endtabs %}
