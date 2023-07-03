import React from "react";
import { DueDateLabel as DueDateLabelComponent } from "lib";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";

export default {
  title: "Legacy/Due dates/Due Date Label",
  component: DueDateLabelComponent,
};

export const DueDateLabel = () => (
  <div>
    <StoryItem title="Due date label (no date)">
      <DueDateLabelComponent />
    </StoryItem>
    <StoryItem title="Due date label (with date)">
      <DueDateLabelComponent>3 days ago</DueDateLabelComponent>
    </StoryItem>
    <StoryItem title="Due date label (overdue)">
      <DueDateLabelComponent overdue>2 days ago</DueDateLabelComponent>
    </StoryItem>
  </div>
);

DueDateLabel.parameters = {
  controls: { hideNoControlsWarning: true },
};
