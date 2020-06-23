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

  const actionLoader = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    await action();

    if (isMounted.current) {
      setIsLoading(false);
    }
  };

  return [isLoading, actionLoader];
}
