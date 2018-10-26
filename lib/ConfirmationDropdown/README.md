# Confirmation Dropdown
A component which renders a confirmation dropdown.

## Usage

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| iconName              | string        | n/a           | Yes      | The icon to display in the trigger.                 |
| children              | node          | n/a           | Yes      | What will display above the confirmation buttons.   |
| onConfirm             | func          | n/a           | Yes      | The function that will fire when the confirm button is clicked.  |
| onCancel              | func          | () => {}      | No       | The function that will fire when the cancel button is clicked.  |
| isDanger              | bool          | false         | No       | Gives the icon trigger danger styling.              |
| confirmText           | string        | 'Delete'      | No       | Text to display in confirmation button.  |

```
<ConfirmationDropdown
  iconName="string"
  onConfirm={() => {}}
  onCancel={() => {}}
  isDanger={false}
  confirmText="string"
>
  <div>Some content</div>
</ConfirmationDropdown>
```
