import React, { useContext } from 'react';
import { func } from 'prop-types';
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
  children: func.isRequired
};

export { WindowingList };
