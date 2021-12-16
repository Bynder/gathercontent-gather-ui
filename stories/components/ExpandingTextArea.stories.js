import React from 'react';
import StoryItem from '../styleguide/StoryItem';
import { ExpandingTextArea as ExpandingTextAreaComponent } from '../../lib';

export default {
  title: 'Legacy/Form/Inputs/Expanding TextArea',
  component: ExpandingTextAreaComponent
};

export const ExpandingTextArea = () => {
  return (
    <div>
      <StoryItem title="Expanding TextArea" description="an ExpandingTextArea">
        <ExpandingTextAreaComponent
          placeholder="Add some text..."
          value={`hey heres some stuff

            and here hello!

            wowza!`}
        />
      </StoryItem>
      <StoryItem
        title="Expanding TextArea with error"
        description="an ExpandingTextArea can have an error state and display a error message"
      >
        <ExpandingTextAreaComponent
          placeholder="Add some text..."
          hasError
          errorMessage="Something is oops"
        />
      </StoryItem>
    </div>
  );
};

ExpandingTextArea.story = {
  name: 'Expanding TextArea'
};

ExpandingTextArea.parameters = {
  controls: { hideNoControlsWarning: true }
};
