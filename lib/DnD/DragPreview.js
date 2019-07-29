import React from 'react';
import { oneOfType, node, string } from 'prop-types';
import { useDragLayer } from 'react-dnd';
import { getItemStyles } from './helpers/getItemStyles';

function DragPreview({ children }) {
  const { initialOffset, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }));

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
      <div style={getItemStyles(initialOffset, currentOffset)}>{children}</div>
    </div>
  );
}

DragPreview.propTypes = {
  children: oneOfType([node, string]).isRequired
};

export { DragPreview };
