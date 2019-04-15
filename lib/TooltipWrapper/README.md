# TooltipWrapper
A wrapper component that renders a tooltip over its children

## Usage
### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| className             | string        | ''            | No       | Class applied to the Tooltip                        |
| wrapperclassName      | string        | ''            | No       | Class applied to the child wrapping <span>          |
| id                    | string        | N/A           | Yes      | Id applied to the tooltip                           |
| placement             | string        | 'bottom'      | No       | https://react-bootstrap.github.io/components/overlays/#overlay-props          |
| trigger               | [string]      | ['hover', 'focus'] | No       | https://react-bootstrap.github.io/components/overlays/#overlay-props          |
| hide                  | boolean       | false         | No       | Hides the tooltip                                   |
| tooltipText           | string \|\| object (wTF?)| ''   | No       | The text to display above the tooltip               |
| clickable             | boolean       | false         | No       | Displays the cursor as a pointer over the tooltips child  |
| children              | ReactNode     | N/A           | Yes      | The elements to display the tooltip over  |

```
 <TooltipWrapper 
    id="bulk-date-tooltip" 
    tooltipText="Change a due date" 
    placement="top" 
    onClick={() => showModal('bulk-due-dates')}
    clickable          
>
    <Icon name="calendar" />
</TooltipWrapper>
```