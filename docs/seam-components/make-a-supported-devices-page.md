---
description: Use Seam Components to make a Supported Devices page
---

# Make a Supported Devices Page

## Overview

Seam adds supports for smart devices every week and by integrating with Seam, you get access to these new devices too!

This guide will show you how to add a [supported device table](https://react.seam.co/?path=/docs/components-supporteddevicetable--docs) to your website or application. You can use plain HTML, React, or any framework that supports web components.

## 1 - Get a Publishable Key from the Seam Console

To access the Seam API, you'll need a publishable key. This key identifies your application when making requests to Seam and is safe to embed in your frontend code.

Go to [console.seam.co](https://console.seam.co) and select "Client Sessions" from the sidebar. You should then see a "Publishable Key" that you can copy.

<figure><img src="../.gitbook/assets/publishable-key-copy.png" alt="Publishable key" width="375"><figcaption></figcaption></figure>

## 2 — Add Seam Components

{% tabs %}
{% tab title="Plain HTML" %}
Seam Components are implemented in React, but may be used as native web components.

Create a plain HTML page with the content below. You can serve this anyway you like, or even open it directly in your browser. The version in the script tag can be any [released version](https://github.com/seamapi/react/releases).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Seam Components</title>
  </head>
  <body>
    <main>
      <seam-supported-device-table
        publishable-key="your_publishable_key"
      ></seam-supported-device-table>
    </main>
    <script
      type="module"
      src="https://react.seam.co/v/1.42.1/dist/elements.js"
    ></script>
  </body>
</html>
```
{% endtab %}

{% tab title="React" %}
Install `@seamapi/react` in your React application

```bash
npm install --save @seamapi/react
```

Add the components anywhere in your React app

```javascript
import { SupportedDeviceTable, SeamProvider } from "@seamapi/react"

export const App = () => {
  return (
    <SeamProvider publishableKey="your_publishable_key">
      <main>
        <SupportedDeviceTable />
      </main>
    </SeamProvider>
  )
}
```
{% endtab %}

{% tab title="Any JavaScript Framework" %}
Install `@seamapi/react` in your application

```bash
npm install --save @seamapi/react
```

Then import the custom elements bundle in your application entrypoint:

```javascript
import "@seamapi/react/elements.js"
```

Add the components where your framework renders HTML. Some frameworks may require additional configuration to enable web component support, e.g., [Angular](overview/angular.md) or [Vue](overview/vue.md).

```html
<seam-supported-device-table publishable-key="your_publishable_key"></seam-supported-device-table>
```
{% endtab %}
{% endtabs %}

You should see a list of device models like what's shown below:

<figure><img src="https://3624860916-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FxnN2A67918om1UthYWsF%2Fuploads%2FyvmI7GxNyxhebqR99ZwF%2FScreen%20Shot%202023-06-30%20at%209.46.33%20AM.png?alt=media&#x26;token=18a6ad74-0f9f-4e18-8c15-57371c461044" alt=""><figcaption></figcaption></figure>

## Next Steps

* View and play with other components in the [interactive storybook component library](https://react.seam.co/)
* Check out some [Full Example Apps](https://github.com/seamapi/react/tree/main/examples)

If you have any questions or want to report an issue, email us at support@seam.co.
