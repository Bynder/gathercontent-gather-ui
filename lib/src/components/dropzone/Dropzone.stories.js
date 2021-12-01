import React from 'react';
import StoryItem from 'stories/styleguide/StoryItem';
import { Dropzone as DropzoneComponent } from './Dropzone';

export default {
  title: 'GUI/Dropzone',
  component: DropzoneComponent,
  args: {
    hasSomethingDropped: false
  },
  argTypes: {
    onDrop: { action: 'something was dropped' }
  }
};

export const Dropzone = args => (
  <StoryItem>
    <div className="h-64">
      <DropzoneComponent {...args}>
        {args.hasSomethingDropped && 'Hopefully a grid here'}
      </DropzoneComponent>
    </div>
  </StoryItem>
);
