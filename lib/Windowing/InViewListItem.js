import React from 'react';
import { node, number, shape } from 'prop-types';

function InViewListItem({ children, renderIndexes, index, baseStyle }) {
  const top = (renderIndexes.start + index) * 50;

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
  baseStyle: shape({}).isRequired
};

export { InViewListItem };
