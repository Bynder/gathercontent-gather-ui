import { useDrop } from 'react-dnd';
import { func, string } from 'prop-types';

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
  acceptDragTypes: string.isRequired,
  canDropChecker: func
};

Droppable.defaultProps = {
  onHover: () => {},
  canDropChecker: () => true
};

export { Droppable };
