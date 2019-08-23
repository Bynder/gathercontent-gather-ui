import React, { useContext } from 'react';
import { bool, node, number } from 'prop-types';
import { WindowingContext } from './WindowingProvider';

function InViewListItem({ children, index, relativeToRenderIndexes }) {
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
      style={{ ...baseItemStyle, top: `${top}px`, float: 'left' }}
    >
      {children}
    </div>
  );
}

InViewListItem.propTypes = {
  children: node.isRequired,
  index: number.isRequired,
  relativeToRenderIndexes: bool
};

InViewListItem.defaultProps = {
  relativeToRenderIndexes: true
};

export { InViewListItem };
