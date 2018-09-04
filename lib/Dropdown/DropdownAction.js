import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { GATHER_UI_DROPDOWN } from './index';

const DropdownAction = (
  { children, action, danger, className, noBackground, iconOnly, isSubmit },
  context
) => {
  const { toggleShowContent, showContent } = context[GATHER_UI_DROPDOWN];
  const classNames = cx(`dropdown__action ${className}`, {
    'dropdown__action--danger': danger,
    'dropdown__action--noBg': noBackground,
    'dropdown__action--icon-only': iconOnly
  });

  return (
    <button
      tabIndex={showContent ? 0 : -1}
      className={classNames}
      onClick={e => {
        action(e);
        toggleShowContent();
      }}
      type={isSubmit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

DropdownAction.contextTypes = {
  GATHER_UI_DROPDOWN: PropTypes.shape().isRequired
};

DropdownAction.defaultProps = {
  danger: false,
  noBackground: false,
  iconOnly: false,
  className: '',
  isSubmit: false
};

DropdownAction.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.func.isRequired,
  className: PropTypes.string,
  noBackground: PropTypes.bool,
  iconOnly: PropTypes.bool,
  danger: PropTypes.bool,
  isSubmit: PropTypes.bool
};

export default DropdownAction;
