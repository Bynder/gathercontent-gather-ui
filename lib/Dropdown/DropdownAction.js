import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { GATHER_UI_DROPDOWN } from './index';

const DropdownAction = ({ children, action, danger }, context) => {
  const { toggleShowContent, showContent } = context[GATHER_UI_DROPDOWN];
  const classNames = cx('dropdown__action', {
    'dropdown__action--danger': danger
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

DropdownAction.contextTypes = {
  GATHER_UI_DROPDOWN: PropTypes.shape().isRequired
};

DropdownAction.defaultProps = {
  danger: false
};

DropdownAction.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.func.isRequired,
  danger: PropTypes.bool
};

export default DropdownAction;
