# Navigation
Displays a navigation list horizontally. Can pass a modifier to display as tabs

### Props

| Name                | Type          | Default   | Required | Description                                              |
| ------------------- |-------------- | --------- | -------- |--------------------------------------------------------- |
| tabs                | Boolean       | `false`   | No       | Display navigation as tabs                               |

###Child Props
| Name                | Type          | Default   | Required | Description                                              |
| ------------------- |-------------- | --------- | -------- |--------------------------------------------------------- |
| active              | Boolean       | `false`   | No       | Displays the current item as active/hightlighted         |

###Usage
```
<Navigation>
  <MenuItem href="#" active>
    Items
  </MenuItem>
  <MenuItem href="#">Archived Items</MenuItem>
</Navigation>
```

If you want to display the navigation as tabs:

```
<Navigation tabs>
  <MenuItem href="#" active>
    Items
  </MenuItem>
  <MenuItem href="#">Archived Items</MenuItem>
</Navigation>
```
