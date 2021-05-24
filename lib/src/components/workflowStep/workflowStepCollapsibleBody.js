import React, { useContext, useRef } from 'react';
import { useTransition, animated } from 'react-spring';
import * as easings from 'd3-ease';
import { WorkflowStepContext } from './workflowStepProvider';

export function WorkflowStepCollapsibleBody({ children }) {
  const { showBody } = useContext(WorkflowStepContext);
  const bodyRef = useRef(null);

  const transitions = useTransition(showBody, null, {
    from: {
      opacity: 0,
      maxHeight: '0px'
    },
    enter: {
      opacity: 1,
      maxHeight: `${bodyRef.current ? bodyRef.current.offsetHeight : '0px'}`
    },
    leave: {
      opacity: 0,
      maxHeight: '0px'
    },
    config: {
      easing: easings.easeCubic,
      duration: 300
    }
  });

  return (
    <>
      <div ref={bodyRef} className="invisible absolute workflow-step__body">
        {children}
      </div>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              className="workflow-step__body"
              key={key}
              style={props}
            >
              {children}
            </animated.div>
          )
      )}
    </>
  );
}
