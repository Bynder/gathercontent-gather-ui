import React from "react";
import { BlankSlate as BlankSlateComponent, Button } from "lib";
import StoryItem from "../styleguide/StoryItem";

export default {
  title: "Legacy/Blank Slate",
  component: BlankSlateComponent,
};

export const BlankSlate = () => (
  <div>
    <StoryItem
      title="BlankSlateComponent Component"
      description="BlankSlateComponent with the default style"
    >
      <BlankSlateComponent>
        <h2 className="blank-slate__heading">This is a blank slate</h2>
        <p>Use me to show that something is empty.</p>
        <Button
          types={["secondary"]}
          clickHandler={() => console.log("do a thing")}
        >
          Do something
        </Button>
      </BlankSlateComponent>
    </StoryItem>
    <StoryItem
      title="BlankSlateComponent Component"
      description="BlankSlateComponent with the arrow style"
    >
      <BlankSlateComponent slateStyle="arrow">
        <h2 className="blank-slate__heading">Hey do something on the left</h2>
        <p>Then put it over here.</p>
      </BlankSlateComponent>
    </StoryItem>
    <StoryItem
      title="BlankSlateComponent Component"
      description="BlankSlateComponent with an emoji"
    >
      <BlankSlateComponent emoji="🔎" emojiLabel="Magnifying glass">
        <h2 className="blank-slate__heading">Look an emoji!</h2>
        <p>How wonderful.</p>
      </BlankSlateComponent>
    </StoryItem>
  </div>
);

BlankSlate.parameters = {
  controls: { hideNoControlsWarning: true },
};
