import React from 'react';
import { map } from 'lodash';
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonSecondary as ButtonSecondaryComponent } from '../../ButtonSecondary/ButtonSecondary';
import { ButtonStoryItem } from '../ButtonStoryItem';

export default {
  title: 'src/Buttons/Button Secondary',
  component: ButtonSecondaryComponent
};

export const ButtonSecondary = () => (
  <div>
    {map(ButtonSecondaryComponent.sizes, size => (
      <StoryItem
        key={size}
        title={`ButtonSecondaryComponent ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} secondary button component`}
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonSecondaryComponent size={size}>
              Button text
            </ButtonSecondaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading">
            <ButtonSecondaryComponent size={size} loading>
              Button text
            </ButtonSecondaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading Right">
            <ButtonSecondaryComponent size={size} loading loaderRight>
              Button text
            </ButtonSecondaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled">
            <ButtonSecondaryComponent size={size} disabled>
              Button text
            </ButtonSecondaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled & loading">
            <ButtonSecondaryComponent size={size} disabled loading>
              Button text
            </ButtonSecondaryComponent>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    ))}
  </div>
);

ButtonSecondary.parameters = {
  controls: { hideNoControlsWarning: true }
};
