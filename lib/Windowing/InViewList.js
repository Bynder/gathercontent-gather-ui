import React, { useContext } from 'react';
import { arrayOf, func, shape, number } from 'prop-types';
import range from 'lodash.range';
import intersection from 'lodash.intersection';
import { WindowingContext } from './WindowingProvider';

const calculateOffsetAndLength = (renderIndexes, acceptedRange) => {
  const endOfIndexesToRender = renderIndexes.offset + renderIndexes.length;
  const endOfAcceptedRangeOfIndexes =
    acceptedRange.offset + acceptedRange.length;

  const arrayOfRenderIndexes = range(
    renderIndexes.offset,
    endOfIndexesToRender
  );
  const arrayOfAcceptedIndexes = range(
    acceptedRange.offset,
    endOfAcceptedRangeOfIndexes
  );

  const intersectingIndexes = intersection(
    arrayOfRenderIndexes,
    arrayOfAcceptedIndexes
  );

  return {
    offset: arrayOfAcceptedIndexes.indexOf(intersectingIndexes[0]),
    length: intersectingIndexes.length
  };
};

function InViewList({ items, children, acceptedRange, index }) {
  const { renderIndexes, itemHeight } = useContext(WindowingContext);

  let { offset, length } = renderIndexes;

  if (acceptedRange) {
    const result = calculateOffsetAndLength(renderIndexes, acceptedRange);
    ({ offset, length } = result);
  }

  const sharedState = {
    itemsInView: items.slice(offset, offset + length)
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
