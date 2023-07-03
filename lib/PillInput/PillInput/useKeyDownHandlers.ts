import { useEffect } from 'react';

function useKeyDownHandlers({
  pills,
  addPills,
  removeLastPill,
  inputValue,
  setInputValue,
  inputRef
}: any) {
  useEffect(() => {
    const handleEnter = (event: any) => {
      event.preventDefault();
      addPills([inputValue]);
      setInputValue('');
    };

    const handleBackSpace = () => {
      if (inputValue) {
        return;
      }

      removeLastPill();
    };

    const handleKeyDown = (event: any) => {
      if (event.target !== inputRef.current) {
        return;
      }

      const ENTER_KEY_CODE = 13;
      const BACKSPACE_KEY_CODE = 8;

      if (event.keyCode === ENTER_KEY_CODE) {
        handleEnter(event);
      }

      if (event.keyCode === BACKSPACE_KEY_CODE) {
        handleBackSpace();
      }
    };

    if (!inputRef) {
      return () => {};
    }

    const KEYDOWN_EVENT = 'keydown';
    document.addEventListener(KEYDOWN_EVENT, handleKeyDown);
    return () => document.removeEventListener(KEYDOWN_EVENT, handleKeyDown);
  }, [inputRef.current, inputValue, pills]);
}

export { useKeyDownHandlers };
