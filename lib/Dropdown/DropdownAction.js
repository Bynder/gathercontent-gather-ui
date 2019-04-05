import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { GATHER_UI_DROPDOWN } from './index';

const DropdownAction = (
  {
    children,
    action,
    danger,
    className,
    noBackground,
    iconOnly,
    isSubmit,
    hideAfterPerformingAction,
    selected,
    overflow,
    disabled
  },
  context
) => {
  const { toggleShowContent, showContent } = context[GATHER_UI_DROPDOWN];
  const classNames = cx(`dropdown__action ${className}`, {
    'dropdown__action--danger': danger,
    'dropdown__action--noBg': noBackground,
    'dropdown__action--icon-only': iconOnly,
    'dropdown__action--selected': selected,
    'dropdown__action--overflow': overflow,
    'dropdown__action--disabled': disabled
  });

  const sharedProps = {
    tabIndex: showContent ? 0 : -1,
    className: classNames,
    type: isSubmit ? 'submit' : 'button',
    onClick: e => {
      action(e);
      if (hideAfterPerformingAction) {
        toggleShowContent();
      }
    },
    disabled
  };

  return isSubmit ? (
    <button {...sharedProps} type="submit">
      {children}
    </button>
  ) : (
    <button {...sharedProps} type="button">
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
  selected: false,
  iconOnly: false,
  className: '',
  isSubmit: false,
  overflow: false,
  hideAfterPerformingAction: true,
  disabled: false
};

DropdownAction.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.func.isRequired,
  className: PropTypes.string,
  noBackground: PropTypes.bool,
  selected: PropTypes.bool,
  hideAfterPerformingAction: PropTypes.bool,
  iconOnly: PropTypes.bool,
  danger: PropTypes.bool,
  isSubmit: PropTypes.bool,
  overflow: PropTypes.bool,
  disabled: PropTypes.bool
};

export default DropdownAction;
