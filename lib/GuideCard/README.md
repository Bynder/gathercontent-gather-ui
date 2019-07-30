# GuideCard
several components that can be combined to create a setup guide card
# GuideCard
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
| cta | object { title: string, onClick: function } | null | false | Call to action. Displayed at the bottom of the card |
# GuideCard.CTA
The call to action for the card. Renders a button.

| Name | Type | Default | Required | Description |
| ---- | ---- | ------- | -------- | ----------- |
| text | string | null | true | Text to be displayed in the CTA button |
| loadingText | string | null | false | Text to be displayed in the CTA button when it is loading (async function only) |
| isAsync | bool | false | false | whether or not the passed onClick function is an async function |
| onClick | function || async function | null | true | A function to be called when the button is clicked |

## Useage
```
<GuideCard icon="template">
  <GuideCard.Body
    stepNumber={1}
    title={'Create the first template'}
    description={'Content templates make it easy for people to provide any type of content in the correct format, and style. Whether it’s blog articles, website pages or email newsletter content.  '}
    cta={{ title: '📹How to use content templates (1:40)', onClick: () => console.log('jello') }}
  />
  <GuideCard.CTA 
    text="Create a template"
    loadingText="Creating a template..."
    onClick={async () => await doSomethingAsynchronously()}
    isAsync
  />
</GuideCard>

```
