import React, { useContext, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';
import { WorkflowStepContext } from './workflowStepProvider';

export function WorkflowStepMeta({ children, actions }) {
  const { showActions, openDropdowns } = useContext(WorkflowStepContext);
  const hiddenActionsRef = useRef(null);

  const keepActionsShown = showActions || openDropdowns.length;

  const maxWidth = hiddenActionsRef.current
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
