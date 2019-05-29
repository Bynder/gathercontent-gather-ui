# InputWithButton
Displays a string in a input with a button

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| inputId                  | string        | N/A       | Yes      | unique id of the input                                                    |
| buttonId                  | string        | N/A       | Yes      | unique id of the button                                                    |
| value               | string        | N/A       | Yes      | the string value to display in the input                                      |
| onClick             | function      | N/A       | Yes      | the function to execute when the button is pressed. The input element is passed (this is useful for copying to clipboard) |
| buttonText          | string        | N/A       | Yes      | text to display in the button                                                 |
| disabled            | boolean        | false     | No      | disables the component                                         |