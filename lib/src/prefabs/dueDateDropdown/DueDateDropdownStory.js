import React from 'react';
import { storiesOf } from '@storybook/react';
import { DueDateDropdown } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import { date } from '@storybook/addon-knobs';
import moment from 'moment';

storiesOf('Components', module).add('DueDateDropdown', () => {
  const selectedDay = date('Selected day');
  return (
    <StoryItem
      title="DueDateDropdown"
      description="A prefab for a due date dropdown"
    >
      <DueDateDropdown
        id="due-date-dropdown-prefab"
        selectedDay={moment(selectedDay).toDate()}
      />
    </StoryItem>
  );
});
