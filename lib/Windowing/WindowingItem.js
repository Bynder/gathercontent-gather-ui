import React, { useContext } from 'react';
import { bool, node, number } from 'prop-types';
import { WindowingContext } from './Windowing';

function WindowingItem({ children, index, relativeToRenderIndexes, style }) {
  const { renderIndexes, itemHeight, baseItemStyle } = useContext(
    WindowingContext
  );

  const chosenIndex = relativeToRenderIndexes
    ? renderIndexes.offset + index
    : index;
  const top = chosenIndex * itemHeight;

  return (
    <div
      key={`${index}-id`}
      style={{
        ...style,
        ...baseItemStyle,
        top: `${top}px`
      }}
      className="windowing-item"
    >
      {children}
    </div>
  );
}

WindowingItem.propTypes = {
  children: node.isRequired,
  index: number.isRequired,
  relativeToRenderIndexes: bool,
  style: node
};

WindowingItem.defaultProps = {
  relativeToRenderIndexes: true,
  style: {}
};

export { WindowingItem };
