import React from 'react';
import { storiesOf } from '@storybook/react';
import { Shortcut, ShortcutIcon, ShortcutCommandKey, ShortcutOptionKey } from '../../lib/index';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Shortcut', () => (
  <div>
    <StoryItem
      title="Shortcut"
      description="A mix of Mac and Windows"
    >
      <Shortcut name="Bold" styleClass="shortcut__bold" mac>
        <ShortcutCommandKey />
        <ShortcutIcon>b</ShortcutIcon>
      </Shortcut>
      <Shortcut name="Italicize" styleClass="shortcut__italic">
        <ShortcutCommandKey />
        <ShortcutIcon>i</ShortcutIcon>
      </Shortcut>
      <Shortcut name="Underline" styleClass="shortcut__underline" mac>
        <ShortcutCommandKey />
        <ShortcutIcon>u</ShortcutIcon>
      </Shortcut>
      <Shortcut name="Apply Heading style [1-6]">
        <ShortcutCommandKey />
        <ShortcutOptionKey />
        <ShortcutIcon>1-6</ShortcutIcon>
      </Shortcut>
      <Shortcut name="A shortcut" mac>
        <ShortcutCommandKey />
        <ShortcutOptionKey />
        <ShortcutIcon>G</ShortcutIcon>
      </Shortcut>
    </StoryItem>
  </div>
));