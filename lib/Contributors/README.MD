# Contributors
A component that can be used to display a list of contributors

## Usage

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| currentAssignees    | Array of objects     | `[]`      | No       | Assignees you would like to display.  |
| currentViewers    | Array of objects     | `[]`      | No       | Viewers you would like to display.  |
| searchResults    | Array of objects     | `[]`      | No       | A list of results you would like to display.  |
| removeAssignee   | Function      | N/A      | Yes       | Executes when the user clicks on the unassign button. |
| handleSearchChange   | Function      | N/A      | Yes       | Executes when the user changes the search input. |
| handleClearResults   | Function      | N/A      | Yes       | Executes when the user closes the search box. |
| userCanAddAssignee          | bool          | `false`       | No       | If false some UI around assigning and unassigning assignees will be hidden. |
| emptyText          | string          | 'There is no one assigned yet'       | No       | Text to display if there are no currentAssignees. |


```
<Contributors
  currentAssignees={[]}
  currentViewers={[]}
  searchResults={[]}
  removeAssignee={() => {}}
  handleSearchChange={() => {}}
  handleClearResults={() => {}}
  userCanAddAssignee
/>
```
