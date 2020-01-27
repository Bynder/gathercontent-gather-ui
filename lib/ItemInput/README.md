# ItemInput

An input that creates Pill items when the user presses space or enter

## Usage
```
<ItemInput 
  placeholder="Add an email" 
  checker={{ warning: 'This email is not valid!', regex: /[a-z]*@[a-z].com/ }}
  onItemsChange={items => setItems(items)}
>
```

### Props

| Name                 | Type     | Default | Required | Description                                                                                                               |
| -------------------- | -------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| placeholder              | string   | ''| No      | placeholder text for the input                                                                                                    |
| checker              | objectOf({ warning: String, regex: RegExp })   | null| No      | Object that checks an items value, and displays a warning if it does not match the regex (eg. check that an email is valid)                                                                                                    |
| onItemsChange              | func   | () => {} | No      | Func that is called whenever the list of items change (items are passed as the firstarg)                                                                                                    |
