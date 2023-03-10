---
description: >-
  An external third-party account that your user has authorized Seam to get
  access to, i.e. an August account with a list of door locks.
---

# Connected Accounts

## The Connected Account object

| Attributes             | Type                        | Description                                                                                                                                                                                  |
| ---------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connected_account_id` | string                      | ID of the Connected Account.                                                                                                                                                                 |
| `created_at`           | <p>ISO8601<br>timestamp</p> | Timestamp of the date when the Connected Account was created.                                                                                                                                |
| `user_identifier`      | JSON object                 | The unique identifier for the Connected Account. Could be an email or phone number.                                                                                                          |
| `account_type`         | string                      | <p>Type of manufacturer the Connected Account belongs to.<br>Options include: <code>august</code>, <code>schlage</code>, <code>yale</code>, <code>salto</code>, <code>smartthings</code></p> |
| `custom_metadata`      | JSON object                 | The `custom_metadata` set by the webview that connected the account.                                                                                                                       |

## List of Methods

| [Get Connected Account](get-a-connected-account.md)   | Get a Connected Account.          |
| ----------------------------------------------------- | --------------------------------- |
| [List Connected Accounts](list-connected-accounts.md) | Get a list of Connected Accounts. |



## Connected Accounts Errors

Errors are displayed in the format:

```
{
    "message": "...",
    "created_at": "ISO8601 string"
}
```

| Error Type             | Description                                                                                                                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `account_disconnected` | Account Disconnected, you may need to reconnect the account with a new webview. This may happen if the third-party provider triggered an access token to be revoked (e.g. after a password change) |
