import React, { useContext } from 'react';
import { arrayOf, func, shape } from 'prop-types';
import { WindowingContext } from './WindowingProvider';

function InViewList({ items, children }) {
  const { renderIndexes, itemHeight } = useContext(WindowingContext);

  const sharedState = {
    renderIndexes,
    itemsInView: items.slice(renderIndexes.start, renderIndexes.end)
  };

  return (
    <div
      style={{
        height: `${items.length * itemHeight}px`
      }}
    >
      {children(sharedState)}
    </div>
  );
}

InViewList.propTypes = {
  items: arrayOf(shape({})).isRequired,
  children: func.isRequired
};

export { InViewList };
