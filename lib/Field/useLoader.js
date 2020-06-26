import { useEffect, useRef, useState } from 'react';

export function useLoader(action, isInitiallyLoading = false) {
  const [isLoading, setIsLoading] = useState(isInitiallyLoading);

  const isMounted = useRef(true);

  useEffect(
    () => () => {
      isMounted.current = false;
    },
    []
  );

  const actionLoader = async e => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    await action(e);

    if (isMounted.current) {
      setIsLoading(false);
    }
  };

  return [isLoading, actionLoader];
}
