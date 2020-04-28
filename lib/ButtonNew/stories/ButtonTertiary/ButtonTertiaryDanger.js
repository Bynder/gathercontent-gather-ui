import React from 'react';
import { storiesOf } from '@storybook/react';
import { map } from 'lodash';
import { ButtonTertiaryDanger } from '../../ButtonTertiary/ButtonTertiaryDanger';
import StoryItem from '../../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from '../ButtonStoryItem';

storiesOf('Components', module).add('ButtonTertiaryDanger', () => (
  <div>
    {map(ButtonTertiaryDanger.sizes, size => (
      <StoryItem
        key={size}
        title={`ButtonTertiaryDanger ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} tertiary danger button component`}
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonTertiaryDanger size={size}>Button text</ButtonTertiaryDanger>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading">
            <ButtonTertiaryDanger size={size} loading>
              Button text
            </ButtonTertiaryDanger>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading Right">
            <ButtonTertiaryDanger size={size} loading loaderRight>
              Button text
            </ButtonTertiaryDanger>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled">
            <ButtonTertiaryDanger size={size} disabled>
              Button text
            </ButtonTertiaryDanger>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    ))}
  </div>
));
