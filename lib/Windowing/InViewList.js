import React, { useContext } from 'react';
import { arrayOf, func, shape, number } from 'prop-types';
import { WindowingContext } from './WindowingProvider';

const getLengthOfIndexesToRender = (
  renderIndexes,
  acceptedRange,
  totalLength
) => {
  const endOfIndexesToRender = renderIndexes.offset + renderIndexes.length;
  const endOfAcceptedRangeOfIndexes =
    acceptedRange.offset + acceptedRange.length;

  if (endOfIndexesToRender === endOfAcceptedRangeOfIndexes) {
    return endOfIndexesToRender;
  }

  if (endOfIndexesToRender > endOfAcceptedRangeOfIndexes) {
    return totalLength;
  }

  if (endOfIndexesToRender < endOfAcceptedRangeOfIndexes) {
    return endOfIndexesToRender - renderIndexes.offset;
  }

  return -1;
};

function InViewList({ items, children, acceptedRange, index }) {
  const { renderIndexes, itemHeight } = useContext(WindowingContext);

  let { offset, length } = renderIndexes;

  if (acceptedRange) {
    offset = renderIndexes.offset - acceptedRange.offset;
    length = getLengthOfIndexesToRender(
      renderIndexes,
      acceptedRange,
      items.length
    );
  }

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
  children: func.isRequired,
  acceptedRange: shape({
    offset: number,
    length: number
  }),
  index: number
};

InViewList.defaultProps = {
  acceptedRange: null,
  index: null
};

export { InViewList };
