import React from 'react';
import { node } from 'prop-types';
import { useDragLayer } from 'react-dnd-cjs';
import { getItemStyles } from './helpers/getItemStyles';

function DragPreview({
  children
}: any) {
  const { initialOffset, currentOffset, clientOffset } = useDragLayer(
    monitor => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
      clientOffset: monitor.getClientOffset()
    })
  );

  return (
    <div
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 100,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }}
    >
      <div style={getItemStyles(initialOffset, currentOffset, clientOffset)}>
        {children}
      </div>
    </div>
  );
}

DragPreview.propTypes = {
  children: node.isRequired
};

export { DragPreview };
