import React from 'react';
import { CloseButton } from '../../modules/closeButton/CloseButton';

export function ModalHeaderTabs({ children, headerText, onCloseClick }) {
  return (
    <div className="modal-header__tabs">
      <div className="modal-header__tabs-text">{headerText}</div>
      <div className="modal-header__tabs-tabs">{children}</div>
      <CloseButton onClick={onCloseClick} />
    </div>
  );
}
