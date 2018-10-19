# CollectionsTable
A collection of proxy components for rendering a table UI for a collection of items.

## Usage

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| children              | Node          | n/a           | Yes      | The child contents of the node.  |
| className             | String        | ''            | No       | An additional className. Useful for style extensions. |

```
<CollectionsTable>
    <CollectionsTable.Head>
        <CollectionsTable.Heading>
            Table heading
        </CollectionsTable.Heading>
    </CollectionsTable.Head>
    <CollectionsTable.Body>
        <CollectionsTable.Row>
            <CollectionsTable.Cell>
                Table cell content
            </CollectionsTable.Cell>
        </CollectionsTable.Row>
    </CollectionsTable.Body>
</CollectionsTable>
```

# CollectionsTableAction
An action which sits outside the cell.

## Usage

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| children              | Node          | n/a           | Yes      | The child contents of the node.  |
| onClick               | Function      | n/a           | Yes      | The function called when clicking the action. |
| className             | String        | ''            | No       | An additional className. Useful for style extensions. |
| types                 | Array         | ['icon-only'] | No       | The type of button component styling. |
