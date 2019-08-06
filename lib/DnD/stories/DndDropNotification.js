import React, { useContext } from 'react';
import { bool, node } from 'prop-types';
import { action } from '@storybook/addon-actions';
import { Droppable } from '../Droppable';
import Notification from '../../Notification';
import { DndContext } from '../DndProvider';
import { ItemRow } from '../../ItemRow';

const Message = ({ children, canDrop, isOver, isDragging }) => {
  let level = 'info';

  if (isDragging && canDrop) {
    level = 'warning';
  }

  if (isDragging && isOver) {
    level = 'success';
  }

  if (isDragging && isOver && !canDrop) {
    level = 'danger';
  }

  return (
    <Notification level={level} style={{ height: '200px' }}>
      {children}
    </Notification>
  );
};

Message.propTypes = {
  children: node.isRequired,
  canDrop: bool.isRequired,
  isOver: bool.isRequired,
  isDragging: bool.isRequired
};

function DndDropNotification() {
  const { isDragging, setFailurePreview } = useContext(DndContext);

  const failurePreview = (
    <div style={{ maxWidth: '300px' }}>
      <ItemRow bordered>
        <ItemRow.Name>You cannot drag folders into here!</ItemRow.Name>
      </ItemRow>
    </div>
  );

  return (
    <Droppable
      acceptDragTypes={['item', 'folder']}
      onDrop={action('something was dropped')}
      canDropChecker={({ type }, monitor) => {
        const typeIsItem = type === 'item';

        if (!typeIsItem) {
          setFailurePreview(failurePreview);
        }

        if (!monitor.isOver()) {
          setFailurePreview(null);
        }

        return typeIsItem;
      }}
    >
      {({ canDrop, isOver }, defineDropRef) => (
        <div ref={defineDropRef} className="h-margin-top">
          <Message isDragging={isDragging} isOver={isOver} canDrop={canDrop}>
            {!isDragging && 'Start by dragging items in here.'}
            {isDragging && !isOver && 'Drag it here.'}
            {isDragging && isOver && canDrop && 'Drop it!'}
            {isDragging && isOver && !canDrop && 'You cannot drag here!'}
          </Message>
        </div>
      )}
    </Droppable>
  );
}

export { DndDropNotification };
