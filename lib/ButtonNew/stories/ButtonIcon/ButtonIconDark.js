import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonIconDark } from '../../ButtonIcon/ButtonIconDark';
import StoryItem from '../../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from '../ButtonStoryItem';
import { Counter } from '../../../Counter';

storiesOf('Components', module).add('ButtonIconDark', () => (
  <StoryItem
    title="ButtonIconDark"
    description="The icon button component for dark backgrounds"
  >
    <div className="flex flex-wrap justify-around bg-neutral-20 pb-4 text-white">
      <ButtonStoryItem title="MD">
        <ButtonIconDark name="blockquote24" size={ButtonIconDark.sizes.md} />
      </ButtonStoryItem>

      <ButtonStoryItem title="SM">
        <ButtonIconDark name="caption16" size={ButtonIconDark.sizes.sm} />
      </ButtonStoryItem>

      <ButtonStoryItem title="Disabled">
        <ButtonIconDark name="caption16" disabled />
      </ButtonStoryItem>

      <ButtonStoryItem title="Active">
        <ButtonIconDark name="caption16" active />
      </ButtonStoryItem>

      <ButtonStoryItem title="Counter">
        <ButtonIconDark name="caption16">
          <Counter>9</Counter>
        </ButtonIconDark>
      </ButtonStoryItem>
    </div>
  </StoryItem>
));
