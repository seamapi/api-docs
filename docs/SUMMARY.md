# Table of contents

* [🎉 Seam Documentation](README.md)
* [🚲 Quick Start](quickstart.md)
* [🚀 Go Live!](going-live.md)

## 📖 Core Concepts

* [Overview](core-concepts/overview.md)
  * [Pricing and Billing](reference/help-center/how-often-am-i-billed-with-seam.md)
* [Seam Console](core-concepts/seam-console.md)
* [Workspaces](core-concepts/workspaces/README.md)
  * [API Keys](core-concepts/workspaces/api-keys.md)
  * [Personal Access Tokens](core-concepts/workspaces/personal-access-tokens.md)
* [Connected Accounts] (NEW TOPIC)
  * [Reconnecting an Account](device-guides/reconnecting-an-account.md)
* [Devices](core-concepts/devices.md)
* [Action Attempts](core-concepts/action-attempts.md)

## 🧰 Capability Guides

* [Overview](NEW TOPIC)
* [🔒 Smart Locks](products/smart-locks/README.md)
  * [Locking and Unlocking](products/smart-locks/lock-and-unlock.md)
  * [Managing Access Codes](products/smart-locks/access-codes/README.md)
    * [Creating Access Codes](products/smart-locks/access-codes/creating-access-codes.md)
    * [Retrieving Access Codes](products/smart-locks/access-codes/retrieving-access-codes.md)
    * [Modifying Access Codes](products/smart-locks/access-codes/modifying-access-codes.md)
    * [Deleting Access Codes](products/smart-locks/access-codes/deleting-access-codes.md)
    * [Lifecycle of Access Codes](products/smart-locks/access-codes/lifecycle-of-access-codes.md)
    * [Access Code Requirements for Door Locks](products/smart-locks/access-codes/access-code-requirements-for-door-locks.md)
    * [Streamlining Access Code Management from the Manufacturer App](products/smart-locks/access-codes/accommodating-manufacturer-mobile-apps.md)
    * [Handling Recurring Access Codes](reference/help-center/handling-recurring-access-codes.md)
    * [Managing Access Codes for Hospitality](device-guides/implementing-robust-access-code-management-for-guests.md)
    * [Troubleshooting Access Codes](products/smart-locks/access-codes/troubleshooting-access-code-issues.md)
    * [Managing Backup Access Codes](products/smart-locks/access-codes/backup-access-codes.md)
    * [Managing Offline Access Codes](products/smart-locks/access-codes/offline-access-codes.md)
    * [Migrating Existing Unmanaged Access Codes](products/smart-locks/access-codes/migrating-existing-access-codes.md)
* [🏢 Access Control Systems](products/access-systems/README.md)
  * [Managing Users](products/access-systems/user-management.md)
  * [Assigning Users to Access Groups](products/access-systems/assigning-users-to-access-groups.md)
  * [Issuing Credentials](products/access-systems/issuing-credentials.md)
  * [Suspending and Unsuspending Users](products/access-systems/suspending-and-unsuspending-users.md)
* [🌡 Thermostats](products/thermostats/README.md)
  * [HVAC Mode](products/thermostats/hvac-mode.md)
  * [Set Points](products/thermostats/set-points.md)
  * [Retrieving Thermostats](products/thermostats/retrieving-thermostats.md)
  * [Setting the Current HVAC and Fan Mode Settings](products/thermostats/configure-current-climate-settings.md)
  * [Setting the Default Climate Setting](products/thermostats/setting-the-default-climate-setting.md)
  * [Creating Climate Setting Schedules](products/thermostats/thermostats-climate-setting-schedules.md)
  * [Retrieving Climate Setting Schedules](products/thermostats/retrieving-climate-setting-schedules.md)
  * [Modifying Climate Setting Schedules](products/thermostats/modifying-climate-setting-schedules.md)
  * [Deleting Climate Setting Schedules](products/thermostats/deleting-climate-setting-schedules.md)
* [👂 Noise Sensors](products/noise-sensors/README.md)
  * [Configuring Noise Threshold Settings](products/noise-sensors/configure-noise-threshold-settings.md)

