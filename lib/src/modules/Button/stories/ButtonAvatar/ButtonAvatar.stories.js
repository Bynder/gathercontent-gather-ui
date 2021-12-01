import React from 'react';
import faker from 'faker';
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonAvatar as ButtonAvatarComponent } from 'lib';
import { ButtonStoryItem } from '../ButtonStoryItem';

export default {
  title: 'src/Buttons/Button Avatar',
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
