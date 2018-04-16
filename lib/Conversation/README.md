# Conversation
A collection of components used to render conversations

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| id                  | String/Number | N/A       | Yes      | The conversation ID.                                                          |
| addComment          | Function      | N/A       | Yes      | Executes when the add comment button is clicked.                              |
| user                | Object        | N/A       | Yes      | The user who is submitting the comment.                                       |
| comments            | Array         | `[]`      | No       | An array of comments that are in the conversation.                            |
| removeComment       | Function      | `() {}`   | No       | Executes when the comment is removed.                                         |
| editComment         | Function      | `() {}`   | No       | Executes when the comment is edited.                                          |
| onCommentChange     | Function      | `() {}`   | No       | Executes when a comment value changes.                                        |
| onCommentCancel     | Function      | `() {}`   | No       | Executes when a comment edit has been canceled.                               |
| onRowCountChange    | Function      | `() {}`   | No       | Executes when a the number of rows in the comment form changes.               |
| resolveConversation | Function      | `() {}`   | No       | Executes when the add resolve conversation button is clicked.                 |
| onCancel            | Function      | `() {}`   | No       | Executes when the cancel button is clicked.                                   |
| placeholder         | String        | `Reply...`| No       | Placeholder text to display in the conversation form input.                   |
| userCanComment      | Boolean       | `false`   | No       | Determines whether the user is allowed to comment and if to display the form. |
| showComments        | Boolean       | `true`    | No       | Determines whether to show the conversation in the expanded format.           |
| focusOnMount        | Boolean       | `true`    | No       | Determines whether to have the form in focus when the component mounts.       |
| hasError            | Boolean       | `false`   | No       | Determines whether to show an error Notification.                             |

```
<Conversation
  id="1234567"
  addComment={someFunc}
  user={someObject}
  comments={[someArray]}
  resolveConversation={someFunc}
  editComment={someFunc}
  removeComment={someFunc}
  onCancel={someFunc}
  userCanComment={someBool}
  showComments={someBool}
  focusOnMount={someBool}
  hasError={someBool}
  placeholder="some string"
/>
```

If you don't pass in comments or resolveConversation it will only render the form

```
<Conversation
  id="1234567"
  addComment={someFunc}
  user={someObject}
  userCanComment={someBool}
/>
```
