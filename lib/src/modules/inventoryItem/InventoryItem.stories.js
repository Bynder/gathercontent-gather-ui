import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend-cjs';
import {
  InventoryItem as InventoryItemComponent,
  Draggable,
  DndProvider
} from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'src/Inventory Item',
  component: InventoryItemComponent,
  args: {
    disabled: false
  }
};

export const InventoryItem = args => {
  return (
    <StoryItem
      title="InventoryItemComponent"
      description="An InventoryItemComponent thats draggable"
    >
      <DndProvider backend={HTML5Backend}>
        <Draggable
          item={{ type: 'story' }}
          preview={<InventoryItemComponent iconName="text" isPreview />}
        >
          {({ isDragging }, dragRef) => (
            <div ref={dragRef}>
              <InventoryItemComponent
                tooltipText="Text field"
                iconName="text"
                isPreviewActive={isDragging}
                tooltipClassName="inline-block"
                disabled={args.disabled}
              />
            </div>
          )}
        </Draggable>
      </DndProvider>
    </StoryItem>
  );
};
