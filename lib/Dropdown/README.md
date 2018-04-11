# Dropdown
A dropdown component with compounded components to render triggers and the content.

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| id                  | String        | N/A       | Yes      | ID of the dropdown.                                                                  |
| children            | Node          | N/A       | Yes      | A child node.                                                           |
| onToggle            | Func          | () => {}  | No       | A function which is called each time the visibility is toggled.               |

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

# Dropdown.ActionGroup

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| children            | Node or String  | N/A     | Yes      | The content of the group.

# Dropdown.Trigger

## Usage

### Props

| Name               | Type          | Default   | Required | Description                                                                   |
| ------------------ |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| useButton          | String        | false        | No       | Use a Button component as the trigger.                                            |
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