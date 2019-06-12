# MentionsForm
A component that renders a form with a text input that allows you to '@' users.

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                            |
| ------------------- |-------------- | --------- | -------- |--------------------------------------------------------------------------------------- |
| users               | Array         | N/A       | Yes      | An array of mentionable/@-able users                                                   |
| onSubmit            | Func          | N/A       | Yes      | Executes when the form is submitted                                                    |
| onInputChange       | Func          | N/A       | Yes      | Executes when the input has changed                                                    |
| onCancel            | Func          | N/A       | Yes      | Executes when the user clicks the cancel button                                        |
| onRowCountChange    | Func          | N/A       | Yes      | Executes when the input height changes                                                 |
| placeholder         | String        | N/A       | Yes      | Placeholder text for the input                                                         |
| author              | Object        | null      | No       | The user who is submitting the form                                                    |
| focusOnMount        | Bool          | false     | No       | Determines wether to auto focus the input when the component mounts                    |
| value               | String        | ''        | No       | The input value                                                                        |
| editing             | Bool          | false     | No       | Renders the form in an editing state                                                   |
| showAuthor          | Bool          | true      | No       | Determines wether to render the author                                                 |
| cancelText          | String        | 'Cancel'  | No       | The text to display for the cancel button                                              |
| submitText          | String        | 'Submit'  | No       | The text to display for the submit button                                              |
| displayEmail        | Bool          | false     | No       | Determines wether to show the email or username/display when displaying mentionable/@-able users |
| disableUntilMention | Bool          | false     | No       | Disables the submit button until a mention is added                                    |
| defaultUsers        | Array         | []        | No       | users that are mentioned by default when the form is rendered                                    |

```
<MentionsForm
  users={[{
      id: 1,
      display: 'mrman',
      name: 'Mr Man',
      email: 'mrman@man.com',
      url: 'path/to/avatar'
    },{
      id: 2,
      display: 'mrswoman',
      name: 'Mrs Woman',
      email: 'mrswoman@woman.com',
      url: 'path/to/avatar'
    }]}
  onSubmit={() => {}}
  onInputChange={() => {}}
  onCancel={() => {}}
  onRowCountChange={() => {}}
  placeholder="Type @ or click the mention button!"
  defaultUsers={[{
    id: 1,
    display: 'mrman',
    name: 'Mr Man',
    email: 'mrman@man.com',
    url: 'path/to/avatar'
  }]}
/>
```
