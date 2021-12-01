import React from 'react';
import { map } from 'lodash';
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonSecondaryDanger as ButtonSecondaryDangerComponent } from '../../ButtonSecondary/ButtonSecondaryDanger';
import { ButtonStoryItem } from '../ButtonStoryItem';

export default {
  title: 'src/Buttons/Button Secondary Danger',
  component: ButtonSecondaryDangerComponent
};

export const ButtonSecondaryDanger = () => (
  <div>
    {map(ButtonSecondaryDangerComponent.sizes, size => (
      <StoryItem
        key={size}
        title={`ButtonSecondaryDangerDanger ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} secondary button danger component`}
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonSecondaryDangerComponent size={size}>
              Button text
            </ButtonSecondaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading">
            <ButtonSecondaryDangerComponent size={size} loading>
              Button text
            </ButtonSecondaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading Right">
            <ButtonSecondaryDangerComponent size={size} loading loaderRight>
              Button text
            </ButtonSecondaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled">
            <ButtonSecondaryDangerComponent size={size} disabled>
              Button text
            </ButtonSecondaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled & loading">
            <ButtonSecondaryDangerComponent size={size} disabled loading>
              Button text
            </ButtonSecondaryDangerComponent>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    ))}
  </div>
);

ButtonSecondaryDanger.parameters = {
  controls: { hideNoControlsWarning: true }
};
