import React from 'react';
import { map } from 'lodash';
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonTertiaryDanger as ButtonTertiaryDangerComponent } from '../../ButtonTertiary/ButtonTertiaryDanger';
import { ButtonStoryItem } from '../ButtonStoryItem';

export default {
  title: 'GUI/Buttons/Button Tertiary Danger',
  component: ButtonTertiaryDangerComponent
};

export const ButtonTertiaryDanger = () => (
  <div>
    {map(ButtonTertiaryDangerComponent.sizes, size => (
      <StoryItem
        key={size}
        title={`ButtonTertiaryDangerComponent ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} tertiary danger button component`}
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonTertiaryDangerComponent size={size}>
              Button text
            </ButtonTertiaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading">
            <ButtonTertiaryDangerComponent size={size} loading>
              Button text
            </ButtonTertiaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading Right">
            <ButtonTertiaryDangerComponent size={size} loading loaderRight>
              Button text
            </ButtonTertiaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled">
            <ButtonTertiaryDangerComponent size={size} disabled>
              Button text
            </ButtonTertiaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled & loading">
            <ButtonTertiaryDangerComponent size={size} disabled loading>
              Button text
            </ButtonTertiaryDangerComponent>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    ))}
  </div>
);

ButtonTertiaryDanger.parameters = {
  controls: { hideNoControlsWarning: true }
};
