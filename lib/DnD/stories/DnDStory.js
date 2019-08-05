import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { storiesOf } from '@storybook/react';
import { ItemRow, Draggable, DragPreview } from '../../index';
import StatusIndicator from '../../StatusIndicator';

const stories = storiesOf('Components', module);

stories.add('Drag and Drop', () => (
  <DndProvider backend={HTML5Backend}>
    <Draggable type="item" disablePreview>
      {({ isDragging, itemType }, dragRef) => (
        <>
          {isDragging && (
            <DragPreview>
              <div style={{ maxWidth: '300px' }}>
                <ItemRow bordered>
                  <ItemRow.Name>
                    <StatusIndicator
                      color="red"
                      className="h-margin-right-half"
                    />
                    1 {itemType}
                  </ItemRow.Name>
                </ItemRow>
              </div>
            </DragPreview>
          )}

          <div ref={dragRef}>
            <ItemRow
              bordered
              indicator={<StatusIndicator color="red" />}
              style={{
                opacity: isDragging ? '.5' : '1'
              }}
            >
              <ItemRow.Name>
                <StatusIndicator color="red" className="h-margin-right-half" />1
              </ItemRow.Name>
            </ItemRow>
          </div>
        </>
      )}
    </Draggable>
  </DndProvider>
));
