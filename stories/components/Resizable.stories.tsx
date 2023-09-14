import React from "react";
import { Resizeable as ResizableComponent } from "../../lib/Resizeable";

import StoryItem from "../styleguide/StoryItem";

export default {
  title: "GUI/Resizeable",
  component: ResizableComponent,
};

export function Resizeable() {
  return (
    <>
      <StoryItem
        title="Vertically split resizeable element"
        description="So you could have a split-pane or resizeable horizontal menu"
      >
        <div
          style={{
            display: "flex",
            flex: "1",
            minHeight: "0",
            border: "1px solid red",
          }}
        >
          <ResizableComponent
            defaultWidth="240px"
            maxWidth="33.33%"
            minWidth="240px"
          >
            <div
              style={{
                width: "400px",
                flexShrink: "0",
              }}
            >
              Hello
            </div>
          </ResizableComponent>
          <div
            style={{
              padding: "20px",
              width: "100%",
              minWidth: "0",
              flexDirection: "column",
              display: " flex !important",
            }}
          >
            How are you?
          </div>
        </div>
      </StoryItem>

      <StoryItem
        title="Single resizeable element"
        description="Could be used to reveal a before and after of two images"
      >
        <div style={{ border: "1px solid red", width: "50%" }}>
          Not resizeable
        </div>
        <ResizableComponent defaultWidth="50%" maxWidth="75%" minWidth="200px">
          <div style={{ border: "1px solid green", width: "50%" }}>Hello</div>
        </ResizableComponent>
        <div style={{ border: "1px solid red", width: "50%" }}>
          Not resizeable
        </div>
      </StoryItem>
    </>
  );
}
