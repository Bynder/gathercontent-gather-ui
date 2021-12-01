import React from 'react';
import { RenameInput as RenameInputComponent } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'src/Rename Input',
  components: RenameInputComponent,
  args: {
    large: true,
    text: 'Edit me'
  }
};

export const RenameInput = args => {
  return (
    <>
      <StoryItem
        title="RenameInputComponent"
        description="Text that toggles into a text input"
      >
        <RenameInputComponent
          text={args.text}
          onRename={() => {}}
          size={
            args.large
              ? RenameInputComponent.sizes.lrg
              : RenameInputComponent.sizes.md
          }
        />
      </StoryItem>
      <StoryItem
        title="multiline RenameInputComponent"
        description="Text that toggles into a textarea"
      >
        <RenameInputComponent
          text={args.text}
          onRename={() => {}}
          multiline
          size={
            args.large
              ? RenameInputComponent.sizes.lrg
              : RenameInputComponent.sizes.md
          }
        />
      </StoryItem>
    </>
  );
};
