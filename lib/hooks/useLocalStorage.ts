import { useState } from "react";

export const useLocalStorage = (key: string, defaultValue: unknown) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      // Try and retrieve any previously recorded values
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }

      // Else, record the defaultValue and return it instead
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (error) {
      // Fallback to the defaultValue if we can't retrieve a previous value
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
