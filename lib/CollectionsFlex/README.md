# CollectionsFlex
Similar to CollectionsTable, except the table layout is provided by flex box

## Usage

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| children              | Node          | n/a           | Yes      | The child contents of the node.  |
| className             | String        | ''            | No       | An additional className. Useful for style extensions. |

```
<CollectionsFlex>
    <CollectionsFlex.Row>
        <CollectionsFlex.Heading>
            Table heading
        </CollectionsFlex.Heading>
    </CollectionsFlex.Row>
    <CollectionsFlex.Row>
        <CollectionsFlex.Cell>
            Table cell content
        </CollectionsFlex.Cell>
    </CollectionsFlex.Row>
</CollectionsFlex>
```
