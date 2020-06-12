import { useState } from 'react';

export function useLoader(action, isInitiallyLoading = false) {
  const [isLoading, setIsLoading] = useState(isInitiallyLoading);

  const actionLoader = () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    action(() => setIsLoading(false));
  };
  return [isLoading, actionLoader];
}
