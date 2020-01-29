# PillInput

An input that creates pills when the user presses space, enter or blurs the input

## Usage
```
<PillInput 
  placeholder="Add an email" 
  checker={{ warning: 'This email is not valid!', regex: /[a-z]*@[a-z].com/ }}
  onPillsChange={pills => setPills(pills)}
>
```

### Props

| Name                 | Type     | Default | Required | Description                                                                                                               |
| -------------------- | -------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| placeholder              | string   | ''| No      | placeholder text for the input                                                                                                    |
| checker              | objectOf({ warning: String, regex: RegExp })   | null| No      | Object that checks a pills text value, and displays a warning if it does not match the regex (eg. check that an email is valid)                                                                                                    |
| onPillsChange              | func   | () => {} | No      | Func that is called whenever the list of Pills change (Pills text are passed as the first arg)                                                                                                    |
