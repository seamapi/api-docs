---
description: >-
  When you embed a webview inside an iframe, you might want to know when it
  completes. You can listen to messages dispatched from the iframe to the
  hosting window for this purpose.
---

# Embedding a Connect Webview

## Embedding a Webview in an Iframe

You can use the HTML Iframe to display a connect webview url.

```html
<iframe
  style="border: none;min-height: 600px;height: 100%;width: 100%"
  allow="clipboard-write"
  src="<your connect_webview.url>"
/>
```

## Messages

When a webview is hosted in an iframe, it sends messages to the parent window hosting the iframe using `window.parent.postMessage`, a cross-origin communication mechanism available in browsers. You can listen for these messages by registering a listener for `message` events on the `window`.

```ts
window.addEventListener(
  "message",
  (event) => {
    if (event.data?.event?.event_type === "webview.login_successful") {
      // Do something
    }
  },
  false
);
```

## Message Body

Here is a sample message sent by the iframe:

```json
{
    "event": {
		"event_type": "webview.login_successful",
    	"connect_webview_id": "123e4567-e89b-12d3-a456-426614174000"
    }
}
```

Note that at the top level of the message is a single property: the `event` object. The properties on this object are described in the Event Properties section.

#### Event Properties

| Property             | Type                                                 | Description                                                                                  |
| -------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `event_type`         | `webview.login_successful` or `webview.login_failed` | Type of event - either a success or failure                                                  |
| `connect_webview_id` | string                                               | ID of the webview                                                                            |
| `error_code`         | string                                               | If the event is `webview.login_failed`, a code for the error that occurred                   |
| `error_message`      | string                                               | If the event is `webview.login_failed`, a human-readable message for the error that occurred |
