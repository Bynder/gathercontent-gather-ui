import React from 'react';
import { storiesOf, action } from '@storybook/react';
import RadioButtonGroup from '../../lib/Form/RadioButtonGroup';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Radio Buttons', () => {
    return (
      <div>
        <StoryItem
          title="Radio buttons group"
          description="Groups of radio buttons">
          <div>
            <RadioButtonGroup
              onChange={() => action('onChange')}
              title="Title 1"
              id="group-1"
              name="group-choice"
              subtitle="Subtitle"
            />
            <RadioButtonGroup
              onChange={() => action('onChange')}
              title="Title 2"
              id="group-2"
              name="group-choice"
              subtitle="Subtitle"
            />
            <RadioButtonGroup
              onChange={() => action('onChange')}
              title="Title 3"
              id="group-3"
              name="group-choice"
              subtitle="Subtitle"
            />
          </div>
        </StoryItem>
      </div>
    );
  });
