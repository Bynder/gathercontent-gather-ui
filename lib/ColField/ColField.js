import React from 'react';
import { useSpring, animated } from 'react-spring';
import cx from 'classnames';
import { shape, bool, string } from 'prop-types';
import { propTypes, defaultProps } from './common';
import ColFieldHeader from './ColFieldHeader';
import ColFieldLabel from './ColFieldLabel';
import ColFieldBody from './ColFieldBody';
import ColFieldFooter from './ColFieldFooter';
import ColFieldInstructions from './ColFieldInstructions';

const statuses = {
  active: 'ACTIVE',
  added: 'ADDED',
  deleted: 'DELETED',
  movedUp: 'MOVED_UP',
  movedDown: 'MOVED_DOWN',
  unchanged: 'UNCHANGED'
};

function ColField({
  children,
  className,
  visible,
  style,
  status,
  isSelected,
  isHovered,
  ...props
}) {
  const animatedStyle = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: 100 }
  });

  const classes = cx(
    `col-field border-solid rounded relative transition-all, transition-ease duration-200 ${className}`,
    {
      'bg-white border shadow': status === statuses.active,
      'border-neutral-90': status === statuses.active && !isHovered,
      'bg-neutral-98 border hover:bg-white border-neutral-90 hover:shadow':
        status === statuses.unchanged,
      'border-2 border-green-primary bg-white': status === statuses.added,
      'border-2 border-red-primary bg-white': status === statuses.deleted,
      'border-2 border-purple-primary bg-white':
        status === statuses.movedDown || status === statuses.movedUp,
      'col-field-selected': isSelected,
      'border-blue-primary': isHovered
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
  status: string,
  isSelected: bool
};

ColField.defaultProps = {
  ...defaultProps,
  style: {},
  visible: true,
  status: statuses.active,
  isSelected: false
};

ColField.Header = ColFieldHeader;
ColField.Label = ColFieldLabel;
ColField.Body = ColFieldBody;
ColField.Footer = ColFieldFooter;
ColField.Instructions = ColFieldInstructions;
ColField.statuses = statuses;

export default ColField;
