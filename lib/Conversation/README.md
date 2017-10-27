#Conversation
A collection of components used to render conversations

##Usage

####Required props
`id`: the conversation ID
`addComment`: the function you want to fire when the add comment button is clicked
`user`: The user who is submitting the comment

####Optional props
`comments`: An array of comments that are in the conversation
`resolveConversation`: the function you want to fire when the resolve conversation button is clicked
`onCancel`: if you want to pass in any added functionality when the cancel button is clicked on the conversation form. By default it will just clear the form.
`userCanComment`: Set to false by default which will not allow the user to comment, if set to true it will let them comment.
`showComments`: Set to true by default. If true it will show the conversation in an expanded format and display the form. If false it will show the conversation in the collapsed format.

```
<Conversation
  id="1234567"
  addComment={someFunc}
  user={someObject}
  comments={[someArray]}
  resolveConversation={someFunc}
  onCancel={someFunc}
  userCanComment={someBool}
  showComments={someBool}
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
