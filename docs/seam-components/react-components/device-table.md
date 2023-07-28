# Device Table

## \<DeviceTable /> [(preview)](https://react.seam.co/?path=/docs/example-devicetable--docs)

The devices table shows a list of devices and their statuses.

```
<SeamProvider clientSessionToken={clientSessionToken}>
    <DeviceTable />
</SeamProvider
```

### Size: Desktop

<figure><img src="../../.gitbook/assets/device-table.png" alt=""><figcaption></figcaption></figure>

### Size: Modal

<figure><img src="../../.gitbook/assets/Screen Shot 2023-05-18 at 9.05.25 PM.png" alt="" width="375"><figcaption></figcaption></figure>

### Props

<table><thead><tr><th width="265">Name</th><th width="123.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>deviceIds</code></td><td>array</td><td>Optional list of specific device ids to return when requesting devices from the Seam API.</td></tr><tr><td><code>connectedAccountIds</code></td><td>array</td><td>Optional list of connected account ids to filter devices by when requesting devices from the Seam API.</td></tr><tr><td><code>disableLockUnlock</code></td><td>boolean</td><td>Hide the lock/unlock button for devices. Default: <code>false</code>.</td></tr><tr><td><code>disableSearch</code></td><td>boolean</td><td>Hide the search box. Default: <code>false</code>.</td></tr><tr><td><code>deviceFilter</code></td><td>function</td><td>Optional filter function to filter the listed devices.<br><br>Signature: <code>(device: Device, searchInputValue: string) => boolean</code></td></tr><tr><td><code>deviceComparator</code></td><td>function</td><td>Optional comparator function to order the listed devices.<br><br>Signature: <code>(deviceA: Device, deviceB: Device) => number</code></td></tr><tr><td><code>onDeviceClick</code></td><td>function</td><td>Optional callback fired when a device is clicked.<br><br>Signature: <code>(deviceId: string) => void</code></td></tr><tr><td><code>preventDefaultOnDeviceClick</code></td><td>boolean</td><td>Prevent the default behavior when a device is clicked. Default: <code>false</code></td></tr><tr><td><code>onBack</code></td><td>function</td><td>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></td></tr><tr><td>heading</td><td>string | null</td><td>Optional heading to hide or replace the default.</td></tr><tr><td><code>className</code></td><td>string</td><td>Optional class name to add to the rendered component's containing element.</td></tr></tbody></table>
