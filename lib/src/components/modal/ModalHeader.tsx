import React from "react";
import { CloseButton } from "../../modules/closeButton/CloseButton";

export function ModalHeader({
  headerText,
  onCloseClick,
  navigationItems,
  children,
  className,
  ...rest
}: any) {
  return (
    <div className={`gui-react-modal-header ${className}`} {...rest}>
      <div className="gui-react-modal-header-inner">
        <div className="gui-react-modal-header__text">{headerText}</div>
        {children}
      </div>

      {navigationItems}
      <CloseButton onClick={onCloseClick} />
    </div>
  );
}

ModalHeader.defaultProps = {
  className: "",
};
