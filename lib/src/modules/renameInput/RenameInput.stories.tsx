import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { RenameInput as RenameInputComponent } from 'lib';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'GUI/Form/Inputs/Rename Input',
  components: RenameInputComponent,
  args: {
    large: true,
    text: 'Edit me'
  }
};

export const RenameInput = (args: any) => {
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
