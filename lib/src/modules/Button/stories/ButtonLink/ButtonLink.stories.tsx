/* eslint-disable no-console */
import React from 'react';
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonLink as ButtonLinkComponent } from '../../ButtonLink/ButtonLink';

export default {
  title: 'GUI/Buttons/Button Link',
  component: ButtonLinkComponent
};

export const ButtonLink = () => (
  <StoryItem
    title="ButtonLinkComponent"
    description="The link button component"
  >
    <ButtonLinkComponent
      onClick={() => console.log('Yo. Why did you click me?')}
    >
      Looks like a link, acts like a button!
    </ButtonLinkComponent>
  </StoryItem>
);

ButtonLink.parameters = {
  controls: { hideNoControlsWarning: true }
};
