import React from "react";
import { Shortcut as ShortcutComponent, ShortcutIcon } from "lib";
import StoryItem from "../styleguide/StoryItem";

export default {
  title: "Legacy/Shortcut",
  component: ShortcutComponent,
};

export function Shortcut() {
  return (
    <div>
      <StoryItem
        title="ShortcutComponent"
        description="A mix of Mac and Windows"
      >
        <ShortcutComponent name="Bold" styleClass="shortcut__bold" mac>
          <ShortcutIcon>⌘</ShortcutIcon>
          <ShortcutIcon>b</ShortcutIcon>
        </ShortcutComponent>
        <ShortcutComponent name="Italicize" styleClass="shortcut__italic">
          <ShortcutIcon>Ctrl</ShortcutIcon>
          <ShortcutIcon>i</ShortcutIcon>
        </ShortcutComponent>
        <ShortcutComponent
          name="Underline"
          styleClass="shortcut__underline"
          mac
        >
          <ShortcutIcon>⌘</ShortcutIcon>
          <ShortcutIcon>u</ShortcutIcon>
        </ShortcutComponent>
        <ShortcutComponent name="Apply Heading style [1-6]">
          <ShortcutIcon>Ctrl</ShortcutIcon>
          <ShortcutIcon>Alt</ShortcutIcon>
          <ShortcutIcon>1-6</ShortcutIcon>
        </ShortcutComponent>
        <ShortcutComponent name="A shortcut" mac>
          <ShortcutIcon>⌘</ShortcutIcon>
          <ShortcutIcon>Option</ShortcutIcon>
          <ShortcutIcon>G</ShortcutIcon>
        </ShortcutComponent>
        <ShortcutComponent name="A single button!" mac>
          <ShortcutIcon>⇥</ShortcutIcon>
        </ShortcutComponent>
      </StoryItem>
    </div>
  );
}
Shortcut.parameters = {
  controls: { hideNoControlsWarning: true },
};
