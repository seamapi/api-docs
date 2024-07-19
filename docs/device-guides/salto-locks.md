---
description: Guide for using Salto door locks with Seam
---

# Salto Locks

## Overview

Salto Systems produces world-class electronic access control solutions. Their locks work with a vast array of entrance types, from traditional doors and elevators, to key cylinders and parking stiles. They also support a versatile range of key credentials -- their locks work with RFID tags, mobile keys, and PIN codes. Using their mobile app and app dashboard, businesses can easily assign, monitor, and revoke access rights.

***

## Supported Devices

This integration works any devices connected via their [SaltoKS platform](https://saltoks.com/).

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  client-session-token="seam_cst126DAjfor_2kxn8QAAEUkj3Zu4Nr1Aoauy"
  manufacturers='["Salto"]'
/>" %}

We support the following features:

* [Triggering web unlock actions](../api-clients/locks/unlock-a-lock.md)
* [Programming access codes](../products/smart-locks/access-codes/) on door locks and card readers that have a PIN pad

***

### Device Provider Key

To create a [Connect Webview](../core-concepts/connect-webviews/) that enables your users to connect their Salto devices to Seam, include the `salto` [device provider key](../api-clients/connect-webviews/#device-provider-keys) in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webview](../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Brand-Specific Integration Considerations

### Access Code Limitations

Salto Locks does not allow a user to configure custom PIN codes. When creating an access code on a Salto door lock, their system will automatically generate a 6-10 digit PIN code. You will be able to retrieve the PIN code from the `code` property on the access code object.

### Salto-Specific Access Code Errors

`salto_site_user_not_subscribed`

When you encounter this error, it means that the Salto KS site has exceeded the allowed number of users, as defined by its subscription plan. There are a few ways to resolve this:

1. You can reduce the number of access codes you've created. Each access code will take up one user slot.
2. You can ask the device owner to contact their Salto installer to increase the subscription limit on their site.

***

## Troubleshooting

### What to do with a Salto lock with an `unknown` device type?

A Salto lock displaying an `unknown` device type indicates a weak connection with the Salto IQ hub. Please contact a Salto installer for assistance.

***

## Where to Order

Get in touch with a Salto representative in your region. They can refer you to a local installer that will service your area.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Salto Systems Sales Contact</strong></td><td></td><td><a href="https://saltosystems.com/en-us/offices/">https://saltosystems.com/en-us/offices/</a></td><td><a href="broken-reference">Broken file</a></td></tr></tbody></table>
