import React from 'react';
import { storiesOf, action } from '@storybook/react';
import RadioButton from '../../lib/Form/RadioButton';
import Checkbox from '../../lib/Form/Checkbox';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Form: Checkboxes', () => (
    <div>
      <StoryItem
        title="Checkboxes"
        description="Radio input choices"
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
        description="Radio input choices can be disabled. This can be achieved by passing in the disabled property."
      >
        <Checkbox
          name="ch44"
          id="id44"
          disabled
          onChangeHandler={action('hello')}
          checked
          label="Ethiopian roast"
        />
        <Checkbox
          name="ch44"
          disabled
          onChangeHandler={action('hello')}
          id="id55"
          label="Guatemala roast"
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
          name="ch1"
          id="id1"
          value="value 1"
          onChangeHandler={e => action(e.target.value)()}
          checked
          label="Ethiopian roast"
        />
        <RadioButton
          name="ch1"
          value="value 2"
          onChangeHandler={e => action(e.target.value)()}
          id="id2"
          label="Guatemala roast"
        />
        <RadioButton
          name="ch1"
          id="id3"
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
          name="ch21"
          disabled
          id="id21"
          value="value 1"
          onChangeHandler={action('hello')}
          checked
          label="Ethiopian roast"
        />
        <RadioButton
          disabled
          name="ch21"
          value="value 2"
          onChangeHandler={action('hello')}
          id="id22"
          label="Guatemala roast"
        />
      </StoryItem>

      <StoryItem
        title="Radio inputs: label with subtitle"
        description="A label can have a subtitle"
      >
        <RadioButton
          name="ch21"
          id="id21"
          value="value 1"
          onChangeHandler={action('hello')}
          checked
          label="Ethiopian roast"
          subtitle="This is my favourite"
        />
        <RadioButton
          disabled
          name="ch21"
          value="value 2"
          onChangeHandler={action('hello')}
          id="id22"
          label="Guatemala roast"
          subtitle="This one is nice too"
        />
      </StoryItem>

        <StoryItem
          title="Radio inputs: disabled"
          description="Multiple radios can be disabled by passing in the disabled property"
        >
          <div className="form__choice-element-wrapper">
            <RadioButton.Input
              name="ch21"
              disabled
              id="id21"
              value="value 1"
              onChangeHandler={action('hello')}
              checked
            />
            <RadioButton.Label label="Ethiopian roast" id="id21" />
          </div>
          <div className="form__choice-element-wrapper">
            <RadioButton.Input
              disabled
              name="ch21"
              value="value 2"
              onChangeHandler={action('hello')}
              id="id22"
            />
            <RadioButton.Label label="Guatemala roast" id="id22" />
          </div>
        </StoryItem>

        <StoryItem
          title="Radio inputs: with other field"
          description="Radio inputs can have a user-provided value"
        >
          <div className="form__choice-element-wrapper">
            <RadioButton.Input
              name="ch22"
              id="id23"
              value="value 1"
              onChangeHandler={action('hello')}
            />
            <RadioButton.Label label="Ethiopian roast" id="id23" />
          </div>
          <div className="form__choice-element-wrapper">
            <RadioButton.Input
              name="ch22"
              value="value 2"
              onChangeHandler={action('hello')}
              id="id24"
            />
            <RadioButton.Label label="Guatemala roast" id="id24" />
          </div>
          <div className="form__choice-element-wrapper">
            <RadioButton.Other
              name="ch22"
              id="id25"
              label="Or enter a value manually"
              checked
              value="Columbian"
              onChangeHandler={v => action(v)()}
            />
          </div>
        </StoryItem>
      </div>
    );
  });
