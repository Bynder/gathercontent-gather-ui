import React from 'react';
import { ButtonColour } from 'lib';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';
import StoryItem from '../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from './ButtonStoryItem';

storiesOf('Components/Buttons', module).add('ButtonColour', () => {
  const states = [{}, { active: true }, { disabled: true }];
  const colour = color('Button colour', '#F9D006');
  return (
    <StoryItem title="ButtonColour" description="The colour button component">
      <ButtonStoryItem>
        {states.map(s => (
          <div className="h-16">
            <ButtonColour colour={colour} {...s} />
          </div>
        ))}
      </ButtonStoryItem>
    </StoryItem>
  );
});
