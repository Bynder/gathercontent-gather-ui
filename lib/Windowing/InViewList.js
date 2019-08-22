import React, { useContext } from 'react';
import { arrayOf, func, shape } from 'prop-types';
import { WindowingContext } from './WindowingProvider';

function InViewList({ items, children, acceptedRange }) {
  const { renderIndexes, itemHeight } = useContext(WindowingContext);

  const a =
    acceptedRange.start >= renderIndexes.start &&
    acceptedRange.start <= renderIndexes.end;
  const b =
    acceptedRange.end >= renderIndexes.start &&
    acceptedRange.end <= renderIndexes.end;

  // renderIndexes is the entire list...but items is only a subset of data!

  const sharedState = {
    itemsInView:
      a || b ? items.slice(renderIndexes.start, renderIndexes.end) : []
  };

  console.log(renderIndexes, acceptedRange);
  console.log(a, b, sharedState.itemsInView);

  return (
    <div
      style={{
        position: 'absolute',
        top: `${acceptedRange.start * itemHeight}px`,
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
