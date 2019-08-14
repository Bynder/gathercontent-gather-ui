import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SelectedObjectsContext = React.createContext({});

const SelectedObjectsProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  const [lastInteracted, setLastInteracted] = useState(null);

  const updateSelected = id => {
    if (selected.indexOf(id) === -1) {
      setSelected(selected.concat(id));
    } else {
      setSelected(selected.filter(existingId => existingId !== id));
    }
    setLastInteracted(id);
  };

  const clear = () => {
    setSelected([]);
    setLastInteracted(null);
  };

  const selectMultiple = (ids, id = null) => {
    setSelected([...new Set(selected.concat(ids))]);
    setLastInteracted(id);
  };

  const deselectMultiple = (ids, id = null) => {
    setSelected(selected.filter(selectedId => !ids.includes(selectedId)));
    setLastInteracted(id);
  };

  const sharedState = {
    selected,
    lastInteracted,
    updateSelected,
    clear,
    selectMultiple,
    deselectMultiple
  };
  return (
    <SelectedObjectsContext.Provider value={sharedState}>
      {children}
    </SelectedObjectsContext.Provider>
  );
};

SelectedObjectsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { SelectedObjectsProvider, SelectedObjectsContext };
