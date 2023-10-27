# SectionHeader

A site wide page title

### Props

| Name     | Type   | Default | Required | Description                                                                                |
| -------- | ------ | ------- | -------- | ------------------------------------------------------------------------------------------ |
| title    | String |         | Yes      |                                                                                            |
| cta      | String |         | No       | Can be any sort of node or element, will be displayed at the right hand side of the Header |
| children | String |         | No       | If a child is supplied the title will be turned into a dropdown                            |

###Usage

```
<SectionHeader title="Page Title" />
```

With a CTA and a dropdown menu. The title `Page Title` will become a dropdown menu

```
<SectionHeader
  title="Page Title"
  cta={(<Button>Create Page</Button>)}
 >
  <Dropdown.Menu className="gui-dropdown__menu gui-dropdown-menu--arrowed">
    <MenuItem href="#" eventKey="1">
      <FontAwesomeIcon name="fa-folder-o" /> Items
    </MenuItem>
  </Dropdown.Menu>
</SectionHeader>
```
