import { useDrop } from 'react-dnd';
import { func, node } from 'prop-types';

function Droppable({ children, acceptDragTypes, onDrop, canDropChecker }) {
  const [collected, defineDropRef] = useDrop({
    accept: acceptDragTypes,
    drop: onDrop,
    canDrop: canDropChecker,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
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
