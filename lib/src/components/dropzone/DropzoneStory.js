import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryItem from 'stories/styleguide/StoryItem';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Dropzone } from './Dropzone';

const stories = storiesOf('Components/Dropzone', module);
stories.addDecorator(withKnobs);

const dropzoneStory = stories.add('Dropzone', () => {
  return (
    <StoryItem>
      <div className="h-64">
        <Dropzone onDrop={action('something was dropped')}>
          {boolean('Has Anything Been Dropped') && 'Hopefully a grid here'}
        </Dropzone>
      </div>
    </StoryItem>
  );
});

export default dropzoneStory;
