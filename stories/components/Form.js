import React, { Component } from 'react';
import assign from 'object-assign';
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
      <StoryItem
        title="Checkboxes"
        description="Checkbox input choices"
      >
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
          choices={[{
            name: 'ch3',
            id: 'id31',
            checked: true,
            label: 'Ethiopian roast',
          }, {
            name: 'ch3',
            id: 'id32',
            checked: true,
            label: 'Guatemala roast',
          }]}
          onChangeHandler={action('hello')}
        />
      </StoryItem>
    </div>
  ))

  .add('Form: Radios', () => (
    <div>
      <StoryItem
        title="Radio inputs"
        description="Multiple, default styling checkboxes"
      >
        <RadioButton
          name="ch3"
          id="id31"
          value="value 1"
          onChangeHandler={e => action(e.target.value)()}
          checked
          label="Ethiopian roast"
        />
        <RadioButton
          name="ch3"
          value="value 2"
          onChangeHandler={e => action(e.target.value)()}
          id="id32"
          label="Guatemala roast"
        />
        <RadioButton
          name="ch3"
          id="id33"
          value="value 3"
          onChangeHandler={e => action(e.target.value)()}
          label="Honduras roast"
        />
      </StoryItem>

      <StoryItem
        title="Radio inputs: disabled"
        description="Multiple radios can be disabled by passing in the disabled property"
      >
        <RadioButton
          name="ch4"
          disabled
          id="id41"
          value="value 1"
          onChangeHandler={action('hello')}
          checked
          label="Ethiopian roast"
        />
        <RadioButton
          disabled
          name="ch4"
          value="value 2"
          onChangeHandler={action('hello')}
          id="id42"
          label="Guatemala roast"
        />
      </StoryItem>

      <StoryItem
        title="Radio inputs: label with subtitle"
        description="A label can have a subtitle"
      >
        <RadioButton
          name="ch5"
          id="id51"
          value="value 1"
          onChangeHandler={action('hello')}
          checked
          label="Ethiopian roast"
          subtitle="This is my favourite"
        />
        <RadioButton
          name="ch5"
          value="value 2"
          onChangeHandler={action('hello')}
          id="id52"
          label="Guatemala roast"
          subtitle="This one is nice too"
        />
      </StoryItem>

      <StoryItem
        title="Radio inputs: with other field"
        description="Radio inputs can have a user-provided value"
      >
        <RadioButton
          name="ch6"
          id="id61"
          value="value 1"
          onChangeHandler={e => console.log(e.target.value)}
          label="Ethiopian roast"
        />
        <RadioButton
          name="ch6"
          value="value 2"
          onChangeHandler={e => console.log(e.target.value)}
          id="id62"
          label="Guatemala roast"
        />
        <RadioButtonOther
          other_option
          name="ch6"
          id="id63"
          label="Or enter your own"
          checked
          value="Tea"
          onChangeHandler={v => action(v)()}
          onTextChangeHandler={e => action('other value')(e.target.value)}
        />
      </StoryItem>

      <StoryItem
        title="Radio inputs: in a RadioButtonGroup"
        description="The group is used to control the checked state"
      >
        <RadioButtonGroup
          choices={[{
            name: 'ch7',
            id: 'id71',
            value: 'value 1',
            label: 'Ethiopian roast',
            checked: true,
          }, {
            name: 'ch7',
            id: 'id72',
            value: 'value 2',
            label: 'Guatemala roast',
          }, {
            name: 'ch7',
            id: 'id73',
            value: '',
            label: 'Or enter your own',
            other_option: true,
          }]}
          onChangeHandler={(selected) => { action('selected')(selected); }}
        />
      </StoryItem>
    </div>
  ));
