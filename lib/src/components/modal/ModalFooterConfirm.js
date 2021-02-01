import React from 'react';

export function ModalFooterConfirm({ children, confirmText }) {
  return (
    <div className="modal-footer__confirm">
      <div className="modal-footer__confirm-text">{confirmText}</div>
      <div className="modal-footer__confirm-actions">{children}</div>
    </div>
  );
}
