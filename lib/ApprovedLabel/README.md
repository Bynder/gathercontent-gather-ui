# ApprovedLabel
Displays an approved "tick" icon, with a label for how many approvals have been given. On hover, a tooltip displays the list of `approvedBy` strings.

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| approvedBy              | array of strings | undefined        | Yes       | A list of strings indentifying people who have approved.                                                             |
### Usage
```
<ApprovedLabel approvedBy=['alex@gathercontent.com', 'amee@gathercontent.com', 'hugh@gatherco
intent.com', 'ben@hawkyard.com', 'mat@thenorth.com'] />
```
