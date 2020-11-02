import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { ButtonAvatar } from 'lib';
import StoryItem from '../../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from '../ButtonStoryItem';

storiesOf('Components/Buttons', module).add('ButtonAvatar', () => {
  const props = {
    url: faker.image.avatar(),
    initials: 'PP'
  };
  return (
    <div>
      <StoryItem title="ButtonAvatar" description="The button avatar component">
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonAvatar {...props}>Button text</ButtonAvatar>
          </ButtonStoryItem>

          <ButtonStoryItem title="Disabled">
            <ButtonAvatar {...props} disabled>
              Button text
            </ButtonAvatar>
          </ButtonStoryItem>

          <ButtonStoryItem title="Active">
            <ButtonAvatar {...props} active>
              Button text
            </ButtonAvatar>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    </div>
  );
});
