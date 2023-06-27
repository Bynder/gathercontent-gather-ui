import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const DropdownActionGroup = ({
  children,
  horizontal,
  className,
  bordered,
  collapse
}) => {
  const classNames = cx(`dropdown__action-group ${className}`, {
    'dropdown__action-group--horizontal': horizontal,
    'dropdown__action-group--bordered': bordered,
    'dropdown__action-group--collapse': collapse
  });
  return <div className={classNames}>{children}</div>;
};

DropdownActionGroup.propTypes = {
  horizontal: PropTypes.bool,
  bordered: PropTypes.bool,
  collapse: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

DropdownActionGroup.defaultProps = {
  horizontal: false,
  bordered: false,
  collapse: false,
  className: ''
};

export default DropdownActionGroup;
