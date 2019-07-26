# GuideCard
Several components that can be combined to create a setup guide card
# GuideCard.Container
The containing card
### Props
| Name | Type | Default | Required | Description |
| ---- | ---- | ------- | -------- | ----------- |
| icon | string | null | false | Icon to display on the left hand side of the card |
# GuideCard.Body
The main body of the card

| Name | Type | Default | Required | Description |
| ---- | ---- | ------- | -------- | ----------- |
| stepNumber | number | null | false | The number of the card in a sequence (displayed next to the title) |
| title | string | null | true | The title of the card |
| description | string | null | true | The description of the card |
| appCuesCTA | object { title: string, appCuesId: string } | null | false | A link that launches an AppCues flow. Displayed at the bottom of the card |
# GuideCard.CTA
The call to action for the card. Renders a button.

| Name | Type | Default | Required | Description |
| ---- | ---- | ------- | -------- | ----------- |
| text | string | null | true | Text to be displayed in the CTA button |
| loadingText | string | null | false | Text to be displayed in the CTA button when it is loading (async value only) |
| value | string || function | null | true | Either a URL to be redirected to, or an async action to be called when the CTA button is clicked |

## Useage
```
<GuideCard.Container icon="template">
  <GuideCard.Body
    stepNumber={1}
    title={'Create the first template'}
    description={'Content templates make it easy for people to provide any type of content in the correct format, and style. Whether it’s blog articles, website pages or email newsletter content.  '}
    appCuesCTA={{ title: '📹How to use content templates (1:40)', appCuesId: '-LimByBoy12345' }}
  />
  <GuideCard.CTA 
    text="Create a template"
    loadingText="Creating a template..."
    value="/projects/23/templates/350"
  />
</GuideCard.Container>

```
