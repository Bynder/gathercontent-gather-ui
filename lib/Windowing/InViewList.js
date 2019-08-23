import React, { useContext } from 'react';
import { arrayOf, func, shape } from 'prop-types';
import { WindowingContext } from './WindowingProvider';

const getLength = (renderIndexes, acceptedRange, totalLength) => {
  if (renderIndexes.end === acceptedRange.end) {
    return renderIndexes.end;
  }

  if (renderIndexes.end > acceptedRange.end) {
    return totalLength;
  }

  if (renderIndexes.end < acceptedRange.end) {
    return renderIndexes.end - renderIndexes.start;
  }

  return -1;
};

function InViewList({ items, children, acceptedRange, index }) {
  const { renderIndexes, itemHeight } = useContext(WindowingContext);

  const offset = renderIndexes.start - acceptedRange.start;
  const length = getLength(renderIndexes, acceptedRange, items.length, offset);

  const sharedState = {
    itemsInView:
      offset + length > 0
        ? items.slice(Math.max(offset, 0), offset + length)
        : []
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: `${index * itemHeight}px`,
        width: '100%',
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
