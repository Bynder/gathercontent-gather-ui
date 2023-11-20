# Form

Components for creating Forms.

## Usage

### Props

| Name       | Type                          | Default | Required | Description                                                                       |
| ---------- | ----------------------------- | ------- | -------- | --------------------------------------------------------------------------------- |
| children   | Array of Nodes or Single Node | N/A     | Yes      | The contents of the form.                                                         |
| onSubmit   | Function                      | N/A     | Yes      | A function which is called when the form is submitted.                            |
| onCancel   | Function                      | (){}    | No       | A function which is called when the form is canceled.                             |
| className  | String                        | ``      | No       | Additional classes for the form.                                                  |
| escToClose | Bool                          | false   | No       | Setting this to true will enable the ability to cancel the form with the esc key. |
| disabled   | Bool                          | false   | No       | Disables the form.                                                                |

```
<Form
  onSubmit={(e) => console.log(e.target[0].value)}
  onCancel={() => console.log('form is canceled'}
  className="gui-hello-world"
  escToClose
>
  <FormInput focusOnMount />
</Tabs>
```

# FormInput

An input component used to compose a form.

## Usage

### Props

| Name         | Type    | Default | Required | Description                              |
| ------------ | ------- | ------- | -------- | ---------------------------------------- |
| type         | String  | 'test'  | No       | The input type.                          |
| focusOnMount | Bool    | false   | No       | Focuses the input when mounted.          |
| value        | String  | ''      | No       | The initial value of the input.          |
| className    | String  | ''      | No       | Adds additional classes to the input.    |
| fullWidth    | Boolean | false   | No       | Gives the input 100% width               |
| paddingSmall | Boolean | false   | No       | Gives the input small padding            |
| hasError     | Boolean | false   | No       | Toggles error styling for the input      |
| errorMessage | String  | ''      | No       | display an error message under the input |

# FormGroup

A wrapper to group form elements.

## Usage

```
<FormGroup>
  <Button types={['padding-small', 'primary']} isSubmit>Save</Button>
  <Button types={['padding-small', 'clear']} onClick={onCancel}>Cancel</Button>
</FormGroup>
```
