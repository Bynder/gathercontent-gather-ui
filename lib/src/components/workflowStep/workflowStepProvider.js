import React, { createContext, useState } from 'react';

const WorkflowStepContext = createContext({});

function WorkflowStepProvider({ children, showBody, isActive }) {
  const [showActions, setShowActions] = useState(false);

  const sharedState = {
    showBody,
    showActions,
    setShowActions,
    isActive
  };

  return (
    <WorkflowStepContext.Provider value={sharedState}>
      {children}
    </WorkflowStepContext.Provider>
  );
}

export { WorkflowStepProvider, WorkflowStepContext };
