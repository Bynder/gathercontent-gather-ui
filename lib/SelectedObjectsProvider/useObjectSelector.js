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
    currentSelectedType,
    intendedToSelect,
    setIntendedToSelect
  } = useContext(SelectedObjectsContext);

  const isSelected = selected.indexOf(id) !== -1;
  const isDisabled = disabledCallback(currentSelectedType, isSelected);
  const isHovered = intendedToSelect.indexOf(id) !== -1;

  const getIds = (additionalIds = []) => [
    ...new Set([id, ...idsToSelect, ...additionalIds])
  ];

  const handleClick =
    idsToSelect.length > 1
      ? () =>
          isSelected
            ? deselectMultiple(getIds(), type)
            : selectMultiple(getIds(), type)
      : () => updateSelected(idsToSelect[0]);

  const handleMouseEnter = () => setIntendedToSelect(idsToSelect);

  return {
    isSelected,
    handleClick: isDisabled ? () => {} : handleClick,
    isDisabled,
    isHovered,
    handleMouseEnter
  };
}