## 📖 Developer Components and Tools

* [Overview](NEW TOPIC)
* [Connect Webviews](core-concepts/connect-webviews/README.md)
  * [Embedding a Connect Webview in Your App](core-concepts/connect-webviews/embedding-a-connect-webview-in-your-app.md)
  * [Attaching Custom Data to the Connect Webview](core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md)
  * [Customizing Connect Webviews](core-concepts/connect-webviews/customizing-connect-webviews.md)
* [Webhooks](core-concepts/webhooks.md)
* [🧱 Seam Components](seam-components/overview/README.md)
    * [Getting Started] (NEW TOPIC)
    * [Get started with React](seam-components/overview/get-started-with-react-components-and-client-session-tokens.md)
    * [Get started with Angular](seam-components/overview/angular.md)
    * [Get started with Vue](seam-components/overview/vue.md)
    * [Get started with Client Side Components](seam-components/overview/get-started-with-client-side-components.md)
  * [Components](seam-components/react-components/README.md)
    * [Device Details](seam-components/react-components/device-details.md)
    * [Device Table](seam-components/react-components/device-table.md)
    * [Access Code Table](seam-components/react-components/access-code-table.md)
    * [Access Code Details](seam-components/react-components/access-code-details.md)
    * [Create Access Code Form](seam-components/react-components/create-access-code-form.md)
    * [Update Access Code Form](seam-components/react-components/update-access-code-form.md)
    * [Climate Setting Schedule Table](seam-components/react-components/climate-setting-schedule-table.md)
    * [Climate Setting Schedule Details](seam-components/react-components/climate-setting-schedule-details.md)
    * [Create Climate Setting Schedule Form](seam-components/react-components/create-climate-setting-schedule-form.md)
    * [Update Climate Setting Schedule Form](seam-components/react-components/update-climate-setting-schedule-form.md)
    * [Supported Devices Table](seam-components/react-components/supported-devices-table.md)
    * [Seam Provider](seam-components/react-components/seam-provider.md)
    * [Connect Account Button](seam-components/react-components/connect-account-button.md)
  * [Make a Supported Devices Page](seam-components/make-a-supported-devices-page.md)
* [Sandbox Devices and Systems](device-guides/sandbox-and-sample-data/README.md) <-- Are any brands missing?
  * [Virtual 2N Intercoms](device-guides/sandbox-and-sample-data/2n-intercoms-sample-data.md)
  * [Virtual August Locks](device-guides/sandbox-and-sample-data/august-locks-sample-data.md)
  * [Virtual DoorKing Callbox](device-guides/sandbox-and-sample-data/doorking-sample-data.md)
  * [Virtual dormakaba Oracode Devices](device-guides/sandbox-and-sample-data/dormakaba-oracode-sample-data.md)
  * [Virtual Ecobee Thermostat](device-guides/sandbox-and-sample-data/ecobee-sample-data.md)
  * [Virtual Genie Garage Openers](device-guides/sandbox-and-sample-data/genie-sample-data.md)
  * [Virtual Hubitat Hub-Connected Locks](device-guides/sandbox-and-sample-data/hubitat-hub-sample-data.md)
  * [Virtual igloohome Locks](device-guides/sandbox-and-sample-data/igloohome-sample-data.md)
  * [Virtual Kwikset Lock](device-guides/sandbox-and-sample-data/kwikset-locks-sample-data.md)
  * [Virtual Linear Callbox](device-guides/sandbox-and-sample-data/linear-sample-data.md) <-- Is this one still valid?
  * [Virtual Lockly Locks](device-guides/sandbox-and-sample-data/lockly-lock-sample-data.md)
  * [Virtual Minut Noise Sensors](device-guides/sandbox-and-sample-data/minut-noise-sensor-sample-data.md)
  * [Virtual NoiseAware Noise Sensors](device-guides/sandbox-and-sample-data/noiseaware-sample-data.md)
  * [Virtual Nuki Locks](device-guides/sandbox-and-sample-data/nuki-sample-data.md)
  * [Virtual PTI Storlogix Cloud Access Control System](device-guides/sandbox-and-sample-data/pti-storlogix-cloud-sample-data.md)
  * [Virtual Salto Locks](device-guides/sandbox-and-sample-data/salto-sample-data.md)
  * [Virtual Schlage Encode Locks](device-guides/sandbox-and-sample-data/schlage-encode-sample-data.md)
  * [Virtual SmartThings Locks](device-guides/sandbox-and-sample-data/smartthings-sample-data.md)
  * [Virtual TTLock Locks](device-guides/sandbox-and-sample-data/ttlock-sample-data.md)
  * [Virtual Wyze Locks](device-guides/sandbox-and-sample-data/wyze-sample-data.md)
  * [Virtual Yale Locks](device-guides/sandbox-and-sample-data/yale-sample-data.md)

