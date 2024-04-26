---
description: >-
  Learn about managing access control systems, users, and credentials that
  enable you to control access to physical spaces.
---

# 🏢 Access Control Systems

<figure><img src="../../.gitbook/assets/acs-cover.png" alt=""><figcaption></figcaption></figure>

Seam provides **a unified API across multiple brands of access control systems** to grant and manage access to apartment buildings, hotels, commercial offices, warehouses, and much more. The Seam API standardizes key functions across systems and brands, such as creating users, issuing credentials (PIN codes, key cards, mobile keys), managing access permissions, retrieving access logs, and more.&#x20;

***

## What Is an Access Control System?

Access control systems (ACSs) enable you to manage and monitor access to physical spaces, such as offices, residential complexes, and special-purpose facilities. A key aspect of access control systems is that access authorization is centralized, letting you grant access to a user across multiple doors using a single credential. An access control system will generally manage the following: (a) who has access, (b) which entrances they have access to and (c) under what conditions they are permitted to enter.

<figure><img src="../../.gitbook/assets/building-acs-example.png" alt=""><figcaption><p>Example of a residential building with multiple doors connected to an ACS system</p></figcaption></figure>

***

## Components of Access Control Systems&#x20;

The Seam access system schema consists of a series of objects that interact to enable you manage your ACS in a logical, efficient manner. The top-level object is the [system](../../api-clients/access-control-systems/systems/) that represents one or more buildings, residential locations, or other sites that you manage using this ACS. Within the system, you identify the set of [entrances](../../api-clients/access-control-systems/entrances/), doors, or zones that you want to manage, identifying each by the corresponding lock object. You also identify the set of [users](./#what-is-a-user) who access these entrances, doors, or zones.

[Access groups](./#what-is-an-access-group) provide an efficient way to grant sets of scheduled access to one or more users. That is, you create access group objects that specify the entrances, doors, or zones to which a set of users has access, as well as the days and times at which these users have access to these entrances, doors, or zones.

Finally, you issue sets of [credentials](./#what-is-a-credential)—such as access codes, key cards, and mobile passes—to individual users.

The following diagram illustrates the relationship between Seam access system components:

<figure><img src="../../.gitbook/assets/image (26).png" alt="Overview of access control system resources as represented in Seam. This mapping may vary depending on the provider type."><figcaption><p>Overview of access control system resources as represented in Seam. This mapping may vary depending on the provider type.</p></figcaption></figure>

### What Is a User?

A "user" typically refers to an individual who requires access, like an employee or resident. Each user can possess multiple "credentials" that serve as their keys or identifiers for access. The type of credential can vary widely. For example, in the [Salto](../../device-guides/salto-locks.md) system, a user can have a PIN code, a mobile app account, and a fob. In other platforms, it is not uncommon for a user to have more than one of the same credential type, such as multiple key cards. Additionally, these credentials can have a schedule or validity period.

### What Is an Access Group?

An "access group" is a set of users, combined with a set of permissions. These permissions include both the set of areas or assets that the users can access and the schedule during which the users can access these areas or assets. Instead of assigning access rights individually to each user, which can be time-consuming and error-prone, administrators can assign users to an access group, thereby ensuring that the users inherit all the permissions associated with the access group. Using access groups streamlines the process of managing large numbers of users, especially in bigger organizations or complexes.

### What is a Credential?

An ACS generally uses digital means of access to authorize a user trying to get through a specific entrance. Examples of credentials include RFID cards, mobile keys, biometric identifiers, or PIN codes. The electronic nature of those credentials, as well as the fact that access is centralized both the rapid provisioning and rescinding of access, as well as the ability to compile access audit log.

<figure><img src="../../.gitbook/assets/acs-credential-types.png" alt=""><figcaption><p>Example of access control user credentials</p></figcaption></figure>

***

## **Next Steps**

To learn how to manage access control system components, see the following guides:

* [User Management](user-management.md)
* [Assigning Users to Access Groups](assigning-users-to-access-groups.md)
* [Managing Credentials](../../capability-guides/access-systems/managing-credentials.md)
* [Assigning Credentials to Users](../../capability-guides/access-systems/assigning-credentials-to-users.md)
* [Suspending and Unsuspending Users](suspending-and-unsuspending-users.md)

For the corresponding Seam API reference, see [Access Control Systems](../../api-clients/access-control-systems/).
