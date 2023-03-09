import React from 'react';
import { DueDateDropdown as DueDateDropdownComponent } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import moment from 'moment';

export default {
  title: 'GUI/Dropdowns/Due Date Dropdown',
  argTypes: {
    selectedDay: {
      name: 'Selected day',
      control: { type: 'date' }
    }
  }
};

export const DueDateDropdown = args => {
  return (
    <>
      <StoryItem
        title="DueDateDropdownComponent"
        description="A prefab for a due date dropdown"
      >
        <DueDateDropdownComponent
          id="due-date-dropdown-prefab"
          selectedDay={moment(args.selectedDay).toDate()}
        />
      </StoryItem>

      <StoryItem
        title="DueDateDropdownComponent"
        description="A prefab for a due date dropdown with additional info"
      >
        <DueDateDropdownComponent
          id="due-date-dropdown-with-info-prefab"
          selectedDay={moment(args.selectedDay).toDate()}
          workflowDueDate={{amount: 1, interval: 'day'}}
        />
      </StoryItem>
    </>
  );
};
