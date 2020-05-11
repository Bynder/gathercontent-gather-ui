import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonIconDanger } from '../../ButtonIcon/ButtonIconDanger';
import StoryItem from '../../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from '../ButtonStoryItem';

storiesOf('Components', module).add('ButtonIconDanger', () => (
  <StoryItem
    title="ButtonIconDanger"
    description="The icon danger button component"
  >
    <div className="flex flex-wrap justify-around">
      <ButtonStoryItem title="MD">
        <ButtonIconDanger
          name="blockquote24"
          size={ButtonIconDanger.sizes.md}
        />
      </ButtonStoryItem>

      <ButtonStoryItem title="SM">
        <ButtonIconDanger name="caption16" size={ButtonIconDanger.sizes.sm} />
      </ButtonStoryItem>

      <ButtonStoryItem title="Disabled">
        <ButtonIconDanger name="caption16" disabled />
      </ButtonStoryItem>

      <ButtonStoryItem title="Active">
        <ButtonIconDanger name="caption16" active />
      </ButtonStoryItem>
    </div>
  </StoryItem>
));
