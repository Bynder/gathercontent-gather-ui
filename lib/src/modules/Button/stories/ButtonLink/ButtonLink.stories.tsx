/* eslint-disable no-console */
import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonLink as ButtonLinkComponent } from '../../ButtonLink/ButtonLink';

export default {
  title: 'GUI/Buttons/Button Link',
  component: ButtonLinkComponent
};

export function ButtonLink() {
  return <StoryItem
    title="ButtonLinkComponent"
    description="The link button component"
  >
    <ButtonLinkComponent
      // @ts-expect-error TS(2322): Type '{ children: string; onClick: () => void; }' ... Remove this comment to see the full error message
      onClick={() => console.log('Yo. Why did you click me?')}
    >
      Looks like a link, acts like a button!
    </ButtonLinkComponent>
  </StoryItem>
}

ButtonLink.parameters = {
  controls: { hideNoControlsWarning: true }
};
