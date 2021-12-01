import React from 'react';
import { Shortcut, ShortcutIcon } from '../../lib/index';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _Shortcut = () => (
  <div>
    <StoryItem title="Shortcut" description="A mix of Mac and Windows">
      <Shortcut name="Bold" styleClass="shortcut__bold" mac>
        <ShortcutIcon>⌘</ShortcutIcon>
        <ShortcutIcon>b</ShortcutIcon>
      </Shortcut>
      <Shortcut name="Italicize" styleClass="shortcut__italic">
        <ShortcutIcon>Ctrl</ShortcutIcon>
        <ShortcutIcon>i</ShortcutIcon>
      </Shortcut>
      <Shortcut name="Underline" styleClass="shortcut__underline" mac>
        <ShortcutIcon>⌘</ShortcutIcon>
        <ShortcutIcon>u</ShortcutIcon>
      </Shortcut>
      <Shortcut name="Apply Heading style [1-6]">
        <ShortcutIcon>Ctrl</ShortcutIcon>
        <ShortcutIcon>Alt</ShortcutIcon>
        <ShortcutIcon>1-6</ShortcutIcon>
      </Shortcut>
      <Shortcut name="A shortcut" mac>
        <ShortcutIcon>⌘</ShortcutIcon>
        <ShortcutIcon>Option</ShortcutIcon>
        <ShortcutIcon>G</ShortcutIcon>
      </Shortcut>
      <Shortcut name="A single button!" mac>
        <ShortcutIcon>⇥</ShortcutIcon>
      </Shortcut>
    </StoryItem>
  </div>
);