## 📋 API Reference <-- Generated child sections: "HTTP API Reference," "Python SDK Reference," "Java SDK Reference," etc.

* [Overview](api-clients/overview.md)
* [Installation](api-clients/installation.md)
* [Authentication](api-clients/authentication.md)
* [Workspaces](api-clients/workspaces/README.md)
  * [Get Workspace](api-clients/workspaces/get-workspace.md)
  * [Reset Workspace](api-clients/workspaces/reset-workspace.md)
* [Connect Webviews](api-clients/connect-webviews/README.md)
  * [Create a Connect Webview](api-clients/connect-webviews/create-a-connect-webview.md)
  * [List Connect Webviews](api-clients/connect-webviews/list-connect-webviews.md)
  * [Get a Connect Webview](api-clients/connect-webviews/get-a-connect-webview.md)
  * [Delete a Connect Webview](api-clients/connect-webviews/delete-a-connect-webview.md)
  * [Embedding a Connect Webview](api-clients/connect-webviews/embedding-a-connect-webview.md)
* [Connected Accounts](api-clients/connected-accounts/README.md)
  * [Get a Connected Account](api-clients/connected-accounts/get-a-connected-account.md)
  * [List Connected Accounts](api-clients/connected-accounts/list-connected-accounts.md)
* [Action Attempts](api-clients/action-attempt/README.md)
  * [Get Action Attempt](api-clients/action-attempt/get-action-attempt.md)
* [Events](api-clients/events/README.md)
  * [List Events](api-clients/events/list-events.md)
  * [Get an Event](api-clients/events/get-an-event.md)
* [Devices](api-clients/devices/README.md)
  * [List Devices](api-clients/devices/list-devices.md)
  * [List Device Providers](api-clients/devices/list-device-providers.md)
  * [Get a Device](api-clients/devices/get-device.md)
  * [Update a Device](api-clients/devices/update-device.md)
  * [List Unmanaged Devices](api-clients/devices/list-unmanaged-devices.md)
  * [Get an Unmanaged Device](api-clients/devices/get-device-1.md)
  * [Update an Unmanaged Device](api-clients/devices/update-unmanaged-device.md)
* [Locks](api-clients/locks/README.md)
  * [Get Lock](api-clients/locks/get-lock.md)
  * [Lock a Lock](api-clients/locks/lock-a-lock.md)
  * [Unlock a Lock](api-clients/locks/unlock-a-lock.md)
  * [List Locks](api-clients/locks/list-locks.md)
* [Noise Sensors](api-clients/noise-sensors/README.md)
  * [List Noise Thresholds](api-clients/noise-sensors/list-noise-thresholds.md)
  * [Create Noise Thresholds](api-clients/noise-sensors/create-noise-threshold.md)
  * [Update Noise Threshold](api-clients/noise-sensors/update-noise-threshold.md)
  * [Delete Noise Threshold](api-clients/noise-sensors/delete-noise-threshold.md)
