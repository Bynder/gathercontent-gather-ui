# MessageBar
A collection of components used to render a simple bar to display messages

## Usage

### Props

| Name                | Type          | Default   | Required | Description          |
| ------------------- |-------------- | --------- | -------- |---------------------------------------------------------------------------------- |
| fixed               | Boolean       | `false`   | No       | The fixed option.    |
| type                | String        | ''        | No       | applies a dark theme |

```
<MessageBar
  type="purple"
/>
```

# MessageBarContent

## Usage
Props are passed down to the [react-bootstrap/col](https://react-bootstrap.github.io/components.html#grid-props-col)

### Props

| Name                | Type          | Default   | Required | Description                |
| ------------------- |-------------- | --------- | -------- |---------------------------------------------------------------------------------------- |
| left                | Boolean       | `false`   | No       | Left align the content.    |
| center              | Boolean       | `false`   | No       | Center align the content.  |
| right               | Boolean       | `false`   | No       | Right align the content.   |

```
<MessageBarContent
  center
/>
```
