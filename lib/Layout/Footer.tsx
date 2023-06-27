import React from 'react';
import { animated, useSpring } from 'react-spring';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'd3-e... Remove this comment to see the full error message
import * as easings from 'd3-ease';
import { shape, string } from 'prop-types';

export function Footer({
  children,
  className,
  animatableProperties,
  ...rest
}: any) {
  const props = useSpring({
    ...animatableProperties,
    config: {
      easing: easings.easeCubic,
      duration: 300
    }
  });

  return (
    <animated.footer
      className={`layout-footer ${className}`}
      style={props}
      {...rest}
    >
      {children}
    </animated.footer>
  );
}

Footer.propTypes = {
  className: string,
  animatableProperties: shape({})
};

Footer.defaultProps = {
  className: '',
  animatableProperties: {}
};
