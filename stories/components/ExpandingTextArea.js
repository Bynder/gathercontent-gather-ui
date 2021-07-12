import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import { ExpandingTextArea } from '../../lib';

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
            value={`hey heres some stuff

            and here hello!

            wowza!`}
          />
        </StoryItem>
        <StoryItem
          title="Expanding TextArea with error"
          description="an ExpandingTextArea can have an error state and display a error message"
        >
          <ExpandingTextArea
            placeholder='Add some text...'
            hasError
            errorMessage="Something is oops"
          />
        </StoryItem>
      </div>
    );
  });
