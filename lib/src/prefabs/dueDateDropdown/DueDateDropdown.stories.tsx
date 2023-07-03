import React from "react";
import { DueDateDropdown as DueDateDropdownComponent } from "lib";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";
import moment from "moment";

export default {
  title: "GUI/Dropdowns/Due Date Dropdown",
  argTypes: {
    selectedDay: {
      name: "Selected day",
      control: { type: "date" },
    },
  },
};

export function DueDateDropdown(args: any) {
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
          workflowDueDate={{ dynamic: { amount: 3, interval: "day" } }}
        />
      </StoryItem>
    </>
  );
}
