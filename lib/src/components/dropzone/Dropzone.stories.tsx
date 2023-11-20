import React from "react";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";
import { Dropzone as DropzoneComponent } from "./Dropzone";

export default {
  title: "GUI/Dropzone",
  component: DropzoneComponent,
  args: {
    hasSomethingDropped: false,
  },
  argTypes: {
    onDrop: { action: "something was dropped" },
  },
};

export function Dropzone(args: any) {
  return (
    <StoryItem>
      <div className="h-64">
        <DropzoneComponent {...args}>
          {args.hasSomethingDropped && "Hopefully a grid here"}
        </DropzoneComponent>
      </div>
    </StoryItem>
  );
}
