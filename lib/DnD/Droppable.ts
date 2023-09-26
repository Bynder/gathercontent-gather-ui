import { useDrop } from "react-dnd-cjs";
import { useContext } from "react";
import { DndContext } from "lib";
import { throttle } from "lodash";

function Droppable({
  children,
  acceptDragTypes,
  onDrop,
  canDropChecker,
  onHoverHandler,
  isOverOptions,
}: any) {
  const { setIsDragging }: any = useContext(DndContext);
  const [collected, defineDropRef] = useDrop({
    accept: acceptDragTypes,
    drop: (...args) => {
      setIsDragging(false);
      return onDrop(...args);
    },
    canDrop: canDropChecker,
    hover: throttle((item, monitor) => {
      if (monitor && monitor.getItem()) {
        onHoverHandler(item, monitor);
      }
    }, 150),
    collect: (monitor) => ({
      isOver: monitor.isOver(isOverOptions),
      canDrop: monitor.canDrop(),
      item: monitor.getItem(),
    }),
  });

  return children(collected, defineDropRef);
}

Droppable.defaultProps = {
  canDropChecker: () => true,
  isOverOptions: { shallow: false },
  onHoverHandler: () => {},
};

export { Droppable };
