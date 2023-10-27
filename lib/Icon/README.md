# Icon

Displays an SVG icon.

### Props

| Name             | Type             | Default   | Required | Description                                                            |
| ---------------- | ---------------- | --------- | -------- | ---------------------------------------------------------------------- |
| name             | string           | undefined | Yes      | The name of the icon to display                                        |
| text             | string           | ''        | No       | Text to display next to the icon                                       |
| className        | string           | ''        | No       | className for the icon                                                 |
| notification     | string           | ''        | No       | notification to display on the icon                                    |
| types            | array of strings | []        | No       | Types to apply to the icon (convert to CSS `icon--<TYPE>`)             |
| textTypes        | array of strings | []        | No       | Types to apply to the icon text (convert to CSS `icon__text--<TYPE>`)  |
| defaultFillColor | bool             | true      | No       | Whether or not to default the SVG fill color to the icon-default-color |

### Usage

```
<Icon
  name="tick"
  text="Approved"
  className="gui-is-active"
  notification="A thing happened!"
  defaultFillColor={false}
  types=['blue', 'small']
  textTypes=['green']
```
