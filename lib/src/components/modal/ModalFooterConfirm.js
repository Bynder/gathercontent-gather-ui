import React from 'react';
import { ButtonSecondary, ButtonTertiary } from 'lib';

export function ModalFooterConfirm({
  confirmText,
  tertiaryText,
  tertiaryOnClick,
  secondaryText,
  secondaryOnClick,
  disableSecondary
}) {
  return (
    <div className="react-modal-footer__confirm">
      <div className="react-modal-footer__confirm-text">{confirmText}</div>
      <div className="react-modal-footer__confirm-actions">
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
          disabled={disableSecondary}
        >
          {secondaryText}
        </ButtonSecondary>
      </div>
    </div>
  );
}
