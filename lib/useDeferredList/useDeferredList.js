import { useState, useEffect } from 'react';

function useDeferredList({ list, initialItemCount, numberOfItemsToLoad }) {
  const [deferredList, setDeferredList] = useState([]);
  const [itemCount, setItemCount] = useState(initialItemCount);

  const loadItems = () => {
    if (itemCount === list.length) {
      return;
    }

    setItemCount(Math.min(list.length, itemCount + numberOfItemsToLoad));
  };

  useEffect(() => {
    setDeferredList(list.slice(0, itemCount));
  }, [itemCount]);

  return {
    deferredList,
    loadItems
  };
}

export { useDeferredList };
