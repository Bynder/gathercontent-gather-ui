import React from 'react';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';
import { node, string, shape } from 'prop-types';

export function SubHeader({
  children,
  className,
  animatableProperties,
  ...rest
}) {
  const props = useSpring({
    ...animatableProperties,
    config: {
      easing: easings.easeCubic,
      duration: 300
    }
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

SubHeader.propTypes = {
  children: node.isRequired,
  className: string,
  animatableProperties: shape({})
};

SubHeader.defaultProps = {
  className: '',
  animatableProperties: {}
};
