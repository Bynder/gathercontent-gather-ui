import React from 'react';
import { map } from 'lodash';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonTertiaryDanger as ButtonTertiaryDangerComponent } from '../../ButtonTertiary/ButtonTertiaryDanger';
import { ButtonStoryItem } from '../ButtonStoryItem';

export default {
  title: 'GUI/Buttons/Button Tertiary Danger',
  component: ButtonTertiaryDangerComponent
};

const { lg, ...storySizes } = ButtonTertiaryDangerComponent.sizes;

export function ButtonTertiaryDanger() {
  return <div>
    {map(storySizes, size => (
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
}

ButtonTertiaryDanger.parameters = {
  controls: { hideNoControlsWarning: true }
};
