import React from 'react';
import { CloseButton } from '../../modules/closeButton/CloseButton';

export function ModalHeaderTabs({ headerText, onCloseClick, navigationItems }) {
  return (
    <div className="modal-header__tabs">
      <div className="modal-header__tabs-text">{headerText}</div>
      {navigationItems}
      <CloseButton onClick={onCloseClick} />
    </div>
  );
}

ModalHeaderTabs.defaultProps = {
  navigationItems: () => {}
};
