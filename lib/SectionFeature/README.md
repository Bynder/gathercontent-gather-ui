# SectionFeature
A component which stands proud within a section to share a message.

### Props

| Name                | Type          | Default   | Required | Description                                |
| ------------------- |-------------- | --------- | -------- |------------------------------------------- |
| children            | Node          | n/a       | Yes      | Text, headings, etc |
| extendTop           | Bool          | false     | No       | Adds a modifier to extend the top spacing.          |
| enhanceIntro        | Bool          | false     | No       | Adds a modifier to increase the size of the first text in the component.          |
| className           | String        | ''        | No       | Custom classNames can be added with this prop. |

###Usage
```
<SectionFeature extendTop>
  <h1>Upgrade your GatherContent account!</h1>
  <small>You're currently using <strong>6</strong> seats on your trial.</small>
</SectionFeature>
```
