import React from 'react';
import { map } from 'lodash';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonSecondary as ButtonSecondaryComponent } from '../../ButtonSecondary/ButtonSecondary';
import { ButtonStoryItem } from '../ButtonStoryItem';

export default {
  title: 'GUI/Buttons/Button Secondary',
  component: ButtonSecondaryComponent
};

const { lg, ...storySizes } = ButtonSecondaryComponent.sizes;

export function ButtonSecondary() {
  return <div>
    {map(storySizes, size => (
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
}

ButtonSecondary.parameters = {
  controls: { hideNoControlsWarning: true }
};
