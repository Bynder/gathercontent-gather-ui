import { useContext } from 'react';
import { SelectionContext } from './index';

export function useObjectSelector(
  id,
  type,
  idsToSelect,
  isDisabledChecker = () => false,
  data = {}
) {
  const {
    selected,
    selectMultiple,
    deselectMultiple,
    updateSelected,
    currentSelectedType,
    intendedToSelect,
    setIntendedToSelect
  } = useContext(SelectionContext);

  const isSelected = selected.indexOf(id) !== -1;
  const isDisabled = isDisabledChecker(currentSelectedType, isSelected);
  const isHovered = intendedToSelect.indexOf(id) !== -1;

  const getIds = () => [...new Set([...idsToSelect])];

  const handleClick =
    idsToSelect.length > 1
      ? () =>
          isSelected
            ? deselectMultiple(getIds(), type)
            : selectMultiple(getIds(), type, data)
      : () => updateSelected(idsToSelect[0], type, data[id]);

  const handleMouseEnter = () => setIntendedToSelect(idsToSelect);

  const handleMouseLeave = () =>
    setIntendedToSelect(
      intendedToSelect.filter(s => idsToSelect.indexOf(s) === -1)
    );

  return {
    isSelected,
    handleClick: isDisabled ? () => {} : handleClick,
    isDisabled,
    isHovered,
    handleMouseEnter,
    handleMouseLeave
  };
}
