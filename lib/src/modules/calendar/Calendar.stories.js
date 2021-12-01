import React from 'react';
import { Calendar as CalendarComponent } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'src/Calendar'
};

export const Calendar = () => {
  return (
    <StoryItem
      title="CalendarComponent"
      description="Using react day picker to give us a lovely calendar"
    >
      <div style={{ width: '320px' }}>
        <CalendarComponent />
      </div>
    </StoryItem>
  );
};
