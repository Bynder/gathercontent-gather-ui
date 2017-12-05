import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { ShortcutTrigger } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Shortcut Trigger', () => (
  <div>
    <StoryItem
      title="ShortcutTrigger"
      description="A component that triggers a function when a combination of keys are pressed. Try it with ctrl+enter. Nothing will visually appear for this component."
    >
      <ShortcutTrigger
        shortcutKey="Enter"
        onShortcutTrigger={action('Test')}
        withCtrlKey
      />
    </StoryItem>
  </div>
));
