import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ShortcutTrigger from '../ShortcutTrigger';

const SelectedObjectsContext = React.createContext({});

const SelectedObjectsProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  const [intendedToSelect, setIntendedToSelect] = useState([]);
  const [currentSelectedType, setCurrentSelectedType] = useState(null);

  const updateSelected = (id, type) => {
    let newSelected;

    if (selected.indexOf(id) === -1) {
      newSelected = selected.concat(id);
    } else {
      newSelected = selected.filter(existingId => existingId !== id);
    }
    setSelected(newSelected);

    if (!newSelected.length) {
      setCurrentSelectedType(null);
    } else {
      setCurrentSelectedType(type);
    }
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
    <SelectedObjectsContext.Provider value={sharedState}>
      {children}
      <ShortcutTrigger shortcutKey="Escape" onShortcutTrigger={clear} />
    </SelectedObjectsContext.Provider>
  );
};

SelectedObjectsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { SelectedObjectsProvider, SelectedObjectsContext };
