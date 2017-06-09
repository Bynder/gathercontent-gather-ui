import React from 'react';
import { storiesOf, action } from '@storybook/react';
import RadioButton from '../../lib/Form/RadioButton';
import Checkbox from '../../lib/Form/Checkbox';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Form: Checkboxes', () => {
    return (
      <div>
        <StoryItem
          title="Checkboxes"
          description="Radio input choices"
        >
          <p>
            <Checkbox.Input
              name="ch1"
              id="id1"
              onChangeHandler={action('hello')}
              checked
            />
            <Checkbox.Label label="Ethiopian roast" id="id1" />
          </p>
          <p>
            <Checkbox.Input
              name="ch1"
              onChangeHandler={action('hello')}
              id="id2"
            />
            <Checkbox.Label label="Guatemala roast" id="id2" />
          </p>
          <p>
            <Checkbox.Input
              name="ch1"
              id="id3"
              onChangeHandler={action('hello')}
              checked
            />
            <Checkbox.Label label="Honduras roast" id="id3" />
          </p>
        </StoryItem>
      </div>
    )
  })

  .add('Form: Radios', () => {
    return (
      <div>
        <StoryItem
          title="Radio inputs"
          description="Multiple, default styling checkboxes"
        >
          <p>
            <RadioButton.Input
              name="ch1"
              id="id1"
              value="value 1"
              onChangeHandler={action('hello')}
              checked
            />
            <RadioButton.Label label="Ethiopian roast" id="id1" />
          </p>
          <p>
            <RadioButton.Input
              name="ch1"
              value="value 2"
              onChangeHandler={action('hello')}
              id="id2"
            />
            <RadioButton.Label label="Guatemala roast" id="id2" />
          </p>
          <p>
            <RadioButton.Input
              name="ch1"
              id="id3"
              value="value 3"
              onChangeHandler={action('hello')}
            />
            <RadioButton.Label label="Honduras roast" id="id3" />
          </p>
        </StoryItem>
      </div>
    )
  });
