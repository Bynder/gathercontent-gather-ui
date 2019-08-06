import React, { useContext } from 'react';
import { func, string, node } from 'prop-types';
import { DragPreviewImage, useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DndContext } from './DndProvider';

function Draggable({ children, type, preview }) {
  const { setIsDragging, setPreview } = useContext(DndContext);
  const [collect, defineDragRef, definePreviewRef] = useDrag({
    item: { type },
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
  type: string.isRequired,
  preview: node
};

Draggable.defaultProps = {
  preview: null
};

export { Draggable };
