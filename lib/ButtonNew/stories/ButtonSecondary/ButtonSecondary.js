import React from 'react';
import { storiesOf } from '@storybook/react';
import { map } from 'lodash';
import { ButtonSecondary } from '../../ButtonSecondary/ButtonSecondary';
import StoryItem from '../../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from '../ButtonStoryItem';

storiesOf('Components', module).add('ButtonSecondary', () => (
  <div>
    {map(ButtonSecondary.sizes, size => (
      <StoryItem
        key={size}
        title={`ButtonSecondary ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} secondary button component`}
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonSecondary size={size}>Button text</ButtonSecondary>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading">
            <ButtonSecondary size={size} loading>
              Button text
            </ButtonSecondary>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading Right">
            <ButtonSecondary size={size} loading loaderRight>
              Button text
            </ButtonSecondary>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled">
            <ButtonSecondary size={size} disabled>
              Button text
            </ButtonSecondary>
          </ButtonStoryItem>

          <ButtonStoryItem title="Group">
            <ButtonSecondary size={size} connectedRight>
              Option 1
            </ButtonSecondary>
            <ButtonSecondary size={size} connectedRight connectedLeft>
              Option 2
            </ButtonSecondary>
            <ButtonSecondary size={size} connectedLeft>
              Option 3
            </ButtonSecondary>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled Group">
            <ButtonSecondary size={size} connectedRight disabled>
              Option 1
            </ButtonSecondary>
            <ButtonSecondary size={size} connectedRight connectedLeft disabled>
              Option 2
            </ButtonSecondary>
            <ButtonSecondary size={size} connectedLeft disabled>
              Option 3
            </ButtonSecondary>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    ))}
  </div>
));
