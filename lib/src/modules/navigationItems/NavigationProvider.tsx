import React, { createContext, useState, useEffect } from 'react';
import { node } from 'prop-types';

const NavigationContext = createContext({});

function NavigationProvider({ children, onNav, defaultTabId }) {
  const [activeTabId, setActiveTabId] = useState(defaultTabId);
  const sharedState = { onNav, activeTabId, setActiveTabId };

  useEffect(() => {
    onNav(activeTabId);
  }, [activeTabId]);

  return (
    <NavigationContext.Provider value={sharedState}>
      {children}
    </NavigationContext.Provider>
  );
}

NavigationProvider.propTypes = {
  children: node.isRequired
};

NavigationProvider.defaultProps = {};

export { NavigationProvider, NavigationContext };
