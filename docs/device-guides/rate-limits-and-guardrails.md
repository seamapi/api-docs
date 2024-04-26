---
description: >-
  Learn about the rate limits and guardrails that Seam uses to maintain reliable
  service for all users.
---

# Rate Limits and Guardrails

In order to provide reliable service for all of our customers and API load predictability for our device partners, we have a number of rate limits and guardrails in place.

## Rate Limits

For requests with rate limits, exceeding these limits results in the corresponding API calls failing with a `429 Too Many Requests` response. You must then retry your request after the appropriate amount of time.

We enforce the following rate limits on a per-device basis:

<table><thead><tr><th width="243">Operation</th><th>Limit</th></tr></thead><tbody><tr><td><a href="../api-clients/access-codes/create-an-access-code.md">Create an access code</a></td><td>10 ongoing access code creations per minute</td></tr><tr><td><a href="../api-clients/access-codes/update-an-access-code.md">Update an access code</a></td><td>10 ongoing access code updates per minute</td></tr><tr><td><a href="../api-clients/access-codes/delete-an-access-code.md">Delete an access code</a></td><td>20 access code deletions per minute</td></tr><tr><td><a href="../api-clients/locks/lock-a-lock.md">Lock a lock</a></td><td>15 lock requests per minute</td></tr><tr><td><a href="../api-clients/locks/unlock-a-lock.md">Unlock a lock</a></td><td>15 unlock requests per minute</td></tr></tbody></table>
