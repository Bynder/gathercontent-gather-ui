# TagUserForm
A component that renders an ExpandingTextArea and an UserSearchDropdown allowing you to 'tag' users with a custom message

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                            |
| ------------------- |-------------- | --------- | -------- |--------------------------------------------------------------------------------------- |
| users               | Array         | N/A       | Yes      | An array of taggable users                                                             |
| onSubmit            | Func          | N/A       | Yes      | Executes when the form is submitted                                                    |
| onInputChange       | Func          | N/A       | Yes      | Executes when the input has changed                                                    |
| onCancel            | Func          | N/A       | Yes      | Executes when the user clicks the cancel button                                        |
| placeholder         | String        | N/A       | Yes      | Placeholder text for the input                                                         |
| focusOnMount        | Bool          | false     | No       | Determines wether to auto focus the input when the component mounts                    |
| value               | String        | ''        | No       | The input value                                                                        |
| cancelText          | String        | 'Cancel'  | No       | The text to display for the cancel button                                              |
| submitText          | String        | 'Submit'  | No       | The text to display for the submit button                                              |
| lockedUsers         | Array         | []        | No       | An array of users that are auto tagged and unremovable                                 |
| lockedUserTooltip   | String        | 'Locked'  | No       | Tooltip text to display for locked users                                               |

```
<TagUserForm
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
  placeholder="Write your custom message here"
/>
```
