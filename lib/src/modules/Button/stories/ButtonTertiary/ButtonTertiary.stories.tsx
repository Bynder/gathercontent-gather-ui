import React from 'react';
import { map } from 'lodash';
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonTertiary as ButtonTertiaryComponent } from '../../ButtonTertiary/ButtonTertiary';
import { ButtonStoryItem } from '../ButtonStoryItem';

export default {
  title: 'GUI/Buttons/Button Tertiary',
  component: ButtonTertiaryComponent
};

const { lg, ...storySizes } = ButtonTertiaryComponent.sizes;

export const ButtonTertiary = () => (
  <div>
    {map(storySizes, size => (
      <StoryItem
        key={size}
        title={`ButtonTertiaryComponent ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} tertiary button component`}
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonTertiaryComponent size={size}>
              Button text
            </ButtonTertiaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading">
            <ButtonTertiaryComponent size={size} loading>
              Button text
            </ButtonTertiaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading Right">
            <ButtonTertiaryComponent size={size} loading loaderRight>
              Button text
            </ButtonTertiaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled">
            <ButtonTertiaryComponent size={size} disabled>
              Button text
            </ButtonTertiaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled & loading">
            <ButtonTertiaryComponent size={size} loading disabled>
              Button text
            </ButtonTertiaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Active">
            <ButtonTertiaryComponent size={size} active>
              Button text
            </ButtonTertiaryComponent>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    ))}
  </div>
);

ButtonTertiary.parameters = {
  controls: { hideNoControlsWarning: true }
};
