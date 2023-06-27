import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'fake... Remove this comment to see the full error message
import faker from 'faker';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { ButtonAvatar as ButtonAvatarComponent } from 'lib';
import { ButtonStoryItem } from '../ButtonStoryItem';

export default {
  title: 'GUI/Buttons/Button Avatar',
  component: ButtonAvatarComponent
};

export const ButtonAvatar = () => {
  const props = {
    url: faker.image.avatar(),
    initials: 'PP'
  };
  return (
    <div>
      <StoryItem
        title="ButtonAvatarComponent"
        description="The button avatar component"
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonAvatarComponent {...props}>
              Button text
            </ButtonAvatarComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled">
            <ButtonAvatarComponent {...props} disabled>
              Button text
            </ButtonAvatarComponent>
          </ButtonStoryItem>

          <ButtonStoryItem title="Active">
            <ButtonAvatarComponent {...props} active>
              Button text
            </ButtonAvatarComponent>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    </div>
  );
};

ButtonAvatar.parameters = {
  controls: { hideNoControlsWarning: true }
};
