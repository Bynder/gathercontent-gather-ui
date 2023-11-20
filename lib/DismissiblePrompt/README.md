# DismissiblePrompt

Renders a little box with a close button

### Props

| Name      | Type    | Default | Required | Description                                                       |
| --------- | ------- | ------- | -------- | ----------------------------------------------------------------- | --- |
| children  | node(s) | n/a     | Yes      | Contents of the prompt.                                           |
| className | String  | `'`     | No       | Adds a class to the component.                                    |
| onDismiss | func    | n/a     | Yes      | The function that will be fired when the close button is clicked. |     |

### Usage

```
<DismissiblePrompt
  onDismiss={() => {}}
  className="gui-thing-prompt"
>
  hey remember this thing?
</DismissiblePrompt>
```
