import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonIcon } from '../../ButtonIcon/ButtonIcon';
import StoryItem from '../../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from '../ButtonStoryItem';

storiesOf('Components', module).add('ButtonIcon', () => (
  <StoryItem title="ButtonIcon" description="The icon button component">
    <div className="flex flex-wrap justify-around">
      <ButtonStoryItem title="MD">
        <ButtonIcon name="blockquote24" size={ButtonIcon.sizes.md} />
      </ButtonStoryItem>

      <ButtonStoryItem title="SM">
        <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
      </ButtonStoryItem>

      <ButtonStoryItem title="Disabled">
        <ButtonIcon name="caption16" disabled />
      </ButtonStoryItem>

      <ButtonStoryItem title="Active">
        <ButtonIcon name="caption16" active />
      </ButtonStoryItem>
    </div>
  </StoryItem>
));
