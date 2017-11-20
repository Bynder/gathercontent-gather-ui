# ExpandingTextArea
A component that renders a textarea that automatically resizes depending on its content

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                            |
| ------------------- |-------------- | --------- | -------- |--------------------------------------------------------------------------------------- |
| placeholder         | String        | N/A       | Yes      | Placeholder text for the field                                                         |
| handleOnChange      | Function      | `() {}`   | No       | Executes when the input value is changed                                               |
| value               | String        | ''        | No       | The value of the input                                                                 |
| focusOnMount        | Boolean       | `false`   | No       | Determines whether to focus the textfield on mount                                     |
| setValue            | Boolean       | `false`   | No       | If false the component will handle input changes and assign the value to its own state |

```
<ExpandingTextArea
  handleOnChange={someFunc}
  focusOnMount={someBool}
  value="some string"
  placeholder="some string"
  setValue={someBool}
/>
```
