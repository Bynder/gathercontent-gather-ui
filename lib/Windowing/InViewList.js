import React, { useContext } from 'react';
import { arrayOf, func, shape, number } from 'prop-types';
import { WindowingContext } from './WindowingProvider';

function InViewList({ items, children, acceptedRange, index, ...rest }) {
  const { renderIndexes, itemHeight } = useContext(WindowingContext);

  const { offset, length } = renderIndexes;

  const sharedState = {
    itemsInView: length > 0 ? items.slice(offset, offset + length) : []
  };

  return (
    <div
      className="windowing-list"
      style={{
        top: `${index * itemHeight}px`,
        height: `${items.length * itemHeight}px`
      }}
      {...rest}
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
