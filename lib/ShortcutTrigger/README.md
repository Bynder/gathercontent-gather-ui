# ShortcutTrigger

A component which executes a function when a combination of keys are pressed at the same time.

## Usage

```
<ShortcutTrigger shortcutKey="enter" onShortcutTrigger={func} withMetaKey />
```

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| onShortcutTrigger    | Function      | ``      | Yes       | Executes when combination of keys are pressed.  |
| shortcutKey   | string      | ``      | Yes       | Chosen key for the shortcut.  |
| withCtrlKey   | bool      | `false`      | No       | Chosen key needs to be combined with the ctrl key  |
| withShiftKey   | bool      | `false`      | No       | Chosen key needs to be combined with the shift key  |
| withAltKey   | bool      | `false`      | No       | Chosen key needs to be combined with the alt key  |
| withMetaKey   | bool      | `false`      | No       | Chosen key needs to be combined with the command or windows key  |
