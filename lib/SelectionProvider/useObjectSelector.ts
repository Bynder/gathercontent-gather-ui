import { useContext } from "react";
import { SelectionContext } from "./index";

export function useObjectSelector(
  id: any,
  type: any,
  idsToSelect: any,
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
    setIntendedToSelect,
  }: any = useContext(SelectionContext);

  const isSelected = selected.indexOf(id) !== -1;
  // @ts-expect-error TS(2554): Expected 0 arguments, but got 2.
  const isDisabled = isDisabledChecker(currentSelectedType, isSelected);
  const isHovered = intendedToSelect.indexOf(id) !== -1;

  const getIds = () => [...new Set([...idsToSelect])];

  const handleClick =
    idsToSelect.length > 1
      ? () =>
          isSelected
            ? deselectMultiple(getIds(), type)
            : selectMultiple(getIds(), type, data)
      : // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        () => updateSelected(idsToSelect[0], type, data[id]);

  const handleMouseEnter = () => setIntendedToSelect(idsToSelect);

  const handleMouseLeave = () =>
    setIntendedToSelect(
      intendedToSelect.filter((s: any) => idsToSelect.indexOf(s) === -1)
    );

  return {
    isSelected,
    handleClick: isDisabled ? () => {} : handleClick,
    isDisabled,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  };
}
