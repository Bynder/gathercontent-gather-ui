import React, { useContext } from 'react';
import { func, shape, node } from 'prop-types';
import { DragPreviewImage, useDrag } from 'react-dnd-cjs';
import { getEmptyImage } from 'react-dnd-html5-backend-cjs';
import { DndContext } from './DndProvider';

function Draggable({
  children,
  preview,
  item,
  onBeginDrag,
  onEndDrag,
  canDragChecker
}) {
  const { setIsDragging, setPreview } = useContext(DndContext);
  const [collect, defineDragRef, definePreviewRef] = useDrag({
    item,
    begin: monitor => {
      setPreview(preview);
      setIsDragging(true);
      onBeginDrag(item, monitor);
    },
    end: (targetItem, monitor) => {
      if (!monitor.didDrop()) {
        onEndDrag(targetItem, monitor);
        setIsDragging(false);
      }
    },
    collect: monitor => ({
      itemType: monitor.getItemType(),
      isDragging: !!monitor.isDragging()
    }),
    canDrag: canDragChecker
  });

  return (
    <>
      {preview && (
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
  item: shape().isRequired,
  preview: node,
  onBeginDrag: func,
  onEndDrag: func,
  canDragChecker: func
};

Draggable.defaultProps = {
  preview: null,
  onBeginDrag: () => {},
  onEndDrag: () => {},
  canDragChecker: () => true
};

export { Draggable };
