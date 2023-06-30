import React, { useContext, useEffect, useRef, useState } from "react";
import { useTransition, animated } from "react-spring";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'd3-e... Remove this comment to see the full error message
import * as easings from "d3-ease";
import { WorkflowStepContext } from "./workflowStepProvider";
import { useSize } from "../../../helpers/useSize";

export function WorkflowStepCollapsibleBody({ children }: any) {
  const { showBody }: any = useContext(WorkflowStepContext);
  const bodyRef = useRef(null);
  const size = useSize(bodyRef);
  const [bodyIsFullyOpen, setBodyIsFullyOpen] = useState(false);

  useEffect(() => {
    if (!showBody) {
      setBodyIsFullyOpen(false);
    }
  }, [showBody]);

  const onTransitionEnd = () => {
    if (showBody) {
      setBodyIsFullyOpen(true);
    }
  };

  const transitions = useTransition(showBody, null, {
    from: {
      opacity: 0,
      maxHeight: "0px",
    },
    enter: {
      opacity: 1,
      // @ts-expect-error
      maxHeight: `${size ? size.height : 0}px`,
    },
    leave: {
      opacity: 0,
      maxHeight: "0px",
    },
    config: {
      easing: easings.easeCubic,
      duration: 300,
    },
    onDestroyed: onTransitionEnd,
  });

  return (
    <div
      className={`relative ${
        bodyIsFullyOpen ? "overflow-y-visible" : "overflow-y-hidden"
      }`}
    >
      <div ref={bodyRef} className="invisible absolute workflow-step__body">
        {children}
      </div>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              className="workflow-step__body"
              key={key}
              style={{
                ...props,
                // @ts-expect-error
                maxHeight: bodyIsFullyOpen ? size.height : props.maxHeight,
              }}
            >
              {children}
            </animated.div>
          )
      )}
    </div>
  );
}
