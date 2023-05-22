import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DropdownContext } from './DropdownProvider';

const DropdownAction = ({
  children,
  action,
  actionKeyDown,
  danger,
  className,
  noBackground,
  iconOnly,
  isSubmit,
  hideAfterPerformingAction,
  selected,
  overflow,
  disabled,
  value,
  ...props
}) => {
  const {
    toggleShowContent = props.toggleShowContent,
    showContent = props.showContent
  } = useContext(DropdownContext) || {};
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
    value,
    onClick: e => {
      action(e);
      if (hideAfterPerformingAction) {
        toggleShowContent();
      }
    },
    onKeyDown: e => {
      if (actionKeyDown) actionKeyDown(e);
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

DropdownAction.defaultProps = {
  danger: false,
  noBackground: false,
  selected: false,
  iconOnly: false,
  className: '',
  isSubmit: false,
  overflow: false,
  hideAfterPerformingAction: true,
  disabled: false,
  toggleShowContent: () => {},
  showContent: false,
  value: null
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
  disabled: PropTypes.bool,
  toggleShowContent: PropTypes.func,
  showContent: PropTypes.bool,
  value: PropTypes.string
};

export default DropdownAction;
