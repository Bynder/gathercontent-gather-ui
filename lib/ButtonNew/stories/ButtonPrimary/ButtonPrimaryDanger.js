import React from 'react';
import { storiesOf } from '@storybook/react';
import { map } from 'lodash';
import { ButtonPrimaryDanger } from '../../ButtonPrimary/ButtonPrimaryDanger';
import StoryItem from '../../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from '../ButtonStoryItem';

storiesOf('Components', module).add('ButtonPrimaryDanger', () => (
  <div>
    {map(ButtonPrimaryDanger.sizes, size => (
      <StoryItem
        key={size}
        title={`ButtonPrimaryDanger ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} primary button component`}
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonPrimaryDanger size={size}>Button text</ButtonPrimaryDanger>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading">
            <ButtonPrimaryDanger size={size} loading>
              Button text
            </ButtonPrimaryDanger>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading Right">
            <ButtonPrimaryDanger size={size} loading loaderRight>
              Button text
            </ButtonPrimaryDanger>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled">
            <ButtonPrimaryDanger size={size} disabled>
              Button text
            </ButtonPrimaryDanger>
          </ButtonStoryItem>

          <ButtonStoryItem title="Group">
            <ButtonPrimaryDanger size={size} connectedRight>
              Option 1
            </ButtonPrimaryDanger>
            <ButtonPrimaryDanger size={size} connectedRight connectedLeft>
              Option 2
            </ButtonPrimaryDanger>
            <ButtonPrimaryDanger size={size} connectedLeft>
              Option 3
            </ButtonPrimaryDanger>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    ))}
  </div>
));
