# Shortcut
Groups a list of keys to use to trigger a command. Each key separated by a `+` symbol

### Props

| Name                | Type          | Default   | Required | Description                               |
| ------------------- |-------------- | --------- | -------- |------------------------------------------ |
| name                | String        | ''        | Yes      | The title of the Shortcut                 |
| styleClass          | String        | ''        | No       | The class used to style the name          |

###Usage
```
<Shortcut name="Apply Heading style [1-6]">
  <ShortcutCommandKey />
  <ShortcutOptionKey />
  <ShortcutIcon>1-6</ShortcutIcon>
</Shortcut>
```


## ShortcutCommandKey
Will display CMD on Mac and CTRL on any other OS

## ShortcutOptionKey
Will display Option on Mac and Alt on any other OS

## ShortcutIcon
Will display its `children` styled to match the other keys
