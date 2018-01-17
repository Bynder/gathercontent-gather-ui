# Tabs
A compound component which has the container (`Tabs`), Item and Button.

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| onTabChange         | Function      | N/A       | Yes      | A function that executes every time a tab is clicked.                         |
| children            | ArrayOfNodes  | N/A       | Yes      | Nodes to be rendered within the tabs container.                               |
| activeTabId         | String        | ``        | No       | A prop to set the default active tab.                                         |
| editable            | Bool          | false     | No       | Adds a modifier class, which makes tabs appear editable.                      |

```
<Tabs onTabChange={(id) => console.log(`active tab is ${id}`)} activeTabId="id-1">
  <Tabs.Item id="id-1">Tab 1</Tabs.Item>
  <Tabs.Item id="id-2" options={[{}]}>Tab 2</Tabs.Item>
  <Tabs.Button onClick={() => console.log('tab button has been clicked')}>+</Tabs.Button>
</Tabs>
```

# TabsItem
A component for a individual tab.

## Usage

### Props

| Name                | Type             | Default   | Required | Description                                                                   |
| ------------------- |--------------    | --------- | -------- |------------------------------------------------------------------------------ |
| id                  | String           | N/A       | Yes      | The id of the tab. This is passed to onTabChange when a tab is clicked.       |
| children            | Node or String   | N/A       | Yes      | The content of the tab.                                                       |
| options             | Array of Objects | null      | No       | The options for a tab, which appear in a dropdown when clicked.               |

# TabsButton
A button which does not set the active tab when clicked. Handy for when you want to add an action to tabs e.g. "add a tab".

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| onClick             | Function      | `false`   | No       | Add left hand side border.                                                    |
| children            | Node or String  | N/A       | Yes      | The content of the button.