# Access Code Table

## \<AccessCodeTable /> [(preview)](https://react.seam.co/?path=/docs/example-accesscodetable--docs)

The access codes table shows a list of current and future access codes and their statuses.

```
<AccessCodeTable deviceId={deviceId} />
```

### Size: Mobile

<figure><img src="../../.gitbook/assets/Screen Shot 2023-05-18 at 9.52.00 PM.png" alt="" width="375"><figcaption></figcaption></figure>

### Size: Desktop

<figure><img src="../../.gitbook/assets/Screen Shot 2023-05-18 at 9.52.28 PM (1).png" alt=""><figcaption></figcaption></figure>

### Props

<table><thead><tr><th width="250.33333333333331">Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>deviceId<mark style="color:red;">*</mark></td><td>string</td><td>The id for the device whose access codes will be shown in the table.</td></tr><tr><td>disableLockUnlock</td><td>boolean</td><td>Hide the lock/unlock button for devices. Default: <code>false</code>.</td></tr><tr><td><code>disableSearch</code></td><td>boolean</td><td>Hide the search box. Default: <code>false</code>.</td></tr><tr><td>accessCodeFilter</td><td>function</td><td>Optional filter function to filter the listed access codes.<br><br>Signature: <code>(accessCode: AccessCode, searchInputValue: string) => boolean</code></td></tr><tr><td>accessCodeComparator</td><td>function</td><td>Optional comparator function to order the listed access codes.<br><br>Signature: <code>(accessCodeA: AccessCode, accessCodeB: AccessCode) => number</code></td></tr><tr><td>onAccessCodeClick</td><td>function</td><td>Optional callback fired when an access code is clicked.<br><br>Signature: <code>(accessCodeId: string) => void</code></td></tr><tr><td>preventDefaultOnAccessCodeClick</td><td>boolean</td><td>Prevent the default behavior when an access code is clicked. Default: <code>false</code></td></tr><tr><td>onBack</td><td>function</td><td>Optional callback fired when the Back chevron button is clicked.<br><br>Signature: <code>() => void</code></td></tr><tr><td>heading</td><td>string | null</td><td>Optional heading to hide or replace the default.</td></tr><tr><td>className</td><td>string</td><td>Optional class name to add to the rendered component's containing element.</td></tr></tbody></table>
