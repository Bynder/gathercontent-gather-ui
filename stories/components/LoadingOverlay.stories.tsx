import React from "react";
import { LoadingOverlay as LoadingOverlayComponent } from "../../lib";
import StoryItem from "../styleguide/StoryItem";

export default {
  title: "Legacy/Loading Overlay",
  component: LoadingOverlayComponent,
  args: {
    percentageLoaded: 50,
    fixed: true,
  },
};

export const LoadingOverlay = (args: any) => (
  <StoryItem title="Loading Overlay Component" description="">
    <LoadingOverlayComponent {...args} />
  </StoryItem>
);
