import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const DropdownActionGroup = ({ children, horizontal }) => {
  const classNames = cx('dropdown__action-group', {
    'dropdown__action-group--horizontal': horizontal
  });
  return <div className={classNames}>{children}</div>;
};

DropdownActionGroup.propTypes = {
  horizontal: PropTypes.bool,
  children: PropTypes.node.isRequired
};

DropdownActionGroup.defaultProps = {
  horizontal: false
};

export default DropdownActionGroup;
