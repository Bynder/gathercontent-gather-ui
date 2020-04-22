# Dropdown
A dropdown component with compounded components to render triggers and the content.

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| id                  | String        | N/A       | Yes      | ID of the dropdown.                                                                  |
| children            | Node || Func  | N/A       | Yes      | A child node or function. The function shares setShowContent.                                                           |
| onToggle            | Func          | () => {}  | No       | A function which is called each time the visibility is toggled.               |
| block                | Bool         | false     | No       | Makes the dropdown container block like.                                                                  |

### Context (GATHER_UI_DROPDOWN)

| Name                | Type          | Description                                                                   |
| ------------------- |-------------- |------------------------------------------------------------------------------ |
| showContent         | Bool          | The visible state of the dropdown content. |
| toggleShowContent   | Func          | A function which toggles the visible state of the dropdown content. |

```
<Dropdown>
  <Dropdown.Trigger>Trigger</Dropdown.Trigger>
  <Dropdown.Content>Content</Dropdown.Content>
</Dropdown>
```

# Dropdown.Action

## Usage

### Props

| Name                | Type             | Default   | Required | Description                                                                   |
| ------------------- |--------------    | --------- | -------- |------------------------------------------------------------------------------ |
| action              | Func             | N/A       | Yes      | An action which is executed on click.                        |
| children            | Node or String   | N/A       | Yes      | The child content.                                           |
| danger              | Bool             | false     | No       | A modifier for highlighting the action as dangerous.               |
| hideAfterPerformingAction  | Bool      | true      | No       | A bool to define if the dropdown should close after clicking an action.                |
| disabled  | Bool      | true      | No       | disables the action                |
| value  | string      | null      | No       | the action button value                |

# Dropdown.ActionGroup

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| children            | Node or String  | N/A     | Yes      | The content of the group.
| bordered            | bool          | false     | No       | Adds a border styling to the actions.
| collapse            | bool          | false     | No       | Collapses all of the padding around the group.
| horizontal          | bool          | false     | No       | Styles the actions to be horizontal (vertical by default).

# Dropdown.Trigger

## Usage

### Props

| Name               | Type          | Default   | Required | Description                                                                   |
| ------------------ |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| useButton          | String        | false        | No       | Use a Button component as the trigger.                                            |
| useSelect          | String        | false        | No       | Enables the look of a dropdown menu to simulate a select.                                            |
| children           | Node or String or Function | N/A     | Yes       | The content of the trigger.                         |

# Dropdown.Content

## Usage

### Props

| Name               | Type          | Default   | Required | Description                                                                   |
| ------------------ |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| children           | String or Node  | N/A     | Yes      | The initial value of the input.                                               |
| collapse           | Bool          | false     | No       | Adds a modifier to collapse the padding of the content.                       |
| right              | Bool          | false     | No       | Adds a modifier to align the content.                                         |
| centre             | Bool          | false     | No       | Adds a modifier to align the content.                                         |
| top                | Bool          | false     | No       | Adds a modifier to align the content.                                         |
