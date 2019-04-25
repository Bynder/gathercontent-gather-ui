# User Search
A component which renders a list of users with a search box.

## Usage

### Props

| Name                  | Type                 | Default       | Required | Description                                         |
| --------------------- |--------------------- | ------------- | -------- |---------------------------------------------------- |
| Users                 | Array of objects     | n/a           | Yes      | The users to display.                               |
| addUser               | func                 | n/a           | Yes      | Fires when a user is clicked.                       |
| displayEmail          | bool                 | n/a           | Yes      | Dictates whether the email of the user displays.    |
| searchHeading         | string               | 'Search...'   | No       | Heading text to display.                            |
| subHeading            | string               | ''            | No       | Subheading text to display.                         |
| selectedUserIds       | Array of numbers or strings | []     | No       | Renders the given users as selected.                |
| useDisplayToggle      | bool                 | false         | No       | Renders a Toggle that hides and shows the users/search. |
| onToggle              | func                 | () => {}      | No       | Fires when toggle is toggled.                       |
| displayList           | bool                 | false         | No       | Dictates whether the users/search renders.          |
| minUserLength         | number               | 0             | No       | The amount of users to display the `noUserDisplay`. |
| noUserDisplay         | string or node       | 'Looks like there are no people!'   | No       | Displays when there are only the minimum amount of users.       |
| hideAfterPerformingAction | bool             | false         | No       | Useful when rendering inside a Dropdown             |

```
<UserSearch
  users={[{user}, {user}, {user}]}
  addUser={() => {}}
  displayEmail
  searchHeading="Search!!"
  selectedUserIds={[1,2,3]}
  useDisplayToggle
  displayList
  subheading="No really, search"
  minUserLength={1}
  noUserDisplay={<p>wow no one!</p>}
  hideAfterPerformingAction
  onToggle={() => {}}
/>
```
