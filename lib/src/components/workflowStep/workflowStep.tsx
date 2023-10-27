import React, { useContext } from "react";
import cx from "classnames";
import {
  WorkflowStepContext,
  WorkflowStepProvider,
} from "./workflowStepProvider";
import { WorkflowStepBody } from "./workflowStepBody";
import { WorkflowStepActions } from "./workflowStepActions";
import { WorkflowStepHeader } from "./workflowStepHeader";
import { WorkflowStepTitle } from "./workflowStepTitle";
import { WorkflowStepMeta } from "./workflowStepMeta";
import { WorkflowStepCollapsibleBody } from "./workflowStepCollapsibleBody";

function WorkflowStepInner({ children, onClick, className }: any) {
  const { showBody, setShowActions, isActive, showActions }: any =
    useContext(WorkflowStepContext);

  const workflowStepClassName = cx(`gui-workflow-step`, className, {
    "gui-is-active gui-pseudo-left-border-blue-2px relative": isActive,
    "bg-neutral-98": (showBody && !isActive) || (showActions && !isActive),
    "cursor-pointer": onClick && !showBody && !isActive,
  });

  const onStepClick = (e: any) => {
    if (e.target.className && e.target.className.includes) {
      const hasClickedStep = e.target.className.includes("workflow-step");
      const hasClickedMeta = !!e.target.closest(".workflow-step__meta");

      if (!showBody && onClick && (hasClickedStep || hasClickedMeta)) {
        onClick(e);
      }
    }
  };

  const handleKeyUp = (e: any) => {
    e.stopPropagation();
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
}

export function WorkflowStep({ showBody, isActive, ...props }: any) {
  return (
    <WorkflowStepProvider showBody={showBody} isActive={isActive}>
      <WorkflowStepInner {...props} />
    </WorkflowStepProvider>
  );
}

WorkflowStep.Body = WorkflowStepBody;
WorkflowStep.CollapsibleBody = WorkflowStepCollapsibleBody;
WorkflowStep.Actions = WorkflowStepActions;
WorkflowStep.Meta = WorkflowStepMeta;
WorkflowStep.Header = WorkflowStepHeader;
WorkflowStep.Title = WorkflowStepTitle;
