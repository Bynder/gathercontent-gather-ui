import React from 'react';
import { func, bool, string } from 'prop-types';
import { DragPreviewImage, useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

function Draggable({ children, type, disablePreview }) {
  const [collect, defineDragRef, definePreviewRef] = useDrag({
    item: { type },
    collect: monitor => ({
      itemType: monitor.getItemType(),
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <>
      {disablePreview && (
        <DragPreviewImage
          src={getEmptyImage().getAttribute('src')}
          connect={definePreviewRef}
        />
      )}
      {children(collect, defineDragRef, definePreviewRef)}
    </>
  );
}

Draggable.propTypes = {
  children: func.isRequired,
  type: string.isRequired,
  disablePreview: bool
};

Draggable.defaultProps = {
  disablePreview: false
};

export { Draggable };
