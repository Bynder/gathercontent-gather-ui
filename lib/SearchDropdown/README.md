# SearchDropdown
A component that renders a search input with a dropdown menu

## Usage

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| results    | Array of objects     | `[]`      | No       | A list of results to display.  |
| placeholder    | String     | 'Search...'      | No       | Placeholder text for the input.  |
| handleOnChange   | Function      |() => {}      | No       | Executes when the user changes the search input. |
| onInputClear  | Function      | () => {}     | No       | Executes when the user closes the search box. |
| alignRight          | bool          | `false`       | No       | If true it will align the dropdown to the right. |
| fullWidth          | bool          | `false`       | No       | If true it will display the input and dropdown as 100% width. |
| listClassName          | string          | ''       | No       | A className for the dropdown list. |
| resultsTitle          | string          | 'Results'       | No       | Text for the dropdown title. |
| direction         | string          | 'down'       | No       | Detirmines which direction the dropdown will align itself. |


```
<SearchDropdown
  resultsTitle="Results"
  results={[]}
  handleOnChange={() => {}}
  onInputClear={() => {}}
/>
</SearchDropdown>
```
