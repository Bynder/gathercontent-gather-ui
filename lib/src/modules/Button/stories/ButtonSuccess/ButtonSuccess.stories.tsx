import React from 'react';
import { map } from 'lodash';
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonSuccess as ButtonSuccessComponent } from 'lib';
import { ButtonStoryItem } from '../ButtonStoryItem';

export default {
  title: 'GUI/Buttons/Button Success',
  component: ButtonSuccessComponent
};

const { lg, ...storySizes } = ButtonSuccessComponent.sizes;

export const ButtonSuccess = () => (
  <div>
    {map(storySizes, size => (
      <StoryItem
        key={size}
        title={`ButtonSuccessComponent ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} success button component`}
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonSuccessComponent size={size}>
              Button text
            </ButtonSuccessComponent>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    ))}
  </div>
);

ButtonSuccess.parameters = {
  controls: { hideNoControlsWarning: true }
};
