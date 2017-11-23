import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import ExpandingTextArea from '../../lib/ExpandingTextArea';

storiesOf('Components', module)
  .add('ExpandingTextArea', () => {
    return (
      <div>

        <StoryItem
          title="Expanding TextArea"
          description="an ExpandingTextArea"
        >
          <ExpandingTextArea
            placeholder='Add some text...'
          />
        </StoryItem>
      </div>
    );
  });
