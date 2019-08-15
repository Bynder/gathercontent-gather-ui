import React from 'react';
import { node, number, shape } from 'prop-types';

function InViewListItem({
  children,
  renderIndexes,
  index,
  baseStyle,
  itemHeight
}) {
  const top = (renderIndexes.start + index) * itemHeight;

  return (
    <div
      key={`${index}-id`}
      style={{ ...baseStyle, top: `${top}px`, float: 'left' }}
    >
      {children}
    </div>
  );
}

InViewListItem.propTypes = {
  children: node.isRequired,
  renderIndexes: shape({}).isRequired,
  index: number.isRequired,
  baseStyle: shape({}).isRequired,
  itemHeight: number.isRequired
};

export { InViewListItem };
