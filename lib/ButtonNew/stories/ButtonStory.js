import React from 'react';
import { storiesOf } from '@storybook/react';
import { map } from 'lodash';
import { ButtonPrimary } from '../ButtonPrimary';
import StoryItem from '../../../stories/styleguide/StoryItem';

storiesOf('Components', module).add('NewButton', () => (
  <div>
    {map(ButtonPrimary.sizes, size => (
      <StoryItem
        title={`ButtonPrimary ${size}`}
        description="The primary button component"
      >
        <div className="flex flex-row align-center">
          <ButtonPrimary size={size}>Button text</ButtonPrimary>
          <ButtonPrimary size={size} loading>
            Button text
          </ButtonPrimary>
          <ButtonPrimary size={size} loading loaderRight>
            Button text
          </ButtonPrimary>
        </div>
      </StoryItem>
    ))}
  </div>
));
