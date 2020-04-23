import React from 'react';
import { storiesOf } from '@storybook/react';
import { map } from 'lodash';
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary';
import StoryItem from '../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from './ButtonStoryItem';

storiesOf('Components', module).add('ButtonPrimary', () => (
  <div>
    {map(ButtonPrimary.sizes, size => (
      <StoryItem
        key={size}
        title={`ButtonPrimary ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} primary button component`}
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonPrimary size={size}>Button text</ButtonPrimary>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading">
            <ButtonPrimary size={size} loading>
              Button text
            </ButtonPrimary>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading Right">
            <ButtonPrimary size={size} loading loaderRight>
              Button text
            </ButtonPrimary>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled">
            <ButtonPrimary size={size} disabled>
              Button text
            </ButtonPrimary>
          </ButtonStoryItem>

          <ButtonStoryItem title="Danger">
            <ButtonPrimary size={size} danger>
              Dangerous Button
            </ButtonPrimary>
          </ButtonStoryItem>

          <ButtonStoryItem title="Group">
            <ButtonPrimary size={size} connectedRight>
              Option 1
            </ButtonPrimary>
            <ButtonPrimary size={size} connectedRight connectedLeft>
              Option 2
            </ButtonPrimary>
            <ButtonPrimary size={size} connectedLeft>
              Option 3
            </ButtonPrimary>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    ))}
  </div>
));
