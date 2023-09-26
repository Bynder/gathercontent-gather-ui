import React, { useState } from "react";

export const FinderPanelLayoutContext = React.createContext({});

function FinderPanelLayoutProvider({ children, fixed }: any) {
  const [headerHeight, setHeaderHeight] = useState(null);
  const sharedState = {
    headerHeight,
    setHeaderHeight,
    fixed,
  };

  return (
    <FinderPanelLayoutContext.Provider value={sharedState}>
      {children}
    </FinderPanelLayoutContext.Provider>
  );
}

FinderPanelLayoutProvider.defaultProps = {
  fixed: false,
};

export default FinderPanelLayoutProvider;
