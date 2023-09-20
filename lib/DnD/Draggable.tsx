import React, { useContext } from "react";
import { DragPreviewImage, useDrag } from "react-dnd-cjs";
import { getEmptyImage } from "react-dnd-html5-backend-cjs";
import { DndContext } from "./DndProvider";

function Draggable({
  children,
  preview,
  item,
  onBeginDrag,
  onEndDrag,
  canDragChecker,
}: any) {
  const { setIsDragging, setPreview }: any = useContext(DndContext);
  const [collect, defineDragRef, definePreviewRef] = useDrag({
    item,
    begin: (monitor) => {
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
    collect: (monitor) => ({
      itemType: monitor.getItemType(),
      isDragging: !!monitor.isDragging(),
    }),
    canDrag: canDragChecker,
  });

  return (
    <>
      {preview && (
        <DragPreviewImage
          // @ts-expect-error TS(2322): Type 'string | null' is not assignable to type 'st... Remove this comment to see the full error message
          src={getEmptyImage().getAttribute("src")}
          connect={definePreviewRef}
        />
      )}
      {children(collect, defineDragRef, definePreviewRef)}
    </>
  );
}

Draggable.defaultProps = {
  preview: null,
  onBeginDrag: () => {},
  onEndDrag: () => {},
  canDragChecker: () => true,
};

export { Draggable };
