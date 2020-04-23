import React from 'react';
import { storiesOf } from '@storybook/react';
import { map } from 'lodash';
import { ButtonTertiary } from '../../ButtonTertiary/ButtonTertiary';
import StoryItem from '../../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from '../ButtonStoryItem';

storiesOf('Components', module).add('ButtonTertiary', () => (
  <div>
    {map(ButtonTertiary.sizes, size => (
      <StoryItem
        key={size}
        title={`ButtonTertiary ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} tertiary button component`}
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonTertiary size={size}>Button text</ButtonTertiary>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading">
            <ButtonTertiary size={size} loading>
              Button text
            </ButtonTertiary>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading Right">
            <ButtonTertiary size={size} loading loaderRight>
              Button text
            </ButtonTertiary>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled">
            <ButtonTertiary size={size} disabled>
              Button text
            </ButtonTertiary>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    ))}
  </div>
));
