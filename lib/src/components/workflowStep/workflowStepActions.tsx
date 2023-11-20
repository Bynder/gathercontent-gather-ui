import React, { useContext } from "react";
import { WorkflowStepContext } from "./workflowStepProvider";

export function WorkflowStepActions({ children }: any) {
  const { openDropdowns, setOpenDropdowns }: any =
    useContext(WorkflowStepContext);

  const onActionToggle = ({ type, payload }: any) => {
    if (type === "ACTIVE" && !openDropdowns.includes(payload.id)) {
      setOpenDropdowns((prevOpenDropdowns: any) => [
        ...prevOpenDropdowns,
        payload.id,
      ]);
    }

    if (type === "UNACTIVE") {
      setOpenDropdowns((prevOpenDropdowns: any) =>
        prevOpenDropdowns.filter((d: any) => d !== payload.id)
      );
    }
  };
  return (
    <div className="gui-workflow-step__actions">{children(onActionToggle)}</div>
  );
}
