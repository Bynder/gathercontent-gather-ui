import React from "react";
import { Resizeable as ResizableComponent } from "../../lib/Resizeable";

import StoryItem from "../styleguide/StoryItem";

export default {
  title: "GUI/Resizable",
  component: ResizableComponent,
};

export function Resizable() {
  return (
    <>
      <StoryItem
        title="Vertically split resizable element"
        description="The primary action button for creation activities"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ResizableComponent defaultWidth="50%" maxWidth="50%">
            <p>Hello</p>
          </ResizableComponent>
          <p
            style={{
              width: "100%",
            }}
          >
            How are you?
          </p>
        </div>
      </StoryItem>

      <StoryItem
        title="Single resizable element"
        description="The primary action button for creation activities"
      >
        <div style={{ border: "1px solid red", width: "50%" }}>
          Not resizable
        </div>
        <ResizableComponent defaultWidth="50%" maxWidth="75%" minWidth={200}>
          <div style={{ border: "1px solid green", width: "50%" }}>Hello</div>
        </ResizableComponent>
        <div style={{ border: "1px solid red", width: "50%" }}>
          Not resizable
        </div>
      </StoryItem>
    </>
  );
}
