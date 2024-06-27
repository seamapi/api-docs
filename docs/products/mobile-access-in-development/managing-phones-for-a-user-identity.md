---
description: Learn how to manage the phones associated with a user identity.
---

# Managing Phones for a User Identity

An app user may have several phones. When they sign into their account on your mobile application, it is important that additional phones also provide access. Seam facilitates this access by registering each phone within the [user identity](managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) and synchronizing [mobile credentials](./#managing-mobile-credentials) across these phones. Further, Seam provides a feature to deactivate a phone if an app user loses it.

***

## App User New Phone Process

When an app user signs in to a new phone, Seam can automatically set up the new phone, generate matching credentials, and issue these credentials. To facilitate this capability, you must [issue a multi-phone sync credential](issuing-mobile-credentials-from-an-access-control-system.md) when creating a mobile credential.

<figure><img src="../../.gitbook/assets/image (2) (1).png" alt="When a user sign in to a new phone, Seam also issues matching credentials to the new phone."><figcaption></figcaption></figure>

***

## App User Lost Phone Process&#x20;

If an app user loses their phone or wants to deactivate it, you can deactivate the phone. Seam then automatically invalidates the stored credentials on their deactivated phone.

<figure><img src="../../.gitbook/assets/image (3) (1).png" alt="When a phone is revoked, Seam revokes all the credentials issued to this phone."><figcaption></figcaption></figure>

To revoke a phone, provide the ID of the phone. When a phone is revoked, Seam also revokes all the credentials issued to the revoked phone. Seam also removes the associated ACS credentials from the ACS.

```python
# Endpoint in development. Coming Soon!

# Deactivate the lost phone.
seam.phones.deactivate(
  phone_id=lost_phone_id
)
```

***

## Retrieving Phones for a User Identity

To retrieve the list of phones that the mobile app user has used to sign in to their account, use the List Phones endpoint and include the ID of the user identity (`user_identity_id`).

```
# Endpoint in Development. Coming Soon!

seam.phones.list(
  user_identity_id=user_identity.id
)

# [{
#   "phone_id": "xxxx",
#   "user_identity_id": "xxxx",
#   "created_at": "2024-01-01T10:40:00+00:00"
# }]
```

***

## Retrieving a Phone by ID

To retrieve a specific phone, use the Get Phone endpoint and include the ID of the phone (`phone_id`).

```
# Endpoint in development. Coming Soon!

seam.phones.get(
  phone_id=phone_id
)

# {
#   "phone_id": "xxxx",
#   "user_identity_id": "xxxx",
#   "created_at": "2024-01-01T10:40:00+00:00"
# }
```
