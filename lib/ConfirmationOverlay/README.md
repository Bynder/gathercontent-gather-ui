# ConfirmationOverlay
Overlays a confirm and cancel button

## Usage

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| cancel                | Function      | N/A           | Yes      | Executes when the user clicks the cancel button.    |
| confirm               | Function      | N/A           | Yes      | Executes when the user clicks the confirm button.   |
| show                  | bool          | false         | No       | If true the overlay will display.                   |
| confirmationText      | string        | 'Confirm'     | No       | Text to display for the confirm button.             |

```
<ConfirmationOverlay
  cancel={() => {}}
  confirm={() => {}}
  confirmationText="Do the thing!"
  show
/>
```
