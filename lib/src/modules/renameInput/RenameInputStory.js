import React from 'react';
import { storiesOf } from '@storybook/react';
import { RenameInput } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import { boolean, text as textKnob } from '@storybook/addon-knobs';

storiesOf('Components', module).add('RenameInput', () => {
  const large = boolean('Large size', true);
  const text = textKnob('Text', 'Edit me!');

  return (
    <>
      <StoryItem
        title="RenameInput"
        description="Text that toggles into a text input"
      >
        <RenameInput
          text={text}
          onRename={() => {}}
          size={large ? RenameInput.sizes.lrg : RenameInput.sizes.md}
        />
      </StoryItem>
      <StoryItem
        title="multiline RenameInput"
        description="Text that toggles into a textarea"
      >
        <RenameInput
          text={text}
          onRename={() => {}}
          multiline
          size={large ? RenameInput.sizes.lrg : RenameInput.sizes.md}
        />
      </StoryItem>
    </>
  );
});
