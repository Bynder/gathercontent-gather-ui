import React, { useState } from 'react';
import { node, arrayOf, oneOfType, string, number } from 'prop-types';
import { omit } from 'lodash';
import ShortcutTrigger from '../ShortcutTrigger';

const SelectionContext = React.createContext({});

const SelectionProvider = ({ children, initialSelected }) => {
  const [selected, setSelected] = useState(initialSelected);
  const [intendedToSelect, setIntendedToSelect] = useState([]);
  const [currentSelectedType, setCurrentSelectedType] = useState(null);
  const [lastInteracted, setLastInteracted] = useState(null);
  const [selectedData, setSelectedData] = useState({});

  const updateSelected = (id, type, data = {}) => {
    let newSelected;
    if (selected.indexOf(id) === -1) {
      newSelected = selected.concat(id);
      setSelectedData({
        ...selectedData,
        [id]: data
      });
    } else {
      newSelected = selected.filter(existingId => existingId !== id);
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

  const selectMultiple = (ids, type, data = {}) => {
    setSelected([...new Set(selected.concat(ids))]);
    setSelectedData({ ...selectedData, ...data });
    setCurrentSelectedType(type);
  };

  const deselectMultiple = ids => {
    const newSelected = selected.filter(
      selectedId => !ids.includes(selectedId)
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
    setLastInteracted
  };
  return (
    <SelectionContext.Provider value={sharedState}>
      {children}
      <ShortcutTrigger shortcutKey="Escape" onShortcutTrigger={clear} />
    </SelectionContext.Provider>
  );
};

SelectionProvider.propTypes = {
  children: node.isRequired,
  initialSelected: arrayOf(oneOfType([string, number]))
};

SelectionProvider.defaultProps = {
  initialSelected: []
};

export { SelectionProvider, SelectionContext };
