import React from 'react';
import { map } from 'lodash';
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonPrimary as ButtonPrimaryComponent } from '../../ButtonPrimary/ButtonPrimary';
import { ButtonStoryItem } from '../ButtonStoryItem';

export default {
  title: 'GUI/Buttons/Button Primary',
  component: ButtonPrimaryComponent
};

export const ButtonPrimary = () => (
  <div>
    {map(ButtonPrimaryComponent.sizes, size => (
      <StoryItem
        key={size}
        title={`ButtonPrimaryComponent ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} primary button component`}
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonPrimaryComponent size={size}>
              Button text
            </ButtonPrimaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading">
            <ButtonPrimaryComponent size={size} loading>
              Button text
            </ButtonPrimaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading Right">
            <ButtonPrimaryComponent size={size} loading loaderRight>
              Button text
            </ButtonPrimaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled">
            <ButtonPrimaryComponent size={size} disabled>
              Button text
            </ButtonPrimaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled & loading">
            <ButtonPrimaryComponent size={size} disabled loading>
              Button text
            </ButtonPrimaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Group">
            <ButtonPrimaryComponent size={size} connectedRight>
              Option 1
            </ButtonPrimaryComponent>
            <ButtonPrimaryComponent size={size} connectedRight connectedLeft>
              Option 2
            </ButtonPrimaryComponent>
            <ButtonPrimaryComponent size={size} connectedLeft>
              Option 3
            </ButtonPrimaryComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled Group">
            <ButtonPrimaryComponent size={size} connectedRight disabled>
              Option 1
            </ButtonPrimaryComponent>
            <ButtonPrimaryComponent
              size={size}
              connectedRight
              connectedLeft
              disabled
            >
              Option 2
            </ButtonPrimaryComponent>
            <ButtonPrimaryComponent size={size} connectedLeft disabled>
              Option 3
            </ButtonPrimaryComponent>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    ))}
  </div>
);

ButtonPrimary.parameters = {
  controls: { hideNoControlsWarning: true }
};
