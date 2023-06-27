import React, { useState } from 'react';
import { node, bool } from 'prop-types';

export const FinderPanelLayoutContext = React.createContext({});

const FinderPanelLayoutProvider = ({
  children,
  fixed
}: any) => {
  const [headerHeight, setHeaderHeight] = useState(null);
  const sharedState = {
    headerHeight,
    setHeaderHeight,
    fixed
  };

  return (
    <FinderPanelLayoutContext.Provider value={sharedState}>
      {children}
    </FinderPanelLayoutContext.Provider>
  );
};

FinderPanelLayoutProvider.propTypes = {
  children: node.isRequired,
  fixed: bool
};

FinderPanelLayoutProvider.defaultProps = {
  fixed: false
};

export default FinderPanelLayoutProvider;
