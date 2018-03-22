# UserList
A component that can be used to display a list of contributors

## Usage

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| currentUsers    | Array of objects     | `[]`      | No       | Assignees you would like to display.  |
| otherUsers    | Array of objects     | `[]`      | No       | Viewers you would like to display.  |
| searchResults    | Array of objects     | `[]`      | No       | A list of results you would like to display.  |
| removeUsers   | Function      | N/A      | Yes       | Executes when the user clicks on the unassign button. |
| handleSearchChange   | Function      | N/A      | Yes       | Executes when the user changes the search input. |
| handleClearResults   | Function      | N/A      | Yes       | Executes when the user closes the search box. |
| showUserControls          | bool          | `false`       | No       | If false some UI around assigning and unassigning assignees will be hidden. |
| emptyText          | string          | 'There is no one assigned yet'       | No       | Text to display if there are no currentUsers. |
| emptyTextButton          | string          | 'Search for a user now'       | No       | Text to display for the button if there are no currentUsers. |
| userListHeading          | string          | 'User list'       | No       | Heading text to display at the top of the UserList. |
| currentUsersHeading          | string          | 'Current users'       | No       | Heading text to display at the top of the current users list. |
| otherUsersHeading          | string          | 'Other users'       | No       | Heading text to display at the top of the other users list. |
| removeUserText          | string          | 'Remove'       | No       | Text to display for the remove user button. |
| resultsTitle          | string          | 'Add user...'       | No       | Text to display for search list title. |


```
<UserList
  currentUsers={[]}
  otherUsers={[]}
  searchResults={[]}
  removeUsers={() => {}}
  handleSearchChange={() => {}}
  handleClearResults={() => {}}
  showUserControls
/>
```
