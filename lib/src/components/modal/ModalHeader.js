import React from 'react';
import { CloseButton } from '../../modules/closeButton/CloseButton';

export function ModalHeader({ headerText, onCloseClick, navigationItems }) {
  return (
    <div className="modal-header">
      <div className="modal-header__text">{headerText}</div>
      {navigationItems}
      <CloseButton onClick={onCloseClick} />
    </div>
  );
}

ModalHeader.defaultProps = {
  navigationItems: () => {}
};
