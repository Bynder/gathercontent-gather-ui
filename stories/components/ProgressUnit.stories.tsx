import React from "react";
import ProgressComponent from "../../lib/Progress";
import StoryItem from "../styleguide/StoryItem";

export default {
  title: "Legacy/Progress",
  component: ProgressComponent,
};

export const Progress = () => (
  <StoryItem
    title="ProgressComponent Units"
    description="ProgressComponent bars with percentages to display progress for workflow statuses."
  >
    <ProgressComponent.Bar>
      <ProgressComponent.Unit
        className="gui-progress-unit--test"
        percent={70}
        color="rgba(100,250,125,1)"
        name="Unit 1"
        filterLink="#test"
      />
      <ProgressComponent.Unit
        className="gui-progress-unit--test"
        percent={30}
        name="Unit 2"
        filterLink="#test"
      />
    </ProgressComponent.Bar>
  </StoryItem>
);

Progress.parameters = {
  controls: { hideNoControlsWarning: true },
};
