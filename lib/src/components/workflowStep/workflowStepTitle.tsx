import React, { useContext } from "react";
import cx from "classnames";
import { StatusIndicatorCircle } from "../../modules/statusIndicatorCircle/statusIndicatorCircle";
import { WorkflowStepContext } from "./workflowStepProvider";

export function WorkflowStepTitle({ children, statusColour, approved }: any) {
  const { isActive, showActions, showBody }: any =
    useContext(WorkflowStepContext);
  const titleClassName = cx("gui-workflow-step__title", {
    "text-neutral-primary": !isActive && !showActions && !showBody,
    "text-neutral-20": (!isActive && showActions) || (!isActive && showBody),
  });

  return (
    <div className={titleClassName}>
      <div className="gui-workflow-step__status">
        <StatusIndicatorCircle
          color={statusColour}
          thickBorder={showActions || showBody}
          solid={isActive}
          icon={approved && "boldTickSmall"}
        />
      </div>
      {children}
    </div>
  );
}
