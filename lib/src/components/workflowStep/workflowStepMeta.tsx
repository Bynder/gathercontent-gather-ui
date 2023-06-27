import React, { useContext, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'd3-e... Remove this comment to see the full error message
import * as easings from 'd3-ease';
import { WorkflowStepContext } from './workflowStepProvider';

export function WorkflowStepMeta({
  children,
  actions
}: any) {
  // @ts-expect-error TS(2339): Property 'showActions' does not exist on type '{}'... Remove this comment to see the full error message
  const { showActions, openDropdowns } = useContext(WorkflowStepContext);
  const hiddenActionsRef = useRef(null);

  const keepActionsShown = showActions || openDropdowns.length;

  const maxWidth = hiddenActionsRef.current
    // @ts-expect-error TS(2339): Property 'offsetWidth' does not exist on type 'nev... Remove this comment to see the full error message
    ? `${hiddenActionsRef.current.offsetWidth}px`
    : '0px';

  const actionStyles = useSpring({
    width: keepActionsShown ? maxWidth : '0px',
    opacity: keepActionsShown ? 1 : 0,
    config: {
      duration: keepActionsShown ? 100 : 300,
      easing: easings.easeCubic
    }
  });

  return (
    <div className="workflow-step__meta-container">
      <div className="invisible absolute" ref={hiddenActionsRef}>
        {actions}
      </div>
      <div className="workflow-step__meta">{children}</div>
      <animated.div className="relative flex items-center" style={actionStyles}>
        <div
          style={{
            // @ts-expect-error TS(2339): Property 'offsetWidth' does not exist on type 'nev... Remove this comment to see the full error message
            width: hiddenActionsRef.current?.offsetWidth
          }}
          className="absolute l-0"
        >
          {actions}
        </div>
      </animated.div>
    </div>
  );
}
