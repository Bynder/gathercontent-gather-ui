import React, { useContext } from 'react';
import { WorkflowStepContext } from './workflowStepProvider';

export function WorkflowStepActions({ children }) {
  const { openDropdowns, setOpenDropdowns } = useContext(WorkflowStepContext);

  const onActionToggle = ({ type, payload }) => {
    if (type === 'ACTIVE' && !openDropdowns.includes(payload.id)) {
      setOpenDropdowns(prevOpenDropdowns => [...prevOpenDropdowns, payload.id]);
    }

    if (type === 'UNACTIVE') {
      setOpenDropdowns(prevOpenDropdowns =>
        prevOpenDropdowns.filter(d => d !== payload.id)
      );
    }
  };
  return (
    <div className="workflow-step__actions">{children(onActionToggle)}</div>
  );
}
