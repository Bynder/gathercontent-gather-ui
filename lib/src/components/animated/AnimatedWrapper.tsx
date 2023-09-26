import React from "react";
import { useSpring, animated } from "react-spring";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'd3-e... Remove this comment to see the full error message
import * as easings from "d3-ease";

export function AnimatedWrapper({
  animatableProperties,
  duration,
  children,
  ...rest
}: any) {
  const springStyle = useSpring({
    ...animatableProperties,
    config: {
      easing: easings.easeCubic,
      duration,
    },
  });

  return (
    <animated.div style={springStyle} {...rest}>
      {children}
    </animated.div>
  );
}

AnimatedWrapper.defaultProps = {
  animatableProperties: {},
  duration: 300,
};
