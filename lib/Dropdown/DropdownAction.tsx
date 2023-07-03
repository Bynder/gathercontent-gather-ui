import React, { HTMLAttributes, useContext } from "react";
import cx from "classnames";
import { DropdownContext } from "./DropdownProvider";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  action: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {};
  actionKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  danger?: boolean;
  noBackground?: boolean;
  iconOnly?: boolean;
  selected?: boolean;
  hideAfterPerformingAction?: boolean;
  isSubmit?: boolean;
  overflow?: boolean;
  disabled?: boolean;
  toggleShowContent?: () => {};
  showContent?: boolean;
  value?: string;
}

function DropdownAction({
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
  showContent: showContentProp,
  toggleShowContent: toggleShowContentProp,
  ...props
}: Props) {
  const {
    toggleShowContent = toggleShowContentProp,
    showContent = showContentProp,
  } = useContext(DropdownContext) || {};

  const classNames = cx(`dropdown__action ${className}`, {
    "dropdown__action--danger": danger,
    "dropdown__action--noBg": noBackground,
    "dropdown__action--icon-only": iconOnly,
    "dropdown__action--selected": selected,
    "dropdown__action--overflow": overflow,
    "dropdown__action--disabled": disabled,
  });

  const sharedProps = {
    tabIndex: showContent ? 0 : -1,
    className: classNames,
    type: isSubmit ? "submit" : "button",
    value,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      action(e);
      if (hideAfterPerformingAction && toggleShowContent) {
        toggleShowContent(null);
      }
    },
    onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (actionKeyDown) actionKeyDown(e);
    },
    disabled,
    ...props,
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
}

DropdownAction.defaultProps = {
  danger: false,
  noBackground: false,
  selected: false,
  iconOnly: false,
  className: "",
  isSubmit: false,
  overflow: false,
  hideAfterPerformingAction: true,
  disabled: false,
  toggleShowContent: () => {},
  showContent: false,
  value: null,
};

export default DropdownAction;
