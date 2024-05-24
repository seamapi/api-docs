---
description: >-
  Learn how to set up the prerequisite components for the Seam mobile access
  solution.
---

# Prepare your Workspace

To use the [Seam mobile access](./) solution, you must first set up the following components:

* **An access control system that is compatible with your chosen mobile access solution**\
  Obtain the account login information for your access control system (ACS). See the [brand-specific ACS guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for instructions on where to find this information. In addition, verify that your ACS is compatible with the mobile technology that you intend to implement, such as Apple Wallet. It may be necessary to upgrade your system to support these technologies. Further, you may need to register for developer access with the ACS that you have chosen to use.
* **A credential manager account that is appropriate for the installed access hardware**\
  Depending on the make and model of your lock or access hardware, you may need to set up a credential manager account for issuing mobile credentials for your brand of lock. The credential manager is responsible for issuing mobile credentials and keeping track of which mobile credentials have been issued to which mobile devices. Often, the mobile credentials that the credential manager generates need to be imported into the access control system, before they can be used to grant access.
* **Access hardware that is configured with the appropriate settings**\
  Certain makes and models of lock hardware may require you to configure specific encryption keys on the access hardware to enable mobile access. See the appropriate [device guides](../../device-and-system-integration-guides/overview.md#smart-locks) for detailed instructions related to these requirements.

***

## Set up Your Workspace

To set up your Seam workspace to use the Seam mobile access solution:

1.  **Connect your ACS account to Seam using a** [**Connect Webview**](../../core-concepts/connect-webviews/)

    This step requires the account information for your ACS account. For more information, see the [guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for your specific ACS brand.
2. **Connect your credential manager account to Seam using a Connect Webview**\
   This step requires the account information for your credential manager account. For more information, see the corresponding [guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for your credential manager type.
3. **Configure any workspace settings required**\
   Some integrations require certain workspace-wide settings to be configured. For more information, see the [guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for your specific ACS brand.
