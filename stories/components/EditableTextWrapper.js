import React from 'react';
import { action } from '@storybook/addon-actions';
import { EditableTextWrapper } from 'lib';
import StoryItem from '../styleguide/StoryItem';

const longText =
  'Original text thats quite long and may well go over a single line, so its much safer to set the multiline prop, that way we render an ExpandingTextArea component instead of a normal text input';

export default {
  title: 'Components',
};

export const _EditableTextWrapper = () => (
  <div>
    <StoryItem
      title="EditableTextWrapper"
      description="Wraps text in an editable wrapper"
    >
      <EditableTextWrapper
        buttonLabel="Editable text"
        value="Original text"
        onChange={(v) => action('renamed to: ')(v)}
      >
        <h1>Original text</h1>
      </EditableTextWrapper>
    </StoryItem>

    <StoryItem
      title="EditableTextWrapper pencilEditOnly"
      description="An EditableTextWrapper where the edit state can only be activated by the pencil button"
    >
      <EditableTextWrapper
        value="Original text"
        onChange={(v) => action('renamed to: ')(v)}
        pencilEditOnly
      >
        <h1>Original text</h1>
      </EditableTextWrapper>
    </StoryItem>

    <StoryItem
      title="EditableTextWrapper multiline"
      description="An EditableTextWrapper that displays an ExpandingTextArea when in the edit state"
    >
      <EditableTextWrapper
        value={longText}
        onChange={(v) => action('renamed to: ')(v)}
        multiline
      >
        <h1>{longText}</h1>
      </EditableTextWrapper>
    </StoryItem>
  </div>
);

_EditableTextWrapper.story = {
  name: 'EditableTextWrapper',
};
