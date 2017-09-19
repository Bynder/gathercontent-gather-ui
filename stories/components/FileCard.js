import React from 'react';
import { storiesOf, action } from '@storybook/react';
import FileCard from '../../lib/FileCard';
import StoryItem from '../styleguide/StoryItem';
import binSVG from './../../assets/icons/image-trash.svg';
import commentSVG from './../../assets/icons/image-comment.svg';
import fullScreenSVG from './../../assets/icons/image-fullscreen.svg';
import downloadSVG from './../../assets/icons/image-download.svg';

const trashButton = <button onClick={action('test')}>{binSVG()}</button>;
const commentButton = <button onClick={action('test')}>{commentSVG()}</button>;
const fullScreenButton = <button onClick={action('test')}>{fullScreenSVG()}</button>;
const downloadButton = <button onClick={action('test')}>{downloadSVG()}</button>;
const actions = [trashButton, commentButton, fullScreenButton, downloadButton];

storiesOf('Components', module)
  .add('FileCard', () => (
    <div>
      <StoryItem
        title="File Card"
        description="A single image thumbnail"
      >
        <FileCard
          filename="cute_sheep_in_iceland.jpg"
          label="Sheep in Iceland"
          image="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
        >
          {actions}
        </FileCard>
      </StoryItem>

      <StoryItem
        title="File Card with comments"
        description="A single image thumbnail which has comments.">
        <FileCard
          filename="sheep_in_iceland.jpg"
          label="Sheep in Iceland"
          image="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
          isHighlighted
        >
          {actions}
        </FileCard>
      </StoryItem>

      <StoryItem
        title="File Card without preview"
        description="A single image thumbnail which has no preview"
      >
        <FileCard
          filename="field_notes.txt"
          label="Field notes"
        >
          {actions}
        </FileCard>
      </StoryItem>

      <StoryItem
        title="File Card without permission to delete"
        description="A single file without the action to be deleted (no permissions)">
        <FileCard
          filename="glasses_prescription.doc"
          label="Notes"
          isHighlighted
        >
          {actions}
        </FileCard>
      </StoryItem>

      <StoryItem
        title="Multiple File Cards"
        description="Multiple file cards side by side">
        <FileCard
          filename="sheep_in_iceland.jpg"
          label="Sheep in Iceland"
          image="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
          isHighlighted
        >
          {actions}
        </FileCard>
        <FileCard
          type="image"
          filename="sunset_in_berlin_large_filename.jpg"
          label="Large sunset in Berlin, Germany"
          image="http://www.sdpsnet.org/sdps/images/conference/2012/hotel/mod_galleries_53.jpeg"
          isHighlighted
        >
          {actions}
        </FileCard>
      </StoryItem>
    </div>
  ));
