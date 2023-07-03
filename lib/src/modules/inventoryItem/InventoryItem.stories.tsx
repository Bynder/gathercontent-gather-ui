import React from "react";
import HTML5Backend from "react-dnd-html5-backend-cjs";
import {
  InventoryItem as InventoryItemComponent,
  Draggable,
  DndProvider,
} from "lib";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";

export default {
  title: "GUI/Inventory Item",
  component: InventoryItemComponent,
  args: {
    disabled: false,
  },
};

export const InventoryItem = (args: any) => {
  return (
    <StoryItem
      title="InventoryItemComponent"
      description="An InventoryItemComponent thats draggable"
    >
      <DndProvider backend={HTML5Backend}>
        <Draggable
          item={{ type: "story" }}
          preview={<InventoryItemComponent iconName="text" isPreview />}
        >
          {({ isDragging }: any, dragRef: any) => (
            <div ref={dragRef}>
              <InventoryItemComponent
                tooltipText="Text field"
                iconName="text"
                isPreviewActive={isDragging}
                tooltipClassName="inline-block"
                // @ts-expect-error
                disabled={args.disabled}
              />
            </div>
          )}
        </Draggable>
      </DndProvider>
    </StoryItem>
  );
};
