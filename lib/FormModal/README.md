# FormModal
A form within a modal

### Props

| Name             | Type    | Default    | Required | Description                                       |
| ---------------- | ------- | ---------- | -------- |-------------------------------------------------- |
| title            | String  |            | Yes      | Appears in the modal title bar.                   |
| children         | Node    |            | Yes      | The form components/elements themselves.          |
| submitText       | String  |            | Yes      | The copy for the submit button.                   |
| submitHandler    | Func    |            | Yes      | This gets called when the form is submitted.      |
| cancelText       | String  |            | Yes      | The copy for the cancel button.                   |
| cancelHandler    | Func    | `() => {}` | No       | This is called when the cancel button is pressed. |
| formIsSubmitting | Boolean | `false`    | No       | Should the progress button show the spinner?      |

### Usage
```
<FormModal
  title="FormModal example"
  submitText="Submit"
  submitHandler="Submit"
  cancelText="Cancel"
  cancelHandler={action('cancel')}
>
  <FormGroup>
    <ControlLabel>Field A</ControlLabel>
    <FormControl />
  </FormGroup>
  <FormGroup>
    <ControlLabel>Field B</ControlLabel>
    <FormControl />
  </FormGroup>
</FormModal>
```
