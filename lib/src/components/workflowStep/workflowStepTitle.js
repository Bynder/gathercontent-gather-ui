import React, { useContext } from 'react';
import cx from 'classnames';
import { StatusIndicatorCircle } from '../../modules/statusIndicatorCircle/statusIndicatorCircle';
import { WorkflowStepContext } from './workflowStepProvider';

export function WorkflowStepTitle({ children, statusColour }) {
  const { isActive, showActions } = useContext(WorkflowStepContext);
  const titleClassName = cx('workflow-step__title', {
    'text-neutral-primary': !isActive && !showActions,
    'text-neutral-20': !isActive && showActions
  });

  return (
    <div className={titleClassName}>
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
