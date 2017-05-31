import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FileCard from '../../lib/FileCard';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('FileCard', () => {
    return (
      <div>
        <StoryItem
          title="File Card"
          description="A single image thumbnail">
          <FileCard
            type="image"
            filename="sheep_in_iceland.jpg"
            label="Sheep in Iceland"
            image="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
          />
        </StoryItem>

        <StoryItem
        title="File Card"
        description="A single image thumbnail which has comments.">
        <FileCard
          hasComments
          type="image"
          filename="sheep_in_iceland.jpg"
          label="Sheep in Iceland"
          image="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
        />
      </StoryItem>
      </div>
    );
  });
