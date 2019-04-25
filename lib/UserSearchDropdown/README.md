# User Search Dropdown
Renders the UserSearch component in a handy Dropdown

## Usage

### Props

| Name                  | Type                 | Default       | Required | Description                                         |
| --------------------- |--------------------- | ------------- | -------- |---------------------------------------------------- |
| Users                 | Array of objects     | n/a           | Yes      | The users to display.                               |
| addUser               | func                 | n/a           | Yes      | Fires when a user is clicked.                       |
| displayEmail          | bool                 | n/a           | Yes      | Dictates whether the email of the user displays.    |
| dropdownAutoPosition  | bool                 | n/a           | Yes      | Dictates whether the dropdown should use auto positioning.    |
| searchHeading         | string               | 'Search...'   | No       | Heading text to display.                            |
| tooltipText           | string               | ''            | No       | Tooltip text for the DropdownTrigger.               |


```
<UserSearchDropdown
  users={[{user}, {user}, {user}]}
  addUser={() => {}}
  displayEmail
  searchHeading="Search!!"
  dropdownAutoPosition
  tooltipText="Click me to see users!"
/>
```
