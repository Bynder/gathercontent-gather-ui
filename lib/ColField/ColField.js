import React from 'react';
import { useSpring, animated } from 'react-spring';
import cx from 'classnames';
import { shape, bool } from 'prop-types';
import { propTypes, defaultProps } from './common';
import ColFieldHeader from './ColFieldHeader';
import ColFieldLabel from './ColFieldLabel';
import ColFieldBody from './ColFieldBody';
import ColFieldFooter from './ColFieldFooter';
import ColFieldInstructions from './ColFieldInstructions';

function ColField({ children, className, visible, style, active, ...props }) {
  const animatedStyle = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: 100 }
  });

  const classes = cx(
    `col-field shadow border border-solid border-neutral-90 rounded relative transition-all, transition-ease duration-200 ${className}`,
    {
      'bg-white': active,
      'bg-neutral-98 hover:bg-white': !active
    }
  );

  return (
    <animated.div
      className={classes}
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
  visible: bool,
  active: bool
};

ColField.defaultProps = {
  ...defaultProps,
  style: {},
  visible: true,
  active: true
};

ColField.Header = ColFieldHeader;
ColField.Label = ColFieldLabel;
ColField.Body = ColFieldBody;
ColField.Footer = ColFieldFooter;
ColField.Instructions = ColFieldInstructions;

export default ColField;
