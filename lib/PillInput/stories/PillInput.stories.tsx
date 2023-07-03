import React from 'react';
import { PillInput as PillInputComponent } from '../PillInput/PillInput';
import StoryItem from '../../../stories/styleguide/StoryItem';

export default {
  title: 'Legacy/Form/Inputs/Pill Input',
  component: PillInputComponent
};

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function PillInput() {
  return <div>
    <StoryItem
      title="PillInputComponent"
      description="Text input that creates pills"
    >
      <PillInputComponent
        placeholder="Enter an email"
        checker={{
          warning: 'This is not a valid email address!',
          regex: emailRegex
        }}
        // eslint-disable-next-line no-console
        onPillsChange={pills => console.log(pills)}
        initialPills={[
          {
            id: 'b414a7bc-ddb5-4a2d-92a3-332a1f89ebcc',
            name: 'valid@example.com'
          },
          {
            id: 'cfb0b362-1c34-4b9b-b489-93a68df6045d',
            name: 'invalid@example'
          }
        ]}
      />
    </StoryItem>
  </div>
}

PillInput.parameters = {
  controls: { hideNoControlsWarning: true }
};
