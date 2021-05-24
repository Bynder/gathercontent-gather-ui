import React, { useContext, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';
import { WorkflowStepContext } from './workflowStepProvider';

export function WorkflowStepMeta({ children, actions }) {
  const { showActions } = useContext(WorkflowStepContext);
  const hiddenActionsRef = useRef(null);

  const maxWidth = hiddenActionsRef.current
    ? `${hiddenActionsRef.current.offsetWidth}px`
    : '0px';

  const actionStyles = useSpring({
    maxWidth: showActions ? maxWidth : '0px',
    opacity: showActions ? 1 : 0,
    config: { duration: showActions ? 100 : 300, easing: easings.easeCubic }
  });

  return (
    <div className="workflow-step__meta-container">
      <div className="invisible workflow-step__actions" ref={hiddenActionsRef}>
        {actions}
      </div>
      <div className="workflow-step__meta">{children}</div>
      <animated.div style={actionStyles}>{actions}</animated.div>
    </div>
  );
}