* [Thermostats](thermostats/README.md)
  * [List Thermostats](thermostats/list-thermostats.md)
  * [Get a Thermostat](thermostats/get-thermostat.md)
  * [Update a Thermostat](api-clients/thermostats/update-a-thermostat.md)
  * [Set to Heat Mode](api-clients/thermostats/set-to-heat-mode.md)
  * [Set to Cool Mode](api-clients/thermostats/set-to-cool-mode.md)
  * [Set to Heat-Cool (Auto) Mode](api-clients/thermostats/set-to-heat-cool-auto-mode.md)
  * [Set to Off Mode](api-clients/thermostats/set-to-off-mode.md)
  * [Set Fan Mode](api-clients/thermostats/set-fan-mode.md)
  * [Climate Setting Schedules](thermostats/climate-setting-schedules/README.md)
    * [Create a Climate Setting Schedule](thermostats/climate-setting-schedules/create-climate-setting-schedule.md)
    * [List Climate Setting Schedules](thermostats/climate-setting-schedules/list-climate-setting-schedules.md)
    * [Get a Climate Setting Schedule](thermostats/climate-setting-schedules/get-climate-setting-schedule.md)
    * [Update a Climate Setting Schedule](thermostats/climate-setting-schedules/update-climate-setting-schedule.md)
    * [Delete a Climate Setting Schedule](thermostats/climate-setting-schedules/delete-climate-setting-schedule.md)
* [Access Codes](api-clients/access-codes/README.md)
  * [Create an Access Code](api-clients/access-codes/create-an-access-code.md)
  * [Create many Access Codes](api-clients/access-codes/create-many-access-codes.md)
  * [List Access Codes](api-clients/access-codes/list-access-codes.md)
  * [Get an Access Code](api-clients/access-codes/get-an-access-code.md)
  * [Update an Access Code](api-clients/access-codes/update-an-access-code.md)
  * [Delete an Access Code](api-clients/access-codes/delete-an-access-code.md)
  * [List Unmanaged Access Codes](api-clients/access-codes/list-unmanaged-access-codes.md)
  * [Convert an Unmanaged Access Code](api-clients/access-codes/convert-an-unmanaged-access-code.md)
  * [Delete an Unmanaged Access Code](api-clients/access-codes/delete-an-unmanaged-access-code.md)
  * [Pull Backup Access Code](api-clients/access-codes/pull-backup-access-code.md)
* [Access Control Systems](api-clients/access-control-systems/README.md)
  * [Systems](api-clients/access-control-systems/systems/README.md)
    * [List Systems](api-clients/access-control-systems/systems/list-systems.md)
    * [Get a System](api-clients/access-control-systems/systems/get-system.md)
  * [Users](api-clients/access-control-systems/users/README.md)
    * [Create a User](api-clients/access-control-systems/users/create-user.md)
    * [List Users](api-clients/access-control-systems/users/list-users.md)
    * [Get a User](api-clients/access-control-systems/users/get-user.md)
    * [Update a User](api-clients/access-control-systems/users/update-user.md)
    * [Suspend a User](api-clients/access-control-systems/users/suspend-a-user.md)
    * [Unsuspend a User](api-clients/access-control-systems/users/unsuspend-a-user.md)
    * [Delete a User](api-clients/access-control-systems/users/delete-user.md)
    * [Add a User to an Access Group](api-clients/access-control-systems/users/add-user-to-access-group.md)
    * [Remove a User from an Access Group](api-clients/access-control-systems/users/remove-user-from-access-group.md)
  * [Access Groups](api-clients/access-control-systems/access-groups/README.md)
    * [List Access Groups](api-clients/access-control-systems/access-groups/list-access-groups.md)
    * [Get an Access Group](api-clients/access-control-systems/access-groups/get-access-group.md)
    * [Add a User to an Access Group](api-clients/access-control-systems/access-groups/add-user-to-access-group.md)
    * [Remove a User from an Access Group](api-clients/access-control-systems/access-groups/remove-user-from-access-group.md)
    * [List Users in an Access Group](api-clients/access-control-systems/access-groups/list-users-in-access-group.md)
  * [Credentials](api-clients/access-control-systems/credentials/README.md)
    * [Create a Credential for a User](api-clients/access-control-systems/credentials/create-credential-for-user.md)
    * [List Credentials for a User](api-clients/access-control-systems/credentials/list-credentials-for-user.md)
    * [Get a Credential](api-clients/access-control-systems/credentials/get-credential.md)
    * [Delete a Credential](api-clients/access-control-systems/credentials/delete-credential.md)

