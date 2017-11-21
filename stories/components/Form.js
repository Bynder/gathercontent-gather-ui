import React from 'react';
import { storiesOf, action } from '@storybook/react';
import RadioButton from '../../lib/Form/RadioButton';
import RadioButtonOther from '../../lib/Form/RadioButton/Other';
import RadioButtonGroup from '../../lib/Form/RadioButton/Group';
import Checkbox from '../../lib/Form/Checkbox';
import CheckboxGroup from '../../lib/Form/Checkbox/Group';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Form: Checkboxes', () => (
    <div>
      <StoryItem title="Checkboxes" description="Checkbox input choices">
        <Checkbox
          name="ch1"
          id="id1"
          onChangeHandler={e => action(e.target.value)()}
          checked
          label="Ethiopian roast"
        />
        <Checkbox
          name="ch1"
          onChangeHandler={e => action(e.target.value)()}
          id="id2"
          label="Guatemala roast"
        />
        <Checkbox
          name="ch1"
          id="id3"
          onChangeHandler={e => action(e.target.value)()}
          checked
          label="Honduras roast"
        />
      </StoryItem>

      <StoryItem
        title="Checkboxes: Disabled"
        description="Checkbox input choices can be disabled. This can be achieved by passing in the disabled property."
      >
        <Checkbox
          name="ch2"
          id="id21"
          disabled
          onChangeHandler={action('hello')}
          checked
          label="Ethiopian roast"
        />
        <Checkbox
          name="ch2"
          disabled
          onChangeHandler={action('hello')}
          id="id22"
          label="Guatemala roast"
        />
      </StoryItem>

      <StoryItem
        title="Checkboxes: in a CheckboxGroup"
        description="Checkbox input choices can be controlled in a CheckboxGroup"
      >
        <CheckboxGroup
          choices={[
            {
              name: 'ch3',
              id: 'id31',
              checked: true,
              label: 'Ethiopian roast'
            },
            { name: 'ch3', id: 'id32', checked: true, label: 'Guatemala roast' }
          ]}
          onChangeHandler={action('hello')}
        />
      </StoryItem>
      <StoryItem title="Checkboxes: highlighted">
        <Checkbox
          name="checkbox-highlight"
          id="checkbox-highlight"
          onChangeHandler={action('hello')}
          label="Ethiopian roast"
          checked
          highlight
        />
      </StoryItem>

      <StoryItem title="Checkboxes in a group: highlighted">

        <CheckboxGroup
          choices={[
            {
              name: 'ch3',
              id: 'id31',
              checked: true,
              label: 'Ethiopian roast',
              highlight: true
            },
            { name: 'ch3', id: 'id32', checked: true, label: 'Guatemala roast', highlight: true }
          ]}
          onChangeHandler={action('hello')}
        />
      </StoryItem>
    </div>
  ))
  .add('Form: Radios', () => (
    <div>
      <StoryItem
        title="Radio Input"
        description="Base styling for RadioInputs."
      >
        <RadioButton
          name="ch1"
          id="id1"
          value="value 1"
          onChangeHandler={e => action('onChangeHandler')(e)}
          label="Option label"
        />
      </StoryItem>

      <StoryItem
        title="Radio Input (checked)"
        description="Inputs can have a checked state."
      >
        <RadioButton
          name="ch2"
          id="id2"
          value="value 2"
          onChangeHandler={e => action('onChangeHandler')(e)}
          label="Option label"
          checked
        />
      </StoryItem>

      <StoryItem
        title="Radio Input (disabled)"
        description="Inputs can be disabled, which prevents all callbacks from being executed."
      >
        <RadioButton
          name="ch3"
          id="id3"
          value="value 3"
          onChangeHandler={e => action('onChangeHandler')(e)}
          label="Option label"
          disabled
        />
      </StoryItem>

      <StoryItem
        title="Radio Input (label with subtitle)"
        description="A label can have a subtitle."
      >
        <RadioButton
          name="ch4"
          id="id4"
          value="value 1"
          onChangeHandler={e => action('onChangeHandler')(e)}
          label="Option label"
          subtitle="label subtext"
          checked
        />
      </StoryItem>

      <StoryItem
        title="Radio Input (other option)"
        description="Inputs can have a user-provided value."
      >
        <RadioButtonOther
          name="ch5"
          id="id5"
          label="Option label"
          value="5"
          onChangeHandler={e => action('onChangeHandler')(e)}
          onTextChangeHandler={e => action('onTextChangeHandler')(e)}
          other_option
        />

        <p>The other option when checked shows an input.</p>

        <RadioButtonOther
          name="ch5"
          id="id5"
          label="Option label"
          value="5"
          onChangeHandler={e => action('onChangeHandler')(e)}
          onTextChangeHandler={e => action('other value')(e)}
          other_option
          checked
        />
      </StoryItem>

      <StoryItem
        title="Radio Input Group"
        description="The group is used to control the checked state and the text value for the other option."
      >
        <RadioButtonGroup
          choices={[
            {
              name: 'ch7',
              id: 'id71',
              value: 'value 1',
              label: 'Ethiopian roast',
              checked: true
            },
            {
              name: 'ch7',
              id: 'id72',
              value: 'value 2',
              label: 'Guatemala roast'
            },
            {
              name: 'ch7',
              id: 'id73',
              value: '',
              label: 'Or enter your own',
              other_option: true
            }
          ]}
          onChangeHandler={selected => action('onChangeHandler')(selected)}
        />
      </StoryItem>

      <StoryItem title="Radio Input (highlighted)">
        <RadioButton
          name="highlighted"
          id="id-highlighted"
          value="value 1"
          onChangeHandler={e => action('onChangeHandler')(e)}
          label="Option label"
          subtitle="label subtext"
          checked
          highlight
        />
      </StoryItem>
    </div>
  ));
