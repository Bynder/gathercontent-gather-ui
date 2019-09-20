import React, { useContext } from 'react';
import { arrayOf, func, shape, number } from 'prop-types';
import { WindowingContext } from './Windowing';

function WindowingList({ children, ...rest }) {
  const { renderIndexes, itemHeight, windowingItems } = useContext(
    WindowingContext
  );

  const { offset, length } = renderIndexes;

  const sharedState = {
    itemsInView: length > 0 ? windowingItems.slice(offset, offset + length) : []
  };

  return (
    <div
      className="windowing-list"
      style={{
        height: `${windowingItems.length * itemHeight}px`
      }}
      {...rest}
    >
      {children(sharedState)}
    </div>
  );
}

WindowingList.propTypes = {
  items: arrayOf(shape({})).isRequired,
  children: func.isRequired,
  acceptedRange: shape({
    offset: number,
    length: number
  }),
  index: number
};

WindowingList.defaultProps = {
  acceptedRange: null,
  index: null
};

export { WindowingList };
