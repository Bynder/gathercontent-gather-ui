import React from 'react';
import { storiesOf } from '@storybook/react';
import EditableChoiceInput from '..';
import StoryItem from '../../../stories/styleguide/StoryItem';

const EditableChoiceInputStory = storiesOf('Components', module).add(
  'EditableChoiceInput',
  () => (
    <div>
      <StoryItem
        title="EditableChoiceInput"
        description="A text input next to a choice input"
      >
        <EditableChoiceInput
          type="radio"
          label="Prepopulated label"
          placeholder="Add label text"
          aside={<div>hello!</div>}
        />
      </StoryItem>
      <StoryItem
        title="EditableChoiceInput"
        description="A text input next to a choice input"
      >
        <EditableChoiceInput type="checkbox" placeholder="Add label text" />
      </StoryItem>
    </div>
  )
);

export default EditableChoiceInputStory;
