import React, { useContext, useEffect, useState } from 'react';
import { func, node, number } from 'prop-types';
import { WindowingContext } from './WindowingProvider';

function InViewList({ items, offset, children, itemHeight }) {
  const [renderIndexes, setRenderIndexes] = useState({});
  const { scrollTop, height } = useContext(WindowingContext);

  const subtractFromStartIndex = index =>
    index - offset <= 0 ? 0 : index - offset;

  const addToEndIndex = index =>
    index + offset >= items.length ? items.length : index + offset;

  const getRenderIndexes = () => {
    const startBoundary = scrollTop;
    const endBoundary = startBoundary + height;

    const startIndex = Math.round(startBoundary / itemHeight);
    const endIndex = Math.round(endBoundary / itemHeight);

    const startWithOffset = subtractFromStartIndex(startIndex);
    const endWithOffset = addToEndIndex(endIndex);

    setRenderIndexes({
      start: startWithOffset,
      end: endWithOffset
    });
  };

  useEffect(() => {
    getRenderIndexes();
  }, [height, scrollTop]);

  const sharedState = {
    renderIndexes,
    baseStyle: {
      position: 'absolute',
      width: `100%`,
      height: `${itemHeight}px`
    },
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
  itemHeight: number.isRequired,
  items: node.isRequired,
  children: func.isRequired,
  offset: number
};

InViewList.defaultProps = {
  offset: 10
};

export { InViewList };
