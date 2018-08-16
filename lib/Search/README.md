# Search
A search component with compounded components to render a search ui.

## Usage

```
<Search>
  <Search.Input onChange={() => {}} />
  <Search.Body>
    <Search.Options>
      <Search.ToggleFilter
        label="string"
        clickHandler={() => {}}
      />
    </Search.Options>
    <Search.List heading="string">
      <Search.ListItem
        title="string"
        subText="string"
      >
        string or node!
      </Search.ListItem>
    </Search.List>
  </Search.Body>
</Search>
```

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| children            | Node           | N/A     | Yes      | The content.      |

### Context

| Name                | Type          | Description                                                                   |
| ------------------- |-------------- |------------------------------------------------------------------------------ |
| showBody            | Bool          | Determines if the Search.Body should display. |
| displayBody         | Func          | A function which sets showBody to true |
| hideBody            | Func          | A function which sets showBody to false |


# Search.Input

## Usage

### Props

| Name                | Type             | Default   | Required | Description                                                                   |
| ------------------- |--------------    | --------- | -------- |------------------------------------------------------------------------------ |
| className           | string           | ''        | No       | a custom className for the component                        |
| onChange            | func             | N/A       | Yes      | A function which gets triggered when the search input changes value |

# Search.Body

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| className           | string          | ''      | No       | a custom className for the component |
| children            | Node            | N/A     | Yes      | The content of the search body. |


# Search.Options

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| children            | Node         | N/A     | Yes      | The content of the search options. |


# Search.ToggleFilter

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| label           | string           | N/A        | Yes       | the label for the CheckToggle                       |
| clickHandler    | func             | N/A       | Yes      | A function which gets triggered when toggle is clicked |


# Search.List

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| heading         | string           | ''        | No       | Heading text for the list                       |
| children        | Node             | N/A     | Yes      | The content of the list. |


# Search.ListItem

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| title           | string           | ''        | No       | Title text for the item                       |
| subtext         | string           | ''        | No       | Sub text for the item                       |
| children        | Node or String   | N/A     | Yes      | The content of the item. |
