import React, { useContext } from 'react';
import { node, number } from 'prop-types';
import { WindowingContext } from './WindowingProvider';

function InViewListItem({ children, index }) {
  const { renderIndexes, itemHeight, baseItemStyle } = useContext(
    WindowingContext
  );
  const top = (renderIndexes.start + index) * itemHeight;

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
  index: number.isRequired
};

export { InViewListItem };