## Reference <-- Delete?

* [Device Provider Metadata](reference/device-provider-metadata.md) <-- Move conceptual content to XXX_metadata row in device.properties Properties table. Move brand-specific content to corresponding device guides. Delete topic. (Get provider metadata is just get device.)
* [Glossary](reference/glossary.md) <-- There are only four entries, and they are redundant with info. elsewhere. Either expand significantly or delete.

## Developer Advice or Developer Corner or Developer Help <-- For less-formal, "Help Center" types of topics. Topics only go here if they are truly not "baked" enough to go anywhere else or if there is truly no other relevant parent section.

* [Overview](reference/help-center/README.md)
  * [What is an Action Attempt, when is it used?](reference/help-center/what-is-an-action-attempt-when-is-it-used.md) <-- Is this topic still useful, or is it redundant with core-concepts/action-attempts.md?
  * [How often am I billed with Seam?](reference/help-center/how-often-am-i-billed-with-seam.md) <-- Rename to "Pricing and Billing," expand (including free vs. paid tiers, etc.), and move to be a child topic of core-concepts/overview.md.
  * [Handling Recurring Access Codes](reference/help-center/handling-recurring-access-codes.md) <-- Move to be a child topic of products/smart-locks/access-codes/README.md.
  * [Rate Limits and Guardrails](device-guides/rate-limits-and-guardrails.md)

## 🎛 Device Integration Guides

* [Overview](NEW TOPIC)
* [2N Intercom Systems](device-guides/2n-intercom-systems.md)
* [4SUITES Locks](device-guides/4suites-locks.md)
* [August Locks](device-guides/august-locks.md)
* [Avigilon Alta Access System](device-guides/avigilon-alta-access-system.md)
* [Brivo Access](device-guides/brivo-access.md)
* [dormakaba Oracode Locks](device-guides/dormakaba-oracode-locks.md)
* [ecobee Thermostats](device-guides/ecobee-thermostats.md)
* [Hubitat Elevation Hub](device-guides/hubitat-elevation-hub.md)
* [igloohome Locks](device-guides/igloohome-locks.md)
* [Kwikset Locks](device-guides/kwikset-locks.md)
* [Lockly Locks](device-guides/lockly-locks.md)
* [Minut Sensors](device-guides/minut-sensors.md)
* [NoiseAware Sensors](device-guides/noiseaware-sensors.md)
* [Nuki Locks](device-guides/nuki-locks.md)
* [PTI Storlogix Cloud](device-guides/pti-storlogix-cloud.md)
* [Salto Locks](device-guides/salto-locks.md)
* [TTLock Locks](device-guides/ttlock-locks.md)
* [Wyze Locks](device-guides/wyze-locks.md)
* [Yale Locks](device-guides/yale-locks.md)
* [Get started with Smart Locks](device-guides/get-started-with-smartlocks-api.md) <-- Delete. Redirect URL if needed for SEO. Move anything that's not redundant and still needed to the Quick Start.
* [Get started with August Locks](device-guides/get-started-with-august-locks.md) <-- Delete. Redirect URL if needed for SEO.
* [Get started with ControlByWeb Devices](device-guides/get-started-with-controlbyweb-devices.md) <-- Add device guide. Then... Delete. Redirect URL if needed for SEO.
* [Get started with Ecobee Thermostats](device-guides/get-started-with-ecobee-thermostats.md) <-- Delete. Redirect URL if needed for SEO.
* [Get started with Nuki Locks](device-guides/get-started-with-nuki-locks.md) <-- Delete. Redirect URL if needed for SEO.
* [Get started with Kwikset Wifi Locks](device-guides/get-started-with-kwikset-wifi-locks.md) <-- Delete. Redirect URL if needed for SEO.
* [Get started with Dormakaba Oracode Locks](device-guides/get-started-with-dormakaba-oracode-locks.md) <-- Delete. Redirect URL if needed for SEO.
* [Get started with Schlage Locks](device-guides/get-started-with-schlage-locks.md) <-- Add device guide. Then... Delete. Redirect URL if needed for SEO.
* [Get started with Yale Locks](device-guides/get-started-with-yale-locks.md) <-- Delete. Redirect URL if needed for SEO.
* [Get started with Minut Sensors](device-guides/get-started-with-minut-sensors.md) <-- Delete. Redirect URL if needed for SEO.
* [Get started with 2N Intercoms](device-guides/get-started-with-2n-intercoms.md) <-- Delete. Redirect URL if needed for SEO.
* [Get started with SmartThings Hubs + Smart Locks](device-guides/get-started-with-smartthings-hubs-+-smart-locks.md) <-- Add device guide. Then... Delete. Redirect URL if needed for SEO.
* [Get started with Salto Locks](device-guides/get-started-with-salto-locks.md) <-- Delete. Redirect URL if needed for SEO.
* [Get started with TTLock Devices](device-guides/get-started-with-ttlock-devices.md) <-- Delete. Redirect URL if needed for SEO.
* [Get started with NoiseAware Sensors](device-guides/get-started-with-noiseaware-sensors.md) <-- Delete. Redirect URL if needed for SEO.
* [Get started with Igloohome Locks](device-guides/get-started-with-igloo-locks.md) <-- Delete. Redirect URL if needed for SEO.
* [Get started with Wyze Locks](device-guides/get-started-with-wyze-locks.md) <-- Delete. Redirect URL if needed for SEO.
* [Reconnecting an Account](device-guides/reconnecting-an-account.md) <-- Move to be a child topic of new Connected Accounts topic.
* [Access Code Management for Hospitality](device-guides/implementing-robust-access-code-management-for-guests.md) <-- Move to be a child topic of api-clients/access-codes/README.md.
* [Rate Limits and Guardrails](device-guides/rate-limits-and-guardrails.md) <-- Move to be a child topic of reference/help-center/README.md?

