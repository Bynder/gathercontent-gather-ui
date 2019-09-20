import React, { useContext } from 'react';
import { arrayOf, func, shape, number } from 'prop-types';
import { WindowingContext } from './Windowing';

function WindowingList({ children, ...rest }) {
  const { itemHeight, allWindowingIds, inViewWindowingIds } = useContext(
    WindowingContext
  );

  return (
    <div
      className="windowing-list"
      style={{
        height: `${allWindowingIds.length * itemHeight}px`
      }}
      {...rest}
    >
      {children({ inViewWindowingIds })}
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
