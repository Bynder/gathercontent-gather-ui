import { useContext } from 'react';
import { SelectedObjectsContext } from './index';

export function useObjectSelector(
  id,
  type,
  idsToSelect,
  disabledCallback = () => false
) {
  const {
    selected,
    selectMultiple,
    deselectMultiple,
    updateSelected,
    currentSelectedType
  } = useContext(SelectedObjectsContext);

  const isSelected = selected.indexOf(id) !== -1;
  const isDisabled = disabledCallback(currentSelectedType, isSelected);

  const handleClick = idsToSelect
    ? () =>
        isSelected
          ? deselectMultiple([...new Set([id, ...idsToSelect])], type)
          : selectMultiple([...new Set([id, ...idsToSelect])], type)
    : () => updateSelected(id);

  return {
    isSelected,
    handleClick: isDisabled ? () => {} : handleClick,
    isDisabled
  };
}
