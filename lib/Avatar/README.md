# Avatar

An avatar component displays a circled avatar or initials

### Props

| Name          | Type    | Default | Required | Description       |
| ------------- | ------- | ------- | -------- | ----------------- |
| colour        | String  | ''      | No       | The fixed option. |
| name          | String  | ''      | No       | The fixed option. |
| url           | String  | ''      | No       | The fixed option. |
| initials      | String  | ''      | No       | The fixed option. |
| isOffline     | Boolean | `false` | No       | The fixed option. |
| isHighlighted | Boolean | `false` | No       | The fixed option. |

### Usage

```
<Avatar initials="AE" name="Angus Edwardson" color="green" url="img/url" isOffline isHighlighted />
```

# AvatarWithPopover

An avatar component which displays a dropdown menu or a tooltip. All above props are passed down to Avatar component

### Props

| Name            | Type           | Default                  | Required | Description                                        |
| --------------- | -------------- | ------------------------ | -------- | -------------------------------------------------- |
| overlayPosition | String         | 'bottom'                 | No       | Which direction to show the popover                |
| triggerEvent    | String / Array | `['onHover', 'onClick']` | No       | Can be an array of events or a single string event |
| popoverClass    | String         | ''                       | No       | Classes to be passed down to the popover wrapper   |
| caret           | Boolean        | `false`                  | No       | Add caret to the avatar                            |

### Usage

```
<AvatarWithPopover
  name="Angus Edwardson"
  initials="AE"
  email="example@gmail.com"
  triggerEvent="onClick"
  popoverClass="popover-dropdown"
  caret
>
  <ul className="gui-dropdown-menu">
    <li className="gui-dropdown__item">
      <a href="#test" className="gui-dropdown__link">
        Personal Settings
      </a>
    </li>
  </ul>
</AvatarWithPopover>
```
