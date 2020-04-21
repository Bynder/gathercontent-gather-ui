import React from 'react';
import { storiesOf } from '@storybook/react';
import { map } from 'lodash';
import { ButtonPrimary } from '../ButtonPrimary';
import StoryItem from '../../../stories/styleguide/StoryItem';

storiesOf('Components', module).add('NewButton', () => (
  <div>
    {map(ButtonPrimary.sizes, size => (
      <StoryItem
        title={`ButtonPrimary ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} primary button component`}
      >
        <h4>Default</h4>
        <ButtonPrimary size={size}>Button text</ButtonPrimary>
        <h4>Loading</h4>
        <ButtonPrimary size={size} loading>
          Button text
        </ButtonPrimary>
        <h4>Loading Right</h4>
        <ButtonPrimary size={size} loading loaderRight>
          Button text
        </ButtonPrimary>
        <h4>Disabled</h4>
        <ButtonPrimary size={size} disabled>
          Button text
        </ButtonPrimary>
      </StoryItem>
    ))}
  </div>
));
