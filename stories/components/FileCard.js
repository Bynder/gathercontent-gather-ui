import React from 'react';
import { storiesOf, action } from '@storybook/react';
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
          title="File Card with comments"
          description="A single image thumbnail which has comments.">
          <FileCard
            hasComments
            type="image"
            filename="sheep_in_iceland.jpg"
            label="Sheep in Iceland"
            image="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
          />
        </StoryItem>

        <StoryItem
          title="File Card without preview"
          description="A single image thumbnail which has no preview">
          <FileCard
            hasComments
            type="text"
            filename="field_notes.txt"
            label="Field notes"
          />
        </StoryItem>

        <StoryItem
          title="Multiple File Cards"
          description="Multiple file cards side by side">
        <FileCard
          type="image"
          filename="sheep_in_iceland.jpg"
          label="Sheep in Iceland"
          image="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
        />
        <FileCard
          type="image"
          filename="sunset_in_berlin_large_filename.jpg"
          label="Large sunset in Berlin, Germany"
          image="http://www.sdpsnet.org/sdps/images/conference/2012/hotel/mod_galleries_53.jpeg"
        />
      </StoryItem>
      </div>
    );
  });
