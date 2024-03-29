import { useEffect, useRef, useState } from 'react';

export function useLoader(action: any, isInitiallyLoading = false) {
  const [isLoading, setIsLoading] = useState(isInitiallyLoading);

  const isMounted = useRef(true);

  useEffect(
    () => () => {
      isMounted.current = false;
    },
    []
  );

  const actionLoader = async (e: any) => {
    if (e.preventDefault) {
      e.preventDefault();
    }

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    await action(e, isLoading);

    if (isMounted.current) {
      setIsLoading(false);
    }
  };

  return [isLoading, actionLoader];
}
