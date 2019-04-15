# SelectionBar
A component which renders a bar with selection information

## Usage
### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| type                  | string        | n/a           | Yes      | Type of selection to display.                       |
| selectedIds           | array         | n/a           | Yes      | The selected ids.                                   |
| clearSelection        | func          | n/a           | Yes      | The function that will fire when the clear shortcut is triggered  |
| selectAll             | func          | n/a           | Yes      | The function that will fire when the select all button is clicked  |
| fixed                 | bool          | false         | No       | Applies fixed styling.              |
| autoHide              | bool          | false         | No       | Hides the bar when there is no selection.              |

```
<SelectionBar
  type="string"
  selectedIds={[1,2,3,4]}
  clearSelection={() => {}}
  selectAll={() => {}}
  fixed={false}
  autoHide={false}
>
  <div>Some content</div>
</SelectionBar>
```

# Selection Bar Action
A component to wrap actions in the selection bar
## Usage
```
<SelectionBar.Action>
  <Tooltip icon="some-icon">
</SelectionBar.Action>
```

## Selection Bar Divider
A line to divide Selection Bar Actions
## Usage
```
<SelectionBar.Action>
  <Tooltip icon="some-icon">
</SelectionBar.Action>

<SelectionBar.Divider />

<SelectionBar.Action>
  <Tooltip icon="some-other-icon">
</SelectionBar.Action>
```
