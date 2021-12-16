import React from 'react';
import { map } from 'lodash';
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonPrimaryDanger as ButtonPrimaryDangerComponent } from '../../ButtonPrimary/ButtonPrimaryDanger';
import { ButtonStoryItem } from '../ButtonStoryItem';

export default {
  title: 'GUI/Buttons/Button Primary Danger'
};

export const ButtonPrimaryDanger = () => (
  <div>
    {map(ButtonPrimaryDangerComponent.sizes, size => (
      <StoryItem
        key={size}
        title={`ButtonPrimaryDangerComponent ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} primary button component`}
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonPrimaryDangerComponent size={size}>
              Button text
            </ButtonPrimaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading">
            <ButtonPrimaryDangerComponent size={size} loading>
              Button text
            </ButtonPrimaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Loading Right">
            <ButtonPrimaryDangerComponent size={size} loading loaderRight>
              Button text
            </ButtonPrimaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled">
            <ButtonPrimaryDangerComponent size={size} disabled>
              Button text
            </ButtonPrimaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled & loading">
            <ButtonPrimaryDangerComponent size={size} disabled loading>
              Button text
            </ButtonPrimaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Group">
            <ButtonPrimaryDangerComponent size={size} connectedRight>
              Option 1
            </ButtonPrimaryDangerComponent>
            <ButtonPrimaryDangerComponent
              size={size}
              connectedRight
              connectedLeft
            >
              Option 2
            </ButtonPrimaryDangerComponent>
            <ButtonPrimaryDangerComponent size={size} connectedLeft>
              Option 3
            </ButtonPrimaryDangerComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled Group">
            <ButtonPrimaryDangerComponent size={size} connectedRight disabled>
              Option 1
            </ButtonPrimaryDangerComponent>
            <ButtonPrimaryDangerComponent
              size={size}
              connectedRight
              connectedLeft
              disabled
            >
              Option 2
            </ButtonPrimaryDangerComponent>
            <ButtonPrimaryDangerComponent size={size} connectedLeft disabled>
              Option 3
            </ButtonPrimaryDangerComponent>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    ))}
  </div>
);

ButtonPrimaryDanger.parameters = {
  controls: { hideNoControlsWarning: true }
};
