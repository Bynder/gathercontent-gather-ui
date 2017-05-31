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
          description="...">
          <FileCard />
        </StoryItem>
      </div>
    );
  });
