import { useState, useEffect } from 'react';

function useDeferredList({
  listLength,
  initialItemCount,
  numberOfItemsToLoad
}) {
  const [itemCount, setItemCount] = useState(initialItemCount);

  const setItemCountWithinLimits = count => {
    setItemCount(Math.min(listLength, count));
  };

  const loadItems = () => {
    setItemCountWithinLimits(itemCount + numberOfItemsToLoad);
  };

  useEffect(() => {
    if (initialItemCount > itemCount) {
      setItemCountWithinLimits(initialItemCount);
    }
  }, [initialItemCount]);

  return {
    loadItems,
    itemCount
  };
}

export { useDeferredList };
