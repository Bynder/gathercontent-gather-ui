import { useContext } from 'react';
import { SelectionContext, useObjectSelector } from '..';

export function useShiftSelect(id, ids, type) {
  const {
    selected,
    currentSelectedType,
    selectMultiple,
    deselectMultiple,
    lastInteracted,
    setLastInteracted
  } = useContext(SelectionContext);
  const { isSelected, handleClick } = useObjectSelector(id, type, [id]);

  const handleSelection = e => {
    setLastInteracted(id);
    if (!e.shiftKey || selected.length === 0 || id === lastInteracted) {
      handleClick(e);
    } else {
      const selectedIndex = ids.indexOf(id);
      const lastInteractedIndex = ids.indexOf(lastInteracted);
      const selectUp = lastInteractedIndex < selectedIndex;
      const sliceStart = selectUp ? lastInteractedIndex : selectedIndex;
      const sliceEnd = selectUp ? selectedIndex : lastInteractedIndex;

      const interactedIds = ids.slice(sliceStart, sliceEnd + 1);

      if (isSelected) {
        deselectMultiple(interactedIds);
      } else {
        selectMultiple(interactedIds, currentSelectedType);
      }
    }
  };

  return {
    handleSelection,
    isSelected,
    selected
  };
}
