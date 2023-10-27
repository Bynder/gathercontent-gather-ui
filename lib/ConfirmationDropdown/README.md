# Confirmation Dropdown

A component which renders a confirmation dropdown.

## Usage

### Props

| Name                | Type        | Default                  | Required | Description                                                                          |
| ------------------- | ----------- | ------------------------ | -------- | ------------------------------------------------------------------------------------ |
| id                  | string      | n/a                      | Yes      | The ID for the dropdown.                                                             |
| children            | node/string | n/a                      | Yes      | The trigger for showing the confirmation dropdown.                                   |
| confirmationPromise | func        | n/a                      | Yes      | The function that will fire when the confirm button is clicked. Must be a promise.   |
| dropdownContent     | node        | n/a                      | Yes      | The contents of the dropdown itself.                                                 |
| isDanger            | bool        | false                    | No       | Gives the confirmation button a danger style.                                        |
| confirmationText    | string      | 'Confirm'                | No       | Text to display in confirmation button.                                              |
| className           | string      | ''                       | No       | Additional classes for the container.                                                |
| onHide              | func        | () => {}                 | No       | Function that triggers each time the dropdown is canceled or closed.                 |
| hideOnCompletion    | bool        | true                     | No       | Hides the dropdown when the promise has completed.                                   |
| position            | object      | `{ autoPosition: true }` | No       | An object containing dropdown positions. Look at Dropdown docs for more information. |
| onCancel            | func        | () => {}                 | No       | Function that triggers when the cancel button is clicked.                            |
| actionTooltip       | string      | ''                       | No       | A tooltip to be displayed over the primary action button                             |

```
<ConfirmationDropdown
  id="id-1"
  confirmationPromise={() => new Promise(resolve => resolve('complete'))}
  confirmationText="Archive"
  dropdownContent={(<div>Some content</div>)}
  className="gui-class-for-content"
  position={{
    top: true,
    right: true,
  }}
  isDanger
>
  Click me to show dropdown
</ConfirmationDropdown>
```
