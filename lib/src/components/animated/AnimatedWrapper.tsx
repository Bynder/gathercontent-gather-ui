import React from 'react';
import { shape, number, node } from 'prop-types';
import { useSpring, animated } from 'react-spring';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'd3-e... Remove this comment to see the full error message
import * as easings from 'd3-ease';

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
      duration
    }
  });

  return (
    <animated.div style={springStyle} {...rest}>
      {children}
    </animated.div>
  );
}

AnimatedWrapper.propTypes = {
  // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
  animatableProperties: shape(),
  duration: number,
  children: node.isRequired
};

AnimatedWrapper.defaultProps = {
  animatableProperties: {},
  duration: 300
};
