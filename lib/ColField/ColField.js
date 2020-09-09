import React from 'react';
import { useSpring, animated } from 'react-spring';
import { shape, bool } from 'prop-types';
import { propTypes, defaultProps } from './common';
import ColFieldHeader from './ColFieldHeader';
import ColFieldLabel from './ColFieldLabel';
import ColFieldBody from './ColFieldBody';
import ColFieldFooter from './ColFieldFooter';
import ColFieldInstructions from './ColFieldInstructions';

function ColField({ children, className, visible, style, ...props }) {
  const animatedStyle = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: 100 }
  });

  return (
    <animated.div
      className={`col-field shadow border border-solid border-neutral-90 rounded relative ${className}`}
      style={{
        ...animatedStyle,
        ...style
      }}
      {...props}
    >
      {children}
    </animated.div>
  );
}

ColField.propTypes = {
  ...propTypes,
  style: shape(),
  visible: bool
};

ColField.defaultProps = {
  ...defaultProps,
  style: {},
  visible: true
};

ColField.Header = ColFieldHeader;
ColField.Label = ColFieldLabel;
ColField.Body = ColFieldBody;
ColField.Footer = ColFieldFooter;
ColField.Instructions = ColFieldInstructions;

export default ColField;
