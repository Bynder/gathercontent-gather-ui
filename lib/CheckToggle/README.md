# CheckToggle
Represents a toggle, can be true or false.

## Usage

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| className             | string        | ''            | No       | Any extra CSS classes                               |
| id                    | string        | n/a           | Yes      | The id attribute for the input.                     |
| checked               | bool          | false         | No       | Whether the toggle is on or off                     |
| clickHandler          | func          | () => {}      | No       | Handler for when the toggle is clicked              |
| labelLeft             | string        | null          | No       | Label to the left of the toggle                     |
| labelRight            | string        | null          | No       | Label to the right of the toggle                    |
| displaySmall          | bool          | false         | No       | Whether to use the small version of the toggle      |
| displayChecked        | bool          | false         | No       | Whether to apply the green styling when checked     |
| autoToggle            | bool          | true          | No       | True for controlled component, false to use props   |

```
<CheckToggle 
    labelLeft="Label left" 
    id="test" 
    labelRight="Label right" 
/>
```
