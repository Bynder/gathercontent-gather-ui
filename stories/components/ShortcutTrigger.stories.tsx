import React from "react";
import { ShortcutTrigger as ShortcutTriggerComponent } from "lib";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";

export default {
  title: "Legacy/Shortcut Trigger",
  component: ShortcutTriggerComponent,
  argTypes: {
    shortcutTriggered: { action: "You did the shortcut!" },
  },
};

export const ShortcutTrigger = (args: any) => (
  <div>
    <StoryItem
      title="ShortcutTriggerComponent"
      description="A component that triggers a function when a combination of keys are pressed. Try it with ctrl+alt+enter. Nothing will visually appear for this component."
    >
      <ShortcutTriggerComponent
        shortcutKey="Enter"
        onShortcutTrigger={args.shortcutTriggered}
        withAltKey
        withCtrlKey
      />
    </StoryItem>
  </div>
);

ShortcutTrigger.parameters = {
  controls: { hideNoControlsWarning: true },
};
