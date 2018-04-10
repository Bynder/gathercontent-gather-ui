import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { GATHER_UI_DROPDOWN } from './index';

const DropdownItem = ({ children, action, danger }, context) => {
  const { toggleShowContent, showContent } = context[GATHER_UI_DROPDOWN];
  const classNames = cx('dropdown__item-gc', {
    'dropdown__item-gc--danger': danger
  });

  return (
    <button
      tabIndex={showContent ? 0 : -1}
      className={classNames}
      onClick={() => {
        action();
        toggleShowContent();
      }}
    >
      {children}
    </button>
  );
};

DropdownItem.contextTypes = {
  GATHER_UI_DROPDOWN: PropTypes.shape().isRequired
};

DropdownItem.defaultProps = {
  danger: false
};

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.func.isRequired,
  danger: PropTypes.bool
};

export default DropdownItem;
