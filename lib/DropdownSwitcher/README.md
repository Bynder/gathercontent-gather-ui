# DropdownSwitcher
A dropdown using either popover or a dropdown

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                |
| ------------------- |-------------- | --------- | -------- |------------------------------------------- |
| title               | String / Node | ''        | Yes      | The title for the dropdown button          |
| id                  | String        | ''        | Yes      | Unique ID passed to popover                |
| menu                | Node          | ''        | No       | Passing `menu` will create a dropdown      |
| children            | String / Node | []        | No       | Passing `children` will create a popover   |
###Usage
```
<DropdownSwitcher title="Archived Items" id="ai" menu={menu} />
```

If you want to use a popover instead of a bootstrap dropdown

```
<DropdownSwitcher title="Project Name" id="ai">
  <ul className="dropdown-menu">
    <li className="dropdown__item">
      <a href="#test" className="dropdown__link">
        Personal Settings
      </a>
    </li>
  </ul>
</DropdownSwitcher>
```
