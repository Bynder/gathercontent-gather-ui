import React from 'react';
import { map } from 'lodash';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonSecondaryDanger as ButtonSecondaryDangerComponent } from '../../ButtonSecondary/ButtonSecondaryDanger';
import { ButtonStoryItem } from '../ButtonStoryItem';

export default {
  title: 'GUI/Buttons/Button Secondary Danger',
  component: ButtonSecondaryDangerComponent
};

const { lg, ...storySizes } = ButtonSecondaryDangerComponent.sizes;

export function ButtonSecondaryDanger() {
  return <div>
    {map(storySizes, size => (
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
}

ButtonSecondaryDanger.parameters = {
  controls: { hideNoControlsWarning: true }
};
