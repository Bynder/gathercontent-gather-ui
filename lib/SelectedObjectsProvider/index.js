import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ShortcutTrigger from '../ShortcutTrigger';

const SelectedObjectsContext = React.createContext({});

const SelectedObjectsProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  const [lastInteracted, setLastInteracted] = useState(null);
  const [currentSelectedType, setCurrentSelectedType] = useState(null);

  const updateSelected = (id, type) => {
    let newSelected;

    if (selected.indexOf(id) === -1) {
      newSelected = selected.concat(id);
    } else {
      newSelected = selected.filter(existingId => existingId !== id);
    }
    setLastInteracted(id);
    setSelected(newSelected);

    if (!newSelected.length) {
      setCurrentSelectedType(null);
    } else {
      setCurrentSelectedType(type);
    }
  };

  const clear = () => {
    setSelected([]);
    setLastInteracted(null);
    setCurrentSelectedType(null);
  };

  const selectMultiple = (ids, type, id = null) => {
    setSelected([...new Set(selected.concat(ids))]);
    setLastInteracted(id);
    setCurrentSelectedType(type);
  };

  const deselectMultiple = (ids, id = null) => {
    const newSelected = selected.filter(
      selectedId => !ids.includes(selectedId)
    );
    setSelected(newSelected);
    setLastInteracted(id);

    if (!newSelected.length) {
      setCurrentSelectedType(null);
    }
  };

  const sharedState = {
    selected,
    lastInteracted,
    updateSelected,
    clear,
    selectMultiple,
    deselectMultiple,
    currentSelectedType
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