## 🌉 Seam Bridge

* [Overview](NEW TOPIC)
* [Connecting the Seam Bridge to DoorKing](seam-bridge/connecting-with-doorking.md) <-- Is the Seam Bridge only applicable to DoorKing?

## Device Manufacturer Advice or Device Manufacturer Guidance or Device Manufacturer Help

* [Overview](NEW TOPIC)
* [Creating a Seam-Compatible Intercom API](for-device-manufacturers/creating-a-seam-compatible-intercom-api/README.md)
  * [Creating OAuth Endpoints](for-device-manufacturers/creating-a-seam-compatible-intercom-api/creating-oauth-endpoints.md)
  * [Creating Intercom CRUD Endpoints](for-device-manufacturers/creating-a-seam-compatible-intercom-api/creating-intercom-crud-endpoints.md)
  * [Creating Access Code CRUD Endpoints](for-device-manufacturers/creating-a-seam-compatible-intercom-api/creating-access-code-crud-endpoints.md)
  * [Creating the Health Endpoint](for-device-manufacturers/creating-a-seam-compatible-door-locks-api/creating-the-health-endpoint.md)
* [Creating a Seam-Compatible Door Locks API](for-device-manufacturers/creating-a-seam-compatible-door-locks-api/README.md)
  * [Creating OAuth Endpoints](for-device-manufacturers/creating-a-seam-compatible-door-locks-api/creating-oauth-endpoints.md)
  * [Creating Door Lock CRUD Endpoints](for-device-manufacturers/creating-a-seam-compatible-door-locks-api/creating-door-lock-crud-endpoints.md)
  * [Creating Access Code CRUD Endpoints](for-device-manufacturers/creating-a-seam-compatible-door-locks-api/creating-access-code-crud-endpoints.md)
  * [Creating the Health Endpoint](for-device-manufacturers/creating-a-seam-compatible-intercom-api/creating-the-health-endpoint.md)
