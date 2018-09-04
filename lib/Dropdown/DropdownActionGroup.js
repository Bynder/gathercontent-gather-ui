import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const DropdownActionGroup = ({ children, horizontal, className }) => {
  const classNames = cx(`dropdown__action-group ${className}`, {
    'dropdown__action-group--horizontal': horizontal
  });
  return <div className={classNames}>{children}</div>;
};

DropdownActionGroup.propTypes = {
  horizontal: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

DropdownActionGroup.defaultProps = {
  horizontal: false,
  className: ''
};

export default DropdownActionGroup;
