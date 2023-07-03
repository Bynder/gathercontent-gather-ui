import React, { useState } from 'react';
import { node, arrayOf, oneOfType, string, number } from 'prop-types';
import { omit } from 'lodash';
import ShortcutTrigger from '../ShortcutTrigger';

const SelectionContext = React.createContext({});

function SelectionProvider({
  children,
  initialSelected
}: any) {
  const [selected, setSelected] = useState(initialSelected);
  const [intendedToSelect, setIntendedToSelect] = useState([]);
  const [currentSelectedType, setCurrentSelectedType] = useState(null);
  const [lastInteracted, setLastInteracted] = useState(null);
  const [selectedData, setSelectedData] = useState({});

  const updateSelectedData = (data = {}) => {
    setSelectedData({
      ...selectedData,
      ...data
    });
  };

  const updateSelected = (id: any, type: any, data = {}) => {
    let newSelected;
    if (selected.indexOf(id) === -1) {
      newSelected = selected.concat(id);
      setSelectedData({
        ...selectedData,
        [id]: data
      });
    } else {
      newSelected = selected.filter((existingId: any) => existingId !== id);
      setSelectedData(omit(selectedData, [id]));
    }

    if (!newSelected.length) {
      setCurrentSelectedType(null);
    } else if (!selected.length && newSelected.length) {
      setCurrentSelectedType(type);
    }

    setSelected(newSelected);
  };

  const clear = () => {
    setSelected([]);
    setSelectedData({});
    setCurrentSelectedType(null);
  };

  const selectMultiple = (ids: any, type: any, data = {}) => {
    setSelected([...new Set(selected.concat(ids))]);
    setSelectedData({ ...selectedData, ...data });
    setCurrentSelectedType(type);
  };

  const deselectMultiple = (ids: any) => {
    const newSelected = selected.filter(
      (selectedId: any) => !ids.includes(selectedId)
    );
    setSelected(newSelected);
    setSelectedData(omit(selectedData, [ids]));
    if (!newSelected.length) {
      setCurrentSelectedType(null);
    }
  };

  const sharedState = {
    selected,
    selectedData,
    updateSelected,
    clear,
    selectMultiple,
    deselectMultiple,
    currentSelectedType,
    setIntendedToSelect,
    intendedToSelect,
    lastInteracted,
    setLastInteracted,
    updateSelectedData
  };
  return (
    <SelectionContext.Provider value={sharedState}>
      {children}
      <ShortcutTrigger shortcutKey="Escape" onShortcutTrigger={clear} />
    </SelectionContext.Provider>
  );
}

SelectionProvider.propTypes = {
  children: node.isRequired,
  initialSelected: arrayOf(oneOfType([string, number]))
};

SelectionProvider.defaultProps = {
  initialSelected: []
};

export { SelectionProvider, SelectionContext };
