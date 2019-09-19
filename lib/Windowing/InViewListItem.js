import React, { useContext } from 'react';
import { bool, node, number } from 'prop-types';
import { WindowingContext } from './WindowingProvider';

function InViewListItem({ children, index, relativeToRenderIndexes, style }) {
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

InViewListItem.propTypes = {
  children: node.isRequired,
  index: number.isRequired,
  relativeToRenderIndexes: bool,
  style: node
};

InViewListItem.defaultProps = {
  relativeToRenderIndexes: true,
  style: {}
};

export { InViewListItem };
