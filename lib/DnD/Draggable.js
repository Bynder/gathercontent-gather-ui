import React, { useContext } from 'react';
import { func, shape, node } from 'prop-types';
import { DragPreviewImage, useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DndContext } from './DndProvider';

function Draggable({ children, preview, item }) {
  const { setIsDragging, setPreview } = useContext(DndContext);
  const [collect, defineDragRef, definePreviewRef] = useDrag({
    item,
    begin: () => {
      setPreview(preview);
      setIsDragging(true);
    },
    end: () => setIsDragging(false),
    collect: monitor => ({
      itemType: monitor.getItemType(),
      isDragging: !!monitor.isDragging()
    })
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
  preview: node
};

Draggable.defaultProps = {
  preview: null
};

export { Draggable };
