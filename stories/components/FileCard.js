import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { FileCard, Icon } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

const trashButton = <button onClick={action('test')}><Icon name="trash" /></button>;
const commentButton = <button onClick={action('test')}><Icon name="comment" /></button>;
const fullScreenButton = <button onClick={action('test')}><Icon name="fullScreen" /></button>;
const downloadButton = <button onClick={action('test')}>{<Icon name="download" />}</button>;
const actions = [trashButton, commentButton, fullScreenButton, downloadButton];

storiesOf('Components', module)
  .add('FileCard', () => (
    <div>
      <StoryItem
        title="File Card"
        description="A file card showing a preview of the file."
      >
        <FileCard
          filename="cute_sheep_in_iceland.jpg"
          label="Sheep in Iceland"
          previewSrc="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
        >
          {actions}
        </FileCard>
      </StoryItem>

      <StoryItem
        title="File Card (highlighted)"
        description="A file card can have a highlighted state."
      >
        <FileCard
          filename="sheep_in_iceland.jpg"
          label="Sheep in Iceland"
          previewSrc="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
          isHighlighted
        >
          {actions}
        </FileCard>
      </StoryItem>

      <StoryItem
        title="File Card (without preview)"
        description="A file card without a preview image"
      >
        <FileCard
          filename="field_notes.txt"
          label="Field notes"
        >
          {actions}
        </FileCard>
      </StoryItem>

      <StoryItem
        title="Multiple File Cards"
        description="Multiple file cards side by side"
      >
        <FileCard
          filename="sheep_in_iceland.jpg"
          label="Sheep in Iceland"
          previewSrc="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
          isHighlighted
        >
          {actions}
        </FileCard>
        <FileCard
          type="image"
          filename="sunset_in_berlin_large_filename.jpg"
          label="Large sunset in Berlin, Germany"
          previewSrc="http://www.sdpsnet.org/sdps/images/conference/2012/hotel/mod_galleries_53.jpeg"
          isHighlighted
        >
          {actions}
        </FileCard>
      </StoryItem>
    </div>
  ));
