import React from 'react';
import { storiesOf } from '@storybook/react';
import HTML5Backend from 'react-dnd-html5-backend-cjs';
import { InventoryItem, Draggable, DndProvider } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import { boolean } from '@storybook/addon-knobs';

storiesOf('Components', module).add('InventoryItem', () => {
  const disabled = boolean('Disabled', false);

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
                disabled={disabled}
              />
            </div>
          )}
        </Draggable>
      </DndProvider>
    </StoryItem>
  );
});
