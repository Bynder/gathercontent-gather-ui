import React from 'react';
import { node, bool } from 'prop-types';

export const FieldInStructureEditModeContext = React.createContext({});

export const FieldInStructureEditModeProvider = ({
  children,
  inStructureEditMode
}) => {
  const sharedState = {
    inStructureEditMode
  };

  return (
    <FieldInStructureEditModeContext.Provider value={sharedState}>
      {children}
    </FieldInStructureEditModeContext.Provider>
  );
};

FieldInStructureEditModeProvider.propTypes = {
  children: node.isRequired,
  inStructureEditMode: bool
};

FieldInStructureEditModeProvider.defaultProps = {
  inStructureEditMode: false
};
