# Person
Displays details about a person.

### Props

| Name                | Type          | Default   | Required | Description                                              |
| ------------------- |-------------- | --------- | -------- |--------------------------------------------------------- |
| person              | Object        | `{ name: '', avatar: '', initials: '' }`      | No       | Details of the person.                               |
| className           | String        | `''`        | No       | A class name which is appending in a fashion that works with BEM.                               |

###Usage
```
const person = {
  name: '',
  avatar: '',
  initials: ''
};
<Person person={person} />
```
