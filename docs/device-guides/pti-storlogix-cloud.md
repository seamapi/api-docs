---
description: Guide for using the PTI Storlogix Cloud with Seam
---

# PTI Storlogix Cloud

## Overview

This integration uses [Storlogix Cloud](https://ptisecurity.com/products/storlogixcloudplatform/) to create [users](../products/access-systems/#what-is-a-user), [generate PIN codes](../capability-guides/access-systems/managing-credentials.md#create-a-pin-code-based-credential), and [grant users access](../products/access-systems/#what-is-an-access-group) to different access areas within storage rental unit facilities.

***

## Supported Devices and Capabilities

Seam integrates with any site that has Storlogix Cloud installed.

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  client-session-token="seam_cst126DAjfor_2kxn8QAAEUkj3Zu4Nr1Aoauy"
  manufacturers='["PTI"]'
/>" %}

We support the following features:

*   [**User Management**](../products/access-systems/user-management.md)

    You can administer individual [users](../products/access-systems/#what-is-a-user) and add them to [access groups](../products/access-systems/#what-is-an-access-group) as needed.

    To authorize a user, [add the user to a `pti_access_level` access group](../products/access-systems/assigning-users-to-access-groups.md). If you wish to document that a user has rented a specific unit, include them in a `pti_unit` access group using the same endpoint. Note that certain access levels mandate a user be part of a `pti_unit` linked to that access area before they can enter those zones.
*   [**Manage ACS Credentials**](../capability-guides/access-systems/managing-credentials.md)

    You can create PIN code-based and key card-based ACS credentials. Note that you can assign a unique PIN code to each user, thereby facilitating secure site access.

***

### Device Provider Key

To create a [Connect Webview](../core-concepts/connect-webviews/) that enables you to connect your PTI Storlogix Cloud to Seam, include the `pti` [device provider key](../api-clients/connect-webviews/#device-provider-keys) in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webview](../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Setup Instructions&#x20;

To connect your Storlogix site, you must provide the following information about your facility to Seam:

* Site code
* Site key
* Operator username
* Operator password
* Storlogix Cloud dashboard URL

To obtain this necessary information:

1. Log in to your Storlogix Cloud dashboard using your operator username and password.
2. Note the page URL that is in the address bar at the top of your web browser, as well as the operator username and password that you used to log in to the Storlogix Cloud dashboard.
3. In the top, left corner of the Storlogix Cloud dashboard, click the three-bar button.
4. Click **Operations > Company Info**.
5. Click the **Device Settings** tab.
6. Note the **SiteKey** and **SiteCode** values.
7. Log in to the [Seam Connect Webview](../core-concepts/connect-webviews/) and specify these noted values to connect your PTI system to Seam.

{% hint style="info" %}
If you do not have access to your Storlogix Cloud dashboard—that is, if you are unsure of your Storlogix Cloud login credentials or the dashboard URL—contact the [PTI Security Systems Customer Support team](https://ptisecurity.my.salesforce-sites.com/apex/Support). They can assist you in retrieving your login details.

When contacting a PTI Security Systems Customer Support agent, have your PTI Support PIN or facility information ready.

Make sure that you obtain the appropriate credentials specifically for Storlogix Cloud dashboard access.
{% endhint %}

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td></td><td><a href="https://ptisecurity.my.salesforce-sites.com/apex/Support"><strong>PTI Security Systems Customer Support</strong></a></td><td></td><td><a href="../.gitbook/assets/pti-help-center.png">pti-help-center.png</a></td><td><a href="https://ptisecurity.my.salesforce-sites.com/apex/Support">https://ptisecurity.my.salesforce-sites.com/apex/Support</a></td></tr></tbody></table>

***

## Brand-Specific PIN Code Restrictions

The PIN code value must be an integer in the range 1-4294967296.

***

## Assigning Access Permissions to Users

For PTI Storlogix Cloud, you must add the [users](../products/access-systems/#what-is-a-user) to `pti_access_level` and `pti_unit` [access groups](../products/access-systems/#what-is-an-access-group) to give them access to their storage unit.

For example, you could assign them to the "Building A - 3/F" access level and give them access to the "A301" unit. For details, see [Assigning Users to Access Groups](../products/access-systems/assigning-users-to-access-groups.md).

***

## Brand-Specific Warnings

The following warning might appear for PTI-related users:

<table data-full-width="true"><thead><tr><th width="384">Warning</th><th>Description</th></tr></thead><tbody><tr><td><code>user.pti_access_level_not_assigned</code></td><td>A PTI user needs to be assigned to an access level before their access credentials can be used to enter the site.</td></tr></tbody></table>

***

## Where to Order

To find a local PTI Security Systems installer, contact the PTI Security Systems Sales team. You can find the contact information for this team on the [PTI Security Systems Sales Contact Us Page](https://ptisecurity.com/contact-us-sales/).



<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>PTI Security Systems Sales Contact Us Page</strong></td><td></td><td><a href="https://ptisecurity.com/contact-us-sales/">https://ptisecurity.com/contact-us-sales/</a></td><td><a href="../.gitbook/assets/contact-pti-sales.png">contact-pti-sales.png</a></td></tr></tbody></table>
