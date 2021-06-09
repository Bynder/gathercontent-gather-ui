import React, { useContext } from 'react';
import { StatusIndicatorCircle } from '../../modules/statusIndicatorCircle/statusIndicatorCircle';
import { WorkflowStepContext } from './workflowStepProvider';

export function WorkflowStepTitle({ children, statusColour }) {
  const { isActive, showActions } = useContext(WorkflowStepContext);

  return (
    <div className="workflow-step__title">
      <div className="workflow-step__status">
        <StatusIndicatorCircle
          color={statusColour}
          thickBorder={showActions}
          solid={isActive}
        />
      </div>
      {children}
    </div>
  );
}
