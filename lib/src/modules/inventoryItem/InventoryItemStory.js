import React from 'react';
import { storiesOf } from '@storybook/react';
import HTML5Backend from 'react-dnd-html5-backend';
import { InventoryItem, Draggable, DndProvider } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

storiesOf('Components', module).add('InventoryItem', () => {
  return (
    <StoryItem
      title="InventoryItem"
      description="An InventoryItem thats draggable"
    >
      <DndProvider backend={HTML5Backend}>
        <Draggable
          item={{ type: 'story' }}
          preview={<InventoryItem iconName="text" isPreview />}
        >
          {({ isDragging }, dragRef) => (
            <div ref={dragRef}>
              <InventoryItem
                tooltipText="Text field"
                iconName="text"
                isPreviewActive={isDragging}
                tooltipClassName="inline-block"
              />
            </div>
          )}
        </Draggable>
      </DndProvider>
    </StoryItem>
  );
});
