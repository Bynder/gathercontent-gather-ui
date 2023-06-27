import React, { useContext } from 'react';
import { WorkflowStepContext } from './workflowStepProvider';

export function WorkflowStepActions({
  children
}: any) {
  // @ts-expect-error TS(2339): Property 'openDropdowns' does not exist on type '{... Remove this comment to see the full error message
  const { openDropdowns, setOpenDropdowns } = useContext(WorkflowStepContext);

  const onActionToggle = ({
    type,
    payload
  }: any) => {
    if (type === 'ACTIVE' && !openDropdowns.includes(payload.id)) {
      setOpenDropdowns((prevOpenDropdowns: any) => [...prevOpenDropdowns, payload.id]);
    }

    if (type === 'UNACTIVE') {
      setOpenDropdowns((prevOpenDropdowns: any) => prevOpenDropdowns.filter((d: any) => d !== payload.id)
      );
    }
  };
  return (
    <div className="workflow-step__actions">{children(onActionToggle)}</div>
  );
}
