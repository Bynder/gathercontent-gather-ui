# Conversation context
A component which can be used to display a conversations context.

## Usage

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| label                 | string       | n/a       | Yes       | The label to display.  |
| children            | node       | null      | No       | The conversation context to display.  |
| id             | string         | n/a        | Yes       | The conversation id.  |
| resolved             | bool         | n/a        | Yes       | Sets the conversation to display as resolved.  |
| comments             | array         | n/a        | Yes       | The conversation comments.  |

```
<ConversationContext
  label="a lovely label"
  id="123"
  resolved
  comments={[{comment}, {comment}]}
>
  <div>Some content</div>
</ConversationContext>
```
