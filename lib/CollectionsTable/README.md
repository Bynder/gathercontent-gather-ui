# CollectionsTable
Similar to CollectionsTable, except the table layout is provided by flex box

## Usage

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| children              | Node          | n/a           | Yes      | The child contents of the node.  |
| className             | String        | ''            | No       | An additional className. Useful for style extensions. |

```
<CollectionsTable>
    <CollectionsTable.Row>
        <CollectionsTable.Heading>
            Table heading
        </CollectionsTable.Heading>
    </CollectionsTable.Row>
    <CollectionsTable.Row>
        <CollectionsTable.Cell>
            Table cell content
        </CollectionsTable.Cell>
    </CollectionsTable.Row>
</CollectionsTable>
```
