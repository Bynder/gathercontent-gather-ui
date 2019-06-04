# ImageLoader
A component which adds visual ques for loading, loaded and failing to load images.

### Props

| Name             | Type    | Default    | Required | Description                                                                   |
| ---------------- | ------- | ---------- | -------- |------------------------------------------------------------------------------ |
| alt              | String  |            | Yes      | The alt text of an image. |
| src              | String  |            | Yes      | The src of an image. |
| loadTransition | Bool | false      | No       | Sets the dimensions of the loaded image to the containing div. |
| preLoadedStyles  | Object | {}         | No       | Styles applied to the image when loading the image. Handy if you know the dimensions of the incoming image. |
| onLoad           | Func   | () => {}   | No       | A function called onLoad. |
| onError          | Func   | () => {}   | No       | A function called onError. |

### Usage
```
<ImageLoader
  src="/src/of/image/100/100"
  alt="a 100x100 image"
  preLoadedStyles={{
    minHeight: '100px'
  }}
  loadTransition
/>
```
