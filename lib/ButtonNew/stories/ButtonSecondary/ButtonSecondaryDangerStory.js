import React from 'react';
import { storiesOf } from '@storybook/react';
import { map } from 'lodash';
import { ButtonSecondaryDanger } from '../../ButtonSecondary/ButtonSecondaryDanger';
import StoryItem from '../../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from '../ButtonStoryItem';

storiesOf('Components/Buttons', module).add(
  'ButtonSecondaryDangerDanger',
  () => (
    <div>
      {map(ButtonSecondaryDanger.sizes, size => (
        <StoryItem
          key={size}
          title={`ButtonSecondaryDangerDanger ${size.toUpperCase()}`}
          description={`The ${size.toUpperCase()} secondary button danger component`}
        >
          <div className="flex flex-wrap">
            <ButtonStoryItem title="Default">
              <ButtonSecondaryDanger size={size}>
                Button text
              </ButtonSecondaryDanger>
            </ButtonStoryItem>

            <ButtonStoryItem title="Loading">
              <ButtonSecondaryDanger size={size} loading>
                Button text
              </ButtonSecondaryDanger>
            </ButtonStoryItem>

            <ButtonStoryItem title="Loading Right">
              <ButtonSecondaryDanger size={size} loading loaderRight>
                Button text
              </ButtonSecondaryDanger>
            </ButtonStoryItem>

            <ButtonStoryItem title="Disabled">
              <ButtonSecondaryDanger size={size} disabled>
                Button text
              </ButtonSecondaryDanger>
            </ButtonStoryItem>

            <ButtonStoryItem title="Disabled & loading">
              <ButtonSecondaryDanger size={size} disabled loading>
                Button text
              </ButtonSecondaryDanger>
            </ButtonStoryItem>
          </div>
        </StoryItem>
      ))}
    </div>
  )
);
