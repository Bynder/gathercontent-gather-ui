import { useState } from "react";

export const useLocalStorage = (key: string, defaultValue: unknown) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const previousValue = localStorage.getItem(key);

      if (previousValue === null) {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }

      return JSON.parse(previousValue);
    } catch (error) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  const setLocalStorageStateValue = (value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
    setLocalStorageValue(value);
  };

  return [localStorageValue, setLocalStorageStateValue];
};
