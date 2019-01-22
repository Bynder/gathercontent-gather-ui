# FinderNavigation
A collection of components which can help you render a finder-esque sidebar.

## Warning
This component is a work in progress and subject to change.

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| children            | Node          | N/A       | Yes      | A child node.                                                           |

```
<FinderNavigation>
  <FinderNavigation.Group title="Waffles">
    <FinderNavigation.Item>Content</FinderNavigation.Item>
    <FinderNavigation.Item active>Content</FinderNavigation.Item>
    <FinderNavigation.Item>Content</FinderNavigation.Item>
  </FinderNavigation.Group>
</FinderNavigation>
```

# FinderNavigation.Group

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| title               | String        | ''        | No       | The title/heading to display at the top of the group.                        |
| children            | Node          | N/A       | Yes      | The child node.                                           |

# FinderNavigation.Item

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| active              | Bool          | false     | No       | Renders active styles for the item.                                         |
| children            | Node          | N/A       | Yes      | The child node.                                           |
