import React from "react";
import LogoGCComponent from "../../lib/LogoGC";
import StoryItem from "../styleguide/StoryItem";

export default {
  title: "Legacy/LogoGC",
  component: LogoGCComponent,
};

export const LogoGC = () => (
  <div>
    <StoryItem title="Default Logo" description="A wrapper around the logo">
      <div>
        <LogoGCComponent />
      </div>
    </StoryItem>

    <StoryItem title="Custom Logo" description="">
      <LogoGCComponent
        url="https://dummyimage.com/150x40/3d8beb/fff.png"
        alt="Alt Tag"
      />
    </StoryItem>
  </div>
);

LogoGC.parameters = {
  controls: { hideNoControlsWarning: true },
};
