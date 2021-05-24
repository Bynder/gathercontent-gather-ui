import React from 'react';
import { storiesOf } from '@storybook/react';
import { Calendar } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

storiesOf('Components', module).add('Calendar', () => {
  return (
    <StoryItem
      title="Calendar"
      description="Using react day picker to give us a lovely calendar"
    >
      <div style={{ width: '320px' }}>
        <Calendar />
      </div>
    </StoryItem>
  );
});
