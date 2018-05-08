# ItemRow
A component that renders a row for content Items showing the title, status and a label (if required).

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                            |
| ------------------- |-------------- | --------- | -------- |--------------------------------------------------------------------------------------- |
| children            | Node          | N/A       | Yes      | A node which renders inside a row. Mostly likely a text and a link.                    |
| indicator           | Node          | null      | No       | A StatusIndicator component.                                                           |
| label               | String        | null      | No       | A label which renders next to the child contents.                                      |

```
<ItemRow
  indicator={<StatusIndicator color="red" />}
  label="Entry"
>
 Item title
</ItemRow>
```
