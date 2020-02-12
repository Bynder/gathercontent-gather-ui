import { useDrop } from 'react-dnd';
import { func, node } from 'prop-types';

function Droppable({
  children,
  acceptDragTypes,
  onDrop,
  canDropChecker,
  onHoverHandler
}) {
  const [collected, defineDropRef] = useDrop({
    accept: acceptDragTypes,
    drop: onDrop,
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
