import React, { useContext } from 'react';
import cx from 'classnames';
import {
  WorkflowStepContext,
  WorkflowStepProvider
} from './workflowStepProvider';
import { WorkflowStepBody } from './workflowStepBody';
import { WorkflowStepActions } from './workflowStepActions';
import { WorkflowStepHeader } from './workflowStepHeader';
import { WorkflowStepTitle } from './workflowStepTitle';
import { WorkflowStepMeta } from './workflowStepMeta';
import { WorkflowStepCollapsibleBody } from './workflowStepCollapsibleBody';

export function WorkflowStep({ showBody, isActive, ...props }) {
  return (
    <WorkflowStepProvider showBody={showBody} isActive={isActive}>
      <WorkflowStepInner {...props} />
    </WorkflowStepProvider>
  );
}

const WorkflowStepInner = ({ children, onClick, className }) => {
  const { showBody, setShowActions, isActive, showActions } = useContext(
    WorkflowStepContext
  );

  const workflowStepClassName = cx(`workflow-step`, className, {
    'is-active pseudo-left-border-blue-2px relative': isActive,
    'bg-neutral-98': (showBody && !isActive) || showActions,
    'cursor-pointer': onClick && !showBody && !isActive
  });

  const onStepClick = e => {
    if (e.target.className && e.target.className.includes) {
      const hasClickedStep = e.target.className.includes('workflow-step');
      if (!showBody && onClick && hasClickedStep) {
        onClick(e);
      }
    }
  };

  const handleKeyUp = e => {
    if (e.keyCode === 32) {
      onStepClick(e);
    }
  };

  return (
    <div
      onMouseEnter={() => {
        setShowActions(true);
      }}
      onMouseLeave={() => {
        setShowActions(false);
      }}
      onFocus={() => {
        setShowActions(true);
      }}
      onBlur={() => {
        setShowActions(false);
      }}
      onKeyUp={handleKeyUp}
      onClick={onStepClick}
      className={workflowStepClassName}
      tabIndex={!isActive && !showBody ? 0 : -1}
      role="menuitem"
    >
      {children}
    </div>
  );
};

WorkflowStep.Body = WorkflowStepBody;
WorkflowStep.CollapsibleBody = WorkflowStepCollapsibleBody;
WorkflowStep.Actions = WorkflowStepActions;
WorkflowStep.Meta = WorkflowStepMeta;
WorkflowStep.Header = WorkflowStepHeader;
WorkflowStep.Title = WorkflowStepTitle;
