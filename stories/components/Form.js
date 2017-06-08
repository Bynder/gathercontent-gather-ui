import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Checkbox from '../../lib/Form/Checkbox';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Form: Checkboxes', () => {
    return (
      <div>
        <StoryItem
          title="Radio buttons group"
          description="Groups of radio buttons">
          <p>
            <Checkbox.Input
              name="ch1"
              id="id1"
              checked
            />
            <Checkbox.Label label="Ethiopian roast" id="id1" />
          </p>
          <p>
            <Checkbox.Input
              name="ch1"
              id="id2" />
            <Checkbox.Label label="Guatemala roast" id="id2"/>
          </p>
          <p>
            <Checkbox.Input
              name="ch1"
              id="id3"
              checked
            />
            <Checkbox.Label label="Honduras roast" id="id3"/>
          </p>
        </StoryItem>
      </div>
    );
  });
