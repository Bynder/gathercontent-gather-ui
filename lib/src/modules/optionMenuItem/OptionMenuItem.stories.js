import React from 'react';
import { OptionMenuItem as OptionMenuItemComponent } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'src/Option Menu Item',
  args: {
    danger: false,
    active: false,
    optionText: 'An option menu',
    metaText: 'Flub'
  }
};

export const OptionMenuItem = args => {
  return (
    <>
      <StoryItem title="OptionMenuItemComponent">
        <OptionMenuItemComponent
          danger={args.danger}
          active={args.active}
          meta={args.metaText}
        >
          {args.optionText}
        </OptionMenuItemComponent>
      </StoryItem>
    </>
  );
};
