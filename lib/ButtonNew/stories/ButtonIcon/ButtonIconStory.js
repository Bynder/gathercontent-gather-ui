import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  ButtonIconDanger,
  ButtonIcon,
  ButtonIconContained,
  ButtonIconContainedDanger,
  Counter,
  ButtonIconBubble,
  ButtonIconDark
} from 'lib';
import StoryItem from '../../../../stories/styleguide/StoryItem';
import { ButtonStoryItem } from '../ButtonStoryItem';

const states = [{}, { active: true }, { enabled: true }, { disabled: true }];

storiesOf('Components/Buttons', module).add('ButtonIcon', () => (
  <StoryItem title="ButtonIcon" description="The icon button component">
    <div className="flex flex-wrap justify-around">
      <ButtonStoryItem title="Base (MD)">
        {states.map(s => (
          <div className="h-16">
            <ButtonIcon name="fullScreen" size={ButtonIcon.sizes.md} {...s} />
          </div>
        ))}
      </ButtonStoryItem>

      <ButtonStoryItem title="Base (SM)">
        {states.map(s => (
          <div className="h-16">
            <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} {...s} />
          </div>
        ))}
      </ButtonStoryItem>

      <ButtonStoryItem title="Base (counter)">
        {states.map(s => (
          <div className="h-16">
            <ButtonIcon name="caption16" {...s}>
              <Counter>9</Counter>
            </ButtonIcon>
          </div>
        ))}
      </ButtonStoryItem>

      <ButtonStoryItem title="Danger">
        {states.map(s => (
          <div className="h-16">
            <ButtonIconDanger name="caption16" {...s} />
          </div>
        ))}
      </ButtonStoryItem>

      <ButtonStoryItem title="Contained">
        {states.map(s => (
          <div className="h-16">
            <ButtonIconContained name="caption16" {...s} />
          </div>
        ))}
      </ButtonStoryItem>

      <ButtonStoryItem title="Contained Danger">
        {states.map(s => (
          <div className="h-16">
            <ButtonIconContainedDanger name="caption16" {...s} />
          </div>
        ))}
      </ButtonStoryItem>

      <ButtonStoryItem title="Bubble">
        {states.map(s => (
          <div className="h-16">
            <ButtonIconBubble name="newComment" {...s} />
          </div>
        ))}
      </ButtonStoryItem>

      <ButtonStoryItem title="Dark" className="bg-neutral-20 text-white">
        {states.map(s => (
          <div className="h-16">
            <ButtonIconDark name="infoSquare" {...s} />
          </div>
        ))}
      </ButtonStoryItem>
    </div>
  </StoryItem>
));
