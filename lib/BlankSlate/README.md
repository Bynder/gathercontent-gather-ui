# Blank slate
A component which can be used to illustrate an empty state.

## Usage

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| Fixed                 | Boolean       | `false`       | No       | If true it will absolutely position the component to the centre of the page.  |
| slateStyle            | String       | "default"      | No       | Dictates which blank slate style to use.  |
| customSVG             | Node         | `false`        | No       | Display a custom SVG instead of the default.  |
| emoji                 | String       | ""             | No       | Display an emoji instead of the default SVG.  |
| emojiLabel            | String       | "blank slate emoji"  | No       | `aria-label` for the emoji.  |

```
<BlankSlate fixed>
  <div>Some content</div>
</BlankSlate>
```
