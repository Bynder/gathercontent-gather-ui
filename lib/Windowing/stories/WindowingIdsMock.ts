import { useState } from 'react';

function WindowingIdsMock({ children, allWindowingIds }) {
  const [allIds, setAllIds] = useState(allWindowingIds);

  const addIds = (ids, index) =>
    setAllIds([...allIds.slice(0, index), ...ids, ...allIds.slice(index)]);

  const removeIds = (offset, length) =>
    setAllIds([
      ...allIds.slice(0, offset),
      ...allIds.slice(offset + length, allIds.length)
    ]);

  return children({
    allWindowingIds: allIds,
    addIds,
    removeIds
  });
}

export { WindowingIdsMock };
