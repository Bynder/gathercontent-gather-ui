import { useContext } from 'react';
import { pick } from 'lodash';
import { SelectionContext, useObjectSelector } from '..';

export function useShiftSelect(id, ids, type, idsData = {}) {
  const {
    selected,
    currentSelectedType,
    selectMultiple,
    deselectMultiple,
    lastInteracted,
    setLastInteracted
  } = useContext(SelectionContext);
  const { isSelected, handleClick } = useObjectSelector(
    id,
    type,
    [id],
    () => false,
    pick(idsData, [id])
  );

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
      const interactedData = pick(idsData, interactedIds);

      if (isSelected) {
        deselectMultiple(interactedIds);
      } else {
        selectMultiple(interactedIds, currentSelectedType, interactedData);
      }
    }
  };

  return {
    handleSelection,
    isSelected,
    selected
  };
}
