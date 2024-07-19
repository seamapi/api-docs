---
description: >-
  Use the visionline_metadata object to configure Visionline-specific metadata
  for credentials.
---

# Visionline Credential Metadata

Use the `visionline_metadata` object within the Seam [`credential`](../../api-clients/access-control-systems/credentials/) object to include brand-specific data for your Visionline credentials. This `visionline_metadata` object has the following properties:

<table><thead><tr><th width="306">Property</th><th width="114">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>card_format</code></td><td>Enum (string)<br><em>Required</em></td><td><p>Card format for a card-based credential<br>Supported values: <code>TLCode</code>, <code>rfid48</code><br>For guest cards, the card format is generally <code>rfid48</code>, a low-capacity card that can store up to 33 consecutive guest rooms, 28 common rooms, and 7 additional rooms. The exception is a guest advanced card, which needs a higher-capacity format.</p><p><code>TLCode</code> is a high-capacity RFID card, for card types needing more than 48 bytes. Card of this type are used for staff cards and guest advanced cards.</p></td></tr><tr><td><code>is_override_key</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether the credential invalidates any previously-issued credentials for overlapping entrances</td></tr><tr><td><code>assa_abloy_credential_service_mobile_endpoint_id</code></td><td>String<br><em>Optional</em></td><td>ID of the ASSA ABLOY Credential Service mobile endpoint associated with the credential</td></tr><tr><td><code>joiner_acs_credential_ids</code></td><td>Array of strings<br><em>Optional</em></td><td>List of credential IDs with which the credential shares entrance access<br>When <code>is_override_key</code> is <code>false</code>, <code>jointCredentialIDs</code> is required.</td></tr><tr><td><code>is_valid</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether the credential is currently valid</td></tr></tbody></table>
