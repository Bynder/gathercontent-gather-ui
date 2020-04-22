import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonIcon } from '../ButtonIcon';
import StoryItem from '../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from './ButtonStoryItem';

storiesOf('Components', module).add('ButtonIcon', () => (
  <StoryItem title="ButtonIcon" description="The icon button component">
    <div className="flex flex-wrap">
      <ButtonStoryItem title="Default">
        <ButtonIcon name="caption16">Button text</ButtonIcon>
      </ButtonStoryItem>

      <ButtonStoryItem title="Slim">
        <ButtonIcon name="caption16">Button text</ButtonIcon>
      </ButtonStoryItem>

      <ButtonStoryItem title="Bubble">
        <ButtonIcon name="blockquote24">Button text</ButtonIcon>
      </ButtonStoryItem>
    </div>
  </StoryItem>
));
