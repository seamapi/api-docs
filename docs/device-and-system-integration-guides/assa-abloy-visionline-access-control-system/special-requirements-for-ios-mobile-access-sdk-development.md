---
description: >-
  Learn the requirements for developing iOS apps that integrate with the
  Visionline ACS.
---

# Special Requirements for iOS Mobile Access SDK Development

## Register for ASSA ABLOY Partnership Program

To develop an iOS mobile app that integrates with the ASSA ABLOY Visionline ACS, you must register for the ASSA ABLOY partnership program. Note that if you plan to integrate with the [ASSA ABLOY Visionline credential manager](../../device-guides/assa-abloy-credential-services-credential-manager-in-development.md), you must also register for this program. For details, see [https://www.abloy.com/global/en/partnership-and-integrations](https://www.abloy.com/global/en/partnership-and-integrations).

***

## Unlock Success Event Limitation

The `SUCCESS` event indicates that the phone has communicated successfully with the door reader. That is, the Seam mobile SDK cannot determine whether the door reader granted access. It can only determine whether the communication with the reader succeeded. This limitation is the result of the underlying ASSA ABLOY SEOS SDK.
