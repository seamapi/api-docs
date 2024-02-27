---
description: Use Seam Components to make a Supported Devices page
---

# Make a Supported Devices Page with React

## Overview

Seam adds supports for smart devices every week and by integrating with Seam, you get access to these new devices too!

This guide will show you how to drop [`<SupportedDeviceTable />`](https://react.seam.co/?path=/docs/components-supporteddevicetable--docs) into your React application.

## 1 - Install `@seamapi/react` in your React application

```bash
npm install --save @seamapi/react
```

## 2 - Get a Publishable Key from the Seam Console

To access the Seam API, you'll need a publishable key. This key identifies your application when making requests to Seam and is safe to embed in your frontend code.

Go to [console.seam.co](https://console.seam.co) and select "Client Sessions" from the sidebar. You should then see a "Publishable Key" that you can copy.

<figure><img src="../.gitbook/assets/publishable-key-copy.png" alt="" width="375"><figcaption></figcaption></figure>

## 3 — Import and Drop In the [\<SupportedDeviceTable /> Component](https://react.seam.co/?path=/docs/components-supporteddevicetable--docs)

```javascript
import { SeamProvider, SupportedDeviceTable } from "@seamapi/react"

export const App = () => (
  <SeamProvider publishableKey="YOUR_PUBLISHABLE_KEY">
    <SupportedDeviceTable />
  </SeamProvider>
)
```

You should see a list of device models like what's shown below:

<figure><img src="https://3624860916-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FxnN2A67918om1UthYWsF%2Fuploads%2FyvmI7GxNyxhebqR99ZwF%2FScreen%20Shot%202023-06-30%20at%209.46.33%20AM.png?alt=media&#x26;token=18a6ad74-0f9f-4e18-8c15-57371c461044" alt=""><figcaption></figcaption></figure>



## Next Steps

* View and play with other components in the [interactive storybook component library](https://react.seam.co/)
* Check out some [Full Example Apps](https://github.com/seamapi/react/tree/main/examples)

If you have any questions or want to report an issue, email us at support@seam.co.
