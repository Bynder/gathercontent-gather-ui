import React from "react";
import { Calendar as CalendarComponent } from "lib";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";

export default {
  title: "GUI/Calendar",
};

export function Calendar() {
  return (
    <StoryItem
      title="CalendarComponent"
      description="Using react day picker to give us a lovely calendar"
    >
      <div style={{ width: "320px" }}>
        <CalendarComponent />
      </div>
    </StoryItem>
  );
}

export function CalendarWithWeekends() {
  return (
    <StoryItem
      title="Calender With Weekends"
      description="Using react day picker to give us a lovely calendar"
    >
      <div style={{ width: "320px" }}>
        <CalendarComponent enableWeekendDays />
      </div>
    </StoryItem>
  );
}

export function CalendarWithLeftAlignedHeader() {
  return (
    <StoryItem
      title="Calender With Left-aligned Header"
      description="Using react day picker to give us a lovely calendar"
    >
      <div style={{ width: "320px" }}>
        <CalendarComponent leftAlignHeader />
      </div>
    </StoryItem>
  );
}

Calendar.parameters = {
  controls: { hideNoControlsWarning: true },
};
