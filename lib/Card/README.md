# Card
A Card component with compounded components.

## Usage

```
<Card>
  <Card.Content>
    <Card.SubHeading>Text</CardSubHeading>
    content
  </Card.Content>
  <Card.Footer>
    <Card.FooterLeft>
      child
    </Card.FooterLeft>
    <Card.FooterRight>
      child
    </Card.FooterRight>
  </Card.Footer>
</Card>
```

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| children            | Node           | N/A     | Yes      | The content.      |
| className           | String         | ''      | No       | A custom className for the component.        |
| onClick             | Func           | null    | No       | A function thats fired when the Card component is clicked        |
| selected            | Bool           | false   | No       | renders a selected style        |

# Card.Content

## Usage

### Props

| Name                | Type             | Default   | Required | Description                                                                   |
| ------------------- |--------------    | --------- | -------- |------------------------------------------------------------------------------ |
| children            | Node           | N/A     | Yes      | The content.      |
| className           | string           | ''        | No       | A custom className for the component                        |
| collapse            | bool             | false     | No       | renders collapsed styles |
| bordered            | bool             | false     | No       | adds a border |

# Card.Footer

## Usage

### Props

| Name                | Type             | Default   | Required | Description                                                                   |
| ------------------- |--------------    | --------- | -------- |------------------------------------------------------------------------------ |
| children            | Node           | N/A     | Yes      | The content.      |
| className           | string           | ''        | No       | A custom className for the component                        |
| collapse            | bool             | false     | No       | renders collapsed styles |


# Card.FooterLeft & Card.FooterRight

## Usage

### Props

| Name                | Type             | Default   | Required | Description                                                                   |
| ------------------- |--------------    | --------- | -------- |------------------------------------------------------------------------------ |
| children            | Node           | N/A     | Yes      | The content.      |
| className           | string           | ''        | No       | A custom className for the component                        |
| collapse            | bool             | false     | No       | renders collapsed styles |

# Card.SubHeading

## Usage

### Props

| Name                | Type             | Default   | Required | Description                                                                   |
| ------------------- |--------------    | --------- | -------- |------------------------------------------------------------------------------ |
| children            | Node           | N/A     | Yes      | The content.      |
| className           | string           | ''        | No       | A custom className for the component                        |
| truncate            | bool             | false     | No       | Will hide any text overflow and append and ellipsis |
