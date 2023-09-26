import React from "react";
import { useSpring, animated } from "react-spring";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'd3-e... Remove this comment to see the full error message
import * as easings from "d3-ease";

export function SubHeader({
  children,
  className,
  animatableProperties,
  ...rest
}: any) {
  const props = useSpring({
    ...animatableProperties,
    config: {
      easing: easings.easeCubic,
      duration: 300,
    },
  });
  return (
    <animated.div
      className={`layout-subheader ${className}`}
      style={props}
      {...rest}
    >
      {children}
    </animated.div>
  );
}

SubHeader.defaultProps = {
  className: "",
  animatableProperties: {},
};
