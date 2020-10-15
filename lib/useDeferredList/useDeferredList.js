import { useState, useEffect } from 'react';

function useDeferredList({ list, initialItemCount, numberOfItemsToLoad }) {
  const [deferredList, setDeferredList] = useState([]);
  const [itemCount, setItemCount] = useState(initialItemCount);

  const setItemCountWithinLimits = count => {
    if (count === list.length) {
      return;
    }

    setItemCount(Math.min(list.length, count));
  };

  const loadItems = () => {
    setItemCountWithinLimits(itemCount + numberOfItemsToLoad);
  };

  useEffect(() => {
    setDeferredList(list.slice(0, itemCount));
  }, [itemCount]);

  useEffect(() => {
    if (initialItemCount > itemCount) {
      setItemCountWithinLimits(initialItemCount);
    }
  }, [initialItemCount]);

  return {
    deferredList,
    loadItems
  };
}

export { useDeferredList };
