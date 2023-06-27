import React from 'react';
import { shape, number, node } from 'prop-types';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';

export function AnimatedWrapper({
  animatableProperties,
  duration,
  children,
  ...rest
}) {
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
  animatableProperties: shape(),
  duration: number,
  children: node.isRequired
};

AnimatedWrapper.defaultProps = {
  animatableProperties: {},
  duration: 300
};
