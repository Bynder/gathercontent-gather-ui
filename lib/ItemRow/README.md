# ItemRow

A compound component that renders a row for content Items.

## Usage

### Props

| Name     | Type | Default | Required | Description                                             |
| -------- | ---- | ------- | -------- | ------------------------------------------------------- |
| children | Node | N/A     | Yes      |
| stacked  | Bool | N/A     | Yes      | Adds a stacked modifier to apply stacked style.         |
| bordered | Bool | N/A     | Yes      | Adds a bordered modifier to apply padding and boarders. |
| \*       | N/a  | N/A     | No       | Spreads the remaining props onto the root component.    |

```
<ItemRow>
    <ItemRow.Name>
        <StatusIndicator color="red" className="gui-h-margin-right-half" />
        Item name
    </ItemRow.Name>

    <ItemRow.Aside>
        <ItemRow.Data>
            Additional data.
        </ItemRow.Data>

        <ItemRow.Data>
            More additional data.
        </ItemRow.Data>
    </ItemRow.Aside>
</ItemRow>
```
