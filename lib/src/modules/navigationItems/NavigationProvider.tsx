import React, { createContext, useState, useEffect } from "react";

const NavigationContext = createContext({});

function NavigationProvider({ children, onNav, defaultTabId }: any) {
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

NavigationProvider.defaultProps = {};

export { NavigationProvider, NavigationContext };
