import React, { useState } from 'react';
import { node, arrayOf, oneOfType, string, number } from 'prop-types';
import ShortcutTrigger from '../ShortcutTrigger';

const SelectionContext = React.createContext({});

const SelectionProvider = ({ children, initialSelected }) => {
  const [selected, setSelected] = useState(initialSelected);
  const [intendedToSelect, setIntendedToSelect] = useState([]);
  const [currentSelectedType, setCurrentSelectedType] = useState(null);

  const updateSelected = (id, type) => {
    let newSelected;

    if (selected.indexOf(id) === -1) {
      newSelected = selected.concat(id);
    } else {
      newSelected = selected.filter(existingId => existingId !== id);
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
    setCurrentSelectedType(null);
  };

  const selectMultiple = (ids, type) => {
    setSelected([...new Set(selected.concat(ids))]);
    setCurrentSelectedType(type);
  };

  const deselectMultiple = ids => {
    const newSelected = selected.filter(
      selectedId => !ids.includes(selectedId)
    );
    setSelected(newSelected);

    if (!newSelected.length) {
      setCurrentSelectedType(null);
    }
  };

  const sharedState = {
    selected,
    updateSelected,
    clear,
    selectMultiple,
    deselectMultiple,
    currentSelectedType,
    setIntendedToSelect,
    intendedToSelect
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
