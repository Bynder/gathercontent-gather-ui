import React from "react";
import { OptionMenuItem as OptionMenuItemComponent } from "lib";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";

export default {
  title: "GUI/Option Menu Item",
  args: {
    danger: false,
    active: false,
    optionText: "An option menu",
    metaText: "Flub",
  },
};

export const OptionMenuItem = (args: any) => {
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
