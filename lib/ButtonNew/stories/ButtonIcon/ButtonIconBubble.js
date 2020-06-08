import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonIconBubble from '../../ButtonIcon/ButtonIconBubble';
import StoryItem from '../../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from '../ButtonStoryItem';

storiesOf('Components', module).add('ButtonIconBubble', () => (
  <StoryItem title="ButtonIconBubble" description="The icon button component">
    <div className="flex flex-wrap justify-around">
      <ButtonStoryItem title="Default">
        <ButtonIconBubble name="newComment" />
      </ButtonStoryItem>

      <ButtonStoryItem title="Disabled">
        <ButtonIconBubble name="newComment" disabled />
      </ButtonStoryItem>

      <ButtonStoryItem title="Active">
        <ButtonIconBubble name="newComment" active />
      </ButtonStoryItem>
    </div>
  </StoryItem>
));
