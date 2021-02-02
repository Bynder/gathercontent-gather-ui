import React from 'react';
import { ButtonSecondary, ButtonTertiary } from 'lib';

export function ModalFooterConfirm({
  confirmText,
  tertiaryText,
  tertiaryOnClick,
  secondaryText,
  secondaryOnClick
}) {
  return (
    <div className="modal-footer__confirm">
      <div className="modal-footer__confirm-text">{confirmText}</div>
      <div className="modal-footer__confirm-actions">
        <ButtonTertiary
          size={ButtonTertiary.sizes.sm}
          onClick={tertiaryOnClick}
          className="mr-2"
        >
          {tertiaryText}
        </ButtonTertiary>
        <ButtonSecondary
          size={ButtonSecondary.sizes.sm}
          onClick={secondaryOnClick}
        >
          {secondaryText}
        </ButtonSecondary>
        }
      </div>
    </div>
  );
}
