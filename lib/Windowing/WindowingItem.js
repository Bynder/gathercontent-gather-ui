import React, { useContext } from 'react';
import { bool, node, number } from 'prop-types';
import { WindowingContext } from './Windowing';

function WindowingItem({ children, index, style }) {
  const { itemHeight, baseItemStyle } = useContext(
    WindowingContext
  );
    
  return (
    <div
      key={`${index}-id`}
      style={{
        ...style,
        ...baseItemStyle,
        top: `${index * itemHeight}px`
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
