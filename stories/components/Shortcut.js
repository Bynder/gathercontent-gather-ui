import React from 'react';
import { storiesOf } from '@storybook/react';
import { Shortcut, ShortcutIcon, ShortcutCommandKey, ShortcutOptionKey } from '../../lib/index';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Shortcut', () => (
  <div>
    <StoryItem
      title="Shortcut"
      description="A group of components describing keyboard shortcuts"
    >
      <Shortcut name="Bold" styleClass="shortcut__bold">
        <ShortcutCommandKey />
        <ShortcutIcon>b</ShortcutIcon>
      </Shortcut>
      <Shortcut name="Italicize" styleClass="shortcut__italic">
        <ShortcutCommandKey />
        <ShortcutIcon>i</ShortcutIcon>
      </Shortcut>
      <Shortcut name="Underline" styleClass="shortcut__underline">
        <ShortcutCommandKey />
        <ShortcutIcon>u</ShortcutIcon>
      </Shortcut>
      <Shortcut name="Apply Heading style [1-6]">
        <ShortcutCommandKey />
        <ShortcutOptionKey />
        <ShortcutIcon>1-6</ShortcutIcon>
      </Shortcut>
    </StoryItem>
  </div>
));