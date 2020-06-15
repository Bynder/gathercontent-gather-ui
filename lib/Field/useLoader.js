import { useState } from 'react';

export function useLoader(action, isInitiallyLoading = false) {
  const [isLoading, setIsLoading] = useState(isInitiallyLoading);

  const actionLoader = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    await action();
    setIsLoading(false);
  };
  return [isLoading, actionLoader];
}
