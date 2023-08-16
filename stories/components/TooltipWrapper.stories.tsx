import React from "react";
import StoryItem from "../styleguide/StoryItem";
import TooltipWrapper from "../../lib/TooltipWrapper/index";

export default {
  title: "Legacy/Tooltip",
  component: TooltipWrapper,
  args: {
    showManual: false,
  },
};

export const Tooltip = (args: any) => {
  return (
    <div>
      <StoryItem
        title="Tooltip Wrapper"
        description="TooltipWrapper is a custom wrapper for tippy."
      >
        <TooltipWrapper id="id-1" tooltipText="Sample tooltip text" {...args}>
          <span>Hover over me for a tooltip!</span>
        </TooltipWrapper>
      </StoryItem>
    </div>
  );
};
