import React from 'react';
import { animated, useSpring } from 'react-spring';
import * as easings from 'd3-ease';
import { node, shape, string } from 'prop-types';

export function Footer({ children, className, animatableProperties, ...rest }) {
  const props = useSpring({
    ...animatableProperties,
    config: {
      easing: easings.easeCubic,
      duration: 300
    }
  });
  return (
    <animated.footer className={className} style={props} {...rest}>
      {children}
    </animated.footer>
  );
}

Footer.propTypes = {
  children: node.isRequired,
  className: string,
  animatableProperties: shape({})
};

Footer.defaultProps = {
  className: '',
  animatableProperties: {}
};
