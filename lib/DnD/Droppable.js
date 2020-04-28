import { useDrop } from 'react-dnd';
import { func, node } from 'prop-types';
import { useContext } from 'react';
import { DndContext } from 'lib';

function Droppable({
  children,
  acceptDragTypes,
  onDrop,
  canDropChecker,
  onHoverHandler
}) {
  const { setIsDragging } = useContext(DndContext);
  const [collected, defineDropRef] = useDrop({
    accept: acceptDragTypes,
    drop: (...args) => {
      setIsDragging(false);
      return onDrop(...args);
    },
    canDrop: canDropChecker,
    hover: onHoverHandler,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      item: monitor.getItem()
    })
  });

  return children(collected, defineDropRef);
}

Droppable.propTypes = {
  children: func.isRequired,
  onDrop: func.isRequired,
  acceptDragTypes: node.isRequired,
  canDropChecker: func
};

Droppable.defaultProps = {
  canDropChecker: () => true
};

export { Droppable };
