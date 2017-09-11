import React from 'react';
import { storiesOf, action } from '@storybook/react';
import EditableTextWrapper from '../../lib/EditableTextWrapper';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('EditableTextWrapper', () => (
    <div>
      <StoryItem
        title="EditableTextWrapper"
        description="Wraps text in an editable wrapper"
      >
        <EditableTextWrapper value="Original text" onChange={v => action('renamed to: ')(v)}>
          <h1>Original text</h1>
        </EditableTextWrapper>
      </StoryItem>
    </div>
  ));
