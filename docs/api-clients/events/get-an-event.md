---
description: Get a specific event emitted within a users workspace
---

# Get an Event

{% swagger method="get" path="/events/get" baseUrl="https://connect.getseam.com" summary="Get Events" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-parameter in="body" name="event_id" %}
ID of the Device
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Events are retrieved" %}
```javascript
{
  "event": {
      "event_id": "87b2dcda-90ff-4602-8ccc-efb2f4a3d7c2",
      "event_type": "device.low_battery",
      "created_at": "2022-08-24T11:23:49.459Z",
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "battery_level": 0.48
  },
  "ok": true
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
  "error": {
    "type": "invalid_input",
    "message": "Required for provided \"since\"",
    "validation_errors": {
      "_errors": [],
      "since": {
        "_errors": [
          "Required"
        ]
      }
    },
    "request_id": "2409f00f-b277-4e3b-be94-d5713038d821"
  },
  "ok": false
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

To programmatically access a single event, you can use `events.get` . This will return the same event that would be sent to a webhook, however `events.get` allows you to retrieve an event that already took place.

{% tabs %}
{% tab title="Javascript" %}
```javascript
await seam.events.get('87b2dcda-90ff-4602-8ccc-efb2f4a3d7c2')

/*
{
  event_id: '87b2dcda-90ff-4602-8ccc-efb2f4a3d7c2',
  event_type: 'device.low_battery',
  created_at: '2022-08-24T11:23:49.459Z',
  device_id: 'a83690b2-2b70-409a-9a94-426699b84c97',
  workspace_id: 'f97073eb-c003-467a-965b-e6dba3a0131d',
  battery_level: 0.48
}
*/
```
{% endtab %}
{% endtabs %}

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "event": {
      "event_id": "87b2dcda-90ff-4602-8ccc-efb2f4a3d7c2",
      "event_type": "device.low_battery",
      "created_at": "2022-08-24T11:23:49.459Z",
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "battery_level": 0.48
    },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
